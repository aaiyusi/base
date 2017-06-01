package com.samton.erp.api.warehouse.bean.entity;

import java.io.Serializable;

import com.samton.platform.framework.base.BaseBean;

public class TErpWhouseCheck extends BaseBean implements Serializable {
    private Long checkId;

    private Long whouseId;
    
    private String storageCode;

    private Integer skuCount;

    private String remark;

    private Short state;

    private Long enterpriseId;

    private static final long serialVersionUID = 1L;

    public Long getCheckId() {
        return checkId;
    }

    public void setCheckId(Long checkId) {
        this.checkId = checkId;
    }

    public Long getWhouseId() {
        return whouseId;
    }

    public void setWhouseId(Long whouseId) {
        this.whouseId = whouseId;
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
    
    private String whouseName;

	public String getWhouseName() {
		return whouseName;
	}

	public void setWhouseName(String whouseName) {
		this.whouseName = whouseName;
	}
}