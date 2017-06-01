package com.samton.erp.api.logistics.bean.vo;

import java.util.List;

import com.samton.erp.api.logistics.bean.entity.TErpLogisticsRule;

public class RuleVo extends TErpLogisticsRule {
	
	//当前用户ID
	private Long currentUserId;

	public Long getCurrentUserId() {
		return currentUserId;
	}

	public void setCurrentUserId(Long currentUserId) {
		this.currentUserId = currentUserId;
	}
	
	//物流名称
	private String logisticsName;

	public String getLogisticsName() {
		return logisticsName;
	}

	public void setLogisticsName(String logisticsName) {
		this.logisticsName = logisticsName;
	}
	
	//是否自动交运文本
	private String autoTransportTxt;

	public String getAutoTransportTxt() {
		return autoTransportTxt;
	}

	public void setAutoTransportTxt(String autoTransportTxt) {
		this.autoTransportTxt = autoTransportTxt;
	}
	
	//状态文本
	private String statusTxt;

	public String getStatusTxt() {
		return statusTxt;
	}

	public void setStatusTxt(String statusTxt) {
		this.statusTxt = statusTxt;
	}
	
	//规则明细集合
	private List<RuleDetailVo>ruleDetailVos;

	public List<RuleDetailVo> getRuleDetailVos() {
		return ruleDetailVos;
	}

	public void setRuleDetailVos(List<RuleDetailVo> ruleDetailVos) {
		this.ruleDetailVos = ruleDetailVos;
	}
	
	
}
