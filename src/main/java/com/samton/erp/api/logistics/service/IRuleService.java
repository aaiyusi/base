package com.samton.erp.api.logistics.service;

import java.util.List;

import com.samton.erp.api.logistics.bean.entity.TErpLogisticsRule;
import com.samton.erp.api.logistics.bean.entity.TErpLogisticsRuleDetail;
import com.samton.erp.api.logistics.bean.vo.RuleVo;
import com.samton.platform.common.bean.param.JqParamBean;
import com.samton.platform.framework.exception.ServiceException;
import com.samton.platform.framework.mybatis.pagination.Pagination;

/**
 * @Description:物流匹配规则管理Service接口
 * @author:     Zou Xiang
 * @date:        2016年4月12日 下午19:17:01
 * Copyright (c) 2016, Samton. All rights reserved
 */
public interface IRuleService {
	
	/**
	 * 查询规则列表
	 * @param paramBean
	 * @return
	 */
	Pagination<RuleVo> getRuleList(JqParamBean paramBean);
	
	/**
	 *  添加物流规则
	 *  @param rule
	 *  @param ruleDetailList
	 *  @return
	 *  @author        liujiping
	 *  @Date          2016年4月19日
	 */
	boolean addRule(TErpLogisticsRule rule,List<TErpLogisticsRuleDetail> ruleDetailList) throws ServiceException ;
	
	/**
	 * 根据物流规则ID查询
	 *  @param ruleId
	 *  @return
	 *  @author        liujiping
	 *  @Date          2016年4月20日
	 */
	RuleVo getRuleVoByRuleId(Long ruleId);
	
	/**
	 * 更新物流规则
	 *  @param rule
	 *  @param ruleDetailList
	 *  @return
	 *  @throws ServiceException
	 *  @author        liujiping
	 *  @Date          2016年4月21日
	 */
	boolean updateRule(TErpLogisticsRule rule,List<TErpLogisticsRuleDetail> ruleDetailList) throws ServiceException;
	
	/**
	 * 更新物流规则状态
	 *  @param rule
	 *  @param ruleDetailList
	 *  @return
	 *  @throws ServiceException
	 *  @author        liujiping
	 *  @Date          2016年4月21日
	 */
	boolean updateRule(TErpLogisticsRule rule) throws ServiceException;
	
	/**
	 * 根据Id查询物流规则
	 *  @param ruleId
	 *  @return
	 *  @author        liujiping
	 *  @Date          2016年4月21日
	 */
	TErpLogisticsRule selectRuleById(Long ruleId) ;
	
	/**
	 * 根据Id删除物流规则
	 *  @param ruleId
	 *  @return
	 *  @author        liujiping
	 *  @Date          2016年4月21日
	 */
	boolean delRuleById(Long ruleId) throws ServiceException ;
	
}
