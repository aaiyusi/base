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

/**
 *
 * @Description:获取Wish订单同步任务
 * @author:     lijianzhou
 * @date:       2016年4月15日
 * Copyright (c) 2015, Samton. All rights reserved
 */
@Service("syncWishOrder")
public class WishOrderSyncTask {

	 private final Logger  logger = Logger.getLogger(this.getClass());
	 private final static Object lock = new Object();
	 private final static Integer pageSize = 50;
	 
	 public void submit(Long shopId, Long enterpriseId, Date syncDate, ISyncService syncService){
		 CommonThreadPool.getThreadPool("同步Wish店铺订单" + shopId).execute(new InnerOrderSyncTask(shopId, enterpriseId, syncDate, syncService));
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
				int page=0;
				long begin = System.currentTimeMillis();
				if(StringUtils.isNotBlank(OauthToken.getWishToken(shopId))){
					while(true){
						try{
							//封装参数
		 					Map<String, String> params = new HashMap<String, String>();
		 					params.put("start", String.valueOf(page));
		 					params.put("limit", String.valueOf(pageSize));
		 					if(syncDate != null){
		 						params.put("since", DateUtil.formatDate(syncDate));
		 					}
		 					params.put("access_token", OauthToken.getWishToken(shopId));
		 					//获取请求完整的url
		 					String postPath = CommonUtil.getWholeUrl(PostUtil.WISH_QUERY_ORDER, params);
		 					config.log("-----Wish----获取订单参数---"+postPath+"--------------");
		 					//请求Wish服务器
		 					String result = PostUtil.post(postPath);
		 					config.log("----Wish---获取订单结果----"+result+"------------------");
		 					//获取结果为空
		 					if(StringUtils.isBlank(result)) break;
		 					JSONObject jsonObject = JSONObject.fromObject(result);
		 					if(jsonObject.isEmpty()) break;
		 					String code = jsonObject.getString("code");
		 					//调用不成功
		 					if(StringUtils.isBlank(code) || !"0".equals(code)) break;
		 					//获取数据为空
		 					JSONArray data = jsonObject.getJSONArray("data");
		 					if(data.isEmpty()) break;
		 					handleHttpResult(syncService, data, shopId, enterpriseId);
							//改变分页参数
							page = page + pageSize;
						}catch(Exception e){
							logger.error("同步Wish店铺订单任务抛出异常", e);
							break;//退出循环
						}
						
						// 累计执行超过30分钟则放弃本次调度
		                if ((System.currentTimeMillis() - begin) > 1800000) {
		                    break;
		                }
					}
				}
			}
			config.log("------------------同步Wish店铺订单调度------------------");
		}
	 }
	 
	 //处理返回的结果
	 private void handleHttpResult(ISyncService syncService, JSONArray data, Long shopId, Long enterpriseId) throws Exception{
		 for (int i = 0; i < data.size(); i++) {
				//获取每一行数据
				JSONObject obj = (JSONObject) data.get(i);
				//获取订单数据
				JSONObject json = JSONObject.fromObject(obj.getString("Order"));
				if(!json.isEmpty()){
					String orderId = json.getString("order_id");
					//查询数据是否已存在
					boolean isExist = syncService.querySyncExistByDataId(orderId, ShopConstant.WISH, SyncConstant.DATA_TYPE_ORDER, shopId, enterpriseId);
					if(!isExist){//如不存在
						//封装参数
						TErpSync sync = new TErpSync();
						sync.setDataId(orderId);
						sync.setDataType(SyncConstant.DATA_TYPE_ORDER);
						sync.setSyncDate(new Date());
						sync.setData(json.toString());
						sync.setEnterpriseId(enterpriseId);
						sync.setSyncState(SyncConstant.SYNC_STATE_NO);
						sync.setPlatformType(ShopConstant.WISH);
						sync.setShopId(shopId);
						sync.setCreateDate(new Date());
						//数据库操作
						boolean result = syncService.addSync(sync);
						if(result){//新增成功
							//获取商品id
							String productId = json.getString("product_id");
							if(!productId.isEmpty()){
								//查询数据是否已存在
								boolean proExist = syncService.querySyncExistByDataId(productId, ShopConstant.WISH, SyncConstant.DATA_TYPE_PRODUCT, shopId, enterpriseId);
								if(!proExist){
									//启动同步商品线程
									WishSingleProductSyncTask productTask = (WishSingleProductSyncTask) SpringContext.getBean("syncWishSingleProduct");
				 					productTask.submit(shopId, enterpriseId, productId, syncService);
								}
							}
						}
				 }
			}
		}
	 }
}
