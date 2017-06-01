package com.samton.erp.api.statistics.service;

import java.util.List;
import java.util.Map;

import com.samton.erp.api.statistics.bean.StatCondition;
import com.samton.erp.api.statistics.bean.vo.ChartVo;

public interface IStatService {
	
	/**
	 * 
	 * @Description: 销售订单统计
	 * @param @param stat
	 * @param @return   
	 * @return List<ChartVo>  
	 * @throws
	 * @author yokoboy
	 * @date 2016年4月21日
	 */
	List<ChartVo> getChartDataOrders(StatCondition stat) ;
	
	/**
	 * 
	 * @Description: 渠道业绩统计
	 * @param @param stat
	 * @param @return   
	 * @return List<Map<String,Object>>  
	 * @throws
	 * @author yokoboy
	 * @date 2016年4月22日
	 */
	List<Map<String,Object>> getChannelPerformanceStatis(StatCondition stat) ;
	
	/**
	 * 
	 * @Description: 订单管理统计
	 * @param @param stat
	 * @param @return   
	 * @return List<Map<String,Object>>  
	 * @throws
	 * @author yokoboy
	 * @date 2016年4月23日
	 */
	List<Map<String,Object>> getOrderManagementStatis(StatCondition stat) ;
	
	

}
