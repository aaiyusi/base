package com.samton.erp.api.orders.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.samton.erp.api.orders.bean.entity.TErpOrdersDetail;
import com.samton.platform.framework.exception.ServiceException;

public interface TErpOrdersDetailMapper {
    int deleteByPrimaryKey(Long detailId);

    int insert(TErpOrdersDetail record);

    int insertSelective(TErpOrdersDetail record);

    TErpOrdersDetail selectByPrimaryKey(Long detailId);

    int updateByPrimaryKeySelective(TErpOrdersDetail record);

    int updateByPrimaryKey(TErpOrdersDetail record);
    
    /**
     * 查询商品是否已存在订单中
     * @param record
     * @return
     */
    int queryGoodsIsExists(TErpOrdersDetail record);
    
    /**
     * 查询订单明细列表
     * @return
     * @throws ServiceException
     */
    List<Map<String, Object>> queryOrdersDetailList(@Param("orderId") long orderId, @Param("enterpriseId")long enterpriseId) throws ServiceException;
    
    /**
     * 根据订单Id更改订单明细状态
     * @param record
     * @return
     * @throws ServiceException
     */
    int updateOrderItemStateByOrderId(TErpOrdersDetail record) throws ServiceException;
    
    /**
     * 批量更新状态
     * @param state
     * @param idList
     * @return
     * @throws ServiceException
     */
    int batchUpdateOrderItemState(@Param("state") short state, @Param("idList") List<Long> idList) throws ServiceException;
    
    /**
     * 根据订单id查询订单明细
     * @param orderId
     * @return
     * @throws ServiceException
     */
    List<TErpOrdersDetail> queryOrderDetailByOrderId(long orderId) throws ServiceException;
}