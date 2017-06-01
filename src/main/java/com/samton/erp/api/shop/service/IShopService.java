package com.samton.erp.api.shop.service;

import java.util.List;
import java.util.Map;

import com.samton.erp.api.shop.bean.entity.TErpShop;
import com.samton.erp.api.shop.bean.vo.TErpShopVo;
import com.samton.platform.common.bean.param.JqParamBean;
import com.samton.platform.framework.exception.ServiceException;
import com.samton.platform.framework.mybatis.pagination.Pagination;

public interface IShopService {

	/**
	 * 当前登录用户查询 店铺
	 * @Description: 当前登录用户查询 店铺
	 * @param @param jqParamBean
	 * @param @return   
	 * @return List<TErpShopVo>  
	 * @throws
	 * @author yokoboy
	 * @date 2016年4月8日
	 */
	Pagination<TErpShopVo> getShopList(JqParamBean jqParamBean)  throws ServiceException;;

	
	/**
	 * 新增店铺
	 * @Description: 新增店铺
	 * @param @param shop
	 * @param @return
	 * @param @throws ServiceException   
	 * @return int  
	 * @throws
	 * @author yokoboy
	 * @date 2016年4月11日
	 */
	public int addShop(TErpShopVo shop) throws ServiceException;
	
	/**
	 * 
	 * @Description: 删除店铺
	 * @param @param shopId
	 * @param @return
	 * @param @throws ServiceException   
	 * @return int  
	 * @throws
	 * @author yokoboy
	 * @date 2016年4月11日
	 */
	public int deleteShop(Long shopId) throws ServiceException;
	
	/**
	 * 
	 * @Description: 启用店铺
	 * @param @param shopId
	 * @param @return
	 * @param @throws ServiceException   
	 * @return int  
	 * @throws
	 * @author yokoboy
	 * @date 2016年4月11日
	 */
	public int enableShop(Long shopId) throws ServiceException;
	
	

	/**
	 * 
	 * @Description: 停用店铺
	 * @param @param shopId
	 * @param @return
	 * @param @throws ServiceException   
	 * @return int  
	 * @throws
	 * @author yokoboy
	 * @date 2016年4月11日
	 */
	public int disableShop(Long shopId) throws ServiceException;
	
	/**
	 * 
	 * @Description: 编辑店铺
	 * @param @param shop
	 * @param @return
	 * @param @throws ServiceException   
	 * @return int  
	 * @throws
	 * @author yokoboy
	 * @date 2016年4月11日
	 */
	public int update(TErpShopVo shop) throws ServiceException;
	
	/**
	 * 
	 * @Description:修改店铺名称
	 * @param @param shopId
	 * @param @param newShopName
	 * @param @return
	 * @param @throws ServiceException   
	 * @return int  
	 * @throws
	 * @author yokoboy
	 * @date 2016年4月14日
	 */
	public int reNameShop(Long shopId,String newShopName) throws ServiceException;
	
	
	/**
	 * 
	 * @Description: 根据店铺名称 查询店铺
	 * @param @param shopName
	 * @param @return
	 * @param @throws ServiceException   
	 * @return TErpShopVo  
	 * @throws
	 * @author yokoboy
	 * @date 2016年4月11日
	 */
	public TErpShopVo getShopByShopName(String shopName) throws ServiceException;
	
	/**
	 * 
	 * @Description: 根据店铺id查询店铺
	 * @param @param shopId
	 * @param @return
	 * @param @throws ServiceException   
	 * @return TErpShopVo  
	 * @throws
	 * @author yokoboy
	 * @date 2016年4月11日
	 */
	public TErpShopVo getShopById(Long shopId)  throws ServiceException;
	
	/**
	 * @Description: 授权店铺
	 * @param @param shop
	 * @param @return
	 * @param @throws ServiceException   
	 * @return int  
	 * @throws
	 * @author yokoboy
	 * @date 2016年4月13日
	 */
	public int authorization(TErpShopVo shop) throws ServiceException;
	
    /**
     * 获取所有已启用、授权的店铺
     * @param enterpriseId
     * @return
     * @throws ServiceException
     */
    List<TErpShop> getAllAuthShopList();
    
    /**
     * 修改店铺信息
     * @param shop
     * @return
     * @throws ServiceException
     */
    public int updateShopById(TErpShop shop) throws ServiceException;
    
    /**
     * 根据店铺id查询店铺信息
     * @param ids
     * @return
     * @throws ServiceException
     */
    public List<TErpShop> queryShopListById(String ids) throws ServiceException;
    
	/**
	 * 获取该企业所有的店铺
	 * @param enterpriseId
	 * @return
	 * @throws ServiceException
	 */
	public List<Map<String, Object>> getAllShopsByEnterpriseId(Short isUse,Integer platformType) throws ServiceException;
	
	/**
	 * 构建树
	 * @return
	 * @throws ServiceException
	 */
	public List<Map<String, Object>> loadShopTreeByPlatformType(Short isUse) throws ServiceException;
	
}
