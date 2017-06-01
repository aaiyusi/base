/**
 * 
 */
package com.samton.erp.common.util;

import com.samton.erp.api.sys.bean.entity.TErpSysDictValue;
import com.samton.erp.api.sys.service.ISysService;
import com.samton.platform.framework.context.SpringContext;

/**
 *
 * @Description:字典工具类
 * @author:     lijianzhou
 * @date:       2016年4月22日
 * Copyright (c) 2015, Samton. All rights reserved
 */
public class DictUtils {

	/**
	 * 根据字典名获取字典值
	 * @param dictName
	 * @return
	 * @throws Exception
	 */
	public static String getDictValue(String dictName){
		ISysService sysService = (ISysService) SpringContext.getBean("sysService");
		TErpSysDictValue dict = sysService.querySysDictValueByName(dictName);
		if(dict != null){
			return dict.getDictValue();
		}
		return null;
	}
}
