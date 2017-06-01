package com.samton.erp.api.warehouse.dao;

import com.samton.erp.api.warehouse.bean.entity.TErpWhouseDeliver;

public interface TErpWhouseDeliverMapper {
    int deleteByPrimaryKey(Long deliverId);

    int insert(TErpWhouseDeliver record);

    int insertSelective(TErpWhouseDeliver record);

    TErpWhouseDeliver selectByPrimaryKey(Long deliverId);

    int updateByPrimaryKeySelective(TErpWhouseDeliver record);

    int updateByPrimaryKey(TErpWhouseDeliver record);
}