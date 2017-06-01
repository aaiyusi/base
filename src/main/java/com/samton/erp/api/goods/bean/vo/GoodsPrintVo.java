package com.samton.erp.api.goods.bean.vo;

import com.samton.erp.api.goods.bean.entity.TErpGoods;

/**
 * 
 *
 * @Description:商品打印信息实体
 * @author:     Alex
 * @date:        2016年4月21日 上午10:10:58
 * Copyright (c) 2016, Samton. All rights reserved
 */
public class GoodsPrintVo extends TErpGoods {
	
	//打印数量
	private Integer printNum;
	
	//仓位编码
	private String spaceCode;

	public Integer getPrintNum() {
		return printNum;
	}

	public void setPrintNum(Integer printNum) {
		this.printNum = printNum;
	}

	public String getSpaceCode() {
		return spaceCode;
	}

	public void setSpaceCode(String spaceCode) {
		this.spaceCode = spaceCode;
	}
}
