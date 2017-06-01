package com.samton.erp.api.orders.bean.entity;

import java.io.Serializable;
import java.util.Date;

import com.samton.platform.framework.base.BaseBean;

public class TErpOrdersDeliver extends BaseBean implements Serializable {
    private Long deliverId;

    private Long ordersId;

    private String remark;

    private Short deductStorage;

    private Long deliverUserId;

    private Date deliverTime;

    private String deliverResult;

    private Short state;

    private Long enterpriseId;

    private static final long serialVersionUID = 1L;

    public Long getDeliverId() {
        return deliverId;
    }

    public void setDeliverId(Long deliverId) {
        this.deliverId = deliverId;
    }

    public Long getOrdersId() {
        return ordersId;
    }

    public void setOrdersId(Long ordersId) {
        this.ordersId = ordersId;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    public Short getDeductStorage() {
        return deductStorage;
    }

    public void setDeductStorage(Short deductStorage) {
        this.deductStorage = deductStorage;
    }

    public Long getDeliverUserId() {
        return deliverUserId;
    }

    public void setDeliverUserId(Long deliverUserId) {
        this.deliverUserId = deliverUserId;
    }

    public Date getDeliverTime() {
        return deliverTime;
    }

    public void setDeliverTime(Date deliverTime) {
        this.deliverTime = deliverTime;
    }

    public String getDeliverResult() {
        return deliverResult;
    }

    public void setDeliverResult(String deliverResult) {
        this.deliverResult = deliverResult;
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