package com.samton.erp.api.pm.constant;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import com.samton.erp.api.sys.bean.entity.TErpSysEnterpriseSet;

public class VersionConstant {

	//免费版
	public static final long VERSION_FREE=1;
	//专业版
	public static final long VERSION_PROFESSIONAL=2;
	//企业版
	public static final long VERSION_ENTERPRISE=3;

	
	//正常使用
	public static final short STATE_NORMAL=1;
	//中断
	public static final short STATE_INTERRUPT=2;
	//暂停
	public static final short STATE_PAUSE=3;
	//注销
	public static final short STATE_CANCEL=4;
	
	private static Map<Long, TErpSysEnterpriseSet> versionEpSet;
	static{
		versionEpSet=new HashMap<Long, TErpSysEnterpriseSet>();
		TErpSysEnterpriseSet freeEnterpriseSet=new TErpSysEnterpriseSet();
		freeEnterpriseSet.setVersionId(VERSION_FREE);
		freeEnterpriseSet.setTotalStorageSize(500*1024);
		freeEnterpriseSet.setVersionState(VersionConstant.STATE_NORMAL);
		freeEnterpriseSet.setUseStorageSize(0);
		freeEnterpriseSet.setUseUserCount(0);
		freeEnterpriseSet.setUserCount(5);
		//无限制时间默认为1900-1-1
		freeEnterpriseSet.setVersionEndDate(new Date(-2209017600000L));
		freeEnterpriseSet.setVisitingCardCount(10);
		freeEnterpriseSet.setFileUploadSize(5*1024);
		versionEpSet.put(VERSION_FREE, freeEnterpriseSet);
		
		TErpSysEnterpriseSet professionalEnterpriseSet=new TErpSysEnterpriseSet();
		professionalEnterpriseSet.setVersionId(VERSION_PROFESSIONAL);
		professionalEnterpriseSet.setTotalStorageSize(2*1024*1024);
		professionalEnterpriseSet.setVersionState(VersionConstant.STATE_NORMAL);
		professionalEnterpriseSet.setUseStorageSize(0);
		professionalEnterpriseSet.setUseUserCount(0);
		professionalEnterpriseSet.setUserCount(-9999);
		professionalEnterpriseSet.setVisitingCardCount(300);
		professionalEnterpriseSet.setFileUploadSize(10*1024);
		versionEpSet.put(VERSION_PROFESSIONAL, professionalEnterpriseSet);
		
		TErpSysEnterpriseSet enterpriseEnterpriseSet=new TErpSysEnterpriseSet();
		enterpriseEnterpriseSet.setVersionId(VERSION_ENTERPRISE);
		enterpriseEnterpriseSet.setTotalStorageSize(5*1024*1024);//无限制大小
		enterpriseEnterpriseSet.setVersionState(VersionConstant.STATE_NORMAL);
		enterpriseEnterpriseSet.setUseStorageSize(0);
		enterpriseEnterpriseSet.setUseUserCount(0);
		enterpriseEnterpriseSet.setUserCount(-9999);
		enterpriseEnterpriseSet.setVisitingCardCount(500);
		enterpriseEnterpriseSet.setFileUploadSize(15*1024);
		versionEpSet.put(VERSION_ENTERPRISE, enterpriseEnterpriseSet);
	}
	
	public static TErpSysEnterpriseSet getVersionEpSet(long version){
		return (TErpSysEnterpriseSet) versionEpSet.get(version).clone();
	}
	
}