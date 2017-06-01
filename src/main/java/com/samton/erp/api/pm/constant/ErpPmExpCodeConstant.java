package com.samton.erp.api.pm.constant;

import org.springframework.stereotype.Component;

import com.samton.platform.framework.exception.constant.ExpCodeConstant;

@Component
public class ErpPmExpCodeConstant extends ExpCodeConstant {

	public static final String CHECK_CODE_INVALID="901";
	public static final String GENERATE_CHECK_CODE_INTERVAL_TOO_SHORT="902";
	public static final String NO_REGISTER_CHECK_CODE="903";
	public static final String CHECK_CODE_ERROR="904";
	public static final String NO_LOGIN_NAME="905"; 
	public static final String NO_RETRIEVE_CHECK_CODE="906"; 
	
	static {
		msgMap.put(CHECK_CODE_INVALID, "验证码超时，请重新获取");
		msgMap.put(GENERATE_CHECK_CODE_INTERVAL_TOO_SHORT, "请在一分钟后再重新获取验证码");
		msgMap.put(NO_REGISTER_CHECK_CODE, "未生成注册验证码");
		msgMap.put(CHECK_CODE_ERROR, "请输入正确的验证码");
		msgMap.put(NO_LOGIN_NAME, "用户名不能为空");
		msgMap.put(NO_RETRIEVE_CHECK_CODE, "找回密码验证码未生产");
	}
	
}
