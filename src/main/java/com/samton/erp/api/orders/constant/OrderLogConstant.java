/**
 * 
 */
package com.samton.erp.api.orders.constant;

/**
 *
 * @Description:订单日志常量类
 * @author:     lijianzhou
 * @date:       2016年3月29日
 * Copyright (c) 2015, Samton. All rights reserved
 */
public final class OrderLogConstant {

	//添加订单
	public final static short ADD_ORDER = 1;
	
	//修改订单
	public final static short UPDATE_ORDER = 2;
	
	//添加订单商品
	public final static short ADD_PRODUCT = 3;
	
	//修改订单商品
	public final static short UPDATE_PRODUCT = 4;
	
	//作废订单
	public final static short CANCEL_ORDER = 5;
	
	//激活订单
	public final static short ENABLE_ORDER = 6;
	
	//修改订单商品物流信息
	public final static short UPDATE_PRODUCT_LOGIST = 7;
	
	//重发订单
	public final static short RETRY_ORDER = 8;
}
