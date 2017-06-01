package com.samton.erp.api.goods.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.session.RowBounds;

import com.samton.erp.api.goods.bean.entity.TErpGoodsStorage;
import com.samton.erp.api.goods.bean.vo.GoodsWhouse;
import com.samton.platform.common.bean.param.JqParamBean;

public interface TErpGoodsStorageMapper {

	/**
	 * 
	 * @Title:        deleteByPrimaryKey 
	 * @Description:  删除商品与仓库仓位信息(物理删除)
	 * @param:        @param gsId
	 * @param:        @return    
	 * @return:       int    
	 * @author        Alex
	 * @Date          2016年4月7日 上午10:44:54
	 */
	int deleteByPrimaryKey(Long gsId);
	
	/**
	 * 
	 * @Title:        deleteGoodsStorageById 
	 * @Description:  删除商品与仓库仓位信息(逻辑删除)
	 * @param:        @param gsId
	 * @param:        @return    
	 * @return:       int    
	 * @author        Alex
	 * @Date          2016年4月7日 上午10:56:52
	 */
	int deleteGoodsStorageById(@Param("gsId") Long gsId);

	/**
	 * 
	 * @Title:        insert 
	 * @Description:  添加商品与仓库仓位信息(全部添加)
	 * @param:        @param record
	 * @param:        @return    
	 * @return:       int    
	 * @author        Alex
	 * @Date          2016年4月7日 上午10:57:07
	 */
	int insert(TErpGoodsStorage record);

	/**
	 * 
	 * @Title:        insertSelective 
	 * @Description:  添加商品与仓库仓位信息(局部添加)
	 * @param:        @param gsId
	 * @param:        @return    
	 * @return:       int    
	 * @author        Alex
	 * @Date          2016年4月7日 上午10:57:25
	 */
	int insertSelective(TErpGoodsStorage gsId);

	/**
	 * 
	 * @Title:        selectByPrimaryKey 
	 * @Description:  根据主键ID获得商品与仓库仓位信息
	 * @param:        @param gsId
	 * @param:        @return    
	 * @return:       TErpGoodsStorage    
	 * @author        Alex
	 * @Date          2016年4月7日 上午10:58:21
	 */
	TErpGoodsStorage selectByPrimaryKey(Long gsId);

	/**
	 * 
	 * @Title:        updateByPrimaryKeySelective 
	 * @Description:  修改商品与仓库仓位信息(局部修改)
	 * @param:        @param record
	 * @param:        @return    
	 * @return:       int    
	 * @author        Alex
	 * @Date          2016年4月7日 上午10:59:09
	 */
	int updateByPrimaryKeySelective(TErpGoodsStorage record);

	/**
	 * 
	 * @Title:        updateByPrimaryKey 
	 * @Description:  修改商品与仓库仓位信息(全部修改)
	 * @param:        @param record
	 * @param:        @return    
	 * @return:       int    
	 * @author        Alex
	 * @Date          2016年4月7日 上午10:59:30
	 */
	int updateByPrimaryKey(TErpGoodsStorage record);

	/**
	 * 
	 * @Title:        getStorageByGoodsId 
	 * @Description:  根据商品ID获得商品与仓库仓位的信息
	 * @param:        @param goodsId
	 * @param:        @return    
	 * @return:       List<TErpGoodsStorage>    
	 * @author        Alex
	 * @Date          2016年4月7日 上午11:19:56
	 */
	List<TErpGoodsStorage> getStorageByGoodsId(Long goodsId);
	    
	/**
     * 根据仓库以及sku查询仓位关联
     * @param whouseId
	 * @param sku
	 * @return
	 */
	List<Map<String,Object>> goodsStorageQueryBySkuWhouse(@Param(value="whouseId") long whouseId,@Param(value="sku") String sku);
	  
	/**
	 * 根据商品id和仓位查询一条关联数据
	 * @param gId
	 * @param spaceId
	 * @return
	 */
	TErpGoodsStorage selectByGidSpaceId(@Param(value="gId") long gId,@Param(value="spaceId") long spaceId);

	/**
	 * 
	 * @Title:        updataGoodsStorageStateByIds 
	 * @Description:  根据商品仓库信息主键更改状态
	 * @param:        @param waitOpenIds
	 * @param:        @param state
	 * @param:        @return    
	 * @return:       int    
	 * @author        Alex
	 * @Date          2016年4月8日 上午11:14:17
	 */
	int updataGoodsStorageStateByIds(@Param("gsIds") List<Long> gsIds,@Param("state") short state);
	  
	/**
	 * 根据仓库id和仓位id查询sku
	 * @param whouseId
	 * @param spaceId
	 * @return
	 */
	List<Map<String,Object>>  querySkuByWhouseSpace(@Param(value="whouseId") long whouseId,@Param(value="spaceId") long spaceId);

	/**
	 * 根据仓库id和sku查询一条数据
	 * @param whouseId
	 * @param sku
	 * @return
	 */
	TErpGoodsStorage  querySkuByWhouseSku(@Param(value="whouseId") long whouseId,@Param(value="sku") String sku);
	  
	/**
	 * 根据仓库id查询sku
	 * @param whouseId
	 * @param spaceId
	 * @return
	 */
	List<Map<String, Object>> querySkuByWhouseId(@Param(value="whouseId") long whouseId);

	/**
	 * 
	 * @Title:        getGoodsWhouseByGoodsId 
	 * @Description:  根据商品ID获得商品与仓库信息(分页)
	 * @param:        @param paramBean
	 * @param:        @param rowBounds
	 * @param:        @return    
	 * @return:       List<GoodsWhouse>    
	 * @author        Alex
	 * @Date          2016年4月12日 上午10:32:30
	 */
	List<GoodsWhouse> getGoodsWhouseByGoodsId(JqParamBean paramBean, RowBounds rowBounds);

	/**
	 * 
	 * @Title:        changeState 
	 * @Description:  启用或禁用商品仓库信息
	 * @param:        @param goodsStorage
	 * @param:        @return    
	 * @return:       int    
	 * @author        Alex
	 * @Date          2016年4月13日 下午4:08:36
	 */
	int changeState(TErpGoodsStorage goodsStorage);
	
	/**
	 * 
	 * @Title:        queryGoodsStorageBywhouseId 
	 * @Description:  查询商品库存信息
	 * @param:        @param goodsId   whouseId
	 * @param:        @return    
	 * @return:       int    
	 * @author        lijianzhou
	 * @Date          2016年4月17日 下午4:08:36
	 */
	TErpGoodsStorage queryGoodsStorageBywhouseId(@Param(value="goodsId") long goodsId,@Param(value="whouseId") long whouseId);

	/**
	 * 
	 * @Title:        getStorageByGoodsIdWhouseId 
	 * @Description:  根据商品ID和仓库ID获得对应信息
	 * @param:        @param goodsStorage
	 * @param:        @return    
	 * @return:       String    
	 * @author        Alex
	 * @Date          2016年4月26日 上午9:57:06
	 */
	String getStorageByGoodsIdWhouseId(TErpGoodsStorage goodsStorage);
}
