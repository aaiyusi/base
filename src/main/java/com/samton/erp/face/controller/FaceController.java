package com.samton.erp.face.controller;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.samton.erp.api.catalog.bean.entity.GoodsCatalogVO;
import com.samton.erp.api.catalog.service.TErpGoodsCatalogService;
import com.samton.platform.common.bean.param.JqParamBean;
import com.samton.platform.framework.base.SdkBaseController;
import com.samton.platform.framework.mybatis.pagination.Pagination;

@Controller
@RequestMapping("/face")
public class FaceController extends SdkBaseController {
	
	@Resource
	private TErpGoodsCatalogService catalogService;

	
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
}
