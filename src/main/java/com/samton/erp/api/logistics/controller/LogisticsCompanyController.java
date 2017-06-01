package com.samton.erp.api.logistics.controller;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.samton.erp.api.address.bean.entity.TErpEnterprisePostAddress;
import com.samton.erp.api.address.service.TErpEnterprisePostAddressService;
import com.samton.erp.api.logistics.bean.entity.TErpLogisticsCompany;
import com.samton.erp.api.logistics.bean.entity.TErpSysLogisticsCompany;
import com.samton.erp.api.logistics.bean.vo.LogisticsCompanyParamVO;
import com.samton.erp.api.logistics.constant.LogisticsCompanyConstant;
import com.samton.erp.api.logistics.constant.LogisticsCompanyExpConstant;
import com.samton.erp.api.logistics.service.ILogisticsCompanyService;
import com.samton.erp.api.logistics.service.impl.SysLogisticsCompanyService;
import com.samton.platform.common.bean.param.JqParamBean;
import com.samton.platform.framework.base.SdkBaseController;
import com.samton.platform.framework.exception.ControllerException;
import com.samton.platform.framework.mybatis.pagination.Pagination;
import com.samton.platform.framework.util.CurrentUtil;

/**
 * 
 *
 * @Description:自定义物流渠道主子表
 * @author:     fina
 * @date:       2016年4月18日
 * Copyright (c) 2015, Samton. All rights reserved
 */
@Controller
@RequestMapping("/api/logisticsCompany")
public class LogisticsCompanyController extends SdkBaseController {

	
	@Resource
	private TErpEnterprisePostAddressService addresService;
	
	@Resource
	private ILogisticsCompanyService logisticsCompanyService;
	
	@Resource
	private SysLogisticsCompanyService sysLogisticsCompanyService;
	
	/**
	 * 主列表查询列表
	 * @param lostManager
	 * @param page
	 * @param rows
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("queryChildList")
	@ResponseBody
	public Map<String,Object> queryChildList(JqParamBean jqParamBean,LogisticsCompanyParamVO logisticsCompanyParamVO) throws Exception{
		//查询对象不为空
		if(null != logisticsCompanyParamVO){
		}
		logisticsCompanyParamVO.setType(LogisticsCompanyConstant.MYSELF);
		//封装查询条件
		jqParamBean.setSearch(logisticsCompanyParamVO);
		//数据库操作
		Pagination<Map<String, Object>> logistics = logisticsCompanyService.queryList(jqParamBean);
		//返回结果
		boolean result =logistics != null ? true : false;
 		return this.getResultMap(result, logistics);
	}
	/**
	 * 物流渠道新增/修改
	 * @param tracking
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("addLogisticsCompany")
	@ResponseBody
	public Map<String,Object> addLogisticsCompany(TErpLogisticsCompany logistics) throws Exception{
		int i;
		//数据库操作
		if(logistics != null && logistics.getLogisticsId() !=null){//修改
			TErpLogisticsCompany entity = logisticsCompanyService.queryLogisticsCompanyById(logistics.getLogisticsId());
			logistics.setSysLogisticsId(entity.getSysLogisticsId());
			TErpLogisticsCompany temp = logisticsCompanyService.queryLogisticsByNameSysId(logistics);
			if(temp != null && !entity.getName().equals(temp.getName())){
				throw new ControllerException(LogisticsCompanyExpConstant.LOGISTICS_COMPANY_SAME_NAME, "非法数据--渠道名称已存在");
			}
			
			 i = logisticsCompanyService.updateLogisticsCompany(logistics);
		}else{
			/**
			 * 是否存在同名物流公司
			 */
			TErpSysLogisticsCompany temp = new TErpSysLogisticsCompany();
			temp.setName(logistics.getName());
			temp.setEnterpriseId(CurrentUtil.getCurrentUser().getEnterpriseId());
			TErpSysLogisticsCompany sysLog = sysLogisticsCompanyService.querySysLogisticsByNameSysId(temp);
			if(sysLog != null ){
				throw new ControllerException(LogisticsCompanyExpConstant.LOGISTICS_COMPANY_SYS_SAME_NAME, "物流公司名称已存在");
			}
			
			 i  = logisticsCompanyService.addLogisticsCompany(logistics);
		}
		//返回结果
		boolean result =i == 1 ? true : false;
 		return this.getResultMap(result);
	}

	/**
	 * 物流渠道Copy
	 * @param tracking
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("copyLogisticsCompany")
	@ResponseBody
	public Map<String,Object> copyLogisticsCompany(TErpLogisticsCompany logistics) throws Exception{
		int i;
		TErpLogisticsCompany entity = logisticsCompanyService.queryLogisticsCompanyById(logistics.getLogisticsId());
		logistics.setSysLogisticsId(entity.getSysLogisticsId());
		TErpLogisticsCompany temp = logisticsCompanyService.queryLogisticsByNameSysId(logistics);
		if(temp != null && !entity.getName().equals(temp.getName())){
			throw new ControllerException(LogisticsCompanyExpConstant.LOGISTICS_COMPANY_SAME_NAME, "非法数据--渠道名称已存在");
		}
		//数据库操作
		entity.setLogisticsId(null);
		entity.setName(logistics.getName());
		
		i  = logisticsCompanyService.copyLogisticsCompany(entity);
		//返回结果
		boolean result =i == 1 ? true : false;
 		return this.getResultMap(result);
	}
	
	
	/**
	 * 修改物流公司名称
	 */
	@RequestMapping("UpdateLogisticsCompanyName")
	@ResponseBody
	public Map<String,Object> UpdateLogisticsCompanyName(TErpSysLogisticsCompany syslogistics) throws Exception{
		//数据库操作
		TErpSysLogisticsCompany temp = sysLogisticsCompanyService.querySysLogisticsByNameSysId(syslogistics);
		TErpSysLogisticsCompany entity = sysLogisticsCompanyService.querySysLogisticsCompanyById(syslogistics);
		
			if(temp != null && !entity.getName().equals(temp.getName())){
				throw new ControllerException(LogisticsCompanyExpConstant.LOGISTICS_COMPANY_SYS_SAME_NAME, "物流公司名称已存在");
			}
		entity.setName(syslogistics.getName());
		int i = sysLogisticsCompanyService.UpateSysLogisticsCompany(entity);
		
		boolean result =i != 0 ? true : false;
 		return this.getResultMap(result);
	}
	
	/**
	 * 子查询列表
	 * @param lostManager
	 * @param page
	 * @param rows
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("queryMainList")
	@ResponseBody
	public Map<String,Object> queryMainList(JqParamBean jqParamBean, LogisticsCompanyParamVO logisticsCompanyParamVO) throws Exception{
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
	
	/**
	 * 根据回邮地址id查询对象
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("queryAddresById")
	@ResponseBody
	public Map<String,Object> queryAddresById(long id) throws Exception{
		//数据库操作
		TErpLogisticsCompany entity = logisticsCompanyService.queryLogisticsCompanyById(id);
		TErpEnterprisePostAddress address = addresService.getAddressInfo(entity.getBackAddressId());
		boolean result =address != null ? true : false;
 		return this.getResultMap(result, address);
	}
	
	/**
	 * 根据id查询子表
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("queryLogisticsCompanyById")
	@ResponseBody
	public Map<String,Object> queryLogisticsCompanyById(long dataId) throws Exception{
		//数据库操作
		TErpLogisticsCompany entity = logisticsCompanyService.queryLogisticsCompanyById(dataId);
		boolean result =entity != null ? true : false;
 		return this.getResultMap(result, entity);
	}
	
	/**
	 * 主表删除
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("delSysLogisticsCompanyById")
	@ResponseBody
	public Map<String,Object> delSysLogisticsCompanyById(long id) throws Exception{
		//数据库操作
		int i =sysLogisticsCompanyService.delSysLogisticsById(id);
		boolean result =i != 0 ? true : false;
 		return this.getResultMap(result);
	}
	
	/**
	 * 子表删除
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("delLogisticsCompanyById")
	@ResponseBody
	public Map<String,Object> delLogisticsCompanyById(long id) throws Exception{
		//数据库操作
		TErpLogisticsCompany temp = logisticsCompanyService.queryLogisticsCompanyById(id);
		temp.setState(LogisticsCompanyConstant.SYS_LOGISTICS_COMPANY_DEL);
		int i =logisticsCompanyService.updateLogisticsCompany(temp);
		boolean result =i != 0 ? true : false;
 		return this.getResultMap(result);
	}
	
	/**
	 * 查询所有回邮地址
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("queryAllAddress")
	@ResponseBody
	public Map<String,Object> queryAllAddress() throws Exception{
		//数据库操作
		List<Map<String,Object>> list = addresService.queryAll();
		boolean result =list != null ? true : false;
 		return this.getResultMap(result,list);
	}
	
	/**
	 * 获取已授权的物流渠道
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/queryAuthLogistics")
	@ResponseBody
	public Map<String, Object> queryAuthLogistics() throws Exception{
		//数据库操作
		List<Map<String,Object>> logistList = logisticsCompanyService.queryAuthLogistics();
		return this.getResultMap(logistList.isEmpty() ? false : true,logistList);
	}
	
	/**
	 * 启用禁用物流渠道
	 * @param id
	 * @param value
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("trunOffOn")
	@ResponseBody
	public int trunOffOn(long id,short value) throws Exception{
		TErpLogisticsCompany temp = logisticsCompanyService.queryLogisticsCompanyById(id);
		temp.setState(value);
		return logisticsCompanyService.updateLogisticsCompany(temp);
	}
}
