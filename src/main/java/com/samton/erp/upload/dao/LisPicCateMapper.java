package com.samton.erp.upload.dao;

import java.util.List;

import com.samton.erp.upload.entity.LisPicCate;


/**
 * 
 *
 * @Description:图片分类Mapper接口类
 * @author:     
 * @date:        2016年10月18日 上午11:45:03
 */
public interface LisPicCateMapper {
    
	/**
	 * 
	 * @Title:        selectByPrimaryKey 
	 * @Description:  根据分类id查询图片分类信息
	 * @param:        @param cateId 分类id
	 * @param:        @return    
	 * @return:       LisPicCate    
	 * @author        
	 * @Date          2016年10月18日 上午11:45:32
	 */
	LisPicCate selectByPrimaryKey(Long cateId);
	
	/**
	 * 
	 * @Title:        selectPicCatesListByEnterpriseId 
	 * @Description:  获取企业所有分类
	 * @param:        @param enterpriseId
	 * @param:        @return    
	 * @return:       List<LisPicCate>    
	 * @author       
	 * @Date          2016年10月19日 下午2:37:20
	 */
	List<LisPicCate> selectPicCatesListByEnterpriseId(Long enterpriseId);

	/**
	 * 
	 * @Title:        insert 
	 * @Description:  新增图片分类（字段为空）
	 * @param:        @param record
	 * @param:        @return    
	 * @return:       int    
	 * @author        
	 * @Date          2016年10月18日 上午11:45:57
	 */
    int insert(LisPicCate record);

    /**
     * 
     * @Title:        insertSelective 
     * @Description:  新增图片分类（字段不为空）
     * @param:        @param record
     * @param:        @return    
     * @return:       int    
     * @author      
     * @Date          2016年10月18日 上午11:46:23
     */
    int insertSelective(LisPicCate record);
    
    /**
     * 
     * @Title:        updateByPrimaryKeySelective 
     * @Description:  修改图片分类（字段不为空） 
     * @param:        @param record
     * @param:        @return    
     * @return:       int    
     * @author        
     * @Date          2016年10月18日 上午11:46:42
     */
    int updateByPrimaryKeySelective(LisPicCate record);

    /**
     * 
     * @Title:        updateByPrimaryKey 
     * @Description:  修改图片分类（字段为空） 
     * @param:        @param record
     * @param:        @return    
     * @return:       int    
     * @author        
     * @Date          2016年10月18日 上午11:47:00
     */
    int updateByPrimaryKey(LisPicCate record);
    
    /**
     * 
     * @Title:        deleteByPrimaryKey 
     * @Description:  根据主键删除图片分类信息
     * @param:        @param cateId
     * @param:        @return    
     * @return:       int    
     * @author       
     * @Date          2016年10月18日 上午11:47:16
     */
    int deleteByPrimaryKey(Long cateId);
}