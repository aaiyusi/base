/**
 * 
 */
package com.samton.erp.api.orders.bean.entity.vo;

import com.samton.erp.api.orders.bean.entity.TErpOrdersDeliver;

/**
 *
 * @Description:订单发货实体类
 * @author:     lijianzhou
 * @date:       2016年4月11日
 * Copyright (c) 2015, Samton. All rights reserved
 */
public class OrdersDeliverVo extends TErpOrdersDeliver {

	private static final long serialVersionUID = 1L;

	/**
	 * 订单编号
	 */
	private String name;
	
	/**
	 * 店铺
	 */
	private String shopName;
	
	/**
	 * 货运单号
	 */
	private String bills;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getShopName() {
		return shopName;
	}

	public void setShopName(String shopName) {
		this.shopName = shopName;
	}

	public String getBills() {
		return bills;
	}

	public void setBills(String bills) {
		this.bills = bills;
	}
}
