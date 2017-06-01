package com.samton.platform.pm.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.session.RowBounds;

import com.samton.platform.common.bean.param.JqParamBean;
import com.samton.platform.pm.bean.entity.TPlatformPmUser;

public interface TPlatformPmUserMapper {
	int deleteByPrimaryKey(Long userId);

	int insert(TPlatformPmUser record);

	int insertSelective(TPlatformPmUser record);

	TPlatformPmUser selectByPrimaryKey(@Param("userId") Long userId,@Param("enterpriseId") long enterpriseId);

	int updateByPrimaryKeySelective(TPlatformPmUser record);

	int updateByPrimaryKey(TPlatformPmUser record);

	List<TPlatformPmUser> queryUsers(JqParamBean paramBean, RowBounds rowBounds);

	int batchUpdateByPrimaryKey(List<TPlatformPmUser> list);

	TPlatformPmUser getUserByLoginNamePwd(TPlatformPmUser pmUser);

	List<TPlatformPmUser> queryUsersNoPage(@Param("pmUser") TPlatformPmUser pmUser);
	
	Long getUserIdByLoginName(String loginName);

}