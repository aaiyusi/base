/**
 * 
 */
package com.samton.erp.api.orders.task;

import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;

import com.samton.erp.api.orders.service.ISyncService;
import com.samton.erp.api.orders.thread.schedule.AbstractScheduleTask;
import com.samton.erp.api.orders.util.Configuration;
import com.samton.erp.api.sys.bean.entity.TErpSysDictValue;
import com.samton.erp.api.sys.service.ISysService;

/**
 *
 * @Description:将第三方数据转移到平台任务定时线程
 * @author:     lijianzhou
 * @date:       2016年4月19日
 * Copyright (c) 2015, Samton. All rights reserved
 */
public class DataTransTask extends AbstractScheduleTask {

	protected final Logger logger = Logger.getLogger(this.getClass());
	
	private final Configuration config;
	//线程执行延迟时间
	private final long delay;
	//线程执行周期
	private final long period;
	private DataTransTask(){
		config = Configuration.getInstance();
		//初始延迟时间
		delay = Long.parseLong(config.getDelay());
		//周期循环时间
		period = Long.parseLong(config.getPeriod());
	}
	
	private ISyncService syncService;
	public void setSyncService(ISyncService syncService) {
		this.syncService = syncService;
	}

	private ISysService sysService;
	public void setSysService(ISysService sysService) {
		this.sysService = sysService;
	}

	@Override
	public void init() {
		super.init();
		//是否自动开启线程标志
		TErpSysDictValue dict = sysService.querySysDictValueByName("isAutoStartTask");
		if(dict != null && "1".equals(dict.getDictValue())){
			addScheduleWithFixedDelay(delay,period,TimeUnit.MINUTES);
		}
	}

	
	@Override
	public void close() {
		super.close();
	}

	@Override
	public String getWhy() {
		return "DataTransTask";
	}

	@Override
	public void execute() {
		//同步数据
		syncService.dataTransSync();
		//统计订单是否缺货
//		syncService.statDataCountSync();
		System.gc();
	}

}
