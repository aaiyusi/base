package com.samton.erp.api.logistics.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.session.RowBounds;

import com.samton.erp.api.logistics.bean.entity.TErpLogisticsTrackingnumber;
import com.samton.platform.common.bean.param.JqParamBean;

/**
 * 
 *
 * @Description:运单号管理
 * @author:     fina
 * @date:       2016年4月18日
 * Copyright (c) 2015, Samton. All rights reserved
 */
public interface TErpLogisticsTrackingnumberMapper {
    int deleteByPrimaryKey(Long tnumId);

    int insert(TErpLogisticsTrackingnumber record);

    int insertSelective(TErpLogisticsTrackingnumber record);

    TErpLogisticsTrackingnumber selectByPrimaryKey(Long ruleId);

    int updateByPrimaryKeySelective(TErpLogisticsTrackingnumber record);

    int updateByPrimaryKey(TErpLogisticsTrackingnumber record);
    
    List<Map<String, Object>> queryTrackingRecord(JqParamBean jqParamBean,RowBounds rowBounds);
    
    /**
     * 根据物流id查询运单号
     * @param logisticsId
     * @return
     */
    TErpLogisticsTrackingnumber queryTrackNumByLogisId(@Param("logisticsId") Long logisticsId);
    
    /**
     * 
     * @return
     */
    int queryTrackNumExist(@Param("trackCode") String trackCode,@Param("enterpriseId") long enterpriseId);
    
    
}