package com.samton.erp.api.shop.bean.entity;

import java.io.Serializable;
import java.util.Date;

import com.samton.platform.framework.base.BaseBean;

public class TErpShop extends BaseBean implements Serializable {
 
	private static final long serialVersionUID = -3315298169311136232L;

	private Long shopId;

    private String shopName;

    private Integer platformType;

    private String platformAccount;

    private String token;

    private Long shopManagerUserId;

    private Short state;

    private Long enterpriseId;

    private Short isUse;
    
    private String mainAccount;
    
    private Short  accountType;
    
    private String refreshTokenTimeout ;
    
    private String resourceOwner ;
    
    private String refreshToken;
    
    private String accessToken;
    
    private Long  expiresIn;
    
    private Date tokenCreateDate ;
    
    private String  aliid;
    
    private String merchantUserId;
    
    private Date lastSyncDate;
    
	public String getMerchantUserId() {
		return merchantUserId;
	}

	public void setMerchantUserId(String merchantUserId) {
		this.merchantUserId = merchantUserId;
	}

	public String getAliid() {
		return aliid;
	}

	public void setAliid(String aliid) {
		this.aliid = aliid;
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

	public Integer getPlatformType() {
		return platformType;
	}

	public void setPlatformType(Integer platformType) {
		this.platformType = platformType;
	}

	public String getPlatformAccount() {
		return platformAccount;
	}

	public void setPlatformAccount(String platformAccount) {
		this.platformAccount = platformAccount;
	}

	public Short getAccountType() {
		return accountType;
	}

	public void setAccountType(Short accountType) {
		this.accountType = accountType;
	}

	public String getMainAccount() {
		return mainAccount;
	}

	public void setMainAccount(String mainAccount) {
		this.mainAccount = mainAccount;
	}

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

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public Long getShopManagerUserId() {
        return shopManagerUserId;
    }

    public void setShopManagerUserId(Long shopManagerUserId) {
        this.shopManagerUserId = shopManagerUserId;
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

	public Date getLastSyncDate() {
		return lastSyncDate;
	}

	public void setLastSyncDate(Date lastSyncDate) {
		this.lastSyncDate = lastSyncDate;
	}
}