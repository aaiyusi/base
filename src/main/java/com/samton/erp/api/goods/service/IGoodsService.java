package com.samton.erp.api.goods.service;

import java.util.List;
import java.util.Map;

import com.samton.erp.api.goods.bean.entity.TErpGoods;
import com.samton.erp.api.goods.bean.vo.GoodsHistory;
import com.samton.erp.api.goods.bean.vo.GoodsPrintVo;
import com.samton.erp.api.goods.bean.vo.GoodsVo;
import com.samton.erp.api.goods.bean.vo.SkuVo;
import com.samton.platform.common.bean.param.JqParamBean;
import com.samton.platform.framework.mybatis.pagination.Pagination;

/**
 * 
 *
 * @Description:商品管理Service接口
 * @author:     Alex
 * @date:        2016年3月26日 上午11:33:37
 * Copyright (c) 2015, Samton. All rights reserved
 */
public interface IGoodsService {
	
	/**
	 * 
	 * @Title:        insertGoods 
	 * @Description:  添加商品信息(局部添加)
	 * @param:        @param goods
	 * @param:        @return    
	 * @return:       int    
	 * @author        Alex
	 * @Date          2016年3月26日 上午11:46:09
	 */
	Long insertGoods(TErpGoods goods);

	/**
	 * 
	 * @Title:        getGoodsVoById 
	 * @Description:  根据商品ID获得商品信息
	 * @param:        @param goodsId	商品ID
	 * @param:        @return    
	 * @return:       TErpGoods    
	 * @author        Alex
	 * @Date          2016年3月28日 下午7:01:28
	 */
	GoodsVo getGoodsVoById(Long goodsId);

	/**
	 * 
	 * @Title:        queryGoodsList 
	 * @Description:  查询商品列表
	 * @param:        @param param
	 * @param:        @return    
	 * @return:       Pagination<Map<String,Object>>    
	 * @author        Alex
	 * @Date          2016年3月28日 下午7:21:44
	 */
	Pagination<GoodsVo> queryGoodsList(JqParamBean param);

	/**
	 * 
	 * @Title:        queryGoodsInfoBySku 
	 * @Description:  根据sku查询商品信息
	 * @param:        @param sku
	 * @param:        @return    
	 * @return:       TErpGoods    
	 * @author        Alex
	 * @Date          2016年4月1日 上午10:18:44
	 */
	public TErpGoods queryGoodsInfoBySku(String sku);

	/**
	 * 
	 * @Title:        updateGoods 
	 * @Description:  修改商品信息
	 * @param:        @param goods    
	 * @return:       void    
	 * @author        Alex
	 * @Date          2016年4月1日 上午10:19:21
	 */
	int updateGoods(TErpGoods goods);

	/**
	 * 
	 * @Title:        deleteGoods 
	 * @Description:  删除商品
	 * @param:        @param goodsId
	 * @param:        @return    
	 * @return:       Boolean    
	 * @author        Alex
	 * @Date          2016年4月5日 下午8:09:31
	 */
	Boolean deleteGoods(Long goodsId);
	
	/**
	 * 
	 * @Title:        queryAllGoods 
	 * @Description:  查询所有商品只取sku和name
	 * @param:        @param goodsId
	 * @param:        @return    
	 * @return:       Boolean    
	 * @author        fina
	 * @Date          2016年4月5日 下午8:09:31
	 */
	List<Map<String,Object>> queryAllGoods();
	
	/**
	 * 获取货架SKU信息列表
	 * @param shelfId
	 * @return
	 */
	Pagination<SkuVo> getSkuListByShelfId(JqParamBean paramBean);
	
	/**
	 * 
	 * @Title:        getGoodsHistorysByGoodsId 
	 * @Description:  根据商品ID获得商品历史交易记录
	 * @param:        @param goodsId
	 * @param:        @return    
	 * @return:       List<GoodsHistory>    
	 * @author        Alex
	 * @Date          2016年4月11日 上午10:07:54
	 */
	Pagination<GoodsHistory> getGoodsHistorysByGoodsId(JqParamBean paramBean);
	
	/**
	 * 
	 * @Title:        checkSku 
	 * @Description:  验证商品SKU是否重复
	 * @param:        @param sku
	 * @param:        @return    
	 * @return:       boolean    
	 * @author        Alex
	 * @Date          2016年4月12日 下午8:56:49
	 */
	boolean checkSku(String sku);
	
	/**
	 * 根据sku查询商品信息
	 * @param sku
	 * @return
	 */
	TErpGoods queryGoodsInfoBySkuEnterpriseId(String sku,long enterpriseId);

	/**
	 * 
	 * @Title:        getPrintGoods 
	 * @Description:  根据商品ID获得商品信息
	 * @param:        @param goodsIds
	 * @param:        @return    
	 * @return:       List<GoodsPrintVo>    
	 * @author        Alex
	 * @Date          2016年4月21日 下午2:42:10
	 */
	List<GoodsPrintVo> getPrintGoods(String goodsIds);
}
