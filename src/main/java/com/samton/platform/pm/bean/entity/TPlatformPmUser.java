package com.samton.platform.pm.bean.entity;

import java.io.Serializable;
import java.util.Date;

import com.samton.platform.framework.base.BaseBean;


public class TPlatformPmUser extends BaseBean implements Serializable {
    private Long userId;

    private String loginName;

    private Short loginFlag;

    private String pwd;

    private String userName;

    private String email;

    private Short emailVerify;

    private String mobilePhone;

    private Short mobileVerify;

    private Short activeState;

    private Short isLock;

    private Date lastLoginTime;

    private Integer loginCount;

    private String appDeviceId;

    private Short registerType;

    private String registerAddress;

    private Long systemId;

    private Short state;

    private Short isAdmin;
    
    private Short isManager;
    
    private Long enterpriseId;
    public Long getEnterpriseId() {
		return enterpriseId;
	}

	public void setEnterpriseId(Long enterpriseId) {
		this.enterpriseId = enterpriseId;
	}

	private static final long serialVersionUID = 1L;

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getLoginName() {
        return loginName;
    }

    public void setLoginName(String loginName) {
        this.loginName = loginName;
    }

    public Short getLoginFlag() {
        return loginFlag;
    }

    public void setLoginFlag(Short loginFlag) {
        this.loginFlag = loginFlag;
    }

    public String getPwd() {
        return pwd;
    }

    public void setPwd(String pwd) {
        this.pwd = pwd;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Short getEmailVerify() {
        return emailVerify;
    }

    public void setEmailVerify(Short emailVerify) {
        this.emailVerify = emailVerify;
    }

    public String getMobilePhone() {
        return mobilePhone;
    }

    public void setMobilePhone(String mobilePhone) {
        this.mobilePhone = mobilePhone;
    }

    public Short getMobileVerify() {
        return mobileVerify;
    }

    public void setMobileVerify(Short mobileVerify) {
        this.mobileVerify = mobileVerify;
    }

    public Short getActiveState() {
        return activeState;
    }

    public void setActiveState(Short activeState) {
        this.activeState = activeState;
    }

    public Short getIsLock() {
        return isLock;
    }

    public void setIsLock(Short isLock) {
        this.isLock = isLock;
    }

    public Date getLastLoginTime() {
        return lastLoginTime;
    }

    public void setLastLoginTime(Date lastLoginTime) {
        this.lastLoginTime = lastLoginTime;
    }

    public Integer getLoginCount() {
        return loginCount;
    }

    public void setLoginCount(Integer loginCount) {
        this.loginCount = loginCount;
    }

    public String getAppDeviceId() {
        return appDeviceId;
    }

    public void setAppDeviceId(String appDeviceId) {
        this.appDeviceId = appDeviceId;
    }

    public Short getRegisterType() {
        return registerType;
    }

    public void setRegisterType(Short registerType) {
        this.registerType = registerType;
    }

    public String getRegisterAddress() {
        return registerAddress;
    }

    public void setRegisterAddress(String registerAddress) {
        this.registerAddress = registerAddress;
    }

    public Long getSystemId() {
        return systemId;
    }

    public void setSystemId(Long systemId) {
        this.systemId = systemId;
    }

    public Short getState() {
        return state;
    }

    public void setState(Short state) {
        this.state = state;
    }

	public Short getIsAdmin() {
		return isAdmin;
	}

	public void setIsAdmin(Short isAdmin) {
		this.isAdmin = isAdmin;
	}

	public Short getIsManager() {
		return isManager;
	}

	public void setIsManager(Short isManager) {
		this.isManager = isManager;
	}
    
	private Long[] roles;
	private Long[] shopIds;
	private Long[] whouseIds;
	public Long[] getRoles() {
		return roles;
	}

	public void setRoles(Long[] roles) {
		this.roles = roles;
	}

	public Long[] getShopIds() {
		return shopIds;
	}

	public void setShopIds(Long[] shopIds) {
		this.shopIds = shopIds;
	}

	public Long[] getWhouseIds() {
		return whouseIds;
	}

	public void setWhouseIds(Long[] whouseIds) {
		this.whouseIds = whouseIds;
	}
	
}