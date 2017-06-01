package com.samton.erp.api.logistics.bean.vo;

public class LogisticsCompanyParamVO {

	private short type;//1系统创建，2.自定义创建
	
	private String name;
	

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public short getType() {
		return type;
	}

	public void setType(short type) {
		this.type = type;
	}
	
	
	
}
