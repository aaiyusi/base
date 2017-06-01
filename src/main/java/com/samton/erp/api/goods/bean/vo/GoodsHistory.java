package com.samton.erp.api.goods.bean.vo;

import java.io.Serializable;
import java.math.BigDecimal;

import com.samton.platform.framework.base.BaseBean;

/**
 * 
 *
 * @Description:商品历史信息
 * @author:     Alex
 * @date:        2016年4月21日 上午10:07:08
 * Copyright (c) 2016, Samton. All rights reserved
 */
public class GoodsHistory extends BaseBean implements Serializable {

    private static final long serialVersionUID = 1L;
	
    //订单编号
	private String orderNum;
	
	//总数量
	private Integer count;

	//单价
    private BigDecimal price;

    //卖家名称
    private String customerName;

    //订单状态
    private Short orderState;

	public String getOrderNum() {
		return orderNum;
	}

	public void setOrderNum(String orderNum) {
		this.orderNum = orderNum;
	}

	public Integer getCount() {
		return count;
	}

	public void setCount(Integer count) {
		this.count = count;
	}

	public BigDecimal getPrice() {
		return price;
	}

	public void setPrice(BigDecimal price) {
		this.price = price;
	}

	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

	public Short getOrderState() {
		return orderState;
	}

	public void setOrderState(Short orderState) {
		this.orderState = orderState;
	}

}
