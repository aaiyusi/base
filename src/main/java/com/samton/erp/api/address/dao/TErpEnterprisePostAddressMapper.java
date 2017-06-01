package com.samton.erp.api.address.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.session.RowBounds;

import com.samton.erp.api.address.bean.entity.TErpEnterprisePostAddress;
import com.samton.platform.common.bean.param.JqParamBean;

/**
 * 回邮地址数据层
 * 
 * @Title: TErpEnterprisePostAddressMapper.java
 * @Package com.samton.erp.api.address.dao
 * @Description: TODO(用一句话描述该文件做什么)
 * @author A18ccms A18ccms_gmail_com
 * @date 2016年3月29日 上午10:41:29
 * @version V1.0
 */
public interface TErpEnterprisePostAddressMapper {

	// 分页查询回邮地址数据
	List<TErpEnterprisePostAddress> selectAddressList(JqParamBean paramBean,
			RowBounds rowBounds);

	// 编辑回邮地址
	int updateByAddressInfo(TErpEnterprisePostAddress te);

	// 新增回邮数据
	int insertAddressInfo(TErpEnterprisePostAddress record);

	// 删除回邮数据
	int deleteAddressInfo(Long addressId);

	int insertSelective(TErpEnterprisePostAddress record);

	// 根据id查询数据
	TErpEnterprisePostAddress selectAddressInfoById(Long addressId);

	int updateByPrimaryKeySelective(TErpEnterprisePostAddress record);

	int updateByPrimaryKey(TErpEnterprisePostAddress record);
	
	/**
	 * 查询最新一条回邮地址
	 * @return
	 */
	TErpEnterprisePostAddress selectOneByFirst(@Param("enterpriseId") long enterpriseId);
	
	/**
	 * 查询所有
	 * @param enterpriseId
	 * @return
	 */
	List<Map<String,Object>> queryAll(@Param("enterpriseId") long enterpriseId);
}