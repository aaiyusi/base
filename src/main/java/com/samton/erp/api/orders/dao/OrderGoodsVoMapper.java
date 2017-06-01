/**
 * 
 */
package com.samton.erp.api.orders.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.samton.erp.api.orders.bean.entity.vo.OrderGoodsVo;
import com.samton.platform.framework.exception.ServiceException;

public interface OrderGoodsVoMapper {

	/**
	 * 查询订单商品
	 * @param orderId
	 * @param enterpriseId
	 * @return
	 * @throws ServiceException
	 */
	List<OrderGoodsVo> findOrderGoods(@Param("orderId") long orderId, @Param("enterpriseId") long enterpriseId) throws ServiceException;
}
