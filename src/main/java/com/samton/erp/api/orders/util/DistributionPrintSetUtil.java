/**
 * 
 */
package com.samton.erp.api.orders.util;

import java.io.Serializable;

/**
 *
 * @Description:配货清单打印设置工具类
 * @author:     lijianzhou
 * @date:       2016年4月5日
 * Copyright (c) 2015, Samton. All rights reserved
 */
public class DistributionPrintSetUtil implements Serializable{

	private static final long serialVersionUID = 1L;

	//订单编号
	public static final String NAME = "name";
	private static final String NAME_VALUE = "订单编号";
	
	//货运单号
	public static final String BILLS = "bills";
	private static final String BILLS_VALUE = "货运单号";
	
	//平台
	public static final String PLATFORM_TYPE = "platform_type";
	private static final String PLATFORM_TYPE_VALUE = "平台";
	
	//交易编号
	public static final String DEAL_NUM = "deal_num";
	private static final String DEAL_NUM_VALUE = "交易编号";
	
	//店铺
	public static final String SHOP_NAME = "shop_name";
	private static final String SHOP_NAME_VALUE = "店铺";
	
	//商品图片
	public static final String STORGET_IMAGE = "storget_image";
	private static final String STORGET_IMAGE_VALUE = "商品图片";
	
	//备注
	public static final String REMARK = "remark";
	private static final String REMARK_VALUE = "备注";
	
	//库存sku
	public static final String SKU = "sku";
	private static final String SKU_VALUE = "库存sku";
	
	//原厂sku
	public static final String ORIGINAL_SKU = "original_sku";
	private static final String ORIGINAL_SKU_VALUE = "原厂sku";
	
	//多商品属性
	public static final String GOODS_INFO = "goods_info";
	private static final String GOODS_INFO_VALUE = "多商品属性";
	
	//商品名称
	public static final String E_NAME = "e_name";
	private static final String E_NAME_VALUE = "商品名称";
	
	//商品数量
	public static final String COUNT = "count";
	private static final String COUNT_VALUE = "商品数量";
	
	//仓库/仓位编号
	public static final String WAREHOUSE = "warehouse";
	private static final String WAREHOUSE_VALUE = "仓库/仓位编号";
	
	public static ConstantsMap valueMap;
	static{
		valueMap = new ConstantsMap();
		valueMap.putConstant(NAME, NAME_VALUE);
		valueMap.putConstant(BILLS, BILLS_VALUE);
		valueMap.putConstant(PLATFORM_TYPE, PLATFORM_TYPE_VALUE);
		valueMap.putConstant(DEAL_NUM, DEAL_NUM_VALUE);
		valueMap.putConstant(SHOP_NAME, SHOP_NAME_VALUE);
		valueMap.putConstant(STORGET_IMAGE, STORGET_IMAGE_VALUE);
		valueMap.putConstant(REMARK, REMARK_VALUE);
		valueMap.putConstant(SKU, SKU_VALUE);
		valueMap.putConstant(ORIGINAL_SKU, ORIGINAL_SKU_VALUE);
		valueMap.putConstant(GOODS_INFO, GOODS_INFO_VALUE);
		valueMap.putConstant(E_NAME, E_NAME_VALUE);
		valueMap.putConstant(COUNT, COUNT_VALUE);
		valueMap.putConstant(WAREHOUSE, WAREHOUSE_VALUE);
	}
}
