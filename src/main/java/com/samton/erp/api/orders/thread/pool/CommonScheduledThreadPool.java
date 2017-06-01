/**
 * 
 */
package com.samton.erp.api.orders.thread.pool;

import java.util.concurrent.ScheduledThreadPoolExecutor;

import org.apache.log4j.Logger;

import com.samton.erp.api.orders.thread.NamedThreadFactory;

/**
 *
 * @Description:通用调度任务线程池
 * @author:     lijianzhou
 * @date:       2016年3月27日
 * Copyright (c) 2015, Samton. All rights reserved
 */
public class CommonScheduledThreadPool {

	private static final Logger logger = Logger.getLogger(CommonScheduledThreadPool.class);
	
	// 2*core
	private static final int processorCount = Runtime.getRuntime().availableProcessors() * 2;
	
	private static ScheduledThreadPoolExecutor threadPool;
	
	static{
		threadPool = new ScheduledThreadPoolExecutor(processorCount, new NamedThreadFactory("samton-common-schedule-pool"));
	}
	
	public static ScheduledThreadPoolExecutor getScheduledThreadPool(String why){
		if(logger.isInfoEnabled()){
			logger.debug("准备申请线程资源执行[" + why + "]");
		}
		return threadPool;
	}
	
	public static void shutdown(){
		logger.info("通用调度线程池准备关闭");
		threadPool.shutdown();
	}
}
