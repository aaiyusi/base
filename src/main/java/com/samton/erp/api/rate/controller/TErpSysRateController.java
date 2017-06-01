/**
 * 
 */
/** 
 * @Title: package-info.java 
 * @Package com.samton.erp.api.rate.controller 
 * @Description: TODO(用一句话描述该文件做什么) 
 * @author A18ccms A18ccms_gmail_com 
 * @date 2016年3月31日 下午3:17:30 
 * @version V1.0 
 */
package com.samton.erp.api.rate.controller;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.samton.erp.api.rate.bean.entity.TErpSysRate;
import com.samton.erp.api.rate.service.TErpSysRateService;
import com.samton.platform.common.bean.param.JqParamBean;
import com.samton.platform.framework.base.SdkBaseController;
import com.samton.platform.framework.mybatis.pagination.Pagination;

@Controller
@RequestMapping("/api/rate")
public class TErpSysRateController extends SdkBaseController {
	@Resource
	private TErpSysRateService sysRateService;

	/**
	 * 汇率管理回邮地址
	 * 
	 * @Title: TErpSysRateController.java
	 * @Package com.samton.erp.api.rate.controller
	 * @Description: TODO(用一句话描述该文件做什么)
	 * @author jinzhiqiang
	 * @date 2016年4月6日 下午5:33:38
	 * @version V1.0
	 */
	@RequestMapping("/getSysRateList")
	@ResponseBody
	public Map<String, Object> getSysRateList(JqParamBean jq) {
		Pagination<TErpSysRate> pa = sysRateService.getSysRateList(jq);
		return this.getResultMap(true, pa);
	}

	/**
	 * 获取编辑页面数据
	 * 
	 * @Title: TErpSysRateController.java
	 * @Package com.samton.erp.api.rate.controller
	 * @Description: TODO(用一句话描述该文件做什么)
	 * @author jinzhiqiang
	 * @date 2016年4月6日 下午8:44:40
	 * @version V1.0
	 */
	@RequestMapping("/getSysRateInfo")
	@ResponseBody
	public Map<String, Object> getSysRateInfo(Long rateId) {
		TErpSysRate tr = sysRateService.getSysRateId(rateId);
		return this.getResultMap(true, tr);
	}

	/**
	 * 修改数据
	 * 
	 * @Title: TErpSysRateController.java
	 * @Package com.samton.erp.api.rate.controller
	 * @Description: TODO(用一句话描述该文件做什么)
	 * @author jinzhiqiang
	 * @date 2016年4月6日 下午8:46:41
	 * @version V1.0
	 */
	@RequestMapping("/editSysRateInfo")
	@ResponseBody
	public Map<String, Object> editSysRateInfo(TErpSysRate te) {
		return this.getResultMap(sysRateService.editSysRateInfo(te));
	}

	/**
	 * 删除数据
	 * 
	 * @Title: TErpSysRateController.java
	 * @Package com.samton.erp.api.rate.controller
	 * @Description: TODO(用一句话描述该文件做什么)
	 * @author jinzhiqiang
	 * @date 2016年4月6日 下午8:49:29
	 * @version V1.0
	 */
	@RequestMapping("/delSysRate")
	@ResponseBody
	public Map<String, Object> delSysRate(Long rateId) {
		return this.getResultMap(sysRateService.delSysRateInfo(rateId));
	}
	
	/**
	 * 查询所有的汇率
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/queryAllRateList")
	@ResponseBody
	public Map<String, Object> queryAllRateList() throws Exception{
		//数据库操作
		List<TErpSysRate> rateList = sysRateService.queryAllRateList();
		return this.getResultMap(rateList.isEmpty() ? false : true, rateList);
	}
}