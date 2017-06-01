/**
 * 
 */
package com.samton.erp.api.orders.service;

import com.samton.erp.api.orders.bean.entity.TErpSync;
import com.samton.platform.framework.exception.ServiceException;

/**
 *
 * @Description:同步接口service接口类
 * @author:     lijianzhou
 * @date:       2016年4月18日
 * Copyright (c) 2015, Samton. All rights reserved
 */
public interface ISyncService {

	/**
     * 根据店铺id和平台类型查询同步信息
     * @param shopId
     * @param platformType
     * @return
     */
	public TErpSync querySyncInfoByPlatformType(Long shopId,Short platformType,Short dataType,long enterpriseId);
	
	/**
	 * 新增
	 * @param sync
	 * @return
	 * @throws ServiceException
	 */
	public boolean addSync(TErpSync sync) throws ServiceException;
	
	/**
	 * 查询数据是否已经存在
	 * @param dataId
	 * @param platformType
	 * @param dataType
	 * @return
	 */
	public boolean querySyncExistByDataId(String dataId,Short platformType,Short dataType,Long shopId,long enterpriseId);
	
	/**
	 * 同步平台数据
	 * @return
	 */
	public Integer dataTransSync();
	
	/**
	 * 统计商品待发货数和已发货数
	 * @return
	 */
	public Integer statDataCountSync();
}
