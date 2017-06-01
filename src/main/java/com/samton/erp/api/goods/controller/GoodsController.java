package com.samton.erp.api.goods.controller;

import java.awt.image.BufferedImage;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.annotation.Resource;
import javax.imageio.ImageIO;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONObject;

import org.springframework.stereotype.Controller;
import org.apache.commons.lang.StringUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.samton.erp.api.goods.bean.entity.TErpGoods;
import com.samton.erp.api.goods.bean.vo.GoodsPrintVo;
import com.samton.erp.api.goods.bean.vo.GoodsVo;
import com.samton.erp.api.goods.constant.GoodsExpCodeConstant;
import com.samton.erp.api.goods.service.IGoodsService;
import com.samton.erp.api.print.bean.vo.PrintVo;
import com.samton.erp.api.print.constant.PrintConstant;
import com.samton.erp.api.print.service.IPrintService;
import com.samton.erp.common.util.ChangeString;
import com.samton.erp.common.util.excel.ExcelField;
import com.samton.erp.common.util.excel.ExportExcel;
import com.samton.platform.common.bean.param.JqParamBean;
import com.samton.platform.framework.base.SdkBaseController;
import com.samton.platform.framework.bean.UserCacheBean;
import com.samton.platform.framework.exception.ControllerException;
import com.samton.platform.framework.mybatis.pagination.Pagination;
import com.samton.platform.framework.util.CurrentUtil;
import com.samton.web.common.util.OneBarcodeUtil;

/**
 * 
 *
 * @Description:商品管理Controller
 * @author:     Alex
 * @date:        2016年3月26日 上午11:33:01
 * Copyright (c) 2015, Samton. All rights reserved
 */
@Controller
@RequestMapping("/api/goods")
public class GoodsController extends SdkBaseController {
	
	@Resource
	private IGoodsService goodsService;
	
	@Resource
	private IPrintService printService;

	/**
	 * 商品打印控制界面
	 */
	public final static String GOODS_PRINT = "goods/goodsPrint";

	/**
	 * 
	 * @Title:        queryGoodsList 
	 * @Description:  查询商品列表
	 * @param:        @param param		分页信息
	 * @param:        @param goodsVo	查询条件
	 * @param:        @return    
	 * @param:        @throws Exception    
	 * @return:       Map<String,Object>    
	 * @author        Alex
	 * @Date          2016年3月28日 下午4:24:37
	 */
	@RequestMapping(value = "/queryGoodsList")
	@ResponseBody
	public Map<String, Object> queryGoodsList(JqParamBean param, GoodsVo goodsVo, Integer modelType, String modelValue) throws Exception{
		
		//判断查询条件对象是否为空
		if(goodsVo == null){
			throw new ControllerException(GoodsExpCodeConstant.GOODS_NULL, null,false);
		}
		if(modelType != null){
			if(modelType == 0){
				goodsVo.setSku(modelValue);
			} else if(modelType == 1){
				goodsVo.setName(modelValue);
			}
		}
		
		//获得当前登陆信息
		UserCacheBean userCacheBean = CurrentUtil.getCurrentUser();
		goodsVo.setCreateUserId(userCacheBean.getUserId());
		goodsVo.setEnterpriseId(userCacheBean.getEnterpriseId());
		
		param.setSidx(ChangeString.changeString(param.getSidx(), 0));
		
		//设置查询信息
		param.setSearch(goodsVo);
		
		//查询数据
		Pagination<GoodsVo> list = goodsService.queryGoodsList(param);
		
		return this.getResultMap(list != null, list);
	}
	
	/**
	 * 
	 * @Title:        addGoods 
	 * @Description:  新增商品
	 * @param:        @param goods			商品信息
	 * @param:        @return
	 * @param:        @throws Exception    
	 * @return:       Map<String,Object>    
	 * @author        Alex
	 * @Date          2016年3月28日 下午4:50:11
	 */
	@RequestMapping(value = "/addGoods")
	@ResponseBody
	public Map<String, Object> addGoods(TErpGoods goods) throws Exception {
		//判断商品是否为空
		if(goods == null){
			throw new ControllerException(GoodsExpCodeConstant.GOODS_NULL, null,false);
		}
		
		//判断商品SKU值是否为空
		if (StringUtils.isEmpty(goods.getSku())){
			throw new ControllerException(GoodsExpCodeConstant.GOODS_SKU_NULL, null,true);
		}
		
		//判断商品中文名称是否为空
		if (StringUtils.isEmpty(goods.getName())){
			throw new ControllerException(GoodsExpCodeConstant.GOODS_NAME_NULL, null,true);
		}
		
		//判断商品英文名称是否为空
		if (StringUtils.isEmpty(goods.geteName())){
			throw new ControllerException(GoodsExpCodeConstant.GOODS_ENAME_NULL, null,true);
		}
		
		//判断商品目录是否为空
		if (goods.getCatalogiId() == null || goods.getCatalogiId() <= 0){
			throw new ControllerException(GoodsExpCodeConstant.GOODS_CATALOGIID_NULL, null,true);
		}
		
		//判断商品状态是否为空
		if (goods.getSaleState() == null || goods.getSaleState() <= 0){
			throw new ControllerException(GoodsExpCodeConstant.GOODS_SALESTATE_NULL, null,true);
		}
		
		
		goods.setInventoryCount(0);
		goods.setDeliverCount(0);
		goods.setNotDeliverCount(0);
		goods.setEnterpriseId(CurrentUtil.getCurrentUser().getEnterpriseId());
		
		Long num = goodsService.insertGoods(goods);
		return this.getResultMap(num != null, num);
	}

	/**
	 * 
	 * @Title:        getGoodsById 
	 * @Description:  根据商品ID获得商品详情
	 * @param:        @return    
	 * @param:        @throws Exception    
	 * @return:       Map<String,Object>    
	 * @author        Alex
	 * @Date          2016年3月28日 下午6:38:22
	 */
	@RequestMapping(value = "/getGoodsById")
	@ResponseBody
	public Map<String, Object> getGoodsById(Long goodsId) throws Exception {
		//判断商品是否为空
		if(goodsId == null || goodsId <= 0){
			throw new ControllerException(GoodsExpCodeConstant.GOODS_ID_NULL, null,false);
		}

		GoodsVo goods = goodsService.getGoodsVoById(goodsId);
		
		return this.getResultMap(goods != null, goods);
	}
	
	/**
	 * 
	 * @Title:        updateGoods 
	 * @Description:  修改商品信息
	 * @param:        @param goods
	 * @param:        @return    
	 * @return:       Map<String,Object>    
	 * @author        Alex
	 * @Date          2016年4月1日 上午10:24:00
	 */
	@RequestMapping(value = "/updateGoods")
	@ResponseBody
	public Map<String, Object> updateGoods(TErpGoods goods){
//		goods.setNotDeliverCount(0);
//		goods.setInventoryCount(0);
//		goods.setDeliverCount(0);
		return this.getResultMap(goodsService.updateGoods(goods) > 0);
	}
	
	/**
	 * 生成商品条形码
	 * @throws Exception
	 */
	@RequestMapping("/getBarcode")   
    @ResponseBody
	public void getBarcode(String code) throws Exception{
		if(org.apache.commons.lang.StringUtils.isBlank(code)){
			return;
		}
		HttpServletResponse response=this.getResponse();
        //设置不缓存图片  
        response.setHeader("Pragma", "No-cache");
        response.setHeader("Cache-Control", "No-cache");
        response.setDateHeader("Expires", 0);
        //指定生成的相应图片  
        response.setContentType("image/png");
        BufferedImage image = OneBarcodeUtil.getBarcode(code,false);
        ImageIO.write(image, "PNG", response.getOutputStream());
	}
	
	/**
	 * 
	 * @Title:        deleteGoods 
	 * @Description:  删除商品信息
	 * @param:        @param goodsId
	 * @param:        @return    
	 * @return:       Map<String,Object>    
	 * @author        Alex
	 * @Date          2016年4月5日 下午8:23:01
	 */
	@RequestMapping(value = "/deleteGoods")
	@ResponseBody
	public Map<String, Object> deleteGoods(Long goodsId){
		return this.getResultMap(goodsService.deleteGoods(goodsId));
	}
	
	/**
	 * 获取货架sku信息
	 * @param shelfId
	 * @return
	 */
	@RequestMapping(value = "/getSkuListByShelfId")
	@ResponseBody
	public Map<String, Object> getSkuListByShelfId(JqParamBean paramBean,Long shelfId){
		Map<String, Object> search=new HashMap<String, Object>();
		search.put("shelfId", shelfId);
		paramBean.setSearch(search);
		return this.getResultMap(goodsService.getSkuListByShelfId(paramBean));
	}
	
	/**
	 * 
	 * @Title:        getGoodsHistorysByGoodsId 
	 * @Description:  根据商品ID获得商品历史交易记录
	 * @param:        @param paramBean
	 * @param:        @param goodsId
	 * @param:        @return    
	 * @return:       Map<String,Object>    
	 * @author        Alex
	 * @Date          2016年4月11日 上午10:13:42
	 */
	@RequestMapping(value = "/getGoodsHistorysByGoodsId")
	@ResponseBody
	public Map<String, Object> getGoodsHistorysByGoodsId(JqParamBean paramBean,Long goodsId){
		
		Map<String, Object> search = new HashMap<String, Object>(0);
		search.put("goodsId", goodsId);
		paramBean.setSearch(search);
		
		return this.getResultMap(goodsService.getGoodsHistorysByGoodsId(paramBean));
	}
	
//	/**
//	 * 
//	 * @Title:        printGoods 
//	 * @Description:  商品打印界面
//	 * @param:        @return    
//	 * @return:       String    
//	 * @author        Alex
//	 * @throws Exception 
//	 * @Date          2016年4月19日 下午4:11:03
//	 */
//	@RequestMapping(value = "/printGoods")
//	public String printGoods(String printGoodsIds, String printNums) throws Exception{
//		List<GoodsPrintVo> list = goodsService.getPrintGoods(printGoodsIds);
//		String[] nums = printNums.split(",");
//		String html = printService.getPrintContent(1L, list, nums);
//		request.setAttribute("content", html);
//		return PrintConstant.PRINT_MAIN;
//	}
	
	/**
	 * 
	 * @Title:        printGoods 
	 * @Description:  商品打印方法
	 * @param:        @param printGoodsIds		商品ID
	 * @param:        @param printNums			打印数量
	 * @param:        @return
	 * @param:        @throws Exception    
	 * @return:       String    
	 * @author        Alex
	 * @Date          2016年4月22日 上午9:53:07
	 */
	@RequestMapping(value = "/printGoods")
	public String printGoods(String printGoodsIds, String printNums, Long printTemp) throws Exception{
		//获得打印数据
		List<GoodsPrintVo> list = goodsService.getPrintGoods(printGoodsIds);
		
		//开始组装打印对象
		List<PrintVo<GoodsPrintVo>> printList = new ArrayList<PrintVo<GoodsPrintVo>>(0);
		String[] nums = printNums.split(",");
		String[] ids = printGoodsIds.split(",");
		
		//设置打印数量
		for (int i = 0; i < ids.length; i++) {
			for (GoodsPrintVo vo : list) {
				if (vo.getGoodsId() == Long.parseLong(ids[i])) {
					PrintVo<GoodsPrintVo> p = new PrintVo<GoodsPrintVo>();
					p.setObj(vo);
					p.setPrintNum(Integer.parseInt(nums[i]));
					printList.add(p);
					break;
				}
			}
		}
		
		//获得打印内容
		String html = printService.getPrintContent(printTemp, printList);
		request.setAttribute("content", html);
		return PrintConstant.PRINT_MAIN;
	}
	
	/**
	 * 
	 * @Title:        getPrintGoods 
	 * @Description:  根据商品ID获得商品打印信息
	 * @param:        @param goodsIds
	 * @param:        @return
	 * @param:        @throws Exception    
	 * @return:       Map<String,Object>    
	 * @author        Alex
	 * @Date          2016年4月28日 下午3:11:32
	 */
	@RequestMapping(value = "/getPrintGoods")
	@ResponseBody
	public Map<String, Object> getPrintGoods(String goodsIds) throws Exception{
		List<GoodsPrintVo> list = goodsService.getPrintGoods(goodsIds);
		return this.getResultMap(list.size() > 0, list);
	}
	
	@SuppressWarnings("rawtypes")
	@RequestMapping(value = "/exportGoodsList")
	public void exportGoodsList(JqParamBean param) throws Exception{
		//接收参数
		Map map = request.getParameterMap();
		Set set = map.keySet();
		Map<String,String> params = new HashMap<String,String>();
		for (Iterator i = set.iterator(); i.hasNext();) {
			String key = (String) i.next();
			String[] values = (String[]) map.get(key);
			String valueStr = "";
			for (int j = 0; j < values.length; j++) {
				if(!"all".equals(values[j])){
					valueStr = (j == values.length - 1) ? valueStr + values[j]
							: valueStr + values[j] + ",";
				}
			}
			params.put(key, valueStr);
		}
		
		//设置导出条件
		String search = params.get("search");
		GoodsVo goodsVo = new GoodsVo();
		if(!StringUtils.isBlank(search)){
			JSONObject obj = JSONObject.fromObject(search);

			if(obj.get("modelType") != null){
				if(obj.getInt("modelType") == 0){
					goodsVo.setSku(obj.getString("modelValue"));
				} else if(obj.getInt("modelType") == 1){
					goodsVo.setName(obj.getString("modelValue"));
				}
			}
			
			goodsVo.setSaleState(Short.parseShort(obj.getString("saleState")));
			goodsVo.setpCatalogiId(obj.getLong("pCatalogiId"));
			goodsVo.setCatalogiId(obj.getLong("catalogiId"));
		}
		goodsVo.setEnterpriseId(CurrentUtil.getCurrentUser().getEnterpriseId());

		param.setSearch(goodsVo);
		//数据库操作
		Pagination<GoodsVo> list = goodsService.queryGoodsList(param);
		List<ExcelField> fs = new ArrayList<ExcelField>();
		String fieldlabel = params.get("fieldlabel");
		if(StringUtils.isNotBlank(fieldlabel)){
			for(String label : fieldlabel.split(",")){
				fs.add(new ExcelField(params.get("map-name-"+label),label));
			}
		}
		//生成导出文件名
		String fileName = "";
		fileName = fileName + System.currentTimeMillis();
		
		//导出文件
		ExportExcel.exportExcel(fileName,fs, list.getData());
	}
	
	
	
}
