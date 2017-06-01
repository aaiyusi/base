package com.samton.erp.api.catalog.dao;

import java.util.List;

import org.apache.ibatis.session.RowBounds;

import com.samton.erp.api.catalog.bean.entity.GoodsCatalogVO;
import com.samton.erp.api.catalog.bean.entity.TErpGoodsCatalog;
import com.samton.platform.common.bean.param.JqParamBean;

public interface TErpGoodsCatalogMapper {

	// 获取商品分类分页列表
	List<GoodsCatalogVO> selectGoodsCatalogList(JqParamBean paramBean,
			RowBounds rowBounds);

	List<GoodsCatalogVO> selectGoodsCatalog(Long enterpriseId);

	List<GoodsCatalogVO> selectCatalogByPIdPage(JqParamBean paramBean,
			RowBounds rowBounds);

	// 获取商品父类
	List<GoodsCatalogVO> selectGoodsCatalogParentList();

	// 根据上级id查询数据
	List<GoodsCatalogVO> selectCatalogByPId(Long pCatalogiId);

	// 根据id查询数据
	GoodsCatalogVO selectCatalogById(Long catalogiId);

	// 新增分类数据
	int insertCatalogInfo(TErpGoodsCatalog record);

	int insertSelective(TErpGoodsCatalog record);

	TErpGoodsCatalog selectByPrimaryKey(Long catalogiId);

	// 修改分类数据
	int updateByCatalogInfo(TErpGoodsCatalog record);

	// 删除分类数据
	int delByCatalogId(Long catalogId);

	// 获取商品信息
	List<GoodsCatalogVO> selectGoodsByPId(Long catalogiId);

	/**
	 * 根据企业ID查询全部商品分类
	 * 
	 * @param enterpriseId
	 * @return
	 * @author liujiping
	 * @Date 2016年4月18日
	 */
	List<TErpGoodsCatalog> selectGoodsCatalogAllList(Long enterpriseId);
}