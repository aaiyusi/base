/**
 * 
 */
package com.samton.erp.api.orders.bean.entity.vo;

import java.util.List;

import com.samton.erp.api.orders.bean.entity.TErpOrders;

/**
 *
 * @Description:订单商品明细实体类
 * @author:     lijianzhou
 * @date:       2016年4月28日
 * Copyright (c) 2015, Samton. All rights reserved
 */
public class OrdersItemChild {

	/**
	 * 主表
	 */
	private TErpOrders ordersItem;
	/**
	 * 明细表
	 */
	private List<OrderItemVo> itemList;
	public TErpOrders getOrdersItem() {
		return ordersItem;
	}
	public List<OrderItemVo> getItemList() {
		return itemList;
	}
	public void setOrdersItem(TErpOrders ordersItem) {
		this.ordersItem = ordersItem;
	}
	public void setItemList(List<OrderItemVo> itemList) {
		this.itemList = itemList;
	}
	
}
