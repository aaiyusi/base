/**
 * 
 */
package com.samton.erp.api.orders.task;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.apache.commons.lang.StringUtils;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Service;

import com.samton.erp.api.orders.bean.entity.TErpSync;
import com.samton.erp.api.orders.constant.SyncConstant;
import com.samton.erp.api.orders.service.ISyncService;
import com.samton.erp.api.orders.thread.pool.CommonThreadPool;
import com.samton.erp.api.orders.util.Configuration;
import com.samton.erp.api.orders.util.OauthToken;
import com.samton.erp.api.orders.util.PostUtil;
import com.samton.erp.api.shop.constant.ShopConstant;
import com.samton.erp.common.util.aliexpress.CommonUtil;
import com.samton.platform.framework.context.SpringContext;
import com.samton.platform.framework.util.DateUtil;
import com.samton.platform.framework.util.http.HttpClientUtil;

/**
 *
 * @Description:获取Aliexpress订单同步任务
 * @author:     lijianzhou
 * @date:       2016年4月23日
 * Copyright (c) 2015, Samton. All rights reserved
 */
@Service("syncAliOrder")
public class AliOrderSyncTask {

	private final Logger  logger = Logger.getLogger(this.getClass());
	private final static Object lock = new Object();
	private final static Integer pageSize = 50;
	 
	 public void submit(Long shopId, Long enterpriseId, Date syncDate, ISyncService syncService){
		 CommonThreadPool.getThreadPool("同步Aliexpress店铺订单" + shopId).execute(new InnerOrderSyncTask(shopId, enterpriseId, syncDate, syncService));
	 }
	 
	 private class InnerOrderSyncTask implements Runnable{
			private Long shopId;
			private Long enterpriseId;
			private Date syncDate;
			private ISyncService syncService;
			private final Configuration config;
			public InnerOrderSyncTask(Long shopId, Long enterpriseId, Date syncDate, ISyncService syncService){
				 config = Configuration.getInstance();
				 this.shopId = shopId;
				 this.enterpriseId = enterpriseId;
				 this.syncDate = syncDate;
				 this.syncService = syncService;
			}
			@Override
			public void run() {
				synchronized (lock) {
					int page=1;
					long begin = System.currentTimeMillis();
					if(StringUtils.isNotBlank(OauthToken.getOauthToken(shopId))){
						while(true){
							try{
								//封装参数
			 					Map<String, String> params = new HashMap<String, String>();
			 					params.put("page", String.valueOf(page));
			 					params.put("pageSize", String.valueOf(pageSize));
			 					if(syncDate != null){
			 						params.put("createDateStart", DateUtil.transferDateToString("MM/dd/yyyy HH:mm:ss",syncDate));
			 					}
			 					params.put("createDateEnd", DateUtil.transferDateToString("MM/dd/yyyy HH:mm:ss",new Date()));
			 					params.put("access_token", OauthToken.getOauthToken(shopId));
			 					//构造签名因子：urlPath
								String urlPath = "param2/"+PostUtil.getVersion()+"/aliexpress.open/"+PostUtil.ALIEXPRESS_ORDER_LIST+"/"+config.getAppKey();
								//计算签名
								String sign = CommonUtil.signatureWithParamsAndUrlPath(urlPath, params, config.getAppSecret());
								params.put("_aop_signature", sign);
								config.log("----------Aliexpress----------同步订单任务签名="+sign+"----------");
								//构造请求路径
								String postPath = CommonUtil.getWholeUrl(PostUtil.ALIAPI_PATH + PostUtil.ALIEXPRESS_ORDER_LIST + "/" + config.getAppKey(), params);
								config.log("----------Aliexpress----------同步订单任务请求地址="+postPath+"----------");
								//请求服务器
								String result = HttpClientUtil.doGet(PostUtil.ALIAPI_PATH + PostUtil.ALIEXPRESS_ORDER_LIST + "/" + config.getAppKey(),params);//PostUtil.post(postPath);
								config.log("----------Aliexpress----------订单下载任务回调结果="+result+"----------");
								if(StringUtils.isBlank(result)) break;
								JSONObject jsonobj = JSONObject.fromObject(result);
								if(jsonobj.isEmpty()) break;
								long totalItem = jsonobj.getLong("totalItem");
								if(totalItem == 0) break;
								int index = jsonobj.toString().indexOf("orderList");
								if(index < 0) break;
								JSONArray data = jsonobj.getJSONArray("orderList");
								if(data.isEmpty()) break;
								//处理返回的结果
			 					handleHttpResult(syncService, data, shopId, enterpriseId);
								//改变分页参数
								page = page + 1;
							}catch(Exception e){
								logger.error("同步Aliexpress店铺订单任务抛出异常", e);
								break;//退出循环
							}
							
							// 累计执行超过30分钟则放弃本次调度
			                if ((System.currentTimeMillis() - begin) > 1800000) {
			                    break;
			                }
						}
					}
				}
				config.log("------------------同步Aliexpress店铺订单调度------------------");
			}
		 }

	/**
	 * @param syncService
	 * @param data
	 * @param shopId
	 * @param enterpriseId
	 * @throws Exception 
	 */
	public void handleHttpResult(ISyncService syncService, JSONArray data, Long shopId, Long enterpriseId) throws Exception {
		for (int i = 0; i < data.size(); i++) {
			//获取每一行数据
			JSONObject json = (JSONObject) data.get(i);
			if(!json.isEmpty()){
				String orderId = json.getString("orderId");
				//查询数据是否已存在
				boolean isExist = syncService.querySyncExistByDataId(orderId, ShopConstant.ALIEXPRESS, SyncConstant.DATA_TYPE_ORDER, shopId, enterpriseId);
				if(!isExist){//如不存在
					//封装参数
					TErpSync sync = new TErpSync();
					sync.setDataId(orderId);
					sync.setDataType(SyncConstant.DATA_TYPE_ORDER);
					sync.setSyncDate(new Date());
					sync.setData(json.toString());
					sync.setEnterpriseId(enterpriseId);
					sync.setSyncState(SyncConstant.SYNC_STATE_NO);
					sync.setPlatformType(ShopConstant.ALIEXPRESS);
					sync.setShopId(shopId);
					sync.setCreateDate(new Date());
					//数据库操作
					boolean result = syncService.addSync(sync);
					if(result){//新增成功
						//开启同步订单详情任务线程
						AliOrderDetailSyncTask task = (AliOrderDetailSyncTask) SpringContext.getBean("syncAliOrderDetail");
						task.submit(shopId, enterpriseId, orderId, syncService);
					}
				}
			}
		}
	}
}
