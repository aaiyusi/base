package com.samton.erp.api.sys.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.session.RowBounds;

import com.samton.erp.api.sys.bean.entity.TErpSysEnterprise;
import com.samton.erp.api.sys.bean.entity.vo.TErpSysEnterpriseVo;
import com.samton.platform.common.bean.param.JqParamBean;

public interface TErpSysEnterpriseMapper {
    int deleteByPrimaryKey(Long enterpriseId);

    int insert(TErpSysEnterprise record);

    int insertSelective(TErpSysEnterprise record);

    TErpSysEnterprise selectByPrimaryKey(Long enterpriseId);

    int updateByPrimaryKeySelective(TErpSysEnterprise record);

    int updateByPrimaryKey(TErpSysEnterprise record);
    
    TErpSysEnterpriseVo selectByPrimaryKeyVo(Long enterpriseId);
    
    List<TErpSysEnterpriseVo> getEnterpriseList(JqParamBean jqParamBean ,RowBounds rowBounds);
    
}