/**
 * 
 */
package com.samton.erp.api.orders.thread.schedule;

import java.util.concurrent.TimeUnit;

/**
 *
 * @Description:调度任务
 * @author:     lijianzhou
 * @date:       2016年3月27日
 * Copyright (c) 2015, Samton. All rights reserved
 */
public interface ScheduleTask extends Runnable {

	/**
	 * 初始化
	 */
	void init();
	
	/**
	 * 关闭
	 */
	void close();
	
	/**
	 * 申请调度线程的目的
	 * @return
	 */
	String getWhy();
	
	/**
	 * 添加一个调度。默认添加固定延迟500ms钟的定时任务
	 */
	void addSchedule();
	
	/**
	 * 添加一个调度。默认添加固定延迟1s钟的定时任务
	 * 注：建议只加入同一个类型的调度任务
	 * @param name 调度任务名称
	 * @param scheduleTask
	 */
	void addSchedule(String name, ScheduleTask scheduleTask);
	
	/**
	 * 添加一个固定延时的调度任务
	 * @param initialDelay
	 * @param delay
	 * @param unit
	 */
	void addScheduleWithFixedDelay(long initialDelay, long delay, TimeUnit unit);
	
	/**
	 * 添加一个固定频率的调度任务
	 * @param initialDelay
	 * @param period
	 * @param unit
	 */
	void addScheduleAtFixedRate(long initialDelay, long period, TimeUnit unit);
	
	/**
	 * 移除一个调度
	 */
	void removeSchedule();
	
	/**
	 * 移除一个调度
	 * @param name 调度任务名称
	 */
	void removeSchedule(String name);
	
	/**
	 * 获取调度任务的个数
	 * @return
	 */
	int getScheduleTaskSize();
	
	/**
	 * 指定调度任务的个数
	 * @param name
	 * @return
	 */
	int getScheduleTaskSize(String name);
}
