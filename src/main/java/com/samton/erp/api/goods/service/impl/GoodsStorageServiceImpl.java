package com.samton.erp.api.goods.service.impl;


import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.samton.erp.api.goods.bean.entity.TErpGoodsStorage;
import com.samton.erp.api.goods.bean.vo.GoodsStorageVo;
import com.samton.erp.api.goods.bean.vo.GoodsWhouse;
import com.samton.erp.api.goods.dao.GoodsStorageVoMapper;
import com.samton.erp.api.goods.dao.TErpGoodsStorageMapper;
import com.samton.erp.api.goods.service.IGoodsStorageService;
import com.samton.platform.common.bean.param.JqParamBean;
import com.samton.platform.framework.bean.UserCacheBean;
import com.samton.platform.framework.exception.ServiceException;
import com.samton.platform.framework.mybatis.pagination.PageContext;
import com.samton.platform.framework.mybatis.pagination.Pagination;
import com.samton.platform.framework.util.CurrentUtil;

/**
 * 
 *
 * @Description:商品仓库关联表
 * @author:     fina
 * @date:        2016年4月7日 
 * Copyright (c) 2015, Samton. All rights reserved
 */
@Service("goodsStorageService")
public class GoodsStorageServiceImpl implements IGoodsStorageService {

	@Resource
	private GoodsStorageVoMapper goodsStorageVoMapper;
	
	@Resource
	private TErpGoodsStorageMapper goodsStorageMapper;
	
	/**
	 * 根据商品id查询所有的仓库信息
	 * @param goodsId
	 * @return
	 * @throws ServiceException
	 */
	@Override
	public List<GoodsStorageVo> queryWhouseListByGoodsId(Long goodsId) throws ServiceException {
		//获取当前用户信息
		UserCacheBean userCacheBean = CurrentUtil.getCurrentUser();
		//获取当前企业
		long enterpriseId = userCacheBean.getEnterpriseId();
		//数据库操作
		return goodsStorageVoMapper.queryWhouseListByGoodsId(goodsId, enterpriseId);
	}

	 /**
     * 根据仓库id查询所有的仓位信息
     * @param whouseId
     * @param enterpriseId
     * @return
     * @throws ServiceException
     */
	@Override
	public List<GoodsStorageVo> querySpaceListByWhouseId(Long goodsId, Long whouseId) throws ServiceException {
		//获取当前用户信息
		UserCacheBean userCacheBean = CurrentUtil.getCurrentUser();
		//获取当前企业
		long enterpriseId = userCacheBean.getEnterpriseId();
		//数据库操作
		return goodsStorageVoMapper.querySpaceListByWhouseId(whouseId, enterpriseId, goodsId);
	}
	
	@Override
	public List<TErpGoodsStorage> getStorageByGoodsId(Long goodsId) {
		return goodsStorageMapper.getStorageByGoodsId(goodsId);
	}
	
    @Override
    public List<Map<String, Object>> goodsStorageQueryBySkuWhouse(
            long whouseId, String sku) {
        return goodsStorageMapper.goodsStorageQueryBySkuWhouse(whouseId, sku);
    }

	@Override
	public List<Map<String, Object>> querySkuByWhouseSpace(long whouseId,
			long spaceId) {
		return goodsStorageMapper.querySkuByWhouseSpace(whouseId, spaceId);
	}

	@Override
	public List<Map<String, Object>> querySkuByWhouseId(Long whouseId) {
		return goodsStorageMapper.querySkuByWhouseId(whouseId);
	}

	@Override
	public int updataGoodsStorageStateByIds(List<Long> gsIds, short state) {
		return goodsStorageMapper.updataGoodsStorageStateByIds(gsIds, state);
	}

	@Override
	public int insertGoodsStorage(TErpGoodsStorage gs) {
		gs.setEnterpriseId(CurrentUtil.getCurrentUser().getEnterpriseId());
		gs.setInventoryCount(0);
		CurrentUtil.setBaseBeanByInsert(gs);
		return goodsStorageMapper.insertSelective(gs);
	}

	@Override
	public Pagination<GoodsWhouse> getGoodsWhouseByGoodsId(JqParamBean paramBean) {
		
		Pagination<GoodsWhouse> pagination = PageContext.initialize(paramBean.getPage(), paramBean.getRows());
		paramBean.setUserId(CurrentUtil.getCurrentUser().getUserId());
		paramBean.setEnterpriseId(CurrentUtil.getCurrentUser().getEnterpriseId());
		List<GoodsWhouse> list = goodsStorageMapper.getGoodsWhouseByGoodsId(paramBean, pagination.getRowBounds());
		pagination.setData(list);
		
		return pagination;
	}

	@Override
	public int changeState(TErpGoodsStorage goodsStorage) {
		return goodsStorageMapper.changeState(goodsStorage);
	}

	@Override
	public boolean updateStorage(TErpGoodsStorage goodsStorage) {
		CurrentUtil.setBaseBeanByModify(goodsStorage);
		return goodsStorageMapper.updateByPrimaryKeySelective(goodsStorage) > 0;
	}

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
	@Override
	public TErpGoodsStorage queryGoodsStorageBywhouseId(long goodsId, long whouseId) {
		return goodsStorageMapper.queryGoodsStorageBywhouseId(goodsId, whouseId);
	}

	@Override
	public Long getStorageByGoodsIdWhouseId(TErpGoodsStorage goodsStorage) {
		String str = goodsStorageMapper.getStorageByGoodsIdWhouseId(goodsStorage);
		if(str == null || "".equals(str)){
			return 0L;
		} else {
			return Long.parseLong(str);
		}
	}
}
