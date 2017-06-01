package com.samton.platform.pm.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.annotation.Resource;
import javax.servlet.RequestDispatcher;

import net.sf.json.JSONObject;

import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;

import com.samton.erp.api.sys.bean.entity.vo.TErpSysEnterpriseVo;
import com.samton.erp.api.sys.service.ISysService;
import com.samton.platform.common.bean.param.JqParamBean;
import com.samton.platform.common.util.BeanPropFilterUtil;
import com.samton.platform.common.util.ListUtil;
import com.samton.platform.framework.base.SdkBaseController;
import com.samton.platform.framework.bean.UserCacheBean;
import com.samton.platform.framework.constant.WebConstant;
import com.samton.platform.framework.exception.BaseException;
import com.samton.platform.framework.exception.ServiceException;
import com.samton.platform.framework.mybatis.pagination.Pagination;
import com.samton.platform.framework.util.CurrentUtil;
import com.samton.platform.pm.bean.entity.TPlatformPmMenu;
import com.samton.platform.pm.bean.entity.TPlatformPmRole;
import com.samton.platform.pm.bean.entity.TPlatformPmUser;
import com.samton.platform.pm.constant.PmExpCodeConstant;
import com.samton.platform.pm.constant.PmStateConstant;
import com.samton.platform.pm.service.IPmService;

/**
 * 
 * 
 * @Description:权限管理、菜单管理、用户管理(demo)
 * @author: focus
 * @date: 2016年3月11日 Copyright (c) 2015, Samton. All rights reserved
 */
@Controller
@RequestMapping("/platform/pm")
public class PmController extends SdkBaseController {

	@Resource
	private IPmService pmService;
	
	@Resource
	private ISysService sysService;

	/**
	 * 获取所有正常状态按钮
	 * 
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/getMenus")
	@ResponseBody
	public Map<String, Object> getMenus() throws Exception {
		List<TPlatformPmMenu> menus = pmService.getMenusBySystemId(
				CurrentUtil.getCurrentSystemId(), PmStateConstant.ADD);
		return this.getResultMap(menus);
	}

	/**
	 * 根据菜单类型获取菜单列表
	 * 
	 * @param menuTypes
	 * @param states
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/getMenusByMenuTypes")
	@ResponseBody
	public Map<String, Object> getMenusByMenuTypes(Short[] menuTypes,
			Short[] states) throws Exception {
		List<TPlatformPmMenu> menus = pmService.getMenusByMenuTypes(
				Arrays.asList(menuTypes), Arrays.asList(states));
		return this.getResultMap(menus);
	}

	/**
	 * 根据父节点id获取菜单按钮
	 * 
	 * @param paramBean
	 * @param menu
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/getFuncMenusByParentId")
	@ResponseBody
	public Map<String, Object> getFuncMenusByParentId(JqParamBean paramBean,
			TPlatformPmMenu menu) throws Exception {
		paramBean.setSearch(menu);
		Pagination<TPlatformPmMenu> menus = pmService
				.getFuncMenusByParentId(paramBean);
		return this.getResultMap(menus);
	}

	/**
	 * 新增菜单
	 * 
	 * @param menu
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/addMenu")
	@ResponseBody
	public Map<String, Object> addMenu(TPlatformPmMenu menu) throws Exception {
		return this.getResultMap(true, pmService.addMenu(menu));
	}

	/**
	 * 更新菜单
	 * 
	 * @param menu
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/updateMenu")
	@ResponseBody
	public Map<String, Object> updateMenu(TPlatformPmMenu menu)
			throws Exception {
		return this.getResultMap(pmService.updateMenu(menu));
	}

	/**
	 * 上移、下移菜单顺序
	 * 
	 * @param menuIds
	 * @param isUp
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/changeMenusSortby")
	@ResponseBody
	public Map<String, Object> changeMenusSortby(Long[] menuIds, int isUp)
			throws Exception {
		return this.getResultMap(pmService.changeMenusSortby(
				Arrays.asList(menuIds), isUp > 0));
	}

	/**
	 * 删除菜单
	 * 
	 * @param menuIds
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/delMenus")
	@ResponseBody
	public Map<String, Object> delMenus(Long[] menuIds) throws Exception {
		return this.getResultMap(pmService.delMenus(Arrays.asList(menuIds)));
	}

	/**
	 * 禁用、恢复菜单
	 * 
	 * @param menuIds
	 * @param isDisable
	 *            (1：禁用；0：恢复)
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/disableMenus")
	@ResponseBody
	public Map<String, Object> disableMenus(Long[] menuIds, int isDisable)
			throws Exception {
		return this.getResultMap(pmService.disableMenus(Arrays.asList(menuIds),
				isDisable == 1 ? true : false));
	}

	/**
	 * qeqc
	 * 
	 * @param paramBean
	 * @param pmUser
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/queryRoels")
	@ResponseBody
	public Map<String, Object> queryRoles(JqParamBean paramBean,
			TPlatformPmRole pmRole) throws Exception {
		pmRole.setSystemId(CurrentUtil.getCurrentSystemId());
		pmRole.setState(PmStateConstant.ADD);
		paramBean.setSearch(pmRole);
		Pagination<TPlatformPmRole> roles = pmService.queryRoles(paramBean);
		return this.getResultMap(true, roles);
	}

	/**
	 * 获取角色列表、当前所有菜单列表
	 * 
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/getRolesAndMenus")
	@ResponseBody
	public Map<String, Object> getRolesAndMenus(Long userId) throws Exception {
		List<Map> pmRoles = pmService.getRolesBySystemId(userId);
		boolean flag = ListUtil.isNotEmpty(pmRoles);
		Map<String, Object> rsMap = this.getResultMap(flag);
		// rsMap.put("menus", pmService.getMenusBySystemId(systemId,
		// PmStateConstant.ADD));
		if (flag) {
			rsMap.put("roles", pmRoles);
			rsMap.put("shops", pmService.getShopByUser(userId));
			rsMap.put("whouses", pmService.getWareHourseByUser(userId));
			// rsMap.put("defaultMenus",
			// pmService.getRoleMenuIds(pmRoles.get(0).getRoleId(),
			// PmStateConstant.ADD));
		}
		return rsMap;
	}

	/**
	 * 根据角色获取菜单
	 * 
	 * @param roleId
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/getMenusByRoleId")
	@ResponseBody
	public Map<String, Object> getMenusByRoleId(long roleId) throws Exception {
		List<Map> menus = pmService.getRoleMenuIds(roleId,
				PmStateConstant.ADD);
		Map pmenusMap = new HashMap();
		List<Map> pmenusList = new ArrayList<Map>();
		Map submenusMap = new HashMap();
		for(int i=0;i<menus.size();i++){
			Map menu = menus.get(i);
			if(menu.get("parent_id") == null){
				continue;
			}
			if("0".equals(menu.get("menu_type").toString())){
				//一级菜单
				Map temp = (Map)pmenusMap.get(menu.get("menu_id").toString());
				if(temp != null){
					//二级菜单先放入变量
					List<Map> submenusList = (List<Map>)temp.get("submenusList");
					menu.put("submenusList", submenusList);
				}
				pmenusMap.put(menu.get("menu_id").toString(), menu);
				pmenusList.add(menu);
			}else if("1".equals(menu.get("menu_type").toString())){
				List<Map> submenusList = (List<Map>)submenusMap.get(menu.get("parent_id").toString());
				//查询上级菜单是否已放入变量
				Map tempP = (Map)pmenusMap.get(menu.get("parent_id").toString());
				if(tempP != null){
					submenusList = (List)tempP.get("submenusList");
				}else{
					//初始化一级菜单变量
					tempP = new HashMap();
					pmenusMap.put(menu.get("parent_id").toString(), tempP);
				}
				if(submenusList == null){
					submenusList = new ArrayList<Map>();
					submenusMap.put(menu.get("parent_id").toString(), submenusList);
				}
				//二级菜单
//				submenusList.add(menu);
				submenusList.add(0, menu);
				tempP.put("submenusList", submenusList);
			}else if("2".equals(menu.get("menu_type").toString())){
				//功能
				
			}
		}
		return this.getResultMap(pmenusList);
	}

	/**
	 * 新增角色
	 * 
	 * @param role
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/addRole")
	@ResponseBody
	public Map<String, Object> addRole(TPlatformPmRole role) throws Exception {
		if(role == null || StringUtils.isBlank(role.getRoleName())){
			throw new ServiceException(
					PmExpCodeConstant.PM_ROLENAME_ERROR);
		}
		return this.getResultMap(true, pmService.addRole(role));
	}

	/**
	 * 更新角色
	 * 
	 * @param role
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/updateRole")
	@ResponseBody
	public Map<String, Object> updateRole(TPlatformPmRole role)
			throws Exception {
		if(role == null || StringUtils.isBlank(role.getRoleName())){
			throw new ServiceException(
					PmExpCodeConstant.PM_ROLENAME_ERROR);
		}
		return this.getResultMap(pmService.updateRole(role));
	}

	/**
	 * 根据角色id获取角色信息
	 * 
	 * @param roleId
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/getRole")
	@ResponseBody
	public Map<String, Object> getRole(long roleId) throws Exception {
		TPlatformPmRole role = pmService.getRoleById(roleId);
		BeanPropFilterUtil.convertBeanByPersistProps(role,
				Arrays.asList("roleId","roleName","descriptions",""));
		Map<String, Object> rsMap = this.getResultMap(role);
		if(role != null){
			Map<String,Object> menus = getMenusByRoleId(roleId);
			rsMap.put("menus", menus);
		}
		return rsMap;
	}
	
	/**
	 * 删除角色
	 * 
	 * @param roleId
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/delRole")
	@ResponseBody
	public Map<String, Object> delRole(Long[] roleIds) throws Exception {
		return this.getResultMap(pmService.delRoles(Arrays.asList(roleIds)));
	}

	/**
	 * 设置角色所拥有菜单权限
	 * 
	 * @param roleId
	 * @param menuIds
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/setRoleMenus")
	@ResponseBody
	public Map<String, Object> setRoleMenus(long roleId, Long[] menuIds)
			throws Exception {
		List<Long> menuIdList = new ArrayList<Long>();
		for (Long menuId : menuIds) {
			menuIdList.add(menuId);
		}
		return this.getResultMap(pmService.setRoleMenus(roleId, menuIdList));
	}

	/**
	 * 新增用户
	 * 
	 * @param roles
	 *            角色权限
	 * @param shopIds
	 *            店铺权限
	 * @param whouseIds
	 *            仓库权限
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/addUser")
	@ResponseBody
	public Map<String, Object> addUser(TPlatformPmUser user) throws Exception {
		Map<String, Object> authInfo = new HashMap<String, Object>();
		return this.getResultMap(true, pmService.addUser(user, authInfo));
	}

	/**
	 * 更新用户
	 * 
	 * @param user
	 * @param roles
	 *            角色权限
	 * @param shopIds
	 *            店铺权限
	 * @param whouseIds
	 *            仓库权限
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/updateUser")
	@ResponseBody
	public Map<String, Object> updateUser(TPlatformPmUser user)
			throws Exception {
		return this.getResultMap(pmService.updateUser(user));
	}

	/**
	 * 分页查询用户
	 * 
	 * @param paramBean
	 * @param pmUser
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/queryUsers")
	@ResponseBody
	public Map<String, Object> queryUsers(JqParamBean paramBean,
			TPlatformPmUser pmUser) throws Exception {
		pmUser.setSystemId(CurrentUtil.getCurrentSystemId());
		pmUser.setState(PmStateConstant.ADD);
		paramBean.setSearch(pmUser);
		Pagination<TPlatformPmUser> users = pmService.queryUsers(paramBean);
		return this.getResultMap(true, users);
	}

	/**
	 * 根据用户id获取用户信息
	 * 
	 * @param userId
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/getUser")
	@ResponseBody
	public Map<String, Object> getUser(long userId) throws Exception {
		TPlatformPmUser user = pmService.getUserById(userId);
		BeanPropFilterUtil.convertBeanByPersistProps(user,
				Arrays.asList("userId","loginName", "userName","email","mobilePhone",""));
		Map<String, Object> rsMap = this.getResultMap(user);
		if(user != null){
			List<Map> pmRoles = pmService.getRolesBySystemId(userId);
			rsMap.put("roles", pmRoles);
			rsMap.put("shops", pmService.getShopByUser(userId));
			rsMap.put("whouses", pmService.getWareHourseByUser(userId));
		}
		return rsMap;
	}
	
	
	/**
	 * 删除用户列表
	 * 
	 * @param userIds
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/delUsers")
	@ResponseBody
	public Map<String, Object> delUsers(Long[] userIds) throws Exception {
		return this.getResultMap(pmService.delUsers(Arrays.asList(userIds)));
	}

	/**
	 * 获取用户角色信息
	 * 
	 * @param userId
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/getUserRoles")
	@ResponseBody
	public Map<String, Object> getUserRoles(Long userId) throws Exception {
		List<Map> pmRoles = pmService.getRolesBySystemId(userId);
		boolean flag = ListUtil.isNotEmpty(pmRoles);
		Map<String, Object> rsMap = this.getResultMap(flag);
		if (flag) {
			rsMap.put("roles", pmRoles);
			rsMap.put("userRoles",
					pmService.getUserRoleIds(userId, PmStateConstant.ADD));
		}
		return rsMap;
	}

	/**
	 * 设置用户角色列表
	 * 
	 * @param userId
	 * @param roleIds
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/setUserRoles")
	@ResponseBody
	public Map<String, Object> setUserRoles(long userId, Long[] roleIds)
			throws Exception {
		List<Long> roleIdList = new ArrayList<Long>();
		for (Long roleId : roleIds) {
			roleIdList.add(roleId);
		}
		return this.getResultMap(pmService.setUserRoles(userId, roleIdList));
	}

	/**
	 * pm系统登录
	 * 
	 * @param pmUser
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/login")
	@ResponseBody
	public Map<String, Object> login(TPlatformPmUser pmUser) throws Exception {
		String forwradPath = "/platform/pm/index";
		try {
			pmUser = pmService.loginUser(pmUser);
			List<TPlatformPmMenu> foreMenus = pmService.getUserMenusByUserId(
					pmUser, 1L);
			Map<String, List<TPlatformPmMenu>> menuMap = new LinkedHashMap<String, List<TPlatformPmMenu>>();
			Map<String, List<TPlatformPmMenu>> buttonMap = new LinkedHashMap<String, List<TPlatformPmMenu>>();
			Set<String> authCodeSet=new HashSet<String>();
			for (TPlatformPmMenu foreMenu : foreMenus) {
				authCodeSet.add(foreMenu.getMenuCode());
				String key = foreMenu.getParentId().toString();
				if (foreMenu.getMenuType().equals(2)) {
					if (buttonMap.containsKey(key)) {
						buttonMap.get(key).add(foreMenu);
					} else {
						List<TPlatformPmMenu> childrenMenus = new ArrayList<TPlatformPmMenu>();
						childrenMenus.add(foreMenu);
						buttonMap.put(key, childrenMenus);
					}
				} else {
					if (menuMap.containsKey(key)) {
						menuMap.get(key).add(foreMenu);
					} else {
						List<TPlatformPmMenu> childrenMenus = new ArrayList<TPlatformPmMenu>();
						childrenMenus.add(foreMenu);
						menuMap.put(key, childrenMenus);
					}
				}
			}
			
			TErpSysEnterpriseVo enterprise  = sysService.getenterEnterpriseById(pmUser.getEnterpriseId());
			UserCacheBean userCacheBean = new UserCacheBean();
			userCacheBean.setLoginName(pmUser.getLoginName());
			userCacheBean.setUserId(pmUser.getUserId());
			userCacheBean.setUserName(pmUser.getUserName());
			userCacheBean.setEnterpriseId(pmUser.getEnterpriseId());
			userCacheBean.setIsAdmin(pmUser.getIsAdmin());
			userCacheBean.setIsManager(pmUser.getIsManager());
			this.setSessionAttribute("menus", JSONObject.fromObject(menuMap));
			this.setSessionAttribute("buttons",JSONObject.fromObject(buttonMap));
			this.setSessionAttribute(WebConstant.AUTH_CODE_SET, authCodeSet);
			this.setSessionAttribute(WebConstant.USER_SESSION, userCacheBean);
			this.setSessionAttribute("enterprise", enterprise);
			return this.getResultMap(true, forwradPath);
		} catch (BaseException e) {
			this.setAttribute("errorMsg", e.getMsg());
			Map<String, String> data = new HashMap<String, String>();
			data.put("msg", e.getMsg());
			return this.getResultMap(false,data);
		} catch (Exception e) {
			e.printStackTrace();
			this.setAttribute("errorMsg", e.getCause());
			return this.getResultMap(false);
		}
		//RequestDispatcher rd = request.getRequestDispatcher(forwradPath);
		//rd.forward(request, response);
		//return this.getResultMap(false);
	}

	@RequestMapping(value = "/index")
	@ResponseBody
	public Map<String, Object> index(TPlatformPmUser pmUser) throws Exception {
		// 主界面地址
		String forwradPath = "/resources/platform/views/main.jsp";
		RequestDispatcher rd = request.getRequestDispatcher(forwradPath);
		rd.forward(request, response);
		return null;
	}

	/**
	 * 用户登出
	 * 
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/logout")
	public ModelAndView logout() throws Exception {
		this.removeSessionAttribute(WebConstant.USER_SESSION);
		return new ModelAndView(new RedirectView(this.getRequest()
				.getContextPath() + "/resources/platform/views/login.jsp"));
	}

	/**
	 * 菜单表单校验(menu_code是否唯一)
	 * 
	 * @param menu
	 * @return
	 */
	@RequestMapping("checkMenuForm")
	@ResponseBody
	public boolean checkMenuForm(TPlatformPmMenu menu) {
		if (pmService.isMenuCodeExist(menu.getMenuCode(), menu.getMenuId())) {
			return false;
		}
		return true;
	}
	
	@RequestMapping("/queryUsersNoPage")
	@ResponseBody
	public Map<String, Object> queryUsersNoPage() throws Exception {
		List<TPlatformPmUser> users = pmService.queryUsersNoPage();
		return this.getResultMap(users.size() > 0, users);
	}

}
