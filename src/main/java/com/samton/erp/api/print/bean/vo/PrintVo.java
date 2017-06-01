package com.samton.erp.api.print.bean.vo;

import org.apache.poi.ss.formula.functions.T;

public class PrintVo<T> {
	
	private T obj;
	
	private Integer printNum;

	public T getObj() {
		return obj;
	}

	public void setObj(T obj) {
		this.obj = obj;
	}

	public Integer getPrintNum() {
		return printNum;
	}

	public void setPrintNum(Integer printNum) {
		this.printNum = printNum;
	}

}
