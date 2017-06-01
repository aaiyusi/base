/**
 * 
 */
package com.samton.erp.api.orders.bean.entity.vo;

import com.samton.erp.api.orders.bean.entity.TErpOrders;

/**
 *
 * @Description:订单物流运单号实体类
 * @author:     lijianzhou
 * @date:       2016年4月18日
 * Copyright (c) 2015, Samton. All rights reserved
 */
public class OrderTnumberVo extends TErpOrders {

	private static final long serialVersionUID = 1L;
	
	/**
	 * 物流名称
	 */
	private String logisticsName;
	
	/**
	 * 物流公司名称
	 */
	private String companyName;

	/**
	 * 运单号
	 */
	private String tnumber;
	
	/**
	 * 是否使用
	 */
	private Short isUsed;
	
	private String isUseCn;
	
	private Long tnumId;

	public String getLogisticsName() {
		return logisticsName;
	}

	public void setLogisticsName(String logisticsName) {
		this.logisticsName = logisticsName;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public String getTnumber() {
		return tnumber;
	}

	public void setTnumber(String tnumber) {
		this.tnumber = tnumber;
	}

	public Short getIsUsed() {
		return isUsed;
	}

	public void setIsUsed(Short isUsed) {
		this.isUsed = isUsed;
	}

	public Long getTnumId() {
		return tnumId;
	}

	public void setTnumId(Long tnumId) {
		this.tnumId = tnumId;
	}

	public String getIsUseCn() {
		return isUseCn;
	}

	public void setIsUseCn(String isUseCn) {
		this.isUseCn = isUseCn;
	}
}
