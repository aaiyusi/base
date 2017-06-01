package com.samton.erp.api.warehouse.bean.entity;

import java.io.Serializable;

import com.samton.platform.framework.base.BaseBean;

public class TErpWarehouseUser extends BaseBean implements Serializable {
    private Long whUserId;

    private Long whouseId;

    private Long userId;

    private Short state;

    private Long enterpriseId;

    private String contactName;

    private String contactPhone;

    private String address;

    private static final long serialVersionUID = 1L;

    public Long getWhUserId() {
        return whUserId;
    }

    public void setWhUserId(Long whUserId) {
        this.whUserId = whUserId;
    }

    public Long getWhouseId() {
        return whouseId;
    }

    public void setWhouseId(Long whouseId) {
        this.whouseId = whouseId;
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

    public String getContactName() {
        return contactName;
    }

    public void setContactName(String contactName) {
        this.contactName = contactName;
    }

    public String getContactPhone() {
        return contactPhone;
    }

    public void setContactPhone(String contactPhone) {
        this.contactPhone = contactPhone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}