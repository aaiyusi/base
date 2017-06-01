/**回邮地址逻辑层 
 * @Title: package-info.java 
 * @Package com.samton.erp.api.address.service 
 * @Description: TODO(用一句话描述该文件做什么) 
 * @author A18ccms A18ccms_gmail_com 
 * @date 2016年3月29日 上午10:32:44 
 * @version V1.0 
 */
package com.samton.erp.api.address.service;

import java.util.List;
import java.util.Map;

import com.samton.erp.api.address.bean.entity.TErpEnterprisePostAddress;
import com.samton.platform.common.bean.param.JqParamBean;
import com.samton.platform.framework.mybatis.pagination.Pagination;

public interface TErpEnterprisePostAddressService {
	// 获取回邮地址数据
	Pagination<TErpEnterprisePostAddress> getAddressInfoList(
			JqParamBean paramBean);

	// 新增回邮地址
	int addAddressInfo(TErpEnterprisePostAddress te);

	// 根据id获取数据
	TErpEnterprisePostAddress getAddressInfo(Long addressId);

	// 删除回邮数据
	int delAddressInfo(Long addressId);

	// 编辑回邮数据
	int editAddressInfo(TErpEnterprisePostAddress te);
	
	/**
	 * 查询最新一条回邮地址
	 * @return
	 */
	TErpEnterprisePostAddress selectOneByFirst();
	
	List<Map<String,Object>> queryAll();
}