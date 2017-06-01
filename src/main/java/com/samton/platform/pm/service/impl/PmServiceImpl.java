package com.samton.platform.pm.service.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Service;

import com.samton.erp.api.shop.bean.entity.TErpShopUser;
import com.samton.erp.api.shop.dao.TErpShopUserMapper;
import com.samton.erp.api.warehouse.bean.entity.TErpWarehouseUser;
import com.samton.erp.api.warehouse.dao.TErpWarehouseUserMapper;
import com.samton.platform.common.bean.param.JqParamBean;
import com.samton.platform.common.util.ListUtil;
import com.samton.platform.framework.bean.UserCacheBean;
import com.samton.platform.framework.exception.ServiceException;
import com.samton.platform.framework.mybatis.pagination.PageContext;
import com.samton.platform.framework.mybatis.pagination.Pagination;
import com.samton.platform.framework.util.CurrentUtil;
import com.samton.platform.framework.util.MD5Util;
import com.samton.platform.pm.bean.entity.TPlatformPmMenu;
import com.samton.platform.pm.bean.entity.TPlatformPmRole;
import com.samton.platform.pm.bean.entity.TPlatformPmRoleMenu;
import com.samton.platform.pm.bean.entity.TPlatformPmRoleUser;
import com.samton.platform.pm.bean.entity.TPlatformPmUser;
import com.samton.platform.pm.constant.PmExpCodeConstant;
import com.samton.platform.pm.constant.PmStateConstant;
import com.samton.platform.pm.dao.TPlatformPmMenuMapper;
import com.samton.platform.pm.dao.TPlatformPmRoleMapper;
import com.samton.platform.pm.dao.TPlatformPmRoleMenuMapper;
import com.samton.platform.pm.dao.TPlatformPmRoleUserMapper;
import com.samton.platform.pm.dao.TPlatformPmUserMapper;
import com.samton.platform.pm.service.IPmService;
import com.samton.platform.pm.util.RegisterUtil;

@Service("pmService")
public class PmServiceImpl implements IPmService {

	@Resource
	private TPlatformPmMenuMapper pmMenuMapper;
	@Resource
	private TPlatformPmRoleMapper pmRoleMapper;
	@Resource
	private TPlatformPmUserMapper pmUserMapper;
	@Resource
	private TPlatformPmRoleMenuMapper pmRoleMenuMapper;
	@Resource
	private TPlatformPmRoleUserMapper pmRoleUserMapper;

	/**
	 * 附加权限---店铺、仓库
	 */
	@Resource
	private TErpShopUserMapper erpShopUserMapper;
	@Resource
	private TErpWarehouseUserMapper erpWarehouseUserMapper;

	@Override
	public List<TPlatformPmMenu> getMenusBySystemId(long systemId, short state) {
		return pmMenuMapper.getMenusBySystemId(systemId, state);
	}

	@Override
	public boolean disableMenus(List<Long> menuIds, boolean isDisable)
			throws ServiceException {
		if (ListUtil.isEmpty(menuIds))
			return false;
		List<TPlatformPmMenu> pmMenus = new ArrayList<TPlatformPmMenu>();
		for (Long menuId : menuIds) {
			TPlatformPmMenu menu = pmMenuMapper.selectByPrimaryKey(menuId);
			if (isDisable) {
				if (!menu.getMenuType().equals(2)
						&& pmMenuMapper.getChildrenExistByParentId(menuId,
								PmStateConstant.ADD) != null) {
					throw new ServiceException(
							PmExpCodeConstant.PM_MENU_HAS_CHILDREN_DISABLE_ERROR);
				}
				menu.setState(PmStateConstant.DISABLE);
			} else {
				menu.setState(PmStateConstant.ADD);
			}
			CurrentUtil.setBaseBeanByModify(menu);
			pmMenus.add(menu);
		}
		pmMenuMapper.batchUpdateByPrimaryKey(pmMenus);
		return true;
	}

	@Override
	public List<TPlatformPmMenu> getUserMenusByUserId(long userId, long parentId) {
		return pmMenuMapper.getUserMenusByParentId(
				CurrentUtil.getCurrentSystemId(), parentId, userId);
	}

	@Override
	public List<TPlatformPmMenu> getMenusByMenuTypes(List<Short> menuTypes,
			List<Short> states) {
		if (ListUtil.isEmpty(menuTypes))
			return null;
		return pmMenuMapper.getMenusByMenuTypes(
				CurrentUtil.getCurrentSystemId(), PmStateConstant.ADD,
				menuTypes);
	}

	@Override
	public long addMenu(TPlatformPmMenu menu) throws ServiceException {
		if (isMenuCodeExist(menu.getMenuCode(), null)) {
			throw new ServiceException(
					PmExpCodeConstant.PM_MENUCODE_REPEAT_ERROR);
		}
		menu.setSystemId(CurrentUtil.getCurrentSystemId());
		menu.setState(PmStateConstant.ADD);
		menu.setIsDefault((short) 0);
		Integer sortby = pmMenuMapper.getMaxSortByParentId(menu.getParentId());
		if (sortby == null) {
			sortby = 0;
		}
		menu.setSortby(sortby + 1);
		CurrentUtil.setBaseBeanByInsert(menu);
		pmMenuMapper.insertSelective(menu);
		return menu.getMenuId();
	}

	@Override
	public boolean updateMenu(TPlatformPmMenu menu) throws ServiceException {
		if (isMenuCodeExist(menu.getMenuCode(), menu.getMenuId())) {
			throw new ServiceException(
					PmExpCodeConstant.PM_MENUCODE_REPEAT_ERROR);
		}
		CurrentUtil.setBaseBeanByModify(menu);
		return pmMenuMapper.updateByPrimaryKeySelective(menu) > 0;
	}

	@Override
	public boolean delMenus(List<Long> menuIds) throws ServiceException {
		if (ListUtil.isEmpty(menuIds))
			return false;
		List<TPlatformPmMenu> pmMenus = new ArrayList<TPlatformPmMenu>();
		for (Long menuId : menuIds) {
			TPlatformPmMenu menu = pmMenuMapper.selectByPrimaryKey(menuId);
			if (!menu.getMenuType().equals(2)
					&& pmMenuMapper.getChildrenExistByParentId(menuId,
							PmStateConstant.ADD) != null) {
				throw new ServiceException(
						PmExpCodeConstant.PM_MENU_HAS_CHILDREN_DEL_ERROR);
			}
			menu.setState(PmStateConstant.DEL);
			CurrentUtil.setBaseBeanByModify(menu);
			pmMenus.add(menu);
		}
		return pmMenuMapper.batchUpdateByPrimaryKey(pmMenus) > 0;
	}

	@Override
	public long addRole(TPlatformPmRole role) {
		role.setSystemId(CurrentUtil.getCurrentSystemId());
		role.setEnterpriseId(CurrentUtil.getCurrentUser().getEnterpriseId());
		role.setState(PmStateConstant.ADD);
		CurrentUtil.setBaseBeanByInsert(role);
		pmRoleMapper.insertSelective(role);
		//设置权限
		if(role.getMenuIds() != null){
			List<Long> menuIdList = new ArrayList<Long>();
			for (Long menuId : role.getMenuIds()) {
				menuIdList.add(menuId);
			}
			setRoleMenus(role.getRoleId(), menuIdList);
		}
		// role.setSortby(role.getRoleId().intValue());
		// pmRoleMapper.updateByPrimaryKeySelective(role);
		return role.getRoleId();
	}

	@Override
	public boolean updateRole(TPlatformPmRole role) {
		CurrentUtil.setBaseBeanByModify(role);
		//设置权限
		if(role.getMenuIds() != null){
			List<Long> menuIdList = new ArrayList<Long>();
			for (Long menuId : role.getMenuIds()) {
				menuIdList.add(menuId);
			}
			setRoleMenus(role.getRoleId(), menuIdList);
		}
		return pmRoleMapper.updateByPrimaryKeySelective(role) > 0;
	}

	@Override
	public boolean delRole(long roleId) {
		TPlatformPmRole role = pmRoleMapper.selectByPrimaryKey(roleId,CurrentUtil.getCurrentUser().getEnterpriseId());
		role.setState(PmStateConstant.DEL);
		CurrentUtil.setBaseBeanByModify(role);
		return pmRoleMapper.updateByPrimaryKeySelective(role) > 0;
	}

	@Override
	public List<Map> getRolesBySystemId(Long userId) {
		return pmRoleMapper.getRolesBySystemId(userId,CurrentUtil.getCurrentUser().getEnterpriseId());
	}

	@Override
	public List<Map> getRoleMenuIds(long roleId, short state) {
		return pmRoleMenuMapper.getRoleMenuIds(roleId, state,CurrentUtil.getCurrentUser().getEnterpriseId());
	}

	@Override
	public boolean setRoleMenus(long roleId, List<Long> menuIds) {
		List<TPlatformPmRoleMenu> roleMenus = pmRoleMenuMapper
				.getRoleMenus(roleId);
		for (TPlatformPmRoleMenu roleMenu : roleMenus) {
			CurrentUtil.setBaseBeanByModify(roleMenu);
			if (menuIds.contains(roleMenu.getMenuId())) {
				if (!roleMenu.getState().equals(PmStateConstant.ADD)) {
					roleMenu.setState(PmStateConstant.ADD);
				}
				menuIds.remove(roleMenu.getMenuId());
			} else {
				roleMenu.setState(PmStateConstant.DEL);
			}
		}
		List<TPlatformPmRoleMenu> addRoleMenus = new ArrayList<TPlatformPmRoleMenu>();
		TPlatformPmRoleMenu pmRoleMenu = null;
		for (Long menuId : menuIds) {
			pmRoleMenu = new TPlatformPmRoleMenu();
			pmRoleMenu.setRoleId(roleId);
			pmRoleMenu.setMenuId(menuId);
			pmRoleMenu.setSystemId(CurrentUtil.getCurrentSystemId());
			pmRoleMenu.setEnterpriseId(CurrentUtil.getCurrentUser().getEnterpriseId());
			pmRoleMenu.setState(PmStateConstant.ADD);
			CurrentUtil.setBaseBeanByInsert(pmRoleMenu);
			addRoleMenus.add(pmRoleMenu);
		}
		if (roleMenus != null && roleMenus.size() > 0) {
			pmRoleMenuMapper.batchUpdateByPrimaryKey(roleMenus);
		}
		if (addRoleMenus != null && addRoleMenus.size() > 0) {
			pmRoleMenuMapper.batchInsert(addRoleMenus);
		}
		return true;
	}

	@Override
	public Pagination<TPlatformPmUser> queryUsers(JqParamBean paramBean) {
		Pagination<TPlatformPmUser> pagination = PageContext.initialize(
				paramBean.getPage(), paramBean.getRows());
		List<TPlatformPmUser> pmUsers = pmUserMapper.queryUsers(paramBean,
				pagination.getRowBounds());
		pagination.setData(pmUsers);
		return pagination;
	}

	@Override
	public TPlatformPmUser getUserById(long userId) {
		return pmUserMapper.selectByPrimaryKey(userId,CurrentUtil.getCurrentUser().getEnterpriseId());
	}

	@Override
	public boolean delUsers(List<Long> userIds) throws ServiceException{
		if (userIds == null || userIds.size() == 0)
			return false;
		List<TPlatformPmUser> pmUsers = new ArrayList<TPlatformPmUser>();
		for (Long userId : userIds) {
			TPlatformPmUser pmUser = pmUserMapper.selectByPrimaryKey(userId,CurrentUtil.getCurrentUser().getEnterpriseId());
			if(pmUser.getIsAdmin() == 1){
				throw new ServiceException(
						PmExpCodeConstant.PM_MANAGER_USER_DEL_DEL_ERROR);
			}
			if(pmUser.getIsManager() == 1){
				throw new ServiceException(
						PmExpCodeConstant.PM_MANAGER_USER_DEL_DEL_ERROR);
			}
			pmUser.setState(PmStateConstant.DEL);
			CurrentUtil.setBaseBeanByModify(pmUser);
			pmUsers.add(pmUser);
		}
		return pmUserMapper.batchUpdateByPrimaryKey(pmUsers) > 0;
	}

	@Override
	public long addUser(TPlatformPmUser user, Map<String, Object> authInfo)
			throws ServiceException {
		short loginFlag = 0;
		if (RegisterUtil.isEmail(user.getLoginName())) {
			loginFlag = 1;
		} else if (RegisterUtil.isMobileNo(user.getLoginName())) {
			loginFlag = 2;
		}
		if (loginFlag == 0) {
			throw new ServiceException(
					PmExpCodeConstant.PM_LOGINNAME_FORMAT_ERROR);
		}
		//查询登录名是否重复
		Long userId = pmUserMapper.getUserIdByLoginName(user.getLoginName());
		if(userId != null){
			throw new ServiceException(
					PmExpCodeConstant.PM_LOGINNAME_EXIST_ERROR);
		}
		user.setLoginFlag(loginFlag);
		user.setSystemId(CurrentUtil.getCurrentSystemId());
		user.setEnterpriseId(CurrentUtil.getCurrentUser().getEnterpriseId());
		user.setState(PmStateConstant.ADD);
		user.setPwd(MD5Util.getMD5String(user.getPwd()));
		CurrentUtil.setBaseBeanByInsert(user);
		pmUserMapper.insertSelective(user);
		
		//设置权限-----------------------------
		Long[] roles = user.getRoles();
		if(roles != null){
			List<Long> roleIdList = new ArrayList<Long>();
			for (Long roleId : roles) {
				roleIdList.add(roleId);
			}
			// 设置角色权限
			setUserRoles(user.getUserId(), roleIdList);
		}
		Long[] shopIds = user.getShopIds();
		if(shopIds != null){
			List<Long> shopIdList = new ArrayList<Long>();
			for (Long shopId : shopIds) {
				shopIdList.add(shopId);
			}
			// 设置店铺权限
			setUserShops(user.getUserId(), shopIdList);
		}
		Long[] whouseIds = user.getWhouseIds();
		if(whouseIds != null){
			List<Long> whouseIdList = new ArrayList<Long>();
			for (Long whouseId : whouseIds) {
				whouseIdList.add(whouseId);
			}
			// 设置仓库权限
			setUserWhouse(user.getUserId(), whouseIdList);
		}
		return user.getUserId();
	}

	@Override
	public boolean updateUser(TPlatformPmUser user) {
		if (StringUtils.isNotEmpty(user.getPwd())) {
			user.setPwd(null);
		}
		CurrentUtil.setBaseBeanByModify(user);
		//设置权限-----------------------------
		Long[] roles = user.getRoles();
		List<Long> roleIdList = new ArrayList<Long>();
		if(roles != null){
			for (Long roleId : roles) {
				roleIdList.add(roleId);
			}
		}
		// 设置角色权限
		setUserRoles(user.getUserId(), roleIdList);
		Long[] shopIds = user.getShopIds();
		List<Long> shopIdList = new ArrayList<Long>();
		if(shopIds != null){
			for (Long shopId : shopIds) {
				shopIdList.add(shopId);
			}
		}
		// 设置店铺权限
		setUserShops(user.getUserId(), shopIdList);
		Long[] whouseIds = user.getWhouseIds();
		List<Long> whouseIdList = new ArrayList<Long>();
		if(whouseIds != null){
			for (Long whouseId : whouseIds) {
				whouseIdList.add(whouseId);
			}
		}
		// 设置仓库权限
		setUserWhouse(user.getUserId(), whouseIdList);
		user.setEnterpriseId(CurrentUtil.getCurrentUser().getEnterpriseId());
		return pmUserMapper.updateByPrimaryKeySelective(user) > 0;
	}

	@Override
	public boolean setUserRoles(long userId, List<Long> roleIds) {
		List<TPlatformPmRoleUser> roleUsers = pmRoleUserMapper
				.getRoleUsers(userId,CurrentUtil.getCurrentUser().getEnterpriseId());
		for (TPlatformPmRoleUser roleUser : roleUsers) {
			CurrentUtil.setBaseBeanByModify(roleUser);
			if (roleIds.contains(roleUser.getRoleId())) {
				if (!roleUser.getState().equals(PmStateConstant.ADD)) {
					roleUser.setState(PmStateConstant.ADD);
				}
				roleIds.remove(roleUser.getRoleId());
			} else {
				roleUser.setState(PmStateConstant.DEL);
			}
		}
		List<TPlatformPmRoleUser> addRoleUsers = new ArrayList<TPlatformPmRoleUser>();
		TPlatformPmRoleUser pmRoleUser = null;
		for (Long roleId : roleIds) {
			pmRoleUser = new TPlatformPmRoleUser();
			pmRoleUser.setRoleId(roleId);
			pmRoleUser.setUserId(userId);
			pmRoleUser.setSystemId(CurrentUtil.getCurrentSystemId());
			pmRoleUser.setEnterpriseId(CurrentUtil.getCurrentUser().getEnterpriseId());
			pmRoleUser.setState(PmStateConstant.ADD);
			CurrentUtil.setBaseBeanByInsert(pmRoleUser);
			addRoleUsers.add(pmRoleUser);
		}
		if (ListUtil.isNotEmpty(roleUsers)) {
			pmRoleUserMapper.batchUpdateByPrimaryKey(roleUsers);
		}
		if (ListUtil.isNotEmpty(addRoleUsers)) {
			pmRoleUserMapper.batchInsert(addRoleUsers);
		}
		return true;
	}

	public boolean setUserShops(long userId, List<Long> shopIds) {
		List<TErpShopUser> shopUsers = erpShopUserMapper
				.getUserShops(userId,CurrentUtil.getCurrentUser().getEnterpriseId());
		for (TErpShopUser shopUser : shopUsers) {
			CurrentUtil.setBaseBeanByModify(shopUser);
			if (shopIds.contains(shopUser.getShopId())) {
				if (!shopUser.getState().equals(PmStateConstant.ADD)) {
					shopUser.setState(PmStateConstant.ADD);
				}
				shopIds.remove(shopUser.getShopId());
			} else {
				shopUser.setState(PmStateConstant.DEL);
			}
		}
		List<TErpShopUser> addShopUsers = new ArrayList<TErpShopUser>();
		TErpShopUser shopUser = null;
		for (Long shopId : shopIds) {
			shopUser = new TErpShopUser();
			shopUser.setShopId(shopId);
			shopUser.setUserId(userId);
			shopUser.setEnterpriseId(CurrentUtil.getCurrentUser()
					.getEnterpriseId());
			shopUser.setState(PmStateConstant.ADD);
			CurrentUtil.setBaseBeanByInsert(shopUser);
			addShopUsers.add(shopUser);
		}
		 if(ListUtil.isNotEmpty(shopUsers)){
			 erpShopUserMapper.batchUpdateByPrimaryKey(shopUsers);
		 }
		if (ListUtil.isNotEmpty(addShopUsers)) {
			erpShopUserMapper.batchInsertShop(addShopUsers);
		}
		return true;
	}

	public boolean setUserWhouse(long userId, List<Long> houseIds) {
		List<TErpWarehouseUser> whUsers = erpWarehouseUserMapper
				.getUserWhouses(userId,CurrentUtil.getCurrentUser().getEnterpriseId());
		for (TErpWarehouseUser whUser : whUsers) {
			CurrentUtil.setBaseBeanByModify(whUser);
			if (houseIds.contains(whUser.getWhouseId())) {
				if (!whUser.getState().equals(PmStateConstant.ADD)) {
					whUser.setState(PmStateConstant.ADD);
				}
				houseIds.remove(whUser.getWhouseId());
			} else {
				whUser.setState(PmStateConstant.DEL);
			}
		}
		List<TErpWarehouseUser> addWhUsers = new ArrayList<TErpWarehouseUser>();
		TErpWarehouseUser whUser = null;
		for (Long whId : houseIds) {
			whUser = new TErpWarehouseUser();
			whUser.setWhouseId(whId);
			whUser.setUserId(userId);
			whUser.setEnterpriseId(CurrentUtil.getCurrentUser()
					.getEnterpriseId());
			whUser.setState(PmStateConstant.ADD);
			CurrentUtil.setBaseBeanByInsert(whUser);
			addWhUsers.add(whUser);
		}
		if (ListUtil.isNotEmpty(whUsers)) {
			erpWarehouseUserMapper.batchUpdateByPrimaryKey(whUsers);
		}
		if (ListUtil.isNotEmpty(addWhUsers)) {
			erpWarehouseUserMapper.batchInsertWareHouse(addWhUsers);
		}
		return true;
	}

	@Override
	public List<Long> getUserRoleIds(long userId, short state) {
		return pmRoleUserMapper.getUserRoleIds(userId, state);
	}

	@Override
	public TPlatformPmUser loginUser(TPlatformPmUser pmUser)
			throws ServiceException {
		pmUser.setPwd(MD5Util.getMD5String(pmUser.getPwd()));
		pmUser = pmUserMapper.getUserByLoginNamePwd(pmUser);
		if (pmUser == null) {
			throw new ServiceException(PmExpCodeConstant.PM_LOGINNAME_PWD_ERROR);
		}
		pmUser.setLoginFlag((short) 1);
		pmUser.setLastLoginTime(new Date());
		Integer loginCount = pmUser.getLoginCount();
		if (loginCount == null)
			loginCount = 0;
		pmUser.setLoginCount(loginCount + 1);
		pmUserMapper.updateByPrimaryKey(pmUser);
		return pmUser;
	}

	@Override
	public TPlatformPmUser loginSystemUser(TPlatformPmUser pmUser)
			throws ServiceException {
		pmUser.setPwd(MD5Util.getMD5String(pmUser.getPwd()));
		pmUser = pmUserMapper.getUserByLoginNamePwd(pmUser);
		if (pmUser == null) {
			throw new ServiceException(PmExpCodeConstant.PM_LOGINNAME_PWD_ERROR);
		}
		pmUser.setLoginFlag((short) 1);
		pmUser.setLastLoginTime(new Date());
		Integer loginCount = pmUser.getLoginCount();
		if (loginCount == null)
			loginCount = 0;
		pmUser.setLoginCount(loginCount + 1);
		pmUserMapper.updateByPrimaryKey(pmUser);
		return pmUser;
	}

	public List<TPlatformPmMenu> getUserMenusByUserId(TPlatformPmUser user,
			long parentId) {
		if (user.getIsAdmin() == 1) {
			return pmMenuMapper.getAllMenusByAdmin(1);
		}else if(user.getIsManager() == 1){
			return pmMenuMapper.getAllMenusByAdmin(0);
		}
		return pmMenuMapper.getUserMenusByParentId(
				CurrentUtil.getCurrentSystemId(), parentId, user.getUserId());
	}

	@Override
	public Pagination<TPlatformPmMenu> getFuncMenusByParentId(
			JqParamBean paramBean) {
		TPlatformPmMenu pmMenu = (TPlatformPmMenu) paramBean.getSearch();
		pmMenu.setSystemId(CurrentUtil.getCurrentSystemId());
		pmMenu.setState(PmStateConstant.ADD);
		pmMenu.setMenuType((short) 2);
		Pagination<TPlatformPmMenu> pagination = PageContext.initialize(
				paramBean.getPage(), paramBean.getRows());
		List<TPlatformPmMenu> pmMenus = pmMenuMapper.getMenusByParentId(
				paramBean, pagination.getRowBounds());
		pagination.setData(pmMenus);
		return pagination;
	}

	@Override
	public boolean isMenuCodeExist(String menuCode, Long exclusiveMenuId) {
		return pmMenuMapper.existByMenuCode(menuCode, exclusiveMenuId) != null;
	}

	private boolean changeMenuSortby(TPlatformPmMenu menu, boolean isUp) {
		if (menu == null)
			return false;
		TPlatformPmMenu sortbyMenu = pmMenuMapper.getSortbyMenuByChange(
				menu.getParentId(), menu.getSortby(), isUp);
		if (sortbyMenu == null)
			return false;
		int tmpSortby = menu.getSortby();
		menu.setSortby(sortbyMenu.getSortby());
		sortbyMenu.setSortby(tmpSortby);
		List<TPlatformPmMenu> pmMenus = new ArrayList<TPlatformPmMenu>();
		pmMenus.add(menu);
		pmMenus.add(sortbyMenu);
		pmMenuMapper.batchUpdateByPrimaryKey(pmMenus);
		return true;
	}

	@Override
	public boolean changeMenusSortby(List<Long> menuIds, boolean isUp) {
		if (ListUtil.isEmpty(menuIds))
			return false;
		TPlatformPmMenu menu = null;
		if (isUp) {
			for (int i = 0, len = menuIds.size(); i < len; i++) {
				menu = pmMenuMapper.selectByPrimaryKey(menuIds.get(i));
				if (!changeMenuSortby(menu, isUp)) {
					if (i == 0)
						return false;
					continue;
				}
			}
		} else {
			for (int i = menuIds.size(); i > 0; i--) {
				menu = pmMenuMapper.selectByPrimaryKey(menuIds.get(i - 1));
				if (!changeMenuSortby(menu, isUp)) {
					if (i == 0)
						return false;
					continue;
				}
			}
		}
		return true;
	}

	@Override
	public Pagination<TPlatformPmRole> queryRoles(JqParamBean paramBean) {
		Pagination<TPlatformPmRole> pagination = PageContext.initialize(
				paramBean.getPage(), paramBean.getRows());
		List<TPlatformPmRole> pmRoles = pmRoleMapper.queryRoles(paramBean,
				pagination.getRowBounds());
		pagination.setData(pmRoles);
		return pagination;
	}
	
	/**
	 * 查询用户所有店铺
	 * @return
	 */
	public List<HashMap> getShopByUser(Long userId) {
		return erpShopUserMapper.getShopByUser(CurrentUtil.getCurrentUser().getEnterpriseId(),userId);
	}
	/**
	 * 查询用户所有是仓库
	 * @return
	 */
	public List<HashMap> getWareHourseByUser(Long userId) {
		return erpWarehouseUserMapper.getWareHourseByUser(CurrentUtil.getCurrentUser().getEnterpriseId(),userId);
	}
	
	@Override
	public TPlatformPmRole getRoleById(long roleId) {
		return pmRoleMapper.selectByPrimaryKey(roleId,CurrentUtil.getCurrentUser().getEnterpriseId());
	}
	@Override
	public List<TPlatformPmUser> queryUsersNoPage() {
		
		UserCacheBean userCacheBean = CurrentUtil.getCurrentUser();
		
		TPlatformPmUser pmUser = new TPlatformPmUser();
		pmUser.setSystemId(CurrentUtil.getCurrentSystemId());
		pmUser.setEnterpriseId(userCacheBean.getEnterpriseId());
		pmUser.setState(PmStateConstant.ADD);
		
		return pmUserMapper.queryUsersNoPage(pmUser);
	}
	
	public boolean delRoles(List<Long> asList) throws ServiceException {
		if (asList == null || asList.size() == 0)
			return false;
		List<TPlatformPmRole> roles = new ArrayList<TPlatformPmRole>();
		for (Long roleId : asList) {
			TPlatformPmRole pmRole = pmRoleMapper.selectByPrimaryKey(roleId,CurrentUtil.getCurrentUser().getEnterpriseId());
			pmRole.setState(PmStateConstant.DEL);
			CurrentUtil.setBaseBeanByModify(pmRole);
			roles.add(pmRole);
		}
		return pmRoleMapper.batchUpdateByPrimaryKey(roles) > 0;
	}
	
	@Override
	public boolean isLoginNameUnique(String loginName) {
		return pmUserMapper.getUserIdByLoginName(loginName)==null;
	}

	@Override
	public int updatePmUser(TPlatformPmUser pmUser) throws ServiceException {
		if("".equals(pmUser.getUserName())){
			throw new ServiceException(PmExpCodeConstant.PM_USERNAME_NULL, true);
		}
		return pmUserMapper.updateByPrimaryKeySelective(pmUser);
	}

	@Override
	public int updateCurrentPwd(String oldPwd, String pwd)
			throws ServiceException {
		long userId = CurrentUtil.getCurrentUser().getUserId();
		long enterpriseId =  CurrentUtil.getCurrentUser().getEnterpriseId();
		TPlatformPmUser pmUser = pmUserMapper.selectByPrimaryKey(userId, enterpriseId);
		if(oldPwd !=null && !MD5Util.getMD5String(oldPwd).equals(pmUser.getPwd()) ){
			throw new ServiceException(PmExpCodeConstant.PM_PASSWORD_ERROR, true);
		}
		TPlatformPmUser user = new TPlatformPmUser();
		user.setUserId(userId);
		user.setEnterpriseId(enterpriseId);
		user.setPwd(MD5Util.getMD5String(pwd));
		return this.updatePmUser(user);
	}
	
}
