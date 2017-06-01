/**商品分类逻辑层实现类 
 * @Title: package-info.java 
 * @Package com.samton.erp.api.catalog.service.impl 
 * @Description: TODO(用一句话描述该文件做什么) 
 * @author A18ccms A18ccms_gmail_com 
 * @date 2016年3月26日 上午9:59:10 
 * @version V1.0 
 */
package com.samton.erp.api.catalog.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.samton.erp.api.catalog.bean.entity.GoodsCatalogVO;
import com.samton.erp.api.catalog.bean.entity.TErpGoodsCatalog;
import com.samton.erp.api.catalog.dao.TErpGoodsCatalogMapper;
import com.samton.erp.api.catalog.service.TErpGoodsCatalogService;
import com.samton.platform.common.bean.param.JqParamBean;
import com.samton.platform.framework.mybatis.pagination.PageContext;
import com.samton.platform.framework.mybatis.pagination.Pagination;
import com.samton.platform.framework.util.CurrentUtil;

@Service("catalogService")
public class TErpGoodsCatalogServiceImpl implements TErpGoodsCatalogService {
	@Resource
	private TErpGoodsCatalogMapper catalogMapper;

	@Override
	public List<GoodsCatalogVO> selectGoodsCatalog() {

		return catalogMapper.selectGoodsCatalog(CurrentUtil.getCurrentUser()
				.getEnterpriseId());
	}

	@Override
	public Pagination<GoodsCatalogVO> getCatalogInfoList(JqParamBean paramBean) {

		paramBean.setSearch(1130);
		Pagination<GoodsCatalogVO> pagination = PageContext.initialize(
				paramBean.getPage(), paramBean.getRows());
		List<GoodsCatalogVO> catalogList = catalogMapper
				.selectGoodsCatalogList(paramBean, pagination.getRowBounds());
		for (int i = 0; i < catalogList.size(); i++) {
			catalogList.get(i).setChildren(
					catalogMapper.selectCatalogByPId(catalogList.get(i)
							.getCatalogiId()));
		}
		pagination.setData(catalogList);
		return pagination;
	}

	@Override
	public Pagination<GoodsCatalogVO> getCatalogChildrenList(
			JqParamBean paramBean) {
		Pagination<GoodsCatalogVO> pagination = PageContext.initialize(
				paramBean.getPage(), paramBean.getRows());
		List<GoodsCatalogVO> catalogList = catalogMapper
				.selectCatalogByPIdPage(paramBean, pagination.getRowBounds());

		pagination.setData(catalogList);
		return pagination;
	}

	@Override
	public List<GoodsCatalogVO> getCatalogInfoByPId(Long pCatalogiId) {

		return catalogMapper.selectCatalogByPId(pCatalogiId);
	}

	@Override
	public int editCatalogInfo(TErpGoodsCatalog te) {
		te.setModifyUserId(CurrentUtil.getCurrentUser().getUserId());
		te.setModifyUserName(CurrentUtil.getCurrentUser().getUserName());
		return catalogMapper.updateByCatalogInfo(te);
	}

	@Override
	public int addCatalogInfo(TErpGoodsCatalog te) {
		if (te.getpCatalogiId() == 0) {
			te.setLevel((short) 1);
		} else {
			te.setLevel((short) 2);
		}
		te.setState((short) 1);
		te.setCreateUserId(CurrentUtil.getCurrentUser().getUserId());
		te.setCreateUserName(CurrentUtil.getCurrentUser().getUserName());
		te.setEnterpriseId(CurrentUtil.getCurrentUser().getEnterpriseId());
		return catalogMapper.insertCatalogInfo(te);
	}

	@Override
	public int delCatalogInfo(Long catalogiId) {
		GoodsCatalogVO cata = catalogMapper.selectCatalogById(catalogiId);
		if (cata.getLevel() == 1) {
			List<GoodsCatalogVO> list = catalogMapper
					.selectCatalogByPId(catalogiId);
			for (int i = 0; i < list.size(); i++) {
				List<GoodsCatalogVO> goods = catalogMapper
						.selectGoodsByPId(list.get(i).getCatalogiId());
				if (goods.size() > 0) {
					return 3;
				}
			}
		} else {
			List<GoodsCatalogVO> goods = catalogMapper
					.selectGoodsByPId(catalogiId);
			if (goods.size() > 0) {
				return 3;
			}
		}
		return catalogMapper.delByCatalogId(catalogiId);
	}

	@Override
	public GoodsCatalogVO getCatalogInfoById(Long catalogiId) {

		return catalogMapper.selectCatalogById(catalogiId);
	}

	@Override
	public List<GoodsCatalogVO> getCatalogParent() {
		return catalogMapper.selectGoodsCatalogParentList();
	}

	@Override
	/**
	 * 根据企业ID查询全部商品分类
	 *  @param enterpriseId
	 *  @return
	 *  @author        liujiping
	 *  @Date          2016年4月18日
	 */
	public List<TErpGoodsCatalog> selectGoodsCatalogList() {
		return catalogMapper.selectGoodsCatalogAllList(CurrentUtil
				.getCurrentUser().getEnterpriseId());
	}
}