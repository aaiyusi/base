package com.samton.platform.pm.listener;

import javax.servlet.http.HttpSession;
import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;

import com.samton.platform.framework.bean.UserCacheBean;
import com.samton.platform.framework.constant.WebConstant;

public class SessionListener implements HttpSessionListener {


	/**
	 * session创建
	 */
	@Override
	public void sessionCreated(HttpSessionEvent event) {
	}
	
	/**
	 * session失效
	 */
	@Override
	public void sessionDestroyed(HttpSessionEvent event) {
		HttpSession session = event.getSession();
		UserCacheBean userCacheBean = (UserCacheBean)session.getAttribute(WebConstant.USER_SESSION);
		if(userCacheBean != null){
			
		}
	}

}
