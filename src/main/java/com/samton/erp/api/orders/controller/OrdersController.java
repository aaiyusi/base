/**
 * 
 */
package com.samton.erp.api.orders.controller;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.annotation.Resource;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.samton.erp.api.goods.bean.entity.TErpGoods;
import com.samton.erp.api.goods.service.IGoodsService;
import com.samton.erp.api.logistics.service.ILogisticsCompanyService;
import com.samton.erp.api.orders.bean.entity.TErpOrders;
import com.samton.erp.api.orders.bean.entity.TErpOrdersLog;
import com.samton.erp.api.orders.bean.entity.vo.OrderExportVo;
import com.samton.erp.api.orders.bean.entity.vo.OrderGoodsVo;
import com.samton.erp.api.orders.bean.entity.vo.OrderItemVo;
import com.samton.erp.api.orders.bean.entity.vo.OrderParamVo;
import com.samton.erp.api.orders.bean.entity.vo.OrderPrintVo;
import com.samton.erp.api.orders.bean.entity.vo.OrderTnumberVo;
import com.samton.erp.api.orders.bean.entity.vo.OrdersItemChild;
import com.samton.erp.api.orders.bean.entity.vo.OrdersVo;
import com.samton.erp.api.orders.constant.OrderExpCodeConstant;
import com.samton.erp.api.orders.constant.OrderLogConstant;
import com.samton.erp.api.orders.grid.Column;
import com.samton.erp.api.orders.grid.Table;
import com.samton.erp.api.orders.grid.TableHead;
import com.samton.erp.api.orders.service.IOrdersService;
import com.samton.erp.api.orders.util.DistributionPrintSetUtil;
import com.samton.erp.api.print.bean.vo.PrintVo;
import com.samton.erp.api.print.constant.PrintConstant;
import com.samton.erp.api.print.service.IPrintService;
import com.samton.erp.common.util.ChangeString;
import com.samton.erp.common.util.Public;
import com.samton.erp.common.util.excel.ExcelField;
import com.samton.erp.common.util.excel.ExportExcel;
import com.samton.platform.common.bean.param.JqParamBean;
import com.samton.platform.framework.base.SdkBaseController;
import com.samton.platform.framework.bean.UserCacheBean;
import com.samton.platform.framework.exception.ControllerException;
import com.samton.platform.framework.exception.ServiceException;
import com.samton.platform.framework.exception.constant.ExpCodeConstant;
import com.samton.platform.framework.mybatis.pagination.Pagination;
import com.samton.platform.framework.util.CurrentUtil;
import com.samton.platform.framework.util.DateUtil;

/**
 *
 * @Description:订单管理Controller
 * @author:     lijianzhou
 * @date:       2016年3月26日
 * Copyright (c) 2015, Samton. All rights reserved
 */
@Controller
@RequestMapping("/api/orders")
public class OrdersController extends SdkBaseController{

	/**
	 * 跳转视图
	 */
	private final static String ADD_ORDER_PAGE = "orders/ordersAdd";
	
	private final static String ORDER_LIST_PAGE = "orders/ordersList";
	
	private final static String ORDER_VIEW_PAGE = "orders/ordersView";
	
	private final static String DISTRIBUTION_PRINT_PRIVIEW = "orders/distributionPrintList";
	
	private final static String PRINT_SET_PRIVIEW = "orders/printSetList";
	
	private final static String PACK_INSPECT = "orders/packInspectList";
	
	private final static String ORDER_OUT = "orders/outstorageList";
	
	private final static String ORDER_RETRY = "orders/orderRetry";
	
	private final static String ORDER_BATCH_RETRY = "orders/orderBatchRetry";
	
	private final static String ORDER_TRADE = "orders/orderTradeNumber";
	
	/**
	 * 订单service接口
	 */
	@Resource
	private IOrdersService ordersService;
	
	@Resource
	private IGoodsService goodsService;

	@Resource
	private IPrintService printService;
	
	@Resource
	private ILogisticsCompanyService logisticsCompanyService;
	
	private TErpOrders erpOrder = new TErpOrders();
	
	//SpringMVC日期格式处理
	@InitBinder
	protected void initBinder(WebDataBinder binder) {
	    SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
	    binder.registerCustomEditor(Date.class, new CustomDateEditor(dateFormat, true));
	}
	
	/**
	 * 加载订单列表页面
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/loadOrderList")
	public String loadOrderList() throws Exception{
		return ORDER_LIST_PAGE;
	}
	
	/**
	 * 订单列表查询
	 * @param jqParamBean
	 * @param orderVo
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/queryOrdersList")
	@ResponseBody
	public Map<String,Object> queryOrdersList(JqParamBean jqParamBean, OrderParamVo orderVo) throws Exception{
		if(orderVo != null){//查询对象不为空
			if(orderVo.getOrderState() == null){
				orderVo.setOrderState((short)1);//默认查询待处理订单
			}
			
			//开始时间
			if(StringUtils.isNotBlank(orderVo.getStartDate())){
				orderVo.setStartDate(orderVo.getStartDate() + " 00:00:00");
			}
			
			//结束时间
			if(StringUtils.isNotBlank(orderVo.getEndDate())){
				orderVo.setEndDate(orderVo.getEndDate() + " 23:59:59");
			}
		}
		
		jqParamBean.setSidx(ChangeString.changeString(jqParamBean.getSidx(), 0));
		//封装查询条件
		jqParamBean.setSearch(orderVo);
		//数据库操作
		Pagination<Map<String, Object>> orderList = ordersService.queryOrdersList(jqParamBean);
		//返回结果
		boolean result =orderList != null ? true : false;
 		return this.getResultMap(result, orderList);
	}
	
	/**
	 * 跳转到订单新增页面
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/goOrderAddPage")
	public String goOrderAddPage() throws Exception{
		//返回物理视图
		return ADD_ORDER_PAGE;
	}
	
	/**
	 * 添加订单信息
	 * @param order
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/addOrder")
	@ResponseBody
	public Map<String,Object> addOrder(TErpOrders order) throws Exception{
		//订单信息为空
		if(order == null){
			throw new ControllerException(OrderExpCodeConstant.ORDER_INFO_NULL, "订单信息为空！");
		}
		//订单交易号为空
		if(StringUtils.isEmpty(order.getName())){
			throw new ControllerException(OrderExpCodeConstant.ORDER_NAME_NULL, "订单编号为空！");
		}
		//订单日期为空
		if(order.getOrdersDate() == null){
			throw new ControllerException(OrderExpCodeConstant.ORDER_DATE_NULL, "订单日期为空！");
		}
		//订单交易号为空
		if(StringUtils.isEmpty(order.getDealNum())){
			throw new ControllerException(OrderExpCodeConstant.ORDER_DEALNUM_NULL, "订单交易号为空！");
		}
		//数据库操作
		int result = ordersService.insertOrder(order);
		return this.getResultMap(result > 0 ? true : false,order.getOrdersId());
	}
	
	/**
	 * 修改订单商品信息
	 * @param orderVo
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/updateOrder")
	@ResponseBody
	public Map<String,Object> updateOrder(TErpOrders order) throws Exception{
		//订单信息为空
		if(order == null){
			throw new ControllerException(OrderExpCodeConstant.ORDER_INFO_NULL, "订单信息为空！");
		}
		
		//订单Id为空
		if(order.getOrdersId() == null){
			throw new ControllerException(ExpCodeConstant.PARAMTER_ILLEGAL, "非法参数---订单id为空！");
		}
		//返回结果
		boolean result = false;
		//数据库操作
		result = ordersService.modifyOrder(order) > 0 ? true : false;
		return this.getResultMap(result);
	}
	
	/**
	 * 根据商品sku查询商品信息
	 * @param sku
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/addOrderGoodsItem")
	@ResponseBody
	public Map<String,Object> addOrderGoodsItem(OrderItemVo orderItem) throws Exception{
		//订单明细为空
		if(orderItem == null){
			throw new ControllerException(ExpCodeConstant.PARAMTER_ILLEGAL, "非法参数--订单明细为空");
		}
		
		//订单id为空
		if(orderItem.getOrderId() == null){
			throw new ControllerException(ExpCodeConstant.PARAMTER_ILLEGAL, "非法参数--订单id为空");
		}
		
		//sku编号为空
		if(StringUtils.isBlank(orderItem.getSku())){
			throw new ControllerException(ExpCodeConstant.PARAMTER_ILLEGAL, "非法参数--sku为空");
		}
		
		//订购数量为空
		if(orderItem.getCount() == null || orderItem.getCount() == 0){
			throw new ControllerException(ExpCodeConstant.PARAMTER_ILLEGAL, "非法参数--orderCount为空");
		}
	
		//数据库操作
		boolean result = ordersService.insertOrdersItem(orderItem);
		return this.getResultMap(result);
	}
	
	/**
	 * 修改订单状态
	 * @param ordersId
	 * @param orderState
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/updateOrderState")
	@ResponseBody
	public Map<String,Object> updateOrderState(String ordersId, String orderState) throws Exception{
		//获取当前登录用户信息
		UserCacheBean userCacheBean = CurrentUtil.getCurrentUser();
		//获取企业信息
		long enterpriseId = userCacheBean.getEnterpriseId();
		boolean result = false;
		if(StringUtils.isBlank(ordersId)){//订单Id为空
			throw new ControllerException(ExpCodeConstant.PARAMTER_ILLEGAL, "非法参数--订单Id为空");
		}
		
		if(StringUtils.isBlank(orderState)){
			throw new ControllerException(ExpCodeConstant.PARAMTER_ILLEGAL, "非法参数--订单状态为空");
		}
		
		//设置参数
		erpOrder = new TErpOrders();
		erpOrder.setOrdersId(Long.parseLong(ordersId));
		erpOrder.setOrderState(Short.valueOf(orderState));
		
		//数据库操作
		result = ordersService.updateOrder(erpOrder) > 0 ? true : false;
		
		if(result){
			//记录日志
			if("1".equals(orderState)){
				ordersService.addOrderLog(Long.parseLong(ordersId), "修改订单基础信息", OrderLogConstant.UPDATE_ORDER, "批处理异常其它异常",enterpriseId);
			}else if("0".equals(orderState)){
				ordersService.addOrderLog(Long.parseLong(ordersId), "订单激活", OrderLogConstant.UPDATE_ORDER, "原状态为已作废,更新为配货中",enterpriseId);
			}
		}
		return this.getResultMap(result);
	}
	
	/**
	 * 激活订单
	 * @param ordersId
	 * @param orderState
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/enableOrder")
	@ResponseBody
	public Map<String, Object> enableOrder(String ordersId) throws Exception{
		boolean result = false;
		if(StringUtils.isBlank(ordersId)){//订单Id为空
			throw new ControllerException(ExpCodeConstant.PARAMTER_ILLEGAL, "非法参数--订单Id为空");
		}
		//数据库操作
		result = ordersService.enableOrder(ordersId);
		return this.getResultMap(result);
	}
	/**
	 * 修改订单备注
	 * @param ordersId
	 * @param remark
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/updateOrderRemark")
	@ResponseBody
	public Map<String,Object> updateOrderRemark(String ordersId, String remark) throws Exception{
		//获取当前登录用户信息
		UserCacheBean userCacheBean = CurrentUtil.getCurrentUser();
		//获取企业信息
		long enterpriseId = userCacheBean.getEnterpriseId();
		boolean result = false;
		if(StringUtils.isBlank(ordersId)){//订单Id为空
			throw new ControllerException(ExpCodeConstant.PARAMTER_ILLEGAL, "非法参数--订单Id为空");
		}
		
		//查询订单信息
		TErpOrders orders = ordersService.queryOrdersInfoById(Long.parseLong(ordersId));
		if(orders == null){
			throw new ControllerException(ExpCodeConstant.PARAMTER_ILLEGAL, "非法参数--订单Id不存在");
		}
		
		//设置参数
		erpOrder = new TErpOrders();
		erpOrder.setOrdersId(Long.parseLong(ordersId));
		erpOrder.setRemark(remark);
		//数据库操作
		result = ordersService.updateOrder(erpOrder) > 0 ? true : false;
		
		//记录日志
		if(result){
			//操作内容
			String content = "原备注信息为"+(StringUtils.isNotBlank(orders.getRemark()) ? orders.getRemark() : null)+",更新为"+remark;
			ordersService.addOrderLog(Long.parseLong(ordersId), "修改订单基础信息", OrderLogConstant.UPDATE_ORDER, content,enterpriseId);
		}
		return this.getResultMap(result);
	}
	
	/**
	 * 批量处理订单
	 * @param ids
	 * @param orderState
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/batchDealOrderState")
	@ResponseBody
	public Map<String, Object> batchDealOrderState(String ids, String orderState) throws Exception{
		if(StringUtils.isBlank(ids)){//订单id为空
			throw new ControllerException(ExpCodeConstant.PARAMTER_ILLEGAL, "非法参数--订单id为空！");
		}
		if(StringUtils.isBlank(orderState)){//订单状态为空
			throw new ControllerException(ExpCodeConstant.PARAMTER_ILLEGAL, "非法参数--订单状态orderState为空！");
		}
		
		//数据库操作
		List<Map<String, String>> result = ordersService.batchUpdateOrdersState(Short.valueOf(orderState), ids);
		return this.getResultMap(result);
	}
	
	/**
	 * 设置物流渠道
	 * @param order
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/addOrderLogist")
	@ResponseBody
	public Map<String, Object> addOrderLogist(TErpOrders order) throws Exception{
		//获取当前登录用户信息
		UserCacheBean userCacheBean = CurrentUtil.getCurrentUser();
		//获取企业信息
		long enterpriseId = userCacheBean.getEnterpriseId();
		//订单信息为空
		if(order == null){
			throw new ControllerException(OrderExpCodeConstant.ORDER_INFO_NULL, "订单信息为空！");
		}
		
		//订单Id为空
		if(order.getOrdersId() == null){
			throw new ControllerException(ExpCodeConstant.PARAMTER_ILLEGAL, "非法参数---订单id为空！");
		}
		
		//查询订单信息
		TErpOrders orders = ordersService.queryOrdersInfoById(order.getOrdersId());
		if(orders == null){
			throw new ControllerException(ExpCodeConstant.PARAMTER_ILLEGAL, "非法参数--订单Id不存在");
		}
		
		//返回结果
		boolean result = false;
		//数据库操作
		result = ordersService.updateOrder(order) > 0 ? true : false;
		//记录日志
		if(result){
			//操作内容
			String content = "原物流渠道Id为"+(orders.getLogisticsId() == null ? null : orders.getLogisticsId())+",更新后物流渠道Id为"+order.getLogisticsId()+" 原货运单号为"+(StringUtils.isNotBlank(orders.getBills()) ? orders.getBills() : null)+",更新为"+(StringUtils.isNotBlank(order.getBills()) ? order.getBills() : null);
			ordersService.addOrderLog(order.getOrdersId(), "修改订单商品物流信息", OrderLogConstant.UPDATE_PRODUCT_LOGIST, content,enterpriseId);
		}
		return this.getResultMap(result);
	}
	
	/**
	 * 加载订单详情页面
	 * @param ordersId
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/loadOrderViewPage")
	public String loadOrderViewPage(String ordersId) throws Exception{
		String type = request.getParameter("type");
		if(StringUtils.isBlank(ordersId)){//订单Id为空
			throw new ControllerException(ExpCodeConstant.PARAMTER_ILLEGAL, "非法参数--订单Id为空");
		}
		request.setAttribute("ordersId", ordersId);
		request.setAttribute("type", type);
		return ORDER_VIEW_PAGE;
	}
	
	/**
	 * 根据订单id查询订单详情
	 * @param ordersId
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/queryOrdersInfoById")
	@ResponseBody
	public Map<String, Object> queryOrdersInfoById(String ordersId) throws Exception{
		if(StringUtils.isBlank(ordersId)){//订单Id为空
			throw new ControllerException(ExpCodeConstant.PARAMTER_ILLEGAL, "非法参数--订单Id为空");
		}
		
		//获取订单信息
		TErpOrders orders = ordersService.queryOrdersInfoById(Long.parseLong(ordersId));
		
		//返回结果
		boolean result = orders != null ? true : false;
		return this.getResultMap(result, orders);
	}
	
	/**
	 * 获取订单日志分页列表信息
	 * @param jqParamBean
	 * @param ordersId
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/queryOrdersLogList")
	@ResponseBody
	public Map<String,Object> queryOrdersLogList(JqParamBean jqParamBean, OrderParamVo orderLogVo) throws Exception{
		if(orderLogVo == null){//订单Id为空
			throw new ControllerException(ExpCodeConstant.PARAMTER_ILLEGAL, "非法参数--订单Id为空");
		}
		//封装查询条件
		jqParamBean.setSearch(orderLogVo);
		//数据库操作
		Pagination<TErpOrdersLog> orderLogList = ordersService.queryOrdersLogList(jqParamBean);
		//返回结果
		boolean result = orderLogList != null ? true : false;
 		return this.getResultMap(result, orderLogList);
	}
	
	/**
	 * 修改商品物流信息
	 * @param order
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/updateOrderGood")
	@ResponseBody
	public Map<String,Object> updateOrderGood(TErpOrders order) throws Exception{
		//获取当前登录用户信息
		UserCacheBean userCacheBean = CurrentUtil.getCurrentUser();
		//获取企业信息
		long enterpriseId = userCacheBean.getEnterpriseId();
		//订单信息为空
		if(order == null){
			throw new ControllerException(OrderExpCodeConstant.ORDER_INFO_NULL, "订单信息为空！");
		}
		
		//订单Id为空
		if(order.getOrdersId() == null){
			throw new ControllerException(ExpCodeConstant.PARAMTER_ILLEGAL, "非法参数---订单id为空！");
		}
		//返回结果
		boolean result = false;
		//数据库操作
		result = ordersService.updateOrder(order) > 0 ? true : false;
		
		//记录日志
		if(result){
			ordersService.addOrderLog(order.getOrdersId(), "修改订单商品物流信息", OrderLogConstant.UPDATE_PRODUCT_LOGIST, "修改订单id为【"+order.getOrdersId()+"】商品物流信息",enterpriseId);
		}
		return this.getResultMap(result);
	}
	
	/**
	 * 修改商品订单明细
	 * @param orderItemVo
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/updateOrderGoodsItem")
	@ResponseBody
	public Map<String, Object> updateOrderItem(OrderItemVo orderItemVo) throws Exception{
		if(orderItemVo == null){
			throw new ControllerException(ExpCodeConstant.PARAMTER_ILLEGAL, "非法参数---订单明细orderItemVo为空！");
		}
		
		//订单明细ID
		if(orderItemVo.getDetailId() == null){
			throw new ControllerException(ExpCodeConstant.PARAMTER_ILLEGAL, "非法参数---订单明细id为空！");
		}
		
		//判断价格是否为空
		if(orderItemVo.getPrice() == null){
			orderItemVo.setPrice(new BigDecimal(0));
		}
		
		//判断数量是否为空
		if(orderItemVo.getCount() == null){
			orderItemVo.setCount(0);
		}
		//数据库操作
		boolean result = ordersService.modifyOrdersItem(orderItemVo);
		return this.getResultMap(result);
	}
	
	/**
	 * 修改订单商品状态
	 * @param orderItemVo
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/updateOrderItemState")
	@ResponseBody
	public Map<String, Object> updateOrderItemState(OrderItemVo orderItemVo) throws Exception{
		if(orderItemVo == null){
			throw new ControllerException(ExpCodeConstant.PARAMTER_ILLEGAL, "非法参数---订单明细orderItemVo为空！");
		}
		
		//订单明细ID
		if(orderItemVo.getDetailId() == null){
			throw new ControllerException(ExpCodeConstant.PARAMTER_ILLEGAL, "非法参数---订单明细id为空！");
		}
		
		//返回结果
		boolean result = false;
		//数据库操作
		result = ordersService.updateOrderItemState(orderItemVo) > 0 ? true : false;
		return this.getResultMap(result);
	}
	
	/**
	 * 获取订单明细列表
	 * @param ordersId
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/queryOrdersDetailList")
	@ResponseBody
	public Map<String,Object> queryOrdersDetailList(String ordersId) throws Exception{
		if(StringUtils.isBlank(ordersId)){//订单Id为空
			throw new ControllerException(ExpCodeConstant.PARAMTER_ILLEGAL, "非法参数--订单Id为空");
		}
		
		//封装结果参数
		Map<String,Object> data = new HashMap<String, Object>();
		//数据库操作
		List<Map<String,Object>> orderItemList = ordersService.queryOrdersDetailList(Long.parseLong(ordersId));
		data.put("data", orderItemList);
		//返回结果参数
		boolean result = orderItemList.isEmpty() ? false : true;
		return this.getResultMap(result, data);
	}
	
	/**
	 * 拣货清单打印列表
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/loadPrintSetList")
	public String loadPrintSetList(String orderIds) throws Exception{
		if(StringUtils.isBlank(orderIds)){//订单id为空
			throw new ControllerException(ExpCodeConstant.PARAMTER_ILLEGAL, "非法参数--订单Id为空");
		}
		//统计商品总数
		BigInteger amount = new BigInteger("0");
		//获取需要打印的字段
		List<Column> cols = new ArrayList<Column>();
		String[] printfields = request.getParameterValues("printfield");
		if(printfields != null && printfields.length > 0){
			for (int i = 0; i < printfields.length; i++) {
				if(printfields[i].contains("number")){
					cols.add(new Column("序号", "rownum", 40).setOrder(0));
				}else if(printfields[i].contains("trackNumber")){
					cols.add(new Column("货运单号", "bills", 50).setOrder(3));
				}else if(printfields[i].contains("picture")){
					cols.add(new Column("图片", "storget_image", 50).setOrder(1).setColType(4));
				}else if(printfields[i].contains("warehouse")){
					cols.add(new Column("仓库", "whouse_name").setOrder(6));
				}else if(printfields[i].contains("inventory")){
					cols.add(new Column("库存", "inventory_count", 70).setOrder(8));
				}else if(printfields[i].contains("osku")){
					cols.add(new Column("原厂SKU", "original_sku",100).setOrder(9));
				}
			}
		}
		cols.add(new Column("库存SKU", "sku", 100).setOrder(2));
		cols.add(new Column("中文名称", "goods_name").setOrder(4));
		cols.add(new Column("订单量", "count", 50).setOrder(5));
		cols.add(new Column("仓位", "space_code", 70).setOrder(7));
		
		//字段排序
		Collections.sort(cols,new Comparator<Column>(){
			public int compare(Column o1, Column o2) {
				int ret = 0;
				if(o1.getOrder() > o2.getOrder()){
					ret = 1;
				}else if(o1.getOrder() < o2.getOrder()){
					ret = -1;
				}else{
					ret = 0;
				}
				return ret;
			}
			
		});
		
		//获取自定义表头
		Table table = new Table(new TableHead(cols));
		List<Map<String,Object>> list = ordersService.queryPrintSetPreviewList(orderIds);
		if(!list.isEmpty()){
			for(Map<String,Object> tempMap : list){
				amount = amount.add(new BigInteger(String.valueOf(tempMap.get("count"))));
			}
		}
		request.setAttribute("table", table);
		request.setAttribute("list", list);
		request.setAttribute("size", printfields.length);
		request.setAttribute("timeStr", DateUtil.currentDatetime());
		request.setAttribute("amount", amount.intValue());
		return PRINT_SET_PRIVIEW;
	}
	
	/**zz
	 * 配货清单打印列表
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/loadDistributionPrintSetList")
	public String loadDistributionPrintSetList(String orderIds) throws Exception{
		if(StringUtils.isBlank(orderIds)){//订单id为空
			throw new ControllerException(ExpCodeConstant.PARAMTER_ILLEGAL, "非法参数--订单Id为空");
		}
		
		//获取需要打印的字段
		List<Column> cols = new ArrayList<Column>();
		String[] printfields = request.getParameterValues("printfields");
		//统计商品总数
		BigInteger amount = new BigInteger("0");
		if(printfields != null){
			for (int i = 0; i < printfields.length; i++) {
				if(printfields[i].contains("platform_type")){
					cols.add(new Column(DistributionPrintSetUtil.valueMap.getValueByLabel(printfields[i]).toString(), printfields[i]).putExprotKV(printfields[i], "0", "Other").putExprotKV(printfields[i], "1", "Aliexpress").putExprotKV(printfields[i], "2", "Wish").setRender(true));
				}else if(printfields[i].contains("storget_image")){
					cols.add(new Column(DistributionPrintSetUtil.valueMap.getValueByLabel(printfields[i]).toString(), printfields[i]).setRender(false).setColType(4));
				}else if(printfields[i].contains("name") || printfields[i].contains("bills") || printfields[i].contains("deal_num") || printfields[i].contains("shop_name") || printfields[i].contains("remark")){
					cols.add(new Column(DistributionPrintSetUtil.valueMap.getValueByLabel(printfields[i]).toString(), printfields[i]).setRender(true));
				}else{
					cols.add(new Column(DistributionPrintSetUtil.valueMap.getValueByLabel(printfields[i]).toString(), printfields[i]).setRender(false));
				}
			}
		}
		
		//获取自定义表头
		Table table = new Table(new TableHead(cols));
		//获取数据
		List<Map<String,Object>> list = ordersService.queryDistributionPrintSetPreviewList(orderIds);
		if(!list.isEmpty()){
			for(Map<String,Object> tempMap : list){
				amount = amount.add(new BigInteger(String.valueOf(tempMap.get("count"))));
			}
		}
		request.setAttribute("table", table);
		request.setAttribute("list", list);
		request.setAttribute("size", printfields.length);
		request.setAttribute("timeStr", DateUtil.currentDatetime());
		request.setAttribute("amount", amount.intValue());
		return DISTRIBUTION_PRINT_PRIVIEW;
	}
	
	/**
	 * 导出配货清单列表
	 * @param orderIds
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/exportDistributionPrintSetList")
	public Map<String, Object> exportDistributionPrintSetList(String orderIds) throws Exception{
		if(StringUtils.isBlank(orderIds)){//订单id为空
			throw new ControllerException(ExpCodeConstant.PARAMTER_ILLEGAL, "非法参数--订单Id为空");
		}
		
		String[] printfields = request.getParameterValues("printfields");
		List<ExcelField> fs = new ArrayList<ExcelField>();
		if(printfields != null){
			for (int i = 0; i < printfields.length; i++) {
				if(printfields[i].contains("platform_type")){
					fs.add(new ExcelField(DistributionPrintSetUtil.valueMap.getValueByLabel(printfields[i]).toString(), printfields[i]).put("0", "Other").put("1", "Aliexpress").put("2", "Wish"));
				}else{
					fs.add(new ExcelField(DistributionPrintSetUtil.valueMap.getValueByLabel(printfields[i]).toString(), printfields[i]));
				}
			}
		}
		//获取数据
		List<Map<String,Object>> list = ordersService.queryDistributionPrintSetPreviewList(orderIds);
		//生成导出文件名
		String fileName = "";
		fileName = fileName + System.currentTimeMillis();
		
		//导出文件
		ExportExcel.exportExcel(fileName,fs, list);
		return null;
	}
	
	/**
	 * 加载包装验货
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/loadPackageInspect")
	public String loadPackageInspect() throws Exception{
		return PACK_INSPECT;
	}
	
	/**
	 * 根据订单编号或货运单号查询订单商品信息
	 * @param ordersCode
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/findOrderAndSell")
	@ResponseBody
	public Map<String, Object> findOrderAndSell(String ordersCode) throws Exception{
		if(StringUtils.isBlank(ordersCode)){//订单编号为空
			throw new ControllerException(ExpCodeConstant.PARAMTER_ILLEGAL, "非法参数--订单编号或货运单号为空");
		}
		
		//查询订单是否存在
		TErpOrders order = ordersService.queryOrdersInfoByCode(ordersCode);
		if(order == null){
			throw new ControllerException(OrderExpCodeConstant.ORDER_NOT_EXISTS, "订单不存在,请检查订单编号或运单号是否正确！");
		}
		
		//订单状态为已发货则不能扫描
		if(order.getOrderState() == 3){
			throw new ControllerException(OrderExpCodeConstant.ORDER_YET_DISTRUTE, "此订单已发货或已完成，不能验货！");
		}else if(order.getOrderState() == 0){
			throw new ControllerException(OrderExpCodeConstant.ORDER_DISABLE_DISBUTE, "此订单状态是禁止发货，不能验货！");
		}else if(order.getOrderState() == 4){
			throw new ControllerException(OrderExpCodeConstant.ORDER_SCAN_CANCEL, "此订单已作废，不能验货！");
		}
		
//		//未选择物流渠道
//		if(StringUtils.isBlank(order.getBills())){
//			throw new ControllerException(OrderExpCodeConstant.ORDER_NO_BILLS, "此订单不存在,请检查订单编号或运单号是否存在！");
//		}
		
		//已验货不能重复验货
		if(order.getIsChecked() != null && order.getIsChecked() == 1){
			throw new ControllerException(OrderExpCodeConstant.ORDER_YES_CHECKED, "此订单状态是已验货,不能重复验货！");
		}
		
		//查询订单是否有商品存在
		List<Map<String, Object>> itemList = ordersService.queryOrdersDetailList(order.getOrdersId());
		if(itemList.isEmpty()){
			throw new ControllerException(OrderExpCodeConstant.ORDER_NO_GOODS, "此订单下无商品，不能验货！");
		}
		
		boolean result = order != null ? true : false;
		return this.getResultMap(result,order);
	}
	
	/**
	 * 查询订单商品
	 * @param ordersId
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/findOrderGoods")
	@ResponseBody
	public Map<String, Object> findOrderGoods(String ordersId) throws Exception{
		if(StringUtils.isBlank(ordersId)){//订单id为空
			throw new ControllerException(ExpCodeConstant.PARAMTER_ILLEGAL, "非法参数--订单id为空");
		}
		
		//数据库操作
		List<OrderGoodsVo> orderList = ordersService.findOrderGoods(Long.parseLong(ordersId));
		
		//订单商品不存在
		if(orderList.isEmpty()){
			throw new ControllerException(OrderExpCodeConstant.ORDER_PRODUCT_NOT_EXISTS, "订单中不存在此SKU,请重新扫描！");
		}
		
		//封装结果参数
		Map<String,Object> data = new HashMap<String, Object>();
		data.put("data", orderList);
		Map<String,Object> temp = new HashMap<String, Object>();
		temp.put("total", orderList.size());
		data.put("temp", temp);
		//返回结果
		return this.getResultMap(true, data);
	}
	
	/**
	 * 加载称重出库页面
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/loadOrderOutstorage")
	public String loadOrderOutstorage() throws Exception{
		return ORDER_OUT;
	}
	
	/**
	 * 批量修改订单
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/batchEditOrders")
	@ResponseBody
	public Map<String, Object> batchEditOrders() throws Exception{
		//订单编号
		String orderCodes = this.getString("orderCodes");
		//物流渠道
		String logisticsId = this.getString("logisticsId");
		//订单状态
		String orderState = this.getString("orderState");
		//订单备注
		String remark = this.getString("remark");
		//编辑物流渠道
		String editLogist = this.getString("editLogist");
		//编辑订单状态
		String editState = this.getString("editState");
		//编辑备注
		String editRemark = this.getString("editRemark");
		//订单编号为空
		if(StringUtils.isBlank(orderCodes)){
			throw new ControllerException(OrderExpCodeConstant.ORDER_NAME_NULL, "订单编号为空！");
		}
		
		//数据库操作
		List<Map<String, String>> result = ordersService.batchEditOrders(orderCodes, logisticsId, orderState, remark, editLogist, editState, editRemark);
		return this.getResultMap(true, result);
	}
	
	/**
	 * 批量更新交运信息
	 * @param updateOrderInfo
	 * @param type
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/batchImportOrders")
	@ResponseBody
	public Map<String, Object> batchImportOrders(String updateOrderInfo, Integer type) throws Exception{
		if(type == null){//更新类型
			throw new ControllerException(ExpCodeConstant.PARAMTER_ILLEGAL, "非法参数--更新类型type为空！");
		}
		
		//更新内容为空
		if(StringUtils.isBlank(updateOrderInfo)){
			throw new ControllerException(ExpCodeConstant.PARAMTER_ILLEGAL, "非法参数--更新内容为空！");
		}
		//数据库操作
		List<Map<String, Object>> errorList = ordersService.batchImportOrders(updateOrderInfo, type);
		return this.getResultMap(errorList);
	}
	
	/**
	 * 加载订单重发页面
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/loadOrderRetryPage")
	public String loadOrderRetryPage(String ordersId) throws Exception{
		if(StringUtils.isBlank(ordersId)){//订单Id为空
			throw new ControllerException(ExpCodeConstant.PARAMTER_ILLEGAL, "非法参数--订单Id为空");
		}
		request.setAttribute("ordersId", ordersId);
		return ORDER_RETRY;
	}
	
	/**
	 * 查询订单商品
	 * @param ordersId
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/queryOrderGoodsList")
	@ResponseBody
	public Map<String, Object> queryOrderGoodsList(String ordersId) throws Exception{
		if(StringUtils.isBlank(ordersId)){//订单id为空
			throw new ControllerException(ExpCodeConstant.PARAMTER_ILLEGAL, "非法参数--订单id为空");
		}
		
		//数据库操作
		List<OrderGoodsVo> orderList = ordersService.findOrderGoods(Long.parseLong(ordersId));
		//封装结果参数
		Map<String,Object> data = new HashMap<String, Object>();
		data.put("data", orderList);
		//返回结果
		return this.getResultMap(true, data);
	}
	
	/**
	 * 重发订单
	 * @param ordersId
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/retryOrder")
	@ResponseBody
	public Map<String, Object> retryOrder(String ordersId) throws Exception{
		if(StringUtils.isBlank(ordersId)){//订单id为空
			throw new ControllerException(ExpCodeConstant.PARAMTER_ILLEGAL, "非法参数--订单id为空");
		}
		
		//接收参数
		String orderSplitData = getString("orderSplitData");
		String remark = getString("remark");
		String logisticsId = getString("logisticsId");
		String trackNumber = getString("trackNumber");
		String packageId = getString("packageId");
		String shippingCost = getString("shippingCost");
		String exceptionReason = getString("exceptionReason");
		
		//数据库操作
		int result = ordersService.retryOrder(ordersId, orderSplitData, remark, logisticsId, trackNumber, packageId, shippingCost, exceptionReason);
		return this.getResultMap(result > 0 ? true : false);
	}
	
	/**
	 * 返回string格式
	 * @param name  request.getParameter(name)
	 * @return
	 * @throws Exception
	 */
	public String getString(String name) throws Exception {
		String str = request.getParameter(name);
		if (str != null && !"".equals(str.trim())) {
			return str.trim();
		} else {
			return null;
		}
	}
	
	/**
	 * 查询关联订单信息
	 * @param ordersId
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/queryRelateOrderList")
	@ResponseBody
	public Map<String, Object> queryRelateOrderList(String ordersId) throws Exception{
		if(StringUtils.isBlank(ordersId)){//订单id为空
			throw new ControllerException(ExpCodeConstant.PARAMTER_ILLEGAL, "非法参数--订单id为空");
		}
		
		//数据库操作
		List<OrdersVo> orderList = ordersService.queryRelateOrderById(Long.parseLong(ordersId));
		//封装结果参数
		Map<String,Object> data = new HashMap<String, Object>();
		data.put("data", orderList);
		//返回结果
		return this.getResultMap(true, data);
	}
	
	/**
	 * 加载批量重发订单页面
	 * @param ids
	 * @return
	 * @throws ServiceException
	 */
	@RequestMapping("/loadOrderBatchRetryPage")
	public String loadOrderBatchRetryPage(String ids) throws Exception{
		if(StringUtils.isBlank(ids)){//订单id为空
			throw new ControllerException(ExpCodeConstant.PARAMTER_ILLEGAL, "非法参数--订单id为空");
		}
		//获取订单信息
		List<TErpOrders> orderList = ordersService.queryOrdersByIds(ids);
		//获取物流渠道
		List<Map<String,Object>> logistList = logisticsCompanyService.queryAuthLogistics();
		request.setAttribute("orderList", orderList);
		request.setAttribute("logistList", logistList);
		return ORDER_BATCH_RETRY;
	}
	
	/**
	 * 批量重发订单
	 * @param ordersId
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	@RequestMapping("/batchRetryOrder")
	@ResponseBody
	public Map<String,Object> batchRetryOrder() throws Exception{
		//接收参数
		Map map = request.getParameterMap();
		Set set = map.keySet();
		Map<String,String> params = new HashMap<String,String>();
		for (Iterator i = set.iterator(); i.hasNext();) {
			String key = (String) i.next();
			String[] values = (String[]) map.get(key);
			String valueStr = "";
			for (int j = 0; j < values.length; j++) {
				valueStr = (j == values.length - 1) ? valueStr + values[j]
						: valueStr + values[j] + ",";
			}
			params.put(key, valueStr);
		}
		
		//获取订单参数
		String orderIds = params.get("orderId");
		if(StringUtils.isBlank(orderIds)){//订单id为空
			throw new ControllerException(ExpCodeConstant.PARAMTER_ILLEGAL, "非法参数--订单id为空");
		}
		//数据库操作
		List<Map<String, Object>> errorList = ordersService.batchRetryOrder(params);
		return this.getResultMap(errorList);
	}
	
	/**
	 * 查询订单自动填充运单号列表
	 * @param ids
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/queryOrderTradeNumList")
	@ResponseBody
	public Map<String, Object> queryOrderTradeNumList(String ids) throws Exception{
		//数据库操作
		List<OrderTnumberVo> orderList = ordersService.queryOrderTradeNumList(ids);
		//封装参数
		Map<String, Object> data = new HashMap<String, Object>();
		data.put("data", orderList);
		return this.getResultMap(data);
	}
	
	/**
	 * 加载自动填充运单号页面
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/loadOrderTradePage")
	public String loadOrderTradePage(String ids) throws Exception{
		if(StringUtils.isBlank(ids)){//订单id为空
			throw new ControllerException(ExpCodeConstant.PARAMTER_ILLEGAL, "非法参数--订单id为空");
		}
		//传递参数
		request.setAttribute("ids", ids);
		return ORDER_TRADE;
	}
	
	/**
	 * 批量自动填充运单号
	 * @param ids
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/batchAutomaticallyFillTrackNumber")
	@ResponseBody
	public Map<String, Object> batchAutomaticallyFillTrackNumber(String ids) throws Exception{
		if(StringUtils.isBlank(ids)){//订单id为空
			throw new ControllerException(ExpCodeConstant.PARAMTER_ILLEGAL, "非法参数--订单id为空");
		}
		
		//数据库操作
		List<Map<String,Object>> result = ordersService.batchAutomaticallyFillTrackNumber(ids);
		return this.getResultMap(true, result);
	}
	
	/**
	 * 订单打印
	 * @param platformOrderIds
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/printOrder")
	@ResponseBody
	public Map<String, Object> printOrder(String platformOrderIds) throws Exception{
		if(StringUtils.isBlank(platformOrderIds)){//订单编号为空
			throw new ControllerException(ExpCodeConstant.PARAMTER_ILLEGAL, "非法参数--订单编号为空");
		}
		
		//数据库操作
		List<Map<String, Object>> errorList = ordersService.printOrder(platformOrderIds);
		return this.getResultMap(true,errorList);
	}
	
	/**
	 * 包装验货
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/packInspect")
	@ResponseBody
	public Map<String, Object> packInspect(TErpOrders order) throws Exception{
		//获取当前登录用户信息
		UserCacheBean userCacheBean = CurrentUtil.getCurrentUser();
		//获取企业信息
		long enterpriseId = userCacheBean.getEnterpriseId();
		//订单信息为空
		if(order == null){
			throw new ControllerException(OrderExpCodeConstant.ORDER_INFO_NULL, "订单信息为空！");
		}
		
		//订单Id为空
		if(order.getOrdersId() == null){
			throw new ControllerException(ExpCodeConstant.PARAMTER_ILLEGAL, "非法参数---订单id为空！");
		}
		
		//返回结果
		boolean result = false;
		//数据库操作
		result = ordersService.updateOrder(order) > 0 ? true : false;
		if(result){
			ordersService.addOrderLog(order.getOrdersId(), "修改订单基础信息", OrderLogConstant.UPDATE_ORDER, "包装验货",enterpriseId);
		}
		return this.getResultMap(result);
	}
	
	/**
	 * 验证打印的订单编号是否正确
	 *  @param platformOrderIds
	 *  @return
	 *  @throws Exception
	 *  @author        liujiping
	 *  @Date          2016年4月29日
	 */
	@RequestMapping("/printOrderNames")
	@ResponseBody
	public Map<String, Object> printOrderNames(String platformOrderIds) throws Exception{
		if(StringUtils.isBlank(platformOrderIds)){//订单编号为空
			throw new ControllerException(ExpCodeConstant.PARAMTER_ILLEGAL, "非法参数--订单编号为空");
		}
		
		//数据库操作
		Map<String, Object> data = ordersService.printOrderNames(platformOrderIds);
		return this.getResultMap(true,data);
	}
	
	@RequestMapping(value = "/printOrders")
	public String printOrders(String printOrdersIds, String printTemps) throws Exception{
		//获得打印数据
		List<OrderPrintVo> list = ordersService.queryOrderPrintVoListByIds(printOrdersIds);
		//开始组装打印对象
		List<PrintVo<OrderPrintVo>> printList = new ArrayList<PrintVo<OrderPrintVo>>(0);
		String[] pts = printTemps.split(",");
		//自助选择打印单
		for (OrderPrintVo vo : list) {
			PrintVo<OrderPrintVo> p = new PrintVo<OrderPrintVo>();
			p.setObj(vo);
			p.setPrintNum(1);
			printList.add(p);
		}
		
		String html = "";
		for(String pt:pts){
			html += printService.getPrintContent(Long.valueOf(pt), printList);
		}
		request.setAttribute("content", html);
		return PrintConstant.PRINT_MAIN;
	}
	
	@RequestMapping(value = "/printOrdersInvoice")
	public String printOrdersInvoice(String printOrdersIds, String printTemps,BigDecimal GDdeclareFeeOrigin) throws Exception{
		//获得打印数据
		List<OrderPrintVo> list = ordersService.queryOrderPrintVoListByIds(printOrdersIds);
		//开始组装打印对象
		List<PrintVo<OrderPrintVo>> printList = new ArrayList<PrintVo<OrderPrintVo>>(0);
		String[] pts = printTemps.split(",");
		//自助选择打印单
		for (OrderPrintVo vo : list) {
			PrintVo<OrderPrintVo> p = new PrintVo<OrderPrintVo>();
			if(GDdeclareFeeOrigin != null){
				vo.setOriginalMoney(GDdeclareFeeOrigin);
			}
			p.setObj(vo);
			p.setPrintNum(1);
			printList.add(p);
		}
		
		String html = "";
		for(String pt:pts){
			html += printService.getPrintContent(Long.valueOf(pt), printList);
		}
		request.setAttribute("content", html);
		return PrintConstant.PRINT_MAIN;
	}
	

	@RequestMapping(value = "/printOrdersLogistics")
	public String printOrdersLogistics(String printOrdersIds) throws Exception{
		//获得打印数据
		List<OrderPrintVo> list = ordersService.queryOrderPrintVoListByIds(printOrdersIds);

		String html = "";
		//自助选择打印单
		for (OrderPrintVo vo : list) {
			//开始组装打印对象
			List<PrintVo<OrderPrintVo>> printList = new ArrayList<PrintVo<OrderPrintVo>>(0);
			PrintVo<OrderPrintVo> p = new PrintVo<OrderPrintVo>();
			p.setObj(vo);
			p.setPrintNum(1);
			printList.add(p);
			if(vo.getAddressTempId() != null && vo.getAddressTempId() != 0){
				html += printService.getPrintContent(vo.getAddressTempId(), printList);
			}
			if(vo.getDeclarationTempId() != null && vo.getDeclarationTempId() != 0){
				html += printService.getPrintContent(vo.getDeclarationTempId(), printList);
			}
			if(vo.getAllocationTempId() != null && vo.getAllocationTempId() != 0){
				html += printService.getPrintContent(vo.getAllocationTempId(), printList);
			}
		}
		request.setAttribute("content", html);
		return PrintConstant.PRINT_MAIN;
	}
	
	/**
	 * 导出订单列表
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	@RequestMapping(value = "/exportOrderList")
	public Map<String, Object> exportOrderList(JqParamBean jqParamBean) throws Exception{
		String search = this.getString("search");
		//接收参数
		Map map = request.getParameterMap();
		Set set = map.keySet();
		Map<String,String> params = new HashMap<String,String>();
		for (Iterator i = set.iterator(); i.hasNext();) {
			String key = (String) i.next();
			String[] values = (String[]) map.get(key);
			String valueStr = "";
			for (int j = 0; j < values.length; j++) {
				if(!"all".equals(values[j])){
					valueStr = (j == values.length - 1) ? valueStr + values[j]
							: valueStr + values[j] + ",";
				}
			}
			params.put(key, valueStr);
		}
		ObjectMapper objectMapper = new ObjectMapper();
		OrderParamVo orderVo = new OrderParamVo();
		if(StringUtils.isNotBlank(search)){
			orderVo = objectMapper.readValue(search,OrderParamVo.class);
		}
		jqParamBean.setSearch(orderVo);
		//数据库操作
		Pagination<OrderExportVo> orderList = ordersService.queryOrderExportList(jqParamBean);
		List<ExcelField> fs = new ArrayList<ExcelField>();
		String fieldlabel = params.get("fieldlabel");
		if(StringUtils.isNotBlank(fieldlabel)){
			for(String label : fieldlabel.split(",")){
				fs.add(new ExcelField(params.get("map-name-"+label),label));
			}
		}
		//生成导出文件名
		String fileName = "";
		fileName = fileName + System.currentTimeMillis();
		
		//导出文件
		ExportExcel.exportExcel(fileName,fs, orderList.getData());
		return null;
	}
	
	/**
	 * 统计订单总数
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/queryOrderCount")
	@ResponseBody
	public Map<String, Object> queryOrderCount() throws Exception{
		//数据库操作
		List<Map<String, Object>> result = ordersService.queryOrderCount();
		return this.getResultMap(result);
	}
	
	/**
	 * 根据SKU查询商品
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/queryGoodsInfoBySku")
	@ResponseBody
	public Map<String, Object> queryGoodsInfoBySku(String sku) throws Exception {
		Map<String, Object> data = new HashMap<String, Object>();
		//数据库操作
		TErpGoods goods = goodsService.queryGoodsInfoBySku(sku);
		data.put("goods", goods);
		data.put("childId", Public.genaratorRamdonString());
		return this.getResultMap(data.isEmpty() ? false:true, data);
	}
	
	/**
	 * 新增订单商品物流信息
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/addOrdersGoodsLogistisInfo")
	@ResponseBody
	public Map<String, Object> addOrdersGoodsLogistisInfo(@RequestBody OrdersItemChild itemChild) throws Exception{
		TErpOrders ordersItem = itemChild.getOrdersItem();
		if(ordersItem == null){
			throw new ControllerException(ExpCodeConstant.PARAMTER_ILLEGAL, "非法参数---订单ordersItem为空！");
		}
		//数据库操作
		int result = ordersService.addOrdersGoodsLogistisInfo(itemChild);
		return this.getResultMap(result > 0 ? true : false);
	}
	
	/**
	 * 根据订单编号查询订单id
	 * @param names
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/queryOrderIdsByName")
	@ResponseBody
	public Map<String, Object> queryOrderIdsByName(String names) throws Exception{
		if(StringUtils.isBlank(names)){//订单编号为空
			throw new ControllerException(OrderExpCodeConstant.ORDER_NAME_NULL, "订单编号为空！");
		}
		//数据库操作
		Map<String, Object> result = ordersService.queryOrderIdsByName(names);
		return this.getResultMap(result);
	}
}