package com.samton.erp.api.sys.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.samton.erp.api.sys.bean.entity.TErpSysDictValue;

public interface TErpSysDictValueMapper {
    int deleteByPrimaryKey(Long dictValueId);

    int insert(TErpSysDictValue record);

    int insertSelective(TErpSysDictValue record);

    TErpSysDictValue selectByPrimaryKey(Long dictValueId);

    int updateByPrimaryKeySelective(TErpSysDictValue record);

    int updateByPrimaryKey(TErpSysDictValue record);
    
    /**
     * 根据字典类型获取字典值
     * @param dictTypeId
     * @return
     */
    List<Map<String,Object>> querySysDictListByDictTypeId(@Param("dictTypeId") long dictTypeId);
    
    /**
     * 获取国家信息
     * @param countryShort
     * @return
     */
    TErpSysDictValue querySysDictValueByCountry(String countryShort);
    
    /**
     * 查询全部国家
     *  @return
     *  @author        liujiping
     *  @Date          2016年4月20日
     */
    List<TErpSysDictValue> queryAllCountryList();
    
    /**
     * 根据字典名查询字典值
     * @param dictName
     * @return
     */
    TErpSysDictValue querySysDictValueByName(String dictName);
}