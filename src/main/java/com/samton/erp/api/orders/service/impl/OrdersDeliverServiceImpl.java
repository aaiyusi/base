/**
 * 
 */
package com.samton.erp.api.orders.service.impl;

import java.math.BigDecimal;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Service;

import com.samton.erp.api.goods.service.IGoodsService;
import com.samton.erp.api.goods.service.IGoodsStorageService;
import com.samton.erp.api.orders.bean.entity.TErpOrders;
import com.samton.erp.api.orders.bean.entity.TErpOrdersDeliver;
import com.samton.erp.api.orders.bean.entity.vo.OrderGoodsVo;
import com.samton.erp.api.orders.bean.entity.vo.OrdersDeliverVo;
import com.samton.erp.api.orders.constant.OrderExpCodeConstant;
import com.samton.erp.api.orders.constant.OrderLogConstant;
import com.samton.erp.api.orders.constant.OrderStateConstant;
import com.samton.erp.api.orders.dao.TErpOrdersDeliverMapper;
import com.samton.erp.api.orders.service.IOrdersDeliverService;
import com.samton.erp.api.orders.service.IOrdersService;
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
 * @Description:订单发货service实现类
 * @author:     lijianzhou
 * @date:       2016年4月8日
 * Copyright (c) 2015, Samton. All rights reserved
 */
@Service("ordersDeliverService")
public class OrdersDeliverServiceImpl implements IOrdersDeliverService {

	@Resource
	private TErpOrdersDeliverMapper ordersDeliverMapper;
	
	@Resource
	private IOrdersService ordersService;
	
	@Resource
	private IGoodsService goodsService;
	
	@Resource
	private IGoodsStorageService goodsStorageService;
	
	/**
	 * 新增订单发货结果
	 * @param deliverInfo
	 * @return
	 * @throws ServiceException
	 */
	@Override
	public int addOrdersDeliver(TErpOrdersDeliver deliverInfo) throws ServiceException {
		//获取当前登录用户信息
		UserCacheBean userCacheBean = CurrentUtil.getCurrentUser();
		//获取企业信息
		long enterpriseId = userCacheBean.getEnterpriseId();
		//获取当前用户id
		long userId = userCacheBean.getUserId();
		deliverInfo.setState(StateConstant.ADD);
		deliverInfo.setEnterpriseId(enterpriseId);
		deliverInfo.setDeliverResult("1");
		deliverInfo.setDeliverUserId(userId);
		deliverInfo.setDeliverTime(new Date());
		CurrentUtil.setBaseBeanByInsert(deliverInfo);
		return ordersDeliverMapper.insertSelective(deliverInfo);
	}

	/**
	 * 加载订单发货结果分页列表
	 * @param jqParamBean
	 * @return
	 */
	@Override
	public Pagination<OrdersDeliverVo> queryOrdersDeliverList(JqParamBean jqParamBean) throws Exception {
		//封装分页参数
		Pagination<OrdersDeliverVo> pagination = PageContext.initialize(jqParamBean.getPage(), jqParamBean.getRows());
		//数据库操作
		List<OrdersDeliverVo> orderDeliverList =ordersDeliverMapper.queryOrdersDeliverList(jqParamBean, pagination.getRowBounds());
		//返回数据
		pagination.setData(orderDeliverList);
		return pagination;
	}

	/**
	 * 订单称重出库--单扫单出
	 * @param scanType
	 * @param orderCode
	 * @param trackNumber
	 * @param orderweight
	 * @param weightDigit
	 * @return
	 * @throws ServiceException
	 */
	@Override
	public Map<String, Object> sendOrderDeliver(String scanType,String orderCode, String trackNumber, String orderweight,String weightDigit) throws ServiceException {
		//获取当前登录用户信息
		UserCacheBean userCacheBean = CurrentUtil.getCurrentUser();
		//获取企业信息
		long enterpriseId = userCacheBean.getEnterpriseId();
		//发货标志
		boolean flag = true;
		TErpOrdersDeliver deliver = new TErpOrdersDeliver();
		BigDecimal oldtotalWeight = new BigDecimal(0);
		//封装结果参数
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("code", 1);//发货成功
		//仅订单编号扫描发货
		if("type1".equals(scanType)){
			if(StringUtils.isNotBlank(orderCode)){//订单编号不为空
				//根据订单编号查询订单信息
				TErpOrders orders = ordersService.queryOrderInfoByName(orderCode,null,null);
				if(orders != null){
					if(orders.getOrderState() == 0){
						result.put("code", -3);//禁止发货
						flag = false;
					}else if(orders.getOrderState() == 3){
						result.put("code", -4);//已发货
						flag = false;
					}else if(orders.getOrderState() == 3){
						result.put("code", -5);//作废
						flag = false;
					}
					
					//表示可以发货
					if(flag){
						deliver.setOrdersId(orders.getOrdersId());
						//根据订单ID查询商品信息
						List<OrderGoodsVo> goodsList = ordersService.findOrderGoods(orders.getOrdersId());
						if(goodsList.isEmpty()){//不存在商品
							deliver.setDeductStorage((short)0);
							deliver.setRemark("未找到订单项");
							//记录结果订单出库
							addOrdersDeliver(deliver);
							//同时将该订单标记为已发货
							TErpOrders orderInfo = new TErpOrders();
							orderInfo.setOrdersId(orders.getOrdersId());
							orderInfo.setOrderState(OrderStateConstant.ORDER_ALREADY_SHIP);
							orderInfo.setIsOutstorage((short)1);
							int status = ordersService.updateOrder(orderInfo);
							if(status > 0){
								result.put("weight", oldtotalWeight);
								//记录日志
								ordersService.addOrderLog(orders.getOrdersId(), "修改订单基础信息", OrderLogConstant.UPDATE_ORDER, "使用称重出库--单扫单出功能发货成功,具体信息进称重出库扫描结果中查询.重量【"+oldtotalWeight+"g】,order表中orderstatus被改成3(已发货)了",enterpriseId);
							}
						}else{
							//发货
							ordersService.deliverGoods(goodsList);
							deliver.setDeductStorage((short)1);
							//记录结果订单出库
							addOrdersDeliver(deliver);
							
							//同时将该订单标记为已发货
							TErpOrders orderInfo = new TErpOrders();
							orderInfo.setOrdersId(orders.getOrdersId());
							orderInfo.setOrderState(OrderStateConstant.ORDER_ALREADY_SHIP);
							orderInfo.setIsOutstorage((short)1);
							orderInfo.setDeliverTime(new Date());
							int status = ordersService.updateOrder(orderInfo);
							if(status > 0){
								result.put("weight", oldtotalWeight);
								//记录日志
								ordersService.addOrderLog(orders.getOrdersId(), "修改订单基础信息", OrderLogConstant.UPDATE_ORDER, "使用称重出库--单扫单出功能发货成功,具体信息进称重出库扫描结果中查询.重量【"+oldtotalWeight+"g】,order表中orderstatus被改成3(已发货)了",enterpriseId);
							}
						}
					}
				}else{
					result.put("code", -2);//订单不存在
				}
			}else{
				result.put("code", -1);//订单编号为空
			}
		}else if("type2".equals(scanType)){//订单编号和物流单号发货
			if(StringUtils.isNotBlank(orderCode) && StringUtils.isNotBlank(trackNumber)){//订单编号和货运单号不为空
				//根据订单编号查询订单信息
				TErpOrders orders = ordersService.queryOrderInfoByName(orderCode,trackNumber,null);
				if(orders != null){
					if(orders.getOrderState() == 0){
						result.put("code", -3);//禁止发货
						flag = false;
					}else if(orders.getOrderState() == 3){
						result.put("code", -4);//已发货
						flag = false;
					}else if(orders.getOrderState() == 3){
						result.put("code", -5);//作废
						flag = false;
					}
					
					//表示可以发货
					if(flag){
						deliver.setOrdersId(orders.getOrdersId());
						//根据订单ID查询商品信息
						List<OrderGoodsVo> goodsList = ordersService.findOrderGoods(orders.getOrdersId());
						if(goodsList.isEmpty()){//不存在商品
							deliver.setDeductStorage((short)0);
							deliver.setRemark("未找到订单项");
							//记录结果订单出库
							addOrdersDeliver(deliver);
							//同时将该订单标记为已发货
							TErpOrders orderInfo = new TErpOrders();
							orderInfo.setOrdersId(orders.getOrdersId());
							orderInfo.setOrderState(OrderStateConstant.ORDER_ALREADY_SHIP);
							orderInfo.setIsOutstorage((short)1);
							int status = ordersService.updateOrder(orderInfo);
							if(status > 0){
								result.put("weight", oldtotalWeight);
								//记录日志
								ordersService.addOrderLog(orders.getOrdersId(), "修改订单基础信息", OrderLogConstant.UPDATE_ORDER, "使用称重出库--单扫单出功能发货成功,具体信息进称重出库扫描结果中查询.重量【"+oldtotalWeight+"g】,order表中orderstatus被改成3(已发货)了",enterpriseId);
							}
						}else{
							//发货
							ordersService.deliverGoods(goodsList);
							deliver.setDeductStorage((short)1);
							//记录结果订单出库
							addOrdersDeliver(deliver);
							
							//同时将该订单标记为已发货
							TErpOrders orderInfo = new TErpOrders();
							orderInfo.setOrdersId(orders.getOrdersId());
							orderInfo.setOrderState(OrderStateConstant.ORDER_ALREADY_SHIP);
							orderInfo.setIsOutstorage((short)1);
							orderInfo.setDeliverTime(new Date());
							int status = ordersService.updateOrder(orderInfo);
							if(status > 0){
								result.put("weight", oldtotalWeight);
								//记录日志
								ordersService.addOrderLog(orders.getOrdersId(), "修改订单基础信息", OrderLogConstant.UPDATE_ORDER, "使用称重出库--单扫单出功能发货成功,具体信息进称重出库扫描结果中查询.重量【"+oldtotalWeight+"g】,order表中orderstatus被改成3(已发货)了",enterpriseId);
							}
						}
					}
				}else{
					result.put("code", -2);//订单不存在
				}
			}else{
				result.put("code", -1);//订单编号和货运单号为空
			}
		}else if("type5".equals(scanType)){//仅物流单号发货
			if(StringUtils.isNotBlank(trackNumber)){//货运单号不为空
				//根据订单编号查询订单信息
				TErpOrders orders = ordersService.queryOrderInfoByName(null,trackNumber,null);
				if(orders != null){
					if(orders.getOrderState() == 0){
						result.put("code", -3);//禁止发货
						flag = false;
					}else if(orders.getOrderState() == 3){
						result.put("code", -4);//已发货
						flag = false;
					}else if(orders.getOrderState() == 3){
						result.put("code", -5);//作废
						flag = false;
					}
					
					//表示可以发货
					if(flag){
						deliver.setOrdersId(orders.getOrdersId());
						//根据订单ID查询商品信息
						List<OrderGoodsVo> goodsList = ordersService.findOrderGoods(orders.getOrdersId());
						if(goodsList.isEmpty()){//不存在商品
							deliver.setDeductStorage((short)0);
							deliver.setRemark("未找到订单项");
							//记录结果订单出库
							addOrdersDeliver(deliver);
							
							//同时将该订单标记为已发货
							TErpOrders orderInfo = new TErpOrders();
							orderInfo.setOrdersId(orders.getOrdersId());
							orderInfo.setOrderState(OrderStateConstant.ORDER_ALREADY_SHIP);
							orderInfo.setIsOutstorage((short)1);
							int status = ordersService.updateOrder(orderInfo);
							if(status > 0){
								result.put("weight", oldtotalWeight);
								//记录日志
								ordersService.addOrderLog(orders.getOrdersId(), "修改订单基础信息", OrderLogConstant.UPDATE_ORDER, "使用称重出库--单扫单出功能发货成功,具体信息进称重出库扫描结果中查询.重量【"+oldtotalWeight+"g】,order表中orderstatus被改成3(已发货)了",enterpriseId);
							}
						}else{
							//发货
							ordersService.deliverGoods(goodsList);
							deliver.setDeductStorage((short)1);
							//记录结果订单出库
							addOrdersDeliver(deliver);
							
							//同时将该订单标记为已发货
							TErpOrders orderInfo = new TErpOrders();
							orderInfo.setOrdersId(orders.getOrdersId());
							orderInfo.setOrderState(OrderStateConstant.ORDER_ALREADY_SHIP);
							orderInfo.setIsOutstorage((short)1);
							orderInfo.setDeliverTime(new Date());
							int status = ordersService.updateOrder(orderInfo);
							if(status > 0){
								result.put("weight", oldtotalWeight);
								//记录日志
								ordersService.addOrderLog(orders.getOrdersId(), "修改订单基础信息", OrderLogConstant.UPDATE_ORDER, "使用称重出库--单扫单出功能发货成功,具体信息进称重出库扫描结果中查询.重量【"+oldtotalWeight+"g】,order表中orderstatus被改成3(已发货)了",enterpriseId);
							}
						}
					}
				}else{
					result.put("code", -2);//订单不存在
				}
			}else{
				result.put("code", -1);//订单编号和货运单号为空
			}
		}else if("type3".equals(scanType)){//订单编号和订单重量发货方式
			if(StringUtils.isNotBlank(orderCode) && StringUtils.isNotBlank(orderweight)){//订单编号和订单重量不为空
				//根据订单编号查询订单信息
				TErpOrders orders = ordersService.queryOrderInfoByName(orderCode,null,null);
				if(orders != null){
					if(orders.getOrderState() == 0){
						result.put("code", -3);//禁止发货
						flag = false;
					}else if(orders.getOrderState() == 3){
						result.put("code", -4);//已发货
						flag = false;
					}else if(orders.getOrderState() == 3){
						result.put("code", -5);//作废
						flag = false;
					}
					
					//表示可以发货
					if(flag){
						deliver.setOrdersId(orders.getOrdersId());
						//根据订单ID查询商品信息
						List<OrderGoodsVo> goodsList = ordersService.findOrderGoods(orders.getOrdersId());
						if(goodsList.isEmpty()){//不存在商品
							result.put("code", -6);//无商品
						}else{
							if(StringUtils.isNotBlank(weightDigit) && !"0".equals(weightDigit)){
								//先计算订单的总重量，然后与设置的差额比是否符合
								for (int i = 0; i < goodsList.size(); i++) {
									OrderGoodsVo goodsVO = goodsList.get(i);
									int orderCount = goodsVO.getCount();//订单数量
									BigDecimal weight = goodsVO.getWeight();//订单重量
									BigDecimal totalWeight = weight.multiply(new BigDecimal(orderCount));//总重量
									oldtotalWeight = oldtotalWeight.add(totalWeight);
								}
								
								oldtotalWeight = null2Zero(oldtotalWeight);
								BigDecimal wight = new BigDecimal(orderweight);
								wight = null2Zero(wight);
								BigDecimal weightSub = wight.subtract(oldtotalWeight);
								if(weightSub.compareTo(new BigDecimal(0)) < 0){
									weightSub = weightSub.multiply(new BigDecimal(-1));
								}
								BigDecimal digit = new BigDecimal(weightDigit).multiply(BigDecimal.valueOf(0.01));
								//实际重量与预估重量差额百分比超过预设差额百分比
								if(weightSub.compareTo(digit)  > 0){
									result.put("code", -6);//无商品
									return result;
								}
							}
							//发货
							ordersService.deliverGoods(goodsList);
							deliver.setDeductStorage((short)1);
							//记录结果订单出库
							addOrdersDeliver(deliver);
							
							//同时将该订单标记为已发货
							TErpOrders orderInfo = new TErpOrders();
							orderInfo.setOrdersId(orders.getOrdersId());
							orderInfo.setOrderState(OrderStateConstant.ORDER_ALREADY_SHIP);
							orderInfo.setIsOutstorage((short)1);
							orderInfo.setDeliverTime(new Date());
							int status = ordersService.updateOrder(orderInfo);
							if(status > 0){
								result.put("weight", null2Zero(oldtotalWeight));
								//记录日志
								ordersService.addOrderLog(orders.getOrdersId(), "修改订单基础信息", OrderLogConstant.UPDATE_ORDER, "使用称重出库--单扫单出功能发货成功,具体信息进称重出库扫描结果中查询.重量【"+null2Zero(oldtotalWeight)+"g】,order表中orderstatus被改成3(已发货)了",enterpriseId);
							}
						}
					}
				}else{
					result.put("code", -2);//订单不存在
				}
			}else{
				result.put("code", -1);//订单编号和货运单号为空
			}
		}else if("type4".equals(scanType)){//订单编号,物流单号,订单重量发货
			if(StringUtils.isNotBlank(orderCode) && StringUtils.isNotBlank(trackNumber) && StringUtils.isNotBlank(orderweight)){//订单编号、物流单号和订单重量不为空
				//根据订单编号查询订单信息
				TErpOrders orders = ordersService.queryOrderInfoByName(orderCode,trackNumber,null);
				if(orders != null){
					if(orders.getOrderState() == 0){
						result.put("code", -3);//禁止发货
						flag = false;
					}else if(orders.getOrderState() == 3){
						result.put("code", -4);//已发货
						flag = false;
					}else if(orders.getOrderState() == 3){
						result.put("code", -5);//作废
						flag = false;
					}
					
					//表示可以发货
					if(flag){
						deliver.setOrdersId(orders.getOrdersId());
						//根据订单ID查询商品信息
						List<OrderGoodsVo> goodsList = ordersService.findOrderGoods(orders.getOrdersId());
						if(goodsList.isEmpty()){//不存在商品
							result.put("code", -6);//无商品
						}else{
							if(StringUtils.isNotBlank(weightDigit) && !"0".equals(weightDigit)){
								//先计算订单的总重量，然后与设置的差额比是否符合
								for (int i = 0; i < goodsList.size(); i++) {
									OrderGoodsVo goodsVO = goodsList.get(i);
									int orderCount = goodsVO.getCount();//订单数量
									BigDecimal weight = goodsVO.getWeight();//订单重量
									BigDecimal totalWeight = weight.multiply(new BigDecimal(orderCount));//总重量
									oldtotalWeight = oldtotalWeight.add(totalWeight);
								}
								
								oldtotalWeight = null2Zero(oldtotalWeight);
								BigDecimal wight = new BigDecimal(orderweight);
								wight = null2Zero(wight);
								BigDecimal weightSub = wight.subtract(oldtotalWeight);
								if(weightSub.compareTo(new BigDecimal(0)) < 0){
									weightSub = weightSub.multiply(new BigDecimal(-1));
								}
								BigDecimal digit = new BigDecimal(weightDigit).multiply(BigDecimal.valueOf(0.01));
								//实际重量与预估重量差额百分比超过预设差额百分比
								if(weightSub.compareTo(digit)  > 0){
									result.put("code", -6);//无商品
									return result;
								}
							}
							//发货
							ordersService.deliverGoods(goodsList);
							deliver.setDeductStorage((short)1);
							//记录结果订单出库
							addOrdersDeliver(deliver);
							
							//同时将该订单标记为已发货
							TErpOrders orderInfo = new TErpOrders();
							orderInfo.setOrdersId(orders.getOrdersId());
							orderInfo.setOrderState(OrderStateConstant.ORDER_ALREADY_SHIP);
							orderInfo.setIsOutstorage((short)1);
							orderInfo.setDeliverTime(new Date());
							int status = ordersService.updateOrder(orderInfo);
							if(status > 0){
								result.put("weight", null2Zero(oldtotalWeight));
								//记录日志
								ordersService.addOrderLog(orders.getOrdersId(), "修改订单基础信息", OrderLogConstant.UPDATE_ORDER, "使用称重出库--单扫单出功能发货成功,具体信息进称重出库扫描结果中查询.重量【"+null2Zero(oldtotalWeight)+"g】,order表中orderstatus被改成3(已发货)了",enterpriseId);
							}
						}
					}
				}else{
					result.put("code", -2);//订单不存在
				}
			}else{
				result.put("code", -1);//订单编号、物流单号和货运单号为空
			}
		}else if("type6".equals(scanType)){//扫描货运单号和订单重量  发货
			if(StringUtils.isNotBlank(trackNumber) && StringUtils.isNotBlank(orderweight)){//订单编号、物流单号和订单重量不为空
				//根据订单编号查询订单信息
				TErpOrders orders = ordersService.queryOrderInfoByName(null,trackNumber,null);
				if(orders != null){
					if(orders.getOrderState() == 0){
						result.put("code", -3);//禁止发货
						flag = false;
					}else if(orders.getOrderState() == 3){
						result.put("code", -4);//已发货
						flag = false;
					}else if(orders.getOrderState() == 3){
						result.put("code", -5);//作废
						flag = false;
					}
					
					//表示可以发货
					if(flag){
						deliver.setOrdersId(orders.getOrdersId());
						//根据订单ID查询商品信息
						List<OrderGoodsVo> goodsList = ordersService.findOrderGoods(orders.getOrdersId());
						if(goodsList.isEmpty()){//不存在商品
							result.put("code", -6);//无商品
						}else{
							if(StringUtils.isNotBlank(weightDigit) && !"0".equals(weightDigit)){
								//先计算订单的总重量，然后与设置的差额比是否符合
								for (int i = 0; i < goodsList.size(); i++) {
									OrderGoodsVo goodsVO = goodsList.get(i);
									int orderCount = goodsVO.getCount();//订单数量
									BigDecimal weight = goodsVO.getWeight();//订单重量
									BigDecimal totalWeight = weight.multiply(new BigDecimal(orderCount));//总重量
									oldtotalWeight = oldtotalWeight.add(totalWeight);
								}
								
								oldtotalWeight = null2Zero(oldtotalWeight);
								BigDecimal wight = new BigDecimal(orderweight);
								wight = null2Zero(wight);
								BigDecimal weightSub = wight.subtract(oldtotalWeight);
								if(weightSub.compareTo(new BigDecimal(0)) < 0){
									weightSub = weightSub.multiply(new BigDecimal(-1));
								}
								BigDecimal digit = new BigDecimal(weightDigit).multiply(BigDecimal.valueOf(0.01));
								//实际重量与预估重量差额百分比超过预设差额百分比
								if(weightSub.compareTo(digit)  > 0){
									result.put("code", -6);//无商品
									return result;
								}
							}
							//发货
							ordersService.deliverGoods(goodsList);
							deliver.setDeductStorage((short)1);
							//记录结果订单出库
							addOrdersDeliver(deliver);
							
							//同时将该订单标记为已发货
							TErpOrders orderInfo = new TErpOrders();
							orderInfo.setOrdersId(orders.getOrdersId());
							orderInfo.setOrderState(OrderStateConstant.ORDER_ALREADY_SHIP);
							orderInfo.setIsOutstorage((short)1);
							orderInfo.setDeliverTime(new Date());
							int status = ordersService.updateOrder(orderInfo);
							if(status > 0){
								result.put("weight", null2Zero(oldtotalWeight));
								//记录日志
								ordersService.addOrderLog(orders.getOrdersId(), "修改订单基础信息", OrderLogConstant.UPDATE_ORDER, "使用称重出库--单扫单出功能发货成功,具体信息进称重出库扫描结果中查询.重量【"+null2Zero(oldtotalWeight)+"g】,order表中orderstatus被改成3(已发货)了",enterpriseId);
							}
						}
					}
				}else{
					result.put("code", -2);//订单不存在
				}
			}else{
				result.put("code", -1);//订单编号、物流单号和货运单号为空
			}
		}
		return result;
	}
	
	public BigDecimal null2Zero(BigDecimal arg){
	    return arg==null ? BigDecimal.ZERO : arg ;
	}

	/**
	 * 订单称重出库--单扫批出
	 * @param scanType
	 * @param scanContent
	 * @return
	 * @throws ServiceException
	 */
	@Override
	public Map<String, Object> batchSendOrderDeliver(String scanType,String scanContent) throws ServiceException {
		//获取当前登录用户信息
		UserCacheBean userCacheBean = CurrentUtil.getCurrentUser();
		//获取企业信息
		long enterpriseId = userCacheBean.getEnterpriseId();
		
		//封装结果参数
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("code", 1);//发货成功
		//发货标志
		boolean flag = true;
		TErpOrdersDeliver deliver = new TErpOrdersDeliver();
		BigDecimal oldtotalWeight = new BigDecimal(0);
		//仅订单编号 发货
		if("type1".equals(scanType)){
			String[] contentArr = scanContent.split("\n");
			if(contentArr.length > 0){
				for (int i = 0; i < contentArr.length; i++) {
					String tempVal = contentArr[i];
					if(StringUtils.isNotBlank(tempVal)){
						try{
							String[] tempArr = tempVal.split(",");
							String orderCode = tempArr[0];
							//根据订单编号查询订单信息
							TErpOrders orders = ordersService.queryOrderInfoByName(orderCode,null,null);
							if(orders != null){//订单不存在
								if(orders.getOrderState() == 0){
//											result.put("code", -3);//禁止发货
									flag = false;
									continue;
								}else if(orders.getOrderState() == 3){
//											result.put("code", -4);//已发货
									flag = false;
									continue;
								}else if(orders.getOrderState() == 3){
//											result.put("code", -5);//作废
									flag = false;
									continue;
								}
								
								//表示可以发货
								if(flag){
									deliver.setOrdersId(orders.getOrdersId());
									//根据订单ID查询商品信息
									List<OrderGoodsVo> goodsList = ordersService.findOrderGoods(orders.getOrdersId());
									if(goodsList.isEmpty()){//不存在商品
										deliver.setDeductStorage((short)0);
										deliver.setRemark("未找到订单项");
										//记录结果订单出库
										addOrdersDeliver(deliver);
										//同时将该订单标记为已发货
										TErpOrders orderInfo = new TErpOrders();
										orderInfo.setOrdersId(orders.getOrdersId());
										orderInfo.setOrderState(OrderStateConstant.ORDER_ALREADY_SHIP);
										orderInfo.setIsOutstorage((short)1);
										orderInfo.setDeliverTime(new Date());
										int status = ordersService.updateOrder(orderInfo);
										if(status > 0){
											//记录日志
											ordersService.addOrderLog(orders.getOrdersId(), "修改订单基础信息", OrderLogConstant.UPDATE_ORDER, "使用称重出库--单扫批出功能发货成功,具体信息进称重出库扫描结果中查询.重量【"+oldtotalWeight+"g】,order表中orderstatus被改成3(已发货)了",enterpriseId);
										}
									}else{
										//发货
										ordersService.deliverGoods(goodsList);
										deliver.setDeductStorage((short)1);
										//记录结果订单出库
										addOrdersDeliver(deliver);
										
										//同时将该订单标记为已发货
										TErpOrders orderInfo = new TErpOrders();
										orderInfo.setOrdersId(orders.getOrdersId());
										orderInfo.setOrderState(OrderStateConstant.ORDER_ALREADY_SHIP);
										orderInfo.setIsOutstorage((short)1);
										orderInfo.setDeliverTime(new Date());
										int status = ordersService.updateOrder(orderInfo);
										if(status > 0){
											//记录日志
											ordersService.addOrderLog(orders.getOrdersId(), "修改订单基础信息", OrderLogConstant.UPDATE_ORDER, "使用称重出库--单扫批出功能发货成功,具体信息进称重出库扫描结果中查询.重量【"+oldtotalWeight+"g】,order表中orderstatus被改成3(已发货)了",enterpriseId);
										}
									}
								}
							}
						}catch(Exception e){
							throw new ServiceException(OrderExpCodeConstant.PARAMTER_ILLEGAL, "参数值不对！");
						}
					}else{
						throw new ServiceException(ExpCodeConstant.PARAMTER_ILLEGAL, "非法参数---输入值scanContent为空！");
					}
				}
			}
		}else if("type2".equals(scanType)){//订单编号和物流单号
			String[] contentArr = scanContent.split("\n");
			if(contentArr.length > 0){
				for (int i = 0; i < contentArr.length; i++) {
					String tempVal = contentArr[i];
					if(StringUtils.isNotBlank(tempVal)){
						try{
							String[] tempArr = tempVal.split(",");
							String orderCode = tempArr[0];
							String trackNumber = tempArr[1];
							if(StringUtils.isNotBlank(orderCode) && StringUtils.isNotBlank(trackNumber)){
								//根据订单编号查询订单信息
								TErpOrders orders = ordersService.queryOrderInfoByName(orderCode,trackNumber,null);
								if(orders != null){
									if(orders.getOrderState() == 0){
//												result.put("code", -3);//禁止发货
										flag = false;
										continue;
									}else if(orders.getOrderState() == 3){
//												result.put("code", -4);//已发货
										flag = false;
										continue;
									}else if(orders.getOrderState() == 3){
//												result.put("code", -5);//作废
										flag = false;
										continue;
									}
									
									//表示可以发货
									if(flag){
										deliver.setOrdersId(orders.getOrdersId());
										//根据订单ID查询商品信息
										List<OrderGoodsVo> goodsList = ordersService.findOrderGoods(orders.getOrdersId());
										if(goodsList.isEmpty()){//不存在商品
											deliver.setDeductStorage((short)0);
											deliver.setRemark("未找到订单项");
											//记录结果订单出库
											addOrdersDeliver(deliver);
											//同时将该订单标记为已发货
											TErpOrders orderInfo = new TErpOrders();
											orderInfo.setOrdersId(orders.getOrdersId());
											orderInfo.setOrderState(OrderStateConstant.ORDER_ALREADY_SHIP);
											orderInfo.setIsOutstorage((short)1);
											orderInfo.setDeliverTime(new Date());
											int status = ordersService.updateOrder(orderInfo);
											if(status > 0){
												//记录日志
												ordersService.addOrderLog(orders.getOrdersId(), "修改订单基础信息", OrderLogConstant.UPDATE_ORDER, "使用称重出库--单扫批出功能发货成功,具体信息进称重出库扫描结果中查询.重量【"+oldtotalWeight+"g】,order表中orderstatus被改成3(已发货)了",enterpriseId);
											}
										}else{
											//发货
											ordersService.deliverGoods(goodsList);
											deliver.setDeductStorage((short)1);
											//记录结果订单出库
											addOrdersDeliver(deliver);
											
											//同时将该订单标记为已发货
											TErpOrders orderInfo = new TErpOrders();
											orderInfo.setOrdersId(orders.getOrdersId());
											orderInfo.setOrderState(OrderStateConstant.ORDER_ALREADY_SHIP);
											orderInfo.setIsOutstorage((short)1);
											orderInfo.setDeliverTime(new Date());
											int status = ordersService.updateOrder(orderInfo);
											if(status > 0){
												//记录日志
												ordersService.addOrderLog(orders.getOrdersId(), "修改订单基础信息", OrderLogConstant.UPDATE_ORDER, "使用称重出库--单扫批出功能发货成功,具体信息进称重出库扫描结果中查询.重量【"+oldtotalWeight+"g】,order表中orderstatus被改成3(已发货)了",enterpriseId);
											}
										}
									}
								}
							}else{
								throw new ServiceException(ExpCodeConstant.PARAMTER_ILLEGAL, "非法参数---订单编号为空或货运单号为空！");
							}
						}catch(Exception e){
							throw new ServiceException(OrderExpCodeConstant.PARAMTER_ILLEGAL, "参数值不对！");
						}
					}
				}
			}else{
				throw new ServiceException(ExpCodeConstant.PARAMTER_ILLEGAL, "非法参数---输入值scanContent为空！");
			}
		}else if("type3".equals(scanType)){//订单编号和订单重量 发货
			String[] contentArr = scanContent.split("\n");
			if(contentArr.length > 0){
				for (int i = 0; i < contentArr.length; i++) {
					String tempVal = contentArr[i];
					if(StringUtils.isNotBlank(tempVal)){
						try{
							String[] tempArr = tempVal.split(",");
							String orderCode = tempArr[0];
							String orderweight = tempArr[1];
							if(StringUtils.isNotBlank(orderCode) && StringUtils.isNotBlank(orderweight)){//订单编号和订单重量不为空
								//根据订单编号查询订单信息
								TErpOrders orders = ordersService.queryOrderInfoByName(orderCode,null,null);
								if(orders != null){
									if(orders.getOrderState() == 0){
//												result.put("code", -3);//禁止发货
										flag = false;
										continue;
									}else if(orders.getOrderState() == 3){
//												result.put("code", -4);//已发货
										flag = false;
										continue;
									}else if(orders.getOrderState() == 3){
//												result.put("code", -5);//作废
										flag = false;
										continue;
									}
									
									//表示可以发货
									if(flag){
										deliver.setOrdersId(orders.getOrdersId());
										//根据订单ID查询商品信息
										List<OrderGoodsVo> goodsList = ordersService.findOrderGoods(orders.getOrdersId());
										if(goodsList.isEmpty()){//不存在商品
											deliver.setDeductStorage((short)0);
											deliver.setRemark("未找到订单项");
											//记录结果订单出库
											addOrdersDeliver(deliver);
											//同时将该订单标记为已发货
											TErpOrders orderInfo = new TErpOrders();
											orderInfo.setOrdersId(orders.getOrdersId());
											orderInfo.setOrderState(OrderStateConstant.ORDER_ALREADY_SHIP);
											orderInfo.setIsOutstorage((short)1);
											orderInfo.setDeliverTime(new Date());
											int status = ordersService.updateOrder(orderInfo);
											if(status > 0){
												//记录日志
												ordersService.addOrderLog(orders.getOrdersId(), "修改订单基础信息", OrderLogConstant.UPDATE_ORDER, "使用称重出库--单扫批出功能发货成功,具体信息进称重出库扫描结果中查询.重量【"+oldtotalWeight+"g】,order表中orderstatus被改成3(已发货)了",enterpriseId);
											}
										}else{
											//发货
											ordersService.deliverGoods(goodsList);
											deliver.setDeductStorage((short)1);
											//记录结果订单出库
											addOrdersDeliver(deliver);
											
											//同时将该订单标记为已发货
											TErpOrders orderInfo = new TErpOrders();
											orderInfo.setOrdersId(orders.getOrdersId());
											orderInfo.setOrderState(OrderStateConstant.ORDER_ALREADY_SHIP);
											orderInfo.setIsOutstorage((short)1);
											orderInfo.setDeliverTime(new Date());
											int status = ordersService.updateOrder(orderInfo);
											if(status > 0){
												result.put("weight", null2Zero(oldtotalWeight));
												//记录日志
												ordersService.addOrderLog(orders.getOrdersId(), "修改订单基础信息", OrderLogConstant.UPDATE_ORDER, "使用称重出库--单扫批出功能发货成功,具体信息进称重出库扫描结果中查询.重量【"+null2Zero(oldtotalWeight)+"g】,order表中orderstatus被改成3(已发货)了",enterpriseId);
											}
										}
									}
								}
							}else{
								throw new ServiceException(ExpCodeConstant.PARAMTER_ILLEGAL, "非法参数---订单编号为空或订单重量为空！");
							}
						}catch(Exception e){
							throw new ServiceException(OrderExpCodeConstant.PARAMTER_ILLEGAL, "参数值不对！");
						}
					}
				}
			}
		}else if("type4".equals(scanType)){//订单编号,物流单号,订单重量 发货
			String[] contentArr = scanContent.split("\n");
			if(contentArr.length > 0){
				for (int i = 0; i < contentArr.length; i++) {
					String tempVal = contentArr[i];
					if(StringUtils.isNotBlank(tempVal)){
						try{
							String[] tempArr = tempVal.split(",");
							String orderCode = tempArr[0];
							String trackNumber = tempArr[1];
							String orderweight = tempArr[2];
							if(StringUtils.isNotBlank(orderCode) && StringUtils.isNotBlank(trackNumber) && StringUtils.isNotBlank(orderweight)){//订单编号、物流单号和订单重量不为空
								//根据订单编号查询订单信息
								TErpOrders orders = ordersService.queryOrderInfoByName(orderCode,trackNumber,null);
								if(orders != null){
									if(orders.getOrderState() == 0){
//												result.put("code", -3);//禁止发货
										flag = false;
										continue;
									}else if(orders.getOrderState() == 3){
//												result.put("code", -4);//已发货
										flag = false;
										continue;
									}else if(orders.getOrderState() == 3){
//												result.put("code", -5);//作废
										flag = false;
										continue;
									}
									
									//表示可以发货
									if(flag){
										deliver.setOrdersId(orders.getOrdersId());
										//根据订单ID查询商品信息
										List<OrderGoodsVo> goodsList = ordersService.findOrderGoods(orders.getOrdersId());
										if(goodsList.isEmpty()){//不存在商品
											deliver.setDeductStorage((short)0);
											deliver.setRemark("未找到订单项");
											//记录结果订单出库
											addOrdersDeliver(deliver);
											//同时将该订单标记为已发货
											TErpOrders orderInfo = new TErpOrders();
											orderInfo.setOrdersId(orders.getOrdersId());
											orderInfo.setOrderState(OrderStateConstant.ORDER_ALREADY_SHIP);
											orderInfo.setIsOutstorage((short)1);
											orderInfo.setDeliverTime(new Date());
											int status = ordersService.updateOrder(orderInfo);
											if(status > 0){
												//记录日志
												ordersService.addOrderLog(orders.getOrdersId(), "修改订单基础信息", OrderLogConstant.UPDATE_ORDER, "使用称重出库--单扫批出功能发货成功,具体信息进称重出库扫描结果中查询.重量【"+oldtotalWeight+"g】,order表中orderstatus被改成3(已发货)了",enterpriseId);
											}
										}else{
											//发货
											ordersService.deliverGoods(goodsList);
											deliver.setDeductStorage((short)1);
											//记录结果订单出库
											addOrdersDeliver(deliver);
											
											//同时将该订单标记为已发货
											TErpOrders orderInfo = new TErpOrders();
											orderInfo.setOrdersId(orders.getOrdersId());
											orderInfo.setOrderState(OrderStateConstant.ORDER_ALREADY_SHIP);
											orderInfo.setIsOutstorage((short)1);
											orderInfo.setDeliverTime(new Date());
											int status = ordersService.updateOrder(orderInfo);
											if(status > 0){
												//记录日志
												ordersService.addOrderLog(orders.getOrdersId(), "修改订单基础信息", OrderLogConstant.UPDATE_ORDER, "使用称重出库--单扫批出功能发货成功,具体信息进称重出库扫描结果中查询.重量【"+null2Zero(oldtotalWeight)+"g】,order表中orderstatus被改成3(已发货)了",enterpriseId);
											}
										}
									}
								}
							}else{
								throw new ServiceException(ExpCodeConstant.PARAMTER_ILLEGAL, "非法参数---订单编号或货运单号或订单重量为空！");
							}
						}catch(Exception e){
							throw new ServiceException(OrderExpCodeConstant.PARAMTER_ILLEGAL, "参数值不对！");
						}
					}
				}
			}
		}else if("type5".equals(scanType)){//仅物流单号 发货
			String[] contentArr = scanContent.split("\n");
			if(contentArr.length > 0){
				for (int i = 0; i < contentArr.length; i++) {
					String tempVal = contentArr[i];
					if(StringUtils.isNotBlank(tempVal)){
						try{
							String[] tempArr = tempVal.split(",");
							String trackNumber = tempArr[0];
							if(StringUtils.isNotBlank(trackNumber)){//货运单号不为空
								//根据订单编号查询订单信息
								TErpOrders orders = ordersService.queryOrderInfoByName(null,trackNumber,null);
								if(orders != null){
									if(orders.getOrderState() == 0){
//												result.put("code", -3);//禁止发货
										flag = false;
										continue;
									}else if(orders.getOrderState() == 3){
//												result.put("code", -4);//已发货
										flag = false;
										continue;
									}else if(orders.getOrderState() == 3){
//												result.put("code", -5);//作废
										flag = false;
										continue;
									}
									
									//表示可以发货
									if(flag){
										deliver.setOrdersId(orders.getOrdersId());
										//根据订单ID查询商品信息
										List<OrderGoodsVo> goodsList = ordersService.findOrderGoods(orders.getOrdersId());
										if(goodsList.isEmpty()){//不存在商品
											deliver.setDeductStorage((short)0);
											deliver.setRemark("未找到订单项");
											//记录结果订单出库
											addOrdersDeliver(deliver);
											
											//同时将该订单标记为已发货
											TErpOrders orderInfo = new TErpOrders();
											orderInfo.setOrdersId(orders.getOrdersId());
											orderInfo.setOrderState(OrderStateConstant.ORDER_ALREADY_SHIP);
											orderInfo.setIsOutstorage((short)1);
											orderInfo.setDeliverTime(new Date());
											int status = ordersService.updateOrder(orderInfo);
											if(status > 0){
												//记录日志
												ordersService.addOrderLog(orders.getOrdersId(), "修改订单基础信息", OrderLogConstant.UPDATE_ORDER, "使用称重出库--单扫批出功能发货成功,具体信息进称重出库扫描结果中查询.重量【"+oldtotalWeight+"g】,order表中orderstatus被改成3(已发货)了",enterpriseId);
											}
										}else{
											//发货
											ordersService.deliverGoods(goodsList);
											deliver.setDeductStorage((short)1);
											//记录结果订单出库
											addOrdersDeliver(deliver);
											
											//同时将该订单标记为已发货
											TErpOrders orderInfo = new TErpOrders();
											orderInfo.setOrdersId(orders.getOrdersId());
											orderInfo.setOrderState(OrderStateConstant.ORDER_ALREADY_SHIP);
											orderInfo.setIsOutstorage((short)1);
											orderInfo.setDeliverTime(new Date());
											int status = ordersService.updateOrder(orderInfo);
											if(status > 0){
												//记录日志
												ordersService.addOrderLog(orders.getOrdersId(), "修改订单基础信息", OrderLogConstant.UPDATE_ORDER, "使用称重出库--单扫批出功能发货成功,具体信息进称重出库扫描结果中查询.重量【"+oldtotalWeight+"g】,order表中orderstatus被改成3(已发货)了",enterpriseId);
											}
										}
									}
								}
							}else{
								throw new ServiceException(ExpCodeConstant.PARAMTER_ILLEGAL, "非法参数---货运单号为空！");
							}
						}catch(Exception e){
							throw new ServiceException(OrderExpCodeConstant.PARAMTER_ILLEGAL, "参数值不对！");
						}
					}
				}
			}
		}else if("type6".equals(scanType)){//物流单号和订单重量 发货
			String[] contentArr = scanContent.split("\n");
			if(contentArr.length > 0){
				for (int i = 0; i < contentArr.length; i++) {
					String tempVal = contentArr[i];
					if(StringUtils.isNotBlank(tempVal)){
						try{
							String[] tempArr = tempVal.split(",");
							String trackNumber = tempArr[0];
							String orderweight = tempArr[1];
							if(StringUtils.isNotBlank(trackNumber) && StringUtils.isNotBlank(orderweight)){//订单编号、物流单号和订单重量不为空
								//根据订单编号查询订单信息
								TErpOrders orders = ordersService.queryOrderInfoByName(null,trackNumber,null);
								if(orders != null){
									if(orders.getOrderState() == 0){
//												result.put("code", -3);//禁止发货
										flag = false;
										continue;
									}else if(orders.getOrderState() == 3){
//												result.put("code", -4);//已发货
										flag = false;
										continue;
									}else if(orders.getOrderState() == 3){
//												result.put("code", -5);//作废
										flag = false;
										continue;
									}
									
									//表示可以发货
									if(flag){
										deliver.setOrdersId(orders.getOrdersId());
										//根据订单ID查询商品信息
										List<OrderGoodsVo> goodsList = ordersService.findOrderGoods(orders.getOrdersId());
										if(goodsList.isEmpty()){//不存在商品
											deliver.setDeductStorage((short)0);
											deliver.setRemark("未找到订单项");
											//记录结果订单出库
											addOrdersDeliver(deliver);
											//同时将该订单标记为已发货
											TErpOrders orderInfo = new TErpOrders();
											orderInfo.setOrdersId(orders.getOrdersId());
											orderInfo.setOrderState(OrderStateConstant.ORDER_ALREADY_SHIP);
											orderInfo.setIsOutstorage((short)1);
											orderInfo.setDeliverTime(new Date());
											int status = ordersService.updateOrder(orderInfo);
											if(status > 0){
												//记录日志
												ordersService.addOrderLog(orders.getOrdersId(), "修改订单基础信息", OrderLogConstant.UPDATE_ORDER, "使用称重出库--单扫批出功能发货成功,具体信息进称重出库扫描结果中查询.重量【"+oldtotalWeight+"g】,order表中orderstatus被改成3(已发货)了",enterpriseId);
											}
										}else{
											//发货
											ordersService.deliverGoods(goodsList);
											deliver.setDeductStorage((short)1);
											//记录结果订单出库
											addOrdersDeliver(deliver);
											
											//同时将该订单标记为已发货
											TErpOrders orderInfo = new TErpOrders();
											orderInfo.setOrdersId(orders.getOrdersId());
											orderInfo.setOrderState(OrderStateConstant.ORDER_ALREADY_SHIP);
											orderInfo.setIsOutstorage((short)1);
											orderInfo.setDeliverTime(new Date());
											int status = ordersService.updateOrder(orderInfo);
											if(status > 0){
												result.put("weight", null2Zero(oldtotalWeight));
												//记录日志
												ordersService.addOrderLog(orders.getOrdersId(), "修改订单基础信息", OrderLogConstant.UPDATE_ORDER, "使用称重出库--单扫单出功能发货成功,具体信息进称重出库扫描结果中查询.重量【"+null2Zero(oldtotalWeight)+"g】,order表中orderstatus被改成3(已发货)了",enterpriseId);
											}
										}
									}
								}
							}else{
								throw new ServiceException(ExpCodeConstant.PARAMTER_ILLEGAL, "非法参数---货运单号或订单重量为空！");
							}
						}catch(Exception e){
							throw new ServiceException(OrderExpCodeConstant.PARAMTER_ILLEGAL, "参数值不对！");
						}
					}
				}
			}
		}
		return result;
	}
}
