/**
 * 
 */
package com.samton.erp.api.orders.thirdpart.aliexpress;

import java.util.Date;

import net.sf.json.JSONObject;

import org.apache.commons.lang.StringUtils;
import org.apache.log4j.Logger;

import com.samton.erp.api.orders.util.Configuration;
import com.samton.erp.api.orders.util.MyBeanUtils;
import com.samton.erp.api.orders.util.OauthToken;
import com.samton.erp.api.orders.util.PostUtil;
import com.samton.erp.api.shop.bean.entity.TErpShop;
import com.samton.erp.api.shop.bean.vo.ShopVo;
import com.samton.platform.framework.util.DateUtil;

/**
 *
 * @Description:Aliexpress工具类
 * @author:     lijianzhou
 * @date:       2016年4月15日
 * Copyright (c) 2015, Samton. All rights reserved
 */
public class AliexpressClient {

	private static class Holder{
		private static AliexpressClient instance = new AliexpressClient();
	}
	
	protected final Logger logger = Logger.getLogger(this.getClass());
	private final Configuration config;
	private AliexpressClient(){
		config = Configuration.getInstance();
	}
	
	public static AliexpressClient getInstance(){
        return Holder.instance;
	}
	
	//初始化access_token
	public synchronized TErpShop initAccessToken(Long shopId,String refreshToken) throws Exception{
		if(StringUtils.isNotBlank(refreshToken)){
			try{
				//请求服务器
				String result = PostUtil.post(PostUtil.ACCESS_TOKEN + "/" + config.getAppKey() + "?grant_type=refresh_token&client_id="+config.getAppKey()+"&client_secret="+config.getAppSecret()+"&refresh_token="+refreshToken);
				if(StringUtils.isNotBlank(result)){
					JSONObject jsonobj = JSONObject.fromObject(result);
					String resourceOwner = jsonobj.getString("resource_owner");
					String expiresIn = jsonobj.getString("expires_in");
					String accessToken = jsonobj.getString("access_token");
					String aliId = jsonobj.getString("aliId");
					OauthToken.setOauthToken(shopId, accessToken, new Date());
					logger.info("设置之后accessToken="+OauthToken.getOauthToken(shopId));
					TErpShop shop = new TErpShop();
					shop.setShopId(shopId);
					shop.setResourceOwner(resourceOwner);
					shop.setAccessToken(accessToken);
					shop.setTokenCreateDate(new Date());
					shop.setExpiresIn(StringUtils.isNotBlank(expiresIn) ? Long.parseLong(expiresIn) : null);
					shop.setAliid(aliId);
					return shop;
				}
			}catch(Exception e){
				logger.error("Aliexpress获取accessToken出现异常，异常信息"+e.getMessage());
			}
		}
		return null;
	}
	
	//换取refreshToken
	public synchronized TErpShop initRefreshToken(Long shopId, String accessToken) throws Exception{
		if(StringUtils.isNotBlank(accessToken)){
			try{
				long interval = 2592000000L;//30天
				ShopVo shop = OauthToken.getShop(shopId);
				if(shop != null){
					//获取refreshToken失效时间
					String refreshToken = shop.getRefreshToken();
					String refreshTokenOut = shop.getRefreshTokenTimeout();
					if(StringUtils.isNotBlank(refreshToken) && StringUtils.isNotBlank(refreshTokenOut)){//失效时间不为空
						Date refreshTokeDate = DateUtil.parseDate(refreshTokenOut,"yyyyMMddHHmmssSSSZ");
						//如果refreshToken的有效期和当前时间的差值小于30天，那么调用此接口后当前使用的refreshToken失效，返回一个新的refreshToken
						if(refreshTokeDate.getTime() - System.currentTimeMillis() <= interval){
							//请求服务器
							String result = PostUtil.post(PostUtil.ALI_REFRESH_TOKEN + "/" + config.getAppKey() + "?access_token="+accessToken+"&client_id="+config.getAppKey()+"&client_secret="+config.getAppSecret()+"&refresh_token="+refreshToken);
							if(StringUtils.isNotBlank(result)){//获取结果不为空
								JSONObject jsonobj = JSONObject.fromObject(result);
								String resourceOwner = jsonobj.getString("resource_owner");
								String expiresIn = jsonobj.getString("expires_in");
								String accessTokenNew = jsonobj.getString("access_token");
								String memberId = jsonobj.getString("memberId");
								String aliId = jsonobj.getString("aliId");
								String refreshTokenNew = jsonobj.getString("refresh_token");
								String refreshTokenTimeout = jsonobj.getString("refresh_token_timeout");
								logger.info("设置之后refresh_token="+refreshTokenNew);
								TErpShop temp = new TErpShop();
								temp.setShopId(shopId);
								temp.setResourceOwner(resourceOwner);
								temp.setAccessToken(accessTokenNew);
								temp.setExpiresIn(StringUtils.isNotBlank(expiresIn) ? Long.parseLong(expiresIn) : null);
								temp.setAliid(aliId);
								temp.setRefreshToken(refreshTokenNew);
								temp.setRefreshTokenTimeout(refreshTokenTimeout);
								MyBeanUtils.copyProperties(shop, temp);
								OauthToken.addShop(shop);
								return temp;
							}
						}
					}
				}
			}catch(Exception e){
				logger.error("Aliexpress获取换取refreshToken出现异常，异常信息"+e.getMessage());
			}
		}
		return null;
	}
}
