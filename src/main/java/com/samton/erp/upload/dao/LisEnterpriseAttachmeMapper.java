package com.samton.erp.upload.dao;

import java.util.List;

import org.apache.ibatis.session.RowBounds;

import com.samton.erp.upload.entity.LisEnterpriseAttachme;
import com.samton.platform.common.bean.param.JqParamBean;

public interface LisEnterpriseAttachmeMapper {
	
	/**
	 * 
	 * @Title:        selectByPrimaryKey 
	 * @Description:  根据主键查询企业附件信息
	 * @param:        @param attId
	 * @param:        @return    
	 * @return:       LisEnterpriseAttachme    
	 * @author      
	 * @Date          2016年10月18日 上午11:48:11
	 */
	LisEnterpriseAttachme selectByPrimaryKey(Long attId);
	
	/**
	 * 
	 * @Title:        selectLisEnterpriseProductList 
	 * @Description:  查询企业所有附件
	 * @param:        @param param
	 * @param:        @param rowBounds
	 * @param:        @return    
	 * @return:       List<LisEnterpriseAttachme>    
	 * @author        
	 * @Date          2016年10月18日 下午9:44:28
	 */
	List<LisEnterpriseAttachme> selectLisEnterpriseProductList(JqParamBean param,RowBounds rowBounds);

	/**
	 * 
	 * @Title:        insert 
	 * @Description:  新增企业附件信息（字段可为空）
	 * @param:        @param record
	 * @param:        @return    
	 * @return:       int    
	 * @author       
	 * @Date          2016年10月18日 上午11:48:35
	 */
    int insert(LisEnterpriseAttachme record);

    /**
     * 
     * @Title:        insertSelective 
     * @Description:  新增企业附件信息（字段不可为空）
     * @param:        @param record
     * @param:        @return    
     * @return:       int    
     * @author        
     * @Date          2016年10月18日 上午11:48:56
     */
    int insertSelective(LisEnterpriseAttachme record);

    /**
     * 
     * @Title:        updateByPrimaryKeySelective 
     * @Description:  修改企业附件信息（字段不可为空）
     * @param:        @param record
     * @param:        @return    
     * @return:       int    
     * @author        
     * @Date          2016年10月18日 上午11:49:16
     */
    int updateByPrimaryKeySelective(LisEnterpriseAttachme record);

    /**
     * 
     * @Title:        updateByPrimaryKeySelective 
     * @Description:  修改企业附件信息（字段可为空）
     * @param:        @param record
     * @param:        @return    
     * @return:       int    
     * @author      
     * @Date          2016年10月18日 上午11:49:16
     */
    int updateByPrimaryKey(LisEnterpriseAttachme record);
    
    /**
     * 
     * @Title:        deleteByPrimaryKey 
     * @Description:  根据主键删除企业附件信息
     * @param:        @param attId
     * @param:        @return    
     * @return:       int    
     * @author       
     * @Date          2016年10月18日 上午11:49:39
     */
    int deleteByPrimaryKey(Long attId);
}