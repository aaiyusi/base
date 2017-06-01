package com.samton.erp.api.statistics.bean;

import java.io.Serializable;

/**
 * 
* @ClassName: StatCondition 
* @Description: 统计bean
* @author A18ccms a18ccms_gmail_com 
* @date 2016年4月21日 下午4:23:31 
 */
public class StatCondition implements Serializable {
	 
	private static final long serialVersionUID = 6360737836812262033L;
	//年份
	private String year;
	//月份
	private String month;
	//开始时间
	private String startTime;
	//结束时间
	private String endTime;
	//权限范围pmIds
	private String pmIds;
	//数据范围ids
	private String ids;
	//查询类型   platform 按平台查询 shop 按店铺查询
	private String searchType;
	//当前用户id
	private Long userId;
	//企业ID
	private Long enterpriseId;
	
	private Short dataPermissions;
	
	//day 按天 month 
	private String statType;
	
	//是否返回表格数据
	private boolean hasGrid;
	
	//查询top类型
	private Long topType;
	
	//查询top数量
	private Integer topNum;
	
	//联系记录类型
	private Integer activityType;
	
	//排行信息目标ids
	private String objectIds;
	
	public String getMonth() {
		return month;
	}
	public void setMonth(String month) {
		this.month = month;
	}
	public String getStartTime() {
		return startTime;
	}
	public void setStartTime(String startTime) {
		this.startTime = startTime;
	}
	public String getEndTime() {
		return endTime;
	}
	public void setEndTime(String endTime) {
		this.endTime = endTime;
	}
	public String getIds() {
		return ids;
	}
	public void setIds(String ids) {
		this.ids = ids;
	}
	public String getObjectType() {
		return searchType;
	}
	public void setObjectType(String searchType) {
		this.searchType = searchType;
	}
	public Long getEnterpriseId() {
		return enterpriseId;
	}
	public void setEnterpriseId(Long enterpriseId) {
		this.enterpriseId = enterpriseId;
	}
	public String getYear() {
		return year;
	}
	public void setYear(String year) {
		this.year = year;
	}
	public String getStatType() {
		return statType;
	}
	public void setStatType(String statType) {
		this.statType = statType;
	}
	public Short getDataPermissions() {
		return dataPermissions;
	}
	public void setDataPermissions(Short dataPermissions) {
		this.dataPermissions = dataPermissions;
	}
	public boolean isHasGrid() {
		return hasGrid;
	}
	public void setHasGrid(boolean hasGrid) {
		this.hasGrid = hasGrid;
	}
	public String getPmIds() {
		return pmIds;
	}
	public void setPmIds(String pmIds) {
		this.pmIds = pmIds;
	}
	public Long getUserId() {
		return userId;
	}
	public void setUserId(Long userId) {
		this.userId = userId;
	}
	public Long getTopType() {
		return topType;
	}
	public void setTopType(Long topType) {
		this.topType = topType;
	}
	public Integer getTopNum() {
		return topNum;
	}
	public void setTopNum(Integer topNum) {
		this.topNum = topNum;
	}
	public Integer getActivityType() {
		return activityType;
	}
	public void setActivityType(Integer activityType) {
		this.activityType = activityType;
	}
	public String getObjectIds() {
		return objectIds;
	}
	public void setObjectIds(String objectIds) {
		this.objectIds = objectIds;
	}
	
}