package com.samton.erp.api.sys.constant;

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
public class SysExpCodeConstant extends ExpCodeConstant {
	
	public static final String COMPANY_NAME_NULL = "601";

	static {
		msgMap.put(COMPANY_NAME_NULL, "公司名称不能为空！");
	}
}
