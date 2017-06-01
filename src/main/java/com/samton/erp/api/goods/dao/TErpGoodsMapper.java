package com.samton.erp.api.goods.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.samton.erp.api.goods.bean.entity.TErpGoods;
import com.samton.erp.api.goods.bean.vo.GoodsPrintVo;
import com.samton.platform.framework.exception.ServiceException;

public interface TErpGoodsMapper {
	
	/**
	 * 
	 * @Title:        deleteByPrimaryKey 
	 * @Description:  根据商品ID删除商品信息(物理删除)
	 * @param:        @param goodsId	商品ID
	 * @param:        @return    
	 * @return:       int    
	 * @author        Alex
	 * @Date          2016年3月26日 上午11:35:57
	 */
    int deleteByPrimaryKey(Long goodsId);
    
    /**
     * 
     * @Title:        deleteGoodsById 
     * @Description:  根据商品ID删除商品信息(逻辑删除)
     * @param:        @param goodsId
     * @param:        @return    
     * @return:       int    
     * @author        Alex
     * @Date          2016年4月7日 上午10:55:32
     */
    int deleteGoodsById(@Param("goodsId") Long goodsId);

    /**
     * 
     * @Title:        insert 
     * @Description:  添加商品信息(全部信息添加)
     * @param:        @param record		商品信息对象
     * @param:        @return    
     * @return:       int    
     * @author        Alex
     * @Date          2016年3月26日 上午11:36:22
     */
    int insert(TErpGoods record);

    /**
     * 
     * @Title:        insertSelective 
     * @Description:  添加商品信息(局部添加)
     * @param:        @param record		商品信息对象
     * @param:        @return    
     * @return:       int    
     * @author        Alex
     * @Date          2016年3月26日 上午11:36:55
     */
    int insertSelective(TErpGoods record);

    /**
     * 
     * @Title:        selectByPrimaryKey 
     * @Description:  根据商品信息ID查询商品信息
     * @param:        @param goodsId
     * @param:        @return    
     * @return:       TErpGoods    
     * @author        Alex
     * @Date          2016年3月26日 上午11:37:25
     */
    TErpGoods selectByPrimaryKey(Long goodsId);

    /**
     * 
     * @Title:        updateByPrimaryKeySelective 
     * @Description:  修改商品信息(局部修改)
     * @param:        @param record		商品信息对象
     * @param:        @return    
     * @return:       int    
     * @author        Alex
     * @Date          2016年3月26日 上午11:37:46
     */
    int updateByPrimaryKeySelective(TErpGoods record);

    /**
     * 
     * @Title:        updateByPrimaryKey 
     * @Description:  修改商品信息(全部修改)
     * @param:        @param record
     * @param:        @return    
     * @return:       int    
     * @author        Alex
     * @Date          2016年3月26日 上午11:40:09
     */
    int updateByPrimaryKey(TErpGoods record);
	
	/**
	 * 
	 * @Title:        delGoodsByIds 
	 * @Description:  根据ID集合删除商品
	 * @param:        @param idList
	 * @param:        @return    
	 * @return:       int    
	 * @author        Alex
	 * @Date          2016年3月26日 上午11:53:17
	 */
	int delGoodsByIds(@Param("idList") List<Long> idList);
    
	/**
	 * 
	 * @Title:        queryGoodsInfoBySku 
	 * @Description:  根据sku查询商品信息
	 * @param:        @param idList
	 * @param:        @return    
	 * @return:       int    
	 * @author        李建洲
	 * @Date          2016年3月26日 上午11:53:17
	 */
    TErpGoods queryGoodsInfoBySku(@Param("sku") String sku, @Param("enterpriseId")long enterpriseId);
    
    /**
     * 查询所有商品对应的sku对应的name
     * @param enterpriseId
     * @return
     * @throws ServiceException
     */
    List<Map<String, Object>> queryAllGoodsInfo( @Param("enterpriseId")long enterpriseId);

    /**
     * 
     * @Title:        checkSku 
     * @Description:  验证SKU是否重复
     * @param:        @param sku
     * @param:        @return    
     * @return:       int    
     * @author        Alex
     * @Date          2016年4月12日 下午8:13:24
     */
	int checkSku(@Param("sku") String sku,@Param("enterpriseId") long enterpriseId);

	/**
	 * 
	 * @Title:        getPrintGoods 
	 * @Description:  根据商品ID获得商品信息
	 * @param:        @param goodsIds
	 * @param:        @param enterpriseId
	 * @param:        @return    
	 * @return:       List<GoodsPrintVo>    
	 * @author        Alex
	 * @Date          2016年4月21日 下午2:44:07
	 */
	List<GoodsPrintVo> getPrintGoods(@Param("goodsIds") String goodsIds);
}