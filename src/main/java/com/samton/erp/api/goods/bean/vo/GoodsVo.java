package com.samton.erp.api.goods.bean.vo;

import com.samton.erp.api.goods.bean.entity.TErpGoods;
import com.samton.erp.api.packing.bean.entity.TErpGoodsPacking;

public class GoodsVo extends TErpGoods {
	
	private static final long serialVersionUID = 1L;

	//商品目录名称
	private String catalogiName;
	
	//商品目录名称
	private Long pCatalogiId;
	
	//是否带电池
	private String haveBatteryName;
	
	//侵权
	private String infringementName;
	
	//包材
	private String packName;
	
	//销售员
	private String salerUserName;
	
	//销售状态
	private String saleStateName;

	//商品包材
	private TErpGoodsPacking goodsPacking;

	public String getCatalogiName() {
		return catalogiName;
	}

	public void setCatalogiName(String catalogiName) {
		this.catalogiName = catalogiName;
	}

	public TErpGoodsPacking getGoodsPacking() {
		return goodsPacking;
	}

	public void setGoodsPacking(TErpGoodsPacking goodsPacking) {
		this.goodsPacking = goodsPacking;
	}
	
	public Long getpCatalogiId() {
		return pCatalogiId;
	}

	public void setpCatalogiId(Long pCatalogiId) {
		this.pCatalogiId = pCatalogiId;
	}

	public String getHaveBatteryName() {
		return haveBatteryName;
	}

	public void setHaveBatteryName(String haveBatteryName) {
		this.haveBatteryName = haveBatteryName;
	}

	public String getInfringementName() {
		return infringementName;
	}

	public void setInfringementName(String infringementName) {
		this.infringementName = infringementName;
	}

	public String getPackName() {
		return packName;
	}

	public void setPackName(String packName) {
		this.packName = packName;
	}

	public String getSalerUserName() {
		return salerUserName;
	}

	public void setSalerUserName(String salerUserName) {
		this.salerUserName = salerUserName;
	}

	public String getSaleStateName() {
		return saleStateName;
	}

	public void setSaleStateName(String saleStateName) {
		this.saleStateName = saleStateName;
	}

}
