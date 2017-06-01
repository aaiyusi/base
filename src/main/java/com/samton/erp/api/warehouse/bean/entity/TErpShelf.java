package com.samton.erp.api.warehouse.bean.entity;

import java.io.Serializable;

import com.samton.platform.framework.base.BaseBean;

public class TErpShelf extends BaseBean implements Serializable {
    private Long shelfId;

    private Long whouseId;

    private String shelfName;

    private String shelfCode;

    private Integer line;

    private String shousePrefix;

    private Integer shouseCount;

    private Integer tier;

    private Integer inventoryCount;

    private Short state;

    private Long enterpriseId;

    private String connector;

    private static final long serialVersionUID = 1L;

    public Long getShelfId() {
        return shelfId;
    }

    public void setShelfId(Long shelfId) {
        this.shelfId = shelfId;
    }

    public Long getWhouseId() {
        return whouseId;
    }

    public void setWhouseId(Long whouseId) {
        this.whouseId = whouseId;
    }

    public String getShelfName() {
        return shelfName;
    }

    public void setShelfName(String shelfName) {
        this.shelfName = shelfName;
    }

    public String getShelfCode() {
        return shelfCode;
    }

    public void setShelfCode(String shelfCode) {
        this.shelfCode = shelfCode;
    }

    public Integer getLine() {
        return line;
    }

    public void setLine(Integer line) {
        this.line = line;
    }

    public String getShousePrefix() {
        return shousePrefix;
    }

    public void setShousePrefix(String shousePrefix) {
        this.shousePrefix = shousePrefix;
    }

    public Integer getShouseCount() {
        return shouseCount;
    }

    public void setShouseCount(Integer shouseCount) {
        this.shouseCount = shouseCount;
    }

    public Integer getTier() {
        return tier;
    }

    public void setTier(Integer tier) {
        this.tier = tier;
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

    public String getConnector() {
        return connector;
    }

    public void setConnector(String connector) {
        this.connector = connector;
    }
}