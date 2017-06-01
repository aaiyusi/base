package com.samton.erp.api.orders.dao;

import org.apache.ibatis.annotations.Param;

import com.samton.erp.api.orders.bean.entity.TErpSync;

public interface TErpSyncMapper {
    int deleteByPrimaryKey(Long syncId);

    int insert(TErpSync record);

    int insertSelective(TErpSync record);

    TErpSync selectByPrimaryKey(Long syncId);

    int updateByPrimaryKeySelective(TErpSync record);

    int updateByPrimaryKey(TErpSync record);
    
    /**
     * 根据店铺id和平台类型查询同步信息
     * @param shopId
     * @param platformType
     * @return
     */
    TErpSync querySyncInfoByPlatformType(@Param("shopId") Long shopId, @Param("platformType") Short platformType,@Param("dataType") Short dataType,@Param("enterpriseId") long enterpriseId);
    
    /**
     * 查询数据是否存在
     * @param dataId
     * @param platformType
     * @param dataType
     * @return
     */
    Integer querySyncExistByDataId(@Param("dataId") String dataId, @Param("platformType") Short platformType,@Param("dataType") Short dataType,@Param("shopId") Long shopId, @Param("enterpriseId") long enterpriseId);
    
    /**
     * 同步平台数据
     * @return
     */
    Integer dataTransSync();
    
    /**
     * 统计商品待发货数和已发货数
     * @return
     */
    Integer statDataCountSync();
}