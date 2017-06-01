/**
 * 
 */
package com.samton.erp.api.orders.task;

import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;

import com.samton.erp.api.orders.thread.pool.CommonScheduledThreadPool;
import com.samton.erp.api.orders.util.Configuration;
import com.samton.erp.api.orders.util.OauthToken;
import com.samton.erp.api.shop.bean.entity.TErpShop;

/**
 *
 * @Description:Aliexpress订单同步任务
 * @author:     lijianzhou
 * @date:       2016年4月13日
 * Copyright (c) 2015, Samton. All rights reserved
 */
public class AliThreadSyncTask{

	protected final Logger logger = Logger.getLogger(this.getClass());
	private static class Holder{
		private static AliThreadSyncTask instance = new AliThreadSyncTask();
	}
	//标识线程执行状态
	public static boolean isRun = false;
	//是否执行线程
	public static boolean runFlag = true;
	public static AliThreadSyncTask getInstance(){
		return Holder.instance;
	}
	
	private final Configuration config;
	//线程执行延迟时间
	private final long delay;
	//线程执行周期
	private final long period;
	//速卖通接口类

	private AliThreadSyncTask(){
		config = Configuration.getInstance();
		//初始延迟时间
		delay = Long.parseLong(config.getDelay());
		//周期循环时间
		period = Long.parseLong(config.getPeriod());
	}
	
	public void init(TErpShop shop){
		ScheduledFuture<?> scheduledFuture = CommonScheduledThreadPool.getScheduledThreadPool("Aliexpress订单下载任务"+shop.getShopId()).scheduleWithFixedDelay(new AliSyncTaskThread(shop), delay, period, TimeUnit.MINUTES);
		OauthToken.doAddScheduleFuture(String.valueOf(shop.getShopId()), scheduledFuture);
	}
}
