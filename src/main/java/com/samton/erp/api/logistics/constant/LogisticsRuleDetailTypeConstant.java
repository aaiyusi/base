package com.samton.erp.api.logistics.constant;

/**
 *  物流规则明细类型说明类
 * @author liujiping

 * 2016年4月19日
 */
public final class LogisticsRuleDetailTypeConstant {

	/**
	 * 	1-订单商品包含指定仓库 ----可用
	 */
	public final static short RULE_DATAIL_TYPE_WAREHOUSE = 1;
	
	/**
	 * 2-订单商品包含指定仓位
	 */
	public final static short RULE_DATAIL_TYPE_WAREHOUSE_SEAT = 2;
	
	/**
	 * 	3-订单包含指定邮政编码 ----可用
	 */
	public final static short RULE_DATAIL_TYPE_POSTAL_CODE = 3;
	
	/**
	 * 	4-订单收入金额在指定范围内
	 */
	public final static short RULE_DATAIL_TYPE_ORDER_INCOME_SCOPE = 4;
	
	/**
	 *  5-订单成本价在指定范围内
	 */
	public final static short RULE_DATAIL_TYPE_ORDER_COST_SCOPE = 5;
	
	/**
	 * 6-订单运费收入在指定范围内 ----可用
	 */
	public final static short RULE_DATAIL_TYPE_ORDER_FREIGHT_INCOME_SCOPE = 6;
	
	/**
	 * 	7-订单商品包含指定自定义分类商品 ----可用
	 */
	public final static short RULE_DATAIL_TYPE_GOODS_SORT = 7;
	
	/**
	 * 	8-订单商品包含指定商品 ----可用
	 */
	public final static short RULE_DATAIL_TYPE_GOODS = 8;
	
	/**
	 * 	9-订单指定SKU数量
	 */
	public final static short RULE_DATAIL_TYPE_SKU_TYPE = 9;
	
	/**
	 * 	10-订单目的地为指定国家 ----可用
	 */
	public final static short RULE_DATAIL_TYPE_ORDER_BOURN_STATE = 10;
	
	/**
	 * 	11-订单来源为指定店铺 ----可用
	 */
	public final static short RULE_DATAIL_TYPE_ORDER_SOURCE_SHOP = 11;
	
	/**
	 * 	12-买家选择的指定物流
	 */
	public final static short RULE_DATAIL_TYPE_BUYER_LOGISTICS = 12;
	
	/**
	 *  13-订单日期在指定范围内
	 */
	public final static short RULE_DATAIL_TYPE_ORDER_DATE_SCOPE = 13;
	
	/**
	 * 	14-预估重量在指定范围内 ----可用
	 */
	public final static short RULE_DATAIL_TYPE_ORDER_WEIGHT_SCOPE = 14;
	
	/**
	 * 	15-订单商品是否带电池
	 */
	public final static short RULE_DATAIL_TYPE_ORDER_IS_CELL = 15;
	
	/**
	 *  16-订单是否含有Paypal ID
	 */
	public final static short RULE_DATAIL_TYPE_ORDER_IS_PAYPAL_ID = 16;
	
	/**
	 * 	17-订单指定买家帐号
	 */
	public final static short RULE_DATAIL_TYPE_ORDER_BUYER_ACCOUNTS = 17;
	
}
