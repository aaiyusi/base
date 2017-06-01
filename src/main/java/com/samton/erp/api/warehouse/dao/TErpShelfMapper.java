package com.samton.erp.api.warehouse.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.session.RowBounds;

import com.samton.erp.api.warehouse.bean.entity.TErpShelf;
import com.samton.platform.common.bean.param.JqParamBean;

public interface TErpShelfMapper {
    int deleteByPrimaryKey(Long shelfId);

    int insert(TErpShelf record);

    int insertSelective(TErpShelf record);

    TErpShelf selectByPrimaryKey(Long shelfId);

    int updateByPrimaryKeySelective(TErpShelf record);

    int updateByPrimaryKey(TErpShelf record);
    
    List<TErpShelf> getErpShelfByWhouseId(JqParamBean paramBean, RowBounds rowBounds);
    
    long getShelfSeq();

    /**
     * 
     * @Title:        getAllShelf 
     * @Description:  获得所有货架信息
     * @param:        @param shelf
     * @param:        @return    
     * @return:       List<TErpShelf>    
     * @author        Alex
     * @Date          2016年4月13日 上午10:36:07
     */
	List<TErpShelf> getAllShelf(TErpShelf shelf);
	
	/**
	 * 根据货架id查询数量
	 * @param shelfId
	 * @return
	 */
	int selectShelfCount(@Param("shelfId") long shelfId);
	
}