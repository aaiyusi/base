/**
 * 
 */
package com.samton.erp.common.util.jspTag;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.TagSupport;

import com.samton.erp.api.sys.cache.DataDictCache;
import com.samton.platform.framework.context.SpringContext;

/**
 *
 * @Description:字典值下拉框工具类
 * @author:     lijianzhou
 * @date:       2016年4月20日
 * Copyright (c) 2015, Samton. All rights reserved
 */
public class DictTag extends TagSupport {

	private static final long serialVersionUID = 1L;

	/**
	 * 选择框 id
	 */
	private String id;
	
	/**
	 * 选择框 name
	 */
	private String name;
	
	/**
	 * 选择框 通过下拉框value默认选中
	 */
	private String selectValue;
	
	/**
	 * 选择框 通过下拉框文本默认选中
	 */
	private String selectText;
	
	/**
	 * 要显示字典类型中的选项
	 */
	private String dictTypeId;
	
	/**
	 * 默认值
	 */
	private String defaultValue = "";
	
	/**
	 * 默认文本
	 */
	private String defaultText = "请选择";
	
	/**
	 * 显示控件长度
	 */
	private String style;
	
	/**
	 * 样式
	 */
	private String className;
	
	/**
	 * 过滤条件
	 */
	private String condition;
	
	/**
	 * 事件
	 */
	private String onchange;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSelectValue() {
		return selectValue;
	}

	public void setSelectValue(String selectValue) {
		this.selectValue = selectValue;
	}

	public String getSelectText() {
		return selectText;
	}

	public void setSelectText(String selectText) {
		this.selectText = selectText;
	}

	public String getDictTypeId() {
		return dictTypeId;
	}

	public void setDictTypeId(String dictTypeId) {
		this.dictTypeId = dictTypeId;
	}

	public String getDefaultValue() {
		return defaultValue;
	}

	public void setDefaultValue(String defaultValue) {
		this.defaultValue = defaultValue;
	}

	public String getDefaultText() {
		return defaultText;
	}

	public void setDefaultText(String defaultText) {
		this.defaultText = defaultText;
	}

	public String getStyle() {
		return style;
	}

	public void setStyle(String style) {
		this.style = style;
	}

	public String getClassName() {
		return className;
	}

	public void setClassName(String className) {
		this.className = className;
	}

	public String getCondition() {
		return condition;
	}

	public void setCondition(String condition) {
		this.condition = condition;
	}

	public String getOnchange() {
		return onchange;
	}

	public void setOnchange(String onchange) {
		this.onchange = onchange;
	}

	@Override
	public int doStartTag() throws JspException {
		try {
			StringBuffer select = new StringBuffer();
			JspWriter jsp = this.pageContext.getOut();
			select.append("<select");
			/*
			 * 给select加上id
			 */
			if (id != null && !"".equals(id)) {
				select.append(" id='").append(id).append("'");
			}
			/*
			 * 给select加上name
			 */
			if (name != null && !"".equals(name)) {
				select.append(" name='").append(name).append("'");
			}
			/*
			 * 给select加上style
			 */
			if (style != null && !"".equals(style)) {
				select.append(" style='").append(style).append("'");
			}
			/*
			 * 加上class
			 */
			if (className != null && !"".equals(className)) {
				select.append(" class='").append(className).append("'");
			}
			/*
			 * 加上onchange事件
			 */
			if (onchange != null && !"".equals(onchange)) {
				select.append(" onchange='").append(onchange).append("'");
			}
			select.append(" type='select'>");
			if(dictTypeId != null && !"".equals(dictTypeId)){
				select.append("<option value='");
				select.append(defaultValue);
				select.append("'>");
				select.append(defaultText);
				select.append("</option>");
				List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
				try{
					//执行SQL
					DataDictCache dataDictCache = (DataDictCache) SpringContext.getBean("dataDictCache");
					List<Map<String, Object>> tempList = dataDictCache.get(DataDictCache.cache_key);
					for(Map<String, Object> tempMap : tempList){
						if(tempMap.get("dict_type_id").toString().equals(dictTypeId)){
							list.add(tempMap);
						}
					}
				}catch(Exception e){
					
				}
				if (list != null && list.size() > 0) {
					for (int i = 0; i < list.size(); i++) {
						Map<String, Object> map = (Map<String, Object>) list.get(i);
						String selectStatus = "";
						if (selectValue != null
								&& !"".equals(selectValue)
								&& selectValue.equals(map.get("dict_value")
										.toString())) {
							selectStatus = "selected='selected'";
						}
						if (selectText != null
								&& !"".equals(selectText)
								&& selectText.equals(map.get("dict_name")
										.toString())) {
							selectStatus = "selected='selected'";
						}
						select.append("<option value='");
						select.append(map.get("dict_value"));
						select.append("' ");
						select.append(selectStatus);
						select.append(">");
						select.append(map.get("dict_name"));
						select.append("</option>");
					}
					select.append("</select>");
				}
				jsp.print(select.toString());
			} else {
				select.append("<option value=''>");
				select.append("无下拉选项");
				select.append("</option>");
				select.append("</select>");
				jsp.print(select.toString());
			}
		}catch(Exception e){
			
		}
		reset();
		return SKIP_BODY;
	}
	
	private void reset() {
		id = null;
		name = null;
		selectValue = null;
		selectText = null;
		dictTypeId = null;
		defaultValue = "";
		defaultText = "请选择";
		style = null;
		className = null;
		condition = null;
		onchange = null;
	}
}
