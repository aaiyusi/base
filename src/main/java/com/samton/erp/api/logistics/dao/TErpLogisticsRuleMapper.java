package com.samton.erp.api.logistics.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.session.RowBounds;

import com.samton.erp.api.logistics.bean.entity.TErpLogisticsRule;
import com.samton.erp.api.logistics.bean.vo.RuleVo;
import com.samton.platform.common.bean.param.JqParamBean;

/**
 * @Description:物流匹配规则管理DAO
 * @author:     Zou Xiang
 * @date:        2016年4月12日 下午19:17:01
 * Copyright (c) 2016, Samton. All rights reserved
 */
public interface TErpLogisticsRuleMapper {
    int deleteByPrimaryKey(Long ruleId);

    int insert(TErpLogisticsRule record);

    int insertSelective(TErpLogisticsRule record);

    TErpLogisticsRule selectByPrimaryKey(Long ruleId);

    int updateByPrimaryKeySelective(TErpLogisticsRule record);

    int updateByPrimaryKey(TErpLogisticsRule record);
    
    /**
     * 查询规则列表
     * @param paramBean
     * @param rowBounds
     * @return
     */
    List<RuleVo> selectRuleList(JqParamBean paramBean, RowBounds rowBounds);
    
    RuleVo selectRuleVoByRuleId(@Param("ruleId") Long ruleId,@Param("enterpriseId") Long enterpriseId);
    
}