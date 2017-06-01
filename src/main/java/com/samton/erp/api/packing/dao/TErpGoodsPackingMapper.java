package com.samton.erp.api.packing.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.session.RowBounds;

import com.samton.erp.api.packing.bean.entity.TErpGoodsPacking;
import com.samton.erp.api.packing.bean.entity.TErpGoodsPackingExpand;
import com.samton.platform.common.bean.param.JqParamBean;

public interface TErpGoodsPackingMapper {

	// 获取包材列表
	List<TErpGoodsPackingExpand> selectPackingList(JqParamBean paramBean,
			RowBounds rowBounds);

	int deleteByPrimaryKey(Long packingId);

	// 删除包材
	int deletePacking(Long packingId);

	// 新增包材数据
	int insertPackingInfo(TErpGoodsPacking record);

	// 根据id查找数据
	TErpGoodsPacking selectPackingById(Long packingId);

	int insertSelective(TErpGoodsPacking record);

	TErpGoodsPacking selectByPrimaryKey(Long packingId);

	int updateByPrimaryKeySelective(TErpGoodsPacking record);

	// 修改包材数据
	int updateByPackingInfo(TErpGoodsPacking record);

	/**
	 * 
	 * @Title: getPackingListNoPage
	 * @Description: 根据企业ID获得所有包材信息对象，不需要分页
	 * @param: @param enterpriseId
	 * @param: @return
	 * @return: List<TErpGoodsPacking>
	 * @author Alex
	 * @Date 2016年4月5日 上午9:58:16
	 */
	List<TErpGoodsPacking> getPackingListNoPage(
			@Param("enterpriseId") Long enterpriseId);

	/**
	 * 判断包材是否
	 * 
	 * @Title: TErpGoodsPackingMapper.java
	 * @Package com.samton.erp.api.packing.dao
	 * @Description: TODO(用一句话描述该文件做什么)
	 * @author jinzhiqiang
	 * @date 2016年4月26日 下午8:46:23
	 * @version V1.0
	 */
	List<TErpGoodsPackingExpand> selectGoodsByPId(Long packingId);
}