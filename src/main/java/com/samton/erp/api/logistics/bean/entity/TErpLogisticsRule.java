package com.samton.erp.api.logistics.bean.entity;

import java.io.Serializable;

import com.samton.platform.framework.base.BaseBean;

public class TErpLogisticsRule extends BaseBean implements Serializable {
    private Long ruleId;

    private Long logisticsId;

    private Long enterpriseId;

    private String ruleName;

    private Short orderType;

    private Short autoTransport;

    private String describe;

    private Short priorityLevel;

    private Short status;

    private static final long serialVersionUID = 1L;

    public Long getRuleId() {
        return ruleId;
    }

    public void setRuleId(Long ruleId) {
        this.ruleId = ruleId;
    }

    public Long getLogisticsId() {
        return logisticsId;
    }

    public void setLogisticsId(Long logisticsId) {
        this.logisticsId = logisticsId;
    }

    public Long getEnterpriseId() {
        return enterpriseId;
    }

    public void setEnterpriseId(Long enterpriseId) {
        this.enterpriseId = enterpriseId;
    }

    public String getRuleName() {
        return ruleName;
    }

    public void setRuleName(String ruleName) {
        this.ruleName = ruleName;
    }

    public Short getOrderType() {
        return orderType;
    }

    public void setOrderType(Short orderType) {
        this.orderType = orderType;
    }

    public Short getAutoTransport() {
        return autoTransport;
    }

    public void setAutoTransport(Short autoTransport) {
        this.autoTransport = autoTransport;
    }

    public String getDescribe() {
        return describe;
    }

    public void setDescribe(String describe) {
        this.describe = describe;
    }

    public Short getPriorityLevel() {
        return priorityLevel;
    }

    public void setPriorityLevel(Short priorityLevel) {
        this.priorityLevel = priorityLevel;
    }

    public Short getStatus() {
        return status;
    }

    public void setStatus(Short status) {
        this.status = status;
    }
}