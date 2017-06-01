/**
 * 
 */
package com.samton.erp.api.goods.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.samton.erp.api.goods.bean.vo.GoodsStorageVo;
import com.samton.platform.framework.exception.ServiceException;

public interface GoodsStorageVoMapper {

	 /**
     * 根据商品id查询所有的仓库信息
     * @param goodsId
     * @param enterpriseId
     * @return
     * @throws ServiceException
     */
    List<GoodsStorageVo> queryWhouseListByGoodsId(@Param("goodsId") Long goodsId, @Param("enterpriseId")long enterpriseId) throws ServiceException;
    
    /**
     * 根据仓库id查询所有的仓位信息
     * @param whouseId
     * @param enterpriseId
     * @return
     * @throws ServiceException
     */
    List<GoodsStorageVo> querySpaceListByWhouseId(@Param("whouseId") Long whouseId, @Param("enterpriseId")long enterpriseId,@Param("goodsId") Long goodsId) throws ServiceException;
}
