/**
 * 
 */
package com.samton.erp.api.orders.thirdpart.aliexpress;

import java.util.Date;

/**
 *
 * @Description:Aliexpress授权token
 * @author:     lijianzhou
 * @date:       2016年4月14日
 * Copyright (c) 2015, Samton. All rights reserved
 */
public class AuthToken {

	/**
	 * 当前有效的access_token
	 */
	private String access_token = "";
	
	/**
	 * 获取access_token的时间，用于判断是否
	 */
	private Date access_token_time = null;
	
	public String getAccess_token() {
		//判断token是否已经生成10小时
		if(getAccess_token_time() != null && 
				System.currentTimeMillis() - getAccess_token_time().getTime() >= 36000000L){
//				setAccess_token_time(null);
				return null;
		}
		return access_token;
	}

	public void setAccess_token(String access_token) {
		this.access_token = access_token;
	}

	public Date getAccess_token_time() {
		return access_token_time;
	}

	public void setAccess_token_time(Date access_token_time) {
		this.access_token_time = access_token_time;
	}
}
