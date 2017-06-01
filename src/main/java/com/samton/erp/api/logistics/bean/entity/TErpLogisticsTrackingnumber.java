package com.samton.erp.api.logistics.bean.entity;

import com.samton.platform.framework.base.BaseBean;
import java.io.Serializable;
import java.util.Date;

public class TErpLogisticsTrackingnumber extends BaseBean implements Serializable {
    private Long tnumId;

    private Long logisticsId;

    private String tnumber;

    private Short isUsed;

    private Date useTime;

    private Short state;

    private Long enterpriseId;

    private Long ordersId;

    private static final long serialVersionUID = 1L;

    public Long getTnumId() {
        return tnumId;
    }

    public void setTnumId(Long tnumId) {
        this.tnumId = tnumId;
    }

    public Long getLogisticsId() {
        return logisticsId;
    }

    public void setLogisticsId(Long logisticsId) {
        this.logisticsId = logisticsId;
    }

    public String getTnumber() {
        return tnumber;
    }

    public void setTnumber(String tnumber) {
        this.tnumber = tnumber;
    }

    public Short getIsUsed() {
        return isUsed;
    }

    public void setIsUsed(Short isUsed) {
        this.isUsed = isUsed;
    }

    public Date getUseTime() {
        return useTime;
    }

    public void setUseTime(Date useTime) {
        this.useTime = useTime;
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

    public Long getOrdersId() {
        return ordersId;
    }

    public void setOrdersId(Long ordersId) {
        this.ordersId = ordersId;
    }
}