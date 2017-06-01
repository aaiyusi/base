package com.samton.platform.common.bean.param;

import com.samton.platform.framework.util.CurrentUtil;

/**
 * 
 * @Description:JqGrid分页实体类
 * @author: lijianzhou
 * @date: 2016年3月1日 Copyright (c) 2015, Samton. All rights reserved
 */
public class JqParamBean {
	// JqGrid插件分页参数
	private Integer page = 1;// 当前页码
	private Integer rows = 10;// 每页行数
	private String sidx;// 排序字段
	private String sord = "asc";
	private Object search;// 查询对象
	private Long enterpriseId = CurrentUtil.getCurrentUser() == null ? null : CurrentUtil.getCurrentUser().getEnterpriseId();
	private Long userId;
	private Long currentUserId = CurrentUtil.getCurrentUser() == null ? null : CurrentUtil.getCurrentUser().getUserId();
	private Short isAdmin = CurrentUtil.getCurrentUser() == null ? null : CurrentUtil.getCurrentUser().getIsAdmin();
	private Short isManager = CurrentUtil.getCurrentUser() == null ? null : CurrentUtil.getCurrentUser().getIsManager();

	public Short getIsManager() {
		return isManager;
	}

	public void setIsManager(Short isManager) {
		this.isManager = isManager;
	}

	public Integer getPage() {
		if (page == null) {
			page = 1;
		}
		return page;
	}

	public void setPage(Integer page) {
		this.page = page;
	}

	public Integer getRows() {
		if (rows == null) {
			rows = 20;
		}
		return rows;
	}

	public void setRows(Integer rows) {
		this.rows = rows;
	}

	public String getSidx() {
		return sidx;
	}

	public void setSidx(String sidx) {
		this.sidx = sidx;
	}

	public String getSord() {
		return sord;
	}

	public void setSord(String sord) {
		this.sord = sord;
	}

	public Object getSearch() {
		return search;
	}

	public void setSearch(Object search) {
		this.search = search;
	}

	public Long getEnterpriseId() {
		return enterpriseId;
	}

	public void setEnterpriseId(Long enterpriseId) {
		this.enterpriseId = enterpriseId;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public Long getCurrentUserId() {
		return currentUserId;
	}

	public void setCurrentUserId(Long currentUserId) {
		this.currentUserId = currentUserId;
	}

	public Short getIsAdmin() {
		return isAdmin;
	}

	public void setIsAdmin(Short isAdmin) {
		this.isAdmin = isAdmin;
	}
}
