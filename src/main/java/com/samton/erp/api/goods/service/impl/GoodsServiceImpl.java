package com.samton.erp.api.goods.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.samton.erp.api.goods.bean.entity.TErpGoods;
import com.samton.erp.api.goods.bean.vo.GoodsHistory;
import com.samton.erp.api.goods.bean.vo.GoodsPrintVo;
import com.samton.erp.api.goods.bean.vo.GoodsVo;
import com.samton.erp.api.goods.bean.vo.SkuVo;
import com.samton.erp.api.goods.dao.GoodsVoMapper;
import com.samton.erp.api.goods.dao.TErpGoodsMapper;
import com.samton.erp.api.goods.service.IGoodsService;
import com.samton.platform.common.bean.param.JqParamBean;
import com.samton.platform.framework.mybatis.pagination.PageContext;
import com.samton.platform.framework.mybatis.pagination.Pagination;
import com.samton.platform.framework.util.CurrentUtil;

/**
 * 
 *
 * @Description:商品管理实现类
 * @author:     Alex
 * @date:        2016年3月26日 上午11:34:11
 * Copyright (c) 2015, Samton. All rights reserved
 */
@Service("goodsService")
public class GoodsServiceImpl implements IGoodsService {
	
	@Resource
	private TErpGoodsMapper goodsMapper;
	
	@Resource
	private GoodsVoMapper goodsVoMapper;

	/**
	 * 添加商品信息
	 */
	@Override
	public Long insertGoods(TErpGoods goods) {
		CurrentUtil.setBaseBeanByInsert(goods);
		goodsMapper.insertSelective(goods);
		return goods.getGoodsId() != null ? goods.getGoodsId() : null;
	}

	@Override
	public GoodsVo getGoodsVoById(Long goodsId) {
		return goodsVoMapper.getGoodsVoById(goodsId);
	}

	@Override
	public Pagination<GoodsVo> queryGoodsList(JqParamBean param) {
		//封装分页参数
		Pagination<GoodsVo> pagination = PageContext.initialize(param.getPage(), param.getRows());
		//数据库操作
		List<GoodsVo> list = goodsVoMapper.queryGoodsList(param, pagination.getRowBounds());

		pagination.setData(list);
		
		return pagination;
	}

	@Override
	public TErpGoods queryGoodsInfoBySku(String sku) {
		long enterpriseId = 0;
		if(CurrentUtil.getCurrentUser() !=null){
			enterpriseId = CurrentUtil.getCurrentUser().getEnterpriseId();
		}
		return goodsMapper.queryGoodsInfoBySku(sku, enterpriseId);
	}

	@Override
	public int updateGoods(TErpGoods goods) {
		CurrentUtil.setBaseBeanByModify(goods);
		return goodsMapper.updateByPrimaryKeySelective(goods);
	}

	@Override
	public Boolean deleteGoods(Long goodsId) {
		return goodsMapper.deleteGoodsById(goodsId) > 0;
	}

	@Override
	public List<Map<String, Object>> queryAllGoods() {
		long enterpriseId = 0;
		if(CurrentUtil.getCurrentUser() !=null){
			enterpriseId = CurrentUtil.getCurrentUser().getEnterpriseId();
		}
		return goodsMapper.queryAllGoodsInfo(enterpriseId);
	}
	
	@Override
	public Pagination<SkuVo> getSkuListByShelfId(JqParamBean paramBean){
		Pagination<SkuVo> pagination=PageContext.initialize(paramBean.getPage(), paramBean.getRows());
		List<SkuVo> list = goodsVoMapper.getSkuListByShelfId(paramBean, pagination.getRowBounds());
		pagination.setData(list);
		return pagination;
	}

	@Override
	public Pagination<GoodsHistory> getGoodsHistorysByGoodsId(JqParamBean paramBean) {
		
		Pagination<GoodsHistory> pagination = PageContext.initialize(paramBean.getPage(), paramBean.getRows());
		List<GoodsHistory> list = goodsVoMapper.getGoodsHistorysByGoodsId(paramBean, pagination.getRowBounds());
		pagination.setData(list);
		
		return pagination;
	}

	@Override
	public boolean checkSku(String sku) {
		int num = goodsMapper.checkSku(sku,CurrentUtil.getCurrentUser().getEnterpriseId());
		return num > 0 ? true : false;
	}

	/**
	 * 根据sku查询商品信息
	 * @param sku
	 * @return
	 */
	@Override
	public TErpGoods queryGoodsInfoBySkuEnterpriseId(String sku,long enterpriseId) {
		return goodsMapper.queryGoodsInfoBySku(sku, enterpriseId);
	}

	@Override
	public List<GoodsPrintVo> getPrintGoods(String goodsIds) {
		return goodsMapper.getPrintGoods(goodsIds);
	}
	
}
