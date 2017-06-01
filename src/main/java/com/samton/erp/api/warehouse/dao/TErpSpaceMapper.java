package com.samton.erp.api.warehouse.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.samton.erp.api.warehouse.bean.entity.TErpSpace;

public interface TErpSpaceMapper {
    int deleteByPrimaryKey(Long spaceId);

    int insert(TErpSpace record);

    int insertSelective(TErpSpace record);

    TErpSpace selectByPrimaryKey(Long spaceId);

    int updateByPrimaryKeySelective(TErpSpace record);

    int updateByPrimaryKey(TErpSpace record);
    
    int batchInsert(List<TErpSpace> spaces);

    /**
     * 
     * @Title:        getAllSpace 
     * @Description:  获得所有仓位信息 
     * @param:        @param space
     * @param:        @return    
     * @return:       List<TErpSpace>    
     * @author        Alex
     * @Date          2016年4月13日 上午10:39:54
     */
	List<TErpSpace> getAllSpace(TErpSpace space);
	
	/**
	 * 仓位是否被使用
	 * @param shelfId
	 * @return
	 */
	Integer isSpaceUsed(@Param("shelfId") long shelfId);
	
	int deleteByShelfId(@Param("shelfId") long shelfId);
	
	/**
	 * 根据货架id查询所有仓位
	 * @param shelfId
	 * @return
	 */
	List<Map<String,Object>> selectSpacesByShelfId(@Param("shelfId") long shelfId);
	

}