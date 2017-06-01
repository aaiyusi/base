package com.samton.erp.api.logistics.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.samton.erp.api.goods.bean.entity.TErpGoods;
import com.samton.erp.api.goods.bean.entity.TErpGoodsStorage;
import com.samton.erp.api.goods.dao.TErpGoodsMapper;
import com.samton.erp.api.goods.dao.TErpGoodsStorageMapper;
import com.samton.erp.api.logistics.bean.entity.TErpLogisticsTrackingnumber;
import com.samton.erp.api.logistics.constant.LogisticsCompanyConstant;
import com.samton.erp.api.logistics.dao.TErpLogisticsTrackingnumberMapper;
import com.samton.erp.api.logistics.service.ITrackingService;
import com.samton.erp.api.warehouse.bean.entity.TErpShelf;
import com.samton.erp.api.warehouse.bean.entity.TErpSpace;
import com.samton.erp.api.warehouse.bean.entity.TErpWarehouse;
import com.samton.erp.api.warehouse.bean.entity.TErpWhouseCheck;
import com.samton.erp.api.warehouse.bean.entity.TErpWhouseCheckDetail;
import com.samton.erp.api.warehouse.bean.entity.TErpWhouseStorage;
import com.samton.erp.api.warehouse.bean.entity.TErpWhouseStorageDetail;
import com.samton.erp.api.warehouse.bean.entity.WhouseCheckChild;
import com.samton.erp.api.warehouse.bean.entity.WhouseStorageChild;
import com.samton.erp.api.warehouse.constant.WarehouseConstant;
import com.samton.erp.api.warehouse.dao.TErpShelfMapper;
import com.samton.erp.api.warehouse.dao.TErpSpaceMapper;
import com.samton.erp.api.warehouse.dao.TErpWarehouseMapper;
import com.samton.erp.api.warehouse.dao.TErpWhouseCheckDetailMapper;
import com.samton.erp.api.warehouse.dao.TErpWhouseCheckMapper;
import com.samton.erp.api.warehouse.dao.TErpWhouseOutInFlowMapper;
import com.samton.erp.api.warehouse.dao.TErpWhouseStorageDetailMapper;
import com.samton.erp.api.warehouse.dao.TErpWhouseStorageMapper;
import com.samton.erp.api.warehouse.service.IWarehouseService;
import com.samton.platform.common.bean.param.JqParamBean;
import com.samton.platform.core.constant.StateConstant;
import com.samton.platform.framework.exception.ServiceException;
import com.samton.platform.framework.mybatis.pagination.PageContext;
import com.samton.platform.framework.mybatis.pagination.Pagination;
import com.samton.platform.framework.util.CurrentUtil;
@Service("trackingService")
public class TTrackingService implements ITrackingService {

	@Resource
	private TErpLogisticsTrackingnumberMapper trackingnumberMapper;
	
	
	/**
	 * 运单号主列表
	 * @param whouseChild
	 * @return
	 * @throws ServiceException
	 */
	@Override
	public Pagination<Map<String, Object>> queryTrackingList(
		JqParamBean jqParamBean) throws Exception {
		//封装分页参数
		Pagination<Map<String, Object>> pagination = PageContext.initialize(jqParamBean.getPage(), jqParamBean.getRows());
		//数据库操作
		List<Map<String, Object>> warehouseList = trackingnumberMapper.queryTrackingRecord(jqParamBean,pagination.getRowBounds());
		//返回数据
		pagination.setData(warehouseList);
		return pagination;
	}


	@Override
	public int insert(TErpLogisticsTrackingnumber enity) throws Exception {
		String[] str = enity.getTnumber().split("\n");
		int i =0;
		for(String s:str){
			CurrentUtil.setBaseBeanByInsert(enity);
			enity.setIsUsed(LogisticsCompanyConstant.TRACKING_USED_OFF);
			enity.setState(LogisticsCompanyConstant.SYS_LOGISTICS_COMPANY_ON);
			enity.setEnterpriseId(CurrentUtil.getCurrentUser().getEnterpriseId());
			enity.setCreateUserId(CurrentUtil.getCurrentUser().getUserId());
			enity.setTnumber(s);
			i = i+trackingnumberMapper.insertSelective(enity);
		}
		return i;
	}


	@Override
	public int delTracking(String ids) throws Exception {
		String[] str = ids.split(",");
		int i = 0;
		for(String id:str){
			TErpLogisticsTrackingnumber temp = trackingnumberMapper.selectByPrimaryKey(Long.parseLong(id));
			temp.setState(LogisticsCompanyConstant.SYS_LOGISTICS_COMPANY_DEL);
			i = trackingnumberMapper.updateByPrimaryKeySelective(temp);
		}
		
		return i;
	}


	@Override
	public int oneTracking(String ids) throws Exception {
		String[] str = ids.split("\n");
		int i = 0;
		for(String id:str){
			int temp = trackingnumberMapper.queryTrackNumExist(id, CurrentUtil.getCurrentUser().getEnterpriseId());
			i = temp +i;
		}
		
		return i;
	}
	

}
