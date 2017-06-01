package com.samton.erp.api.warehouse.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.samton.erp.api.warehouse.bean.entity.TErpWarehouse;

public interface TErpWarehouseMapper {
    int deleteByPrimaryKey(Long whouseId);

    int insert(TErpWarehouse record);

    int insertSelective(TErpWarehouse record);

    TErpWarehouse selectByPrimaryKey(Long whouseId);

    int updateByPrimaryKeySelective(TErpWarehouse record);

    int updateByPrimaryKey(TErpWarehouse record);
    
    /**
     * 仓库下拉列表根据权限
     * @param enterpriseId
     * @param createUserId
     * @return
     */
    List<Map<String,Object>>selectIdNameByAll(@Param("enterpriseId") long enterpriseId,@Param("createUserId") long createUserId);
    /**
     * 仓库下拉列admin，mananger权限
     * @param enterpriseId
     * @param createUserId
     * @return
     */
    List<Map<String,Object>>selectIdNameByAllNoContant(@Param("enterpriseId") long enterpriseId);
    
    /**
     * 根据仓库状态查询有权限仓库
     * @param property
     * @param enterpriseId
     * @param createUserId
     * @return
     */
    List<TErpWarehouse> getErpWarehouseByProperty(@Param("property") short property ,@Param("enterpriseId") long enterpriseId,@Param("createUserId") long createUserId);
    
    /**
     * 根据仓库状态查询
     * @param property
     * @param enterpriseId
     * @param createUserId
     * @return
     */
    List<TErpWarehouse> getErpWarehouseByPropertyNoContant(@Param("property") short property ,@Param("enterpriseId") long enterpriseId);
    
    List<Map<String,Object>> selectSpaceByWhouse(Long whouseId);

    /**
     * 
     * @Title:        getAllWhouse 
     * @Description:  查询所有仓库信息
     * @param:        @param whouse
     * @param:        @return    
     * @return:       List<TErpWarehouse>    
     * @author        Alex
     * @Date          2016年4月13日 上午10:29:46
     */
	List<TErpWarehouse> getAllWhouse(TErpWarehouse whouse);
	
    /**
     * 查询仓库根据仓库名称
     * @param whouseName
     * @return
     * @throws ServiceException
     */
	TErpWarehouse selectSpaceByWhouseName(@Param("whouseName") String whouseName,@Param("enterpriseId") long enterpriseId);
	
	/**
	 * 查询仓库是否能禁用判断商品存在库存
	 * @return
	 */
	int selectWhouseCanStop(@Param("whouseId") long whouseId,@Param("enterpriseId") long enterpriseId);
	
	/**
	 * 查询仓库中是否存在代发货的商品
	 * @return
	 */
	int selectWhouseCanSKUStop(@Param("whouseId") long whouseId,@Param("enterpriseId") long enterpriseId);
}