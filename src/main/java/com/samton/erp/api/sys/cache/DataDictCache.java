/**
 * 
 */
package com.samton.erp.api.sys.cache;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.samton.erp.api.orders.cache.LocalCache;
import com.samton.erp.api.sys.service.ISysService;
import com.samton.platform.framework.exception.ServiceException;

/**
 *
 * @Description:数据字典缓存类
 * @author:     lijianzhou
 * @date:       2016年5月3日
 * Copyright (c) 2015, Samton. All rights reserved
 */
public class DataDictCache extends LocalCache {

	private ISysService sysService;
	
	public static final String cache_key = "dataDict";
	/**
	 * 加载数据
	 */
	@Override
	public Map<Object, Object> load() {
		Map<Object, Object> map = new HashMap<Object, Object>();
		try {
			List<Map<String, Object>> dicts = sysService.querySysDictListByDictTypeId(0L);
			map.put(cache_key, dicts);
		} catch (ServiceException e) {
		}
		return map;
	}
	public void setSysService(ISysService sysService) {
		this.sysService = sysService;
	}
}
