package com.samton.erp.api.sys.dao;

import org.apache.ibatis.annotations.Param;

import com.samton.erp.api.sys.bean.entity.TErpSysEnterpriseSet;

public interface TErpSysEnterpriseSetMapper {
    int deleteByPrimaryKey(Long enterpriseId);

    int insert(TErpSysEnterpriseSet record);

    int insertSelective(TErpSysEnterpriseSet record);

    TErpSysEnterpriseSet selectByPrimaryKey(Long enterpriseId);

    int updateByPrimaryKeySelective(TErpSysEnterpriseSet record);

    int updateByPrimaryKey(TErpSysEnterpriseSet record);
    
    /**
     * 
     * @Title:        useEnterpriseAttrSize 
     * @Description:  企业使用空间增加
     * @param:        @param fileSize
     * @param:        @param enterpriseId
     * @param:        @return    
     * @return:       int    
     * @Date          2016年10月18日 下午4:43:45
     */
    int useEnterpriseAttrSize(@Param("fileSize")Integer fileSize,@Param("enterpriseId")Long enterpriseId);
}