/**
 * 
 */
package com.samton.erp.api.orders.cache.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.samton.erp.api.orders.cache.LocalCache;
import com.samton.erp.api.orders.cache.LocalCacheContainer;
import com.samton.platform.framework.base.SdkBaseController;

/**
 *
 * @Description:缓存刷新控制器
 * @author:     lijianzhou
 * @date:       2016年5月3日
 * Copyright (c) 2015, Samton. All rights reserved
 */
@Controller
public class CacheRefreshController extends SdkBaseController{

	private final static Logger logger = Logger.getLogger(CacheRefreshController.class);
	
	@RequestMapping("/cache/refresh.do")
	public void refreshCache(HttpServletRequest req, HttpServletResponse res) throws Exception{
		 List<LocalCache> cacheList = LocalCacheContainer.get();
	        for (LocalCache localCache : cacheList) {
	            try {
	                localCache.refresh();
	                logger.info("刷新"+localCache.getClass().getName()+"缓存成功");
	            } catch (Exception e) {
	                logger.error("刷新"+localCache.getClass().getName()+"缓存失败", e);
	            }
	        }
	        res.setCharacterEncoding("UTF-8");
	        res.setContentType("text/html; charset=UTF-8"); 
	        res.getWriter().print("刷新缓存成功");
	        res.getWriter().flush();
	}
}
