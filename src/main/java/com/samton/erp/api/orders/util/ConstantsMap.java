/**
 * 
 */
package com.samton.erp.api.orders.util;

import java.util.Collection;
import java.util.LinkedHashMap;
import java.util.Set;

/**
 *
 * @Description:封装常量Map类
 * @author:     lijianzhou
 * @date:       2016年4月5日
 * Copyright (c) 2015, Samton. All rights reserved
 */
public class ConstantsMap {

	private LinkedHashMap<Object, Object> map;
	public ConstantsMap(){
		map = new LinkedHashMap<Object,Object>();
	}
	
	
	public void putConstant(Object label, Object value){
		map.put(label, value);
	}
	
	public Object getValueByLabel(Object label){
		return map.get(label);
	}
	
	@SuppressWarnings("rawtypes")
	public Set getLabelSet(){
		return map.keySet();
	}
	
	@SuppressWarnings("rawtypes")
	public Collection getValueSet(){
		return map.values();
	}
	
	@SuppressWarnings("rawtypes")
	public Set getConstantsSet(){
		return map.entrySet();
	}
}
