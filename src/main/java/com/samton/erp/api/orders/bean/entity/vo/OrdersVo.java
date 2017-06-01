/**
 * 
 */
package com.samton.erp.api.orders.bean.entity.vo;

import com.samton.erp.api.orders.bean.entity.TErpOrders;

/**
 *
 * @Description:订单实体类
 * @author:     lijianzhou
 * @date:       2016年4月12日
 * Copyright (c) 2015, Samton. All rights reserved
 */
public class OrdersVo extends TErpOrders {

	private static final long serialVersionUID = 1L;

	/**
	 * 物流公司名称
	 */
	private String logisticsName;

	public String getLogisticsName() {
		return logisticsName;
	}

	public void setLogisticsName(String logisticsName) {
		this.logisticsName = logisticsName;
	}
	
}
