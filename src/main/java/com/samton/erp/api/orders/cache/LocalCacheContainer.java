/**
 * 
 */
package com.samton.erp.api.orders.cache;

import java.util.ArrayList;
import java.util.List;

/**
 *
 * @Description:缓存容器
 * @author:     lijianzhou
 * @date:       2016年5月3日
 * Copyright (c) 2015, Samton. All rights reserved
 */
public class LocalCacheContainer {
	private static List<LocalCache> cacheList = new ArrayList<LocalCache>();
	public static void put(LocalCache cache){
		cacheList.add(cache);
	}
	
	public static List<LocalCache> get(){
		return cacheList;
	}
}
