package com.samton.erp.api.print.bean.entity;

import com.samton.platform.framework.base.BaseBean;
import java.io.Serializable;

public class TErpPrintTemplate extends BaseBean implements Serializable {
	
	//主键ID
    private Long tempId;

    //标签名称
    private String name;
    
    //标签类型
    private Short tempType;

    //规格类型
    private Short standard;

    //长
    private Integer tLength;

    //宽
    private Integer tWidth;

    //打印内容
    private String content;

    //状态
    private Short state;

    //企业ID
    private Long enterpriseId;

    private static final long serialVersionUID = 1L;

    public Long getTempId() {
        return tempId;
    }

    public void setTempId(Long tempId) {
        this.tempId = tempId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Short getTempType() {
        return tempType;
    }

    public void setTempType(Short tempType) {
        this.tempType = tempType;
    }

    public Short getStandard() {
        return standard;
    }

    public void setStandard(Short standard) {
        this.standard = standard;
    }

    public Integer gettLength() {
        return tLength;
    }

    public void settLength(Integer tLength) {
        this.tLength = tLength;
    }

    public Integer gettWidth() {
        return tWidth;
    }

    public void settWidth(Integer tWidth) {
        this.tWidth = tWidth;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
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