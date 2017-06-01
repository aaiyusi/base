package com.samton.platform.pm.dao;

import com.samton.platform.pm.bean.entity.TPlatformPmSystem;

public interface TPlatformPmSystemMapper {
    int deleteByPrimaryKey(Long systemId);

    int insert(TPlatformPmSystem record);

    int insertSelective(TPlatformPmSystem record);

    TPlatformPmSystem selectByPrimaryKey(Long systemId);

    int updateByPrimaryKeySelective(TPlatformPmSystem record);

    int updateByPrimaryKey(TPlatformPmSystem record);
}