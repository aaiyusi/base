package com.samton.erp.api.print.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.samton.erp.api.print.bean.entity.TErpPrintTemplate;
import com.samton.erp.api.print.service.IPrintService;
import com.samton.erp.common.util.ChangeString;
import com.samton.platform.common.bean.param.JqParamBean;
import com.samton.platform.framework.base.SdkBaseController;
import com.samton.platform.framework.mybatis.pagination.Pagination;

/**
 * 
 *
 * @Description:标签打印中心Controller
 * @author:     Alex
 * @date:        2016年4月20日 下午4:17:14
 * Copyright (c) 2016, Samton. All rights reserved
 */
@Controller
@RequestMapping("/api/print")
public class PrintController extends SdkBaseController {
	
	@Resource
	private IPrintService printService;
	
	/**
	 * 
	 * @Title:        getTempList 
	 * @Description:  根据标签类型，获得标签模板
	 * @param:        @param tempType	标签类型
	 * @param:        @param type		0：默认模板	1：企业模板
	 * @param:        @param tempModel	0:全部规格	1：10cm x 10cm	2:8cm x 3cm	3:5cm x 2cm
	 * @param:        @return    
	 * @return:       Map<String,Object>    
	 * @author        Alex
	 * @Date          2016年4月20日 下午4:23:16
	 */
	@RequestMapping(value = "/getTempList")
	@ResponseBody
	public Map<String, Object> getTempList(Short tempType, int type, Integer tempModel){
		List<TErpPrintTemplate> list =printService.getTempList(tempType, type, tempModel);
		return this.getResultMap(list.size() > 0, list);
	}
	
	/**
	 * 
	 * @Title:        queryTempByPage 
	 * @Description:  获得标签模板数据(分页)
	 * @param:        @param param
	 * @param:        @param temp
	 * @param:        @param tempModel	0:全部规格	1：10cm x 10cm	2:8cm x 3cm	3:5cm x 2cm
	 * @param:        @return    
	 * @return:       Map<String,Object>    
	 * @author        Alex
	 * @Date          2016年4月25日 上午9:49:01
	 */
	@RequestMapping(value = "/queryTempByPage")
	@ResponseBody
	public Map<String, Object> queryTempByPage(JqParamBean param, TErpPrintTemplate temp, Integer tempModel){
		
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
		
		//获得当前登陆信息
//		UserCacheBean userCacheBean = CurrentUtil.getCurrentUser();
//		temp.setCreateUserId(userCacheBean.getUserId());
//		temp.setEnterpriseId(userCacheBean.getEnterpriseId());
		
		param.setSidx(ChangeString.changeString(param.getSidx(), 0));
		
		//设置查询信息
		param.setSearch(temp);
		
		//查询数据
		Pagination<TErpPrintTemplate> list = printService.queryTempByPage(param);
		return this.getResultMap(list != null, list);
	}

}
