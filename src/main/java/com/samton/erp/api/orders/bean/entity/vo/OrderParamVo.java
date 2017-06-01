/**
 * 
 */
package com.samton.erp.api.orders.bean.entity.vo;

/**
 *
 * @Description:订单查询参数实体类
 * @author:     lijianzhou
 * @date:       2016年3月28日
 * Copyright (c) 2015, Samton. All rights reserved
 */
public class OrderParamVo {

	/**
	 * 订单状态
	 */
	private Short orderState;
	
	/**
	 * 订单开始时间
	 */
	private String startDate;
	
	/**
	 * 订单结束时间
	 */
	private String endDate;
	
	/**
	 * 平台类型
	 */
	private Integer platformType;
	
	/**
	 *  店铺
	 */
	private Long shopId;
	
	/**
	 * 发货员
	 */
	private Long userId;
	
	/**
	 * 发货结果
	 */
	private String deliverResult;
	
	/**
	 * 订单编号
	 */
	private String name;
	
	/**
	 * 货运单号
	 */
	private String bills;
	
	/**
	 * 备注
	 */
	private String remark;
	
	/**
	 * 是否停用
	 */
	private Short isUse;
	
	/**
	 * 交易号
	 */
	private String dealNum;
	
	/**
	 * 内部物流
	 */
	private String interiorBills;
	
	/**
	 * 自选物流
	 */
	private String custLogistics;
	
	/**
	 * 客户ID
	 */
	private String customerId;

	/**
	 * 客户名称
	 */
	private String customerName;
	
	/**
	 * 邮箱
	 */
	private String email;
	
	/**
	 * 国家
	 */
	private String country;
	
	/**
	 * 城市
	 */
	private String city;
	
	/**
	 * 电话
	 */
	private String phone;
	
	/**
	 * 物流渠道
	 */
	private Long logisticsId;
	
	/**
	 * 订单id
	 */
	private Long ordersId;
	
	/**
	 * 平台产品id
	 */
	private String productId;
	
	/**
	 * 国家（中）
	 */
	private String countryCn;
	
	/**
	 * 查询类型
	 */
	private Short filterType;

	public Long getOrdersId() {
		return ordersId;
	}

	public void setOrdersId(Long ordersId) {
		this.ordersId = ordersId;
	}
	
	public Short getOrderState() {
		return orderState;
	}

	public void setOrderState(Short orderState) {
		this.orderState = orderState;
	}

	public String getStartDate() {
		return startDate;
	}

	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}

	public String getEndDate() {
		return endDate;
	}

	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}

	public Integer getPlatformType() {
		return platformType;
	}

	public void setPlatformType(Integer platformType) {
		this.platformType = platformType;
	}

	public Long getShopId() {
		return shopId;
	}

	public void setShopId(Long shopId) {
		this.shopId = shopId;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public String getDeliverResult() {
		return deliverResult;
	}

	public void setDeliverResult(String deliverResult) {
		this.deliverResult = deliverResult;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getBills() {
		return bills;
	}

	public void setBills(String bills) {
		this.bills = bills;
	}

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}

	public Short getIsUse() {
		return isUse;
	}

	public void setIsUse(Short isUse) {
		this.isUse = isUse;
	}

	public String getDealNum() {
		return dealNum;
	}

	public void setDealNum(String dealNum) {
		this.dealNum = dealNum;
	}

	public String getInteriorBills() {
		return interiorBills;
	}

	public void setInteriorBills(String interiorBills) {
		this.interiorBills = interiorBills;
	}

	public String getCustLogistics() {
		return custLogistics;
	}

	public void setCustLogistics(String custLogistics) {
		this.custLogistics = custLogistics;
	}

	public String getCustomerId() {
		return customerId;
	}

	public void setCustomerId(String customerId) {
		this.customerId = customerId;
	}

	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public Long getLogisticsId() {
		return logisticsId;
	}

	public void setLogisticsId(Long logisticsId) {
		this.logisticsId = logisticsId;
	}

	public String getProductId() {
		return productId;
	}

	public void setProductId(String productId) {
		this.productId = productId;
	}

	public String getCountryCn() {
		return countryCn;
	}

	public void setCountryCn(String countryCn) {
		this.countryCn = countryCn;
	}

	public Short getFilterType() {
		return filterType;
	}

	public void setFilterType(Short filterType) {
		this.filterType = filterType;
	}
}
