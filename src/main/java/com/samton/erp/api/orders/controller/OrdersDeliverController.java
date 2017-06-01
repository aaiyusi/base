/**
 * 
 */
package com.samton.erp.api.orders.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.samton.erp.api.orders.bean.entity.vo.OrderParamVo;
import com.samton.erp.api.orders.bean.entity.vo.OrdersDeliverVo;
import com.samton.erp.api.orders.service.IOrdersDeliverService;
import com.samton.erp.api.orders.service.IOrdersService;
import com.samton.erp.api.shop.service.IShopService;
import com.samton.platform.common.bean.param.JqParamBean;
import com.samton.platform.framework.base.SdkBaseController;
import com.samton.platform.framework.exception.ControllerException;
import com.samton.platform.framework.exception.constant.ExpCodeConstant;
import com.samton.platform.framework.mybatis.pagination.Pagination;
import com.samton.platform.pm.bean.entity.TPlatformPmUser;
import com.samton.platform.pm.service.IPmService;

/**
 *
 * @Description:订单发货Controller
 * @author:     lijianzhou
 * @date:       2016年4月8日
 * Copyright (c) 2015, Samton. All rights reserved
 */
@Controller
@RequestMapping("/api/ordersDeliver")
public class OrdersDeliverController extends SdkBaseController {

	/**
	 * 物理视图
	 */
	private final static String ORDER_DELIVER = "orders/ordersDeliverList";
	
	/**
	 * 订单service接口
	 */
	@Resource
	private IOrdersService ordersService;
	
	@Resource
	private IOrdersDeliverService ordersDeliverService;
	
	@Resource
	private IPmService pmService;
	
	@Resource
	private IShopService shopService;
	
	//SpringMVC日期格式处理
	@InitBinder
	protected void initBinder(WebDataBinder binder) {
	    SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
	    binder.registerCustomEditor(Date.class, new CustomDateEditor(dateFormat, true));
	}
	
	/**
	 * 订单称重出库--单扫单出
	 * @param orderCode
	 * @param scanType
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/sendOrderDeliver")
	@ResponseBody
	public Map<String, Object> sendOrderDeliver(String scanType) throws Exception{
		//订单编号
		String orderCode = request.getParameter("orderCode");
		//货运单号
		String trackNumber = request.getParameter("trackNumber");
		//订单重量
		String orderweight = request.getParameter("orderweight");
		//实际与预估重量差额比
		String weightDigit = request.getParameter("weightDigit");
		if(StringUtils.isBlank(scanType)){
			throw new ControllerException(ExpCodeConstant.PARAMTER_ILLEGAL, "非法参数---出库类型scanType为空！");
		}
		//数据库操作
		Map<String, Object> result = ordersDeliverService.sendOrderDeliver(scanType, orderCode, trackNumber, orderweight, weightDigit);
		return this.getResultMap(true,result);
	}
	
	/**
	 * 订单称重出库--单扫批出
	 * @param scanContent
	 * @param scanType
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/batchSendOrderDeliver")
	@ResponseBody
	public Map<String, Object> batchSendOrderDeliver(String scanType, String scanContent) throws Exception{
		//发货方式不为空
		if(StringUtils.isBlank(scanType)){
			throw new ControllerException(ExpCodeConstant.PARAMTER_ILLEGAL, "非法参数---出库类型scanType为空！");
		}
		
		//输入内容不为空
		if(StringUtils.isBlank(scanContent)){
			throw new ControllerException(ExpCodeConstant.PARAMTER_ILLEGAL, "非法参数---输入值scanContent为空！");
		}
		
		//数据库操作
		Map<String, Object> result = ordersDeliverService.batchSendOrderDeliver(scanType, scanContent);
		return this.getResultMap(true, result);
	}
	
	/**
	 * 加载出货处理结果页面
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/loadOrdersDeliverPage")
	public String loadOrdersDeliverPage() throws Exception{
		//获取用户信息
		List<TPlatformPmUser> userList = pmService.queryUsersNoPage();
		request.setAttribute("userList", userList);
		return ORDER_DELIVER;
	}
	
	
	/**
	 * 出货处理结果分页列表
	 * @param jqParamBean
	 * @param orderVo
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/queryOrdersDeliverList")
	@ResponseBody
	public Map<String, Object> queryOrdersDeliverList(JqParamBean jqParamBean, OrderParamVo orderVo) throws Exception{
		if(orderVo != null){//查询对象不为空
			//开始时间
			if(StringUtils.isNotBlank(orderVo.getStartDate())){
				orderVo.setStartDate(orderVo.getStartDate() + " 00:00:00");
			}
			
			//结束时间
			if(StringUtils.isNotBlank(orderVo.getEndDate())){
				orderVo.setEndDate(orderVo.getEndDate() + " 23:59:59");
			}
			
			//订单编号
			if(StringUtils.isNotBlank(orderVo.getName())){
				orderVo.setName(orderVo.getName().trim());
			}
			
			//货运单号
			if(StringUtils.isNotBlank(orderVo.getBills())){
				orderVo.setBills(orderVo.getBills().trim());
			}
			
			//备注
			if(StringUtils.isNotBlank(orderVo.getRemark())){
				orderVo.setRemark(orderVo.getRemark().trim());
			}
		}
		
		//封装查询条件
		jqParamBean.setSearch(orderVo);
		//数据库操作
		Pagination<OrdersDeliverVo> orderList = ordersDeliverService.queryOrdersDeliverList(jqParamBean);
		//返回结果
		boolean result =orderList != null ? true : false;
		return this.getResultMap(result, orderList);
	}
}