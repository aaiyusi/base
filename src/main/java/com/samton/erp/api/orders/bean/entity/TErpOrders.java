package com.samton.erp.api.orders.bean.entity;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

import com.samton.platform.framework.base.BaseBean;

public class TErpOrders extends BaseBean implements Serializable {
	private Long ordersId;

	private Short orderType;

	private String name;

	private Date ordersDate;

	private String dealNum;

	private Long shopId;

	private BigDecimal customsCode;

	private BigDecimal insurance;

	private BigDecimal cost;

	private String gatheringAccount;

	private Long currency;

	private String message;

	private Short messageState;

	private String replyContent;

	private String remark;

	private String customerId;

	private String customerName;

	private String phone1;

	private String phone2;

	private String email;

	private String country;

	private String province;

	private String postalCode;

	private String address;

	private String spareAddress;

	private String city;

	private String custLogistics;

	private Long logisticsId;

	private String bills;

	private String interiorBills;

	private Short fastPicking;

	private BigDecimal antcipatedFreight;

	private BigDecimal actualFreight;

	private BigDecimal weight;

	private Long packingId;

	private Short isPrint;

	private Short orderState;

	private Short state;

	private Long enterpriseId;

	private BigDecimal payment;

	private Short isChecked;

	private Short isOutstorage;

	// 是否重发订单
	private Short isRetry;

	// 重发原因
	private String retryContent;

	// 上级订单ID
	private Long parentOrderId;

	// 一级订单ID
	private Long topOrderId;

	//国家简称
	private String countryShort;
	
	//国家英文
	private String countryCn;
	
	//退款费
	private BigDecimal refundMoney;
	
	//转账费
	private BigDecimal transferMoney;
	
	//是否缺货
	private Short isStockout;
	
	//发货时间
	private Date deliverTime;
	
	//付款时间
	private Date payTime;
	
	//订单金额（原始货币）
	private BigDecimal originalMoney;
	
	//订单金额（￥）
	private BigDecimal ordersMoney;
	
	//收入运费（原始货币）
	private BigDecimal incomeFreight;
	
	//应收货款（原始货币）
	private BigDecimal paymentMoney;
	
	//作废时间
	private Date cancelTime;
	
	private static final long serialVersionUID = 1L;

	public Long getOrdersId() {
		return ordersId;
	}

	public void setOrdersId(Long ordersId) {
		this.ordersId = ordersId;
	}

	public Short getOrderType() {
		return orderType;
	}

	public void setOrderType(Short orderType) {
		this.orderType = orderType;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Date getOrdersDate() {
		return ordersDate;
	}

	public void setOrdersDate(Date ordersDate) {
		this.ordersDate = ordersDate;
	}

	public String getDealNum() {
		return dealNum;
	}

	public void setDealNum(String dealNum) {
		this.dealNum = dealNum;
	}

	public Long getShopId() {
		return shopId;
	}

	public void setShopId(Long shopId) {
		this.shopId = shopId;
	}

	public BigDecimal getCustomsCode() {
		return customsCode;
	}

	public void setCustomsCode(BigDecimal customsCode) {
		this.customsCode = customsCode;
	}

	public BigDecimal getInsurance() {
		return insurance;
	}

	public void setInsurance(BigDecimal insurance) {
		this.insurance = insurance;
	}

	public BigDecimal getCost() {
		return cost;
	}

	public void setCost(BigDecimal cost) {
		this.cost = cost;
	}

	public String getGatheringAccount() {
		return gatheringAccount;
	}

	public void setGatheringAccount(String gatheringAccount) {
		this.gatheringAccount = gatheringAccount;
	}

	public Long getCurrency() {
		return currency;
	}

	public void setCurrency(Long currency) {
		this.currency = currency;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public Short getMessageState() {
		return messageState;
	}

	public void setMessageState(Short messageState) {
		this.messageState = messageState;
	}

	public String getReplyContent() {
		return replyContent;
	}

	public void setReplyContent(String replyContent) {
		this.replyContent = replyContent;
	}

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
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

	public String getPhone1() {
		return phone1;
	}

	public void setPhone1(String phone1) {
		this.phone1 = phone1;
	}

	public String getPhone2() {
		return phone2;
	}

	public void setPhone2(String phone2) {
		this.phone2 = phone2;
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

	public String getProvince() {
		return province;
	}

	public void setProvince(String province) {
		this.province = province;
	}

	public String getPostalCode() {
		return postalCode;
	}

	public void setPostalCode(String postalCode) {
		this.postalCode = postalCode;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getSpareAddress() {
		return spareAddress;
	}

	public void setSpareAddress(String spareAddress) {
		this.spareAddress = spareAddress;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getCustLogistics() {
		return custLogistics;
	}

	public void setCustLogistics(String custLogistics) {
		this.custLogistics = custLogistics;
	}

	public Long getLogisticsId() {
		return logisticsId;
	}

	public void setLogisticsId(Long logisticsId) {
		this.logisticsId = logisticsId;
	}

	public String getBills() {
		return bills;
	}

	public void setBills(String bills) {
		this.bills = bills;
	}

	public String getInteriorBills() {
		return interiorBills;
	}

	public void setInteriorBills(String interiorBills) {
		this.interiorBills = interiorBills;
	}

	public Short getFastPicking() {
		return fastPicking;
	}

	public void setFastPicking(Short fastPicking) {
		this.fastPicking = fastPicking;
	}

	public BigDecimal getAntcipatedFreight() {
		return antcipatedFreight;
	}

	public void setAntcipatedFreight(BigDecimal antcipatedFreight) {
		this.antcipatedFreight = antcipatedFreight;
	}

	public BigDecimal getActualFreight() {
		return actualFreight;
	}

	public void setActualFreight(BigDecimal actualFreight) {
		this.actualFreight = actualFreight;
	}

	public BigDecimal getWeight() {
		return weight;
	}

	public void setWeight(BigDecimal weight) {
		this.weight = weight;
	}

	public Long getPackingId() {
		return packingId;
	}

	public void setPackingId(Long packingId) {
		this.packingId = packingId;
	}

	public Short getIsPrint() {
		return isPrint;
	}

	public void setIsPrint(Short isPrint) {
		this.isPrint = isPrint;
	}

	public Short getOrderState() {
		return orderState;
	}

	public void setOrderState(Short orderState) {
		this.orderState = orderState;
	}

	public Short getState() {
		return state;
	}

	public void setState(Short state) {
		this.state = state;
	}

	public Long getEnterpriseId() {
		return enterpriseId;
	}

	public void setEnterpriseId(Long enterpriseId) {
		this.enterpriseId = enterpriseId;
	}

	public BigDecimal getPayment() {
		return payment;
	}

	public void setPayment(BigDecimal payment) {
		this.payment = payment;
	}

	public Short getIsChecked() {
		return isChecked;
	}

	public void setIsChecked(Short isChecked) {
		this.isChecked = isChecked;
	}

	public Short getIsOutstorage() {
		return isOutstorage;
	}

	public void setIsOutstorage(Short isOutstorage) {
		this.isOutstorage = isOutstorage;
	}

	public Short getIsRetry() {
		return isRetry;
	}

	public void setIsRetry(Short isRetry) {
		this.isRetry = isRetry;
	}

	public String getRetryContent() {
		return retryContent;
	}

	public void setRetryContent(String retryContent) {
		this.retryContent = retryContent;
	}

	public Long getParentOrderId() {
		return parentOrderId;
	}

	public void setParentOrderId(Long parentOrderId) {
		this.parentOrderId = parentOrderId;
	}

	public Long getTopOrderId() {
		return topOrderId;
	}

	public void setTopOrderId(Long topOrderId) {
		this.topOrderId = topOrderId;
	}

	public String getCountryShort() {
		return countryShort;
	}

	public void setCountryShort(String countryShort) {
		this.countryShort = countryShort;
	}

	public String getCountryCn() {
		return countryCn;
	}

	public void setCountryCn(String countryCn) {
		this.countryCn = countryCn;
	}

	public BigDecimal getRefundMoney() {
		return refundMoney;
	}

	public void setRefundMoney(BigDecimal refundMoney) {
		this.refundMoney = refundMoney;
	}

	public BigDecimal getTransferMoney() {
		return transferMoney;
	}

	public void setTransferMoney(BigDecimal transferMoney) {
		this.transferMoney = transferMoney;
	}

	public Short getIsStockout() {
		return isStockout;
	}

	public void setIsStockout(Short isStockout) {
		this.isStockout = isStockout;
	}

	public Date getDeliverTime() {
		return deliverTime;
	}

	public void setDeliverTime(Date deliverTime) {
		this.deliverTime = deliverTime;
	}

	public Date getPayTime() {
		return payTime;
	}

	public void setPayTime(Date payTime) {
		this.payTime = payTime;
	}

	public BigDecimal getOriginalMoney() {
		return originalMoney;
	}

	public void setOriginalMoney(BigDecimal originalMoney) {
		this.originalMoney = originalMoney;
	}

	public BigDecimal getOrdersMoney() {
		return ordersMoney;
	}

	public void setOrdersMoney(BigDecimal ordersMoney) {
		this.ordersMoney = ordersMoney;
	}

	public BigDecimal getIncomeFreight() {
		return incomeFreight;
	}

	public void setIncomeFreight(BigDecimal incomeFreight) {
		this.incomeFreight = incomeFreight;
	}

	public BigDecimal getPaymentMoney() {
		return paymentMoney;
	}

	public void setPaymentMoney(BigDecimal paymentMoney) {
		this.paymentMoney = paymentMoney;
	}

	public Date getCancelTime() {
		return cancelTime;
	}

	public void setCancelTime(Date cancelTime) {
		this.cancelTime = cancelTime;
	}
}