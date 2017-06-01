package com.samton.erp.api.orders.dao;

import java.util.List;

import org.apache.ibatis.session.RowBounds;

import com.samton.erp.api.orders.bean.entity.TErpOrdersLog;
import com.samton.platform.common.bean.param.JqParamBean;

public interface TErpOrdersLogMapper {
	/**
	 * 删除订单日志
	 * @param logId
	 * @return
	 */
    int deleteByPrimaryKey(Long logId);

    /**
     * 新增订单日志信息
     * @param record
     * @return
     */
    int insert(TErpOrdersLog record);

    /**
     * 新增订单日志信息
     * @param record
     * @return
     */
    int insertSelective(TErpOrdersLog record);

    /**
     * 根据日志id查询日志详细信息
     * @param logId
     * @return
     */
    TErpOrdersLog selectByPrimaryKey(Long logId);

    /**
     * 修改日志信息
     * @param record
     * @return
     */
    int updateByPrimaryKeySelective(TErpOrdersLog record);

    /**
     * 修改日志信息
     * @param record
     * @return
     */
    int updateByPrimaryKey(TErpOrdersLog record);
    
    /**
     * 查询订单日志分页列表信息
     * @param jqParamBean
     * @param rowBounds
     * @return
     */
    List<TErpOrdersLog> queryOrdersLogList(JqParamBean jqParamBean,RowBounds rowBounds);
}