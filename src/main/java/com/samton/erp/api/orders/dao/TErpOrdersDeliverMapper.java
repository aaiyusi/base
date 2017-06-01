package com.samton.erp.api.orders.dao;

import java.util.List;

import org.apache.ibatis.session.RowBounds;

import com.samton.erp.api.orders.bean.entity.TErpOrdersDeliver;
import com.samton.erp.api.orders.bean.entity.vo.OrdersDeliverVo;
import com.samton.platform.common.bean.param.JqParamBean;
import com.samton.platform.framework.exception.ServiceException;

public interface TErpOrdersDeliverMapper {
    int deleteByPrimaryKey(Long deliverId);

    int insert(TErpOrdersDeliver record);

    int insertSelective(TErpOrdersDeliver record);

    TErpOrdersDeliver selectByPrimaryKey(Long deliverId);

    int updateByPrimaryKeySelective(TErpOrdersDeliver record);

    int updateByPrimaryKey(TErpOrdersDeliver record);
    
    /**
     * 加载订单发货结果分页列表
     * @param jqParamBean
     * @param rowBounds
     * @return
     * @throws ServiceException
     */
    List<OrdersDeliverVo> queryOrdersDeliverList(JqParamBean jqParamBean,RowBounds rowBounds) throws ServiceException;
}