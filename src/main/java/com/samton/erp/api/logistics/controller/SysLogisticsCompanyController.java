package com.samton.erp.api.logistics.controller;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.samton.erp.api.address.bean.entity.TErpEnterprisePostAddress;
import com.samton.erp.api.address.service.TErpEnterprisePostAddressService;
import com.samton.erp.api.logistics.bean.entity.TErpLogisticsTrackingnumber;
import com.samton.erp.api.logistics.bean.vo.LogisticsCompanyParamVO;
import com.samton.erp.api.logistics.bean.vo.RuleVo;
import com.samton.erp.api.logistics.bean.vo.TrackingParamVO;
import com.samton.erp.api.logistics.constant.LogisticsCompanyConstant;
import com.samton.erp.api.logistics.service.ILogisticsCompanyService;
import com.samton.erp.api.logistics.service.IRuleService;
import com.samton.erp.api.logistics.service.ITrackingService;
import com.samton.erp.api.logistics.service.impl.SysLogisticsCompanyService;
import com.samton.erp.api.warehouse.bean.entity.WhouseParamVO;
import com.samton.platform.common.bean.param.JqParamBean;
import com.samton.platform.framework.base.SdkBaseController;
import com.samton.platform.framework.bean.UserCacheBean;
import com.samton.platform.framework.mybatis.pagination.Pagination;
import com.samton.platform.framework.util.CurrentUtil;

/**
 * 
 *
 * @Description:物流渠道主表表
 * @author:     fina
 * @date:       2016年4月18日
 * Copyright (c) 2015, Samton. All rights reserved
 */
@Controller
@RequestMapping("/api/sysLogisticsCompany")
public class SysLogisticsCompanyController extends SdkBaseController {
	

	
	@Resource
	private TErpEnterprisePostAddressService addresService;
	
	@Resource
	private SysLogisticsCompanyService sysLogisticsCompanyService;
	/**
	 * 主查询列表
	 * @param lostManager
	 * @param page
	 * @param rows
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("queryList")
	@ResponseBody
	public Map<String,Object> queryList(JqParamBean jqParamBean, LogisticsCompanyParamVO logisticsCompanyParamVO) throws Exception{
		//查询对象不为空
		if(null != logisticsCompanyParamVO){
		}
		logisticsCompanyParamVO.setType(LogisticsCompanyConstant.MYSELF);
		//封装查询条件
		jqParamBean.setSearch(logisticsCompanyParamVO);
		//数据库操作
		Pagination<Map<String, Object>> logisticsCompany = sysLogisticsCompanyService.queryLogisticsCompanyList(jqParamBean);
		//返回结果
		boolean result =logisticsCompany != null ? true : false;
 		return this.getResultMap(result, logisticsCompany);
	}
	
	/**
	 * 查询最新一条回邮地址
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("queryAddresByFirst")
	@ResponseBody
	public Map<String,Object> queryAddresByFirst() throws Exception{
		//数据库操作
		TErpEnterprisePostAddress address = addresService.selectOneByFirst();
		boolean result =address != null ? true : false;
 		return this.getResultMap(result, address);
	}
}
