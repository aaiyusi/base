/**
 * 
 */
package com.samton.erp.api.catalog.bean.entity;

import java.util.List;

/**
 * @Title: VO.java
 * @Package com.samton.erp.api.catalog.bean.entity
 * @Description: TODO(用一句话描述该文件做什么)
 * @author A18ccms A18ccms_gmail_com
 * @date 2016年3月30日 上午11:56:25
 * @version V1.0
 */
public class GoodsCatalogVO extends TErpGoodsCatalog {
	List<GoodsCatalogVO> catalogList;
	List<GoodsCatalogVO> children;
	private Long goodsId;

	public List<GoodsCatalogVO> getCatalogList() {
		return catalogList;
	}

	public void setCatalogList(List<GoodsCatalogVO> catalogList) {
		this.catalogList = catalogList;
	}

	public List<GoodsCatalogVO> getChildren() {
		return children;
	}

	public void setChildren(List<GoodsCatalogVO> children) {
		this.children = children;
	}

	public Long getGoodsId() {
		return goodsId;
	}

	public void setGoodsId(Long goodsId) {
		this.goodsId = goodsId;
	}

}
