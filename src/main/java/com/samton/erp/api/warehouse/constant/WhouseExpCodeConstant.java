/**
 * 
 */
package com.samton.erp.api.warehouse.constant;

import org.springframework.stereotype.Component;

import com.samton.platform.framework.exception.constant.ExpCodeConstant;

/**
 *
 * @Description:仓库异常处理类
 * @author:     fina
 * @date:       2016年4月11日
 * Copyright (c) 2015, Samton. All rights reserved
 */
@Component
public class WhouseExpCodeConstant extends ExpCodeConstant{

	public static final String WHOUSE_INFO_NULL = "801";
	public static final String WHOUSE_LIST_NULL = "802";
	public static final String WHOUSE_INFO_EXIS = "803";
	public static final String WHOUSE_INFO_STOP = "804";
	public static final String WHOUSE_INFO_SKU_STOP = "805";
	
	static{
		msgMap.put(WHOUSE_INFO_NULL, "订单信息为空");
		msgMap.put(WHOUSE_LIST_NULL, "盘点清单为空");
		msgMap.put(WHOUSE_INFO_EXIS, "仓库名已存在");
		msgMap.put(WHOUSE_INFO_STOP, "仓库存在库存，不能禁用");
		msgMap.put(WHOUSE_INFO_SKU_STOP, "仓库存在代发货商品，不能禁用");
	}
}
