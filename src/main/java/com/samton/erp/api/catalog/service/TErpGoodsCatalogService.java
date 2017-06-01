/**商品分类逻辑层 
 * @Title: package-info.java 
 * @Package com.samton.erp.api.catalog.service 
 * @Description: TODO(用一句话描述该文件做什么) 
 * @author A18ccms A18ccms_gmail_com 
 * @date 2016年3月25日 下午5:22:48 
 * @version V1.0 
 */
package com.samton.erp.api.catalog.service;

import java.util.List;

import com.samton.erp.api.catalog.bean.entity.GoodsCatalogVO;
import com.samton.erp.api.catalog.bean.entity.TErpGoodsCatalog;
import com.samton.platform.common.bean.param.JqParamBean;
import com.samton.platform.framework.mybatis.pagination.Pagination;

public interface TErpGoodsCatalogService {
	// 获取子分类分页
	Pagination<GoodsCatalogVO> getCatalogChildrenList(JqParamBean paramBean);

	// 获取商品分类数据
	Pagination<GoodsCatalogVO> getCatalogInfoList(JqParamBean paramBean);

	// 根据上级id查询数据
	List<GoodsCatalogVO> getCatalogInfoByPId(Long pCatalogiId);

	// 修改分类数据
	int editCatalogInfo(TErpGoodsCatalog te);

	// 新增分类数据
	int addCatalogInfo(TErpGoodsCatalog te);

	// 删除分类数据
	int delCatalogInfo(Long catalogId);

	// 根据id查询数据
	GoodsCatalogVO getCatalogInfoById(Long catalogiId);

	// 获取所有父目录
	List<GoodsCatalogVO> getCatalogParent();

	/**
	 * 根据企业ID查询全部商品分类
	 * 
	 * @param enterpriseId
	 * @return
	 * @author liujiping
	 * @Date 2016年4月18日
	 */
	List<TErpGoodsCatalog> selectGoodsCatalogList();

	// 获取所有商品分类数据不带分页
	List<GoodsCatalogVO> selectGoodsCatalog();
}