package com.samton.erp.api.sys.bean.entity;

import com.samton.platform.framework.base.BaseBean;
import java.io.Serializable;
import java.util.Date;

public class TErpSysEnterpriseSet extends BaseBean implements Serializable {
    private Long enterpriseId;

    private String enterpriseLogo;

    private Integer totalStorageSize;

    private Integer useStorageSize;

    private Integer userCount;

    private Integer useUserCount;

    private Integer visitingCardCount;

    private Integer useVisitingCardCount;

    private Integer fileUploadSize;

    private Date versionEndDate;

    private Long versionId;

    private Short versionState;

    private Short state;

    private static final long serialVersionUID = 1L;

    public Long getEnterpriseId() {
        return enterpriseId;
    }

    public void setEnterpriseId(Long enterpriseId) {
        this.enterpriseId = enterpriseId;
    }

    public String getEnterpriseLogo() {
        return enterpriseLogo;
    }

    public void setEnterpriseLogo(String enterpriseLogo) {
        this.enterpriseLogo = enterpriseLogo;
    }

    public Integer getTotalStorageSize() {
        return totalStorageSize;
    }

    public void setTotalStorageSize(Integer totalStorageSize) {
        this.totalStorageSize = totalStorageSize;
    }

    public Integer getUseStorageSize() {
        return useStorageSize;
    }

    public void setUseStorageSize(Integer useStorageSize) {
        this.useStorageSize = useStorageSize;
    }

    public Integer getUserCount() {
        return userCount;
    }

    public void setUserCount(Integer userCount) {
        this.userCount = userCount;
    }

    public Integer getUseUserCount() {
        return useUserCount;
    }

    public void setUseUserCount(Integer useUserCount) {
        this.useUserCount = useUserCount;
    }

    public Integer getVisitingCardCount() {
        return visitingCardCount;
    }

    public void setVisitingCardCount(Integer visitingCardCount) {
        this.visitingCardCount = visitingCardCount;
    }

    public Integer getUseVisitingCardCount() {
        return useVisitingCardCount;
    }

    public void setUseVisitingCardCount(Integer useVisitingCardCount) {
        this.useVisitingCardCount = useVisitingCardCount;
    }

    public Integer getFileUploadSize() {
        return fileUploadSize;
    }

    public void setFileUploadSize(Integer fileUploadSize) {
        this.fileUploadSize = fileUploadSize;
    }

    public Date getVersionEndDate() {
        return versionEndDate;
    }

    public void setVersionEndDate(Date versionEndDate) {
        this.versionEndDate = versionEndDate;
    }

    public Long getVersionId() {
        return versionId;
    }

    public void setVersionId(Long versionId) {
        this.versionId = versionId;
    }

    public Short getVersionState() {
        return versionState;
    }

    public void setVersionState(Short versionState) {
        this.versionState = versionState;
    }

    public Short getState() {
        return state;
    }

    public void setState(Short state) {
        this.state = state;
    }
}