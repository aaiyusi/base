package com.samton.erp.api.rate.bean.entity;

import java.io.Serializable;
import java.math.BigDecimal;

import com.samton.platform.framework.base.BaseBean;

public class TErpSysRate extends BaseBean implements Serializable {
    private Long rateId;

    private String currencyCode;

    private String currencyName;

    private BigDecimal standardRate;

    private BigDecimal proportion;

    private Short state;

    private static final long serialVersionUID = 1L;

    public Long getRateId() {
        return rateId;
    }

    public void setRateId(Long rateId) {
        this.rateId = rateId;
    }

    public String getCurrencyCode() {
        return currencyCode;
    }

    public void setCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
    }

    public String getCurrencyName() {
        return currencyName;
    }

    public void setCurrencyName(String currencyName) {
        this.currencyName = currencyName;
    }

    public BigDecimal getStandardRate() {
        return standardRate;
    }

    public void setStandardRate(BigDecimal standardRate) {
        this.standardRate = standardRate;
    }

    public BigDecimal getProportion() {
        return proportion;
    }

    public void setProportion(BigDecimal proportion) {
        this.proportion = proportion;
    }

    public Short getState() {
        return state;
    }

    public void setState(Short state) {
        this.state = state;
    }
}