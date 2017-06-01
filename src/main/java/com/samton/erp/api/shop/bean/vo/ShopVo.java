/**
 * 
 */
package com.samton.erp.api.shop.bean.vo;

import java.io.Serializable;
import java.util.Date;

/**
 *
 * @Description:店铺实体类
 * @author:     lijianzhou
 * @date:       2016年4月14日
 * Copyright (c) 2015, Samton. All rights reserved
 */
public class ShopVo implements Serializable{

	private static final long serialVersionUID = 1L;
	private Long shopId;
	private String shopName;
	private Integer platformType;
	private Short state;
	private Long enterpriseId;
	private Short isUse;
	private String refreshTokenTimeout ;
    private String resourceOwner ;
    private String refreshToken;
    private String accessToken;
    private Long  expiresIn;
    private Date tokenCreateDate ;
    private String  aliid;
    private String merchantUserId;
	public Long getShopId() {
		return shopId;
	}
	public void setShopId(Long shopId) {
		this.shopId = shopId;
	}
	public String getShopName() {
		return shopName;
	}
	public void setShopName(String shopName) {
		this.shopName = shopName;
	}
	public Integer getPlatformType() {
		return platformType;
	}
	public void setPlatformType(Integer platformType) {
		this.platformType = platformType;
	}
	public Short getState() {
		return state;
	}
	public void setState(Short state) {
		this.state = state;
	}
	public Long getEnterpriseId() {
		return enterpriseId;
	}
	public void setEnterpriseId(Long enterpriseId) {
		this.enterpriseId = enterpriseId;
	}
	public Short getIsUse() {
		return isUse;
	}
	public void setIsUse(Short isUse) {
		this.isUse = isUse;
	}
	public String getRefreshTokenTimeout() {
		return refreshTokenTimeout;
	}
	public void setRefreshTokenTimeout(String refreshTokenTimeout) {
		this.refreshTokenTimeout = refreshTokenTimeout;
	}
	public String getResourceOwner() {
		return resourceOwner;
	}
	public void setResourceOwner(String resourceOwner) {
		this.resourceOwner = resourceOwner;
	}
	public String getRefreshToken() {
		return refreshToken;
	}
	public void setRefreshToken(String refreshToken) {
		this.refreshToken = refreshToken;
	}
	public String getAccessToken() {
		return accessToken;
	}
	public void setAccessToken(String accessToken) {
		this.accessToken = accessToken;
	}
	public Long getExpiresIn() {
		return expiresIn;
	}
	public void setExpiresIn(Long expiresIn) {
		this.expiresIn = expiresIn;
	}
	public Date getTokenCreateDate() {
		return tokenCreateDate;
	}
	public void setTokenCreateDate(Date tokenCreateDate) {
		this.tokenCreateDate = tokenCreateDate;
	}
	public String getAliid() {
		return aliid;
	}
	public void setAliid(String aliid) {
		this.aliid = aliid;
	}
	public String getMerchantUserId() {
		return merchantUserId;
	}
	public void setMerchantUserId(String merchantUserId) {
		this.merchantUserId = merchantUserId;
	}
}
