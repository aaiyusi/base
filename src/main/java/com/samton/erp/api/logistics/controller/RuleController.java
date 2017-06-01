package com.samton.erp.api.logistics.controller;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.samton.erp.api.catalog.bean.entity.GoodsCatalogVO;
import com.samton.erp.api.catalog.bean.entity.TErpGoodsCatalog;
import com.samton.erp.api.catalog.service.TErpGoodsCatalogService;
import com.samton.erp.api.logistics.bean.entity.TErpLogisticsRule;
import com.samton.erp.api.logistics.bean.entity.TErpLogisticsRuleDetail;
import com.samton.erp.api.logistics.bean.entity.TErpSysLogisticsCompany;
import com.samton.erp.api.logistics.bean.vo.RuleDetailVo;
import com.samton.erp.api.logistics.bean.vo.RuleVo;
import com.samton.erp.api.logistics.service.ILogisticsCompanyService;
import com.samton.erp.api.logistics.service.IRuleService;
import com.samton.erp.api.logistics.service.impl.LogisticsCompanyService;
import com.samton.erp.api.orders.bean.entity.TErpOrders;
import com.samton.erp.api.orders.constant.OrderExpCodeConstant;
import com.samton.erp.api.orders.constant.OrderLogConstant;
import com.samton.erp.api.orders.constant.OrderStateConstant;
import com.samton.erp.api.shop.bean.entity.TErpShop;
import com.samton.erp.api.shop.service.IShopService;
import com.samton.erp.api.sys.bean.entity.TErpSysDictValue;
import com.samton.erp.api.sys.service.ISysService;
import com.samton.erp.api.warehouse.bean.entity.TErpWarehouse;
import com.samton.erp.api.warehouse.service.IWarehouseService;
import com.samton.platform.common.bean.param.JqParamBean;
import com.samton.platform.framework.base.SdkBaseController;
import com.samton.platform.framework.bean.UserCacheBean;
import com.samton.platform.framework.exception.ControllerException;
import com.samton.platform.framework.mybatis.pagination.Pagination;
import com.samton.platform.framework.util.CurrentUtil;

/**
 * @Description:物流匹配规则管理Controller
 * @author:     Zou Xiang
 * @date:        2016年4月12日 下午19:17:01
 * Copyright (c) 2016, Samton. All rights reserved
 */
@Controller
@RequestMapping("/api/logisticsRule")
public class RuleController extends SdkBaseController {


	/**
	 * 跳转视图
	 */
	private final static String ADD_RULE_PAGE = "logistics/ruleAdd";

	private final static String EDIT_RULE_PAGE = "logistics/ruleEdit";
	
	private final static String RULE_INFO_PAGE = "logistics/ruleInfo";
	
	/**
	 * 物流规则业务
	 */
	@Resource
	private IRuleService ruleService;
	
	/**
	 * 仓库业务
	 */
	@Resource
	private IWarehouseService warehouseService;
	
	/**
	 * 店铺业务
	 */
	@Resource
	private IShopService shopService;

	/**
	 * 商品分类业务
	 */
	@Resource
	private TErpGoodsCatalogService catalogService;
	
	/**
	 * 物流渠道业务
	 */
	@Resource
	private ILogisticsCompanyService logisticsCompanyService;

	/**
	 * 数据字典
	 */
	@Resource
	private ISysService sysService;
	
	/**
	 * 查询规则列表
	 * @param param
	 * @param vo
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/ruleList")
	@ResponseBody
	public Map<String, Object> getRuleList(JqParamBean param, RuleVo vo) throws Exception {
		if(vo==null){
			vo = new RuleVo();
		}
		
		//获得当前登陆信息
		UserCacheBean userCacheBean = CurrentUtil.getCurrentUser();
		vo.setCurrentUserId(userCacheBean.getUserId());
		vo.setEnterpriseId(userCacheBean.getEnterpriseId());
		
		//设置查询信息
		param.setSearch(vo);
		
		//查询数据
		Pagination<RuleVo> pagination = ruleService.getRuleList(param);
		
		return this.getResultMap(pagination != null, pagination);
	}
	
	/**
	 * 获取物流渠道集合
	 *  @return
	 *  @throws Exception
	 *  @author        liujiping
	 *  @Date          2016年4月25日
	 */
	@RequestMapping(value = "/getLogisticsCompanyList")
	@ResponseBody
	public Map<String, Object> getLogisticsCompanyList() throws Exception{
		TErpSysLogisticsCompany record = new TErpSysLogisticsCompany();
		List<Map<String, Object>> logisticsCompanyList = logisticsCompanyService.queryAllLogistics(record);
		return this.getResultMap(logisticsCompanyList != null, logisticsCompanyList);
	}
	
	@RequestMapping("/goRuleAddPage")
	public String goRuleAddPage() throws Exception{
		
		//仓库集合
		List<Map<String, Object>> whouseList = warehouseService.warehouseSelect();
		//店铺集合
		List<TErpShop>  shopList= shopService.getAllAuthShopList();
		//商品分类集合
		List<TErpGoodsCatalog> catalogList = catalogService.selectGoodsCatalogList();
		TErpSysLogisticsCompany record = new TErpSysLogisticsCompany();
		//物流渠道集合
		List<Map<String, Object>> logisticsCompanyList = logisticsCompanyService.queryAllLogistics(record);
		//全部大洲
		List<Map<String, Object>>dicts= sysService.querySysDictListByDictTypeId(1);
		//全部国家
		List<TErpSysDictValue> dictCuntrys = sysService.queryAllCountryList();
		
		request.setAttribute("whouseList", whouseList);
		request.setAttribute("shopList", shopList);
		request.setAttribute("catalogList", catalogList);
		request.setAttribute("lcList", logisticsCompanyList);
		request.setAttribute("dicts", dicts);
		request.setAttribute("dictCuntrys", dictCuntrys);
		//返回物理视图
		return ADD_RULE_PAGE;
	}
	
	/**
	 * 物流规则添加
	 *  @param rule
	 *  @return
	 *  @throws Exception
	 *  @author        liujiping
	 *  @Date          2016年4月19日
	 */
	@RequestMapping("/addRule")
	@ResponseBody
	public Map<String,Object> addRule(TErpLogisticsRule rule) throws Exception{
		//添加的规则明细类型数组
		String  detailTypes[] = request.getParameterValues("detailType");
		

		//物流规则明细
		List<TErpLogisticsRuleDetail> ruleDetailList = new ArrayList<TErpLogisticsRuleDetail>();
		
		//获取规则
		for(String detailType : detailTypes ){
			TErpLogisticsRuleDetail  ruleDetail = new TErpLogisticsRuleDetail();
			ruleDetail.setDetailType(Short.valueOf(detailType));
			String detailInfo = request.getParameter("detailInfo" + detailType);
			if(detailInfo != null){
				detailInfo.replace(" ", "").replace("，", ",");
				detailInfo = ","+detailInfo+",";
				ruleDetail.setDetailInfo(detailInfo);
			}
			if("6".equals(detailType)){	//订单运费收入在指定范围内
				BigDecimal moneyMin = new BigDecimal(request.getParameter("moneyMin" + detailType));
				BigDecimal moneyMax =  new BigDecimal(request.getParameter("moneyMax" + detailType));
				ruleDetail.setMoneyMin(moneyMin);
				ruleDetail.setMoneyMax(moneyMax);
				ruleDetail.setMoneyUnit(Short.valueOf(request.getParameter("moneyUnit" + detailType)));
			}else if("10".equals(detailType)){		//订单目的地为指定国家
				String warehouseIds = request.getParameter("countryRange10");
				ruleDetail.setCountryRange(Short.valueOf(request.getParameter("countryRange" + detailType)));
			}else if("14".equals(detailType)){		//预估重量在指定范围内
				String warehouseIds = request.getParameter("countryRange10");
				BigDecimal weightMin = new BigDecimal(request.getParameter("weightMin" + detailType));
				BigDecimal weightMax =  new BigDecimal(request.getParameter("weightMax" + detailType));
				ruleDetail.setWeightMin(weightMin);
				ruleDetail.setWeightMax(weightMax);
			}
			ruleDetailList.add(ruleDetail);
		}
		
		ruleService.addRule(rule, ruleDetailList);
		return this.getResultMap( true,1);
	}
	
	/**
	 * 跳转物流规则编辑界面
	 *  @param ruleId
	 *  @return
	 *  @throws Exception
	 *  @author        liujiping
	 *  @Date          2016年4月21日
	 */
	@RequestMapping("/goRuleEditPage")
	public String goRuleEditPage(Long ruleId) throws Exception{
		
		//仓库集合
		List<Map<String, Object>> whouseList = warehouseService.warehouseSelect();
		//店铺集合
		List<TErpShop>  shopList= shopService.getAllAuthShopList();
		//商品分类集合
		List<TErpGoodsCatalog> catalogList = catalogService.selectGoodsCatalogList();
		TErpSysLogisticsCompany record = new TErpSysLogisticsCompany();
		//物流渠道集合
		List<Map<String, Object>> logisticsCompanyList = logisticsCompanyService.queryAllLogistics(record);
		//全部大洲
		List<Map<String, Object>>dicts= sysService.querySysDictListByDictTypeId(1);
		//全部国家
		List<TErpSysDictValue> dictCuntrys = sysService.queryAllCountryList();
		
		RuleVo ruleVo = ruleService.getRuleVoByRuleId(ruleId);
		if(ruleVo != null){
			for(RuleDetailVo ruleDetailVo : ruleVo.getRuleDetailVos()){
		        List<String> namelist = new ArrayList<String>();
				switch(ruleDetailVo.getDetailType()){
					case 1:
						//仓库名称集合
			        	for(String s : ruleDetailVo.getDetailInfos()){
			        		for(Map<String, Object> warehouse :whouseList){
				        		if(warehouse.get("whouse_id").toString().equals(s)){
				        			warehouse.put("state",(short)-1);
				        			namelist.add(warehouse.get("whouse_name").toString());
				        		}
				        	}
				        }
				        ruleDetailVo.setDetailInfoNames(namelist);
						break;
					case 7:
						//商品分类集合
			        	for(String s : ruleDetailVo.getDetailInfos()){
			        		for(TErpGoodsCatalog ca :catalogList){
				        		if(ca.getCatalogiId().toString().equals(s)){
				        			ca.setState((short)-1);
				        			namelist.add(ca.getName());
				        		}
				        	}
				        }
				        ruleDetailVo.setDetailInfoNames(namelist);
						break;
					case 10 :
				        //国家
			        	for(String s : ruleDetailVo.getDetailInfos()){
			        		for(TErpSysDictValue dc :dictCuntrys){
				        		if(dc.getDictValue().equals(s)){
				        			dc.setOrderNum(-1);
				        			namelist.add(dc.getDictName());
				        		}
				        	}
				        }
				        ruleDetailVo.setDetailInfoNames(namelist);
						break;
					case 11:
				        //商铺
			        	for(String s : ruleDetailVo.getDetailInfos()){
			        		for(TErpShop sp :shopList){
				        		if(sp.getShopId().toString().equals(s)){
				        			sp.setState((short)-1);
				        			namelist.add(sp.getShopName());
				        		}
				        	}
				        }
				        ruleDetailVo.setDetailInfoNames(namelist);
						break;
				}
			}
		}
		request.setAttribute("ruleVo", ruleVo);
		
		request.setAttribute("whouseList", whouseList);
		request.setAttribute("shopList", shopList);
		request.setAttribute("catalogList", catalogList);
		request.setAttribute("lcList", logisticsCompanyList);
		request.setAttribute("dicts", dicts);
		request.setAttribute("dictCuntrys", dictCuntrys);
		//返回物理视图
		return EDIT_RULE_PAGE;
	}
	

	/**
	 * 物流规则编辑
	 *  @param rule
	 *  @return
	 *  @throws Exception
	 *  @author        liujiping
	 *  @Date          2016年4月21日
	 */
	@RequestMapping("/editRule")
	@ResponseBody
	public Map<String,Object> editRule(TErpLogisticsRule rule) throws Exception{
		//添加的规则明细类型数组
		String  detailTypes[] = request.getParameterValues("detailType");
		

		//物流规则明细
		List<TErpLogisticsRuleDetail> ruleDetailList = new ArrayList<TErpLogisticsRuleDetail>();
		
		//获取规则
		for(String detailType : detailTypes ){
			TErpLogisticsRuleDetail  ruleDetail = new TErpLogisticsRuleDetail();
			ruleDetail.setDetailType(Short.valueOf(detailType));
			String detailInfo = request.getParameter("detailInfo" + detailType);
			if(detailInfo != null){
				detailInfo.replace(" ", "").replace("，", ",");
				detailInfo = ","+detailInfo+",";
				ruleDetail.setDetailInfo(detailInfo);
			}
			
			if("6".equals(detailType)){	//订单运费收入在指定范围内
				BigDecimal moneyMin = new BigDecimal(request.getParameter("moneyMin" + detailType));
				BigDecimal moneyMax =  new BigDecimal(request.getParameter("moneyMax" + detailType));
				ruleDetail.setMoneyMin(moneyMin);
				ruleDetail.setMoneyMax(moneyMax);
				ruleDetail.setMoneyUnit(Short.valueOf(request.getParameter("moneyUnit" + detailType)));
			}else if("10".equals(detailType)){		//订单目的地为指定国家
				String warehouseIds = request.getParameter("countryRange10");
				ruleDetail.setCountryRange(Short.valueOf(request.getParameter("countryRange" + detailType)));
			}else if("14".equals(detailType)){		//预估重量在指定范围内
				String warehouseIds = request.getParameter("countryRange10");
				BigDecimal weightMin = new BigDecimal(request.getParameter("weightMin" + detailType));
				BigDecimal weightMax =  new BigDecimal(request.getParameter("weightMax" + detailType));
				ruleDetail.setWeightMin(weightMin);
				ruleDetail.setWeightMax(weightMax);
			}
			ruleDetailList.add(ruleDetail);
		}
		
		ruleService.updateRule(rule, ruleDetailList);
		return this.getResultMap( true,1);
	}
	
	/**
	 * 跳转物流规则详情页面
	 *  @param ruleId
	 *  @return
	 *  @throws Exception
	 *  @author        liujiping
	 *  @Date          2016年4月21日
	 */
	@RequestMapping("/goRuleInfoPage")
	public String goRuleInfoPage(Long ruleId) throws Exception{
		
		//仓库集合
		List<Map<String, Object>> whouseList = warehouseService.warehouseSelect();
		//店铺集合
		List<TErpShop>  shopList= shopService.getAllAuthShopList();
		//商品分类集合
		List<TErpGoodsCatalog> catalogList = catalogService.selectGoodsCatalogList();
		//全部国家
		List<TErpSysDictValue> dictCuntrys = sysService.queryAllCountryList();
		
		RuleVo ruleVo = ruleService.getRuleVoByRuleId(ruleId);
		if(ruleVo != null){
			for(RuleDetailVo ruleDetailVo : ruleVo.getRuleDetailVos()){
		        List<String> namelist = new ArrayList<String>();
				switch(ruleDetailVo.getDetailType()){
					case 1:
						//仓库名称集合
			        	for(String s : ruleDetailVo.getDetailInfos()){
			        		for(Map<String, Object> warehouse :whouseList){
				        		if(warehouse.get("whouse_id").toString().equals(s)){
				        			warehouse.put("state",(short)-1);
				        			namelist.add(warehouse.get("whouse_name").toString());
				        		}
				        	}
				        }
				        ruleDetailVo.setDetailInfoNames(namelist);
						break;
					case 7:
						//商品分类集合
			        	for(String s : ruleDetailVo.getDetailInfos()){
			        		for(TErpGoodsCatalog ca :catalogList){
				        		if(ca.getCatalogiId().toString().equals(s)){
				        			namelist.add(ca.getName());
				        		}
				        	}
				        }
				        ruleDetailVo.setDetailInfoNames(namelist);
						break;
					case 10 :
				        //国家
			        	for(String s : ruleDetailVo.getDetailInfos()){
			        		for(TErpSysDictValue dc :dictCuntrys){
				        		if(dc.getDictValue().equals(s)){
				        			namelist.add(dc.getDictName());
				        		}
				        	}
				        }
				        ruleDetailVo.setDetailInfoNames(namelist);
						break;
					case 11:
				        //商铺
			        	for(String s : ruleDetailVo.getDetailInfos()){
			        		for(TErpShop sp :shopList){
				        		if(sp.getShopId().toString().equals(s)){
				        			namelist.add(sp.getShopName());
				        		}
				        	}
				        }
				        ruleDetailVo.setDetailInfoNames(namelist);
						break;
				}
			}
		}
		request.setAttribute("ruleVo", ruleVo);
//		request.setAttribute("whouseList", whouseList);
//		request.setAttribute("shopList", shopList);
//		request.setAttribute("catalogList", catalogList);
		//返回物理视图
		return  RULE_INFO_PAGE;
	}
	

	/**
	 * 更新物流规则状态
	 *  @param ruleId
	 *  @param status
	 *  @return
	 *  @throws Exception
	 *  @author        liujiping
	 *  @Date          2016年4月21日
	 */
	@RequestMapping("/updateRuleStatus")
	@ResponseBody
	public Map<String,Object> updateRuleStatus(Long ruleId,Short status) throws Exception{
		if(ruleId != null){
			TErpLogisticsRule rule = ruleService.selectRuleById(ruleId);
			if(rule != null ){
				rule.setStatus(status);
				ruleService.updateRule(rule);
			}
		}
		return this.getResultMap( true,1);
	}
	

	/**
	 * 更新物流规则排序
	 *  @param ruleId
	 *  @param priorityLevel
	 *  @return
	 *  @throws Exception
	 *  @author        liujiping
	 *  @Date          2016年4月21日
	 */
	@RequestMapping("/updateRuleLevel")
	@ResponseBody
	public Map<String,Object> updateRuleLevel(Long ruleId,Short priorityLevel) throws Exception{
		if(ruleId != null){
			TErpLogisticsRule rule = ruleService.selectRuleById(ruleId);
			if(rule != null ){
				rule.setPriorityLevel(priorityLevel);
				ruleService.updateRule(rule);
			}
		}
		return this.getResultMap( true,1);
	}

	/**
	 * 根据物流规则ID 删除
	 *  @param ruleId
	 *  @return
	 *  @throws Exception
	 *  @author        liujiping
	 *  @Date          2016年4月21日
	 */
	@RequestMapping("/delRule")
	@ResponseBody
	public Map<String,Object> delRule(Long ruleId) throws Exception{
		ruleService.delRuleById(ruleId);
		return this.getResultMap( true,1);
	}
	
}
