/**
 * 
 */
package com.samton.erp.api.orders.grid;

import java.sql.Timestamp;
import java.text.Format;
import java.util.HashMap;
import java.util.Map;

import org.apache.commons.lang.StringEscapeUtils;

/**
 *
 * @Description:表格列
 * @author:     lijianzhou
 * @date:       2016年4月1日
 * Copyright (c) 2015, Samton. All rights reserved
 */
public class Column {

	//标签
	protected String label;
	
	//对应数据库的label
	protected String dbLabel;
	
	//宽度
	protected int width;
	
	//格式化字符串
	private Format format;
	
	private int colType;
	
	//排序
	private int order;
	
	//是否特殊渲染
	private boolean render;
	//是否可隐藏
	private boolean hide;
	
	private Map<String, Map<String,String>> exportMap;

	public Column(String pLabel){
		this.label = pLabel;
		this.exportMap = new HashMap<String, Map<String,String>>();//将数值转换为中文
	}
	
	public Column(String pLabel, String pDbLabel){
		this(pLabel);
		this.dbLabel = pDbLabel;
	}
	
	public Column(String pLabel, String pDbLabel,int pWidth){
		this(pLabel);
		this.dbLabel = pDbLabel;
		this.width = pWidth;
	}
	
	public int getWidth() {
		return width;
	}

	public void setWidth(int width) {
		this.width = width;
	}

	public String getLabel() {
		return label;
	}

	public void setLabel(String label) {
		this.label = label;
	}

	public String getDbLabel() {
		return dbLabel;
	}

	public void setDbLabel(String dbLabel) {
		this.dbLabel = dbLabel;
	}
	
	public Format getFormat() {
		return format;
	}

	public void setFormat(Format format) {
		this.format = format;
	}
	
	public int getColType() {
		return colType;
	}

	public int getOrder() {
		return order;
	}

	public Column setOrder(int order) {
		this.order = order;
		return this;
	}

	public Column setColType(int colType) {
		this.colType = colType;
		return this;
	}

	public boolean isRender() {
		return render;
	}

	public Column setRender(boolean render) {
		this.render = render;
		return this;
	}

	public boolean isHide() {
		return hide;
	}

	public void setHide(boolean hide) {
		this.hide = hide;
	}

	public String format(Object val) {
		if ( val==null || "".equals(val) ) {
			return "";
		}
		return format.format(val);
	}
	
	public Column putExprotKV(String key,String name,String value){
		Map<String,String> map = this.exportMap.get(key);
		if(map != null){
			map.put(name, value);
			this.exportMap.put(key, map);	
		} else {
			Map<String,String> tempMap = new HashMap<String,String>();
			tempMap.put(name, value);
			this.exportMap.put(key, tempMap);
		}
		return this;
	}
	
	public String getExprotValue(String key,String name){
		Map<String,String> map = this.exportMap.get(key);
		if(map != null){
			return (String) map.get(name);
		} 
		return null;
	}
	
	/**
	 * 用于个性化渲染
	 * @param row行数据
	 * @param 当前列数据
	 */
	public String render(Map<String,Object> row, Object val) {
		return StringEscapeUtils.escapeHtml(renderVal(row,val));
	}
	
	public String renderVal(Map<String,Object> row, Object val){
		if(row.isEmpty() || val == null || val == ""){
			return "";
		}
		
		Object value = row.get(val);
		if(value == null){
			return "";
		}
		
		if(value != null && value instanceof Timestamp){
			if(format != null){
				return format(value);
			}
		}else{
			String exportValue = getExprotValue(val.toString(), value.toString());
			if(exportValue != null){
				return exportValue;
			}
		}
		return value.toString();
	}
}
