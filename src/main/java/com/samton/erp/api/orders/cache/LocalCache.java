/**
 * 
 */
package com.samton.erp.api.orders.cache;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

import org.apache.log4j.Logger;

import com.samton.erp.api.orders.thread.pool.CommonThreadPool;

/**
 *
 * @Description:本地缓存
 * @author:     lijianzhou
 * @date:       2016年5月3日
 * Copyright (c) 2015, Samton. All rights reserved
 */
public abstract class LocalCache {

private final Logger logger = Logger.getLogger(this.getClass());
	
	private Map<Object, Object> dataMap    = new HashMap<Object, Object>();
    private long                expireTime = 10 * 60;                                 // 默认10分钟过去时间

    protected String            cacheName  = "缓存";
    protected int               pageSize   = 10000;
    
    private volatile boolean updating = false;
    
    public void init(){
    	expireTime = expireTime * 1000;
    	refresh();
    	//CommonScheduledThreadPool.getScheduledThreadPool(cacheName).scheduleWithFixedDelay(new UpdateTask(), 100, expireTime, TimeUnit.MILLISECONDS);
    	LocalCacheContainer.put(this);;
    }
    
    @SuppressWarnings("unchecked")
	public <T> T get(Object key){
    	Object obj = dataMap.get(key);
    	return obj == null ? null : (T)obj;
    }
    
    public void put(Object key, Object value){
    	dataMap.put(key, value);
    }
    
    public Set<Object> getKeys(){
    	return dataMap.keySet();
    }
    
    /**
     * 刷新缓存
     */
    public synchronized void refresh(){
    	if(updating){
    		return;
    	}
    	updating = true;
    	CommonThreadPool.getThreadPool(cacheName).execute(new UpdateTask());
    }
    
    /**
     * 设置更新缓存数据
     * @param dataMap
     */
	public void setDataMap(Map<Object, Object> dataMap) {
		this.dataMap = dataMap;
	}

	/**
	 * 设置更新时间
	 * @param expireTime
	 */
	public void setExpireTime(long expireTime) {
		this.expireTime = expireTime;
	}

	/**
	 * 设置缓存名
	 * @param cacheName
	 */
	public void setCacheName(String cacheName) {
		this.cacheName = cacheName;
	}

	/**
     * 加载数据
     */
    public abstract Map<Object, Object> load();
    
    /**
     * @Description:更新任务
     * @author:     lijianzhou
     * @date:       2016年5月3日
     * Copyright (c) 2015, Samton. All rights reserved
     */
    private class UpdateTask implements Runnable{
		@Override
		public void run() {
			try{
				logger.info(""+cacheName+",刷新缓存开始");
				Map<Object, Object> map = load();
				setDataMap(map);
				logger.info(""+cacheName+",刷新缓存完成");
			}catch(Exception e){
				logger.error("从数据库加载数据到缓存抛出异常,"+e.getMessage()+"");
			}finally{
				updating = false;
			}
		}
    }
}
