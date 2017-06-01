package com.samton.erp.api.goods.bean.vo;

import java.io.Serializable;

public class GoodsWhouse implements Serializable{

	private static final long serialVersionUID = 1L;
	
	//商品仓库主键
	private Long gsId;

	//仓库主键
	private Long whouseId;
	
	//仓库名称
	private String whouseName;
	
	//仓位编号
	private String spaceCode;
	
	//仓位主键
	private Long spaceId;
	
	//货架主键
	private Long shelfId;
	
	//货架名称
	private String shelfName;
	
	//商品主键
	private Long goodsId;
	
	//启用状态
	private Short state;
	
	//是否是默认仓库
	private Short isDefault;

	//库存数量
	private Integer inventoryCount;
	
	//是否已经存在
	private Long isHas;

	public Long getGsId() {
		return gsId;
	}

	public void setGsId(Long gsId) {
		this.gsId = gsId;
	}

	public Long getWhouseId() {
		return whouseId;
	}

	public void setWhouseId(Long whouseId) {
		this.whouseId = whouseId;
	}

	public String getWhouseName() {
		return whouseName;
	}

	public void setWhouseName(String whouseName) {
		this.whouseName = whouseName;
	}

	public String getSpaceCode() {
		return spaceCode;
	}

	public void setSpaceCode(String spaceCode) {
		this.spaceCode = spaceCode;
	}

	public Long getSpaceId() {
		return spaceId;
	}

	public void setSpaceId(Long spaceId) {
		this.spaceId = spaceId;
	}

	public Long getShelfId() {
		return shelfId;
	}

	public void setShelfId(Long shelfId) {
		this.shelfId = shelfId;
	}

	public String getShelfName() {
		return shelfName;
	}

	public void setShelfName(String shelfName) {
		this.shelfName = shelfName;
	}

	public Long getGoodsId() {
		return goodsId;
	}

	public void setGoodsId(Long goodsId) {
		this.goodsId = goodsId;
	}

	public Short getState() {
		return state;
	}

	public void setState(Short state) {
		this.state = state;
	}
	
	public Short getIsDefault() {
		return isDefault;
	}

	public void setIsDefault(Short isDefault) {
		this.isDefault = isDefault;
	}

	public Integer getInventoryCount() {
		return inventoryCount;
	}

	public void setInventoryCount(Integer inventoryCount) {
		this.inventoryCount = inventoryCount;
	}
	
	public Long getIsHas() {
		return isHas;
	}

	public void setIsHas(Long isHas) {
		this.isHas = isHas;
	}

}
