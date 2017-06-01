package com.samton.erp.api.logistics.constant;

import org.springframework.stereotype.Component;

import com.samton.platform.framework.exception.constant.ExpCodeConstant;

/**
 *  物流渠道说明类
 * @author fina

 * 2016年4月19日
 */
@Component
public class LogisticsCompanyExpConstant extends ExpCodeConstant{

	public static final String LOGISTICS_COMPANY_SAME_NAME = "1001";
	public static final String LOGISTICS_COMPANY_SYS_SAME_NAME = "1002";
	
	static{
		msgMap.put(LOGISTICS_COMPANY_SAME_NAME, "渠道名称已存在！");
		msgMap.put(LOGISTICS_COMPANY_SYS_SAME_NAME, "物流公司名称已存在！");
	}
}
