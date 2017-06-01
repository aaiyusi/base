package com.samton.erp.upload.entity;

import java.io.Serializable;

import com.samton.platform.framework.base.BaseBean;

/**
 * 
 *
 * @Description:图片分类实体类
 * @author:     李建洲
 * @date:        2016年10月18日 上午11:43:25
 * Copyright (c) 2016, Sutu. All rights reserved
 */
public class LisPicCate extends BaseBean implements Serializable {
	
	//分类id
    private Long cateId;

    //分类名称
    private String cateName;

    //父分类id
    private Long parentCateId;

    //企业id
    private Long enterpriseId;

    //状态
    private Short state;

    private static final long serialVersionUID = 1L;

    public Long getCateId() {
        return cateId;
    }

    public void setCateId(Long cateId) {
        this.cateId = cateId;
    }

    public String getCateName() {
        return cateName;
    }

    public void setCateName(String cateName) {
        this.cateName = cateName;
    }

    public Long getParentCateId() {
        return parentCateId;
    }

    public void setParentCateId(Long parentCateId) {
        this.parentCateId = parentCateId;
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
}