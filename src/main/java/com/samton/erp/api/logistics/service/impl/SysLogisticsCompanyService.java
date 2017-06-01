package com.samton.erp.api.logistics.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.samton.erp.api.logistics.bean.entity.TErpLogisticsCompany;
import com.samton.erp.api.logistics.bean.entity.TErpSysLogisticsCompany;
import com.samton.erp.api.logistics.constant.LogisticsCompanyConstant;
import com.samton.erp.api.logistics.dao.TErpLogisticsCompanyMapper;
import com.samton.erp.api.logistics.dao.TErpSysLogisticsCompanyMapper;
import com.samton.erp.api.logistics.service.ISysLogisticsCompanyService;
import com.samton.platform.common.bean.param.JqParamBean;
import com.samton.platform.framework.exception.ServiceException;
import com.samton.platform.framework.mybatis.pagination.PageContext;
import com.samton.platform.framework.mybatis.pagination.Pagination;
import com.samton.platform.framework.util.CurrentUtil;
@Service("sysLogisticsCompanyService")
public class SysLogisticsCompanyService implements ISysLogisticsCompanyService {

	@Resource
	private TErpSysLogisticsCompanyMapper sysLogisticsCompanyMapper;
	
	@Resource
	private TErpLogisticsCompanyMapper logisticsCompanyMapper;

	/**
	 * 物流渠道主列表
	 * @param whouseChild
	 * @return
	 * @throws ServiceException
	 */
	@Override
	public Pagination<Map<String, Object>> queryLogisticsCompanyList(
		JqParamBean jqParamBean) throws Exception {
		//封装分页参数
		Pagination<Map<String, Object>> pagination = PageContext.initialize(jqParamBean.getPage(), jqParamBean.getRows());
		//数据库操作
		List<Map<String, Object>> warehouseList = sysLogisticsCompanyMapper.queryLogisticsCompanyRecord(jqParamBean,pagination.getRowBounds());
		//返回数据
		pagination.setData(warehouseList);
		return pagination;
	}
	@Override
	public TErpSysLogisticsCompany querySysLogisticsCompanyById(
			TErpSysLogisticsCompany sysLogistics) throws Exception {
		return sysLogisticsCompanyMapper.selectByPrimaryKey(sysLogistics.getSysLogisticsId());
	}
	@Override
	public int UpateSysLogisticsCompany(TErpSysLogisticsCompany sysLogistics)
			throws Exception {
		CurrentUtil.setBaseBeanByModify(sysLogistics);
		return sysLogisticsCompanyMapper.updateByPrimaryKeySelective(sysLogistics);
	}
	@Override
	public TErpSysLogisticsCompany querySysLogisticsByNameSysId(
			TErpSysLogisticsCompany entity) throws Exception {
		
		entity.setEnterpriseId(CurrentUtil.getCurrentUser().getEnterpriseId());
		return sysLogisticsCompanyMapper.queryByNameSysId(entity);
	}
	@Override
	public int delSysLogisticsById(long id) throws Exception {
		TErpSysLogisticsCompany temp = sysLogisticsCompanyMapper.selectByPrimaryKey(id);
		temp.setState(LogisticsCompanyConstant.SYS_LOGISTICS_COMPANY_DEL);
		
		List<TErpLogisticsCompany> list = logisticsCompanyMapper.selectAllLogisticsBySysId(temp);
		for(TErpLogisticsCompany li:list){
			li.setState(LogisticsCompanyConstant.SYS_LOGISTICS_COMPANY_DEL);
			logisticsCompanyMapper.updateByPrimaryKeySelective(li);
		}
		return sysLogisticsCompanyMapper.updateByPrimaryKeySelective(temp);
	}


}
