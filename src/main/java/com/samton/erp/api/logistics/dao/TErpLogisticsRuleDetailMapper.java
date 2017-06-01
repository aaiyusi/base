package com.samton.erp.api.logistics.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.samton.erp.api.logistics.bean.entity.TErpLogisticsRuleDetail;
import com.samton.erp.api.logistics.bean.vo.RuleDetailVo;

public interface TErpLogisticsRuleDetailMapper {
    int deleteByPrimaryKey(Long detailId);

    int insert(TErpLogisticsRuleDetail record);

    int insertSelective(TErpLogisticsRuleDetail record);

    TErpLogisticsRuleDetail selectByPrimaryKey(Long detailId);

    int updateByPrimaryKeySelective(TErpLogisticsRuleDetail record);

    int updateByPrimaryKey(TErpLogisticsRuleDetail record);
    
    /**
     * 根据物流规则ID查询明细集合
     *  @param ruleId
     *  @return
     *  @author        liujiping
     *  @Date          2016年4月20日
     */
    List<RuleDetailVo> selectByRuleId(@Param("ruleId") Long ruleId,@Param("enterpriseId") Long enterpriseId);
    

    /**
     * 根据规则ID删除明细
     *  @param ruleId
     *  @return
     *  @author        liujiping
     *  @Date          2016年4月21日
     */
    int deleteByRuleId(@Param("ruleId") Long ruleId,@Param("enterpriseId") Long enterpriseId);
}