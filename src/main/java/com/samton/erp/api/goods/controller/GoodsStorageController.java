package com.samton.erp.api.goods.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.samton.erp.api.goods.bean.entity.TErpGoodsStorage;
import com.samton.erp.api.goods.bean.vo.GoodsStorageVo;
import com.samton.erp.api.goods.service.IGoodsStorageService;
import com.samton.erp.api.warehouse.service.IWarehouseService;
import com.samton.platform.common.bean.param.JqParamBean;
import com.samton.platform.framework.base.SdkBaseController;
import com.samton.platform.framework.exception.ControllerException;
import com.samton.platform.framework.exception.ServiceException;
import com.samton.platform.framework.exception.constant.ExpCodeConstant;
/**
 * 
 *
 * @Description:商品仓库仓位管理Controller
 * @author:     Alex
 * @date:        2016年4月7日 上午11:05:38
 * Copyright (c) 2015, Samton. All rights reserved
 */
@Controller
@RequestMapping("/api/goodsStorage")
public class GoodsStorageController extends SdkBaseController {
	
	@Resource
	private IGoodsStorageService goodsStorageService;

	@Resource
	private IWarehouseService warehouseService;
	
	/**
	 * 根据商品id查询所有的仓库信息
	 * @param goodsId
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/queryWhouseListByGoodsId")
	@ResponseBody
	public Map<String, Object> queryWhouseListByGoodsId(Long goodsId) throws Exception{
		if(goodsId == null){//商品id为空
			throw new ControllerException(ExpCodeConstant.PARAMTER_ILLEGAL, "非法参数--商品Id为空");
		}
		
		//数据库操作
		List<GoodsStorageVo> storageList = goodsStorageService.queryWhouseListByGoodsId(goodsId);
		//返回结果
		boolean result = storageList.isEmpty() ? false : true;
		return this.getResultMap(result, storageList);
	}
	
	 /**
     * 根据仓库id查询所有的仓位信息
     * @param whouseId
     * @param enterpriseId
     * @return
     * @throws ServiceException
     */
	@RequestMapping(value = "/querySpaceListByWhouseId")
	@ResponseBody
	public Map<String, Object> querySpaceListByWhouseId(Long whouseId, Long goodsId) throws Exception{
		if(whouseId == null){//仓库id为空
			throw new ControllerException(ExpCodeConstant.PARAMTER_ILLEGAL, "非法参数--仓库Id为空");
		}
		
		if(goodsId == null){//商品id为空
			throw new ControllerException(ExpCodeConstant.PARAMTER_ILLEGAL, "非法参数--商品Id为空");
		}
		
		//数据库操作
		List<GoodsStorageVo> spaceList = goodsStorageService.querySpaceListByWhouseId(goodsId, whouseId);
		//返回结果
		boolean result = spaceList.isEmpty() ? false : true;
		return this.getResultMap(result, spaceList);
	}

	/**
	 * 
	 * @Title:        getStorageByGoodsId 
	 * @Description:  根据商品ID获得商品与仓库仓位的信息
	 * @param:        @param goodsId
	 * @param:        @return
	 * @param:        @throws Exception    
	 * @return:       Map<String,Object>    
	 * @author        Alex
	 * @Date          2016年4月7日 上午11:15:32
	 */
	@RequestMapping(value = "/getStorageByGoodsId")
	@ResponseBody
	public Map<String, Object> getStorageByGoodsId(JqParamBean paramBean, Long goodsId) throws Exception {
		Map<String, Object> jo = new HashMap<String, Object>(0);
		Map<String, Object> search = new HashMap<String, Object>(0);
		search.put("goodsId", goodsId);
		paramBean.setSearch(search);

		return this.getResultMap(goodsStorageService.getGoodsWhouseByGoodsId(paramBean));
	}
	
	/**
	 * 
	 * @Title:        saveOrUpdateStorage 
	 * @Description:  新增或修改商品仓库信息
	 * @param:        @return    
	 * @return:       Map<String,Object>    
	 * @author        Alex
	 * @Date          2016年4月13日 下午4:02:57
	 */
	@RequestMapping(value = "/saveOrUpdateStorage")
	@ResponseBody
	public Map<String, Object> saveOrUpdateStorage(TErpGoodsStorage goodsStorage){
		boolean isRight = false;
		
		Long gsId = goodsStorageService.getStorageByGoodsIdWhouseId(goodsStorage);
		
		if(gsId > 0){
			goodsStorage.setGsId(gsId);
			isRight = goodsStorageService.updateStorage(goodsStorage);
		} else {
			isRight = goodsStorageService.insertGoodsStorage(goodsStorage) > 0;
		}
		return this.getResultMap(isRight);
	}
}
