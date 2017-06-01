package com.samton.erp.api.logistics.service;

import java.util.List;
import java.util.Map;

import com.samton.erp.api.logistics.bean.entity.TErpLogisticsTrackingnumber;
import com.samton.erp.api.warehouse.bean.entity.TErpShelf;
import com.samton.erp.api.warehouse.bean.entity.TErpSpace;
import com.samton.erp.api.warehouse.bean.entity.TErpWarehouse;
import com.samton.erp.api.warehouse.bean.entity.TErpWhouseCheck;
import com.samton.erp.api.warehouse.bean.entity.TErpWhouseStorage;
import com.samton.erp.api.warehouse.bean.entity.TErpWhouseStorageDetail;
import com.samton.erp.api.warehouse.bean.entity.WhouseCheckChild;
import com.samton.erp.api.warehouse.bean.entity.WhouseStorageChild;
import com.samton.platform.common.bean.param.JqParamBean;
import com.samton.platform.framework.exception.ServiceException;
import com.samton.platform.framework.mybatis.pagination.Pagination;

/**
 * 
 *
 * @Description:运单号管理
 * @author:     fina
 * @date:       2016年4月18日
 * Copyright (c) 2015, Samton. All rights reserved
 */
public interface ITrackingService {
	
	/**
	 * 入库主查询操作
	 * @param jqParamBean
	 * @return
	 * @throws ServiceException
	 */
	public Pagination<Map<String, Object>> queryTrackingList(JqParamBean jqParamBean)throws Exception;
	
	/**
	 * 交运单号插入
	 * @param enity
	 * @return
	 * @throws Exception
	 */
	public int insert(TErpLogisticsTrackingnumber enity)throws Exception;
	
	/**
	 * 交运单号删除
	 * @param enity
	 * @return
	 * @throws Exception
	 */
	public int delTracking(String ids)throws Exception;
	
	/**
	 * 判断较运单号是否唯一
	 * @param ids
	 * @return
	 * @throws Exception
	 */
	public int oneTracking(String ids)throws Exception;
}
