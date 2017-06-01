package com.samton.platform.pm.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.session.RowBounds;

import com.samton.platform.common.bean.param.JqParamBean;
import com.samton.platform.pm.bean.entity.TPlatformPmRole;

public interface TPlatformPmRoleMapper {
    int deleteByPrimaryKey(Long roleId);

    int insert(TPlatformPmRole record);

    int insertSelective(TPlatformPmRole record);

    TPlatformPmRole selectByPrimaryKey(@Param("roleId") Long roleId,@Param("enterpriseId") long enterpriseId);

    int updateByPrimaryKeySelective(TPlatformPmRole record);

    int updateByPrimaryKey(TPlatformPmRole record);
    
    List<Map>getRolesBySystemId(@Param("userId") Long systemId,@Param("enterpriseId") long enterpriseId);
    
    List<TPlatformPmRole> queryRoles(JqParamBean paramBean,RowBounds rowBounds);

	int batchUpdateByPrimaryKey(List<TPlatformPmRole> roles);
}