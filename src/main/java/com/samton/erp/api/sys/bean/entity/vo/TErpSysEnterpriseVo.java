package com.samton.erp.api.sys.bean.entity.vo;

import com.samton.erp.api.sys.bean.entity.TErpSysEnterprise;

public class TErpSysEnterpriseVo extends TErpSysEnterprise{

	private static final long serialVersionUID = 1131735465558543169L; 
	
	private String managerName;
	
	private Long managerId;
	
	private Integer userCount;
	
	private Integer useUserCount;
	
	private String registeAccount;
	
	public String getRegisteAccount() {
		return registeAccount;
	}

	public void setRegisteAccount(String registeAccount) {
		this.registeAccount = registeAccount;
	}

	public Integer getUseUserCount() {
		return useUserCount;
	}

	public void setUseUserCount(Integer useUserCount) {
		this.useUserCount = useUserCount;
	}

	public Integer getUserCount() {
		return userCount;
	}

	public void setUserCount(Integer userCount) {
		this.userCount = userCount;
	}

	public String getManagerName() {
		return managerName;
	}

	public void setManagerName(String managerName) {
		this.managerName = managerName;
	}

	public Long getManagerId() {
		return managerId;
	}

	public void setManagerId(Long managerId) {
		this.managerId = managerId;
	}
	
	
	
}