package com.samton.erp.api.warehouse.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.RowBounds;

import com.samton.erp.api.warehouse.bean.entity.TErpWhouseStorage;
import com.samton.platform.common.bean.param.JqParamBean;

public interface TErpWhouseStorageMapper {
    int deleteByPrimaryKey(Long storageId);

    int insert(TErpWhouseStorage record);

    int insertSelective(TErpWhouseStorage record);

    TErpWhouseStorage selectByPrimaryKey(Long storageId);

    int updateByPrimaryKeySelective(TErpWhouseStorage record);

    int updateByPrimaryKey(TErpWhouseStorage record);
    
    List<Map<String, Object>> queryWhouseRecord(JqParamBean jqParamBean,RowBounds rowBounds);
}