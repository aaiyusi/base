package com.samton.platform.pm.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.session.RowBounds;

import com.samton.platform.common.bean.param.JqParamBean;
import com.samton.platform.pm.bean.entity.TPlatformPmMenu;


public interface TPlatformPmMenuMapper {
    int deleteByPrimaryKey(Long menuId);

    int insert(TPlatformPmMenu record);

    int insertSelective(TPlatformPmMenu record);

    TPlatformPmMenu selectByPrimaryKey(Long menuId);

    int updateByPrimaryKeySelective(TPlatformPmMenu record);

    int updateByPrimaryKey(TPlatformPmMenu record);
    
    int batchUpdateByPrimaryKey(List<TPlatformPmMenu> list);
    
    List<TPlatformPmMenu> getMenusBySystemId(@Param("systemId") long systemId,@Param("state") short state);
    
    List<TPlatformPmMenu> getMenusByMenuTypes(@Param("systemId") long systemId,@Param("state") short state,@Param("menuTypes") List<Short> menuTypes);
    
    Long getChildrenExistByParentId(@Param("parentId") long parentId,@Param("state") short state);
    
    List<TPlatformPmMenu> getUserMenusByParentId(@Param("systemId") long systemId,@Param("parentId") long parentId,@Param("userId") long userId);

    List<TPlatformPmMenu> getMenusByParentId(JqParamBean paramBean,RowBounds rowBounds);
    
    Integer getMaxSortByParentId(@Param("parentId") long parentId);
    
    Integer existByMenuCode(@Param("menuCode") String menuCode,@Param("menuId") Long menuId);
    
    TPlatformPmMenu getSortbyMenuByChange(@Param("parentId") long parentId,@Param("sortby") int sortby,@Param("isUp") boolean isUp);
    
    /**
     * 获取超级管理员菜单
     * @return
     */
    List<TPlatformPmMenu> getAllMenusByAdmin(@Param("isAdmin") long isAdmin);
}