/**
 * 
 */
package com.samton.erp.api.orders.service.impl;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.locks.ReentrantLock;

import javax.annotation.Resource;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.samton.erp.api.goods.bean.entity.TErpGoods;
import com.samton.erp.api.goods.bean.entity.TErpGoodsStorage;
import com.samton.erp.api.goods.bean.vo.GoodsVo;
import com.samton.erp.api.goods.dao.TErpGoodsMapper;
import com.samton.erp.api.goods.service.IGoodsService;
import com.samton.erp.api.goods.service.IGoodsStorageService;
import com.samton.erp.api.logistics.bean.entity.TErpLogisticsTrackingnumber;
import com.samton.erp.api.logistics.dao.TErpLogisticsTrackingnumberMapper;
import com.samton.erp.api.orders.bean.entity.TErpOrders;
import com.samton.erp.api.orders.bean.entity.TErpOrdersDetail;
import com.samton.erp.api.orders.bean.entity.TErpOrdersLog;
import com.samton.erp.api.orders.bean.entity.vo.OrderExportVo;
import com.samton.erp.api.orders.bean.entity.vo.OrderGoodsVo;
import com.samton.erp.api.orders.bean.entity.vo.OrderItemVo;
import com.samton.erp.api.orders.bean.entity.vo.OrderPrintVo;
import com.samton.erp.api.orders.bean.entity.vo.OrderTnumberVo;
import com.samton.erp.api.orders.bean.entity.vo.OrdersItemChild;
import com.samton.erp.api.orders.bean.entity.vo.OrdersVo;
import com.samton.erp.api.orders.cache.GoodsLockCache;
import com.samton.erp.api.orders.constant.OrderExpCodeConstant;
import com.samton.erp.api.orders.constant.OrderLogConstant;
import com.samton.erp.api.orders.constant.OrderStateConstant;
import com.samton.erp.api.orders.dao.OrderGoodsVoMapper;
import com.samton.erp.api.orders.dao.TErpOrdersDetailMapper;
import com.samton.erp.api.orders.dao.TErpOrdersLogMapper;
import com.samton.erp.api.orders.dao.TErpOrdersMapper;
import com.samton.erp.api.orders.service.IOrdersService;
import com.samton.erp.api.orders.util.MyBeanUtils;
import com.samton.erp.api.packing.dao.TErpGoodsPackingMapper;
import com.samton.erp.api.rate.bean.entity.TErpSysEnterpriseRate;
import com.samton.erp.api.rate.bean.entity.TErpSysRate;
import com.samton.erp.api.rate.dao.TErpSysRateMapper;
import com.samton.erp.api.shop.dao.TErpShopMapper;
import com.samton.erp.api.sys.bean.entity.TErpSysDictValue;
import com.samton.erp.api.sys.dao.TErpSysDictValueMapper;
import com.samton.erp.common.util.Public;
import com.samton.platform.common.bean.param.JqParamBean;
import com.samton.platform.core.constant.StateConstant;
import com.samton.platform.framework.bean.UserCacheBean;
import com.samton.platform.framework.exception.ServiceException;
import com.samton.platform.framework.exception.constant.ExpCodeConstant;
import com.samton.platform.framework.mybatis.pagination.PageContext;
import com.samton.platform.framework.mybatis.pagination.Pagination;
import com.samton.platform.framework.util.CurrentUtil;

/**
 *
 * @Description:订单管理Service实现类
 * @author:     lijianzhou
 * @date:       2016年3月26日
 * Copyright (c) 2015, Samton. All rights reserved
 */
@Service("ordersService")
public class OrdersServiceImpl implements IOrdersService {

	@Resource
	private TErpOrdersMapper ordersMapper;
	
	@Resource
	private TErpShopMapper shopMapper;
	
	@Resource
	private TErpGoodsPackingMapper packingMapper;
	
	@Resource
	private TErpGoodsMapper goodsMapper;
	
	@Resource
	private TErpOrdersDetailMapper ordersDetailMapper;
	
	@Resource
	private TErpOrdersLogMapper ordersLogMapper;
	
	@Resource
	private OrderGoodsVoMapper orderGoodsVoMapper;
	
	@Resource
	private IGoodsService goodsService;
	
	@Resource
	private IGoodsStorageService goodsStorageService;
	
	@Resource
	private TErpLogisticsTrackingnumberMapper logisticsTrackingnumberMapper;
	
	@Resource
	private TErpSysDictValueMapper sysDictValueMapper;
	
	@Resource
	private TErpSysRateMapper sysRateMapper;
	
	//锁缓存
	@Autowired
	private GoodsLockCache goodsLockCache;
	public void setGoodsLockCache(GoodsLockCache goodsLockCache) {
		this.goodsLockCache = goodsLockCache;
	}

	/**
	 * 新增订单信息
	 */
	@Override
	public int addOrder(TErpOrders order) throws ServiceException {
		//留言是否已处理
		order.setMessageState(OrderStateConstant.ORDER_MSG_NO_DEAL);
		//打印状态
		order.setIsPrint(OrderStateConstant.ORDER_NO_PRINT);
		//订单状态
		order.setState(StateConstant.ADD);
		//未验货
		order.setIsChecked(OrderStateConstant.ORDER_NO_CHECK);
		order.setIsOutstorage((short)0);
		CurrentUtil.setBaseBeanByInsert(order);
		
		//重发订单时不判断
		if(order.getIsRetry() == null || order.getIsRetry() == 0){
			//查询订单编号是否存在
			int codeCount = ordersMapper.queryOrderCodeIsExists(order);
			if(codeCount > 0){
				if(order.getOrderType() == 1){
					throw new ServiceException(OrderExpCodeConstant.ORDER_NAME_EXISTS, "订单编号已存在");
				}else{
					return 0;
				}
			}
			
			//查询交易号是否存在
			int dealNumCount = ordersMapper.queryOrderDealNumIsExists(order);
			if(dealNumCount > 0){
				if(order.getOrderType() == 1){
					throw new ServiceException(OrderExpCodeConstant.ORDER_DEALNUM_EXISTS, "交易号已存在");
				}else{
					return 0;
				}
			}
			
			//国家不为空
			if(StringUtils.isNotBlank(order.getCountry())){
				//查询 输入是否正确
				TErpSysDictValue dictValue = sysDictValueMapper.querySysDictValueByCountry(order.getCountry());
				if(dictValue == null){
					throw new ServiceException(OrderExpCodeConstant.COUNTRY_NOT_EXISTS, "国家不存在");
				}else{
					order.setCountryShort(dictValue.getDictValue());
					order.setCountryCn(dictValue.getDictName());
				}
			}
		}
		//数据库操作
		int result = ordersMapper.insertSelective(order);
		return result;
	}

	/**
	 * 新增订单商品信息
	 */
	@Override
	public int updateOrder(TErpOrders order) throws ServiceException {
		//返回结果参数
		int result = 0;
		CurrentUtil.setBaseBeanByModify(order);
		//修改订单信息
		result = ordersMapper.updateByPrimaryKeySelective(order);
		return result;
	}

	/**
	 * 新增订单商品清单
	 * @param orderItem
	 * @return
	 * @throws ServiceException
	 */
	@Override
	public int addOrdersItem(OrderItemVo orderItem) throws ServiceException {
		//返回结果参数
		int result = 0;
		//获取当前登录用户信息
		UserCacheBean userCacheBean = CurrentUtil.getCurrentUser();
		//获取企业信息
		long enterpriseId = userCacheBean.getEnterpriseId();
		orderItem.setEnterpriseId(enterpriseId);
		orderItem.setState(StateConstant.ADD);
		CurrentUtil.setBaseBeanByInsert(orderItem);
		//数据库操作
		result = ordersDetailMapper.insertSelective(orderItem);
		return result;
	}

	/**
	 * 获取订单列表
	 * @param jqParamBean
	 * @return
	 */
	@Override
	public Pagination<Map<String, Object>> queryOrdersList(JqParamBean jqParamBean) throws Exception {
		//封装分页参数
		Pagination<Map<String, Object>> pagination = PageContext.initialize(jqParamBean.getPage(), jqParamBean.getRows());
		//数据库操作
		List<Map<String, Object>> orderList = ordersMapper.queryOrdersList(jqParamBean,pagination.getRowBounds());
		//返回数据
		pagination.setData(orderList);
		return pagination;
	}

	/**
	 * 根据订单状态查询订单数量
	 * @param enterpriseId
	 * @param orderState
	 * @return
	 * @throws ServiceException
	 */
	@Override
	public Long queryOrderCountByState(short orderState) throws ServiceException {
		//获取当前登录用户信息
		UserCacheBean userCacheBean = CurrentUtil.getCurrentUser();
		//获取企业信息
		long enterpriseId = userCacheBean.getEnterpriseId();
		return ordersMapper.queryOrderCountByState(enterpriseId, orderState);
	}

	/**
	 * 新增订单日志
	 */
	@Override
	public int addOrderLog(long ordersId, String operationType, short logType,String content,long enterpriseId) throws ServiceException {
		//获取当前登录用户信息
		UserCacheBean userCacheBean = CurrentUtil.getCurrentUser();
		//创建对象
		TErpOrdersLog ordersLog = new TErpOrdersLog();
		//订单ID
		ordersLog.setOrdersId(ordersId);
		//日志内容
		ordersLog.setContent(content);
		//日志类型
		ordersLog.setLogType(logType);
		//操作属性
		ordersLog.setOperationType(operationType);
		//企业ID
		ordersLog.setEnterpriseId(enterpriseId);
		//创建用户ID
		ordersLog.setCreateUserId(userCacheBean != null ? userCacheBean.getUserId() : 1);
		//创建用户名
		ordersLog.setCreateUserName(userCacheBean != null ? userCacheBean.getUserName() : "admin@samton.net");
		//创建时间
		ordersLog.setCreateDate(new Date());
		return ordersLogMapper.insertSelective(ordersLog);
	}

	/**
	 * 根据订单id查询订单信息
	 * @param ordersId
	 * @return
	 * @throws ServiceException
	 */
	@Override
	public TErpOrders queryOrdersInfoById(long ordersId) throws ServiceException {
		return ordersMapper.selectByPrimaryKey(ordersId);
	}

	/**
	 * 批量处理订单状态
	 * @param orderState
	 * @param ids
	 * @return
	 * @throws ServiceException
	 */
	@Override
	public boolean batchDealOrderState(short orderState, String ids) throws ServiceException {
		boolean result = false;
		List<Long> idList = new ArrayList<Long>();
		if(ids==null || "".equals(ids)){
			return result;
		}
		
		for(String id : ids.split(",")){
			idList.add(Long.parseLong(id));
		}
		
		//数据库操作
		result = ordersMapper.batchDealOrderState(orderState, idList) > 0 ? true : false;
		
		//标志为已发货
		if(orderState == 3){
			for(String id : ids.split(",")){
				List<OrderGoodsVo> goodsList = findOrderGoods(Long.parseLong(id));
				if(goodsList.isEmpty()) throw new ServiceException(OrderExpCodeConstant.ORDER_NO_GOODS);
				//发货
				deliverGoods(goodsList);
			}
		}else if(4 == orderState){//标记为已作废
			batchUpdateOrderItemState((short)0, ids);
		}else if(1 == orderState){//激活订单
			batchUpdateOrderItemState((short)1, ids);
		}
		return result;
	}

	/**
	 * 查询订单日志分页列表信息
	 * @param jqParamBean
	 * @return
	 * @throws ServiceException
	 */
	@Override
	public Pagination<TErpOrdersLog> queryOrdersLogList(JqParamBean jqParamBean) throws ServiceException {
		//封装分页参数
		Pagination<TErpOrdersLog> pagination = PageContext.initialize(jqParamBean.getPage(), jqParamBean.getRows());
		//数据库操作
		List<TErpOrdersLog> orderLogList = ordersLogMapper.queryOrdersLogList(jqParamBean,pagination.getRowBounds());
		//返回数据
		pagination.setData(orderLogList);
		return pagination;
	}

	/**
	 * 查询商品是否已存在订单中
	 * @param record
	 * @return
	 * @throws ServiceException
	 */
	@Override
	public boolean queryGoodsIsExists(OrderItemVo record) throws ServiceException {
		//获取当前登录用户信息
		UserCacheBean userCacheBean = CurrentUtil.getCurrentUser();
		//获取企业信息
		long enterpriseId = userCacheBean.getEnterpriseId();
		record.setEnterpriseId(enterpriseId);
		//数据库操作
		int count = ordersDetailMapper.queryGoodsIsExists(record);
		return count > 0 ? true : false;
	}

	/**
	 * 获取订单明细列表
	 * @param orderId
	 * @return
	 * @throws ServiceException
	 */
	@Override
	public List<Map<String, Object>> queryOrdersDetailList(long orderId) throws ServiceException {
		//获取当前登录用户信息
		UserCacheBean userCacheBean = CurrentUtil.getCurrentUser();
		//获取企业信息
		long enterpriseId = userCacheBean.getEnterpriseId();
		return ordersDetailMapper.queryOrdersDetailList(orderId, enterpriseId);
	}

	/**
	 * 配货订单打印列表
	 * @param ids
	 * @return
	 * @throws ServiceException
	 */
	@Override
	public List<Map<String, Object>> queryDistributionPrintSetPreviewList(String ids) throws ServiceException {
		List<Long> idList = new ArrayList<Long>();
		if(ids==null || "".equals(ids)){
			return null;
		}
		
		for(String id : ids.split(",")){
			idList.add(Long.parseLong(id));
		}
		return ordersMapper.queryDistributionPrintSetPreviewList(idList);
	}

	
	/**
	 * 拣货清单打印列表
	 * @param ids
	 * @return
	 * @throws ServiceException
	 */
	@Override
	public List<Map<String, Object>> queryPrintSetPreviewList(String ids) throws ServiceException {
		List<Long> idList = new ArrayList<Long>();
		if(ids==null || "".equals(ids)){
			return null;
		}
		
		for(String id : ids.split(",")){
			idList.add(Long.parseLong(id));
		}
		return ordersMapper.queryPrintSetPreviewList(idList);
	}

	/**
	 * 修改订单商品清单
	 * @param orderItem
	 * @return
	 * @throws ServiceException
	 */
	@Override
	public int updateOrdersItem(OrderItemVo orderItem) throws ServiceException {
		CurrentUtil.setBaseBeanByModify(orderItem);
		return ordersDetailMapper.updateByPrimaryKey(orderItem);
	}

	/**
	 * 根据订单明细ID查询订单明细详情
	 * @param detailId
	 * @return
	 * @throws ServiceException
	 */
	@Override
	public TErpOrdersDetail queryOrdersItemById(Long detailId) throws ServiceException {
		return ordersDetailMapper.selectByPrimaryKey(detailId);
	}

	/**
	 * 更改订单商品的状态
	 * @param orderItem
	 * @return
	 * @throws ServiceException
	 */
	@Override
	public int updateOrderItemState(OrderItemVo orderItem) throws ServiceException {
		//查询订单明细ID
		TErpOrdersDetail detail = ordersDetailMapper.selectByPrimaryKey(orderItem.getDetailId());
		if(detail == null){
			throw new ServiceException(ExpCodeConstant.PARAMTER_ILLEGAL);
		}
		
		//获取当前登录用户信息
		UserCacheBean userCacheBean = CurrentUtil.getCurrentUser();
		//获取企业信息
		long enterpriseId = userCacheBean.getEnterpriseId();
		CurrentUtil.setBaseBeanByModify(orderItem);
		//数据库操作
		int result = ordersDetailMapper.updateByPrimaryKeySelective(orderItem);
		//记录日志
		if(result > 0){
			int state = orderItem.getState();
			if(state == 0){
				addOrderLog(detail.getOrderId(), "作废订单商品", OrderLogConstant.UPDATE_PRODUCT, "作废库存SKU为【"+orderItem.getSku()+"】商品",enterpriseId);
			}else{
				addOrderLog(detail.getOrderId(), "还原订单商品", OrderLogConstant.UPDATE_PRODUCT, "还原库存SKU为【"+orderItem.getSku()+"】商品",enterpriseId);
			}
		}
		return result;
	}

	/**
	 * 根据订单编号或货运单号查询订单信息
	 * @param ordersCode
	 * @return
	 * @throws ServiceException
	 */
	@Override
	public TErpOrders queryOrdersInfoByCode(String ordersCode) throws ServiceException {
		//获取当前登录用户信息
		UserCacheBean userCacheBean = CurrentUtil.getCurrentUser();
		//获取企业信息
		long enterpriseId = userCacheBean.getEnterpriseId();
		//数据库操作
		return ordersMapper.queryOrdersInfoByCode(ordersCode, enterpriseId);
	}

	/**
	 * 查询订单商品
	 * @param orderId
	 * @return
	 * @throws ServiceException
	 */
	@Override
	public List<OrderGoodsVo> findOrderGoods(long orderId) throws ServiceException {
		//获取当前登录用户信息
		UserCacheBean userCacheBean = CurrentUtil.getCurrentUser();
		//获取企业信息
		long enterpriseId = userCacheBean.getEnterpriseId();
		//数据库操作
		return orderGoodsVoMapper.findOrderGoods(orderId, enterpriseId);
	}

	/**
	 * 根据订单编号查询订单信息
	 * @param ordersCode
	 * @return
	 * @throws ServiceException
	 */
	@Override
	public TErpOrders queryOrderInfoByName(String ordersCode,String trackNumber,String tradeCode) throws ServiceException{
		//获取当前登录用户信息
		UserCacheBean userCacheBean = CurrentUtil.getCurrentUser();
		//获取企业信息
		long enterpriseId = userCacheBean.getEnterpriseId();
		//数据库操作
		return ordersMapper.queryOrderInfoByName(ordersCode, trackNumber, tradeCode, enterpriseId);
	}

	/**
     * 根据订单Id更改订单明细状态
     * @param record
     * @return
     * @throws ServiceException
     */
	@Override
	public int updateOrderItemStateByOrderId(TErpOrdersDetail record) throws ServiceException {
		CurrentUtil.setBaseBeanByModify(record);
		return ordersDetailMapper.updateOrderItemStateByOrderId(record);
	}

	/**
     * 批量更新状态
     * @param state
     * @param ids
     * @return
     * @throws ServiceException
     */
	@Override
	public boolean batchUpdateOrderItemState(short state, String ids) throws ServiceException {
		boolean result = false;
		List<Long> idList = new ArrayList<Long>();
		if(ids==null || "".equals(ids)){
			return result;
		}
		
		for(String id : ids.split(",")){
			idList.add(Long.parseLong(id));
		}
		
		//数据库操作
		result = ordersDetailMapper.batchUpdateOrderItemState(state, idList) > 0 ? true : false;
 		return result;
	}

	 /**
     * 查询所有的订单
     * @param ordersId
     * @return
     * @throws Exception
     */
	@Override
	public List<TErpOrders> queryAllSubOrderByTopId(long topOrdersId) throws ServiceException {
		//获取当前登录用户信息
		UserCacheBean userCacheBean = CurrentUtil.getCurrentUser();
		//获取企业信息
		long enterpriseId = userCacheBean.getEnterpriseId();
		return ordersMapper.queryAllSubOrderByTopId(topOrdersId, enterpriseId);
	}

	 /**
     * 查询关联订单信息
     * @param ordersId
     * @return
     * @throws ServiceException
     */
	@Override
	public List<OrdersVo> queryRelateOrderById(long ordersId) throws ServiceException {
		//获取当前登录用户信息
		UserCacheBean userCacheBean = CurrentUtil.getCurrentUser();
		//获取企业信息
		long enterpriseId = userCacheBean.getEnterpriseId();
		return ordersMapper.queryRelateOrderById(ordersId, enterpriseId);
	}

	 /**
     * 根据订单id查询订单信息
     * @param idList
     * @return
     */
	@Override
	public List<TErpOrders> queryOrdersByIds(String ids) throws ServiceException {
		List<Long> idList = new ArrayList<Long>();
		if(ids==null || "".equals(ids)){
			return null;
		}
		
		for(String id : ids.split(",")){
			idList.add(Long.parseLong(id));
		}
		return ordersMapper.queryOrdersByIds(idList);
	}

	 /**
     * 批量重发订单
     * @param params
     * @return
     * @throws ServiceException
     */
	@Override
	public List<Map<String, Object>> batchRetryOrder(Map<String, String> params) throws ServiceException {
		//获取当前登录用户信息
		UserCacheBean userCacheBean = CurrentUtil.getCurrentUser();
		//获取企业信息
		long enterpriseId = userCacheBean.getEnterpriseId();
		
		//存放错误列表信息
		List<Map<String, Object>> errorList = new ArrayList<Map<String, Object>>();
		//获取订单参数
		String orderIds = params.get("orderId");
		//分割字符串
		String[] ordersIdStr = orderIds.split(",");
		for (int i = 0; i < ordersIdStr.length; i++) {
			String tempOrdersId = ordersIdStr[i];
			String orderName = params.get("platformOrderIds_"+tempOrdersId);
			Map<String,Object> tempMap = new HashMap<String, Object>();
			//根据订单id查询订单信息
			TErpOrders ordersInfo = queryOrdersInfoById(Long.parseLong(tempOrdersId));
			if(ordersInfo == null){
				tempMap.put(orderName, "该条订单不存在：【"+tempOrdersId+"】");
				//存放错误信息
				errorList.add(tempMap);
			}else{
				//根据订单ID查询商品信息
				List<OrderGoodsVo> goodsList = findOrderGoods(Long.parseLong(tempOrdersId));
				if(goodsList.isEmpty()){
					tempMap.put(orderName, "该条订单无商品：【"+tempOrdersId+"】");
					//存放错误信息
					errorList.add(tempMap);
				}
			}
		}
		//数据都正确
		if(errorList.isEmpty()){
			for (int i = 0; i < ordersIdStr.length; i++) {
				String tempOrdersId = ordersIdStr[i];
				String remark = params.get("remark");
				String logisticsId = params.get("myLogisticsChannel_"+tempOrdersId);
				String trackNumber = params.get("tracknumber_"+tempOrdersId);
				String exceptionReason = params.get("exceptionReasonId_"+tempOrdersId);
				//根据订单id查询订单信息
				TErpOrders orders = queryOrdersInfoById(Long.parseLong(tempOrdersId));
				//创建订单对象
				TErpOrders erpOrder = new TErpOrders();
				erpOrder.setLogisticsId(StringUtils.isNotBlank(logisticsId) ? Long.parseLong(logisticsId) : null);
				erpOrder.setPackingId(orders.getPackingId());
				erpOrder.setBills(trackNumber);
				erpOrder.setRemark(StringUtils.isNotBlank(remark) ? remark : "重发订单");
				erpOrder.setRetryContent(exceptionReason);
				erpOrder.setParentOrderId(Long.parseLong(tempOrdersId));
				//设置一级订单
				erpOrder.setTopOrderId(orders.getTopOrderId());
				erpOrder.setIsRetry((short)1);
				//获取该id下所有的订单信息
				List<TErpOrders> ordersList = queryAllSubOrderByTopId(orders.getTopOrderId());
				//生成订单编号
				String parentName = orders.getName();
				if(parentName.lastIndexOf("_") > 0){
					parentName = (String) parentName.subSequence(0, parentName.lastIndexOf("_"));
				}
				parentName = parentName + "_" + ordersList.size();
				erpOrder.setName(parentName);
				erpOrder.setDealNum(orders.getDealNum());
				erpOrder.setOrdersDate(orders.getOrdersDate());
				erpOrder.setPayTime(orders.getPayTime());
				erpOrder.setShopId(orders.getShopId());
				erpOrder.setCurrency(orders.getCurrency());
				//复制属性值
				try {
					MyBeanUtils.copyPropertiesInclude(erpOrder, orders, "gatheringAccount","customerId","customerName","phone1","phone2","email","country","countryShort","countryCn","province","postalCode","address","spareAddress","city","custLogistics");
				} catch (Exception e) {
				}
				//手工订单
				erpOrder.setOrderType(OrderStateConstant.ORDER_TYPE_HAND);
				erpOrder.setCost(new BigDecimal("0.000"));
				erpOrder.setCustomsCode(new BigDecimal("0.000"));
				erpOrder.setInsurance(new BigDecimal("0.000"));
				erpOrder.setRefundMoney(new BigDecimal("0.000"));
				erpOrder.setTransferMoney(new BigDecimal("0.000"));
				erpOrder.setAntcipatedFreight(new BigDecimal("0.000"));
				String sendFlag = params.get("markSend_"+tempOrdersId);
				if("1".equals(sendFlag)){//同时标记为已发货
					erpOrder.setOrderState(OrderStateConstant.ORDER_ALREADY_SHIP);
					erpOrder.setDeliverTime(new Date());
				}else{
					erpOrder.setOrderState(OrderStateConstant.ORDER_ON_DEAL);
				}
				erpOrder.setEnterpriseId(enterpriseId);
				int result = addOrder(erpOrder);
				if(result > 0){//新增成功
					//总金额
					BigDecimal totalMoney = new BigDecimal(0);
					//总重量
					BigDecimal totalWeight = new BigDecimal(0);
					//获取订单id
					Long retryOrderId = erpOrder.getOrdersId();
					String orderSplitData = params.get("detailIds_"+tempOrdersId);
					if(StringUtils.isNotBlank(orderSplitData)){
						String[] tempArr = orderSplitData.split(",");
						if(tempArr.length > 0){
							for (int k = 0; k < tempArr.length; k++) {
								String detailId = tempArr[k].trim();
								if(StringUtils.isNotBlank(detailId)){
									String newNumber = params.get("quantity_"+detailId);
									//订单明细
									TErpOrdersDetail oldItem = queryOrdersItemById(Long.parseLong(detailId));
									OrderItemVo newItem = new OrderItemVo();
									newItem.setOrderId(retryOrderId);
									newItem.setCount(Integer.parseInt(newNumber));
									//复制对象属性
									try {
										MyBeanUtils.copyPropertiesInclude(newItem, oldItem, "goodsId","orderNum","price","customsCode","spaceId","goodsInfo","weight");
									} catch (Exception e) {
									}
									if(newItem.getSpaceId() == null){
										if(newItem.getCustomsCode() != null){
											//商品库存信息
											TErpGoodsStorage goodsStorage = goodsStorageService.queryGoodsStorageBywhouseId(newItem.getGoodsId(), newItem.getCustomsCode());
											if(goodsStorage != null){
												newItem.setSpaceId(goodsStorage.getSpaceId());
											}
										}
									}
									//新增订单商品
									int flag = addOrdersItem(newItem);
									if(flag > 0){
										BigDecimal tempMoney = oldItem.getPrice().multiply(new BigDecimal(Integer.parseInt(newNumber)));
										BigDecimal tempWeight = oldItem.getWeight().multiply(new BigDecimal(Integer.parseInt(newNumber)));
										totalMoney = totalMoney.add(tempMoney);
										totalWeight = totalWeight.add(tempWeight);
										if("1".equals(sendFlag)){//同时标记为已发货
											Long goodsId = newItem.getGoodsId();
											ReentrantLock goodsLock = goodsLockCache.get(goodsId);
											if(goodsLock == null){
												throw new ServiceException("商品Id【"+goodsId+"】对应的锁丢失，库存变更失败");
											}
											goodsLock.lock();
											try{
												int orderCount = newItem.getCount();//订单数量
												GoodsVo goodVo = goodsService.getGoodsVoById(goodsId);
												if(goodVo == null){
													throw new ServiceException("商品Id【"+goodsId+"】对应的商品信息丢失，库存变更失败");
												}
												Integer oldCount = goodVo.getInventoryCount() != null ? goodVo.getInventoryCount() : 0;//原库存
												Integer newCount = oldCount - orderCount;//新库存
												TErpGoods goods = new TErpGoods();
												goods.setGoodsId(goodsId);
												goods.setInventoryCount(newCount);
												goods.setDeliverCount(goods.getDeliverCount() + orderCount);
												goodsService.updateGoods(goods); //扣除库存
												
												//存在仓库
												if(newItem.getCustomsCode() != null){
													TErpGoodsStorage goodsStorage = goodsStorageService.queryGoodsStorageBywhouseId(goodsId, newItem.getCustomsCode());
													if(goodsStorage != null){
														Integer oldIncount = goodsStorage.getInventoryCount() != null ? goodsStorage.getInventoryCount() : 0;
														//原库存减去订购数
														Integer newIncount = oldIncount - orderCount;
														goodsStorage.setInventoryCount(newIncount);
														//更改库存数
														goodsStorageService.updateStorage(goodsStorage);
													}
												}
											}finally{
												//释放锁
												goodsLock.unlock();
											}
										}else{
											//获取锁
											ReentrantLock goodsLock = goodsLockCache.get(newItem.getGoodsId());
											if(goodsLock == null){
												throw new ServiceException("商品Id【"+newItem.getGoodsId()+"】对应的锁丢失，库存变更失败");
											}
											
											//加锁
											goodsLock.lock();
											try{
												int orderCount = newItem.getCount();//订单数量
												GoodsVo goodVo = goodsService.getGoodsVoById(newItem.getGoodsId());
												if(goodVo == null){
													throw new ServiceException("商品Id【"+newItem.getGoodsId()+"】对应的商品信息丢失，库存变更失败");
												}
												TErpGoods goods = new TErpGoods();
												goods.setGoodsId(newItem.getGoodsId());
												//修改发货数
												goods.setNotDeliverCount(goodVo.getNotDeliverCount() + orderCount);
												goodsService.updateGoods(goods); //扣除库存
											}finally{
												goodsLock.unlock();//释放锁
											}
										}
									}
								}else{
									throw new ServiceException(ExpCodeConstant.PARAMTER_ILLEGAL);
								}
							}
						}
							
						//更改订单金额和重量
						totalMoney = totalMoney.setScale(3, BigDecimal.ROUND_HALF_UP);
						totalWeight = totalWeight.setScale(3, BigDecimal.ROUND_HALF_UP);
						erpOrder = new TErpOrders();
						erpOrder.setOrdersId(retryOrderId);
						erpOrder.setPayment(totalMoney);
						erpOrder.setWeight(totalWeight);
						//查询费率
						TErpSysEnterpriseRate sysRate = new TErpSysEnterpriseRate();
						sysRate.setRateId(orders.getCurrency());
						sysRate.setEnterpriseId(enterpriseId);
						TErpSysRate rateList = sysRateMapper.selectByRateId(sysRate);
						if(rateList != null){
							BigDecimal rate = rateList.getStandardRate();
							BigDecimal proportion = rateList.getProportion();
							BigDecimal total = rate.multiply(proportion);
							if(erpOrder.getPayment() != null){
								BigDecimal paymentMoney = erpOrder.getPayment().divide(total, 3, BigDecimal.ROUND_HALF_UP);
								erpOrder.setPaymentMoney(paymentMoney);
							}
						}
						
						//计算订单金额（原始货币）
						BigDecimal originalMoney = erpOrder.getPaymentMoney().add(erpOrder.getIncomeFreight() != null ? erpOrder.getIncomeFreight() : new BigDecimal("0.000")).setScale(3, BigDecimal.ROUND_HALF_UP);
						//计算订单金额（￥）
						BigDecimal ordersMoney = erpOrder.getPayment().add(erpOrder.getCustomsCode() != null ? erpOrder.getCustomsCode() : new BigDecimal("0.000")).setScale(3, BigDecimal.ROUND_HALF_UP);
						erpOrder.setOriginalMoney(originalMoney);
						erpOrder.setOrdersMoney(ordersMoney);
						//修改操作
						int state = updateOrder(erpOrder);
						//判断订单是否缺货
						ordersMapper.judgeOrderIsStockout(retryOrderId);
						if(state > 0){
							//记录日志
							addOrderLog(Long.parseLong(tempOrdersId), "重发订单", OrderLogConstant.RETRY_ORDER, "重发出新订单"+parentName,enterpriseId);
							if("1".equals(sendFlag)){//同时标记为已发货
								addOrderLog(retryOrderId, "修改订单基础信息", OrderLogConstant.UPDATE_ORDER, "当前状态[配货中]修改为已发货",enterpriseId);
							}
						}
					}
				}
			}
		}
		return errorList;
	}

	  /**
     * 重发订单
     * @param ordersId
     * @param orderSplitData
     * @param remark
     * @param logisticsId
     * @param trackNumber
     * @param packageId
     * @param shippingCost
     * @param exceptionReason
     * @return
     * @throws ServiceException
     */
	@Override
	public int retryOrder(String ordersId, String orderSplitData,String remark, String logisticsId, String trackNumber,
			String packageId, String shippingCost, String exceptionReason) throws ServiceException {
		//获取订单信息
		TErpOrders orders = ordersMapper.selectByPrimaryKey(Long.parseLong(ordersId));
		if(orders == null){
			throw new ServiceException(OrderExpCodeConstant.ORDER_INFO_NULL);
		}
		//获取当前登录用户信息
		UserCacheBean userCacheBean = CurrentUtil.getCurrentUser();
		//获取企业信息
		long enterpriseId = userCacheBean.getEnterpriseId();
		//创建订单对象
		TErpOrders erpOrder = new TErpOrders();
		erpOrder.setLogisticsId(StringUtils.isNotBlank(logisticsId) ? Long.parseLong(logisticsId) : null);
		erpOrder.setPackingId(StringUtils.isNotBlank(packageId) ? Long.parseLong(packageId) : null);
		erpOrder.setBills(trackNumber);
		erpOrder.setRemark(StringUtils.isNotBlank(remark) ? remark : "重发订单");
		erpOrder.setRetryContent(exceptionReason);
		erpOrder.setActualFreight(StringUtils.isNotBlank(shippingCost) ? new BigDecimal(shippingCost) : null);
		erpOrder.setParentOrderId(Long.parseLong(ordersId));
		//设置一级订单
		erpOrder.setTopOrderId(orders.getTopOrderId());
		erpOrder.setIsRetry((short)1);
		//获取该id下所有的订单信息
		List<TErpOrders> ordersList = queryAllSubOrderByTopId(orders.getTopOrderId());
		//生成订单编号
		String parentName = orders.getName();
		if(parentName.lastIndexOf("_") > 0){
			parentName = (String) parentName.subSequence(0, parentName.lastIndexOf("_"));
		}
		parentName = parentName + "_" + ordersList.size();
		erpOrder.setName(parentName);
		erpOrder.setDealNum(orders.getDealNum());
		erpOrder.setOrdersDate(orders.getOrdersDate());
		erpOrder.setPayTime(orders.getPayTime());
		erpOrder.setShopId(orders.getShopId());
		erpOrder.setCurrency(orders.getCurrency());
		erpOrder.setOrderState(OrderStateConstant.ORDER_ON_DEAL);
		erpOrder.setEnterpriseId(enterpriseId);
		//复制属性值
		try {
			MyBeanUtils.copyPropertiesInclude(erpOrder, orders, "gatheringAccount","customerId","customerName","phone1","phone2","email","country","countryShort","countryCn","province","postalCode","address","spareAddress","city","custLogistics");
		} catch (Exception e1) {
		}
		//手工订单
		erpOrder.setOrderType(OrderStateConstant.ORDER_TYPE_HAND);
		erpOrder.setCost(new BigDecimal("0.000"));
		erpOrder.setCustomsCode(new BigDecimal("0.000"));
		erpOrder.setInsurance(new BigDecimal("0.000"));
		erpOrder.setRefundMoney(new BigDecimal("0.000"));
		erpOrder.setTransferMoney(new BigDecimal("0.000"));
		erpOrder.setAntcipatedFreight(new BigDecimal("0.000"));
		int result = addOrder(erpOrder);
		if(result > 0){//新增成功
			//总金额
			BigDecimal totalMoney = new BigDecimal(0);
			//总重量
			BigDecimal totalWeight = new BigDecimal(0);
			//获取订单id
			Long retryOrderId = erpOrder.getOrdersId();
			if(StringUtils.isNotBlank(orderSplitData)){
				String[] splitArr = orderSplitData.split(";");
				if(splitArr.length > 0){
					for (int i = 0; i < splitArr.length; i++) {
						String[] tempArr = splitArr[i].trim().split(",");
						if(tempArr.length == 2){
							String detailId = tempArr[0].trim();
							String newNumber = tempArr[1].trim();
							if(StringUtils.isNotBlank(detailId)){
								//订单明细
								TErpOrdersDetail oldItem = ordersDetailMapper.selectByPrimaryKey(Long.parseLong(detailId));
								OrderItemVo newItem = new OrderItemVo();
								newItem.setOrderId(retryOrderId);
								newItem.setCount(Integer.parseInt(newNumber));
								//复制对象属性
								try {
									MyBeanUtils.copyPropertiesInclude(newItem, oldItem, "goodsId","orderNum","price","customsCode","spaceId","goodsInfo","weight");
								} catch (Exception e) {
								}
								//新增订单商品
								int flag = addOrdersItem(newItem);
								if(flag > 0){
									BigDecimal tempMoney = oldItem.getPrice().multiply(new BigDecimal(Integer.parseInt(newNumber)));
									BigDecimal tempWeight = oldItem.getWeight().multiply(new BigDecimal(Integer.parseInt(newNumber)));
									totalMoney = totalMoney.add(tempMoney);
									totalWeight = totalWeight.add(tempWeight);
									//获取锁
									ReentrantLock goodsLock = goodsLockCache.get(oldItem.getGoodsId());
									if(goodsLock == null){
										throw new ServiceException("商品Id【"+oldItem.getGoodsId()+"】对应的锁丢失，库存变更失败");
									}
									
									//加锁
									goodsLock.lock();
									try{
										int orderCount = oldItem.getCount();//订单数量
										GoodsVo goodVo = goodsService.getGoodsVoById(oldItem.getGoodsId());
										if(goodVo == null){
											throw new ServiceException("商品Id【"+oldItem.getGoodsId()+"】对应的商品信息丢失，库存变更失败");
										}
										TErpGoods goods = new TErpGoods();
										goods.setGoodsId(oldItem.getGoodsId());
										//修改发货数
										goods.setNotDeliverCount(goodVo.getNotDeliverCount() + orderCount);
										goodsService.updateGoods(goods); //扣除库存
									}finally{
										goodsLock.unlock();//释放锁
									}
								}
							}else{
								throw new ServiceException(ExpCodeConstant.PARAMTER_ILLEGAL);
							}
						}
					}
					
					//更改订单金额和重量
					totalMoney = totalMoney.setScale(3, BigDecimal.ROUND_HALF_UP);
					totalWeight = totalWeight.setScale(3, BigDecimal.ROUND_HALF_UP);
					erpOrder = new TErpOrders();
					erpOrder.setOrdersId(retryOrderId);
					erpOrder.setPayment(totalMoney);
					erpOrder.setWeight(totalWeight);
					//查询费率
					TErpSysEnterpriseRate sysRate = new TErpSysEnterpriseRate();
					sysRate.setRateId(orders.getCurrency());
					sysRate.setEnterpriseId(enterpriseId);
					TErpSysRate rateList = sysRateMapper.selectByRateId(sysRate);
					if(rateList != null){
						BigDecimal rate = rateList.getStandardRate();
						BigDecimal proportion = rateList.getProportion();
						BigDecimal total = rate.multiply(proportion);
						if(erpOrder.getPayment() != null){
							BigDecimal paymentMoney = erpOrder.getPayment().divide(total, 3, BigDecimal.ROUND_HALF_UP);
							erpOrder.setPaymentMoney(paymentMoney);
						}
					}
					
					//计算订单金额（原始货币）
					BigDecimal originalMoney = erpOrder.getPaymentMoney().add(erpOrder.getIncomeFreight() != null ? erpOrder.getIncomeFreight() : new BigDecimal("0.000")).setScale(3, BigDecimal.ROUND_HALF_UP);
					//计算订单金额（￥）
					BigDecimal ordersMoney = erpOrder.getPayment().add(erpOrder.getCustomsCode() != null ? erpOrder.getCustomsCode() : new BigDecimal("0.000")).setScale(3, BigDecimal.ROUND_HALF_UP);
					erpOrder.setOriginalMoney(originalMoney);
					erpOrder.setOrdersMoney(ordersMoney);
					//修改操作
					int state = updateOrder(erpOrder);
					//判断订单是否缺货
					ordersMapper.judgeOrderIsStockout(retryOrderId);
					if(state > 0){
						//记录日志
						addOrderLog(Long.parseLong(ordersId), "重发订单", OrderLogConstant.RETRY_ORDER, "重发出新订单"+parentName,enterpriseId);
					}
				}
			}
		}
		return result;
	}

	  /**
     * 批量修改订单
     * @param orderCodes
     * @param logisticsId
     * @param orderState
     * @param remark
     * @return
     * @throws ServiceException
     */
	@Override
	public List<Map<String, String>> batchEditOrders(String orderCodes, String logisticsId, String orderState, String remark, String editLogist, String editState, String editRemark) throws ServiceException {
		String names = "";
		//封装结果参数
		List<Map<String, String>> errorList = new ArrayList<Map<String, String>>();
		//获取当前登录用户信息
		UserCacheBean userCacheBean = CurrentUtil.getCurrentUser();
		//获取企业信息
		long enterpriseId = userCacheBean.getEnterpriseId();
		//封装订单id
		String[] codeArr = orderCodes.trim().split("\n");
		if(codeArr.length > 0){
			for (int i = 0; i < codeArr.length; i++) {
				String tempVal = codeArr[i];
				if(StringUtils.isNotBlank(tempVal)){
					names += tempVal + ",";
				}
			}
			if(names != null && !"".equals(names)){
				names = names.substring(0, names.lastIndexOf(","));
			}
			//数据库操作
			List<Map<String, String>> result = ordersMapper.batchUpdateOrder(names, StringUtils.isNotBlank(orderState) ? Short.valueOf(orderState) : null, StringUtils.isNotBlank(logisticsId) ? logisticsId : null, StringUtils.isNotBlank(remark) ? remark : null, editLogist, editState, editRemark, userCacheBean.getUserId(), userCacheBean.getUserName(), enterpriseId);
			//无错误信息
			if(result.isEmpty()){
				for (int i = 0; i < codeArr.length; i++) {
					String tempVal = codeArr[i];
					if(StringUtils.isNotBlank(tempVal)){
						//根据订单编号查询订单信息
						TErpOrders orders = queryOrderInfoByName(tempVal,null,null);
						if(orders != null){
							Long orderId = orders.getOrdersId();
							//订单状态不为空
							if(StringUtils.isNotBlank(orderState)){
								if("3".equals(orderState)){//已发货
									//根据订单ID查询商品信息
									List<OrderGoodsVo> goodsList = findOrderGoods(orderId);
									if(!goodsList.isEmpty()){
										//发货
										deliverGoods(goodsList);
									}
								}
							}
						}
					}
				}
			}else{
				for (int i = 0; i < result.size(); i++) {
					Map<String, String> resultMap = result.get(i);
					Map<String, String> tempMap = new HashMap<String, String>();
					tempMap.put(resultMap.get("pcode"), resultMap.get("p_msg"));
					errorList.add(tempMap);
				}
			}
		}
		return errorList;
	}

	/**
     * 批量更新交运信息
     * @param updateOrderInfo
     * @param type
     * @return
     * @throws ServiceException
     */
	@Override
	public List<Map<String, Object>> batchImportOrders(String updateOrderInfo, Integer type) throws ServiceException {
		//获取当前登录用户信息
		UserCacheBean userCacheBean = CurrentUtil.getCurrentUser();
		//获取企业信息
		long enterpriseId = userCacheBean.getEnterpriseId();
		
		//存放错误列表信息
		List<Map<String, Object>> errorList = new ArrayList<Map<String, Object>>();
		if(type == 1){//按 订单编号 更新 货运单号
			//更新内容不为空
			if(StringUtils.isNotBlank(updateOrderInfo)){
				updateOrderInfo = updateOrderInfo.trim();
				String[] orderArr = updateOrderInfo.split("\n");
				if(orderArr.length > 0){
					for (int i = 0; i < orderArr.length; i++) {
						Map<String,Object> tempMap = new HashMap<String, Object>();
						String orderItem = orderArr[i];
						String[] tempArr = orderItem.split(",");
						if(tempArr.length == 2){
							String orderCode = tempArr[0];
							//根据订单编号查询订单信息
							TErpOrders orders = queryOrderInfoByName(orderCode,null,null);
							if(orders == null){
								tempMap.put(orderCode, "该条数据不存在：【"+orderItem+"】");
								//存放错误信息
								errorList.add(tempMap);
							}
						}else{
							String orderCode = tempArr[0];
							tempMap.put(orderCode, "该条数据格式不符：【"+orderItem+"】");
							//存放错误信息
							errorList.add(tempMap);
						}
					}
				}
			}
		}else if(type == 2){//按 订单编号 更新 重量
			//更新内容不为空
			if(StringUtils.isNotBlank(updateOrderInfo)){
				updateOrderInfo = updateOrderInfo.trim();
				String[] orderArr = updateOrderInfo.split("\n");
				if(orderArr.length > 0){
					for (int i = 0; i < orderArr.length; i++) {
						Map<String,Object> tempMap = new HashMap<String, Object>();
						String orderItem = orderArr[i];
						String[] tempArr = orderItem.split(",");
						if(tempArr.length == 2){
							String orderCode = tempArr[0];
							String orderWeight = tempArr[1];
							try{
								Double.parseDouble(orderWeight);
							}catch(Exception e){
								tempMap.put(orderCode, "该条数据格式不符：【"+orderItem+"】");
								//存放错误信息
								errorList.add(tempMap);
								continue;
							}
							//根据订单编号查询订单信息
							TErpOrders orders = queryOrderInfoByName(orderCode,null,null);
							if(orders == null){
								tempMap.put(orderCode, "该条数据不存在：【"+orderItem+"】");
								//存放错误信息
								errorList.add(tempMap);
							}
						}else{
							String orderCode = tempArr[0];
							tempMap.put(orderCode, "该条数据格式不符：【"+orderItem+"】");
							//存放错误信息
							errorList.add(tempMap);
						}
					}
				}
			}
		}else if(type == 3){//按 订单编号 更新 运费
			//更新内容不为空
			if(StringUtils.isNotBlank(updateOrderInfo)){
				updateOrderInfo = updateOrderInfo.trim();
				String[] orderArr = updateOrderInfo.split("\n");
				if(orderArr.length > 0){
					for (int i = 0; i < orderArr.length; i++) {
						Map<String,Object> tempMap = new HashMap<String, Object>();
						String orderItem = orderArr[i];
						String[] tempArr = orderItem.split(",");
						if(tempArr.length == 2){
							String orderCode = tempArr[0];
							String fee = tempArr[1];
							try{
								Double.parseDouble(fee);
							}catch(Exception e){
								tempMap.put(orderCode, "该条数据格式不符：【"+orderItem+"】");
								//存放错误信息
								errorList.add(tempMap);
								continue;
							}
							//根据订单编号查询订单信息
							TErpOrders orders = queryOrderInfoByName(orderCode,null,null);
							if(orders == null){
								tempMap.put(orderCode, "该条数据不存在：【"+orderItem+"】");
								//存放错误信息
								errorList.add(tempMap);
							}
						}else{
							String orderCode = tempArr[0];
							tempMap.put(orderCode, "该条数据格式不符：【"+orderItem+"】");
							//存放错误信息
							errorList.add(tempMap);
						}
					}
				}
			}
		}else if(type == 4){//按 货运单号 更新 重量
			//更新内容不为空
			if(StringUtils.isNotBlank(updateOrderInfo)){
				updateOrderInfo = updateOrderInfo.trim();
				String[] orderArr = updateOrderInfo.split("\n");
				if(orderArr.length > 0){
					for (int i = 0; i < orderArr.length; i++) {
						Map<String,Object> tempMap = new HashMap<String, Object>();
						String orderItem = orderArr[i];
						String[] tempArr = orderItem.split(",");
						if(tempArr.length == 2){
							String billsCode = tempArr[0];
							String weight = tempArr[1];
							try{
								Double.parseDouble(weight);
							}catch(Exception e){
								tempMap.put(billsCode, "该条数据格式不符：【"+orderItem+"】");
								//存放错误信息
								errorList.add(tempMap);
								continue;
							}
							//根据订单编号查询订单信息
							TErpOrders orders = queryOrderInfoByName(null,billsCode,null);
							if(orders == null){
								tempMap.put(billsCode, "该条数据不存在：【"+orderItem+"】");
								//存放错误信息
								errorList.add(tempMap);
							}
						}else{
							String billsCode = tempArr[0];
							tempMap.put(billsCode, "该条数据格式不符：【"+orderItem+"】");
							//存放错误信息
							errorList.add(tempMap);
						}
					}
				}
			}
		}else if(type == 5){//按 货运单号 更新 运费
			//更新内容不为空
			if(StringUtils.isNotBlank(updateOrderInfo)){
				updateOrderInfo = updateOrderInfo.trim();
				String[] orderArr = updateOrderInfo.split("\n");
				if(orderArr.length > 0){
					for (int i = 0; i < orderArr.length; i++) {
						Map<String,Object> tempMap = new HashMap<String, Object>();
						String orderItem = orderArr[i];
						String[] tempArr = orderItem.split(",");
						if(tempArr.length == 2){
							String billsCode = tempArr[0];
							String fee = tempArr[1];
							try{
								Double.parseDouble(fee);
							}catch(Exception e){
								tempMap.put(billsCode, "该条数据格式不符：【"+orderItem+"】");
								//存放错误信息
								errorList.add(tempMap);
								continue;
							}
							//根据订单编号查询订单信息
							TErpOrders orders = queryOrderInfoByName(null,billsCode,null);
							if(orders == null){
								tempMap.put(billsCode, "该条数据不存在：【"+orderItem+"】");
								//存放错误信息
								errorList.add(tempMap);
							}
						}else{
							String billsCode = tempArr[0];
							tempMap.put(billsCode, "该条数据格式不符：【"+orderItem+"】");
							//存放错误信息
							errorList.add(tempMap);
						}
					}
				}
			}
		}else if(type == 6){//按 交易号 更新 货运单号
			//更新内容不为空
			if(StringUtils.isNotBlank(updateOrderInfo)){
				updateOrderInfo = updateOrderInfo.trim();
				String[] orderArr = updateOrderInfo.split("\n");
				if(orderArr.length > 0){
					for (int i = 0; i < orderArr.length; i++) {
						Map<String,Object> tempMap = new HashMap<String, Object>();
						String orderItem = orderArr[i];
						String[] tempArr = orderItem.split(",");
						if(tempArr.length == 2){
							String tradeCode = tempArr[0];
							//根据订单编号查询订单信息
							TErpOrders orders = queryOrderInfoByName(null,null,tradeCode);
							if(orders == null){
								tempMap.put(tradeCode, "该条数据不存在：【"+orderItem+"】");
								//存放错误信息
								errorList.add(tempMap);
							}
						}else{
							String tradeCode = tempArr[0];
							tempMap.put(tradeCode, "该条数据格式不符：【"+orderItem+"】");
							//存放错误信息
							errorList.add(tempMap);
						}
					}
				}
			}
		}
		
		//数据格式都正确时执行下一步
		if(errorList.isEmpty()){
			if(type == 1){//按 订单编号 更新 货运单号
				//更新内容不为空
				if(StringUtils.isNotBlank(updateOrderInfo)){
					updateOrderInfo = updateOrderInfo.trim();
					String[] orderArr = updateOrderInfo.split("\n");
					if(orderArr.length > 0){
						for (int i = 0; i < orderArr.length; i++) {
							String orderItem = orderArr[i];
							String[] tempArr = orderItem.split(",");
							if(tempArr.length == 2){
								String orderCode = tempArr[0];
								String billsCode = tempArr[1];
								//根据订单编号查询订单信息
								TErpOrders orders = queryOrderInfoByName(orderCode,null,null);
								if(orders != null){
									//创建订单对象
									TErpOrders erpOrder = new TErpOrders();
									erpOrder.setOrdersId(orders.getOrdersId());
									erpOrder.setBills(billsCode);
									//返回结果
									boolean result = false;
									//数据库操作
									result = updateOrder(erpOrder) > 0 ? true : false;
									//记录日志
									if(result){
										addOrderLog(orders.getOrdersId(), "批量更新交运信息", OrderLogConstant.UPDATE_ORDER, "原货运单号为"+(StringUtils.isNotBlank(orders.getBills()) ? orders.getBills() : null)+"，更新为"+billsCode,enterpriseId);
									}
								}
							}
						}
					}
				}
			}else if(type == 2){//按 订单编号 更新 重量
				//更新内容不为空
				if(StringUtils.isNotBlank(updateOrderInfo)){
					updateOrderInfo = updateOrderInfo.trim();
					String[] orderArr = updateOrderInfo.split("\n");
					if(orderArr.length > 0){
						for (int i = 0; i < orderArr.length; i++) {
							String orderItem = orderArr[i];
							String[] tempArr = orderItem.split(",");
							if(tempArr.length == 2){
								String orderCode = tempArr[0];
								String orderWeight = tempArr[1];
								BigDecimal weight = new BigDecimal(orderWeight);
								//根据订单编号查询订单信息
								TErpOrders orders = queryOrderInfoByName(orderCode,null,null);
								if(orders != null){
									//创建订单对象
									TErpOrders erpOrder = new TErpOrders();
									erpOrder.setOrdersId(orders.getOrdersId());
									erpOrder.setWeight(weight);
									//返回结果
									boolean result = false;
									//数据库操作
									result = updateOrder(erpOrder) > 0 ? true : false;
									//记录日志
									if(result){
										addOrderLog(orders.getOrdersId(), "批量更新交运信息", OrderLogConstant.UPDATE_ORDER, "原货运重量为"+(orders.getWeight() != null ? orders.getWeight() : null)+"，更新为"+weight,enterpriseId);
									}
								}
							}
						}
					}
				}
			}else if(type == 3){//按 订单编号 更新 运费
				//更新内容不为空
				if(StringUtils.isNotBlank(updateOrderInfo)){
					updateOrderInfo = updateOrderInfo.trim();
					String[] orderArr = updateOrderInfo.split("\n");
					if(orderArr.length > 0){
						for (int i = 0; i < orderArr.length; i++) {
							String orderItem = orderArr[i];
							String[] tempArr = orderItem.split(",");
							if(tempArr.length == 2){
								String orderCode = tempArr[0];
								String fee = tempArr[1];
								BigDecimal antcipatedFreight = new BigDecimal(fee);
								//根据订单编号查询订单信息
								TErpOrders orders = queryOrderInfoByName(orderCode,null,null);
								if(orders != null){
									//创建订单对象
									TErpOrders erpOrder = new TErpOrders();
									erpOrder.setOrdersId(orders.getOrdersId());
									erpOrder.setAntcipatedFreight(antcipatedFreight);
									//返回结果
									boolean result = false;
									//数据库操作
									result = updateOrder(erpOrder) > 0 ? true : false;
									//记录日志
									if(result){
										addOrderLog(orders.getOrdersId(), "批量更新交运信息", OrderLogConstant.UPDATE_ORDER, "原运费为"+(orders.getAntcipatedFreight() != null ? orders.getAntcipatedFreight() : null)+"，更新为"+antcipatedFreight,enterpriseId);
									}
								}
							}
						}
					}
				}
			}else if(type == 4){//按 货运单号 更新 重量
				//更新内容不为空
				if(StringUtils.isNotBlank(updateOrderInfo)){
					updateOrderInfo = updateOrderInfo.trim();
					String[] orderArr = updateOrderInfo.split("\n");
					if(orderArr.length > 0){
						for (int i = 0; i < orderArr.length; i++) {
							String orderItem = orderArr[i];
							String[] tempArr = orderItem.split(",");
							if(tempArr.length == 2){
								String billsCode = tempArr[0];
								String weight = tempArr[1];
								BigDecimal newWeight = new BigDecimal(weight);
								//根据订单编号查询订单信息
								TErpOrders orders = queryOrderInfoByName(null,billsCode,null);
								if(orders != null){
									//创建订单对象
									TErpOrders erpOrder = new TErpOrders();
									erpOrder.setOrdersId(orders.getOrdersId());
									erpOrder.setWeight(newWeight);
									//返回结果
									boolean result = false;
									//数据库操作
									result = updateOrder(erpOrder) > 0 ? true : false;
									//记录日志
									if(result){
										addOrderLog(orders.getOrdersId(), "批量更新交运信息", OrderLogConstant.UPDATE_ORDER, "原货运重量为"+(orders.getWeight() != null ? orders.getWeight() : null)+"，更新为"+weight,enterpriseId);
									}
								}
							}
						}
					}
				}
			}else if(type == 5){//按 货运单号 更新 运费
				//更新内容不为空
				if(StringUtils.isNotBlank(updateOrderInfo)){
					updateOrderInfo = updateOrderInfo.trim();
					String[] orderArr = updateOrderInfo.split("\n");
					if(orderArr.length > 0){
						for (int i = 0; i < orderArr.length; i++) {
							String orderItem = orderArr[i];
							String[] tempArr = orderItem.split(",");
							if(tempArr.length == 2){
								String billsCode = tempArr[0];
								String fee = tempArr[1];
								BigDecimal antcipatedFreight = new BigDecimal(fee);
								//根据订单编号查询订单信息
								TErpOrders orders = queryOrderInfoByName(null,billsCode,null);
								if(orders != null){
									//创建订单对象
									TErpOrders erpOrder = new TErpOrders();
									erpOrder.setOrdersId(orders.getOrdersId());
									erpOrder.setAntcipatedFreight(antcipatedFreight);
									//返回结果
									boolean result = false;
									//数据库操作
									result = updateOrder(erpOrder) > 0 ? true : false;
									//记录日志
									if(result){
										addOrderLog(orders.getOrdersId(), "批量更新交运信息", OrderLogConstant.UPDATE_ORDER, "原运费为"+(orders.getAntcipatedFreight() != null ? orders.getAntcipatedFreight() : null)+"，更新为"+antcipatedFreight,enterpriseId);
									}
								}
							}
						}
					}
				}
			}else if(type == 6){//按 交易号 更新 货运单号
				//更新内容不为空
				if(StringUtils.isNotBlank(updateOrderInfo)){
					updateOrderInfo = updateOrderInfo.trim();
					String[] orderArr = updateOrderInfo.split("\n");
					if(orderArr.length > 0){
						for (int i = 0; i < orderArr.length; i++) {
							String orderItem = orderArr[i];
							String[] tempArr = orderItem.split(",");
							if(tempArr.length == 2){
								String tradeCode = tempArr[0];
								String billsCode = tempArr[1];
								//根据订单编号查询订单信息
								TErpOrders orders = queryOrderInfoByName(null,null,tradeCode);
								if(orders != null){
									//创建订单对象
									TErpOrders erpOrder = new TErpOrders();
									erpOrder.setOrdersId(orders.getOrdersId());
									erpOrder.setBills(billsCode);
									//返回结果
									boolean result = false;
									//数据库操作
									result = updateOrder(erpOrder) > 0 ? true : false;
									//记录日志
									if(result){
										addOrderLog(orders.getOrdersId(), "批量更新交运信息", OrderLogConstant.UPDATE_ORDER, "原货运单号为"+(StringUtils.isNotBlank(orders.getBills()) ? orders.getBills() : null)+"，更新为"+billsCode,enterpriseId);
									}
								}
							}
						}
					}
				}
			}
		}
		return errorList;
	}

	 /**
     * 查询订单自动填充运单号列表
     * @param ids
     * @return
     * @throws ServiceException
     */
	@Override
	public List<OrderTnumberVo> queryOrderTradeNumList(String ids) throws ServiceException {
		//获取当前登录用户信息
		UserCacheBean userCacheBean = CurrentUtil.getCurrentUser();
		//获取企业信息
		long enterpriseId = userCacheBean.getEnterpriseId();
		
		List<Long> idList = new ArrayList<Long>();
		if(ids==null || "".equals(ids)){
			return null;
		}
		
		for(String id : ids.split(",")){
			idList.add(Long.parseLong(id));
		}
		
		//数据库操作
		List<OrderTnumberVo> result = ordersMapper.queryOrderTradeNumList(idList, enterpriseId);
		return result;
	}

	/**
     * 批量自动填充运单号
     * @param ids
     * @return
     * @throws ServiceException
     */
	@Override
	public List<Map<String,Object>> batchAutomaticallyFillTrackNumber(String ids) throws ServiceException {
		List<Map<String,Object>> msgList = new ArrayList<Map<String, Object>>();
		List<OrderTnumberVo> result = queryOrderTradeNumList(ids);
		if(result.isEmpty()) throw new ServiceException(OrderExpCodeConstant.ORDER_NOT_EXISTS);
		//遍历没一条数据
		for (int i = 0; i < result.size(); i++) {
			Map<String, Object> params = new HashMap<String, Object>();
			OrderTnumberVo orderNum = result.get(i);
			//检查数据是否正确
			if(orderNum.getLogisticsId() == null || (orderNum.getIsUsed() != null && orderNum.getIsUsed() == 1)){
				throw new ServiceException(OrderExpCodeConstant.ORDER_TRADE_ERROR);
			}
			
			//根据物流id查询运单号
			TErpLogisticsTrackingnumber orderTrade = logisticsTrackingnumberMapper.queryTrackNumByLogisId(orderNum.getLogisticsId());
			if(orderTrade == null){
				params.put(String.valueOf(orderNum.getOrdersId()), "未找到可以使用的交运单号;0");
			}else{
				params.put(String.valueOf(orderNum.getOrdersId()), "0;"+orderTrade.getTnumber());
				orderNum.setBills(orderTrade.getTnumber());
				//修改订单信息
				int flag = updateOrder(orderNum);
				if(flag > 0){
					orderTrade.setIsUsed((short)1);
					orderTrade.setOrdersId(orderNum.getOrdersId());
					CurrentUtil.setBaseBeanByModify(orderTrade);
					logisticsTrackingnumberMapper.updateByPrimaryKeySelective(orderTrade);
				}
			}
			msgList.add(params);
		}
		return msgList;
	}

	/**
     * 将订单标志为已打印
     * @param platformOrderIds
     * @return
     * @throws ServiceException
     */
	@Override
	public List<Map<String, Object>> printOrder(String platformOrderIds) throws ServiceException {
		//获取当前登录用户信息
		UserCacheBean userCacheBean = CurrentUtil.getCurrentUser();
		//企业id
		long enterpriseId = userCacheBean.getEnterpriseId();
		//存放订单id
		List<Long> idList = new ArrayList<Long>();
		StringBuffer names = new StringBuffer();
		//存放错误列表信息
		List<Map<String, Object>> errorList = new ArrayList<Map<String, Object>>();
		if(StringUtils.isNotBlank(platformOrderIds)){//订单编号不为空
			platformOrderIds = platformOrderIds.trim();
			String[] orderCodeArr = platformOrderIds.split("\n");
			if(orderCodeArr.length > 0){
				//遍历数组
				for (String orderCode : orderCodeArr) {
					if(StringUtils.isNotBlank(orderCode)){//订单编号不为空
						names.append(orderCode.trim()).append(",");
					}
				}
			}
		}
		
		if(StringUtils.isNotBlank(names.toString())){
			names = names.deleteCharAt(names.lastIndexOf(","));
			List<Map<String, Object>> result = ordersMapper.queryOrderIdsByName(names.toString());
			if(!result.isEmpty()){//结果不为空
				for (int i = 0; i < result.size(); i++) {
					Map<String, Object> resultMap = result.get(i);
					Map<String, Object> tempMap = new HashMap<String, Object>();
					Object ids = resultMap.get("p_ids");
					Object codes = resultMap.get("pcode");
					if(ids != null){
						idList.add(Long.parseLong(ids.toString()));
					}
					if(codes != null){
						tempMap.put((String) resultMap.get("pcode"), resultMap.get("p_msg"));
						errorList.add(tempMap);
					}
				}
			}
		}
		
		//表明数据都正确
		if(errorList.isEmpty()){
			//数据库操作
			int result = ordersMapper.markOrderIsPrint(idList, (short)2, (short)1);
			if(result > 0){
				for(Long id : idList){
					//记录日志
					addOrderLog(id, "修改订单基础信息", OrderLogConstant.UPDATE_ORDER, "已打印",enterpriseId);
				}
			}
		}
		return errorList;
	}

	/**
	 * 新增订单
	 */
	@Override
	public int insertOrder(TErpOrders order) throws ServiceException {
		//返回结果
		int result = 0;
		//获取当前登录用户信息
		UserCacheBean userCacheBean = CurrentUtil.getCurrentUser();
		//获取企业信息
		long enterpriseId = userCacheBean.getEnterpriseId();
		order.setParentOrderId(0L);
		//手工订单
		order.setOrderType(OrderStateConstant.ORDER_TYPE_HAND);
		//订单状态
		order.setOrderState(OrderStateConstant.ORDER_ON_DEAL);
		//设置企业信息
		order.setEnterpriseId(enterpriseId);
		order.setPayTime(order.getOrdersDate());
		order.setIsStockout((short)-1);
		order.setOriginalMoney(new BigDecimal("0.000"));
		order.setOrdersMoney(new BigDecimal("0.000"));
		//将人民币转换为相应的币种
		if(order.getPayment() != null || order.getCustomsCode() != null){
			//查询汇率
			TErpSysEnterpriseRate sysRate = new TErpSysEnterpriseRate();
			sysRate.setRateId(order.getCurrency());
			sysRate.setEnterpriseId(enterpriseId);
			TErpSysRate rateList = sysRateMapper.selectByRateId(sysRate);
			if(rateList != null){
				BigDecimal rate = rateList.getStandardRate();
				BigDecimal proportion = rateList.getProportion();
				BigDecimal total = rate.multiply(proportion);
				if(order.getPayment() != null){
					BigDecimal paymentMoney = order.getPayment().divide(total, 3, BigDecimal.ROUND_HALF_UP);
					order.setPaymentMoney(paymentMoney);
				}
				
				if(order.getCustomsCode() != null){
					BigDecimal incomeFreight = order.getCustomsCode().divide(total, 3, BigDecimal.ROUND_HALF_UP);
					order.setIncomeFreight(incomeFreight);
				}
			}
		}
		//数据库操作--新增订单
		result = addOrder(order);
		if(result > 0){
			TErpOrders erpOrder = new TErpOrders();
			erpOrder.setOrdersId(order.getOrdersId());
			erpOrder.setTopOrderId(order.getOrdersId());
			//修改一级订单
			ordersMapper.updateByPrimaryKeySelective(erpOrder);
			//记录日志
			addOrderLog(order.getOrdersId(), "添加订单", OrderLogConstant.ADD_ORDER, "手动创建",enterpriseId);
		}
		return result;
	}

	/**
	 * 修改订单
	 */
	@Override
	public int modifyOrder(TErpOrders order) throws ServiceException {
		//获取当前登录用户信息
		UserCacheBean userCacheBean = CurrentUtil.getCurrentUser();
		//获取企业信息
		long enterpriseId = userCacheBean.getEnterpriseId();
		//国家不为空
		if(StringUtils.isNotBlank(order.getCountry())){
			//查询 输入是否正确
			TErpSysDictValue dictValue = sysDictValueMapper.querySysDictValueByCountry(order.getCountry());
			if(dictValue == null){
				throw new ServiceException(OrderExpCodeConstant.COUNTRY_NOT_EXISTS, "国家不存在");
			}else{
				order.setCountryShort(dictValue.getDictValue());
				order.setCountryCn(dictValue.getDictName());
			}
		}
		//数据库操作
		int result = updateOrder(order);
		if(result > 0){
			//记录日志
			addOrderLog(order.getOrdersId(), "修改订单基础信息", OrderLogConstant.UPDATE_ORDER, "修改订单id为【"+order.getOrdersId()+"】订单信息",enterpriseId);
		}
		return result;
	}

	/**
	 * 发货
	 */
	@Override
	public void deliverGoods(List<OrderGoodsVo> goodsList) throws ServiceException {
		for (int j = 0; j < goodsList.size(); j++) {
			OrderGoodsVo goodsVO = goodsList.get(j);
			Long goodsId = goodsVO.getGoodsId();
			//获取锁
			ReentrantLock goodsLock = goodsLockCache.get(goodsId);
			if(goodsLock == null){
				throw new ServiceException("商品Id【"+goodsId+"】对应的锁丢失，库存变更失败");
			}
			
			//加锁
			goodsLock.lock();
			try{
				int orderCount = goodsVO.getCount();//订单数量
				GoodsVo goodVo = goodsService.getGoodsVoById(goodsId);
				if(goodVo == null){
					throw new ServiceException("商品Id【"+goodsId+"】对应的商品信息丢失，库存变更失败");
				}
				Integer oldCount = goodVo.getInventoryCount() != null ? goodVo.getInventoryCount() : 0;//原库存
				Integer newCount = oldCount - orderCount;//新库存
				TErpGoods goods = new TErpGoods();
				goods.setGoodsId(goodsId);
				goods.setInventoryCount(newCount);
				//修改发货数
				goods.setDeliverCount(goodVo.getDeliverCount() + orderCount);
				//修改未发货数
				goods.setNotDeliverCount(goodVo.getNotDeliverCount() - orderCount);
				goodsService.updateGoods(goods); //扣除库存
				//存在仓库
				if(goodsVO.getWhouseId() != null){
					TErpGoodsStorage goodsStorage = goodsStorageService.queryGoodsStorageBywhouseId(goodsId, goodsVO.getWhouseId());
					if(goodsStorage != null){
						Integer oldIncount = goodsStorage.getInventoryCount() != null ? goodsStorage.getInventoryCount() : 0;
						//原库存减去订购数
						Integer newIncount = oldIncount - orderCount;
						goodsStorage.setInventoryCount(newIncount);
						//更改库存数
						goodsStorageService.updateStorage(goodsStorage);
					}
				}
			}finally{
				//释放锁
				goodsLock.unlock();
			}
		}
	}

	/**
	 * 批量发货
	 */
	@Override
	public List<Map<String, String>> batchUpdateOrdersState(short state, String ids) throws ServiceException {
		List<Map<String, String>> errorList = new ArrayList<Map<String, String>>();
		//获取当前登录用户信息
		UserCacheBean userCacheBean = CurrentUtil.getCurrentUser();
		//获取企业信息
		long enterpriseId = userCacheBean.getEnterpriseId();
		//批量处理订单状态
		List<Map<String, String>> result = ordersMapper.batchUpdateOrdersState(ids, state, userCacheBean.getUserId(), userCacheBean.getUserName(), enterpriseId);
		if(result.isEmpty()){
			if(state == 3){//发货
				for(String id : ids.split(",")){
					List<OrderGoodsVo> goodsList = findOrderGoods(Long.parseLong(id));
					if(goodsList.isEmpty()) throw new ServiceException(OrderExpCodeConstant.ORDER_NO_GOODS);
					//发货
					deliverGoods(goodsList);
				}
			}
		}else{
			for (int i = 0; i < result.size(); i++) {
				Map<String, String> resultMap = result.get(i);
				Map<String, String> tempMap = new HashMap<String, String>();
				tempMap.put(resultMap.get("pcode"), resultMap.get("p_msg"));
				errorList.add(tempMap);
			}
		}
		return errorList;
	}

	/**
	 * 激活订单
	 */
	@Override
	public boolean enableOrder(String ordersId) throws ServiceException {
		//获取当前登录用户信息
		UserCacheBean userCacheBean = CurrentUtil.getCurrentUser();
		//获取企业信息
		long enterpriseId = userCacheBean.getEnterpriseId();
		//设置参数
		TErpOrders erpOrder = new TErpOrders();
		erpOrder.setOrdersId(Long.parseLong(ordersId));
		erpOrder.setOrderState(OrderStateConstant.ORDER_ON_DEAL);
		CurrentUtil.setBaseBeanByModify(erpOrder);
		//修改订单信息
		boolean result= ordersMapper.updateByPrimaryKeySelective(erpOrder)  > 0 ? true : false;
		if(result){
			//同时激活订单商品
			TErpOrdersDetail detail = new TErpOrdersDetail();
			detail.setOrderId(Long.parseLong(ordersId));
			detail.setState((short)1);
			CurrentUtil.setBaseBeanByModify(detail);
			ordersDetailMapper.updateOrderItemStateByOrderId(detail);
			//根据订单id查询订单明细
			List<TErpOrdersDetail> detailList = ordersDetailMapper.queryOrderDetailByOrderId(Long.parseLong(ordersId));
			if(!detailList.isEmpty()){
				for (int i = 0; i < detailList.size(); i++) {
					TErpOrdersDetail tempDetail = detailList.get(i);
					Long goodsId = tempDetail.getGoodsId();
					//获取锁
					ReentrantLock goodsLock = goodsLockCache.get(goodsId);
					if(goodsLock == null){
						throw new ServiceException("商品Id【"+goodsId+"】对应的锁丢失，库存变更失败");
					}
					
					//加锁
					goodsLock.lock();
					try{
						int orderCount = tempDetail.getCount();//订单数量
						GoodsVo goodVo = goodsService.getGoodsVoById(goodsId);
						if(goodVo == null){
							throw new ServiceException("商品Id【"+goodsId+"】对应的商品信息丢失，库存变更失败");
						}
						TErpGoods goods = new TErpGoods();
						goods.setGoodsId(goodsId);
						//修改发货数
						goods.setNotDeliverCount(goodVo.getNotDeliverCount() + orderCount);
						goodsService.updateGoods(goods); //扣除库存
					}finally{
						goodsLock.unlock();//释放锁
					}
				}
			}
			//判断订单是否缺货
			ordersMapper.judgeOrderIsStockout(Long.parseLong(ordersId));
			//记录日志
			addOrderLog(Long.parseLong(ordersId), "订单激活", OrderLogConstant.UPDATE_ORDER, "原状态为已作废,更新为配货中",enterpriseId);
		}
		return result;
	}

	 /**
     * 新增订单商品明细
     * @param orderItem
     * @return
     * @throws ServiceException
     */
	@Override
	public boolean insertOrdersItem(OrderItemVo orderItem) throws ServiceException {
		//获取当前登录用户信息
		UserCacheBean userCacheBean = CurrentUtil.getCurrentUser();
		//获取企业信息
		long enterpriseId = userCacheBean.getEnterpriseId();
		//返回结果参数
		boolean result = false;
		//数据库操作
		TErpGoods goodsList = goodsMapper.queryGoodsInfoBySku(orderItem.getSku(), enterpriseId);
		if(goodsList == null){
			throw new ServiceException(OrderExpCodeConstant.GOODS_SKU_NO);
		}else{
			if(goodsList.getSaleState() == 5){//停止销售
				throw new ServiceException(OrderExpCodeConstant.ORDER_GOODS_NO_SALE);
			}
			//商品id
			Long goodsId = goodsList.getGoodsId();
			orderItem.setGoodsId(goodsList.getGoodsId());
			orderItem.setPrice(goodsList.getPrice() != null ? goodsList.getPrice() : new BigDecimal(0));
			orderItem.setSpaceId(null);
			orderItem.setCustomsCode(null);
			orderItem.setWeight(goodsList.getWeight() != null ? goodsList.getWeight() : new BigDecimal(0));
			orderItem.setGoodsInfo("(追加商品)");
			orderItem.setOrderNum(Public.genaratorRamdonString());
			//查询该商品是否已在订单中
			boolean goodsFlag = queryGoodsIsExists(orderItem);
			if(goodsFlag){
				throw new ServiceException(OrderExpCodeConstant.ORDER_GOODS_EXISTS);
			}
			//数据库操作
			result = addOrdersItem(orderItem) > 0 ? true : false;
			//记录日志
			if(result){
				//重新计算订单应收货款
				TErpOrders erpOrder = new TErpOrders();
				erpOrder.setOrdersId(orderItem.getOrderId());
				BigDecimal amount = orderItem.getPrice().multiply(new BigDecimal(orderItem.getCount()));
				amount = amount.setScale(3,BigDecimal.ROUND_HALF_UP);
				BigDecimal totalWeight = orderItem.getWeight().multiply(new BigDecimal(orderItem.getCount()));
				totalWeight = totalWeight.setScale(3,BigDecimal.ROUND_HALF_UP);
				erpOrder.setPayment(amount);
				erpOrder.setWeight(totalWeight);
				erpOrder.setIsStockout((short)0);
				//查询订单详情
				TErpOrders orders = ordersMapper.selectByPrimaryKey(orderItem.getOrderId());
				if(orders != null){
					//查询费率
					TErpSysEnterpriseRate sysRate = new TErpSysEnterpriseRate();
					sysRate.setRateId(orders.getCurrency());
					sysRate.setEnterpriseId(enterpriseId);
					TErpSysRate rateList = sysRateMapper.selectByRateId(sysRate);
					if(rateList != null){
						BigDecimal rate = rateList.getStandardRate();
						BigDecimal proportion = rateList.getProportion();
						BigDecimal total = rate.multiply(proportion);
						if(erpOrder.getPayment() != null){
							BigDecimal paymentMoney = erpOrder.getPayment().divide(total, 3, BigDecimal.ROUND_HALF_UP);
							erpOrder.setPaymentMoney(paymentMoney);
						}
					}
				}
				
				//计算订单金额（原始货币）
				BigDecimal originalMoney = erpOrder.getPaymentMoney().add(erpOrder.getIncomeFreight() != null ? erpOrder.getIncomeFreight() : new BigDecimal("0.000")).setScale(3, BigDecimal.ROUND_HALF_UP);
				//计算订单金额（￥）
				BigDecimal ordersMoney = erpOrder.getPayment().add(erpOrder.getCustomsCode() != null ? erpOrder.getCustomsCode() : new BigDecimal("0.000")).setScale(3, BigDecimal.ROUND_HALF_UP);
				erpOrder.setOriginalMoney(originalMoney);
				erpOrder.setOrdersMoney(ordersMoney);
				CurrentUtil.setBaseBeanByModify(erpOrder);
				//修改订单信息
				ordersMapper.updateByPrimaryKeySelective(erpOrder);
				
				//获取锁
				ReentrantLock goodsLock = goodsLockCache.get(orderItem.getGoodsId());
				if(goodsLock == null){
					throw new ServiceException("商品Id【"+goodsId+"】对应的锁丢失，库存变更失败");
				}
				
				//加锁
				goodsLock.lock();
				try{
					int orderCount = orderItem.getCount();//订单数量
					GoodsVo goodVo = goodsService.getGoodsVoById(orderItem.getGoodsId());
					if(goodVo == null){
						throw new ServiceException("商品Id【"+goodsId+"】对应的商品信息丢失，库存变更失败");
					}
					TErpGoods goods = new TErpGoods();
					goods.setGoodsId(orderItem.getGoodsId());
					//修改发货数
					goods.setNotDeliverCount(goodVo.getNotDeliverCount() + orderCount);
					goodsService.updateGoods(goods); //扣除库存
				}finally{
					goodsLock.unlock();//释放锁
				}
				addOrderLog(orderItem.getOrderId(), "添加订单商品", OrderLogConstant.ADD_PRODUCT, "添加库存SKU【"+orderItem.getSku()+"】商品",enterpriseId);
			}
		}
		return result;
	}

	 /**
     * 修改订单商品明细
     * @param orderItem
     * @return
     * @throws ServiceException
     */
	@Override
	public boolean modifyOrdersItem(OrderItemVo orderItem) throws ServiceException {
		//查询订单明细ID
		TErpOrdersDetail detail = ordersDetailMapper.selectByPrimaryKey(orderItem.getDetailId());
		if(detail == null){
			throw new ServiceException(ExpCodeConstant.PARAMTER_ILLEGAL);
		}
		//获取当前登录用户信息
		UserCacheBean userCacheBean = CurrentUtil.getCurrentUser();
		//获取企业信息
		long enterpriseId = userCacheBean.getEnterpriseId();
		
		//返回结果
		boolean result = false;
		//数据库操作
		result = updateOrdersItem(orderItem) > 0 ? true : false;
		//记录日志
		if(result){
			//重新计算订单应收货款
			TErpOrders erpOrder = new TErpOrders();
			erpOrder.setOrdersId(detail.getOrderId());
			BigDecimal amount = orderItem.getPrice().multiply(new BigDecimal(orderItem.getCount()));
			amount = amount.setScale(3,BigDecimal.ROUND_HALF_UP);
			BigDecimal totalWeight = detail.getWeight().multiply(new BigDecimal(orderItem.getCount()));
			totalWeight = totalWeight.setScale(3,BigDecimal.ROUND_HALF_UP);
			erpOrder.setPayment(amount);
			erpOrder.setWeight(totalWeight);
			//查询订单详情
			TErpOrders orders = ordersMapper.selectByPrimaryKey(detail.getOrderId());
			if(orders != null){
				if(erpOrder.getPayment() != null){
					//查询费率
					TErpSysEnterpriseRate sysRate = new TErpSysEnterpriseRate();
					sysRate.setRateId(orders.getCurrency());
					sysRate.setEnterpriseId(enterpriseId);
					TErpSysRate rateList = sysRateMapper.selectByRateId(sysRate);
					if(rateList != null){
						BigDecimal rate = rateList.getStandardRate();
						BigDecimal proportion = rateList.getProportion();
						BigDecimal total = rate.multiply(proportion);
						BigDecimal paymentMoney = erpOrder.getPayment().divide(total, 3, BigDecimal.ROUND_HALF_UP);
						erpOrder.setPaymentMoney(paymentMoney);
					}
				}else{
					erpOrder.setPaymentMoney(new BigDecimal("0.000"));
				}
			}
			
			//计算订单金额（原始货币）
			BigDecimal originalMoney = erpOrder.getPaymentMoney().add(erpOrder.getIncomeFreight() != null ? erpOrder.getIncomeFreight() : new BigDecimal("0.000")).setScale(3, BigDecimal.ROUND_HALF_UP);
			//计算订单金额（￥）
			BigDecimal ordersMoney = erpOrder.getPayment().add(erpOrder.getCustomsCode() != null ? erpOrder.getCustomsCode() : new BigDecimal("0.000")).setScale(3, BigDecimal.ROUND_HALF_UP);
			erpOrder.setOriginalMoney(originalMoney);
			erpOrder.setOrdersMoney(ordersMoney);
			CurrentUtil.setBaseBeanByModify(erpOrder);
			//修改订单信息
			ordersMapper.updateByPrimaryKeySelective(erpOrder);
			//判断订单是否缺货
			ordersMapper.judgeOrderIsStockout(detail.getOrderId());
			//获取锁
			ReentrantLock goodsLock = goodsLockCache.get(detail.getGoodsId());
			if(goodsLock == null){
				throw new ServiceException("商品Id【"+detail.getGoodsId()+"】对应的锁丢失，库存变更失败");
			}
			
			//加锁
			goodsLock.lock();
			try{
				int orderCount = orderItem.getCount();//订单数量
				GoodsVo goodVo = goodsService.getGoodsVoById(detail.getGoodsId());
				if(goodVo == null){
					throw new ServiceException("商品Id【"+detail.getGoodsId()+"】对应的商品信息丢失，库存变更失败");
				}
				TErpGoods goods = new TErpGoods();
				goods.setGoodsId(detail.getGoodsId());
				//修改发货数
				goods.setNotDeliverCount(goodVo.getNotDeliverCount() + orderCount - detail.getCount());
				goodsService.updateGoods(goods); //扣除库存
			}finally{
				goodsLock.unlock();//释放锁
			}
			//记录日志
			addOrderLog(detail.getOrderId(), "修改订单商品物流信息", OrderLogConstant.UPDATE_PRODUCT_LOGIST, "修改订单明细id为【"+orderItem.getDetailId()+"】商品sku为【"+orderItem.getSku()+"】信息",enterpriseId);
		}
		return result;
	}
	

	@Override
	public List<OrderPrintVo> queryOrderPrintVoListByIds(String idString) throws ServiceException {
		String idStrings[] = idString.split(",");
		List<Long> ids = new ArrayList<Long>();
		for(String id: idStrings){
			ids.add(Long.valueOf(id));
		}
		//获取当前登录用户信息
		UserCacheBean userCacheBean = CurrentUtil.getCurrentUser();
		//获取企业信息
		long enterpriseId = userCacheBean.getEnterpriseId();
		//数据库操作
		List<OrderPrintVo> result  = ordersMapper.queryOrderPrintVoByIds(ids,enterpriseId);
		return result;
	}

	 /**
     * 	通过订单编号查询订单打印集合
     *  @param names
     *  @return
     *  @throws ServiceException
     *  @author        liujiping
     *  @Date          2016年4月25日
     */
	@Override
	public Pagination<OrderExportVo> queryOrderExportList(JqParamBean jqParamBean) throws ServiceException {
		//封装分页参数
		Pagination<OrderExportVo> pagination = PageContext.initialize(jqParamBean.getPage(), jqParamBean.getRows());
		//数据库操作
		List<OrderExportVo> orderList = ordersMapper.queryOrderExportList(jqParamBean,pagination.getRowBounds());
		//返回数据
		pagination.setData(orderList);
		return pagination;
	}

	/**
     * 统计订单总数
     * @param enterpriseId
     * @return
     * @throws ServiceException
     */
	@Override
	public List<Map<String, Object>> queryOrderCount() throws ServiceException {
		//获取当前登录用户信息
		UserCacheBean userCacheBean = CurrentUtil.getCurrentUser();
		//获取企业信息
		long enterpriseId = userCacheBean.getEnterpriseId();
		//获取用户id
		long userId = userCacheBean.getUserId();
		//数据库操作
		List<Map<String, Object>> result = ordersMapper.queryOrderCount(enterpriseId,userId);
		return result;
	}

	@Override
	public  Map<String, Object>  printOrderNames(String platformOrderIds) throws ServiceException {
		//存放订单id
		String ids  = "";
		//存放错误列表信息
		List<Map<String, Object>> errorList = new ArrayList<Map<String, Object>>();
		if(StringUtils.isNotBlank(platformOrderIds)){//订单编号不为空
			platformOrderIds = platformOrderIds.trim();
			String[] orderCodeArr = platformOrderIds.split("\n");
			if(orderCodeArr.length > 0){
				//获取当前登录用户信息
				UserCacheBean userCacheBean = CurrentUtil.getCurrentUser();
				//获取企业信息
				long enterpriseId = userCacheBean.getEnterpriseId();
				//遍历数组
				for (int i = 0; i < orderCodeArr.length; i++) {
					Map<String,Object> tempMap = new HashMap<String, Object>();
					String orderCode = orderCodeArr[i];
					if(StringUtils.isNotBlank(orderCode)){//订单编号不为空
						orderCode = orderCode.trim();//去掉空格
						//根据订单编号查询订单信息
						OrderPrintVo orderVo = ordersMapper.queryOrderPrintVoByName(orderCode,enterpriseId);
						if(orderVo != null){
							if(orderVo.getOrderDetailPrintVos() != null && orderVo.getOrderDetailPrintVos().size() > 0){
								ids += "," + orderVo.getOrdersId();
							}else{
								tempMap.put(orderCode, "订单未添加商品！");
								errorList.add(tempMap);
							}
						}else{
							tempMap.put(orderCode, "订单编号不存在！");
							errorList.add(tempMap);
						}
					}
				}
			}
		}

		if(ids.length() >0){
			ids = ids.replaceFirst(",", "");
		}
		
		Map<String, Object> data = new HashMap<String, Object>();
		data.put("ids", ids);
		data.put("errorList", errorList);
		return data;
	}


	/**
     * 新增订单商品物流信息
     * @param itemChild
     * @return
     * @throws ServiceException
     */
	@Override
	public int addOrdersGoodsLogistisInfo(OrdersItemChild itemChild) throws ServiceException {
		//获取当前登录用户信息
		UserCacheBean userCacheBean = CurrentUtil.getCurrentUser();
		//获取企业信息
		long enterpriseId = userCacheBean.getEnterpriseId();
		//订单信息
		TErpOrders ordersItem = itemChild.getOrdersItem();
		//订单商品信息
		List<OrderItemVo> itemList = itemChild.getItemList();
		CurrentUtil.setBaseBeanByModify(ordersItem);
		BigDecimal totalAmount = new BigDecimal("0.000");
		BigDecimal totalWeight = new BigDecimal("0.000");
		//遍历订单商品明细
		for (int i = 0; i < itemList.size(); i++) {
			OrderItemVo ordersDetail = itemList.get(i);
			if(ordersDetail.getDetailId() != null){//编辑
				CurrentUtil.setBaseBeanByModify(ordersDetail);
			    ordersDetailMapper.updateByPrimaryKey(ordersDetail);
			    //计算总金额
			    BigDecimal amount = ordersDetail.getPrice().multiply(new BigDecimal(ordersDetail.getCount()));
				amount = amount.setScale(3,BigDecimal.ROUND_HALF_UP);
				totalAmount = totalAmount.add(amount);
				//计算总重量
				BigDecimal weight = ordersDetail.getWeight().multiply(new BigDecimal(ordersDetail.getCount()));
				weight = weight.setScale(3,BigDecimal.ROUND_HALF_UP);
				totalWeight = totalWeight.add(weight);
			    //获取锁
				ReentrantLock goodsLock = goodsLockCache.get(ordersDetail.getGoodsId());
				if(goodsLock == null){
					throw new ServiceException("商品Id【"+ordersDetail.getGoodsId()+"】对应的锁丢失，库存变更失败");
				}
				
				//加锁
				goodsLock.lock();
				try{
					int orderCount = ordersDetail.getCount();//订单数量
					GoodsVo goodVo = goodsService.getGoodsVoById(ordersDetail.getGoodsId());
					if(goodVo == null){
						throw new ServiceException("商品Id【"+ordersDetail.getGoodsId()+"】对应的商品信息丢失，库存变更失败");
					}
					TErpGoods goods = new TErpGoods();
					goods.setGoodsId(ordersDetail.getGoodsId());
					//修改发货数
					goods.setNotDeliverCount(goodVo.getNotDeliverCount() + orderCount - ordersDetail.getCount());
					goodsService.updateGoods(goods); //扣除库存
				}finally{
					goodsLock.unlock();//释放锁
				}
			}else{//新增
				addOrdersItem(ordersDetail);
				//计算总金额
			    BigDecimal amount = ordersDetail.getPrice().multiply(new BigDecimal(ordersDetail.getCount()));
				amount = amount.setScale(3,BigDecimal.ROUND_HALF_UP);
				totalAmount = totalAmount.add(amount);
				//计算总重量
				BigDecimal weight = ordersDetail.getWeight().multiply(new BigDecimal(ordersDetail.getCount()));
				weight = weight.setScale(3,BigDecimal.ROUND_HALF_UP);
				totalWeight = totalWeight.add(weight);
				//获取锁
				ReentrantLock goodsLock = goodsLockCache.get(ordersDetail.getGoodsId());
				if(goodsLock == null){
					throw new ServiceException("商品Id【"+ordersDetail.getGoodsId()+"】对应的锁丢失，库存变更失败");
				}
				//加锁
				goodsLock.lock();
				try{
					int orderCount = ordersDetail.getCount();//订单数量
					GoodsVo goodVo = goodsService.getGoodsVoById(ordersDetail.getGoodsId());
					if(goodVo == null){
						throw new ServiceException("商品Id【"+ordersDetail.getGoodsId()+"】对应的商品信息丢失，库存变更失败");
					}
					TErpGoods goods = new TErpGoods();
					goods.setGoodsId(ordersDetail.getGoodsId());
					//修改发货数
					goods.setNotDeliverCount(goodVo.getNotDeliverCount() + orderCount);
					goodsService.updateGoods(goods); //扣除库存
				}finally{
					goodsLock.unlock();//释放锁
				}
			}
		}
		
		if(!itemList.isEmpty()){
			//重新计算订单应收货款
			totalAmount = totalAmount.setScale(3,BigDecimal.ROUND_HALF_UP);
			totalWeight = totalWeight.setScale(3,BigDecimal.ROUND_HALF_UP);
			ordersItem.setPayment(totalAmount);
			ordersItem.setWeight(totalWeight);
			//查询订单详情
			TErpOrders orders = ordersMapper.selectByPrimaryKey(ordersItem.getOrdersId());
			if(orders != null){
				//查询费率
				TErpSysEnterpriseRate sysRate = new TErpSysEnterpriseRate();
				sysRate.setRateId(orders.getCurrency());
				sysRate.setEnterpriseId(enterpriseId);
				TErpSysRate rateList = sysRateMapper.selectByRateId(sysRate);
				if(rateList != null){
					BigDecimal rate = rateList.getStandardRate();
					BigDecimal proportion = rateList.getProportion();
					BigDecimal total = rate.multiply(proportion);
					if(ordersItem.getPayment() != null){
						BigDecimal paymentMoney = ordersItem.getPayment().divide(total, 3, BigDecimal.ROUND_HALF_UP);
						ordersItem.setPaymentMoney(paymentMoney);
					}
				}
			}
			
			//计算订单金额（原始货币）
			BigDecimal originalMoney = ordersItem.getPaymentMoney().add(ordersItem.getIncomeFreight() != null ? ordersItem.getIncomeFreight() : new BigDecimal("0.000")).setScale(3, BigDecimal.ROUND_HALF_UP);
			//计算订单金额（￥）
			BigDecimal ordersMoney = ordersItem.getPayment().add(ordersItem.getCustomsCode() != null ? ordersItem.getCustomsCode() : new BigDecimal("0.000")).setScale(3, BigDecimal.ROUND_HALF_UP);
			ordersItem.setOriginalMoney(originalMoney);
			ordersItem.setOrdersMoney(ordersMoney);
		}else{
			ordersItem.setPayment(totalAmount);
			ordersItem.setWeight(totalWeight);
			ordersItem.setOriginalMoney(new BigDecimal("0.000"));
			ordersItem.setOrdersMoney(new BigDecimal("0.000"));
		}
		CurrentUtil.setBaseBeanByModify(ordersItem);
		//修改订单信息
		int result = ordersMapper.updateByPrimaryKeySelective(ordersItem);
		//判断订单是否缺货
		ordersMapper.judgeOrderIsStockout(ordersItem.getOrdersId());
		if(result > 0){
			addOrderLog(ordersItem.getOrdersId(), "修改订单商品物流信息", OrderLogConstant.UPDATE_PRODUCT_LOGIST, "修改订单id为【"+ordersItem.getOrdersId()+"】商品物流信息",enterpriseId);
		}
		return result;
	}

	/**
     * 根据订单编号查询订单id
     * @param names
     * @return
     * @throws ServiceException
     */
	@Override
	public Map<String, Object> queryOrderIdsByName(String platformOrderIds) throws ServiceException {
		StringBuffer names = new StringBuffer();
		//存放订单id
		String idList  = "";
		//存放错误列表信息
		List<Map<String, Object>> errorList = new ArrayList<Map<String, Object>>();
		if(StringUtils.isNotBlank(platformOrderIds)){//订单编号不为空
			platformOrderIds = platformOrderIds.trim();
			String[] orderCodeArr = platformOrderIds.split("\n");
			if(orderCodeArr.length > 0){
				//遍历数组
				for (String orderCode : orderCodeArr) {
					if(StringUtils.isNotBlank(orderCode)){//订单编号不为空
						names.append(orderCode.trim()).append(",");
					}
				}
			}
		}
		
		if(StringUtils.isNotBlank(names.toString())){
			names = names.deleteCharAt(names.lastIndexOf(","));
			List<Map<String, Object>> result = ordersMapper.queryOrderIdsByName(names.toString());
			if(!result.isEmpty()){//结果不为空
				for (int i = 0; i < result.size(); i++) {
					Map<String, Object> resultMap = result.get(i);
					Map<String, Object> tempMap = new HashMap<String, Object>();
					Object ids = resultMap.get("p_ids");
					Object codes = resultMap.get("pcode");
					if(ids != null){
						idList += "," + ids;
					}
					if(codes != null){
						tempMap.put((String) resultMap.get("pcode"), resultMap.get("p_msg"));
						errorList.add(tempMap);
					}
				}
			}
		}
		
		if(idList.length() >0){
			idList = idList.replaceFirst(",", "");
		}
		
		Map<String, Object> data = new HashMap<String, Object>();
		data.put("ids", idList);
		data.put("errorList", errorList);
		return data;
	}
	
}
