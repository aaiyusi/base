package com.samton.erp.api.statistics.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.samton.erp.api.statistics.bean.StatCondition;
import com.samton.erp.api.statistics.bean.vo.ChartVo;


public interface StatiscsMapper {
	
	List<ChartVo> getChartDataOrdersByDay( @Param("stat") StatCondition stat);
	
	List<ChartVo> getChartDataOrdersByMonth( @Param("stat") StatCondition stat);

	List<Map<String, Object>>  getChartDataChannelPerformance( @Param("stat") StatCondition stat);
	
	List<Map<String, Object>>  getOrderManagementStatis( @Param("stat") StatCondition stat);
}
