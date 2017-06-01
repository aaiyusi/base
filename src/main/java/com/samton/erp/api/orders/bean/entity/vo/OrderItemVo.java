/**
 * 
 */
package com.samton.erp.api.orders.bean.entity.vo;

import com.samton.erp.api.orders.bean.entity.TErpOrdersDetail;

/**
 *
 * @Description:订单值对象
 * @author:     lijianzhou
 * @date:       2016年3月26日
 * Copyright (c) 2015, Samton. All rights reserved
 */
public class OrderItemVo extends TErpOrdersDetail{

	private static final long serialVersionUID = 2549425729362862326L;
	//订单明细
	private String sku;
	
	//订单id
	private Long ordersId;
	public String getSku() {
		return sku;
	}
	public void setSku(String sku) {
		this.sku = sku;
	}
	public Long getOrdersId() {
		return ordersId;
	}
	public void setOrdersId(Long ordersId) {
		this.ordersId = ordersId;
	}
}
