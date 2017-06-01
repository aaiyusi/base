/**
 * 
 */
package com.samton.erp.api.orders.util;

import java.util.Date;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ScheduledFuture;

import org.apache.log4j.Logger;

import com.samton.erp.api.orders.thirdpart.aliexpress.AuthToken;
import com.samton.erp.api.orders.thirdpart.wish.WishToken;
import com.samton.erp.api.shop.bean.vo.ShopVo;


/**
 *
 * @Description:授权访问token
 * @author:     lijianzhou
 * @date:       2016年4月14日
 * Copyright (c) 2015, Samton. All rights reserved
 */
public class OauthToken {
	protected final Logger logger = Logger.getLogger(this.getClass());
	
	private static ConcurrentHashMap<Long,ShopVo> shopMap = new ConcurrentHashMap<Long,ShopVo>();
	
	/**
	 * Aliexpress授权token集合
	 */
	private static ConcurrentHashMap<Long,AuthToken> oauthTokens = new ConcurrentHashMap<Long,AuthToken>();
	
	/**
	 * Wish授权token集合
	 */
	private static ConcurrentHashMap<Long,WishToken> wishTokens = new ConcurrentHashMap<Long,WishToken>();
	
	private static ConcurrentHashMap<String, ScheduledFuture<?>> scheduleTaskMap = new ConcurrentHashMap<String, ScheduledFuture<?>>();
	
	/**
	 * 设置Aliexpress授权token
	 * @param token
	 */
	public synchronized static void setOauthToken(Long shopId,String token, Date tokenCreateDate){
		AuthToken tok = new AuthToken();
		tok.setAccess_token(token);
		tok.setAccess_token_time(tokenCreateDate);
		oauthTokens.put(shopId, tok);
	}
	
	/**
	 * 获取Aliexpress授权token
	 * @return
	 */
	public synchronized static String getOauthToken(Long shopId){
		AuthToken token = oauthTokens.get(shopId);
		if(token != null){
			return token.getAccess_token();
		}
		return null;
	}
	
	/**
	 * 设置wish授权token
	 * @param shopId
	 * @param token
	 * @param tokenCreateDate
	 */
	public synchronized static void setWishToken(Long shopId,String token, Date tokenCreateDate){
		WishToken wishToken = new WishToken();
		wishToken.setAccess_token(token);
		wishToken.setAccess_token_time(tokenCreateDate);
		wishTokens.put(shopId, wishToken);
	}
	
	/**
	 * 获取wish授权token
	 * @param shopId
	 * @return
	 */
	public synchronized static String getWishToken(Long shopId){
		WishToken token = wishTokens.get(shopId);
		if(token != null){
			return token.getAccess_token();
		}
		return null;
	}
	
	/**
	 * 设置店铺集合
	 * @param shop
	 */
	public synchronized static void addShop(ShopVo shop){
		shopMap.put(shop.getShopId(), shop);
	}
	
	/**
	 * 获取店铺信息
	 * @param shopId
	 * @return
	 */
	public static ShopVo getShop(Long shopId){
		if(shopMap.get(shopId) == null){
			synchronized (shopMap) {
				if(shopMap.get(shopId) == null){
					ShopVo shopVo = new ShopVo();
					shopVo.setShopId(shopId);
					OauthToken.addShop(shopVo);
				}
				return shopMap.get(shopId);
			}
		}
		return shopMap.get(shopId);
	}
	
	public synchronized static void doAddScheduleFuture(String name, ScheduledFuture<?> scheduledFuture){
		scheduleTaskMap.put(name, scheduledFuture);
	}
	
	public synchronized static ScheduledFuture<?> getScheduleFuture(String name){
		return scheduleTaskMap.get(name);
	}
}
