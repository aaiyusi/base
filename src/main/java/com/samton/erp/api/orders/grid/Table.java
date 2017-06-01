/**
 * 
 */
package com.samton.erp.api.orders.grid;

import java.util.List;

/**
 *
 * @Description:数据表格
 * @author:     lijianzhou
 * @date:       2016年4月1日
 * Copyright (c) 2015, Samton. All rights reserved
 */
public class Table {

	//表头
	private TableHead head;
	
	//数据
	private List<?> data;

	public Table(TableHead pHead){
		this.head = pHead;
	}
	
	public Table(TableHead pHead, List<?> pData){
		this(pHead);
		this.data = pData;
	}
	
	public TableHead getHead() {
		return head;
	}

	public void setHead(TableHead head) {
		this.head = head;
	}

	public List<?> getData() {
		return data;
	}

	public void setData(List<?> data) {
		this.data = data;
	}
	
	
}
