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
import com.samton.platform.framework.util.DateUtil;

/**
 *
 * @Description:获取Wish商品同步任务
 * @author:     lijianzhou
 * @date:       2016年4月16日
 * Copyright (c) 2015, Samton. All rights reserved
 */
@Service("syncWishProduct")
public class WishProductSyncTask {

	 private final Logger  logger = Logger.getLogger(this.getClass());
	 private final static Object lock = new Object();
	 private final static Integer pageSize = 50;
	 public void submit(Long shopId, Long enterpriseId, Date syncDate, ISyncService syncService){
		 CommonThreadPool.getThreadPool("同步Wish店铺商品" + shopId).execute(new InnerProductSyncTask(shopId, enterpriseId, syncDate, syncService));
	 }
	 
	 private class InnerProductSyncTask implements Runnable{
		private Long shopId;
		private Long enterpriseId;
		private Date syncDate;
		private ISyncService syncService;
		private final Configuration config;
		public InnerProductSyncTask(Long shopId, Long enterpriseId, Date syncDate, ISyncService syncService){
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
							if(StringUtils.isNotBlank(OauthToken.getWishToken(shopId))){
								//封装参数
			 					Map<String, String> params = new HashMap<String, String>();
			 					params.put("start", String.valueOf(page));
			 					params.put("limit", String.valueOf(pageSize));
			 					if(syncDate != null){
			 						params.put("since", DateUtil.formatDate(syncDate));
			 					}
			 					params.put("access_token", OauthToken.getWishToken(shopId));
			 					//获取请求完整的url
			 					String postPath = CommonUtil.getWholeUrl(PostUtil.WISH_QUERY_PRODUCT, params);
			 					config.log("-----Wish----获取商品参数---"+postPath+"--------------");
			 					//请求Wish服务器
			 					String result = PostUtil.post(postPath);
			 					config.log("----Wish---获取商品结果----"+result+"------------------");
			 					//获取结果为空
			 					if(StringUtils.isBlank(result)) break;
			 					//转换为JSON格式
			 					JSONObject jsonObject = JSONObject.fromObject(result);
			 					if(jsonObject.isEmpty()) break;
			 					//获取结果标志
			 					String code = jsonObject.getString("code");
			 					//获取数据不成功
			 					if(StringUtils.isBlank(code) || !"0".equals(code)) break;
			 					//获取数据
			 					JSONArray data = jsonObject.getJSONArray("data");
			 					if(data.isEmpty()) break;
			 					//处理返回结果
			 					handleHttpResult(syncService, data, shopId, enterpriseId);
								//改变分页参数
								page = page + pageSize;
							}
						}catch(Exception e){
							logger.error("同步Wish店铺商品任务抛出异常", e);
							break;
						}
						
						// 累计执行超过30分钟则放弃本次调度
		                if ((System.currentTimeMillis() - begin) > 1800000) {
		                    break;
		                }
					}
				}
				config.log("------------------同步Wish店铺商品调度--------------");
			}
		}
	 }

	/**处理返回结果
	 * @param syncService
	 * @param data
	 * @param shopId
	 * @param enterpriseId
	 * @param config
	 * @throws Exception 
	 */
	public void handleHttpResult(ISyncService syncService, JSONArray data, Long shopId, Long enterpriseId) throws Exception {
		for (int i = 0; i < data.size(); i++) {
				//获取每一行数据
			JSONObject obj = (JSONObject) data.get(i);
			//获取商品数据
			JSONObject json = JSONObject.fromObject(obj.getString("Product"));
			if(!json.isEmpty()){
				String id = json.getString("id");
				//查询数据是否已存在
				boolean isExist = syncService.querySyncExistByDataId(id, ShopConstant.WISH, SyncConstant.DATA_TYPE_PRODUCT, shopId, enterpriseId);
				if(!isExist){//如不存在
					//封装参数
					TErpSync sync = new TErpSync();
					sync.setDataId(id);
					sync.setDataType(SyncConstant.DATA_TYPE_PRODUCT);
					sync.setSyncDate(new Date());
					sync.setData(json.toString());
					sync.setEnterpriseId(enterpriseId);
					sync.setSyncState(SyncConstant.SYNC_STATE_NO);
					sync.setPlatformType(ShopConstant.WISH);
					sync.setShopId(shopId);
					sync.setCreateDate(new Date());
					//数据库操作
					syncService.addSync(sync);
				}
			}
		}
	}
}
