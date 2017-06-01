package com.samton.erp.api.logistics.bean.vo;

import java.util.List;

import com.samton.erp.api.logistics.bean.entity.TErpLogisticsRuleDetail;

/**
 * 物流规则明细表单实体类
 * @author liujiping

 * 2016年4月20日
 */
public class RuleDetailVo extends TErpLogisticsRuleDetail {

	/**
	 * 多选编号集合
	 */
	private List<String> detailInfos;
	
	/**
	 * 多选编号对应名称集合
	 */
	private List<String> detailInfoNames;

	public List<String> getDetailInfos() {
		return detailInfos;
	}

	public void setDetailInfos(List<String> detailInfos) {
		this.detailInfos = detailInfos;
	}

	public List<String> getDetailInfoNames() {
		return detailInfoNames;
	}

	public void setDetailInfoNames(List<String> detailInfoNames) {
		this.detailInfoNames = detailInfoNames;
	}
	
}
