/**
 * 
 */
/** 
 * @Title: package-info.java 
 * @Package com.samton.erp.api.address.service.impl 
 * @Description: TODO(用一句话描述该文件做什么) 
 * @author A18ccms A18ccms_gmail_com 
 * @date 2016年3月29日 上午10:44:35 
 * @version V1.0 
 */
package com.samton.erp.api.address.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.samton.erp.api.address.bean.entity.TErpEnterprisePostAddress;
import com.samton.erp.api.address.dao.TErpEnterprisePostAddressMapper;
import com.samton.erp.api.address.service.TErpEnterprisePostAddressService;
import com.samton.platform.common.bean.param.JqParamBean;
import com.samton.platform.framework.mybatis.pagination.PageContext;
import com.samton.platform.framework.mybatis.pagination.Pagination;
import com.samton.platform.framework.util.CurrentUtil;

@Service("addressService")
public class TErpEnterprisePostAdderssServiceImpl implements
		TErpEnterprisePostAddressService {
	@Resource
	private TErpEnterprisePostAddressMapper addressMapper;

	@Override
	public Pagination<TErpEnterprisePostAddress> getAddressInfoList(
			JqParamBean paramBean) {
		paramBean.setSearch(CurrentUtil.getCurrentUser().getEnterpriseId());
		Pagination<TErpEnterprisePostAddress> pagination = PageContext
				.initialize(paramBean.getPage(), paramBean.getRows());
		List<TErpEnterprisePostAddress> list = addressMapper.selectAddressList(
				paramBean, pagination.getRowBounds());
		pagination.setData(list);
		return pagination;
	}

	@Override
	public int addAddressInfo(TErpEnterprisePostAddress te) {
		te.setEnterpriseId(CurrentUtil.getCurrentUser().getEnterpriseId());
		te.setCreateUserId(CurrentUtil.getCurrentUser().getUserId());
		te.setCreateUserName(CurrentUtil.getCurrentUser().getUserName());
		te.setState(1);
		return addressMapper.insertAddressInfo(te);
	}

	@Override
	public TErpEnterprisePostAddress getAddressInfo(Long addressId) {
		return addressMapper.selectAddressInfoById(addressId);
	}

	@Override
	public int delAddressInfo(Long addressId) {
		return addressMapper.deleteAddressInfo(addressId);
	}

	@Override
	public int editAddressInfo(TErpEnterprisePostAddress te) {
		te.setModifyUserId(CurrentUtil.getCurrentUser().getUserId());
		te.setModifyUserName(CurrentUtil.getCurrentUser().getUserName());
		return addressMapper.updateByAddressInfo(te);
	}

	@Override
	public TErpEnterprisePostAddress selectOneByFirst() {
		return addressMapper.selectOneByFirst(CurrentUtil.getCurrentUser()
				.getEnterpriseId());
	}

	@Override
	public List<Map<String, Object>> queryAll() {
		return addressMapper.queryAll(CurrentUtil.getCurrentUser()
				.getEnterpriseId());
	}
}