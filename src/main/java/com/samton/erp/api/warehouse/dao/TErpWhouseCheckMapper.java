package com.samton.erp.api.warehouse.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.RowBounds;

import com.samton.erp.api.warehouse.bean.entity.TErpWhouseCheck;
import com.samton.platform.common.bean.param.JqParamBean;

public interface TErpWhouseCheckMapper {
    int deleteByPrimaryKey(Long checkId);

    int insert(TErpWhouseCheck record);

    int insertSelective(TErpWhouseCheck record);

    TErpWhouseCheck selectByPrimaryKey(Long checkId);

    int updateByPrimaryKeySelective(TErpWhouseCheck record);

    int updateByPrimaryKey(TErpWhouseCheck record);
    
    List<Map<String, Object>> queryWhouseCheckList(JqParamBean jqParamBean,RowBounds rowBounds);
}