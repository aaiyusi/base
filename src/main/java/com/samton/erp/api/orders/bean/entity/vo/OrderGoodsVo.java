/**
 * 
 */
package com.samton.erp.api.orders.bean.entity.vo;

import java.math.BigDecimal;

import com.samton.erp.api.orders.bean.entity.TErpOrders;

/**
 *
 * @Description:订单商品实体类
 * @author:     lijianzhou
 * @date:       2016年4月7日
 * Copyright (c) 2015, Samton. All rights reserved
 */
public class OrderGoodsVo extends TErpOrders {

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
	private String name;
	
	/**
	 * 英文名称
	 */
	private String eName;
	
	/**
	 * 订购量
	 */
	private Integer count;
	
	private Long detailId;
	
	private Long goodsId;
	
	/**
	 * 验货状态
	 */
	private String checkStatus;
	
	/**
	 * 待检量
	 */
	private Integer waitCount;
	
	/**
	 * 包材名称
	 */
	private String packName;
	
	/**
	 * 单价
	 */
	private BigDecimal price;
	
	/**
	 * 仓库
	 */
	private Long whouseId;
	
	/**
	 * 仓位
	 */
	private Long spaceId;
	
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

	public Integer getCount() {
		return count;
	}

	public void setCount(Integer count) {
		this.count = count;
	}

	public Long getDetailId() {
		return detailId;
	}

	public void setDetailId(Long detailId) {
		this.detailId = detailId;
	}

	public Long getGoodsId() {
		return goodsId;
	}

	public void setGoodsId(Long goodsId) {
		this.goodsId = goodsId;
	}

	public String getCheckStatus() {
		return checkStatus;
	}

	public void setCheckStatus(String checkStatus) {
		this.checkStatus = checkStatus;
	}

	public String getSku() {
		return sku;
	}

	public void setSku(String sku) {
		this.sku = sku;
	}

	public Integer getWaitCount() {
		return waitCount;
	}

	public void setWaitCount(Integer waitCount) {
		this.waitCount = waitCount;
	}

	public BigDecimal getPrice() {
		return price;
	}

	public void setPrice(BigDecimal price) {
		this.price = price;
	}

	public Long getSpaceId() {
		return spaceId;
	}

	public void setSpaceId(Long spaceId) {
		this.spaceId = spaceId;
	}

	public Long getWhouseId() {
		return whouseId;
	}

	public void setWhouseId(Long whouseId) {
		this.whouseId = whouseId;
	}
}
