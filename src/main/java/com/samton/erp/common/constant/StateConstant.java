package com.samton.erp.common.constant;

import org.springframework.stereotype.Component;

import com.samton.platform.framework.exception.constant.ExpCodeConstant;

/**
 * 
* @ClassName: StateConstant 
* @Description: 基本状态
* @author A18ccms a18ccms_gmail_com 
* @date 2016年4月18日 下午5:29:57 
*
 */
@Component
public class StateConstant extends ExpCodeConstant {
	//增加
	public static final short ADD = 1;
	//删除
	public static final short DELETE = 0;
}
