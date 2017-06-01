package com.samton.erp.api.goods.bean.vo;

public class SkuVo {

	 private Long goodsId;
	 private String sku;
	 private String name;
	 private String whouseName;
	 private String spaceCode;
	 private Integer inventoryCount;
	 
	public Long getGoodsId() {
		return goodsId;
	}
	public void setGoodsId(Long goodsId) {
		this.goodsId = goodsId;
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
	public String getSpaceCode() {
		return spaceCode;
	}
	public void setSpaceCode(String spaceCode) {
		this.spaceCode = spaceCode;
	}
	public Integer getInventoryCount() {
		return inventoryCount;
	}
	public void setInventoryCount(Integer inventoryCount) {
		this.inventoryCount = inventoryCount;
	}
	public String getWhouseName() {
		return whouseName;
	}
	public void setWhouseName(String whouseName) {
		this.whouseName = whouseName;
	}
	 
}
