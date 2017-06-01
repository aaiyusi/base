package com.samton.erp.api.logistics.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.RowBounds;

import com.samton.erp.api.logistics.bean.entity.TErpLogisticsCompany;
import com.samton.erp.api.logistics.bean.entity.TErpSysLogisticsCompany;
import com.samton.platform.common.bean.param.JqParamBean;

public interface TErpSysLogisticsCompanyMapper {
    int deleteByPrimaryKey(Long sysLogisticsId);

    int insert(TErpSysLogisticsCompany record);

    int insertSelective(TErpSysLogisticsCompany record);

    TErpSysLogisticsCompany selectByPrimaryKey(Long sysLogisticsId);

    int updateByPrimaryKeySelective(TErpSysLogisticsCompany record);

    int updateByPrimaryKey(TErpSysLogisticsCompany record);
    
    /*
     * 主查询列表
     */
    List<Map<String, Object>> queryLogisticsCompanyRecord(JqParamBean jqParamBean,RowBounds rowBounds);
    
    /**
     * 查询是否存在物流公司名称
     * @param record
     * @return
     */
    TErpSysLogisticsCompany queryByNameSysId(TErpSysLogisticsCompany record);
}