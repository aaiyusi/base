package com.samton.platform.pm.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.samton.platform.pm.bean.entity.TPlatformPmRoleMenu;

public interface TPlatformPmRoleMenuMapper {
    int deleteByPrimaryKey(Long roleMenuId);

    int insert(TPlatformPmRoleMenu record);

    int insertSelective(TPlatformPmRoleMenu record);

    TPlatformPmRoleMenu selectByPrimaryKey(Long roleMenuId);

    int updateByPrimaryKeySelective(TPlatformPmRoleMenu record);

    int updateByPrimaryKey(TPlatformPmRoleMenu record);
    
    int batchInsert(List<TPlatformPmRoleMenu> list);
    
    int batchUpdateByPrimaryKey(List<TPlatformPmRoleMenu> list);
    
    List<TPlatformPmRoleMenu> getRoleMenus(@Param("roleId") long roleId);

    List<Map> getRoleMenuIds(@Param("roleId") long roleId,@Param("state") short state,@Param("enterpriseId") long enterpriseId);


}