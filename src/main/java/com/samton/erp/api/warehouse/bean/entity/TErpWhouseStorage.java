package com.samton.erp.api.warehouse.bean.entity;

import java.io.Serializable;

import com.samton.platform.framework.base.BaseBean;

public class TErpWhouseStorage extends BaseBean implements Serializable {
    private Long storageId;

    private Long whouseId;

    private Short type;

    private String storageCode;

    private Integer skuCount;

    private String remark;

    private Short state;

    private Long enterpriseId;
    

    private static final long serialVersionUID = 1L;

    public Long getStorageId() {
        return storageId;
    }

    public void setStorageId(Long storageId) {
        this.storageId = storageId;
    }

    public Long getWhouseId() {
        return whouseId;
    }

    public void setWhouseId(Long whouseId) {
        this.whouseId = whouseId;
    }

    public Short getType() {
        return type;
    }

    public void setType(Short type) {
        this.type = type;
    }

    public String getStorageCode() {
        return storageCode;
    }

    public void setStorageCode(String storageCode) {
        this.storageCode = storageCode;
    }

    public Integer getSkuCount() {
        return skuCount;
    }

    public void setSkuCount(Integer skuCount) {
        this.skuCount = skuCount;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
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


    /**
     * 临时变量
     */
    
    private String dateString;
    private String whouseName;

	public String getWhouseName() {
		return whouseName;
	}

	public void setWhouseName(String whouseName) {
		this.whouseName = whouseName;
	}

	public String getDateString() {
		return dateString;
	}

	public void setDateString(String dateString) {
		this.dateString = dateString;
	}

    
    
}