/**
 * 
 */
package com.samton.erp.api.orders.task;

import java.util.Date;

import org.apache.log4j.Logger;

import com.samton.erp.api.orders.bean.entity.TErpSync;
import com.samton.erp.api.orders.constant.SyncConstant;
import com.samton.erp.api.orders.service.ISyncService;
import com.samton.erp.api.orders.thirdpart.aliexpress.AliexpressClient;
import com.samton.erp.api.orders.util.Configuration;
import com.samton.erp.api.orders.util.OauthToken;
import com.samton.erp.api.shop.bean.entity.TErpShop;
import com.samton.erp.api.shop.bean.vo.ShopVo;
import com.samton.erp.api.shop.constant.ShopConstant;
import com.samton.erp.api.shop.service.IShopService;
import com.samton.platform.framework.context.SpringContext;

/**
 *
 * @Description:速卖通同步任务线程
 * @author:     lijianzhou
 * @date:       2016年4月19日
 * Copyright (c) 2015, Samton. All rights reserved
 */
public class AliSyncTaskThread implements Runnable {

	protected final Logger logger = Logger.getLogger(this.getClass());
	private TErpShop shop;
	//速卖通接口类
	private final AliexpressClient aliClient;
	private final Configuration config;
	public AliSyncTaskThread(TErpShop shop){
		this.shop = shop;
		config = Configuration.getInstance();
		aliClient = AliexpressClient.getInstance();
	}
	
	@Override
	public void run() {
		try {
			AliThreadSyncTask.isRun = false;
			 while (!AliThreadSyncTask.isRun && AliThreadSyncTask.runFlag) {
				 	//设置不连续执行
				 	AliThreadSyncTask.isRun = true;
				 	if(this.shop != null){
				 		//获取店铺信息
				 		ShopVo shopVo = OauthToken.getShop(shop.getShopId());
				 		//已授权、启用的店铺
		 				if(shopVo != null && shopVo.getIsUse() == 1 && shopVo.getState() == 1){
		 					//获取access_token
		 					String accessToken = OauthToken.getOauthToken(shop.getShopId());
		 					config.log("-------------Aliexpress---------原始access_token值为"+accessToken+"-------------");
		 					if(accessToken == null){//accessToken失效
		 						config.log("--------------Aliexpress---------获取access_token------start----------");
		 						//利用refreshToken换取accessToken
		 						TErpShop tempShop = aliClient.initAccessToken(shop.getShopId(), shopVo.getRefreshToken());
		 						if(tempShop != null){
		 							IShopService shopService = (IShopService) SpringContext.getBean("shopService");
		 							int result = shopService.updateShopById(tempShop);
		 							if(result > 0){
		 								config.log("----------Aliexpress----------更改accessToken成功----------success----------");
		 							}
		 							//将新生成的access_token放入缓存中
		 							shopVo.setAccessToken(tempShop.getAccessToken());
		 							shopVo.setTokenCreateDate(new Date());
	 								OauthToken.addShop(shopVo);
		 						}
		 						config.log("----------Aliexpress----------获取access_token----------end----------");
		 					}else{//换取refreshToken
		 						TErpShop tempShop = aliClient.initRefreshToken(shop.getShopId(), accessToken);
		 						if(tempShop != null){
		 							IShopService shopService = (IShopService) SpringContext.getBean("shopService");
		 							int result = shopService.updateShopById(tempShop);
		 							if(result > 0){
		 								config.log("----------Aliexpress----------更改refreshToken成功----------success----------");
		 							}
		 						}
		 					}
		 					//同步任务service类
							ISyncService syncService = (ISyncService) SpringContext.getBean("syncService");
							//获取同步订单任务
							TErpSync syncOrder = syncService.querySyncInfoByPlatformType(shopVo.getShopId(), ShopConstant.ALIEXPRESS, SyncConstant.DATA_TYPE_ORDER, shopVo.getEnterpriseId());
							//启动同步订单线程
							AliOrderSyncTask orderTask = (AliOrderSyncTask) SpringContext.getBean("syncAliOrder");
		 					orderTask.submit(shopVo.getShopId(), shopVo.getEnterpriseId(),syncOrder == null ? null : syncOrder.getSyncDate(),syncService);
		 				}
				 	}
	            }
		}catch(Throwable e){
			AliThreadSyncTask.isRun = false;
			logger.error("----------Aliexpress----------订单下载线程调度线程抛出异常,"+e.getMessage()+"----------");
		}
	}

}
