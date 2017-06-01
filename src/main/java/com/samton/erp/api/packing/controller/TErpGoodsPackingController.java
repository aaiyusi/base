/**
 * 
 */
/** 
 * @Title: package-info.java 
 * @Package com.samton.erp.api.classify.controller 
 * @Description: TODO(用一句话描述该文件做什么) 
 * @author A18ccms A18ccms_gmail_com 
 * @date 2016年3月25日 下午3:13:11 
 * @version V1.0 
 */
package com.samton.erp.api.packing.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.samton.erp.api.packing.bean.entity.TErpGoodsPacking;
import com.samton.erp.api.packing.bean.entity.TErpGoodsPackingExpand;
import com.samton.erp.api.packing.service.TErpGoodsPackingService;
import com.samton.platform.common.bean.param.JqParamBean;
import com.samton.platform.framework.base.SdkBaseController;
import com.samton.platform.framework.mybatis.pagination.Pagination;

@Controller
@RequestMapping("/api/packing")
public class TErpGoodsPackingController extends SdkBaseController {

	@Resource
	private TErpGoodsPackingService goodsPackingService;

	/**
	 * 包材管理分页查询
	 * 
	 * @Title: TErpGoodsPackingController.java
	 * @Package com.samton.erp.api.packing.controller
	 * @Description: TODO(用一句话描述该文件做什么)
	 * @author jinzhiqiang
	 * @date 2016年3月28日 上午11:49:08
	 * @version V1.0
	 */
	@RequestMapping("/getPackingList")
	@ResponseBody
	public Map<String, Object> getPackingList(JqParamBean paramBean,
			TErpGoodsPacking te) throws Exception {
		paramBean.setSearch(te);
		Pagination<TErpGoodsPackingExpand> packingList = goodsPackingService
				.getPackingInfoList(paramBean);

		return this.getResultMap(true, packingList);
	}

	/**
	 * 新增包材数据
	 * 
	 * @Title: TErpGoodsPackingController.java
	 * @Package com.samton.erp.api.packing.controller
	 * @Description: TODO(用一句话描述该文件做什么)
	 * @author jinzhiqiang
	 * @date 2016年3月28日 上午11:50:41
	 * @version V1.0
	 */
	@RequestMapping("/addPacking")
	@ResponseBody
	public Map<String, Object> addPacking(TErpGoodsPacking te) throws Exception {
		int state = goodsPackingService.addPackingInfo(te);
		Map<String, Object> retMap = new HashMap<String, Object>();
		retMap.put("msg", state);
		return retMap;
	}

	/**
	 * 打开编辑页面数据
	 * 
	 * @Title: TErpGoodsPackingController.java
	 * @Package com.samton.erp.api.packing.controller
	 * @Description: TODO(用一句话描述该文件做什么)
	 * @author jinzhiqiang
	 * @date 2016年3月28日 下午2:45:32
	 * @version V1.0
	 */
	@RequestMapping("/getPackingInfo")
	@ResponseBody
	public Map<String, Object> getPackingInfo(Long dataId) throws Exception {
		return this.getResultMap(goodsPackingService.getPackingInfo(dataId));
	}

	/**
	 * 修改包材数据
	 * 
	 * @Title: TErpGoodsPackingController.java
	 * @Package com.samton.erp.api.packing.controller
	 * @Description: TODO(用一句话描述该文件做什么)
	 * @author jinzhiqiang
	 * @date 2016年3月28日 下午4:08:00
	 * @version V1.0
	 */
	@RequestMapping("/updatePacking")
	@ResponseBody
	public Map<String, Object> updatePacking(TErpGoodsPacking tp)
			throws Exception {
		int state = goodsPackingService.editPackingInfo(tp);
		Map<String, Object> retMap = new HashMap<String, Object>();
		retMap.put("msg", state);
		return retMap;
	}

	/**
	 * 删除包材数据
	 * 
	 * @Title: TErpGoodsPackingController.java
	 * @Package com.samton.erp.api.packing.controller
	 * @Description: TODO(用一句话描述该文件做什么)
	 * @author jinzhiqiang
	 * @date 2016年3月28日 下午4:29:43
	 * @version V1.0
	 */
	@RequestMapping("/deletePacking")
	@ResponseBody
	public Map<String, Object> deletePacking(Long packingId) throws Exception {
		int state = goodsPackingService.delPackingInfo(packingId);
		Map<String, Object> retMap = new HashMap<String, Object>();
		retMap.put("msg", state);
		return retMap;
	}

	/**
	 * 
	 * @Title: getPackingList
	 * @Description: 获得所有包材信息(不分页)
	 * @param: @return
	 * @return: Map<String,Object>
	 * @author Alex
	 * @Date 2016年4月5日 上午9:46:09
	 */
	@RequestMapping("/getPackingListNoPage")
	@ResponseBody
	public Map<String, Object> getPackingListNoPage() {
		List<TErpGoodsPacking> list = goodsPackingService
				.getPackingListNoPage();
		return this.getResultMap(list.size() > 0, list);
	}

}