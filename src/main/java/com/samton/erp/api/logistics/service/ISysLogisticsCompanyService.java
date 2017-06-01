package com.samton.erp.api.logistics.service;

import java.util.List;
import java.util.Map;

import com.samton.erp.api.logistics.bean.entity.TErpLogisticsCompany;
import com.samton.erp.api.logistics.bean.entity.TErpLogisticsTrackingnumber;
import com.samton.erp.api.logistics.bean.entity.TErpSysLogisticsCompany;
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
 * @Description:物流渠道主表管理
 * @author:     fina
 * @date:       2016年4月18日
 * Copyright (c) 2015, Samton. All rights reserved
 */
public interface ISysLogisticsCompanyService {
	
	/**
	 * 物流渠道主查询操作
	 * @param jqParamBean
	 * @return
	 * @throws ServiceException
	 */
	public Pagination<Map<String, Object>> queryLogisticsCompanyList(JqParamBean jqParamBean)throws Exception;
	
	/**
	 * 根据id查询
	 * @return
	 * @throws Exception
	 */
	public TErpSysLogisticsCompany querySysLogisticsCompanyById(TErpSysLogisticsCompany sysLogistics)throws Exception;
	
	/**
	 * 修改
	 * @return
	 * @throws Exception
	 */
	public int UpateSysLogisticsCompany(TErpSysLogisticsCompany sysLogistics)throws Exception;
	
	
	/**
	 * 查询物流公司名称名是否存在
	 * @return
	 * @throws Exception
	 */
	public TErpSysLogisticsCompany querySysLogisticsByNameSysId(TErpSysLogisticsCompany entity)throws Exception;
	
	/**
	 * 删除主表
	 * @return
	 * @throws Exception
	 */
	public int delSysLogisticsById(long id)throws Exception;
	
}
