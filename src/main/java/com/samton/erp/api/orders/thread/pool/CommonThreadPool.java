/**
 * 
 */
package com.samton.erp.api.orders.thread.pool;

import java.util.concurrent.BlockingQueue;
import java.util.concurrent.LinkedBlockingDeque;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;

import com.samton.erp.api.orders.thread.NamedThreadFactory;

/**
 *
 * @Description:通用线程池
 * @author:     lijianzhou
 * @date:       2016年3月27日
 * Copyright (c) 2015, Samton. All rights reserved
 */
public class CommonThreadPool {

	private static final Logger logger = Logger.getLogger(CommonThreadPool.class);
	
	/** 提供一个通用的线程池，可以直接使用 */
	private static ThreadPoolExecutor threadPool;
	
	private static final int processorCount = Runtime.getRuntime().availableProcessors();
	
	static{
		BlockingQueue<Runnable> workQueue = new LinkedBlockingDeque<Runnable>(10000);
		
		threadPool = new ThreadPoolExecutor(processorCount, processorCount * 2, 1, TimeUnit.MINUTES, workQueue, new NamedThreadFactory("samton-thread-pool"));
	}
	
	public static ThreadPoolExecutor getThreadPool(String why){
		if(logger.isInfoEnabled()){
			logger.debug("准备申请线程资源执行[" + why + "]");
		}
		return threadPool;
	}
	
	/**
	 * 关闭通用线程池
	 */
	public static void shutdown(){
		logger.debug("通用线程池准备关闭");
		threadPool.shutdown();
	}
}
