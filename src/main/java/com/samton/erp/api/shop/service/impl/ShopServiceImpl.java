package com.samton.erp.api.shop.service.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ScheduledFuture;

import javax.annotation.Resource;

import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Service;

import com.samton.erp.api.orders.task.AliThreadSyncTask;
import com.samton.erp.api.orders.task.WishThreadSyncTask;
import com.samton.erp.api.orders.util.Configuration;
import com.samton.erp.api.orders.util.MyBeanUtils;
import com.samton.erp.api.orders.util.OauthToken;
import com.samton.erp.api.shop.bean.entity.TErpShop;
import com.samton.erp.api.shop.bean.entity.TErpShopUser;
import com.samton.erp.api.shop.bean.vo.ShopVo;
import com.samton.erp.api.shop.bean.vo.TErpShopVo;
import com.samton.erp.api.shop.constant.ShopExpCodeConstant;
import com.samton.erp.api.shop.dao.TErpShopMapper;
import com.samton.erp.api.shop.dao.TErpShopUserMapper;
import com.samton.erp.api.shop.service.IShopService;
import com.samton.erp.common.util.aliexpress.StringUtil;
import com.samton.platform.common.bean.param.JqParamBean;
import com.samton.platform.framework.bean.UserCacheBean;
import com.samton.platform.framework.exception.ServiceException;
import com.samton.platform.framework.mybatis.pagination.PageContext;
import com.samton.platform.framework.mybatis.pagination.Pagination;
import com.samton.platform.framework.util.CurrentUtil;

@Service("shopService")
public class ShopServiceImpl implements IShopService {

	@Resource
	private TErpShopMapper shopMapper;
	
	@Resource
	private TErpShopUserMapper shopUserMapper;
	
	@Override
	public Pagination<TErpShopVo> getShopList(JqParamBean param) {
		//封装分页参数
		Pagination<TErpShopVo> pagination = PageContext.initialize(param.getPage(), param.getRows());
		List<TErpShopVo> list = shopMapper.getShopList(param,pagination.getRowBounds());
		//数据库操作
		pagination.setData(list);
		return pagination; 
	}

	@Override
	public int addShop(TErpShopVo shop) throws ServiceException {
		if(StringUtil.isEmpty(shop.getShopName())){
			throw new ServiceException(ShopExpCodeConstant.SHOP_NAME_IS_EMPTY, true);
		}
		//获取当前登录用户信息
		UserCacheBean userCacheBean = CurrentUtil.getCurrentUser();
		long enterpriseId = userCacheBean.getEnterpriseId();
		TErpShopVo vo = shopMapper.getShopByShopName(shop.getShopName(), enterpriseId);
		//查询店铺名称是否重复
		if(vo!=null){
			throw new ServiceException(ShopExpCodeConstant.SHOP_NAME_EXISTS, true);
		}
		String platformAccount = shop.getPlatformAccount();
		//查询店铺账号是否重复
		vo = shopMapper.getShopByPlatformAccount(platformAccount, null, enterpriseId);
		if(vo!=null){
			throw new ServiceException(ShopExpCodeConstant.PLATFORM_ACCOUNT_STORE_EXIST, true);
		}
		shop.setEnterpriseId(enterpriseId);
		CurrentUtil.setBaseBeanByInsert(shop);
		short state=0;
		short isUse = 0;
		shop.setState(state);//未授权
		shop.setIsUse(isUse);//未启用
		int result = shopMapper.insertSelective(shop);
		if(result > 0){
			if(result > 0){
				if(0!=shop.getPlatformType()){
					ShopVo shopVo = new ShopVo();
					MyBeanUtils.copyProperties(shopVo, shop);
					OauthToken.addShop(shopVo);
				}
			}
		}
		return this.insertShopUsers(shop.getShopUsers(), shop.getShopId());
	}
	
	
	private int insertShopUsers(List<TErpShopUser> shopUsers,Long shopId){
		if(shopUsers!=null && shopUsers.size()>0  && shopId!=null){
			UserCacheBean userCacheBean = CurrentUtil.getCurrentUser();
			long enterpriseId = userCacheBean.getEnterpriseId();
			for(TErpShopUser sh:shopUsers){
				CurrentUtil.setBaseBeanByInsert(sh);
				sh.setEnterpriseId(enterpriseId);
				sh.setShopId(shopId);
				short state = 1;
				sh.setState(state);
			}
			return shopUserMapper.insertList(shopUsers);
		}
		return 1;
	}

	@Override
	public int deleteShop(Long shopId) throws ServiceException {
		TErpShopVo shop = new TErpShopVo();
		shop.setShopId(shopId);
		return 0;
	}

	@Override
	public int enableShop(Long shopId) throws ServiceException {
		TErpShop sh = shopMapper.selectByPrimaryKey(shopId);
		if( sh.getState() != 1 || (  sh.getPlatformType() != 0  && sh.getAliid()==null && sh.getMerchantUserId()==null  )  ){
			throw new ServiceException(ShopExpCodeConstant.TOKEN_AUTHORIZATION_SUCCESS_TO_ENABLE, true);
		}
		String resourceOwnerId = sh.getAliid()!=null?sh.getAliid():sh.getMerchantUserId();
		TErpShopVo erpShopVo =  0==sh.getPlatformType() ? null : shopMapper.getShopByResourceOwnerId(resourceOwnerId, sh.getPlatformType(), null);
		if( erpShopVo!=null && !erpShopVo.getShopId().equals( shopId ) ){
			String msg = "授权失败\n系统中已存在此平台帐号"+erpShopVo.getResourceOwner()+"的启用店铺，如需启用请先停用正在运营的店铺或者联系客服人员协助处理";
			throw new ServiceException(ShopExpCodeConstant.PLATFORM_ACCOUNT_STORE_EXIST, msg, true);
		}
		TErpShopVo shop = new TErpShopVo();
		shop.setShopId(shopId);
		short isUse = 1;
		shop.setIsUse(isUse);
		int result = update(shop);
		if(result > 0){
			ShopVo shopVo= OauthToken.getShop(shopId);
			if(shopVo != null){
				sh.setIsUse(isUse);
				MyBeanUtils.copyProperties(shopVo, sh);
				OauthToken.addShop(shopVo);
			}
			final Configuration config = Configuration.getInstance();
			if("true".equals(config.getStartTaskFlag())){//开始线程
				//获取平台类型
				Integer platType = shopVo.getPlatformType();
				if(platType == 1){//Aliexpress
					if(StringUtils.isNotBlank(shopVo.getAccessToken())){
						//设置Aliexpress授权token
						OauthToken.setOauthToken(shopVo.getShopId(), shopVo.getAccessToken(), shopVo.getTokenCreateDate());
						//执行线程定时任务
						AliThreadSyncTask task = AliThreadSyncTask.getInstance();
						task.init(sh);
					}
				}else if(platType == 2){//Wish
					if(StringUtils.isNotBlank(shopVo.getAccessToken())){
						//设置Wish授权token
						OauthToken.setWishToken(shopVo.getShopId(), shopVo.getAccessToken(), shopVo.getTokenCreateDate());
						//执行线程定时任务
						WishThreadSyncTask task = WishThreadSyncTask.getInstance();
						task.init(sh);
					}
				}
			}
		}
		return result;
	}

	@Override
	public int disableShop(Long shopId) throws ServiceException {
		TErpShopVo shop = new TErpShopVo();
		shop.setShopId(shopId);
		short isUse = 0;
		shop.setIsUse(isUse);
		int result = update(shop);
		if(result > 0){
			ShopVo shopVo= OauthToken.getShop(shopId);
			if(shopVo != null){
				shopVo.setIsUse(isUse);
				OauthToken.addShop(shopVo);
			}
			//获取执行任务线程
			ScheduledFuture<?> future = OauthToken.getScheduleFuture(String.valueOf(shopId));
			if(future != null){
				future.cancel(true);//取消线程执行
			}
		}
		return result;
	}

	@Override
	public int update(TErpShopVo shop) throws ServiceException {
		UserCacheBean userCacheBean = CurrentUtil.getCurrentUser();
		long enterpriseId = userCacheBean.getEnterpriseId();
		//查询店铺名称是否重复
		if(StringUtil.isNotEmpty(shop.getShopName())){
			TErpShopVo vo = shopMapper.getShopByShopName(shop.getShopName(), enterpriseId);
			if( vo!=null && !shop.getShopId().equals(vo.getShopId()) ){
				throw new ServiceException(ShopExpCodeConstant.SHOP_NAME_EXISTS, true);
			}
		}
		
		String platformAccount = shop.getPlatformAccount();
		//查询店铺账号是否重复
		if(StringUtil.isNotEmpty(platformAccount)){
			TErpShopVo vo = shopMapper.getShopByPlatformAccount(platformAccount, null, enterpriseId);
			if(vo!=null && !shop.getShopId().equals(vo.getShopId())){
				throw new ServiceException(ShopExpCodeConstant.PLATFORM_ACCOUNT_STORE_EXIST, true);
			}
		}
		
		CurrentUtil.setBaseBeanByModify(shop);
		int rs = shopMapper.updateByPrimaryKeySelective(shop);
		if( shop.getUpdateStore()!=null && shop.getUpdateStore()==1 ){
			shopUserMapper.deleteByShopId(shop.getShopId());
			return this.insertShopUsers(shop.getShopUsers(), shop.getShopId());
		}
		return rs;
	}

	@Override
	public TErpShopVo getShopByShopName(String shopName)
			throws ServiceException {
		UserCacheBean userCacheBean = CurrentUtil.getCurrentUser();
		long enterpriseId = userCacheBean.getEnterpriseId();
		return shopMapper.getShopByShopName(shopName, enterpriseId);
	}

	@Override
	public TErpShopVo getShopById(Long shopId) throws ServiceException {
		UserCacheBean userCacheBean = CurrentUtil.getCurrentUser();
		long enterpriseId = userCacheBean.getEnterpriseId();
		TErpShopVo rs = shopMapper.getShopById(shopId, enterpriseId);
		List<TErpShopUser> shopUsers = shopUserMapper.getUserShopsByShopId(shopId, enterpriseId);
		if(rs!=null) rs.setShopUsers(shopUsers);
		return rs;
	}

	@Override
	public int authorization(TErpShopVo shop) throws ServiceException {
		int result = 0;
		Integer platformType = shop.getPlatformType();
		UserCacheBean userCacheBean = CurrentUtil.getCurrentUser();
		long enterpriseId = userCacheBean.getEnterpriseId();
		String resourceOwnerId = null;
		if(1==platformType && 0!=shop.getPlatformType() ){//阿狸
			resourceOwnerId = shop.getAliid();
		}else if(2==platformType && 0!=shop.getPlatformType()){//阿狸
			resourceOwnerId = shop.getMerchantUserId();
		}   
		TErpShopVo erpShopVo =  0==platformType ? null : shopMapper.getShopByResourceOwnerId(resourceOwnerId, platformType, null);
		if( erpShopVo!=null && !erpShopVo.getShopId().equals(shop.getShopId()) ){
			String msg = "授权失败\n系统中已存在此平台帐号"+erpShopVo.getResourceOwner()+"的启用店铺，如需启用请先停用正在运营的店铺或者联系客服人员协助处理";
			throw new ServiceException(ShopExpCodeConstant.PLATFORM_ACCOUNT_STORE_EXIST, msg, true);
		}
		shop.setTokenCreateDate(new Date());
		short state = 1;
		shop.setState(state);
		short isUse = 1;
		shop.setIsUse(isUse);
		result = shopMapper.updateByPrimaryKeySelective(shop);
		if(result > 0){
			if(0!=shop.getPlatformType()){
				TErpShop tempShop = shopMapper.selectByPrimaryKey(shop.getShopId());
				ShopVo shopVo = OauthToken.getShop(shop.getShopId());
				if(shopVo != null){
					MyBeanUtils.copyProperties(shopVo, tempShop);
					OauthToken.addShop(shopVo);
				}
				final Configuration config = Configuration.getInstance();
				if("true".equals(config.getStartTaskFlag())){//开始线程
					if(tempShop.getPlatformType() == 1 && StringUtils.isNotBlank(tempShop.getAccessToken())){//Aliexpress
						//设置Aliexpress授权token
						OauthToken.setOauthToken(tempShop.getShopId(), tempShop.getAccessToken(), tempShop.getTokenCreateDate());
						//执行线程定时任务
						AliThreadSyncTask task = AliThreadSyncTask.getInstance();
						task.init(tempShop);
					}else if(tempShop.getPlatformType() == 2 && StringUtils.isNotBlank(tempShop.getAccessToken())){//Wish
						//设置Wish授权token
						OauthToken.setWishToken(tempShop.getShopId(), tempShop.getAccessToken(), tempShop.getTokenCreateDate());
						//执行线程定时任务
						WishThreadSyncTask task = WishThreadSyncTask.getInstance();
						task.init(tempShop);
					}
				}
			}
		}
		return result;
	}

	@Override
	public int reNameShop(Long shopId, String newShopName)
			throws ServiceException {
		if(StringUtil.isEmpty(newShopName)){
			throw new ServiceException(ShopExpCodeConstant.SHOP_NAME_IS_EMPTY, true);
		}
		/*TErpShopVo shop = getShopByShopName(newShopName);
		if( shop!=null && !shop.getShopId().equals(shopId)){
			throw new ServiceException(ShopExpCodeConstant.SHOP_NAME_EXISTS, "系统中已存在此平台帐号的启用店铺，如需启用请先停用正在运营的店铺或者联系马帮客服人员协助处理", true);
		}*/
		TErpShopVo shopVo = new TErpShopVo();
		shopVo.setShopName(newShopName);
		shopVo.setShopId(shopId);
		return this.update(shopVo);
	}

    /**
     * 获取所有已启用、授权的店铺
     * @param enterpriseId
     * @return
     * @throws ServiceException
     */
	@Override
    public List<TErpShop> getAllAuthShopList(){
		long enterpriseId = 0L;
		//获取当前用户信息
		UserCacheBean userCacheBean = CurrentUtil.getCurrentUser();
		if(userCacheBean != null){
			//获取企业信息
			enterpriseId = userCacheBean.getEnterpriseId();
		}
		return shopMapper.getAllAuthShopList(enterpriseId);
	}

	/**
	 * 修改店铺信息
	 */
	@Override
	public int updateShopById(TErpShop shop) throws ServiceException {
		return shopMapper.updateByPrimaryKeySelective(shop);
	}

	/**
	 * 根据店铺id查询店铺信息
	 */
	@Override
	public List<TErpShop> queryShopListById(String ids) throws ServiceException {
		List<Long> idList = new ArrayList<Long>();
		if(ids==null || "".equals(ids)){
			return null;
		}
		
		for(String id : ids.split(",")){
			idList.add(Long.parseLong(id));
		}
		return shopMapper.queryShopListById(idList);
	}

	/**
	 * 获取该企业所有的店铺
	 * @param enterpriseId
	 * @return
	 * @throws ServiceException
	 */
	@Override
	public List<Map<String, Object>> getAllShopsByEnterpriseId(Short isUse,Integer platformType) throws ServiceException {
		//返回结果集
		List<Map<String, Object>> result = null;
		//获取当前登录用户信息
		UserCacheBean userCacheBean = CurrentUtil.getCurrentUser();
		//获取企业信息
		long enterpriseId = userCacheBean.getEnterpriseId();
		//获取当前用户id
		long userId = userCacheBean.getUserId();
		//是否是管理员
		Short isAdmin = userCacheBean.getIsAdmin();
		Short isManager = userCacheBean.getIsManager();
		//数据库操作
		result = shopMapper.getAllShopsByEnterpriseId(userId,enterpriseId,isUse,platformType,isAdmin,isManager);
		//返回结果
		return result;
	}

	/**
	 * 构建树
	 * @return
	 * @throws ServiceException
	 */
	@Override
	public List<Map<String, Object>> loadShopTreeByPlatformType(Short isUse) throws ServiceException {
		//获取当前登录用户信息
		UserCacheBean userCacheBean = CurrentUtil.getCurrentUser();
		//获取企业信息
		long enterpriseId = userCacheBean.getEnterpriseId();
		//获取当前用户id
		long userId = userCacheBean.getUserId();
		//是否是管理员
		Short isAdmin = userCacheBean.getIsAdmin();
		Short isManager = userCacheBean.getIsManager();
		//数据库操作
		List<Map<String, Object>> result = shopMapper.getAllShopsByEnterpriseId(userId,enterpriseId,isUse,null,isAdmin,isManager);
		//构造一个树形结构的Map
		List<Map<String,Object>> mList = new ArrayList<Map<String,Object>>();
		Map<String,Object> tempMap = new HashMap<String, Object>();
		Map<String,Object> map = null;
		map = new HashMap<String, Object>();
		map.put("platform_type", "2");
		mList.add(map);
		map = new HashMap<String, Object>();
		map.put("platform_type", "1");
		mList.add(map);
		map = new HashMap<String, Object>();
		map.put("platform_type", "0");
		mList.add(map);
		for(Map<String, Object> item : result){
			String platformType = item.get("platform_type").toString();
			List<Map<String, Object>> subList = tempMap.get(platformType) != null ? (List<Map<String, Object>>) tempMap.get(platformType) : new ArrayList<Map<String, Object>>();
			subList.add(item);
			tempMap.put(platformType, subList);
		}
		
		if(!mList.isEmpty()){
			for(Map<String, Object> item : mList){
				String platformType = item.get("platform_type").toString();
				item.put("childrens", tempMap.get(platformType));
			}
		}
		return mList;
	}
}
