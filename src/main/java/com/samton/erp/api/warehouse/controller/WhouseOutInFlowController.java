package com.samton.erp.api.warehouse.controller;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.samton.erp.api.warehouse.bean.entity.WhouseParamVO;
import com.samton.erp.api.warehouse.service.IWarehouseService;
import com.samton.platform.common.bean.param.JqParamBean;
import com.samton.platform.framework.base.SdkBaseController;
import com.samton.platform.framework.mybatis.pagination.Pagination;

/**
 * 
 *
 * @Description:出入库流水操作
 * @author:     fina
 * @date:       2016年4月5日
 * Copyright (c) 2015, Samton. All rights reserved
 */
@Controller
@RequestMapping("/api/whouseOutInFlow")
public class WhouseOutInFlowController extends SdkBaseController{

	@Resource
	private IWarehouseService warehouseService;
	
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
	public Map<String,Object> queryList(JqParamBean jqParamBean, WhouseParamVO whouseParamVo) throws Exception{
		//查询对象不为空
	
		//封装查询条件
		jqParamBean.setSearch(whouseParamVo);
		//数据库操作
		Pagination<Map<String, Object>> warehouse = warehouseService.queryWhouseOutInFlow(jqParamBean);
		//返回结果
		boolean result =warehouse != null ? true : false;
 		return this.getResultMap(result, warehouse);
	}
	/**
	 * 详情查询列表
	 * @param lostManager
	 * @param page
	 * @param rows
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("queryDetailList")
	@ResponseBody
	public Map<String,Object> queryDetailList(JqParamBean jqParamBean, WhouseParamVO whouseParamVo) throws Exception{
		//查询对象不为空
	
		//封装查询条件
		jqParamBean.setSearch(whouseParamVo);
		//数据库操作
		Pagination<Map<String, Object>> warehouse = warehouseService.queryDetail(jqParamBean);
		//返回结果
		boolean result =warehouse != null ? true : false;
 		return this.getResultMap(result, warehouse);
	}
}