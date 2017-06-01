package com.samton.erp.api.statistics.bean.vo;

import java.io.Serializable;

/**
 * 
* @ClassName: ChartVo 
* @Description:统计vo
* @author A18ccms a18ccms_gmail_com 
* @date 2016年4月21日 下午4:41:08 
*
 */
public class ChartVo implements Serializable {
	 
	private static final long serialVersionUID = 7341031614115183739L;
	//x轴名称
	private String xLine;
	//订单数
	private Long orderCount;
	public String getxLine() {
		return xLine;
	}
	public void setxLine(String xLine) {
		this.xLine = xLine;
	}
	public Long getOrderCount() {
		return orderCount;
	}
	public void setOrderCount(Long orderCount) {
		this.orderCount = orderCount;
	}
	
}