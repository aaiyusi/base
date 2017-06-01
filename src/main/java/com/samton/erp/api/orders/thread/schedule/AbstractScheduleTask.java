/**
 * 
 */
package com.samton.erp.api.orders.thread.schedule;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;

import com.samton.erp.api.orders.thread.pool.CommonScheduledThreadPool;

/**
 *
 * @Description:定时线程任务调度类
 * @author:     lijianzhou
 * @date:       2016年3月27日
 * Copyright (c) 2015, Samton. All rights reserved
 */
public abstract class AbstractScheduleTask implements ScheduleTask {

	private final Logger logger = Logger.getLogger(this.getClass());
	
	private final Map<String, List<ScheduledFuture<?>>> scheduleTaskMap = new HashMap<String, List<ScheduledFuture<?>>>();
	
	private final String DEFAULT_SCHEDULE_TASK = "default_schedule_task";
	
	/** 缺省初始延迟10ms */
	private final int DEFAULT_INITAIL_DELAY = 10;
	
	/** 缺省的延迟500ms */
	private final int DEFAULT_DELAY = 500;
	
	/** 当前线程继续执行还是放弃本次执行等待下次调度*/
	private final ThreadLocal<Boolean> continueExeThreadLocal = new ThreadLocal<Boolean>();
	
	private final Object lock = new Object();
	@Override
	public void run() {
		try{
			resetExecute();//恢复执行状态
			long begin = System.currentTimeMillis();
			logger.debug(getWhy() + "线程调度进行");
			//快速响应容器关闭
			while(isContinueExecute()){
				// 设置为不连续执行
				continueExecute(false);
				// 子类执行方法
				execute();
				//累计执行超过10s则放弃本次调度
				if((System.currentTimeMillis() - begin) > 10000){
					break;
				}
			}
		}catch(Throwable e){
			e.printStackTrace();
		}
	}
	@Override
	public void init() {
		List<ScheduledFuture<?>> scheduledFutures = new ArrayList<ScheduledFuture<?>>();
		scheduleTaskMap.put(DEFAULT_SCHEDULE_TASK, scheduledFutures);
	}

	@Override
	public void close() {
		synchronized (lock) {
			for (Map.Entry<String, List<ScheduledFuture<?>>> entry : scheduleTaskMap.entrySet()) {
				List<ScheduledFuture<?>> scheduleFutures = entry.getValue();
				for(ScheduledFuture<?> scheduleFuture : scheduleFutures){
					scheduleFuture.cancel(false);
				}
			}
		}
	}

	@Override
	public void addSchedule() {
		synchronized (lock) {
			ScheduledFuture<?> scheduledFuture = CommonScheduledThreadPool.getScheduledThreadPool(getWhy())
						.scheduleWithFixedDelay(this, DEFAULT_INITAIL_DELAY, DEFAULT_DELAY, TimeUnit.MILLISECONDS);
			doAddScheduleFuture(DEFAULT_SCHEDULE_TASK, scheduledFuture);
		}
	}

	@Override
	public void addSchedule(String name, ScheduleTask scheduleTask) {
		synchronized (lock) {
			ScheduledFuture<?> scheduledFuture = CommonScheduledThreadPool.getScheduledThreadPool(getWhy())
					.scheduleWithFixedDelay(scheduleTask, DEFAULT_INITAIL_DELAY, DEFAULT_DELAY, TimeUnit.MILLISECONDS);
			doAddScheduleFuture(DEFAULT_SCHEDULE_TASK, scheduledFuture);
		}
	}

	@Override
	public void addScheduleWithFixedDelay(long initialDelay, long delay, TimeUnit unit) {
		synchronized (lock) {
			ScheduledFuture<?> scheduledFuture = CommonScheduledThreadPool.getScheduledThreadPool(getWhy())
					.scheduleWithFixedDelay(this, initialDelay, delay, unit);
			doAddScheduleFuture(DEFAULT_SCHEDULE_TASK, scheduledFuture);
		}
	}

	/* (non-Javadoc)
	 * @see com.common.schedule.ScheduleTask#addScheduleAtFixedRate(long, long, java.util.concurrent.TimeUnit)
	 */
	@Override
	public void addScheduleAtFixedRate(long initialDelay, long period, TimeUnit unit) {
		ScheduledFuture<?> scheduledFuture = CommonScheduledThreadPool.getScheduledThreadPool(getWhy())
				.scheduleAtFixedRate(this, initialDelay, period, unit);
		doAddScheduleFuture(DEFAULT_SCHEDULE_TASK, scheduledFuture);
	}

	private void doAddScheduleFuture(String name, ScheduledFuture<?> scheduledFuture){
		List<ScheduledFuture<?>> scheduledFutures = scheduleTaskMap.get(name);
		if(scheduledFutures == null){
			scheduledFutures = new ArrayList<ScheduledFuture<?>>();
			scheduleTaskMap.put(DEFAULT_SCHEDULE_TASK, scheduledFutures);
		}
		
		scheduledFutures.add(scheduledFuture);
	}
	/* (non-Javadoc)
	 * @see com.common.schedule.ScheduleTask#removeSchedule()
	 */
	@Override
	public void removeSchedule() {
		synchronized (lock) {
			removeSchedule(DEFAULT_SCHEDULE_TASK);
		}
	}

	/* (non-Javadoc)
	 * @see com.common.schedule.ScheduleTask#removeSchedule(java.lang.String)
	 */
	@Override
	public void removeSchedule(String name) {
		synchronized (lock) {
			List<ScheduledFuture<?>> scheduledFutures = scheduleTaskMap.get(name);
			if(scheduledFutures == null){
				return;
			}
			
			if(scheduledFutures.isEmpty()){
				scheduleTaskMap.remove(name);
			}else{
				//移除最后一个
				ScheduledFuture<?> scheduledFuture = scheduledFutures.remove(scheduledFutures
	                    .size() - 1);
				scheduledFuture.cancel(false);
			}
		}
	}

	/* (non-Javadoc)
	 * @see com.common.schedule.ScheduleTask#getScheduleTaskSize()
	 */
	@Override
	public int getScheduleTaskSize() {
		return getScheduleTaskSize(DEFAULT_SCHEDULE_TASK);
	}

	/* (non-Javadoc)
	 * @see com.common.schedule.ScheduleTask#getScheduleTaskSize(java.lang.String)
	 */
	@Override
	public int getScheduleTaskSize(String name) {
		List<ScheduledFuture<?>> scheduledFutures = scheduleTaskMap.get(name);
		if(scheduledFutures == null){
			return 0;
		}else{
			return scheduledFutures.size();
		}
	}

	/**
     * 子类应该实现的执行实际操作的方法.<br>
     * 返回true继续执行<br>
     * 返回false本次调度已执行完<br>
     * 如果在一次调度中做批量操作,子类不建议采用while(true)独占调度线程实现方式,而应该采用小批量间歇执行,如while(i<=N)的方式.<br>
     */
	public abstract void execute();
	
	protected void continueExecute(boolean conitueExe){
		continueExeThreadLocal.set(conitueExe);
	}
	
	protected boolean isContinueExecute(){
		return continueExeThreadLocal.get();
	}
	
	private void resetExecute(){
		continueExecute(true);
	}
}
