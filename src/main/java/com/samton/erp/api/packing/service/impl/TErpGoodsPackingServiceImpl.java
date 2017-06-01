/**
 * 
 */
/** 
 * @Title: package-info.java 
 * @Package com.samton.erp.api.packing.service.impl 
 * @Description: TODO(用一句话描述该文件做什么) 
 * @author A18ccms A18ccms_gmail_com 
 * @date 2016年3月26日 下午4:31:38 
 * @version V1.0 
 */
package com.samton.erp.api.packing.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.samton.erp.api.packing.bean.entity.TErpGoodsPacking;
import com.samton.erp.api.packing.bean.entity.TErpGoodsPackingExpand;
import com.samton.erp.api.packing.dao.TErpGoodsPackingMapper;
import com.samton.erp.api.packing.service.TErpGoodsPackingService;
import com.samton.platform.common.bean.param.JqParamBean;
import com.samton.platform.framework.mybatis.pagination.PageContext;
import com.samton.platform.framework.mybatis.pagination.Pagination;
import com.samton.platform.framework.util.CurrentUtil;

@Service("goodsPackingService")
public class TErpGoodsPackingServiceImpl implements TErpGoodsPackingService {

	@Resource
	private TErpGoodsPackingMapper goodsPackingMapper;

	@Override
	public Pagination<TErpGoodsPackingExpand> getPackingInfoList(
			JqParamBean paramBean) {
		paramBean.setSearch(CurrentUtil.getCurrentUser().getEnterpriseId());
		Pagination<TErpGoodsPackingExpand> pagination = PageContext.initialize(
				paramBean.getPage(), paramBean.getRows());
		List<TErpGoodsPackingExpand> list = goodsPackingMapper
				.selectPackingList(paramBean, pagination.getRowBounds());
		for (int i = 0; i < list.size(); i++) {
			list.get(i).setSize(
					list.get(i).getLength() + "*" + list.get(i).getWidth()
							+ "*" + list.get(i).getHeight());
		}
		pagination.setData(list);
		return pagination;
	}

	@Override
	public int addPackingInfo(TErpGoodsPacking tp) {
		tp.setCreateUserId(CurrentUtil.getCurrentUser().getUserId());
		tp.setEnterpriseId(CurrentUtil.getCurrentUser().getEnterpriseId());
		tp.setCreateUserName(CurrentUtil.getCurrentUser().getUserName());
		tp.setState(Short.valueOf("1"));
		List<TErpGoodsPacking> packingList = goodsPackingMapper
				.getPackingListNoPage(CurrentUtil.getCurrentUser()
						.getEnterpriseId());
		for (int i = 0; i < packingList.size(); i++) {
			if (packingList.get(i).getName().trim().equals(tp.getName().trim())) {
				return 2;
			}
		}
		return goodsPackingMapper.insertPackingInfo(tp);
	}

	@Override
	public TErpGoodsPacking getPackingInfo(Long packingId) {
		return goodsPackingMapper.selectPackingById(packingId);
	}

	@Override
	public int editPackingInfo(TErpGoodsPacking tp) {
		tp.setModifyUserId(CurrentUtil.getCurrentUser().getUserId());
		tp.setModifyUserName(CurrentUtil.getCurrentUser().getUserName());
		List<TErpGoodsPacking> packingList = goodsPackingMapper
				.getPackingListNoPage(CurrentUtil.getCurrentUser()
						.getEnterpriseId());
		for (int i = 0; i < packingList.size(); i++) {
			if (tp.getPackingId().equals(packingList.get(i).getPackingId())) {
				continue;
			} else if (packingList.get(i).getName().trim()
					.equals(tp.getName().trim())) {
				return 2;
			}
		}
		return goodsPackingMapper.updateByPackingInfo(tp);
	}

	@Override
	public int delPackingInfo(Long packingId) {
		List<TErpGoodsPackingExpand> list = goodsPackingMapper
				.selectGoodsByPId(packingId);
		if (list.size() > 0) {
			return 2;
		}
		return goodsPackingMapper.deletePacking(packingId);
	}

	@Override
	public List<TErpGoodsPacking> getPackingListNoPage() {
		return goodsPackingMapper.getPackingListNoPage(CurrentUtil
				.getCurrentUser().getEnterpriseId());
	}
}