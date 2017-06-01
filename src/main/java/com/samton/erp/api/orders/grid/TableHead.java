/**
 * 
 */
package com.samton.erp.api.orders.grid;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 *
 * @Description:表格头
 * @author:     lijianzhou
 * @date:       2016年4月1日
 * Copyright (c) 2015, Samton. All rights reserved
 */
public class TableHead {

	//表头
	private List<Column> columns;
	
	public TableHead(){
		columns = new ArrayList<Column>();
	}

	public TableHead(List<Column> pColumns){
		this.columns = pColumns;
	}
	
	public TableHead(Column[] pColumns) {
		columns = Arrays.asList(pColumns);
	}
	public List<Column> getColumns() {
		return columns;
	}

	public void setColumns(List<Column> columns) {
		this.columns = columns;
	}
	
	
	public TableHead add(Column pColumn) {
		columns.add(pColumn);
		return this;
	}
	
	public TableHead remove(Column pColumn ) {
		columns.remove(pColumn);
		return this;
	}
	
}
