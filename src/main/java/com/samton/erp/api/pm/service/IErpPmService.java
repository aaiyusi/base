package com.samton.erp.api.pm.service;

import com.samton.erp.api.pm.bean.CheckCodeBean;
import com.samton.platform.framework.exception.ServiceException;
import com.samton.platform.pm.bean.entity.TPlatformPmUser;

public interface IErpPmService {
	
	/**
	 * 
	 * @Description: 注册发送验证码
	 * @param @param loginName
	 * @param @return
	 * @param @throws ServiceException   
	 * @return CheckCodeBean  
	 * @throws
	 * @author yokoboy
	 * @date 2016年4月15日
	 */
	CheckCodeBean sendCheckCodeMsg(String loginName) throws ServiceException;
	
	/**
	 * 
	 * @Description: 找回密码发送验证码
	 * @param @param loginName
	 * @param @return
	 * @param @throws ServiceException   
	 * @return CheckCodeBean  
	 * @throws
	 * @author yokoboy
	 * @date 2016年4月19日
	 */
	public CheckCodeBean sendCheckCodeMsgForPwd(String loginName) throws ServiceException ;
			

	/**
	 * 
	 * @Description: TODO
	 * @param @param loginName
	 * @param @param pwd
	 * @param @param registerType
	 * @param @return
	 * @param @throws ServiceException   
	 * @return int  
	 * @throws
	 * @author yokoboy
	 * @date 2016年4月18日
	 */
	int registerUser(String loginName,String pwd,short registerType) throws ServiceException;
	
	/**
	 * 
	 * @Description: 注册
	 * @param @param user
	 * @param @return
	 * @param @throws ServiceException   
	 * @return int  
	 * @throws
	 * @author yokoboy
	 * @date 2016年4月18日
	 */
	int registerUser(TPlatformPmUser user) throws ServiceException;
	
	/**
	 * 
	 * @Description: TODO
	 * @param @param userName
	 * @param @param loginName
	 * @param @param pwd
	 * @param @return
	 * @param @throws ServiceException   
	 * @return boolean  
	 * @throws
	 * @author yokoboy
	 * @date 2016年4月18日
	 */
	boolean sendSuccesMsg(String userName,String loginName, String pwd)
			throws ServiceException;
	
}
