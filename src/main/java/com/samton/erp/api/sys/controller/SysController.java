package com.samton.erp.api.sys.controller;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.samton.erp.api.sys.bean.entity.TErpSysEnterprise;
import com.samton.erp.api.sys.bean.entity.vo.TErpSysEnterpriseVo;
import com.samton.erp.api.sys.service.ISysService;
import com.samton.platform.common.bean.param.JqParamBean;
import com.samton.platform.framework.base.SdkBaseController;
import com.samton.platform.framework.mybatis.pagination.Pagination;
import com.samton.platform.framework.util.CurrentUtil;

/**
 * 
* @ClassName: SysController 
* @Description: TODO(这里用一句话描述这个类的作用) 
* @author A18ccms a18ccms_gmail_com 
* @date 2016年4月18日 下午5:06:20 
*
 */
@Controller
@RequestMapping("/api/sys")
public class SysController extends SdkBaseController {
	
	/**
	 * 跳转视图
	 */
	private final static String VIEW_ENTERPRISE_PAGE = "operate/enterpriseDetail";
	
	@Resource
	private ISysService sysService;
	
	/**
	 * 
	 * @Description: 获取当前用户 企业信息
	 * @param @return
	 * @param @throws Exception   
	 * @return Map<String,Object>  
	 * @throws
	 * @author yokoboy
	 * @date 2016年4月18日
	 */
	@RequestMapping(value = "/getCurrentEnterpriseInfo")
	@ResponseBody
	public Map<String, Object>getCurrentEnterpriseInfo() throws Exception{
		Long enterpriseId = CurrentUtil.getCurrentUser().getEnterpriseId();
		TErpSysEnterprise enterprise = sysService.getenterEnterpriseById(enterpriseId);
		return this.getResultMap(enterprise!=null, enterprise);
	}
	
	/**
	 * 跳转到企业信息页面
	 * @Description: 根据企业id获取企业信息
	 * @param @param enterpriseId
	 * @param @return
	 * @param @throws Exception   
	 * @return Map<String,Object>  
	 * @throws
	 * @author yokoboy
	 * @date 2016年4月21日
	 */
	@RequestMapping(value = "/goGetEnterpriseInfoPage")
	public String goGetEnterpriseInfoPage(Long enterpriseId) throws Exception{
		TErpSysEnterprise enterprise = sysService.getenterEnterpriseById(enterpriseId);
		request.setAttribute("enterprise", enterprise);
		//返回物理视图
		return VIEW_ENTERPRISE_PAGE;
	}
	 
	
	/**
	 * 
	 * @Description: 更新当前用户 企业信息
	 * @param @param enterprise
	 * @param @return
	 * @param @throws Exception   
	 * @return Map<String,Object>  
	 * @throws
	 * @author yokoboy
	 * @date 2016年4月18日
	 */
	@RequestMapping(value = "/updateCurrentEnterpriseInfo")
	@ResponseBody
	public Map<String, Object>updateCurrentEnterpriseInfo(TErpSysEnterprise enterprise) throws Exception{
		int result = sysService.updateCurrentTErpSysEnterprise(enterprise);
		return this.getResultMap(result>0);
	}
	
	/**
	 * 
	 * @Description: 管理远端查看企业列表
	 * @param @param enterprise
	 * @param @return
	 * @param @throws Exception   
	 * @return Map<String,Object>  
	 * @throws
	 * @author yokoboy
	 * @date 2016年4月20日
	 */
	@RequestMapping(value = "/queryEnterpriseList")
	@ResponseBody
	public Map<String, Object>queryEnterpriseList(JqParamBean param, TErpSysEnterpriseVo enterprise) throws Exception{
		//设置查询信息
		param.setSearch(enterprise);
		//查询数据
		Pagination<TErpSysEnterpriseVo> list = sysService.queryEnterpriseList(param);
		return this.getResultMap(list != null, list);
	}
 
}
