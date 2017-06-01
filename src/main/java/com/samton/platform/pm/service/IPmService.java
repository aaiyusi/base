package com.samton.platform.pm.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.samton.platform.common.bean.param.JqParamBean;
import com.samton.platform.framework.exception.ServiceException;
import com.samton.platform.framework.mybatis.pagination.Pagination;
import com.samton.platform.pm.bean.entity.TPlatformPmMenu;
import com.samton.platform.pm.bean.entity.TPlatformPmRole;
import com.samton.platform.pm.bean.entity.TPlatformPmUser;

/**
 * 
 * 
 * @Description:权限相关Service接口
 * @author: focus
 * @date: 2016年3月11日 Copyright (c) 2015, Samton. All rights reserved
 */
public interface IPmService {

	/**
	 * 根据菜单状态和所属系统id获取菜单列表
	 * 
	 * @param systemId
	 * @param state
	 * @return
	 */
	List<TPlatformPmMenu> getMenusBySystemId(long systemId, short state);

	/**
	 * 根据菜单类型、状态列表获取菜单列表
	 * 
	 * @param menuTypes
	 * @param states
	 * @return
	 */
	List<TPlatformPmMenu> getMenusByMenuTypes(List<Short> menuTypes,
			List<Short> states);

	/**
	 * 新增菜单
	 * 
	 * @param menu
	 * @return
	 * @throws ServiceException
	 */
	long addMenu(TPlatformPmMenu menu) throws ServiceException;

	/**
	 * 更新菜单
	 * 
	 * @param menu
	 * @return
	 * @throws ServiceException
	 */
	boolean updateMenu(TPlatformPmMenu menu) throws ServiceException;

	/**
	 * 删除菜单
	 * 
	 * @param menuIds
	 * @return
	 * @throws ServiceException
	 */
	boolean delMenus(List<Long> menuIds) throws ServiceException;

	/**
	 * 禁用、恢复菜单
	 * 
	 * @param menuIds
	 * @param isDisable
	 *            (1：禁用；0：恢复)
	 * @return
	 * @throws ServiceException
	 */
	boolean disableMenus(List<Long> menuIds, boolean isDisable)
			throws ServiceException;

	/**
	 * 上下移菜单
	 * 
	 * @param menuIds
	 * @param isUp
	 * @return
	 */
	boolean changeMenusSortby(List<Long> menuIds, boolean isUp);

	/**
	 * 新增角色
	 * 
	 * @param role
	 * @return
	 */
	long addRole(TPlatformPmRole role);

	/**
	 * 更新角色
	 * 
	 * @param role
	 * @return
	 */
	boolean updateRole(TPlatformPmRole role);

	/**
	 * 删除角色
	 * 
	 * @param roleId
	 * @return
	 */
	boolean delRole(long roleId);

	/**
	 * 根据系统id获取角色列表
	 * 
	 * @param systemId
	 * @param state
	 * @return
	 */
	List<Map> getRolesBySystemId(Long systemId);

	/**
	 * 获取单个角色所拥有的权限菜单id
	 * 
	 * @param roleId
	 * @param state
	 * @return
	 */
	List<Map> getRoleMenuIds(long roleId, short state);

	/**
	 * 设置单个角色的权限菜单
	 * 
	 * @param roleId
	 * @param menuIds
	 * @return
	 */
	boolean setRoleMenus(long roleId, List<Long> menuIds);

	/**
	 * 查询用户
	 * 
	 * @param paramBean
	 * @return
	 */
	Pagination<TPlatformPmUser> queryUsers(JqParamBean paramBean);

	/**
	 * 获取PM用户信息
	 * 
	 * @param userId
	 * @return
	 */
	TPlatformPmUser getUserById(long userId);

	/**
	 * 删除PM用户列表
	 * 
	 * @param userIds
	 * @return
	 */
	boolean delUsers(List<Long> userIds)throws ServiceException;

	/**
	 * 新增用户
	 * 
	 * @param user
	 * @return
	 * @throws ServiceException
	 */
	long addUser(TPlatformPmUser user,Map<String,Object> authInfo) throws ServiceException;

	/**
	 * 修改用户
	 * 
	 * @param user
	 * @return
	 */
	boolean updateUser(TPlatformPmUser user);

	/**
	 * 设置用户角色列表
	 * 
	 * @param userId
	 * @param roleIds
	 * @return
	 */
	boolean setUserRoles(long userId, List<Long> roleIds);

	/**
	 * 获取用户所拥有的角色id列表
	 * 
	 * @param userId
	 * @param state
	 * @return
	 */
	List<Long> getUserRoleIds(long userId, short state);

	/**
	 * PM用户登陆
	 * 
	 * @param pmUser
	 * @return
	 * @throws ServiceException
	 */
	TPlatformPmUser loginSystemUser(TPlatformPmUser pmUser)
			throws ServiceException;
	
	TPlatformPmUser loginUser(TPlatformPmUser pmUser) throws ServiceException;
	
	/**
	 * PM系统管理员用户登陆(管理员systemId=0)
	 * 
	 * @param pmUser
	 * @return
	 */
	List<TPlatformPmMenu> getUserMenusByUserId(TPlatformPmUser user,
			long parentId);

	/**
	 * 获取根节点下面所有的用户菜单
	 * 
	 * @param userId
	 * @param parentId
	 * @return
	 */
	List<TPlatformPmMenu> getUserMenusByUserId(long userId, long parentId);

	/**
	 * 获取某个功能菜单的子菜单按钮列表
	 * 
	 * @param paramBean
	 * @return
	 */
	Pagination<TPlatformPmMenu> getFuncMenusByParentId(JqParamBean paramBean);

	/**
	 * menuCode是否已经存在
	 * 
	 * @param menuCode
	 * @param exclusiveMenuId
	 * @return
	 */
	boolean isMenuCodeExist(String menuCode, Long exclusiveMenuId);

	/**
	 * 分布查询角色
	 * @param paramBean
	 * @return
	 */
	Pagination<TPlatformPmRole> queryRoles(JqParamBean paramBean);

	
	/**
	 * 查询用户所有店铺
	 * @return
	 */
	public List<HashMap> getShopByUser(Long userId);
	/**
	 * 查询用户所有是仓库
	 * @return
	 */
	public List<HashMap> getWareHourseByUser(Long userId);

	/**
	 * 查询角色信息
	 * @param roleId
	 * @return
	 */
	TPlatformPmRole getRoleById(long roleId);

	/**
	 * 
	 * @Title:        queryUsersNoPage 
	 * @Description:  查询所有用户(不带分页)
	 * @param:        @return    
	 * @return:       List<TPlatformPmUser>    
	 * @author        Alex
	 * @Date          2016年4月5日 下午2:16:54
	 */
	List<TPlatformPmUser> queryUsersNoPage();

	/**
	 * 删除角色
	 * @param asList
	 * @return
	 * @throws ServiceException
	 */
	boolean delRoles(List<Long> asList)throws ServiceException;
	
	 /**
     * 登录名是否重复
     * @param loginName
     * @return
     */
    boolean isLoginNameUnique(String loginName);
    
    /**
     * 
     * @Description: 更新用户信息
     * @param @param pmUser
     * @param @return
     * @param @throws ServiceException   
     * @return int  
     * @throws
     * @author yokoboy
     * @date 2016年4月19日
     */
    int updatePmUser(TPlatformPmUser pmUser) throws ServiceException;
    
    /**
     * 
     * @Description: 更新当前用户的密码
     * @param @param oldPwd
     * @param @param pwd
     * @param @return
     * @param @throws ServiceException   
     * @return int  
     * @throws
     * @author yokoboy
     * @date 2016年4月19日
     */
    int updateCurrentPwd(String oldPwd,String pwd) throws ServiceException;
}
