package com.samton.erp.api.print.constant;

import org.springframework.stereotype.Component;

import com.samton.platform.framework.exception.constant.ExpCodeConstant;

/**
 * 
 *
 * @Description:标签打印异常处理常量
 * @author:     Alex
 * @date:        2016年4月20日 下午3:12:54
 * Copyright (c) 2016, Samton. All rights reserved
 */
@Component
public class PrintExpCodeConstant extends ExpCodeConstant {

	public static final String LENGTH_INCONFORMITY = "701";

	static {
		msgMap.put(LENGTH_INCONFORMITY, "打印数量数组长度与数据数组长度不一致！");
	}

}
