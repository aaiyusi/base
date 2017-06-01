package com.samton.erp.api.statistics.controller;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.samton.erp.api.statistics.bean.StatCondition;
import com.samton.erp.api.statistics.bean.vo.ChartVo;
import com.samton.erp.api.statistics.service.IStatService;
import com.samton.platform.framework.base.SdkBaseController;

/**
 * 
* @ClassName: StatiscsController 
* @Description: 统计报表
* @author A18ccms a18ccms_gmail_com 
* @date 2016年4月21日 下午4:16:16 
*
 */
@Controller
@RequestMapping("/api/Statiscs")
public class StatiscsController extends SdkBaseController{

	@Resource
	private IStatService statService;
	 
	/**
	 * 
	 * @Description: 销售订单统计
	 * @param @param year
	 * @param @param month
	 * @param @return
	 * @param @throws Exception   
	 * @return Map<String,Object>  
	 * @throws
	 * @author yokoboy
	 * @date 2016年4月21日
	 */
	@RequestMapping("/getSalesOrdersStatis")
	@ResponseBody
	public Map<String, Object> getSalesOrdersStatis(StatCondition condition) throws Exception {
		List<ChartVo> result = statService.getChartDataOrders(condition);
		return this.getResultMap(result!=null,result);
	}
	
	/**
	 * 
	 * @Description: 渠道业绩统计
	 * @param @param year
	 * @param @param month
	 * @param @return
	 * @param @throws Exception   
	 * @return Map<String,Object>  
	 * @throws
	 * @author yokoboy
	 * @date 2016年4月21日
	 */
	@RequestMapping("/getChannelPerformanceStatis")
	@ResponseBody
	public Map<String, Object> getChannelPerformanceStatis(StatCondition condition) throws Exception {
		List<Map<String, Object>> result = statService.getChannelPerformanceStatis(condition);
		return this.getResultMap(result!=null,result);
	}
	
	/**
	 *
	 * @Description:  订单管理统计
	 * @param @param condition
	 * @param @return
	 * @param @throws Exception   
	 * @return Map<String,Object>  
	 * @throws
	 * @author yokoboy
	 * @date 2016年4月23日
	 */
	@RequestMapping("/getOrderManagementStatis")
	@ResponseBody
	public Map<String, Object> getOrderManagementStatis(StatCondition condition) throws Exception {
		List<Map<String, Object>> result = statService.getOrderManagementStatis(condition);
		return this.getResultMap(result!=null,result);
	}

	
}
