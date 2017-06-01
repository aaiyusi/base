package com.samton.erp.api.shop.bean.vo;

import java.util.List;

import com.samton.erp.api.shop.bean.entity.TErpShop;
import com.samton.erp.api.shop.bean.entity.TErpShopUser;

public class TErpShopVo extends TErpShop   {
 
	private static final long serialVersionUID = 7541163499268876701L;
	
	private String shopManagerUserName;
	
	private List<TErpShopUser> shopUsers;
	
	private Integer updateStore;
	
	@SuppressWarnings("unused")
	private String  aliId;
	@SuppressWarnings("unused")
	private String refresh_token_timeout;
	@SuppressWarnings("unused")
	private String resource_owner;
	@SuppressWarnings("unused")
	private Long expires_in;
	@SuppressWarnings("unused")
	private String refresh_token;
	@SuppressWarnings("unused")
	private String access_token;
	@SuppressWarnings("unused")
	private String merchant_user_id;
	
	public void setMerchant_user_id(String merchant_user_id) {
		this.merchant_user_id = merchant_user_id;
		this.setMerchantUserId(merchant_user_id);
	}
	public void setAliId(String aliId) {
		this.aliId = aliId;
		this.setAliid(aliId);
	}
	public void setRefresh_token_timeout(String refresh_token_timeout) {
		this.refresh_token_timeout = refresh_token_timeout;
		this.setRefreshTokenTimeout(refresh_token_timeout);
		
	}
	public void setResource_owner(String resource_owner) {
		this.resource_owner = resource_owner;
		this.setResourceOwner(resource_owner);
	}

	public void setExpires_in(Long expires_in) {
		this.expires_in = expires_in;
		this.setExpiresIn(expires_in);
	}

	public void setRefresh_token(String refresh_token) {
		this.refresh_token = refresh_token;
		this.setRefreshToken(refresh_token);
	}

	public void setAccess_token(String access_token) {
		this.access_token = access_token;
		this.setAccessToken(access_token);
	}

	public String getShopManagerUserName() {
		return shopManagerUserName;
	}

	public void setShopManagerUserName(String shopManagerUserName) {
		this.shopManagerUserName = shopManagerUserName;
	}

	public Integer getUpdateStore() {
		return updateStore;
	}

	public void setUpdateStore(Integer updateStore) {
		this.updateStore = updateStore;
	}

	public List<TErpShopUser> getShopUsers() {
		return shopUsers;
	}

	public void setShopUsers(List<TErpShopUser> shopUsers) {
		this.shopUsers = shopUsers;
	}

}