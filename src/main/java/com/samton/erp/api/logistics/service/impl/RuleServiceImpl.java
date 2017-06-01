package com.samton.erp.api.logistics.service.impl;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;
import javax.swing.text.html.ListView;

import org.springframework.stereotype.Service;

import com.samton.erp.api.logistics.bean.entity.TErpLogisticsRule;
import com.samton.erp.api.logistics.bean.entity.TErpLogisticsRuleDetail;
import com.samton.erp.api.logistics.bean.vo.RuleDetailVo;
import com.samton.erp.api.logistics.bean.vo.RuleVo;
import com.samton.erp.api.logistics.dao.TErpLogisticsRuleDetailMapper;
import com.samton.erp.api.logistics.dao.TErpLogisticsRuleMapper;
import com.samton.erp.api.logistics.service.IRuleService;
import com.samton.platform.common.bean.param.JqParamBean;
import com.samton.platform.framework.exception.ServiceException;
import com.samton.platform.framework.mybatis.pagination.PageContext;
import com.samton.platform.framework.mybatis.pagination.Pagination;
import com.samton.platform.framework.util.CurrentUtil;

/**
 * @Description:物流匹配规则管理Service实现类
 * @author:     Zou Xiang
 * @date:        2016年4月12日 下午19:17:01
 * Copyright (c) 2016, Samton. All rights reserved
 */
@Service("ruleService")
public class RuleServiceImpl implements IRuleService {

	@Resource
	private TErpLogisticsRuleMapper ruleMapper;
	
	@Resource
	private TErpLogisticsRuleDetailMapper ruleDetailMapper;
	
	/**
	 * 查询规则列表
	 */
	@Override
	public Pagination<RuleVo> getRuleList(JqParamBean paramBean) {
		Pagination<RuleVo> pagination = PageContext.initialize(
				paramBean.getPage(), paramBean.getRows());
		List<RuleVo> ruleList = ruleMapper.selectRuleList(paramBean, pagination.getRowBounds());
		pagination.setData(ruleList);
		return pagination;
	}

	@Override
	public boolean addRule(TErpLogisticsRule rule,List<TErpLogisticsRuleDetail> ruleDetailList) throws ServiceException  {
		rule.setEnterpriseId(CurrentUtil.getCurrentUser().getEnterpriseId());
		CurrentUtil.setBaseBeanByInsert(rule);
		ruleMapper.insertSelective(rule);
		for(TErpLogisticsRuleDetail ruleDetail : ruleDetailList){
			ruleDetail.setEnterpriseId(CurrentUtil.getCurrentUser().getEnterpriseId());
			CurrentUtil.setBaseBeanByInsert(ruleDetail);
			ruleDetail.setRuleId(rule.getRuleId());
			ruleDetailMapper.insertSelective(ruleDetail);
		}

		return true;
	}


	@Override
	public RuleVo getRuleVoByRuleId(Long ruleId){
		RuleVo  ruleVo = ruleMapper.selectRuleVoByRuleId(ruleId,CurrentUtil.getCurrentUser().getEnterpriseId());
		List<RuleDetailVo> ruleDetailVoList = ruleDetailMapper.selectByRuleId(ruleId,CurrentUtil.getCurrentUser().getEnterpriseId());
		for(RuleDetailVo ruleDetailVo : ruleDetailVoList){
			
			switch(ruleDetailVo.getDetailType()){
				case 1:
				case 7:
				case 10 :
				case 11:
					String detailInfo = ruleDetailVo.getDetailInfo();
					String d[] = detailInfo.split(",");
			        List<String> list = new ArrayList<String>();
			        for (int i = 0; i < d.length; i++) {
			        	list.add(d[i]);
		            }
			        ruleDetailVo.setDetailInfos(list);
					break;
			}
			
		}
		ruleVo.setRuleDetailVos(ruleDetailVoList);
		return ruleVo;
	}
	
	@Override
	public boolean updateRule(TErpLogisticsRule rule,List<TErpLogisticsRuleDetail> ruleDetailList) throws ServiceException  {
		CurrentUtil.setBaseBeanByModify(rule);
		if(rule.getAutoTransport() == null){
			rule.setAutoTransport((short)0);
		}
		rule.setEnterpriseId(CurrentUtil.getCurrentUser().getEnterpriseId());
		ruleMapper.updateByPrimaryKeySelective(rule);
		ruleDetailMapper.deleteByRuleId(rule.getRuleId(),CurrentUtil.getCurrentUser().getEnterpriseId());
		for(TErpLogisticsRuleDetail ruleDetail : ruleDetailList){
			ruleDetail.setEnterpriseId(CurrentUtil.getCurrentUser().getEnterpriseId());
			CurrentUtil.setBaseBeanByInsert(ruleDetail);
			ruleDetail.setRuleId(rule.getRuleId());
			ruleDetailMapper.insertSelective(ruleDetail);
		}
		return true;
	}

	@Override
	public boolean updateRule(TErpLogisticsRule rule) throws ServiceException{
		CurrentUtil.setBaseBeanByModify(rule);
		rule.setEnterpriseId(CurrentUtil.getCurrentUser().getEnterpriseId());
		ruleMapper.updateByPrimaryKeySelective(rule);
		return true;
	}
	

	@Override
	public TErpLogisticsRule selectRuleById(Long ruleId) {
		TErpLogisticsRule rule = ruleMapper.selectByPrimaryKey(ruleId);
		return rule;
	}

	@Override
	public boolean delRuleById(Long ruleId) throws ServiceException {
		ruleDetailMapper.deleteByRuleId(ruleId,CurrentUtil.getCurrentUser().getEnterpriseId());
		ruleMapper.deleteByPrimaryKey(ruleId);
		return true;
	}
}
