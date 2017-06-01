/**
 * 
 */
package com.samton.erp.api.orders.thirdpart.wish;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import net.sf.json.JSONObject;

import org.apache.commons.lang.StringUtils;
import org.apache.log4j.Logger;

import com.samton.erp.api.orders.util.Configuration;
import com.samton.erp.api.orders.util.OauthToken;
import com.samton.erp.api.orders.util.PostUtil;
import com.samton.erp.api.shop.bean.entity.TErpShop;
import com.samton.erp.common.util.aliexpress.CommonUtil;

/**
 *
 * @Description:Wish工具类
 * @author:     lijianzhou
 * @date:       2016年4月15日
 * Copyright (c) 2015, Samton. All rights reserved
 */
public class WishClient {

	private static class Holder{
		private static WishClient instance = new WishClient();
	}
	
	protected final Logger logger = Logger.getLogger(this.getClass());
	private final Configuration config;
	private WishClient(){
		config = Configuration.getInstance();
	}
	
	public static WishClient getInstance(){
        return Holder.instance;
	}
	
	//初始化access_token
	public synchronized TErpShop initAccessToken(Long shopId,String refreshToken) throws Exception{
		if(StringUtils.isNotBlank(refreshToken)){
			try{
				//封装参数
				Map<String, String> params = new HashMap<String, String>();
				params.put("client_id", config.getWishAppKey());
				params.put("client_secret", config.getWishAppSecret());
				params.put("refresh_token", refreshToken);
				params.put("grant_type", "refresh_token");
				//封装请求完整的url
				String postPath = CommonUtil.getWholeUrl(PostUtil.WISH_REFRESH_TOKEN, params);
				//请求Wish服务器
				String result = PostUtil.post(postPath);
				if(StringUtils.isNotBlank(result)){
					JSONObject jsonObject = JSONObject.fromObject(result);
					if(jsonObject != null){
						String code = jsonObject.getString("code");
						if("0".equals(code)){
							String dataStr = jsonObject.getString("data");
							if(StringUtils.isNotBlank(dataStr)){
								JSONObject data = JSONObject.fromObject(dataStr);
								if(!data.isEmpty()){
									String access_token = data.getString("access_token");
									String refresh_token = data.getString("refresh_token");
									String expires_in = data.getString("expires_in");
									String expiry_time = data.getString("expiry_time");
									OauthToken.setWishToken(shopId, access_token, new Date());
									TErpShop shop = new TErpShop();
									shop.setShopId(shopId);
									shop.setAccessToken(access_token);
									shop.setRefreshToken(refresh_token);
									shop.setTokenCreateDate(new Date());
									shop.setExpiresIn(StringUtils.isNotBlank(expires_in) ? Long.parseLong(expires_in) : null);
									return shop;
								}
							}
						}
					}
				}
			}catch(Exception e){
				logger.error("Wish获取accessToken出现异常，异常信息"+e.getMessage());
			}
		}
		return null;
	}
}
