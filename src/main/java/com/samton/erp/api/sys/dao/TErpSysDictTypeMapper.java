package com.samton.erp.api.sys.dao;

import com.samton.erp.api.sys.bean.entity.TErpSysDictType;

public interface TErpSysDictTypeMapper {
    int deleteByPrimaryKey(Long dictTypeId);

    int insert(TErpSysDictType record);

    int insertSelective(TErpSysDictType record);

    TErpSysDictType selectByPrimaryKey(Long dictTypeId);

    int updateByPrimaryKeySelective(TErpSysDictType record);

    int updateByPrimaryKey(TErpSysDictType record);
}