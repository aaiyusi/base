package com.samton.erp.api.logistics.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.samton.erp.api.logistics.bean.entity.TErpLogisticsCompany;
import com.samton.erp.api.logistics.bean.entity.TErpSysLogisticsCompany;
import com.samton.erp.api.logistics.dao.TErpLogisticsCompanyMapper;
import com.samton.erp.api.logistics.dao.TErpSysLogisticsCompanyMapper;
import com.samton.erp.api.logistics.service.ILogisticsCompanyService;
import com.samton.platform.common.bean.param.JqParamBean;
import com.samton.platform.core.constant.StateConstant;
import com.samton.platform.framework.bean.UserCacheBean;
import com.samton.platform.framework.exception.ServiceException;
import com.samton.platform.framework.mybatis.pagination.PageContext;
import com.samton.platform.framework.mybatis.pagination.Pagination;
import com.samton.platform.framework.util.CurrentUtil;
@Service("logisticsCompanyService")
public class LogisticsCompanyService implements ILogisticsCompanyService {

	@Resource
	private TErpLogisticsCompanyMapper LogisticsCompanyMapper;
	
	@Resource
	private TErpSysLogisticsCompanyMapper sysLogisticsCompanyMapper;
	

	private static final short  myslef = 2;//自定义创建
	private static final short sys = 1;//系统创建
	/**
	 * 物流渠道主列表
	 * @param whouseChild
	 * @return
	 * @throws ServiceException
	 */
	@Override
	public Pagination<Map<String, Object>> queryList(
		JqParamBean jqParamBean) throws Exception {
		//封装分页参数
		Pagination<Map<String, Object>> pagination = PageContext.initialize(jqParamBean.getPage(), jqParamBean.getRows());
		//数据库操作
		List<Map<String, Object>> warehouseList = LogisticsCompanyMapper.queryLogisticsCompanyRecord(jqParamBean,pagination.getRowBounds());
		//返回数据
		pagination.setData(warehouseList);
		return pagination;
	}

	/**
	 * 物流渠道所有子表数据列表
	 */
	@Override
	public List<Map<String, Object>> queryAllLogistics(TErpSysLogisticsCompany record) throws Exception {
		record.setEnterpriseId(CurrentUtil.getCurrentUser().getEnterpriseId());
		return LogisticsCompanyMapper.selectAllLogistics(record);
	}

	@Override
	public int addLogisticsCompany(
			TErpLogisticsCompany entity) throws Exception {
		
		TErpSysLogisticsCompany sysLogisticsCompany = new TErpSysLogisticsCompany();
		CurrentUtil.setBaseBeanByInsert(sysLogisticsCompany);
		sysLogisticsCompany.setEnterpriseId(CurrentUtil.getCurrentUser().getEnterpriseId());
		sysLogisticsCompany.setCreateUserId(CurrentUtil.getCurrentUser().getUserId());
		sysLogisticsCompany.setState(StateConstant.ADD);
		sysLogisticsCompany.setType(myslef);
		sysLogisticsCompany.setName(entity.getName());
		sysLogisticsCompany.seteCode(entity.geteCode());
		
		int i = sysLogisticsCompanyMapper.insertSelective(sysLogisticsCompany);
		
		CurrentUtil.setBaseBeanByInsert(entity);
		entity.setEnterpriseId(CurrentUtil.getCurrentUser().getEnterpriseId());
		entity.setCreateUserId(CurrentUtil.getCurrentUser().getUserId());
		entity.setState(StateConstant.ADD);
		entity.setType(myslef);
		entity.setAddressId(entity.getBackAddressId());
		entity.setSysLogisticsId(sysLogisticsCompany.getSysLogisticsId());
		
		int j = LogisticsCompanyMapper.insertSelective(entity);
		
		return j != 0 && i !=0 ? 1:0;
	}

	@Override
	public TErpLogisticsCompany queryLogisticsCompanyById(long logisticsId)
			throws Exception {
		return LogisticsCompanyMapper.selectByPrimaryKey(logisticsId);
	}

	@Override
	public int updateLogisticsCompany(TErpLogisticsCompany entity)
			throws Exception {
		
		CurrentUtil.setBaseBeanByModify(entity);
		return LogisticsCompanyMapper.updateByPrimaryKeySelective(entity);
	}

	@Override
	public TErpLogisticsCompany queryLogisticsByNameSysId(TErpLogisticsCompany entity)
			throws Exception {
		entity.setEnterpriseId(CurrentUtil.getCurrentUser().getEnterpriseId());
		return LogisticsCompanyMapper.queryByNameSysId(entity);
	}

	@Override
	public int copyLogisticsCompany(TErpLogisticsCompany entity) {
		return  LogisticsCompanyMapper.insertSelective(entity);
	}

	@Override
	public List<TErpLogisticsCompany> queryAllLogisticsById(
			TErpSysLogisticsCompany record) throws Exception {
		record.setEnterpriseId(CurrentUtil.getCurrentUser().getEnterpriseId());
		return LogisticsCompanyMapper.selectAllLogisticsBySysId(record);
	}
	
	/**
	 * 获取物流渠道
	 * @param enterpriseId
	 * @return
	 * @throws ServiceException
	 */
	@Override
	public List<Map<String, Object>> queryAuthLogistics() throws ServiceException {
		//获取当前登录用户信息
		UserCacheBean userCacheBean = CurrentUtil.getCurrentUser();
		//获取企业信息
		long enterpriseId = userCacheBean.getEnterpriseId();
		return LogisticsCompanyMapper.queryAuthLogistics(enterpriseId);
	}
}
