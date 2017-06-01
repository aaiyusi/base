package com.samton.erp.api.logistics.bean.entity;

import com.samton.platform.framework.base.BaseBean;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

public class TErpLogisticsRuleDetail extends BaseBean implements Serializable {
    private Long detailId;

    private Long ruleId;

    private Long enterpriseId;

    private Short detailType;

    private String detailInfo;

    private BigDecimal moneyMin;

    private BigDecimal moneyMax;

    private Short moneyUnit;

    private Short skuCount;

    private Short countryRange;

    private Date beginDate;

    private Date endDate;

    private BigDecimal weightMin;

    private BigDecimal weightMax;

    private Short battery;

    private Short paypal;

    private static final long serialVersionUID = 1L;

    public Long getDetailId() {
        return detailId;
    }

    public void setDetailId(Long detailId) {
        this.detailId = detailId;
    }

    public Long getRuleId() {
        return ruleId;
    }

    public void setRuleId(Long ruleId) {
        this.ruleId = ruleId;
    }

    public Long getEnterpriseId() {
        return enterpriseId;
    }

    public void setEnterpriseId(Long enterpriseId) {
        this.enterpriseId = enterpriseId;
    }

    public Short getDetailType() {
        return detailType;
    }

    public void setDetailType(Short detailType) {
        this.detailType = detailType;
    }

    public String getDetailInfo() {
        return detailInfo;
    }

    public void setDetailInfo(String detailInfo) {
        this.detailInfo = detailInfo;
    }

    public BigDecimal getMoneyMin() {
        return moneyMin;
    }

    public void setMoneyMin(BigDecimal moneyMin) {
        this.moneyMin = moneyMin;
    }

    public BigDecimal getMoneyMax() {
        return moneyMax;
    }

    public void setMoneyMax(BigDecimal moneyMax) {
        this.moneyMax = moneyMax;
    }

    public Short getMoneyUnit() {
        return moneyUnit;
    }

    public void setMoneyUnit(Short moneyUnit) {
        this.moneyUnit = moneyUnit;
    }

    public Short getSkuCount() {
        return skuCount;
    }

    public void setSkuCount(Short skuCount) {
        this.skuCount = skuCount;
    }

    public Short getCountryRange() {
        return countryRange;
    }

    public void setCountryRange(Short countryRange) {
        this.countryRange = countryRange;
    }

    public Date getBeginDate() {
        return beginDate;
    }

    public void setBeginDate(Date beginDate) {
        this.beginDate = beginDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public BigDecimal getWeightMin() {
        return weightMin;
    }

    public void setWeightMin(BigDecimal weightMin) {
        this.weightMin = weightMin;
    }

    public BigDecimal getWeightMax() {
        return weightMax;
    }

    public void setWeightMax(BigDecimal weightMax) {
        this.weightMax = weightMax;
    }

    public Short getBattery() {
        return battery;
    }

    public void setBattery(Short battery) {
        this.battery = battery;
    }

    public Short getPaypal() {
        return paypal;
    }

    public void setPaypal(Short paypal) {
        this.paypal = paypal;
    }
}