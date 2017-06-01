package com.samton.erp.api.warehouse.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.samton.erp.api.goods.service.IGoodsService;
import com.samton.erp.api.goods.service.IGoodsStorageService;
import com.samton.erp.api.warehouse.bean.entity.TErpWhouseCheck;
import com.samton.erp.api.warehouse.bean.entity.WhouseCheckChild;
import com.samton.erp.api.warehouse.bean.entity.WhouseParamVO;
import com.samton.erp.api.warehouse.constant.WhouseExpCodeConstant;
import com.samton.erp.api.warehouse.service.IWarehouseService;
import com.samton.platform.common.bean.param.JqParamBean;
import com.samton.platform.framework.base.SdkBaseController;
import com.samton.platform.framework.exception.ControllerException;
import com.samton.platform.framework.mybatis.pagination.Pagination;

/**
 * 
 *
 * @Description:仓库盘点类
 * @author:     fina
 * @date:       2016年3月26日
 * Copyright (c) 2015, Samton. All rights reserved
 */
@Controller
@RequestMapping("/api/warehouseCheck")
public class WhouseCheckController extends SdkBaseController{
	
	@Resource
	private IWarehouseService warehouseService;
	
	
	@Resource
	private IGoodsService goodsService;
	
	@Resource
	private IGoodsStorageService goodsStorageService;
	
	/**
	 * 主查询列表
	 * @param lostManager
	 * @param page
	 * @param rows
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("queryList")
	@ResponseBody
	public Map<String,Object> queryList(JqParamBean jqParamBean, WhouseParamVO whouseParamVo) throws Exception{
		//查询对象不为空
		if(null != whouseParamVo){
			//开始时间
			if(org.apache.commons.lang.StringUtils.isNotBlank(whouseParamVo.getStartDate())){
				whouseParamVo.setStartDate(whouseParamVo.getStartDate() + " 00:00:00");
			}
			
			//结束时间
			if(org.apache.commons.lang.StringUtils.isNotBlank(whouseParamVo.getEndDate())){
				whouseParamVo.setEndDate(whouseParamVo.getEndDate() + " 23:59:59");
			}
		}
		//封装查询条件
		jqParamBean.setSearch(whouseParamVo);
		//数据库操作
		Pagination<Map<String, Object>> warehouse = warehouseService.queryWhouseCheckList(jqParamBean);
		//返回结果
		boolean result =warehouse != null ? true : false;
 		return this.getResultMap(result, warehouse);
	}
	
	/**
	 * 新增盘点
	 * @param whouseChild
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/addStrorage")
	@ResponseBody
	public Map<String, Object> addStrorage(@RequestBody  WhouseCheckChild wsc) throws Exception {
		
		if(wsc.getWcdList() == null || wsc.getWcdList().size() ==0){
			throw new ControllerException(WhouseExpCodeConstant.WHOUSE_LIST_NULL, "非法参数--盘点清单为空");
		}
		if(wsc.getWhouseCheck() == null){
			throw new ControllerException(WhouseExpCodeConstant.WHOUSE_INFO_NULL, "非法参数--盘点主表不能为空");
		}
		long i =  warehouseService.addCheck(wsc);
		return this.getResultMap(i == 1 ? true:false);
	}
	
	/**
	 * 仓库下拉框
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/selectWhouse")
	@ResponseBody
	public Map<String, Object> selectWhouse() throws Exception {
		
		return this.getResultMap(true, warehouseService.warehouseSelect());
	}
	
	/**
	 * 根据SKU查询商品
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/queryBySku")
	@ResponseBody
	public Map<String, Object> queryBySku(String sku) throws Exception {
		
		return this.getResultMap(goodsService.queryGoodsInfoBySku(sku) == null ? false:true, goodsService.queryGoodsInfoBySku(sku));
	}
	
	/**
	 * 根据仓库查询仓位
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/querySpaceByWhouse")
	@ResponseBody
	public Map<String, Object> querySpaceByWhouse(String whouseId) throws Exception {
		List<Map<String,Object>> list = new ArrayList<Map<String,Object>>() ;
		if(!StringUtils.isEmpty(whouseId)){
			 list =warehouseService.selectSpaceByWhouse(Long.parseLong(whouseId));
		}
		return this.getResultMap(list.size()== 0 ? false:true, list);
	}
	
	/**
	 * 根据盘点id查询主表
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/queryDetialHeadByStorageId")
	@ResponseBody
	public Map<String, Object> queryDetialHeadByStorageId(String storageId) throws Exception {
		
		
		TErpWhouseCheck storage = warehouseService.querywhouseCheckByCheckId(Long.parseLong(storageId));
		
		boolean result =storage != null ? true : false;
		return this.getResultMap(result, storage);
	}
	
	/**
	 * 根据盘点id查询子表明细
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/queryDetialByStorageId")
	@ResponseBody
	public Map<String, Object> queryDetialByStorageId(JqParamBean jqParamBean,String storageId) throws Exception {
		//封装查询条件
		WhouseParamVO vo = new WhouseParamVO();
		vo.setCheck_id(Long.parseLong(storageId));
		jqParamBean.setSearch(vo);
		
		Pagination<Map<String, Object>> warehouseDetial = warehouseService.queryWhouseCheckDetialRecord(jqParamBean);
		
		
		boolean result =warehouseDetial != null ? true : false;
		return this.getResultMap(result, warehouseDetial);
	}
	
	/**
	 * 根据仓库和仓位查询sku
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/querySkuByWhouseSpace")
	@ResponseBody
	public Map<String, Object> querySkuByWhouseSpace(Long whouseId,Long spaceId) throws Exception {
		List<Map<String,Object>> list = new ArrayList<Map<String,Object>>();
		if(whouseId != null && spaceId != null){
			 list =goodsStorageService.querySkuByWhouseSpace(whouseId, spaceId);
		}
		
		boolean result =list != null ? true : false;
		return this.getResultMap(result, list);
	}
}
