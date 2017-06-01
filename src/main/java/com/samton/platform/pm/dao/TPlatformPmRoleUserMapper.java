package com.samton.platform.pm.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.samton.platform.pm.bean.entity.TPlatformPmRoleUser;

public interface TPlatformPmRoleUserMapper {
    int deleteByPrimaryKey(Long roleUserId);

    int insert(TPlatformPmRoleUser record);

    int insertSelective(TPlatformPmRoleUser record);

    TPlatformPmRoleUser selectByPrimaryKey(Long roleUserId);

    int updateByPrimaryKeySelective(TPlatformPmRoleUser record);

    int updateByPrimaryKey(TPlatformPmRoleUser record);
    
    int batchInsert(List<TPlatformPmRoleUser> list);
    
    int batchUpdateByPrimaryKey(List<TPlatformPmRoleUser> list);

    List<TPlatformPmRoleUser> getRoleUsers(@Param("userId") long userId,@Param("enterpriseId") long enterpriseId);
    
    List<Long> getUserRoleIds(@Param("userId") long userId,@Param("state") short state);

}