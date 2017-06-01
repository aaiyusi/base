package com.samton.erp.api.print.dao;

import java.util.List;

import org.apache.ibatis.session.RowBounds;

import com.samton.erp.api.print.bean.entity.TErpPrintTemplate;
import com.samton.platform.common.bean.param.JqParamBean;

public interface TErpPrintTemplateMapper {
	
	/***
	 * 
	 * @Title:        deleteByPrimaryKey 
	 * @Description:  根据标签ID删除
	 * @param:        @param tempId
	 * @param:        @return    
	 * @return:       int    
	 * @author        Alex
	 * @Date          2016年4月19日 下午5:18:04
	 */
	int deleteByPrimaryKey(Long tempId);

	/**
	 * 
	 * @Title:        insert 
	 * @Description:  插入标签(全部插入)
	 * @param:        @param record
	 * @param:        @return    
	 * @return:       int    
	 * @author        Alex
	 * @Date          2016年4月19日 下午5:18:24
	 */
	int insert(TErpPrintTemplate record);

	/**
	 * 
	 * @Title:        insertSelective 
	 * @Description:  插入标签(局部插入)
	 * @param:        @param record
	 * @param:        @return    
	 * @return:       int    
	 * @author        Alex
	 * @Date          2016年4月19日 下午5:19:21
	 */
	int insertSelective(TErpPrintTemplate record);

	/**
	 * 
	 * @Title:        selectByPrimaryKey 
	 * @Description:  根据标签ID获得标签信息
	 * @param:        @param tempId
	 * @param:        @return    
	 * @return:       TErpPrintTemplate    
	 * @author        Alex
	 * @Date          2016年4月19日 下午5:19:35
	 */
	TErpPrintTemplate selectByPrimaryKey(Long tempId);

	/**
	 * 
	 * @Title:        updateByPrimaryKeySelective 
	 * @Description:  修改标签信息(局部)
	 * @param:        @param record
	 * @param:        @return    
	 * @return:       int    
	 * @author        Alex
	 * @Date          2016年4月19日 下午5:19:49
	 */
	int updateByPrimaryKeySelective(TErpPrintTemplate record);

	/**
	 * 
	 * @Title:        updateByPrimaryKey 
	 * @Description:  修改标签信息(全部)
	 * @param:        @param record
	 * @param:        @return    
	 * @return:       int    
	 * @author        Alex
	 * @Date          2016年4月19日 下午5:20:53
	 */
	int updateByPrimaryKey(TErpPrintTemplate record);

	/**
	 * 
	 * @Title:        getTempList 
	 * @Description:  获得标签模板
	 * @param:        @param temp
	 * @param:        @return    
	 * @return:       List<TErpPrintTemplate>    
	 * @author        Alex
	 * @Date          2016年4月20日 下午5:07:27
	 */
	List<TErpPrintTemplate> getTempList(TErpPrintTemplate temp);

	/**
	 * 
	 * @Title:        queryTempByPage 
	 * @Description:  获得标签模板数据(分页)
	 * @param:        @param param
	 * @param:        @param rowBounds
	 * @param:        @return    
	 * @return:       List<TErpPrintTemplate>    
	 * @author        Alex
	 * @Date          2016年4月25日 上午9:52:56
	 */
	List<TErpPrintTemplate> queryTempByPage(JqParamBean param, RowBounds rowBounds);
}