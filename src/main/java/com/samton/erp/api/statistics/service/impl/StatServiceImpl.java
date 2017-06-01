package com.samton.erp.api.statistics.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.samton.erp.api.statistics.bean.StatCondition;
import com.samton.erp.api.statistics.bean.vo.ChartVo;
import com.samton.erp.api.statistics.dao.StatiscsMapper;
import com.samton.erp.api.statistics.service.IStatService;
import com.samton.platform.framework.bean.UserCacheBean;
import com.samton.platform.framework.util.CurrentUtil;

@Service("statService")
public class StatServiceImpl implements IStatService{

	@Resource
	private StatiscsMapper statiscsMapper;
	
	@Override
	public List<ChartVo> getChartDataOrders(StatCondition stat) {
		List<ChartVo> chartVos = new ArrayList<ChartVo>();
		UserCacheBean user = CurrentUtil.getCurrentUser();
		stat.setEnterpriseId(user.getEnterpriseId());
		if(stat!=null ){
			//按照平台查询
			if("month".equals(stat.getStatType())){
				//根据月统计
				chartVos = statiscsMapper.getChartDataOrdersByMonth(stat);
			}else{
				//根据日统计
				chartVos = statiscsMapper.getChartDataOrdersByDay(stat);
			};
		};
		return chartVos;
	}

	@Override
	public List<Map<String, Object>> getChannelPerformanceStatis(StatCondition stat) {
		UserCacheBean user = CurrentUtil.getCurrentUser();
		stat.setEnterpriseId(user.getEnterpriseId());
		List<Map<String, Object>> rs = statiscsMapper.getChartDataChannelPerformance(stat);
		return rs;
	}

	@Override
	public List<Map<String, Object>> getOrderManagementStatis(StatCondition stat) {
		UserCacheBean user = CurrentUtil.getCurrentUser();
		stat.setEnterpriseId(user.getEnterpriseId());
		List<Map<String, Object>> rs = statiscsMapper.getOrderManagementStatis(stat);
		return rs;
	}

}
