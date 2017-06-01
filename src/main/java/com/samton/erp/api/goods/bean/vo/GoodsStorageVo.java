/**
 * 
 */
package com.samton.erp.api.goods.bean.vo;

import com.samton.erp.api.goods.bean.entity.TErpGoodsStorage;

/**
 *
 * @Description:商品仓位实体类
 * @author:     lijianzhou
 * @date:       2016年4月7日
 * Copyright (c) 2015, Samton. All rights reserved
 */
public class GoodsStorageVo extends TErpGoodsStorage {

	private static final long serialVersionUID = 1L;

	/**
	 * 仓库名称
	 */
	private String whouseName;

	/**
	 * 仓位编号
	 */
	private String spaceCode;
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
}
