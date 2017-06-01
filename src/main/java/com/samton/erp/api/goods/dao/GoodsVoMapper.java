package com.samton.erp.api.goods.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.session.RowBounds;

import com.samton.erp.api.goods.bean.vo.GoodsHistory;
import com.samton.erp.api.goods.bean.vo.GoodsVo;
import com.samton.erp.api.goods.bean.vo.SkuVo;
import com.samton.platform.common.bean.param.JqParamBean;

public interface GoodsVoMapper {

	/**
	 * 
	 * @Title:        queryGoodsList 
	 * @Description:  查询商品集合(分页)
	 * @param:        @param param
	 * @param:        @param rowBounds
	 * @param:        @return    
	 * @return:       List<Map<String,Object>>    
	 * @author        Alex
	 * @Date          2016年3月29日 上午9:46:41
	 */
	List<GoodsVo> queryGoodsList(JqParamBean param, RowBounds rowBounds);

	/**
	 * 
	 * @Title:        getGoodsVoById 
	 * @Description:  根据商品ID获得商品信息
	 * @param:        @param goodsId
	 * @param:        @return    
	 * @return:       GoodsVo    
	 * @author        Alex
	 * @Date          2016年3月30日 下午7:14:15
	 */
	GoodsVo getGoodsVoById(@Param("goodsId") Long goodsId);
	
	/**
	 * 根据货架ID获得SKU列表
	 * @param shelfId
	 * @return
	 */
	List<SkuVo> getSkuListByShelfId(JqParamBean paramBean, RowBounds rowBounds);

	/**
	 * 
	 * @Title:        getGoodsHistorysByGoodsId 
	 * @Description:  根据商品ID获得商品历史纪录
	 * @param:        @param paramBean
	 * @param:        @param rowBounds
	 * @param:        @return    
	 * @return:       List<GoodsHistory>    
	 * @author        Alex
	 * @Date          2016年4月11日 上午10:17:50
	 */
	List<GoodsHistory> getGoodsHistorysByGoodsId(JqParamBean paramBean, RowBounds rowBounds);
	
}
