/**
 * 
 */
package com.samton.erp.api.orders.service;

import java.util.Map;

import com.samton.erp.api.orders.bean.entity.TErpOrdersDeliver;
import com.samton.erp.api.orders.bean.entity.vo.OrdersDeliverVo;
import com.samton.platform.common.bean.param.JqParamBean;
import com.samton.platform.framework.exception.ServiceException;
import com.samton.platform.framework.mybatis.pagination.Pagination;

/**
 *
 * @Description:订单发货service接口
 * @author:     lijianzhou
 * @date:       2016年4月8日
 * Copyright (c) 2015, Samton. All rights reserved
 */
public interface IOrdersDeliverService {

	/**
	 * 新增订单发货结果
	 * @param deliverInfo
	 * @return
	 * @throws ServiceException
	 */
	public int addOrdersDeliver(TErpOrdersDeliver deliverInfo) throws ServiceException;
	
	/**
	 * 加载订单发货结果分页列表
	 * @param jqParamBean
	 * @return
	 */
	public Pagination<OrdersDeliverVo> queryOrdersDeliverList(JqParamBean jqParamBean) throws Exception;
	
	/**
	 * 订单称重出库--单扫单出
	 * @param scanType
	 * @param orderCode
	 * @param trackNumber
	 * @param orderweight
	 * @param weightDigit
	 * @return
	 * @throws ServiceException
	 */
	public Map<String, Object> sendOrderDeliver(String scanType, String orderCode, String trackNumber, String orderweight, String weightDigit) throws ServiceException;
	
	/**
	 * 订单称重出库--单扫批出
	 * @param scanType
	 * @param scanContent
	 * @return
	 * @throws ServiceException
	 */
	public Map<String, Object> batchSendOrderDeliver(String scanType, String scanContent) throws ServiceException;
}
