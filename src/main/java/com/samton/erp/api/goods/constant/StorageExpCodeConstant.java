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
public class StorageExpCodeConstant extends ExpCodeConstant {

	public static final String GOODS_ID_NULL = "201";

	static {
		msgMap.put(GOODS_ID_NULL, "查询的商品ID不存在！");
	}
}
