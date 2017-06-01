package com.samton.erp.api.warehouse.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.RowBounds;

import com.samton.platform.common.bean.param.JqParamBean;

public interface TErpWhouseOutInFlowMapper {
	
	List<Map<String, Object>> queryWhouseOutInFlow(JqParamBean jqParamBean,RowBounds rowBounds);
	
	List<Map<String, Object>> queryDetail(JqParamBean jqParamBean,RowBounds rowBounds);
	
	
}