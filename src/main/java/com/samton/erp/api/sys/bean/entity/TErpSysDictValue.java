package com.samton.erp.api.sys.bean.entity;

import java.io.Serializable;

public class TErpSysDictValue implements Serializable {
    private Long dictValueId;

    private Long dictTypeId;

    private String dictName;

    private String dictValue;

    private String dictValueDesc;

    private Integer orderNum;

    private Long enterpriseId;
    
    private String countryShort;
    
    private Long rateId;

    private static final long serialVersionUID = 1L;

    public Long getDictValueId() {
        return dictValueId;
    }

    public void setDictValueId(Long dictValueId) {
        this.dictValueId = dictValueId;
    }

    public Long getDictTypeId() {
        return dictTypeId;
    }

    public void setDictTypeId(Long dictTypeId) {
        this.dictTypeId = dictTypeId;
    }

    public String getDictName() {
        return dictName;
    }

    public void setDictName(String dictName) {
        this.dictName = dictName;
    }

    public String getDictValue() {
        return dictValue;
    }

    public void setDictValue(String dictValue) {
        this.dictValue = dictValue;
    }

    public String getDictValueDesc() {
        return dictValueDesc;
    }

    public void setDictValueDesc(String dictValueDesc) {
        this.dictValueDesc = dictValueDesc;
    }

    public Integer getOrderNum() {
        return orderNum;
    }

    public void setOrderNum(Integer orderNum) {
        this.orderNum = orderNum;
    }

    public Long getEnterpriseId() {
        return enterpriseId;
    }

    public void setEnterpriseId(Long enterpriseId) {
        this.enterpriseId = enterpriseId;
    }

	public String getCountryShort() {
		return countryShort;
	}

	public void setCountryShort(String countryShort) {
		this.countryShort = countryShort;
	}

	public Long getRateId() {
		return rateId;
	}

	public void setRateId(Long rateId) {
		this.rateId = rateId;
	}
}