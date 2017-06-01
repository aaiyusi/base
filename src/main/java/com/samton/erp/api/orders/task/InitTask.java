/**
 * 
 */
package com.samton.erp.api.orders.task;

import java.util.List;

import org.apache.commons.lang.StringUtils;

import com.samton.erp.api.orders.util.Configuration;
import com.samton.erp.api.orders.util.MyBeanUtils;
import com.samton.erp.api.orders.util.OauthToken;
import com.samton.erp.api.shop.bean.entity.TErpShop;
import com.samton.erp.api.shop.bean.vo.ShopVo;
import com.samton.erp.api.shop.service.IShopService;
import com.samton.erp.api.sys.bean.entity.TErpSysDictValue;
import com.samton.erp.api.sys.service.ISysService;

/**
 *
 * @Description:web容器初始化任务
 * @author:     lijianzhou
 * @date:       2016年4月14日
 * Copyright (c) 2015, Samton. All rights reserved
 */
public class InitTask {
	
	private final Configuration config;
	private InitTask(){
		config = Configuration.getInstance();
	}
	
	private IShopService shopService;
	public void setShopService(IShopService shopService) {
		this.shopService = shopService;
	}
	
	private ISysService sysService;
	public void setSysService(ISysService sysService) {
		this.sysService = sysService;
	}
	
	public void init(){
		if("true".equals(config.getStartTaskFlag())){
			//是否自动开启线程标志
			TErpSysDictValue dict = sysService.querySysDictValueByName("isAutoStartTask");
			if(dict != null && "1".equals(dict.getDictValue())){
				//获取所有授权的店铺
				List<TErpShop> shopList = shopService.getAllAuthShopList();
				for(TErpShop shop : shopList){
					if(shop != null){
						ShopVo shopVo = new ShopVo();
						MyBeanUtils.copyProperties(shopVo, shop);
						OauthToken.addShop(shopVo);
						if(shop.getPlatformType() == 1){//Aliexpress
							if(StringUtils.isNotBlank(shop.getAccessToken())){
								//设置Aliexpress授权token
								OauthToken.setOauthToken(shop.getShopId(), shop.getAccessToken(), shop.getTokenCreateDate());
								//执行线程定时任务
								AliThreadSyncTask task = AliThreadSyncTask.getInstance();
								task.init(shop);
							}
						}else if(shop.getPlatformType() == 2){//Wish
							if(StringUtils.isNotBlank(shop.getAccessToken())){
								//设置Wish授权token
								OauthToken.setWishToken(shop.getShopId(), shop.getAccessToken(), shop.getTokenCreateDate());
								//执行线程定时任务
								WishThreadSyncTask task = WishThreadSyncTask.getInstance();
								task.init(shop);
							}
						}
					}
				}
			}
		}
	}
}
