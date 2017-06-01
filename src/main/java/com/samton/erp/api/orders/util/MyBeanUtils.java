/**
 * 
 */
package com.samton.erp.api.orders.util;

import java.util.Date;

import org.apache.commons.beanutils.ConvertUtils;
import org.apache.commons.beanutils.PropertyUtils;
import org.apache.commons.beanutils.converters.DateConverter;
import org.springframework.beans.BeanUtils;

/**
 *
 * @Description:属性copy工具类
 * @author:     lijianzhou
 * @date:       2016年4月12日
 * Copyright (c) 2015, Samton. All rights reserved
 */
public class MyBeanUtils {

	static{
    	ConvertUtils.register(new DateConverter(), Date.class);
    }
	public static void copyProperties(Object dest, Object value) {
		BeanUtils.copyProperties(value, dest);
	}
	
	public static void copyPropertiesExculde(Object dest, Object value, String... ignoreProperties) {
		BeanUtils.copyProperties(value, dest, ignoreProperties);
	}
	
	public static void copyPropertiesInclude(Object dest,  Object value, String... copyProperties) throws Exception {
		for ( String prop : copyProperties ) {
			PropertyUtils.setProperty(dest, prop , PropertyUtils.getProperty(value, prop));
		}
	}
}
