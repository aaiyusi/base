/**
 * 
 */
package com.samton.erp.api.orders.bean.entity.vo;

import java.math.BigDecimal;

import com.samton.erp.api.orders.bean.entity.TErpOrders;

/**
 *
 * @Description:订单导出实体类
 * @author:     lijianzhou
 * @date:       2016年4月26日
 * Copyright (c) 2015, Samton. All rights reserved
 */
public class OrderExportVo extends TErpOrders {

	private static final long serialVersionUID = 1L;

	/**
	 * 商品编号
	 */
	private String sku;
	
	/**
	 * 销售图片
	 */
	private String saleImage;
	
	/**
	 * 库存图片
	 */
	private String storgetImage;
	
	/**
	 * 中文名称
	 */
	private String goodsName;
	
	/**
	 * 英文名称
	 */
	private String eName;
	
	/**
	 * 订购量
	 */
	private Integer count;
	
	/**
	 * 商品id
	 */
	private Long goodsId;
	
	/**
	 * 包材名称
	 */
	private String packName;
	
	/**
	 * 单价
	 */
	private BigDecimal price;
	
	/**
	 * 商品属性
	 */
	private String goodsInfo;
	
	/**
	 * 体积重(kg)
	 */
	private BigDecimal packWeight;
	
	/**
	 * 商品编号（ItemId）
	 */
	private String productId;
	
	/**
	 * 子交易号
	 */
	private String childId;
	
	/**
	 * 仓库名
	 */
	private String whouseName;
	
	/**
	 * 仓位编号
	 */
	private String spaceCode;
	
	/**
	 * 原厂编号
	 */
	private String originalSku;
	
	/**
	 * 商品库存
	 */
	private Integer inventoryCount;
	
	/**
	 * 商品目录id
	 */
	private Long catalogiId;
	
	/**
	 * 商品目录名称
	 */
	private String catalogName;
	
	/**
	 * 申报品名(英文)
	 */
	private String declareEname;
	
	/**
	 * 申报品名(中文)
	 */
	private String declareName;
	
	/**
	 * 包材费
	 */
	private BigDecimal packPrice;
	
	/**
	 * 店铺名
	 */
	private String shopName;
	
	/**
	 * 商品总成本
	 */
	private BigDecimal totalCost;
	
	/**
	 * 货运方式
	 */
	private String logistisName;
	
	/**
	 * 货币编号
	 */
	private String currencyCode;
	
	/**
	 * 订单状态名
	 */
	private String orderStateCn;
	
	public String getPackName() {
		return packName;
	}

	public void setPackName(String packName) {
		this.packName = packName;
	}

	public String getSaleImage() {
		return saleImage;
	}

	public void setSaleImage(String saleImage) {
		this.saleImage = saleImage;
	}

	public String getStorgetImage() {
		return storgetImage;
	}

	public void setStorgetImage(String storgetImage) {
		this.storgetImage = storgetImage;
	}

	public String getGoodsName() {
		return goodsName;
	}

	public void setGoodsName(String goodsName) {
		this.goodsName = goodsName;
	}

	public String geteName() {
		return eName;
	}

	public void seteName(String eName) {
		this.eName = eName;
	}

	public Integer getCount() {
		return count;
	}

	public void setCount(Integer count) {
		this.count = count;
	}

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

	public BigDecimal getPrice() {
		return price;
	}

	public void setPrice(BigDecimal price) {
		this.price = price;
	}

	public String getGoodsInfo() {
		return goodsInfo;
	}

	public String getProductId() {
		return productId;
	}

	public String getChildId() {
		return childId;
	}

	public String getWhouseName() {
		return whouseName;
	}

	public String getSpaceCode() {
		return spaceCode;
	}

	public String getOriginalSku() {
		return originalSku;
	}

	public Integer getInventoryCount() {
		return inventoryCount;
	}

	public Long getCatalogiId() {
		return catalogiId;
	}

	public String getCatalogName() {
		return catalogName;
	}

	public String getDeclareEname() {
		return declareEname;
	}

	public String getDeclareName() {
		return declareName;
	}

	public BigDecimal getPackPrice() {
		return packPrice;
	}

	public void setGoodsInfo(String goodsInfo) {
		this.goodsInfo = goodsInfo;
	}

	public BigDecimal getPackWeight() {
		return packWeight;
	}

	public void setPackWeight(BigDecimal packWeight) {
		this.packWeight = packWeight;
	}

	public void setProductId(String productId) {
		this.productId = productId;
	}

	public void setChildId(String childId) {
		this.childId = childId;
	}

	public void setWhouseName(String whouseName) {
		this.whouseName = whouseName;
	}

	public void setSpaceCode(String spaceCode) {
		this.spaceCode = spaceCode;
	}

	public void setOriginalSku(String originalSku) {
		this.originalSku = originalSku;
	}

	public void setInventoryCount(Integer inventoryCount) {
		this.inventoryCount = inventoryCount;
	}

	public void setCatalogiId(Long catalogiId) {
		this.catalogiId = catalogiId;
	}

	public void setCatalogName(String catalogName) {
		this.catalogName = catalogName;
	}

	public void setDeclareEname(String declareEname) {
		this.declareEname = declareEname;
	}

	public void setDeclareName(String declareName) {
		this.declareName = declareName;
	}

	public void setPackPrice(BigDecimal packPrice) {
		this.packPrice = packPrice;
	}

	public String getShopName() {
		return shopName;
	}

	public void setShopName(String shopName) {
		this.shopName = shopName;
	}

	public BigDecimal getTotalCost() {
		return totalCost;
	}

	public void setTotalCost(BigDecimal totalCost) {
		this.totalCost = totalCost;
	}

	public String getLogistisName() {
		return logistisName;
	}

	public void setLogistisName(String logistisName) {
		this.logistisName = logistisName;
	}
	
	public String getCurrencyCode() {
		return currencyCode;
	}

	public void setCurrencyCode(String currencyCode) {
		this.currencyCode = currencyCode;
	}

	public String getOrderStateCn() {
		return orderStateCn;
	}

	public void setOrderStateCn(String orderStateCn) {
		this.orderStateCn = orderStateCn;
	}
}
