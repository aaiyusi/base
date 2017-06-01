package com.samton.erp.api.print.service.impl;

import java.beans.BeanInfo;
import java.beans.Introspector;
import java.beans.PropertyDescriptor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.samton.erp.api.print.bean.entity.TErpPrintTemplate;
import com.samton.erp.api.print.bean.vo.PrintVo;
import com.samton.erp.api.print.constant.PrintConstant;
import com.samton.erp.api.print.constant.PrintExpCodeConstant;
import com.samton.erp.api.print.dao.TErpPrintTemplateMapper;
import com.samton.erp.api.print.service.IPrintService;
import com.samton.platform.common.bean.param.JqParamBean;
import com.samton.platform.framework.base.BaseBean;
import com.samton.platform.framework.exception.ControllerException;
import com.samton.platform.framework.mybatis.pagination.PageContext;
import com.samton.platform.framework.mybatis.pagination.Pagination;
import com.samton.platform.framework.util.CurrentUtil;

/**
 * 
 *
 * @Description:打印标签实现类
 * @author:     Alex
 * @date:        2016年4月19日 下午8:51:44
 * Copyright (c) 2016, Samton. All rights reserved
 */
@Service("printService")
public class PrintServiceImpl implements IPrintService {
	
	@Resource
	private TErpPrintTemplateMapper printTemplateMapper;

	@Override
	public <T> String getPrintContent(Long tempId, List<T> list, String[] nums) throws Exception {
		
		if(list.size() != nums.length){
			throw new ControllerException(PrintExpCodeConstant.LENGTH_INCONFORMITY, null,false);
		}
		
		//获得标签模板
		TErpPrintTemplate temp = printTemplateMapper.selectByPrimaryKey(tempId);
		
		String html = "";
		for (int i = 0; i < list.size(); i++) {
			String printTemp = temp.getContent();
			
			//内省获得对象，去除了Object和BaseBean中的所有属性
			BeanInfo bean = Introspector.getBeanInfo(list.get(i).getClass(), BaseBean.class);
			
			//获得对象中所有属性
			PropertyDescriptor[] pds = bean.getPropertyDescriptors();
			for (PropertyDescriptor pd : pds) {
				//获得属性读的方法
				Method method = pd.getReadMethod();
				
				//获得值
				Object objValue = method.invoke(list.get(i), null);
				
				//获得返回类型
				String returnType = method.getReturnType().getName();
				String value = "";
				
				//判断属性是否有值
				if(objValue != null){
					//判断是否是基本类型
					String regEx = "com[.]samton\\w*";
					Pattern pat = Pattern.compile(regEx);  
					Matcher mat = pat.matcher(returnType); 
					
					if(!mat.find()){
						value =  objValue.toString();
						//替换模板内容
						printTemp = printTemp.replaceAll("\\{" + pd.getName() + "\\}", value);
					}
				}
			}
			
			//清除所以未替换的参数
			printTemp = printTemp.replaceAll("\\{\\w*\\}", "");
			
			//根据打印数量，产生对应的数量
			for (int j = 0; j < Integer.parseInt(nums[i]); j++) {
				html += printTemp;
			}
		}
		
		return html;
	}

	@Override
	public <T> String getPrintContent(Long tempId, List<PrintVo<T>> list) throws Exception {
		
		//获得标签模板
		TErpPrintTemplate temp = printTemplateMapper.selectByPrimaryKey(tempId);
		
		String html = "";
		
		if(list.size() <= 0){
			throw new ControllerException(PrintExpCodeConstant.LENGTH_INCONFORMITY, null,false);
		}
		for (PrintVo<T> printVo : list) {
			String printTemp = temp.getContent();

			//内省获得对象，去除了Object中的所有属性
			BeanInfo bean = Introspector.getBeanInfo(printVo.getObj().getClass(), Object.class);
			
			//获得对象中所有属性
			PropertyDescriptor[] pds = bean.getPropertyDescriptors();
			for (PropertyDescriptor pd : pds) {
				if("baseBean".equals(pd.getName())){
					continue;
				}
				//获得属性读的方法
				Method method = pd.getReadMethod();
				
				//获得值
				Object objValue = method.invoke(printVo.getObj(), null);
				
				//获得返回类型
				String returnType = method.getReturnType().getName();
				String value = "";
				
				//判断属性是否有值
				if(objValue != null){
					//判断是否是基本类型
					String regEx = "com[.]samton\\w*";
					Pattern pat = Pattern.compile(regEx);  
					Matcher mat = pat.matcher(returnType); 
					
					if(!mat.find()){
						//字段中有集合时，进行二次解析
						if("java.util.List".equals(returnType)){
							List subclassList = (List) objValue;
							for (int i = 0; i < subclassList.size(); i++) {

								//内省获得集合中的对象，去除了Object中的所有属性
								BeanInfo subclassBean = Introspector.getBeanInfo(subclassList.get(i).getClass(), Object.class);

								//获得集合中对象的所有属性
								PropertyDescriptor[] subclassPds = subclassBean.getPropertyDescriptors();
								
								for (PropertyDescriptor subcalssPd : subclassPds) {
									if("baseBean".equals(subcalssPd.getName())){
										continue;
									}
									//获得属性读的方法
									Method subclassMethod = subcalssPd.getReadMethod();
									
									//获得值
									Object subclassObjValue = subclassMethod.invoke(subclassList.get(i), null);
									
									//获得返回类型
									String subclassReturnType = subclassMethod.getReturnType().getName();
									String subclassValue = "";
									
									//判断属性是否有值
									if(subclassObjValue != null){
										//判断是否是基本类型
										String subclassRegEx = "com[.]samton\\w*";
										Pattern subclassPat = Pattern.compile(subclassRegEx);  
										Matcher subclassMat = pat.matcher(subclassReturnType);

										if(!mat.find()){
											subclassValue =  subclassObjValue.toString();
											//替换模板内容
											printTemp = printTemp.replaceAll("\\{" + (i + 1) + "_" + subcalssPd.getName() + "\\}", subclassValue);
										}
									}
								}
							}
							if(printTemp.indexOf("<c:if>") > 0){
								boolean isRight = true;
								if(tempId == PrintConstant.PRINT_COLLEC){
									isRight = subclassList.size() <= 6;
								} else if(tempId == PrintConstant.PRINT_INVOICE){
									isRight = subclassList.size() <= 3;
								}
								if(isRight){
									printTemp = printTemp.substring(0, printTemp.indexOf("<c:if>"));
								}
							}
						} else {
							value =  objValue.toString();
							//替换模板内容
							printTemp = printTemp.replaceAll("\\{" + pd.getName() + "\\}", value);
						}
					}
				}
			}
			
			//清除所以未替换的参数
			printTemp = printTemp.replaceAll("\\{\\w*\\}", "");
			
			//根据打印数量，产生对应的数量
			for (int j = 0; j < printVo.getPrintNum(); j++) {
				html += printTemp;
			}
		}
		
		return html;
	}
	
	@Override
	public List<TErpPrintTemplate> getTempList(Short tempType, int type, Integer tempModel){
		TErpPrintTemplate temp = new TErpPrintTemplate();
		
		//判断标签模板规格
		if(tempModel != null){
			switch (tempModel) {
			case 1:
				temp.settLength(10);
				temp.settWidth(10);
				break;
			case 2:
				temp.settLength(8);
				temp.settWidth(3);
				break;
			case 3:
				temp.settLength(5);
				temp.settWidth(2);
				break;
			}
		}
		
		temp.setTempType(tempType);
		if(type != 0){
			temp.setEnterpriseId(CurrentUtil.getCurrentUser().getEnterpriseId());
		} else {
			temp.setEnterpriseId(0L);
		}
		return printTemplateMapper.getTempList(temp);
	}

	@Override
	public Pagination<TErpPrintTemplate> queryTempByPage(JqParamBean param) {
		//封装分页参数
		Pagination<TErpPrintTemplate> pagination = PageContext.initialize(param.getPage(), param.getRows());
		//数据库操作
		List<TErpPrintTemplate> list = printTemplateMapper.queryTempByPage(param, pagination.getRowBounds());

		pagination.setData(list);
		
		return pagination;
	}

}
