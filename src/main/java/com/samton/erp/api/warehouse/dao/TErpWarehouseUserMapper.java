package com.samton.erp.api.warehouse.dao;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.samton.erp.api.warehouse.bean.entity.TErpWarehouseUser;

public interface TErpWarehouseUserMapper {
    int deleteByPrimaryKey(Long whUserId);

    int insert(TErpWarehouseUser record);

    int insertSelective(TErpWarehouseUser record);

    TErpWarehouseUser selectByPrimaryKey(Long whUserId);

    int updateByPrimaryKeySelective(TErpWarehouseUser record);

    int updateByPrimaryKey(TErpWarehouseUser record);
    
    /**
     * 设置用户仓库权限
     * @param list
     * @return
     */
    int batchInsertWareHouse(List<TErpWarehouseUser> list);

    /**
     * 查询用户所有仓库
     * @param enterpriseId
     * @return
     */
	List<HashMap> getWareHourseByUser(@Param("enterpriseId")long enterpriseId,@Param("userId")Long userId);

	void batchUpdateByPrimaryKey(List<TErpWarehouseUser> addWhUsers);
	
	List<TErpWarehouseUser> getUserWhouses(@Param("userId")Long userId,@Param("enterpriseId") long enterpriseId);
}