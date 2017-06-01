package com.samton.erp.api.warehouse.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.RowBounds;

import com.samton.erp.api.warehouse.bean.entity.TErpWhouseCheckDetail;
import com.samton.platform.common.bean.param.JqParamBean;

public interface TErpWhouseCheckDetailMapper {
    int deleteByPrimaryKey(Long detailId);

    int insert(TErpWhouseCheckDetail record);

    int insertSelective(TErpWhouseCheckDetail record);

    TErpWhouseCheckDetail selectByPrimaryKey(Long detailId);

    int updateByPrimaryKeySelective(TErpWhouseCheckDetail record);

    int updateByPrimaryKey(TErpWhouseCheckDetail record);
    
	List<Map<String, Object>> queryWhouseCheckDetialRecord(JqParamBean jqParamBean,RowBounds rowBounds);
}