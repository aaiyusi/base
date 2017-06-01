/**
 * 
 */
package com.samton.erp.api.orders.task;

import java.util.Date;

import org.apache.log4j.Logger;

import com.samton.erp.api.orders.bean.entity.TErpSync;
import com.samton.erp.api.orders.constant.SyncConstant;
import com.samton.erp.api.orders.service.ISyncService;
import com.samton.erp.api.orders.thirdpart.wish.WishClient;
import com.samton.erp.api.orders.util.Configuration;
import com.samton.erp.api.orders.util.OauthToken;
import com.samton.erp.api.shop.bean.entity.TErpShop;
import com.samton.erp.api.shop.bean.vo.ShopVo;
import com.samton.erp.api.shop.constant.ShopConstant;
import com.samton.erp.api.shop.service.IShopService;
import com.samton.platform.framework.context.SpringContext;

/**
 *
 * @Description:Wish同步任务线程
 * @author:     lijianzhou
 * @date:       2016年4月19日
 * Copyright (c) 2015, Samton. All rights reserved
 */
public class WishSyncTaskThread implements Runnable {

	protected final Logger logger = Logger.getLogger(this.getClass());
	private TErpShop shop;
	private final Configuration config;
	//速卖通接口类
	private final WishClient wishClient;
	public WishSyncTaskThread(TErpShop shop){
		this.shop = shop;
		config = Configuration.getInstance();
		wishClient = WishClient.getInstance();
	}
	
	@Override
	public void run() {
		try {
			WishThreadSyncTask.isRun = false;
			long begin = System.currentTimeMillis();
			 while (!WishThreadSyncTask.isRun && WishThreadSyncTask.runFlag) {
				 	//设置不连续执行
				 	WishThreadSyncTask.isRun = true;
				 	if(this.shop != null){
				 		//获取店铺信息
				 		ShopVo shopVo = OauthToken.getShop(shop.getShopId());
				 		//已授权、启用的店铺
		 				if(shopVo != null && shopVo.getIsUse() == 1 && shopVo.getState() == 1){
		 					//获取access_token
		 					String accessToken = OauthToken.getWishToken(shop.getShopId());
		 					config.log("---------Wish-----原始access_token值为"+accessToken+"-----------");
		 					if(accessToken == null){//accessToken失效
		 						config.log("-----Wish---------获取access_token--------------start-----------");
		 						//重新获取access_token
		 						TErpShop tempShop = wishClient.initAccessToken(shop.getShopId(), shopVo.getRefreshToken());
		 						if(tempShop != null){
		 							IShopService shopService = (IShopService) SpringContext.getBean("shopService");
		 							int result = shopService.updateShopById(tempShop);
		 							if(result > 0){
		 								config.log("----------Wish----------更改accessToken成功----------success----------");
		 							}
		 							//将新生成的access_token放入缓存中
	 								shopVo.setAccessToken(tempShop.getAccessToken());
	 								shopVo.setTokenCreateDate(new Date());
	 								OauthToken.addShop(shopVo);
		 						}
		 						config.log("------Wish--------获取access_token--------------end--------------");
		 					}
		 					//同步任务service类
							ISyncService syncService = (ISyncService) SpringContext.getBean("syncService");
							//获取同步订单任务
							TErpSync syncOrder = syncService.querySyncInfoByPlatformType(shopVo.getShopId(), ShopConstant.WISH, SyncConstant.DATA_TYPE_ORDER, shopVo.getEnterpriseId());
		 					//启动同步订单线程
		 					WishOrderSyncTask orderTask = (WishOrderSyncTask) SpringContext.getBean("syncWishOrder");
		 					orderTask.submit(shopVo.getShopId(), shopVo.getEnterpriseId(),syncOrder == null ? null : syncOrder.getSyncDate(),syncService);
		 				}
				 	}
				 	// 累计执行超过10s则放弃本次调度
	                if ((System.currentTimeMillis() - begin) > 10000) {
	                    break;
	                }
	            }
		}catch(Throwable e){
			WishThreadSyncTask.isRun = false;
			logger.error("--------------Wish--------订单下载线程调度线程抛出异常,"+e.getMessage()+"--------------");
		}

	}

}
