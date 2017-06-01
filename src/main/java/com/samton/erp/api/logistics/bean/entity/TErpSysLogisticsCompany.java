package com.samton.erp.api.logistics.bean.entity;

import com.samton.platform.framework.base.BaseBean;

import java.io.Serializable;
import java.util.Date;

public class TErpSysLogisticsCompany extends BaseBean implements Serializable {
    private Long sysLogisticsId;

    private String eCode;

    private String name;

    private Short state;

    private Long enterpriseId;

    private Short type;
    
    private Short isAuth;

    private Date authDate;
    
    
    private static final long serialVersionUID = 1L;

    public Long getSysLogisticsId() {
        return sysLogisticsId;
    }

    public void setSysLogisticsId(Long sysLogisticsId) {
        this.sysLogisticsId = sysLogisticsId;
    }

    public String geteCode() {
        return eCode;
    }

    public void seteCode(String eCode) {
        this.eCode = eCode;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

    public Short getType() {
        return type;
    }

    public void setType(Short type) {
        this.type = type;
    }

	public Short getIsAuth() {
		return isAuth;
	}

	public void setIsAuth(Short isAuth) {
		this.isAuth = isAuth;
	}

	public Date getAuthDate() {
		return authDate;
	}

	public void setAuthDate(Date authDate) {
		this.authDate = authDate;
	}
    
    
}