package com.samton.erp.api.orders.bean.entity;

import java.io.Serializable;
import java.util.Date;

public class TErpSync implements Serializable {
    private Long syncId;

    private Long shopId;

    private Date syncDate;

    private String data;

    private Short dataType;

    private Short platformType;

    private Long enterpriseId;

    private Short syncState;

    private String dataId;

    private Date createDate;

    private static final long serialVersionUID = 1L;

    public Long getSyncId() {
        return syncId;
    }

    public void setSyncId(Long syncId) {
        this.syncId = syncId;
    }

    public Long getShopId() {
        return shopId;
    }

    public void setShopId(Long shopId) {
        this.shopId = shopId;
    }

    public Date getSyncDate() {
        return syncDate;
    }

    public void setSyncDate(Date syncDate) {
        this.syncDate = syncDate;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    public Short getDataType() {
        return dataType;
    }

    public void setDataType(Short dataType) {
        this.dataType = dataType;
    }

    public Short getPlatformType() {
        return platformType;
    }

    public void setPlatformType(Short platformType) {
        this.platformType = platformType;
    }

    public Long getEnterpriseId() {
        return enterpriseId;
    }

    public void setEnterpriseId(Long enterpriseId) {
        this.enterpriseId = enterpriseId;
    }

    public Short getSyncState() {
        return syncState;
    }

    public void setSyncState(Short syncState) {
        this.syncState = syncState;
    }

    public String getDataId() {
        return dataId;
    }

    public void setDataId(String dataId) {
        this.dataId = dataId;
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }
}