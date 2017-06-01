package com.samton.erp.api.shop.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.session.RowBounds;

import com.samton.erp.api.shop.bean.entity.TErpShop;
import com.samton.erp.api.shop.bean.vo.TErpShopVo;
import com.samton.platform.common.bean.param.JqParamBean;
import com.samton.platform.framework.exception.ServiceException;

public interface TErpShopMapper {
    int deleteByPrimaryKey(Long shopId);

    int insert(TErpShop record);

    int insertSelective(TErpShop record);

    TErpShop selectByPrimaryKey(Long shopId);

    int updateByPrimaryKeySelective(TErpShop record);

    int updateByPrimaryKey(TErpShop record);
    
    List<Map<String, Object>> getAllShopsByEnterpriseId(@Param("userId") long userId,@Param("enterpriseId") long enterpriseId,@Param("isUse") Short isUse,@Param("platformType") Integer platformType,@Param("isAdmin") Short isAdmin,@Param("isManager")  Short isManager);
    
   /**
    * 获取当前用户的店铺
    * @Description: 获取当前用户的店铺
    * @param @param jqParamBean
    * @param @param rowBounds
    * @param @return   
    * @return List<TErpShopVo>  
    * @throws
    * @author yokoboy
    * @date 2016年4月8日
    */
    List<TErpShopVo> getShopList(JqParamBean jqParamBean ,RowBounds rowBounds);
    
    /**
     * 
     * @Description: 根据店铺名称查询店铺
     * @param @param shopName
     * @param @param enterpriseId
     * @param @return   
     * @return TErpShopVo  
     * @throws
     * @author yokoboy
     * @date 2016年4月11日
     */
    TErpShopVo getShopByShopName(@Param("shopName") String shopName , @Param("enterpriseId") long enterpriseId);
    
    /**
     * 
     * @Description:  根据平台账号查询店铺
     * @param @param platformAccount
     * @param @param platformType
     * @param @param enterpriseId
     * @param @return   
     * @return TErpShopVo  
     * @throws
     * @author yokoboy
     * @date 2016年4月11日
     */
    TErpShopVo getShopByPlatformAccount(@Param("platformAccount") String platformAccount ,@Param("platformType") Integer  platformType , @Param("enterpriseId") long enterpriseId);
    
    /**
     * 
     * @Description: 查询店铺
     * @param @param shopId
     * @param @param enterpriseId
     * @param @return   
     * @return TErpShopVo  
     * @throws
     * @author yokoboy
     * @date 2016年4月11日
     */
    TErpShopVo getShopById(@Param("shopId")  Long shopId,@Param("enterpriseId") Long enterpriseId);
    
    /**
     * 
     * @Description: 根据所属者id（阿里或者速卖通授权者）查询店铺
     * @param @param resourceOwnerId
     * @param @param platformType
     * @param @param enterpriseId
     * @param @return   
     * @return TErpShopVo  
     * @throws
     * @author yokoboy
     * @date 2016年4月13日
     */
    TErpShopVo getShopByResourceOwnerId(@Param("resourceOwnerId")  String resourceOwnerId,@Param("platformType")  int platformType,@Param("enterpriseId") Long enterpriseId);
  
    
    /**
     * 获取所有已启用、授权的店铺
     * @param enterpriseId
     * @return
     * @throws ServiceException
     */
    List<TErpShop> getAllAuthShopList(@Param("enterpriseId") long enterpriseId);
    
    /**
     * 根据店铺id查询店铺信息
     * @param idList
     * @return
     */
    List<TErpShop> queryShopListById(@Param("idList") List<Long> idList);
}