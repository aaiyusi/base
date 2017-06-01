package com.samton.erp.api.rate.dao;

import java.util.List;

import org.apache.ibatis.session.RowBounds;

import com.samton.erp.api.rate.bean.entity.TErpSysEnterpriseRate;
import com.samton.erp.api.rate.bean.entity.TErpSysRate;
import com.samton.platform.common.bean.param.JqParamBean;

public interface TErpSysRateMapper {
	// 获取汇率分页数据
	List<TErpSysRate> selectSysRateList(JqParamBean paramBean,
			RowBounds rowBounds);

	// 根据id查取汇率数据
	TErpSysRate selectByRateId(TErpSysEnterpriseRate te);

	// 修改汇率数据
	int updateByRateInfo(TErpSysRate ts);

	// 删除汇率数据
	int delByRateId(Long rateId);

	// 增加汇率企业设置数据
	int insertEnterpriseRate(TErpSysEnterpriseRate te);

	// 根据汇率id查询企业设置数据
	TErpSysEnterpriseRate selectEnterpriseRateByRateId(TErpSysEnterpriseRate te);

	// 修改汇率企业表数据
	int updateEnterpriseRateByRateId(TErpSysEnterpriseRate te);
	
	//查询所有的汇率
	List<TErpSysRate> queryAllRateList();
}