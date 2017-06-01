/**
 * 
 */
package com.samton.erp.api.orders.service.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.samton.erp.api.orders.bean.entity.TErpSync;
import com.samton.erp.api.orders.dao.TErpSyncMapper;
import com.samton.erp.api.orders.service.ISyncService;
import com.samton.platform.framework.exception.ServiceException;

/**
 *
 * @Description:同步接口service实现类
 * @author:     lijianzhou
 * @date:       2016年4月18日
 * Copyright (c) 2015, Samton. All rights reserved
 */
@Service("syncService")
public class SyncServiceImpl implements ISyncService {

	@Resource
	private TErpSyncMapper syncMapper;
	
	/**
     * 根据店铺id和平台类型查询同步信息
     * @param shopId
     * @param platformType
     * @return
     */
	@Override
	public TErpSync querySyncInfoByPlatformType(Long shopId, Short platformType, Short dataType,long enterpriseId) {
		return syncMapper.querySyncInfoByPlatformType(shopId, platformType, dataType,enterpriseId);
	}

	/**
	 * 新增
	 * @param sync
	 * @return
	 * @throws ServiceException
	 */
	@Override
	public boolean addSync(TErpSync sync) throws ServiceException {
		//数据库操作
		int result = syncMapper.insertSelective(sync);
		return result > 0 ? true : false;
	}

	/**
	 * 查询数据是否已经存在
	 * @param dataId
	 * @param platformType
	 * @param dataType
	 * @return
	 */
	@Override
	public boolean querySyncExistByDataId(String dataId, Short platformType, Short dataType,Long shopId,long enterpriseId) {
		//数据库操作
		Integer count = syncMapper.querySyncExistByDataId(dataId, platformType, dataType,shopId,enterpriseId);
		return count > 0 ? true : false;
	}

	/**
	 * 同步平台数据
	 */
	@Override
	public Integer dataTransSync() {
		return syncMapper.dataTransSync();
	}

	/**
	 * 统计商品待发货数和已发货数
	 * @return
	 */
	@Override
	public Integer statDataCountSync() {
		return syncMapper.statDataCountSync();
	}

}
