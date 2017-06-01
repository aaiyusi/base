package com.samton.erp.api.warehouse.bean.entity;

import java.io.Serializable;

import com.samton.platform.framework.base.BaseBean;

public class TErpWarehouse extends BaseBean implements Serializable {
    private Long whouseId;

    private String whouseName;

    private Integer whouseCode;

    private Short isDefault;

    private Short property;

    private Integer shelfCount;

    private Integer skuCount;

    private Integer inventoryCount;

    private Short state;

    private Long enterpriseId;

    private String contactName;

    private String contactPhone;

    private String address;

    private static final long serialVersionUID = 1L;

    public Long getWhouseId() {
        return whouseId;
    }

    public void setWhouseId(Long whouseId) {
        this.whouseId = whouseId;
    }

    public String getWhouseName() {
        return whouseName;
    }

    public void setWhouseName(String whouseName) {
        this.whouseName = whouseName;
    }

    public Integer getWhouseCode() {
        return whouseCode;
    }

    public void setWhouseCode(Integer whouseCode) {
        this.whouseCode = whouseCode;
    }

    public Short getIsDefault() {
        return isDefault;
    }

    public void setIsDefault(Short isDefault) {
        this.isDefault = isDefault;
    }

    public Short getProperty() {
        return property;
    }

    public void setProperty(Short property) {
        this.property = property;
    }

    public Integer getShelfCount() {
        return shelfCount;
    }

    public void setShelfCount(Integer shelfCount) {
        this.shelfCount = shelfCount;
    }

    public Integer getSkuCount() {
        return skuCount;
    }

    public void setSkuCount(Integer skuCount) {
        this.skuCount = skuCount;
    }

    public Integer getInventoryCount() {
        return inventoryCount;
    }

    public void setInventoryCount(Integer inventoryCount) {
        this.inventoryCount = inventoryCount;
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