package com.samton.erp.api.shop.dao;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.samton.erp.api.shop.bean.entity.TErpShopUser;

public interface TErpShopUserMapper {
    int deleteByPrimaryKey(Long shopUserId);

    int insert(TErpShopUser record);

    int insertSelective(TErpShopUser record);

    TErpShopUser selectByPrimaryKey(Long shopUserId);

    int updateByPrimaryKeySelective(TErpShopUser record);

    int updateByPrimaryKey(TErpShopUser record);
    
    /**
     * 设置用户店铺权限
     * @param list
     * @return
     */
    int batchInsertShop(List<TErpShopUser> list);

	List<HashMap> getShopByUser(@Param("enterpriseId")long enterpriseId,@Param("userId")Long userId);

	void batchUpdateByPrimaryKey(List<TErpShopUser> shopUsers);

	List<TErpShopUser> getUserShops(@Param("userId")long userId, @Param("enterpriseId")long enterpriseId);
	
	int insertList(List<TErpShopUser> shopUsers);
	
	int deleteByShopId(@Param("shopId")long shopId);
	
	List<TErpShopUser> getUserShopsByShopId(@Param("shopId")long shopId, @Param("enterpriseId")long enterpriseId);
}