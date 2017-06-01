package com.samton.erp.api.sys.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.samton.erp.api.sys.bean.entity.TErpSysDictValue;
import com.samton.erp.api.sys.bean.entity.TErpSysEnterprise;
import com.samton.erp.api.sys.bean.entity.TErpSysEnterpriseSet;
import com.samton.erp.api.sys.bean.entity.vo.TErpSysEnterpriseVo;
import com.samton.erp.api.sys.constant.SysExpCodeConstant;
import com.samton.erp.api.sys.dao.TErpSysDictValueMapper;
import com.samton.erp.api.sys.dao.TErpSysEnterpriseMapper;
import com.samton.erp.api.sys.dao.TErpSysEnterpriseSetMapper;
import com.samton.erp.api.sys.service.ISysService;
import com.samton.platform.common.bean.param.JqParamBean;
import com.samton.platform.framework.exception.ServiceException;
import com.samton.platform.framework.mybatis.pagination.PageContext;
import com.samton.platform.framework.mybatis.pagination.Pagination;
import com.samton.platform.framework.util.CurrentUtil;

/**
 * 
* @ClassName: SysServiceImpl 
* @Description: 系统设置service实现类
* @author A18ccms a18ccms_gmail_com 
* @date 2016年4月18日 下午5:05:46 
*
 */
@Service("sysService")
public class SysServiceImpl implements ISysService {

	@Resource
	private TErpSysEnterpriseMapper enterpriseMapper;
	
	@Resource
	private TErpSysEnterpriseSetMapper enterpriseSetMapper;
	
	@Resource
	private TErpSysDictValueMapper sysDictValueMapper;
	
	@Override
	public int addEnterprise(TErpSysEnterprise enterprise)
			throws ServiceException {
		return enterpriseMapper.insertSelective(enterprise);
	}

	@Override
	public TErpSysEnterpriseVo getenterEnterpriseById(Long enterpriseId)
			throws ServiceException {
		return enterpriseMapper.selectByPrimaryKeyVo(enterpriseId);
	}

	@Override
	public int addEnterpriseSet(TErpSysEnterpriseSet enterpriseSet)
			throws ServiceException {
		return enterpriseSetMapper.insertSelective(enterpriseSet);
	}

	@Override
	public int updateCurrentTErpSysEnterprise(TErpSysEnterprise enterprise)
			throws ServiceException {
		if("".equals(enterprise.getCompanyName())){
			throw new ServiceException(SysExpCodeConstant.COMPANY_NAME_NULL, true);
		}
		enterprise.setEnterpriseId(CurrentUtil.getCurrentUser().getEnterpriseId());
		CurrentUtil.setBaseBeanByModify(enterprise);
		return enterpriseMapper.updateByPrimaryKeySelective(enterprise);
	}

	@Override
	public List<Map<String, Object>> querySysDictListByDictTypeId(long dictTypeId) throws ServiceException {
		return sysDictValueMapper.querySysDictListByDictTypeId(dictTypeId);
	}

	@Override
	public List<TErpSysDictValue> queryAllCountryList() throws ServiceException {
		return sysDictValueMapper.queryAllCountryList();
	}

	@Override
	public Pagination<TErpSysEnterpriseVo> queryEnterpriseList(
			JqParamBean param) throws ServiceException {
		Pagination<TErpSysEnterpriseVo> pagination = PageContext.initialize(param.getPage(), param.getRows());
		List<TErpSysEnterpriseVo> list = enterpriseMapper.getEnterpriseList(param,pagination.getRowBounds());
		//数据库操作
		pagination.setData(list);
		return pagination; 
	}

	/**
     * 根据字典名查询字典值
     * @param dictName
     * @return
     */
	@Override
	public TErpSysDictValue querySysDictValueByName(String dictName) {
		return sysDictValueMapper.querySysDictValueByName(dictName);
	}
	
	/**
	 * 
	 * @Title:        useEnterpriseAttrSize 
	 * @Description:  企业使用空间增加
	 * @param:        @param fileSize
	 * @param:        @param enterpriseId    
	 * @return:       void    
	 * @author        
	 * @Date          2016年10月18日 下午4:44:54
	 */
	@Override
	public boolean useEnterpriseAttrSize(Integer fileSize, Long enterpriseId) {
		return enterpriseSetMapper.useEnterpriseAttrSize(fileSize, enterpriseId)>0;
	}

}
