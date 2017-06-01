/**
 * 
 */
package com.samton.erp.api.orders.constant;

/**
 *
 * @Description:订单状态常量类
 * @author:     lijianzhou
 * @date:       2016年3月26日
 * Copyright (c) 2015, Samton. All rights reserved
 */
public final class OrderStateConstant {

	//未发货
	public final static short ORDER_NO_SHIP = 0;
	
	//待处理
	public final static short ORDER_ON_DEAL = 1;
	
	//配货中
	public final static short ORDER_ON_DISTRIBUT = 2;
	
	//已发货
	public final static short ORDER_ALREADY_SHIP = 3;
	
	//已作废
	public final static short ORDER_ALREADY_CANCEL = 4;
	
	//处理失败
	public final static short ORDER_DEAL_FAIL = 5;
	
	//系统订单
	public final static short ORDER_TYPE_SYSTEM = 0;
	
	//手工订单
	public final static short ORDER_TYPE_HAND = 1;
	
	//订单留言未处理
	public final static short ORDER_MSG_NO_DEAL = 0;
	
	//订单留言已处理
	public final static short ORDER_MSG_YET_DEAL = 1;
	
	//订单未打印
	public final static short ORDER_NO_PRINT = 0;
	
	//订单已打印
	public final static short ORDER_YET_PRINT = 1;
	
	//未验货
	public final static short ORDER_NO_CHECK = 0;
	
	//已验货
	public final static short ORDER_YES_CHECK = 1;
}
