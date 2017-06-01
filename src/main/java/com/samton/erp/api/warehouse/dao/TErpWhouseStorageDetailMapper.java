package com.samton.erp.api.warehouse.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.session.RowBounds;

import com.samton.erp.api.warehouse.bean.entity.TErpWhouseStorageDetail;
import com.samton.platform.common.bean.param.JqParamBean;

public interface TErpWhouseStorageDetailMapper {
    int deleteByPrimaryKey(Long detailId);

    int insert(TErpWhouseStorageDetail record);

    int insertSelective(TErpWhouseStorageDetail record);

    TErpWhouseStorageDetail selectByPrimaryKey(Long detailId);

    int updateByPrimaryKeySelective(TErpWhouseStorageDetail record);

    int updateByPrimaryKey(TErpWhouseStorageDetail record);
    
    List<Map<String, Object>> queryWhouseDetialRecord(JqParamBean jqParamBean,RowBounds rowBounds);
    
    List<Map<String,Object>> selectChildListByStorageId(@Param("storageId") long storageId,@Param("enterpriseId") long enterpriseId);
}