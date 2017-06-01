package com.samton.erp.api.rate.bean.entity;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

/**
 * 汇率管理企业设置实体
 * 
 * @Title: TErpSysEnterpriseRate.java
 * @Package com.samton.erp.api.rate.bean.entity
 * @Description: TODO(用一句话描述该文件做什么)
 * @author A18ccms A18ccms_gmail_com
 * @date 2016年4月7日 上午10:51:03
 * @version V1.0
 */
public class TErpSysEnterpriseRate implements Serializable {
	private Long eRateId;
	private Long rateId;
	private Long enterpriseId;
	private BigDecimal proportion;
	private Short state;
	private Long createUserId;
	private String createUserName;
	private Date createDate;
	private Long modifyUserId;
	private String modifyUserName;
	private Date modifyDate;
	private Date lastModifyDate;

	public Long geteRateId() {
		return eRateId;
	}

	public void seteRateId(Long eRateId) {
		this.eRateId = eRateId;
	}

	public Long getRateId() {
		return rateId;
	}

	public void setRateId(Long rateId) {
		this.rateId = rateId;
	}

	public Long getEnterpriseId() {
		return enterpriseId;
	}

	public void setEnterpriseId(Long enterpriseId) {
		this.enterpriseId = enterpriseId;
	}

	public BigDecimal getProportion() {
		return proportion;
	}

	public void setProportion(BigDecimal proportion) {
		this.proportion = proportion;
	}

	public Short getState() {
		return state;
	}

	public void setState(Short state) {
		this.state = state;
	}

	public Long getCreateUserId() {
		return createUserId;
	}

	public void setCreateUserId(Long createUserId) {
		this.createUserId = createUserId;
	}

	public String getCreateUserName() {
		return createUserName;
	}

	public void setCreateUserName(String createUserName) {
		this.createUserName = createUserName;
	}

	public Date getCreateDate() {
		return createDate;
	}

	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}

	public Long getModifyUserId() {
		return modifyUserId;
	}

	public void setModifyUserId(Long modifyUserId) {
		this.modifyUserId = modifyUserId;
	}

	public String getModifyUserName() {
		return modifyUserName;
	}

	public void setModifyUserName(String modifyUserName) {
		this.modifyUserName = modifyUserName;
	}

	public Date getModifyDate() {
		return modifyDate;
	}

	public void setModifyDate(Date modifyDate) {
		this.modifyDate = modifyDate;
	}

	public Date getLastModifyDate() {
		return lastModifyDate;
	}

	public void setLastModifyDate(Date lastModifyDate) {
		this.lastModifyDate = lastModifyDate;
	}

}
