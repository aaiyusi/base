package com.samton.erp.upload.entity;

import java.io.Serializable;

import com.samton.platform.framework.base.BaseBean;

/**
 * 
 *
 * @Description:企业附件实体类
 * @author:     李建洲
 * @date:        2016年10月18日 上午11:41:09
 * Copyright (c) 2016, Sutu. All rights reserved
 */
public class LisEnterpriseAttachme extends BaseBean implements Serializable {
	
	//附件ID
    private Long attId;

    //附件类型
    private String attType;

    //附件名称
    private String attName;

    //附件路径
    private String attPath;

    //附件后缀名
    private String attSuffix;

    //附件大小(KB)
    private Integer attSize;

    //附件描述
    private String attDesc;

    //所属企业ID
    private Long enterpriseId;

    //状态
    private Short state;

    //附件分类
    private Long attCate;

    private static final long serialVersionUID = 1L;

    public Long getAttId() {
        return attId;
    }

    public void setAttId(Long attId) {
        this.attId = attId;
    }

    public String getAttType() {
        return attType;
    }

    public void setAttType(String attType) {
        this.attType = attType;
    }

    public String getAttName() {
        return attName;
    }

    public void setAttName(String attName) {
        this.attName = attName;
    }

    public String getAttPath() {
        return attPath;
    }

    public void setAttPath(String attPath) {
        this.attPath = attPath;
    }

    public String getAttSuffix() {
        return attSuffix;
    }

    public void setAttSuffix(String attSuffix) {
        this.attSuffix = attSuffix;
    }

    public Integer getAttSize() {
        return attSize;
    }

    public void setAttSize(Integer attSize) {
        this.attSize = attSize;
    }

    public String getAttDesc() {
        return attDesc;
    }

    public void setAttDesc(String attDesc) {
        this.attDesc = attDesc;
    }

    public Long getEnterpriseId() {
        return enterpriseId;
    }

    public void setEnterpriseId(Long enterpriseId) {
        this.enterpriseId = enterpriseId;
    }

    public Short getState() {
        return state;
    }

    public void setState(Short state) {
        this.state = state;
    }

    public Long getAttCate() {
        return attCate;
    }

    public void setAttCate(Long attCate) {
        this.attCate = attCate;
    }
}