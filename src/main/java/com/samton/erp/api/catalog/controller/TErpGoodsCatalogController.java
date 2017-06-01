/**商品分类控制层 
 * @Title: package-info.java 
 * @Package com.samton.erp.api.catalog.controller 
 * @Description: TODO(用一句话描述该文件做什么) 
 * @author A18ccms A18ccms_gmail_com 
 * @date 2016年3月25日 下午5:21:32 
 * @version V1.0 
 */
package com.samton.erp.api.catalog.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.samton.erp.api.catalog.bean.entity.GoodsCatalogVO;
import com.samton.erp.api.catalog.bean.entity.TErpGoodsCatalog;
import com.samton.erp.api.catalog.service.TErpGoodsCatalogService;
import com.samton.platform.common.bean.param.JqParamBean;
import com.samton.platform.framework.base.SdkBaseController;
import com.samton.platform.framework.exception.ControllerException;
import com.samton.platform.framework.mybatis.pagination.Pagination;

@Controller
@RequestMapping("/api/catalog")
public class TErpGoodsCatalogController extends SdkBaseController {

	@Resource
	private TErpGoodsCatalogService catalogService;

	private List<GoodsCatalogVO> getData(Long id, List<GoodsCatalogVO> list) {
		List<GoodsCatalogVO> newList = new ArrayList<GoodsCatalogVO>(0);

		for (GoodsCatalogVO gc : list) {
			if (id.toString().equals(gc.getpCatalogiId().toString())) {
				gc.setCatalogList(getData(gc.getCatalogiId(), list));
				newList.add(gc);
			}
		}

		return newList;
	}

	/**
	 * 获取商品分类列表
	 * 
	 * @Title: TErpGoodsCatalogController.java
	 * @Package com.samton.erp.api.catalog.controller
	 */
	@RequestMapping("/getCatalogList")
	@ResponseBody
	public Map<String, Object> getCatalogList(JqParamBean paramBean)
			throws Exception {
		Pagination<GoodsCatalogVO> catalogList = catalogService
				.getCatalogInfoList(paramBean);

		return this.getResultMap(true, catalogList);
	}

	@RequestMapping("/getCatalogChildren")
	@ResponseBody
	public Map<String, Object> getCatalogChildren(JqParamBean paramBean,
			Long catalogiId) throws Exception {
		paramBean.setSearch(catalogiId);
		Pagination<GoodsCatalogVO> catalogList = catalogService
				.getCatalogChildrenList(paramBean);
		return this.getResultMap(true, catalogList);
	}

	@RequestMapping("/getCatalogTree")
	@ResponseBody
	public Map<String, Object> getCatalogTree() {
		GoodsCatalogVO catalogVo = new GoodsCatalogVO();
		catalogVo.setCatalogiId(0L);
		List<GoodsCatalogVO> list = getData(catalogVo.getCatalogiId(),
				catalogService.selectGoodsCatalog());
		catalogVo.setCatalogList(list);
		return this.getResultMap(catalogVo.getCatalogList() != null, catalogVo);
	}

	/**
	 * 新增分类数据
	 * 
	 * @Title: TErpGoodsCatalogController.java
	 * @Package com.samton.erp.api.catalog.controller
	 * @Description: TODO(用一句话描述该文件做什么)
	 * @author jinzhiqiang
	 * @date 2016年4月1日 上午10:34:09
	 * @version V1.0
	 */
	@RequestMapping("/addCatalog")
	@ResponseBody
	public Map<String, Object> addCatalog(TErpGoodsCatalog te, Integer addStatus) {
		Map<String, Object> retMap = new HashMap<String, Object>();
		retMap.put("msg", addStatus);
		catalogService.addCatalogInfo(te);
		return retMap;
	}

	/**
	 * 修改分类数据
	 * 
	 * @Title: TErpGoodsCatalogController.java
	 * @Package com.samton.erp.api.catalog.controller
	 * @Description: TODO(用一句话描述该文件做什么)
	 * @author jinzhiqiang
	 * @date 2016年4月1日 上午10:35:45
	 * @version V1.0
	 */
	@RequestMapping("/editCatalog")
	@ResponseBody
	public Map<String, Object> editCatalog(TErpGoodsCatalog te, Integer status)
			throws Exception {
		Map<String, Object> retMap = new HashMap<String, Object>();
		retMap.put("msg", status);
		catalogService.editCatalogInfo(te);
		return retMap;
	}

	/**
	 * 删除分类信息
	 * 
	 * @Title: TErpGoodsCatalogController.java
	 * @Package com.samton.erp.api.catalog.controller
	 * @Description: TODO(用一句话描述该文件做什么)
	 * @author jinzhiqiang
	 * @date 2016年4月1日 上午10:38:46
	 * @version V1.0
	 * @throws ControllerException
	 */
	@RequestMapping("/delCatalog")
	@ResponseBody
	public Map<String, Object> delCatalog(Long catalogiId, Integer status)
			throws Exception {
		Map<String, Object> retMap = new HashMap<String, Object>();
		retMap.put("msg", status);
		int result = catalogService.delCatalogInfo(catalogiId);
		if (result == 3) {
			retMap.put("msg", result);
		} else {
			retMap.put("msg", status);
		}
		return retMap;
	}

	/**
	 * 根据id获取数据
	 * 
	 * @Title: TErpGoodsCatalogController.java
	 * @Package com.samton.erp.api.catalog.controller
	 * @Description: TODO(用一句话描述该文件做什么)
	 * @author jinzhiqiang
	 * @date 2016年4月1日 下午3:44:51
	 * @version V1.0
	 */
	@RequestMapping("/getCatalogInfo")
	@ResponseBody
	public Map<String, Object> getCatalogInfo(Long dataId) {
		return this.getResultMap(catalogService.getCatalogInfoById(dataId));
	}

	/**
	 * 获取所有父级
	 * 
	 * @Title: TErpGoodsCatalogController.java
	 * @Package com.samton.erp.api.catalog.controller
	 * @Description: TODO(用一句话描述该文件做什么)
	 * @author jinzhiqiang
	 * @date 2016年4月5日 下午2:50:44
	 * @version V1.0
	 */
	@RequestMapping("/getCatalogParent")
	@ResponseBody
	public Map<String, Object> getCatalogParent() {
		return this.getResultMap(true, catalogService.getCatalogParent());
	}

}