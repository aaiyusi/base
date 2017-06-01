package com.samton.erp.api.shop.controller;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.samton.erp.api.orders.task.AliSyncTaskThread;
import com.samton.erp.api.orders.task.WishSyncTaskThread;
import com.samton.erp.api.orders.thread.pool.CommonThreadPool;
import com.samton.erp.api.orders.util.Configuration;
import com.samton.erp.api.orders.util.MyBeanUtils;
import com.samton.erp.api.orders.util.OauthToken;
import com.samton.erp.api.shop.bean.entity.TErpShop;
import com.samton.erp.api.shop.bean.vo.ShopVo;
import com.samton.erp.api.shop.bean.vo.TErpShopVo;
import com.samton.erp.api.shop.bean.vo.Token;
import com.samton.erp.api.shop.constant.ShopConstant;
import com.samton.erp.api.shop.service.IShopService;
import com.samton.erp.common.util.aliexpress.CommonUtil;
import com.samton.platform.common.bean.param.JqParamBean;
import com.samton.platform.framework.base.SdkBaseController;
import com.samton.platform.framework.exception.ControllerException;
import com.samton.platform.framework.exception.constant.ExpCodeConstant;
import com.samton.platform.framework.mybatis.pagination.Pagination;
import com.samton.platform.framework.util.http.HttpClientUtil;
 
/**
 * 
* @ClassName: ShopController 
* @Description: 店铺管理
* @author A18ccms a18ccms_gmail_com 
* @date 2016年4月8日 上午9:37:17 
*
 */
@Controller
@RequestMapping("/api/shop")
public class ShopController extends SdkBaseController {
	
	@Resource
	private IShopService shopService;

	/**
	 * 
	 * @Description: 当前登录用户查询 店铺
	 * @param @param param
	 * @param @param shop
	 * @param @return
	 * @param @throws Exception   
	 * @return Map<String,Object>  
	 * @throws
	 * @author yokoboy
	 * @date 2016年4月8日
	 */
	@RequestMapping(value = "/queryShopList")
	@ResponseBody
	public Map<String, Object> queryShopList(JqParamBean param, TErpShopVo shop) throws Exception{
		//设置查询信息
		param.setSearch(shop);
		//查询数据
		Pagination<TErpShopVo> list = shopService.getShopList(param);
		return this.getResultMap(list != null, list);
	}
	
	@RequestMapping(value = "/getShopById")
	@ResponseBody
	public Map<String, Object> getShopById(Long shopId) throws Exception{
		TErpShopVo rs = shopService.getShopById(shopId);
		boolean result = rs != null ? true : false;
		return this.getResultMap(result,rs);
	}
	
	
	/**
	 * 
	 * @Description: 注册商铺
	 * @param @param shop
	 * @param @return
	 * @param @throws Exception   
	 * @return Map<String,Object>  
	 * @throws
	 * @author yokoboy
	 * @date 2016年4月11日
	 */
	@RequestMapping(value = "/addShop")
	@ResponseBody
	public Map<String, Object> addShop(TErpShopVo shop) throws Exception{
		int result = shopService.addShop(shop);
		return this.getResultMap(result > 0 ? true : false, shop);
	}
	
	/**
	 * 
	 * @Description: 启用
	 * @param @param shopId
	 * @param @return
	 * @param @throws Exception   
	 * @return Map<String,Object>  
	 * @throws
	 * @author yokoboy
	 * @date 2016年4月11日
	 */
	@RequestMapping(value = "/enableShop")
	@ResponseBody
	public Map<String, Object> enableShop(Long shopId) throws Exception{
		int result = shopService.enableShop(shopId);
		return this.getResultMap(result > 0 ? true : false);
	}
	
	/**
	 * 
	 * @Description: 禁用
	 * @param @param shopId
	 * @param @return
	 * @param @throws Exception   
	 * @return Map<String,Object>  
	 * @throws
	 * @author yokoboy
	 * @date 2016年4月11日
	 */
	@RequestMapping(value = "/disableShop")
	@ResponseBody
	public Map<String, Object> disableShop(Long shopId) throws Exception{
		int result = shopService.disableShop(shopId);
		return this.getResultMap(result > 0 ? true : false);
	}
	
	
	/**
	 * 
	 * @Description: 编辑
	 * @param @param shop
	 * @param @return
	 * @param @throws Exception   
	 * @return Map<String,Object>  
	 * @throws
	 * @author yokoboy
	 * @date 2016年4月11日
	 */
	@RequestMapping(value = "/updateShop")
	@ResponseBody
	public Map<String, Object>updateShop(TErpShopVo shop) throws Exception{
		int result = shopService.update(shop);
		return this.getResultMap(result > 0 ? true : false);
	}
	
	/**
	 * 
	 * @Description: 编辑
	 * @param @param shop
	 * @param @return
	 * @param @throws Exception   
	 * @return Map<String,Object>  
	 * @throws
	 * @author yokoboy
	 * @date 2016年4月11日
	 */
	@RequestMapping(value = "/reNameShop")
	@ResponseBody
	public Map<String, Object>reNameShop(Long shopId,String newShopName) throws Exception{
		int result = shopService.reNameShop(shopId, newShopName);
		return this.getResultMap(result > 0 ? true : false);
	}
	
	
	
	/**
	 * 
	 * @Description: 授权店铺
	 * @param @param shop
	 * @param @return
	 * @param @throws Exception   
	 * @return Map<String,Object>  
	 * @throws
	 * @author yokoboy
	 * @date 2016年4月13日
	 */
	@RequestMapping(value = "/authorizationShop")
	@ResponseBody
	public Map<String, Object>authorizationShop(TErpShopVo shop) throws Exception{
		int result = shopService.authorization(shop);
		return this.getResultMap(result > 0 ? true : false);
	}
	
	/**
	 * 
	 * @Description:  远程提交到wish
	 * @param @param token
	 * @param @return
	 * @param @throws Exception   
	 * @return String  
	 * @throws
	 * @author yokoboy
	 * @date 2016年4月14日
	 */
	@RequestMapping(value = "/getWishToken")
	@ResponseBody
	public String getWishToken(Token token) throws Exception{
		Map<String, String> mapToken = CommonUtil.objectToMapString(token);
		HttpClientUtil httpClientUtil = new HttpClientUtil();
		String rs = httpClientUtil.doPost(ShopConstant.WISH_ACCESS_TOKEN_URL , mapToken);
		return rs; 
	}
	
	/**
	 * 获取所有已授权并启用的店铺
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/queryAllAuthShopList")
	@ResponseBody
	public Map<String, Object> queryAllAuthShopList() throws Exception{
		List<TErpShop> shopList = shopService.getAllAuthShopList();
		Map<String, Object> data = new HashMap<String, Object>();
		data.put("data", shopList);
		return this.getResultMap(data);
	}
	
	/**
	 * 根据店铺id查询所有店铺信息
	 * @param ids
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/downloadOrder")
	@ResponseBody
	public Map<String, Object> downloadOrder(String ids) throws Exception{
		if(StringUtils.isBlank(ids)){
			throw new ControllerException(ExpCodeConstant.PARAMTER_ILLEGAL, "非法参数---参数ids为空");
		}
		boolean result = false;
		final Configuration config = Configuration.getInstance();
		if("true".equals(config.getStartTaskFlag())){//开始线程
			//数据库操作
			List<TErpShop> shopList = shopService.queryShopListById(ids);
			if(!shopList.isEmpty()){
				result = true;
				for(TErpShop shop : shopList){
					if(shop != null){
						//将店铺信息放入缓存中
						ShopVo shopVo = OauthToken.getShop(shop.getShopId());
						if(shopVo != null){
							MyBeanUtils.copyProperties(shopVo, shop);
							OauthToken.addShop(shopVo);
						}
						if(shop.getPlatformType() == 1){//Aliexpress
							if(StringUtils.isNotBlank(shop.getAccessToken())){
								//同一店铺1小时内只能手动下载一次
								if(shop.getLastSyncDate() == null || (shop.getLastSyncDate() != null && new Date().getTime() - shop.getLastSyncDate().getTime() > 3600000L)){
									//设置Aliexpress授权token
									OauthToken.setOauthToken(shop.getShopId(), shop.getAccessToken(), shop.getTokenCreateDate());
									// 执行任务
							        CommonThreadPool.getThreadPool("HandleAliexpressSyncThread").execute(new AliSyncTaskThread(shop));
							        //同时修改最后下载时间
							        shop.setLastSyncDate(new Date());
							        shopService.updateShopById(shop);
								}
							}
						}else if(shop.getPlatformType() == 2){//Wish
							if(StringUtils.isNotBlank(shop.getAccessToken())){
								//同一店铺1小时内只能手动下载一次
								if(shop.getLastSyncDate() == null || (shop.getLastSyncDate() != null && new Date().getTime() - shop.getLastSyncDate().getTime() > 3600000L)){
									//设置Wish授权token
									OauthToken.setWishToken(shop.getShopId(), shop.getAccessToken(), shop.getTokenCreateDate());
									// 执行任务
							        CommonThreadPool.getThreadPool("HandleWishSyncThread").execute(new WishSyncTaskThread(shop));
							        //同时修改最后下载时间
							        shop.setLastSyncDate(new Date());
							        shopService.updateShopById(shop);
								}
							}
						}
					}
				}
			}
		}else{
			result = true;
		}
		return this.getResultMap(result);
	}
	
	/**
	 * 获取已授权的店铺
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/queryAllShopsList")
	@ResponseBody
	public Map<String, Object> queryAllShopsList() throws Exception{
		//数据库操作
		List<Map<String, Object>> shopList = shopService.getAllShopsByEnterpriseId((short)1,null);
		return this.getResultMap(shopList.isEmpty() ? false : true, shopList);
	}
	
	/**
	 * 构建树
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/queryShopTreeByPlatformType")
	@ResponseBody
	public Map<String, Object> queryShopTreeByPlatformType(Short isUse) throws Exception{
		//数据库操作
		List<Map<String, Object>> shopList = shopService.loadShopTreeByPlatformType(isUse);
		return this.getResultMap(shopList.isEmpty() ? false : true, shopList);
	}
}
