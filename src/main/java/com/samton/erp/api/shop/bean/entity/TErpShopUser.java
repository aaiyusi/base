package com.samton.erp.api.shop.bean.entity;

import java.io.Serializable;

import com.samton.platform.framework.base.BaseBean;

public class TErpShopUser extends BaseBean implements Serializable {
    private Long shopUserId;

    private Long shopId;

    private Long userId;

    private Short state;

    private Long enterpriseId;

    private static final long serialVersionUID = 1L;

    public Long getShopUserId() {
        return shopUserId;
    }

    public void setShopUserId(Long shopUserId) {
        this.shopUserId = shopUserId;
    }

    public Long getShopId() {
        return shopId;
    }

    public void setShopId(Long shopId) {
        this.shopId = shopId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
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
}