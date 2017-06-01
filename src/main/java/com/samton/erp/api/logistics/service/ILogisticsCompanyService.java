package com.samton.erp.api.logistics.service;

import java.util.List;
import java.util.Map;

import com.samton.erp.api.logistics.bean.entity.TErpLogisticsCompany;
import com.samton.erp.api.logistics.bean.entity.TErpSysLogisticsCompany;
import com.samton.platform.common.bean.param.JqParamBean;
import com.samton.platform.framework.exception.ServiceException;
import com.samton.platform.framework.mybatis.pagination.Pagination;

/**
 * 
 *
 * @Description:物流渠道主表管理
 * @author:     fina
 * @date:       2016年4月18日
 * Copyright (c) 2015, Samton. All rights reserved
 */
public interface ILogisticsCompanyService {
	
	/**
	 * 物流渠道主查询操作
	 * @param jqParamBean
	 * @return
	 * @throws ServiceException
	 */
	public Pagination<Map<String, Object>> queryList(JqParamBean jqParamBean)throws Exception;
	
	/**
	 * 物流渠道所有子表数据列表
	 * @return
	 * @throws Exception
	 */
	public List<Map<String,Object>> queryAllLogistics(TErpSysLogisticsCompany record)throws Exception;
	
	/**
	 * 物流渠道所有子表数据列表返回完整对象
	 * @return
	 * @throws Exception
	 */
	public List<TErpLogisticsCompany> queryAllLogisticsById(TErpSysLogisticsCompany record)throws Exception;
	
	/**
	 * 物流渠道新增
	 * @return
	 * @throws Exception
	 */
	public int addLogisticsCompany(TErpLogisticsCompany entity)throws Exception;
	
	/**
	 * 根据id查询
	 * @return
	 * @throws Exception
	 */
	public TErpLogisticsCompany queryLogisticsCompanyById(long logisticsId)throws Exception;
	
	/**
	 * 物流渠道修改
	 * @return
	 * @throws Exception
	 */
	public int updateLogisticsCompany(TErpLogisticsCompany entity)throws Exception;
	
	/**
	 * 查询渠道名是否存在
	 * @return
	 * @throws Exception
	 */
	public TErpLogisticsCompany queryLogisticsByNameSysId(TErpLogisticsCompany entity)throws Exception;
	
	/*
	 * 拷贝子表数据
	 */
	public int copyLogisticsCompany(TErpLogisticsCompany entity);
	
	/**
	 * 获取物流渠道
	 * @param enterpriseId
	 * @return
	 * @throws ServiceException
	 */
	public List<Map<String, Object>> queryAuthLogistics() throws ServiceException;
}
