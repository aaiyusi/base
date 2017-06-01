/**
 * 
 */
package com.samton.erp.common.util;

import com.samton.platform.framework.util.FkPropertiesUtil;
import com.samton.platform.framework.util.ResourceUtil;

/**
 *
 * @Description:(这里用一句话描述这个类的作用)
 * @author:     lijianzhou
 * @date:       2016年4月14日
 * Copyright (c) 2015, Samton. All rights reserved
 */
public class PropertiesUtil {

	public static String getErpProperty(String key){
		return FkPropertiesUtil.getProperty(ResourceUtil.getResourcePath(), key, "/erp.properties");
	}
	
}
