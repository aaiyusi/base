package com.samton.erp.api.shop.constant;

import org.springframework.stereotype.Component;

import com.samton.platform.framework.exception.constant.ExpCodeConstant;

/**
 * 
* @ClassName: ShopExpCodeConstant 
* @Description:  商店异常变量类
* @author A18ccms a18ccms_gmail_com 
* @date 2016年4月11日 下午5:15:05 
*
 */
@Component
public class ShopExpCodeConstant  extends ExpCodeConstant {
	public static final String SHOP_NAME_EXISTS = "501";
	public static final String PLATFORM_ACCOUNT_STORE_EXIST = "502";
	public static final String TOKEN_AUTHORIZATION_SUCCESS_TO_ENABLE = "503";
	public static final String SHOP_NAME_IS_EMPTY = "504";

	static {
		msgMap.put(SHOP_NAME_EXISTS, "店铺名称已经存在！");
		msgMap.put(PLATFORM_ACCOUNT_STORE_EXIST, "系统中已存在此平台帐号的启用店铺，如需启用请先停用正在运营的店铺或者联系客服人员协助处理！");
		msgMap.put(TOKEN_AUTHORIZATION_SUCCESS_TO_ENABLE, "Token令牌授权成功才能启用");
		msgMap.put(SHOP_NAME_IS_EMPTY, "点铺名称不能为空");
	}
}
