/** 
 * 汇率管理逻辑层 
 * @Title: package-info.java 
 * @Package com.samton.erp.api.rate.service 
 * @Description: TODO(用一句话描述该文件做什么) 
 * @author A18ccms A18ccms_gmail_com 
 * @date 2016年3月31日 下午3:17:39 
 * @version V1.0 
 */
package com.samton.erp.api.rate.service;

import java.util.List;

import com.samton.erp.api.rate.bean.entity.TErpSysRate;
import com.samton.platform.common.bean.param.JqParamBean;
import com.samton.platform.framework.mybatis.pagination.Pagination;

public interface TErpSysRateService {
	// 获取汇率信息
	Pagination<TErpSysRate> getSysRateList(JqParamBean paramBean);

	// 根据id查取汇率数据
	TErpSysRate getSysRateId(Long rateId);

	// 修改汇率数据
	int editSysRateInfo(TErpSysRate ts);

	// 删除汇率数据
	int delSysRateInfo(Long rateId);
	
	//查询所有的汇率
	List<TErpSysRate> queryAllRateList();
}