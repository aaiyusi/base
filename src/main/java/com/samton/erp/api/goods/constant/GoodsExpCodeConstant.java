package com.samton.erp.api.goods.constant;

import org.springframework.stereotype.Component;

import com.samton.platform.framework.exception.constant.ExpCodeConstant;

/**
 * 
 * 
 * @Description:反馈意见异常处理常量
 * @author: Alex
 * @date: 2016年3月2日 下午2:28:59 Copyright (c) 2015, Samton. All rights reserved
 */
@Component
public class GoodsExpCodeConstant extends ExpCodeConstant {

	public static final String GOODS_NULL = "1101";
	public static final String GOODS_NAME_NULL = "1102";
	public static final String GOODS_ENAME_NULL = "1103";
	public static final String GOODS_SKU_NULL = "1104";
	public static final String GOODS_CATALOGIID_NULL = "1105";
	public static final String GOODS_SALESTATE_NULL = "1106";
	public static final String GOODS_ID_NULL = "1107";
	public static final String GOODS_SKU_REPEAT = "1108";

	static {
		msgMap.put(GOODS_NULL, "商品查询条件不能为空！");
		msgMap.put(GOODS_NAME_NULL, "商品中文名称不能为空！");
		msgMap.put(GOODS_ENAME_NULL, "商品英文名称不能为空！");
		msgMap.put(GOODS_SKU_NULL, "商品SKU值不能为空！");
		msgMap.put(GOODS_CATALOGIID_NULL, "商品目录不能为空！");
		msgMap.put(GOODS_SALESTATE_NULL, "商品销售状态不能为空！");
		msgMap.put(GOODS_ID_NULL, "商品ID不存在！");
		msgMap.put(GOODS_SKU_REPEAT, "商品SKU重复！");
	}
}
