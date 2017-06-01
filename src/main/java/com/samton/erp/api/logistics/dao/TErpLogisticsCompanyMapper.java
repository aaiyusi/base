package com.samton.erp.api.logistics.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.session.RowBounds;

import com.samton.erp.api.logistics.bean.entity.TErpLogisticsCompany;
import com.samton.erp.api.logistics.bean.entity.TErpSysLogisticsCompany;
import com.samton.platform.common.bean.param.JqParamBean;

public interface TErpLogisticsCompanyMapper {
    int deleteByPrimaryKey(Long logisticsId);

    int insert(TErpLogisticsCompany record);

    int insertSelective(TErpLogisticsCompany record);

    TErpLogisticsCompany selectByPrimaryKey(Long logisticsId);

    int updateByPrimaryKeySelective(TErpLogisticsCompany record);

    int updateByPrimaryKey(TErpLogisticsCompany record);
    
    /**
     * 查询所有物流渠道子表
     * @return
     */
    List<Map<String,Object>> selectAllLogistics(TErpSysLogisticsCompany record);
    
    /**
     * 查询子表信息根据主表id返回子表对象集合
     * @param record
     * @return
     */
    List<TErpLogisticsCompany> selectAllLogisticsBySysId(TErpSysLogisticsCompany record);
    
    /*
     * 主查询列表
     */
    List<Map<String, Object>> queryLogisticsCompanyRecord(JqParamBean jqParamBean,RowBounds rowBounds);
    
    /**
     * 查询子表是否存在该渠道名
     * @param record
     * @return
     */
    TErpLogisticsCompany queryByNameSysId(TErpLogisticsCompany record);
    
    /**
     * 查询企业所有物流渠道
     * @param enterpriseId
     * @return
     */
    List<Map<String, Object>> queryAuthLogistics(@Param("enterpriseId") long enterpriseId);
}

