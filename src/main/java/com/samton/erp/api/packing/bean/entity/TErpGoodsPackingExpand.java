/**
 * 
 */
package com.samton.erp.api.packing.bean.entity;

/**
 * @Title: TErpGoodsPackingExpand.java
 * @Package com.samton.erp.api.packing.bean.entity
 * @Description: TODO(用一句话描述该文件做什么)
 * @author A18ccms A18ccms_gmail_com
 * @date 2016年4月8日 上午11:14:39
 * @version V1.0
 */
public class TErpGoodsPackingExpand extends TErpGoodsPacking {
	public String size;
	public Long goodsId;

	public String getSize() {
		return size;
	}

	public void setSize(String size) {
		this.size = size;
	}

	public Long getGoodsId() {
		return goodsId;
	}

	public void setGoodsId(Long goodsId) {
		this.goodsId = goodsId;
	}

}
