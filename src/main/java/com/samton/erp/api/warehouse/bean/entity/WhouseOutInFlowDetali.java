package com.samton.erp.api.warehouse.bean.entity;


public class WhouseOutInFlowDetali {

	private String createDate;
	private String sku;
	private String name;
	private String whouseName;
	private long skuout;
	private long skuin;

	public String getCreateDate() {
		return createDate;
	}

	public void setCreateDate(String createDate) {
		this.createDate = createDate;
	}

	public String getSku() {
		return sku;
	}

	public void setSku(String sku) {
		this.sku = sku;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getWhouseName() {
		return whouseName;
	}

	public void setWhouseName(String whouseName) {
		this.whouseName = whouseName;
	}

	public long getSkuout() {
		return skuout;
	}

	public void setSkuout(long skuout) {
		this.skuout = skuout;
	}

	public long getSkuin() {
		return skuin;
	}

	public void setSkuin(long skuin) {
		this.skuin = skuin;
	}



}
