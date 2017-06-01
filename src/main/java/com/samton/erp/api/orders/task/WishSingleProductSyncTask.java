/**
 * 
 */
package com.samton.erp.api.orders.task;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

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

/**
 *
 * @Description:获取Wish单个商品同步任务
 * @author:     lijianzhou
 * @date:       2016年4月20日
 * Copyright (c) 2015, Samton. All rights reserved
 */
@Service("syncWishSingleProduct")
public class WishSingleProductSyncTask {

	private final Logger  logger = Logger.getLogger(this.getClass());
	 public void submit(Long shopId, Long enterpriseId, String productId, ISyncService syncService){
		 CommonThreadPool.getThreadPool("同步Wish店铺单个商品" + shopId).execute(new InnerProductSyncTask(shopId, enterpriseId, productId, syncService));
	 }
	 
	 private class InnerProductSyncTask implements Runnable{
			private Long shopId;
			private Long enterpriseId;
			private String productId;
			private ISyncService syncService;
			private final Configuration config;
			public InnerProductSyncTask(Long shopId, Long enterpriseId, String productId, ISyncService syncService){
				 config = Configuration.getInstance();
				 this.shopId = shopId;
				 this.enterpriseId = enterpriseId;
				 this.productId = productId;
				 this.syncService = syncService;
			}
			@Override
			public void run() {
				try{
					if(StringUtils.isNotBlank(OauthToken.getWishToken(shopId))){
						//封装参数
	 					Map<String, String> params = new HashMap<String, String>();
	 					params.put("id", productId);
	 					params.put("access_token", OauthToken.getWishToken(shopId));
	 					//获取请求完整的url
	 					String postPath = CommonUtil.getWholeUrl(PostUtil.WISH_SINGLE_PRODUCT, params);
	 					config.log("-----Wish----获取单个商品参数---"+postPath+"--------------");
	 					//请求Wish服务器
	 					String result = PostUtil.post(postPath);
	 					config.log("----Wish---获取单个商品结果----"+result+"------------------");
	 					//获取结果为空
	 					if(StringUtils.isBlank(result)) return;
	 					//转换为JSON格式
	 					JSONObject jsonObject = JSONObject.fromObject(result);
	 					if(jsonObject.isEmpty()) return;
	 					//获取结果标志
	 					String code = jsonObject.getString("code");
	 					//获取数据不成功
	 					if(StringUtils.isBlank(code) || !"0".equals(code)) return;
	 					//获取数据
	 					JSONObject data = jsonObject.getJSONObject("data");
	 					if(data.isEmpty()) return;
	 					//获取商品数据
	 					String product = data.getString("Product");
	 					if(StringUtils.isBlank(product)) return;
	 					//处理返回结果
	 					handleHttpResult(syncService, product, shopId, enterpriseId);
					}
				}catch(Exception e){
					logger.error("同步Wish店铺单个商品任务抛出异常", e);
				}
				config.log("------------------同步Wish店铺单个商品调度--------------");
			}
	}

	/**
	 * 处理返回结果
	 * @param syncService
	 * @param data
	 * @param shopId
	 * @param enterpriseId
	 * @throws Exception 
	 */
	public void handleHttpResult(ISyncService syncService, String data, Long shopId, Long enterpriseId) throws Exception {
		if(data != null && !"".equals(data)){
			//转换为JSON格式
			JSONObject dataJson = JSONObject.fromObject(data);
			if(!dataJson.isEmpty()){//数据不为空
				String id = dataJson.getString("id");
				if(id != null && !"".equals(id)){
					//查询数据是否已存在
					boolean isExist = syncService.querySyncExistByDataId(id, ShopConstant.WISH, SyncConstant.DATA_TYPE_PRODUCT, shopId, enterpriseId);
					if(!isExist){//如不存在
						//封装参数
						TErpSync sync = new TErpSync();
						sync.setDataId(id);
						sync.setDataType(SyncConstant.DATA_TYPE_PRODUCT);
						sync.setSyncDate(new Date());
						sync.setData(data);
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
}
