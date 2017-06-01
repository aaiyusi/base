package com.samton.erp.common.util.excel;

import java.util.HashMap;
import java.util.Map;

/**
 * ExcelField
 * @author zh
 *
 */
public class ExcelField {
	private String headName;
	private String fieldName;
	private String fmt;
	private Map<String,Object> map = new HashMap<String, Object>();
	public ExcelField(){
		
	}
	public ExcelField(String pHeadName, String pFieldName) {
		this.headName = pHeadName;
		this.fieldName = pFieldName;
	}
	public ExcelField(String pHeadName, String pFieldName, String pFormat) {
		this.headName = pHeadName;
		this.fieldName = pFieldName;
		this.fmt = pFormat;
	}
	public String getHeadName() {
		return headName;
	}
	public void setHeadName(String headName) {
		this.headName = headName;
	}
	public String getFieldName() {
		return fieldName;
	}
	public void setFieldName(String fieldName) {
		this.fieldName = fieldName;
	}
	public String getFmt() {
		return fmt;
	}
	public void setFmt(String fmt) {
		this.fmt = fmt;
	}
	public Map<String, Object> getMap() {
		return map;
	}
	public void setMap(Map<String, Object> map) {
		this.map = map;
	}
	public ExcelField put(String key, Object val) {
		this.map.put(key, val);
		return this;
	}
}
