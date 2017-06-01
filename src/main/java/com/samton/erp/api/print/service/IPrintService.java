package com.samton.erp.api.print.service;

import java.util.List;

import com.samton.erp.api.print.bean.entity.TErpPrintTemplate;
import com.samton.erp.api.print.bean.vo.PrintVo;
import com.samton.platform.common.bean.param.JqParamBean;
import com.samton.platform.framework.mybatis.pagination.Pagination;

public interface IPrintService {
	
	/**
	 * 
	 * @Title:        getPrintContent 
	 * @Description:  根据打印数量，打印对应的标签
	 * @param:        @param tempId		模板ID
	 * @param:        @param list		需要打印的数据
	 * @param:        @param nums		打印次数(数组长度必须与打印数据长度一致)
	 * @param:        @return
	 * @param:        @throws Exception    
	 * @return:       String    
	 * @author        Alex
	 * @Date          2016年4月20日 下午3:09:00
	 */
	<T> String getPrintContent(Long tempId, List<T> list, String[] nums) throws Exception;
	
	/**
	 * 
	 * @Title:        getPrintContent 
	 * @Description:  根据打印数量，打印对应的标签
	 * @param:        @param tempId			模板ID
	 * @param:        @param list			打印数据集合
	 * @param:        @return
	 * @param:        @throws Exception    
	 * @return:       String    
	 * @author        Alex
	 * @Date          2016年4月22日 上午9:54:05
	 */
	<T> String getPrintContent(Long tempId, List<PrintVo<T>> list) throws Exception;

	/**
	 * 
	 * @Title:        getTempList 
	 * @Description:  根据标签类型，获得标签模板
	 * @param:        @param tempType		标签类型
	 * @param:        @param type			0：默认模板	1：企业模板
	 * @param:        @return    
	 * @return:       List<TErpPrintTemplate>    
	 * @author        Alex
	 * @Date          2016年4月21日 下午5:59:30
	 */
	List<TErpPrintTemplate> getTempList(Short tempType, int type, Integer tempModel);

	/**
	 * 
	 * @Title:        queryTempByPage 
	 * @Description:  获得标签模板数据(分页)
	 * @param:        @param param
	 * @param:        @return    
	 * @return:       Pagination<TErpPrintTemplate>    
	 * @author        Alex
	 * @Date          2016年4月25日 上午9:51:33
	 */
	Pagination<TErpPrintTemplate> queryTempByPage(JqParamBean param);

}
