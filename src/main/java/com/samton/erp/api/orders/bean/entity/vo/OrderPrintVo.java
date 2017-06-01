package com.samton.erp.api.orders.bean.entity.vo;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import com.samton.erp.api.orders.bean.entity.TErpOrders;

/**
 * 订单打印实体
 * @author liujiping

 * 2016年4月25日
 */
public class OrderPrintVo extends TErpOrders {

	private static final long serialVersionUID = 1L;
	//	countryCode	收件人国家英文简称
	private String countryCode;
	//	enterpriseName	发件人公司名称
	private String enterpriseName;
	//	enterprisePostAddress	回邮地址
	private String enterprisePostAddress;
	//物流公司
	private String logisticsName;
	//买家公司名称
	private String customerCompany;	
	//商品总个数
	private Integer itemCount;
	//商品总项数
	private Integer itemSize;
	//地址单打印模板
	private Long addressTempId;
	//报关单打印模板
	private Long declarationTempId;
	//配货单打印模板
	private Long allocationTempId;
	
	//订单详情集合
	private List<OrderDetailPrintVo> orderDetailPrintVos;
	
	public String getCountryCode() {
		return countryCode;
	}
	public void setCountryCode(String countryCode) {
		this.countryCode = countryCode;
	}
	public String getPrintTime() {
		SimpleDateFormat sf = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
		return sf.format(new Date());
	}
	public void setPrintTime(Date printTime) {
	}
	public String getEnterpriseName() {
		return enterpriseName;
	}
	public void setEnterpriseName(String enterpriseName) {
		this.enterpriseName = enterpriseName;
	}
	public String getEnterprisePostAddress() {
		return enterprisePostAddress;
	}
	public void setEnterprisePostAddress(String enterprisePostAddress) {
		this.enterprisePostAddress = enterprisePostAddress;
	}
	public String getLogisticsName() {
		return logisticsName;
	}
	public void setLogisticsName(String logisticsName) {
		this.logisticsName = logisticsName;
	}
	public String getCustomerCompany() {
		return customerCompany;
	}
	public void setCustomerCompany(String customerCompany) {
		this.customerCompany = customerCompany;
	}
	public List<OrderDetailPrintVo> getOrderDetailPrintVos() {
		return orderDetailPrintVos;
	}
	public void setOrderDetailPrintVos(List<OrderDetailPrintVo> orderDetailPrintVos) {
		this.orderDetailPrintVos = orderDetailPrintVos;
	}
	public Integer getItemCount() {
		itemCount = 0;
		for(OrderDetailPrintVo dp : orderDetailPrintVos){
			itemCount += dp.getCount();
		}
		
		return itemCount;
	}
	public void setItemCount(Integer itemCount) {
		this.itemCount = itemCount;
	}
	public Integer getItemSize() {
		if(orderDetailPrintVos != null){
			itemSize = orderDetailPrintVos.size();
		}
		return itemSize;
	}
	public void setItemSize(Integer itemSize) {
		this.itemSize = itemSize;
	}
	public Long getAddressTempId() {
		return addressTempId;
	}
	public void setAddressTempId(Long addressTempId) {
		this.addressTempId = addressTempId;
	}
	public Long getDeclarationTempId() {
		return declarationTempId;
	}
	public void setDeclarationTempId(Long declarationTempId) {
		this.declarationTempId = declarationTempId;
	}
	public Long getAllocationTempId() {
		return allocationTempId;
	}
	public void setAllocationTempId(Long allocationTempId) {
		this.allocationTempId = allocationTempId;
	}

}
