package com.samton.erp.api.orders.bean.entity.vo;

import com.samton.erp.api.orders.bean.entity.TErpOrdersDetail;

/**
 * 订单明细打印扩展实体
 * @author liujiping

 * 2016年4月26日
 */
public class OrderDetailPrintVo extends TErpOrdersDetail {
	private static final long serialVersionUID = 1L;
	private String  sku;					//	商品SKU
	private String declareName	;	//商品申报中文名
	private String declareEName;	//商品申报英文名
	private String whouseName;	//仓库名称
	private String spaceName;		//仓位名称
	private String name;					//商品中文名
	private String eName;				//商品英文名
	
	public String getSku() {
		return sku;
	}
	public void setSku(String sku) {
		this.sku = sku;
	}
	public String getDeclareName() {
		return declareName;
	}
	public void setDeclareName(String declareName) {
		this.declareName = declareName;
	}
	public String getDeclareEName() {
		return declareEName;
	}
	public void setDeclareEName(String declareEName) {
		this.declareEName = declareEName;
	}
	public String getWhouseName() {
		return whouseName;
	}
	public void setWhouseName(String whouseName) {
		this.whouseName = whouseName;
	}
	public String getSpaceName() {
		return spaceName;
	}
	public void setSpaceName(String spaceName) {
		this.spaceName = spaceName;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String geteName() {
		return eName;
	}
	public void seteName(String eName) {
		this.eName = eName;
	}


	
}
