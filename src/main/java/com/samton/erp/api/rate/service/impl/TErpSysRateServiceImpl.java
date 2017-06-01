/** 
 * @Title: package-info.java 
 * @Package com.samton.erp.api.rate.service.impl 
 * @Description: TODO(用一句话描述该文件做什么) 
 * @author A18ccms A18ccms_gmail_com 
 * @date 2016年3月31日 下午3:31:40 
 * @version V1.0 
 */
package com.samton.erp.api.rate.service.impl;

import java.math.BigDecimal;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.samton.erp.api.rate.bean.entity.TErpSysEnterpriseRate;
import com.samton.erp.api.rate.bean.entity.TErpSysRate;
import com.samton.erp.api.rate.dao.TErpSysRateMapper;
import com.samton.erp.api.rate.service.TErpSysRateService;
import com.samton.platform.common.bean.param.JqParamBean;
import com.samton.platform.framework.mybatis.pagination.PageContext;
import com.samton.platform.framework.mybatis.pagination.Pagination;
import com.samton.platform.framework.util.CurrentUtil;

@Service("sysRateService")
public class TErpSysRateServiceImpl implements TErpSysRateService {
	@Resource
	private TErpSysRateMapper sysRateMapper;

	@Override
	public Pagination<TErpSysRate> getSysRateList(JqParamBean paramBean) {
		paramBean.setSearch(CurrentUtil.getCurrentUser().getEnterpriseId());
		Pagination<TErpSysRate> pagination = PageContext.initialize(
				paramBean.getPage(), paramBean.getRows());
		List<TErpSysRate> list = sysRateMapper.selectSysRateList(paramBean,
				pagination.getRowBounds());
		pagination.setData(list);
		return pagination;
	}

	@Override
	public int delSysRateInfo(Long rateId) {
		TErpSysEnterpriseRate param = new TErpSysEnterpriseRate();
		param.setRateId(rateId);
		param.setEnterpriseId(CurrentUtil.getCurrentUser().getEnterpriseId());
		TErpSysEnterpriseRate te = sysRateMapper
				.selectEnterpriseRateByRateId(param);
		if (te == null) {
			TErpSysEnterpriseRate tse = new TErpSysEnterpriseRate();
			tse.setRateId(rateId);
			tse.setProportion(new BigDecimal(1));
			tse.setState((short) 0);
			tse.setEnterpriseId(CurrentUtil.getCurrentUser().getEnterpriseId());
			tse.setCreateUserId(CurrentUtil.getCurrentUser().getUserId());
			tse.setCreateUserName(CurrentUtil.getCurrentUser().getUserName());
			return sysRateMapper.insertEnterpriseRate(tse);
		} else {
			return sysRateMapper.delByRateId(rateId);
		}
	}

	@Override
	public int editSysRateInfo(TErpSysRate ts) {
		TErpSysEnterpriseRate param = new TErpSysEnterpriseRate();
		param.setRateId(ts.getRateId());
		param.setEnterpriseId(CurrentUtil.getCurrentUser().getEnterpriseId());
		TErpSysEnterpriseRate te = sysRateMapper
				.selectEnterpriseRateByRateId(param);
		if (te == null) {
			TErpSysEnterpriseRate tse = new TErpSysEnterpriseRate();
			tse.setRateId(ts.getRateId());
			tse.setProportion(ts.getProportion());
			tse.setState((short) 1);
			tse.setEnterpriseId(CurrentUtil.getCurrentUser().getEnterpriseId());
			tse.setCreateUserId(CurrentUtil.getCurrentUser().getUserId());
			tse.setCreateUserName(CurrentUtil.getCurrentUser().getUserName());
			return sysRateMapper.insertEnterpriseRate(tse);
		} else {
			TErpSysEnterpriseRate tse = new TErpSysEnterpriseRate();
			tse.setRateId(ts.getRateId());
			tse.setProportion(ts.getProportion());
			tse.setEnterpriseId(CurrentUtil.getCurrentUser().getEnterpriseId());
			tse.setModifyUserId(CurrentUtil.getCurrentUser().getUserId());
			tse.setModifyUserName(CurrentUtil.getCurrentUser().getUserName());
			return sysRateMapper.updateEnterpriseRateByRateId(tse);
		}

	}

	@Override
	public TErpSysRate getSysRateId(Long rateId) {
		TErpSysEnterpriseRate te = new TErpSysEnterpriseRate();
		te.setRateId(rateId);
		te.setEnterpriseId(CurrentUtil.getCurrentUser().getEnterpriseId());
		return sysRateMapper.selectByRateId(te);
	}

	@Override
	public List<TErpSysRate> queryAllRateList() {
		return sysRateMapper.queryAllRateList();
	}
}