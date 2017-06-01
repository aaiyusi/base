package com.samton.erp.upload.cache;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.samton.erp.api.sys.bean.entity.TErpSysEnterpriseSet;
import com.samton.erp.api.sys.dao.TErpSysEnterpriseSetMapper;
import com.samton.erp.upload.constant.SysCacheConstant;
import com.samton.platform.framework.base.BaseCacheService;
import com.samton.platform.framework.cache.ICache;

/**
 *
 * @Description:系统缓存
 * @author:    ays
 * @date:        2016年10月12日 上午11:21:48
 * Copyright (c) 2016, Sutu. All rights reserved
 */
@Service("sysCacheService")
public class SysCacheService extends BaseCacheService {

	@Resource
	private ICache sysCache;
	
	@Resource
	private TErpSysEnterpriseSetMapper sysEnterpriseSetMapper;
	
	/**
	 * @Title:        getEnterpriseSetById 
	 * @Description:  通过企业id获取企业信息
	 * @param:        @param enterpriseId
	 * @param:        @return    
	 * @return:       TErpSysEnterpriseSet    
	 * @author        ays
	 * @Date          2016年10月12日 上午11:21:59
	 */
	public TErpSysEnterpriseSet getEnterpriseSetById(long enterpriseId){
		String cacheKey=getCacheKey(SysCacheConstant.ENTERPRISE_SET_BY_EPID, enterpriseId);
		TErpSysEnterpriseSet enterpriseSet=(TErpSysEnterpriseSet) sysCache.get(cacheKey);
		if(enterpriseSet == null){
			enterpriseSet = sysEnterpriseSetMapper.selectByPrimaryKey(enterpriseId);
			sysCache.set(cacheKey, enterpriseSet);
		}
		return enterpriseSet;
	}
	
	/**
	 * @Title:        removeEnterpriseSetById 
	 * @Description:   减少企业使用空间
	 * @param:        @param enterpriseId    
	 * @return:       void    
	 * @author        ays
	 * @Date          2016年10月12日 上午11:22:11
	 */
	public void removeEnterpriseSetById(long enterpriseId){
		sysCache.remove(getCacheKey(SysCacheConstant.ENTERPRISE_SET_BY_EPID, enterpriseId));
	}
}
