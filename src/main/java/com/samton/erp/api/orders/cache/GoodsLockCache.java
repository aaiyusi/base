/**
 * 
 */
package com.samton.erp.api.orders.cache;

import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.locks.ReentrantLock;

import com.samton.erp.api.goods.service.IGoodsService;

/**
 *
 * @Description:商品锁缓存
 * @author:     lijianzhou
 * @date:       2016年4月10日
 * Copyright (c) 2015, Samton. All rights reserved
 */
public class GoodsLockCache {

	private IGoodsService goodsService;
	public void setGoodsService(IGoodsService goodsService) {
		this.goodsService = goodsService;
	}
	
	private ConcurrentHashMap<Long, ReentrantLock> lockCache = new ConcurrentHashMap<Long, ReentrantLock>();
	
	public void init(){
		List<Map<String, Object>> goodsList = goodsService.queryAllGoods();
		for(Map<String, Object> map : goodsList){
			Long goodsId = Long.parseLong(String.valueOf(map.get("goods_id")));
			add(goodsId);
		}
	}
	
	/**
	 * 添加锁
	 * @param goodsId
	 */
	public synchronized void add(Long goodsId){
		lockCache.putIfAbsent(goodsId, new ReentrantLock());
	}
	
	
	/**
	 * 获取锁
	 * @param goodsId
	 * @return
	 */
	public synchronized ReentrantLock get(Long goodsId){
		ReentrantLock lock = lockCache.get(goodsId);
//		GoodsVo goodsVo = null;
		if(lock == null){//不在缓存中
//			goodsVo = goodsService.getGoodsVoById(goodsId);
//			if(goodsVo == null){
//				return null;
//			}
			lock = new ReentrantLock();
			lockCache.putIfAbsent(goodsId, lock);//放入缓存
		}
		return lock;
	}
}
