/**
 * 
 */
package com.samton.erp.api.orders.constant;

import org.springframework.stereotype.Component;

import com.samton.platform.framework.exception.constant.ExpCodeConstant;

/**
 *
 * @Description:订单异常处理常量
 * @author:     lijianzhou
 * @date:       2016年3月26日
 * Copyright (c) 2015, Samton. All rights reserved
 */
@Component
public class OrderExpCodeConstant extends ExpCodeConstant{

	public static final String ORDER_INFO_NULL = "401";
	public static final String ORDER_NAME_NULL = "402";
	public static final String ORDER_DATE_NULL = "403";
	public static final String ORDER_DEALNUM_NULL = "404";
	public static final String ORDER_NAME_EXISTS = "405";
	public static final String ORDER_DEALNUM_EXISTS = "406";
	public static final String GOODS_SKU_NO = "407";
	public static final String ORDER_GOODS_EXISTS = "408";
	public static final String ORDER_NOT_EXISTS = "409";
	public static final String ORDER_PRODUCT_NOT_EXISTS = "410";
	public static final String ORDER_YET_DISTRUTE = "411";
	public static final String ORDER_DISABLE_DISBUTE = "412";
	public static final String ORDER_NO_BILLS = "413";
	public static final String ORDER_YES_CHECKED = "414";
	public static final String ORDER_SCAN_CANCEL = "415";
	public static final String PARAMTER_ILLEGAL = "416";
	public static final String ORDER_TRADE_ERROR = "417";
	public static final String COUNTRY_NOT_EXISTS = "418";
	public static final String ORDER_NO_GOODS = "419";
	public static final String ORDER_DEAL_FAIL = "420";
	public static final String ORDER_GOODS_NO_SALE = "421";
	
	static{
		msgMap.put(ORDER_INFO_NULL, "订单信息为空！");
		msgMap.put(ORDER_NAME_NULL, "订单编号为空！");
		msgMap.put(ORDER_DATE_NULL, "订单时间为空！");
		msgMap.put(ORDER_DEALNUM_NULL, "订单交易号为空！");
		msgMap.put(ORDER_NAME_EXISTS, "订单编号已存在！");
		msgMap.put(ORDER_DEALNUM_EXISTS, "交易号已存在！");
		msgMap.put(GOODS_SKU_NO, "库存SKU不存在！");
		msgMap.put(ORDER_GOODS_EXISTS, "订单已存在该库存SKU，请勿重复添加！");
		msgMap.put(ORDER_NOT_EXISTS, "订单不存在,请检查订单编号或运单号是否正确！");
		msgMap.put(ORDER_PRODUCT_NOT_EXISTS, "订单中不存在此SKU,请重新扫描!");
		msgMap.put(ORDER_YET_DISTRUTE, "此订单已发货或已完成，不能验货！");
		msgMap.put(ORDER_DISABLE_DISBUTE, "此订单状态是禁止发货，不能验货！");
		msgMap.put(ORDER_NO_BILLS, "此订单不存在,请检查订单编号或运单号是否存在！");
		msgMap.put(ORDER_YES_CHECKED, "此订单状态是已验货,不能重复验货！");
		msgMap.put(ORDER_SCAN_CANCEL, "此订单已作废，不能验货！");
		msgMap.put(PARAMTER_ILLEGAL, "参数值不对！");
		msgMap.put(ORDER_TRADE_ERROR, "填充的订单中存在无物流或填充成功的订单！");
		msgMap.put(COUNTRY_NOT_EXISTS, "国家不存在！");
		msgMap.put(ORDER_NO_GOODS, "订单下无可发货商品！");
		msgMap.put(ORDER_DEAL_FAIL, "批量处理订单失败！");
		msgMap.put(ORDER_GOODS_NO_SALE, "商品是停止销售状态不能添加！");
	}
}
