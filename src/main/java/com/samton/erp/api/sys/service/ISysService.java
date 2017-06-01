package com.samton.erp.api.sys.service;

import java.util.List;
import java.util.Map;

import com.samton.erp.api.sys.bean.entity.TErpSysDictValue;
import com.samton.erp.api.sys.bean.entity.TErpSysEnterprise;
import com.samton.erp.api.sys.bean.entity.TErpSysEnterpriseSet;
import com.samton.erp.api.sys.bean.entity.vo.TErpSysEnterpriseVo;
import com.samton.platform.common.bean.param.JqParamBean;
import com.samton.platform.framework.exception.ServiceException;
import com.samton.platform.framework.mybatis.pagination.Pagination;


/**
 * 
* @ClassName: ISysService 
* @Description: 系统设置service接口
* @author A18ccms a18ccms_gmail_com 
* @date 2016年4月18日 下午5:05:30 
*
 */
public interface ISysService { 
	
	/**
	 * 
	 * @Description: 增加企业信息
	 * @param @param enterprise
	 * @param @return
	 * @param @throws ServiceException   
	 * @return int  
	 * @throws
	 * @author yokoboy
	 * @date 2016年4月18日
	 */
	int addEnterprise(TErpSysEnterprise enterprise) throws ServiceException;
	
	/**
	 * 
	 * @Description: 增加企业设置信息
	 * @param @param enterpriseSet
	 * @param @return
	 * @param @throws ServiceException   
	 * @return int  
	 * @throws
	 * @author yokoboy
	 * @date 2016年4月18日
	 */
	int addEnterpriseSet(TErpSysEnterpriseSet enterpriseSet) throws ServiceException;
	
	/**
	 * 
	 * @Description: 获取企业信息
	 * @param @param enterpriseId
	 * @param @return
	 * @param @throws ServiceException   
	 * @return TErpSysEnterprise  
	 * @throws
	 * @author yokoboy
	 * @date 2016年4月18日
	 */
	TErpSysEnterpriseVo getenterEnterpriseById(Long enterpriseId)  throws ServiceException;
	
	/**
	 * 
	 * @Description: 更新当前企业信息
	 * @param @param enterprise
	 * @param @return
	 * @param @throws ServiceException   
	 * @return int  
	 * @throws
	 * @author yokoboy
	 * @date 2016年4月18日
	 */
	int updateCurrentTErpSysEnterprise(TErpSysEnterprise enterprise) throws ServiceException;
	
	 /**
     * 根据字典类型获取字典值
     * @param dictTypeId
     * @return
     */
    List<Map<String,Object>> querySysDictListByDictTypeId(long dictTypeId) throws ServiceException;
    
    /**
     * 查询全部国家
     *  @return
     *  @throws ServiceException
     *  @author        liujiping
     *  @Date          2016年4月20日
     */
    public List<TErpSysDictValue> queryAllCountryList() throws ServiceException;
    
   /**
    * @Description:  管理远端 查看企业列表
    * @param @param jqParamBea
    * @param @return
    * @param @throws ServiceException   
    * @return Pagination<TErpSysEnterpriseVo>  
    * @throws
    * @author yokoboy
    * @date 2016年4月20日
    */
    public Pagination<TErpSysEnterpriseVo> queryEnterpriseList(JqParamBean jqParamBea) throws ServiceException;
    
    /**
     * 根据字典名查询字典值
     * @param dictName
     * @return
     */
    public TErpSysDictValue querySysDictValueByName(String dictName);
    
	/**
	 * 
	 * @Title:        useEnterpriseAttrSize 
	 * @Description:  企业使用空间增加
	 * @param:        @param fileSize
	 * @param:        @param enterpriseId    
	 * @return:       void    
	 * @author        李建洲
	 * @Date          2016年10月18日 下午4:44:54
	 */
	boolean useEnterpriseAttrSize(Integer fileSize,Long enterpriseId);
}
