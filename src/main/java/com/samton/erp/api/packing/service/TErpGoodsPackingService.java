/**包材管理逻辑层 
 * @Title: package-info.java 
 * @Package com.samton.erp.api.classify.service 
 * @Description: TODO(用一句话描述该文件做什么) 
 * @author A18ccms A18ccms_gmail_com 
 * @date 2016年3月25日 下午3:13:25 
 * @version V1.0 
 */
package com.samton.erp.api.packing.service;

import java.util.List;

import com.samton.erp.api.packing.bean.entity.TErpGoodsPacking;
import com.samton.erp.api.packing.bean.entity.TErpGoodsPackingExpand;
import com.samton.platform.common.bean.param.JqParamBean;
import com.samton.platform.framework.mybatis.pagination.Pagination;

public interface TErpGoodsPackingService {

	// 获取包材数据
	Pagination<TErpGoodsPackingExpand> getPackingInfoList(JqParamBean paramBean);

	// 新增包材数据
	int addPackingInfo(TErpGoodsPacking tp);

	// 打开编辑页面数据
	TErpGoodsPacking getPackingInfo(Long packingId);

	// 编辑包材数据
	int editPackingInfo(TErpGoodsPacking tp);

	// 删除包材数据
	int delPackingInfo(Long packingId);

	/**
	 * 
	 * @Title: getPackingListNoPage
	 * @Description: 获得所有包材数据(不带分页)
	 * @param: @return
	 * @return: List<TErpGoodsPacking>
	 * @author Alex
	 * @Date 2016年4月5日 上午9:49:17
	 */
	List<TErpGoodsPacking> getPackingListNoPage();
}