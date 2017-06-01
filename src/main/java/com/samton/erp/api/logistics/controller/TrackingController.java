package com.samton.erp.api.logistics.controller;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.samton.erp.api.logistics.bean.entity.TErpLogisticsCompany;
import com.samton.erp.api.logistics.bean.entity.TErpLogisticsTrackingnumber;
import com.samton.erp.api.logistics.bean.entity.TErpSysLogisticsCompany;
import com.samton.erp.api.logistics.bean.vo.RuleVo;
import com.samton.erp.api.logistics.bean.vo.TrackingParamVO;
import com.samton.erp.api.logistics.service.ILogisticsCompanyService;
import com.samton.erp.api.logistics.service.IRuleService;
import com.samton.erp.api.logistics.service.ITrackingService;
import com.samton.erp.api.warehouse.bean.entity.WhouseParamVO;
import com.samton.platform.common.bean.param.JqParamBean;
import com.samton.platform.framework.base.SdkBaseController;
import com.samton.platform.framework.bean.UserCacheBean;
import com.samton.platform.framework.mybatis.pagination.Pagination;
import com.samton.platform.framework.util.CurrentUtil;

/**
 * 
 *
 * @Description:运单号管理
 * @author:     fina
 * @date:       2016年4月18日
 * Copyright (c) 2015, Samton. All rights reserved
 */
@Controller
@RequestMapping("/api/tracking")
public class TrackingController extends SdkBaseController {

	@Resource
	private ITrackingService trackingService;
	
	@Resource
	private ILogisticsCompanyService logisticsCompanyService;
	
	/**
	 * 主查询列表
	 * @param lostManager
	 * @param page
	 * @param rows
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("queryList")
	@ResponseBody
	public Map<String,Object> queryList(JqParamBean jqParamBean, TrackingParamVO trackingParamVo) throws Exception{
		//查询对象不为空
		if(null != trackingParamVo){
		}
		//封装查询条件
		jqParamBean.setSearch(trackingParamVo);
		//数据库操作
		Pagination<Map<String, Object>> tracking = trackingService.queryTrackingList(jqParamBean);
		//返回结果
		boolean result =tracking != null ? true : false;
 		return this.getResultMap(result, tracking);
	}
	/**
	 * 交运单号新增
	 * @param tracking
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("addTracking")
	@ResponseBody
	public Map<String,Object> addTracking(TErpLogisticsTrackingnumber tracking) throws Exception{
		//数据库操作
		int i  = trackingService.insert(tracking);
		//返回结果
		boolean result =i > 0 ? true : false;
 		return this.getResultMap(result);
	}
	
	/**
	 * 查询所有物流渠道根据属性
	 * @param tracking
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("queryAllLogistics")
	@ResponseBody
	public Map<String,Object> queryAllLogistics(TErpSysLogisticsCompany record) throws Exception{
		//数据库操作
		List<Map<String,Object>> list  = logisticsCompanyService.queryAllLogistics(record);
		//返回结果
		boolean result =list != null ? true : false;
 		return this.getResultMap(result,list);
	}
	
	/**
	 * 查询所有物流渠道根据属性返回对象
	 * @param tracking
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("queryAllLogisticsById")
	@ResponseBody
	public Map<String,Object> queryAllLogisticsById(TErpSysLogisticsCompany record) throws Exception{
		//数据库操作
		List<TErpLogisticsCompany> list  = logisticsCompanyService.queryAllLogisticsById(record);
		//返回结果
		boolean result =list != null ? true : false;
 		return this.getResultMap(result,list);
	}
	
	/**
	 *删除
	 * @param tracking
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("delTracking")
	@ResponseBody
	public Map<String,Object> delTracking(String ids) throws Exception{
		//数据库操作
		int i  = trackingService.delTracking(ids);
		//返回结果
		boolean result =i != 0 ? true : false;
 		return this.getResultMap(result);
	}
	/**
	 *校验交运单号是否唯一
	 * @param tracking
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("oneTracking")
	@ResponseBody
	public Map<String,Object> oneTracking(String ids) throws Exception{
		//数据库操作
		int i  = trackingService.oneTracking(ids);
		//返回结果
		boolean result =i == 0 ? true : false;
 		return this.getResultMap(result);
	}
	
}
