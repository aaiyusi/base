/**
 * 
 */
package com.samton.erp.api.orders.task;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

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
 * @Description:Aliexpress订单详情同步任务
 * @author:     lijianzhou
 * @date:       2016年4月25日
 * Copyright (c) 2015, Samton. All rights reserved
 */
@Service("syncAliOrderDetail")
public class AliOrderDetailSyncTask {

	private final Logger  logger = Logger.getLogger(this.getClass());
	public void submit(Long shopId, Long enterpriseId, String orderId, ISyncService syncService){
		 CommonThreadPool.getThreadPool("同步Aliexpress店铺订单详情" + shopId).execute(new InnerOrderDetailSyncTask(shopId, enterpriseId, orderId, syncService));
	}
	
	private class InnerOrderDetailSyncTask implements Runnable{
		private Long shopId;
		private Long enterpriseId;
		private String orderId;
		private ISyncService syncService;
		private final Configuration config;
		public InnerOrderDetailSyncTask(Long shopId, Long enterpriseId, String orderId, ISyncService syncService){
			 config = Configuration.getInstance();
			 this.shopId = shopId;
			 this.enterpriseId = enterpriseId;
			 this.orderId = orderId;
			 this.syncService = syncService;
		}
		@Override
		public void run() {
			try{
				if(StringUtils.isNotBlank(OauthToken.getOauthToken(shopId))){
					//封装参数
 					Map<String, String> params = new HashMap<String, String>();
 					params.put("orderId", orderId);
 					params.put("access_token", OauthToken.getOauthToken(shopId));
 					//构造签名因子：urlPath
					String urlPath = "param2/"+PostUtil.getVersion()+"/aliexpress.open/"+PostUtil.ALIEXPRESS_ORDER_DETAIL+"/"+config.getAppKey();
					//计算签名
					String sign = CommonUtil.signatureWithParamsAndUrlPath(urlPath, params, config.getAppSecret());
					params.put("_aop_signature", sign);
					config.log("----------Aliexpress----------同步订单详情任务签名="+sign+"----------");
 					//获取请求完整的url
 					String postPath = CommonUtil.getWholeUrl(PostUtil.ALIAPI_PATH + PostUtil.ALIEXPRESS_ORDER_DETAIL + "/" + config.getAppKey(), params);
 					config.log("-----Aliexpress----获取订单详情请求地址---"+postPath+"--------------");
 					//请求Wish服务器
 					String result = PostUtil.post(postPath);
 					config.log("----Aliexpress---获取订单详情结果----"+result+"------------------");
 					//获取结果为空
 					if(StringUtils.isBlank(result)) return;
 					//处理返回结果
 					handleHttpResult(syncService, result, orderId, shopId, enterpriseId);
				}
			}catch(Exception e){
				logger.error("同步Aliexpress店铺订单详情任务抛出异常", e);
			}
			config.log("------------------同步Aliexpress店铺订单详情调度--------------");
		}
}

	/**处理返回的结果
	 * @param syncService
	 * @param result
	 * @param shopId
	 * @param enterpriseId
	 * @throws Exception 
	 */
	public void handleHttpResult(ISyncService syncService, String data, String orderId, Long shopId, Long enterpriseId) throws Exception {
		if(data != null && !"".equals(data)){
			String id = orderId + "_detail";
			//查询数据是否已存在
			boolean isExist = syncService.querySyncExistByDataId(id, ShopConstant.ALIEXPRESS, SyncConstant.DATA_TYPE_ORDER_DETAIL, shopId, enterpriseId);
			if(!isExist){//如不存在
				//封装参数
				TErpSync sync = new TErpSync();
				sync.setDataId(id);
				sync.setDataType(SyncConstant.DATA_TYPE_ORDER_DETAIL);
				sync.setSyncDate(new Date());
				sync.setData(data);
				sync.setEnterpriseId(enterpriseId);
				sync.setSyncState(SyncConstant.SYNC_STATE_NO);
				sync.setPlatformType(ShopConstant.ALIEXPRESS);
				sync.setShopId(shopId);
				sync.setCreateDate(new Date());
				//数据库操作
				syncService.addSync(sync);
			}
		}
	}
}
