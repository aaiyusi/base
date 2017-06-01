package com.samton.erp.api.goods.service;

import java.util.List;
import java.util.Map;

import com.samton.erp.api.goods.bean.entity.TErpGoodsStorage;
import com.samton.erp.api.goods.bean.vo.GoodsStorageVo;
import com.samton.erp.api.goods.bean.vo.GoodsWhouse;
import com.samton.platform.common.bean.param.JqParamBean;
import com.samton.platform.framework.exception.ServiceException;
import com.samton.platform.framework.mybatis.pagination.Pagination;

/**
 * 
 *
 * @Description:商品仓库关联表
 * @author:     fina
 * @date:        2016年4月7日 
 * Copyright (c) 2015, Samton. All rights reserved
 */
public interface IGoodsStorageService {

	/**
	 * 
	 * @Title:        getStorageByGoodsId 
	 * @Description:  根据商品ID获得商品与仓库仓位的信息
	 * @param:        @param goodsId
	 * @param:        @return    
	 * @return:       List<TErpGoodsStorage>    
	 * @author        Alex
	 * @Date          2016年4月7日 上午11:17:41
	 */
	List<TErpGoodsStorage> getStorageByGoodsId(Long goodsId);
	
	/**
	 * 根据商品id查询所有的仓库信息
	 * @param goodsId
	 * @return
	 * @throws ServiceException
	 */
	public List<GoodsStorageVo> queryWhouseListByGoodsId(Long goodsId) throws ServiceException;
	
	/**
	 * 入库子查询操作
	 * @param whouseId
	 * @param sku
	 * @return
	 * @throws ServiceException
	 */
	public List<Map<String,Object>> goodsStorageQueryBySkuWhouse(long whouseId,String sku);

	/**
	 * 
	 * @Title:        updataGoodsStorageStateByIds 
	 * @Description:  根据商品仓库信息主键更改状态
	 * @param:        @param waitOpenIds
	 * @param:        @param state
	 * @param:        @return    
	 * @return:       int    
	 * @author        Alex
	 * @Date          2016年4月8日 上午11:07:40
	 */
	int updataGoodsStorageStateByIds(List<Long> gsIds, short state);

	/**
	 * 
	 * @Title:        insertGoodsStorage 
	 * @Description:  新增商品仓库信息
	 * @param:        @param gs
	 * @param:        @return    
	 * @return:       int    
	 * @author        Alex
	 * @Date          2016年4月8日 上午11:30:00
	 */
	int insertGoodsStorage(TErpGoodsStorage gs);
	
	 /**
     * 根据仓库id查询所有的仓位信息
     * @param whouseId
     * @param enterpriseId
     * @return
     * @throws ServiceException
     */
	public List<GoodsStorageVo> querySpaceListByWhouseId(Long goodsId, Long whouseId) throws ServiceException;
	
	/**
	 * 根据仓库id和仓位id查询sku
	 * @param whouseId
	 * @param sku
	 * @return
	 * @throws ServiceException
	 */
	public List<Map<String,Object>> querySkuByWhouseSpace(long whouseId,long spaceId);

	/**
	 * 根据仓库id查询存在的sku
	 * @param whouseId
	 * @return
	 * @throws ServiceException
	 */
	public List<Map<String,Object>> querySkuByWhouseId(Long whouseId);
	
	/**
	 * 
	 * @Title:        getGoodsWhouseByGoodsId 
	 * @Description:  根据商品ID获得与仓库相关信息(分页)
	 * @param:        @param paramBean
	 * @param:        @return    
	 * @return:       Pagination<GoodsWhouse>    
	 * @author        Alex
	 * @Date          2016年4月12日 上午10:33:55
	 */
	public Pagination<GoodsWhouse> getGoodsWhouseByGoodsId(JqParamBean paramBean);

	/**
	 * 
	 * @Title:        changeState 
	 * @Description:  启用或禁用商品仓库信息
	 * @param:        @param goodsStorage
	 * @param:        @return    
	 * @return:       int    
	 * @author        Alex
	 * @Date          2016年4月13日 下午4:06:21
	 */
	int changeState(TErpGoodsStorage goodsStorage);

	/**
	 * 
	 * @Title:        updateStorage 
	 * @Description:  修改商品仓库信息
	 * @param:        @param goodsStorage
	 * @param:        @return    
	 * @return:       boolean    
	 * @author        Alex
	 * @Date          2016年4月14日 下午3:44:53
	 */
	boolean updateStorage(TErpGoodsStorage goodsStorage);
	
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
	TErpGoodsStorage queryGoodsStorageBywhouseId(long goodsId,long whouseId);

	/**
	 * 
	 * @Title:        getStorageByGoodsIdWhouseId 
	 * @Description:  根据商品ID和仓库ID获得对应信息
	 * @param:        @param goodsStorage
	 * @param:        @return    
	 * @return:       Long    
	 * @author        Alex
	 * @Date          2016年4月26日 上午9:56:04
	 */
	Long getStorageByGoodsIdWhouseId(TErpGoodsStorage goodsStorage);
}
