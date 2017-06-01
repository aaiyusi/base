package com.samton.erp.api.pm.service.impl;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.samton.erp.api.pm.bean.CheckCodeBean;
import com.samton.erp.api.pm.constant.VersionConstant;
import com.samton.erp.api.pm.service.IErpPmService;
import com.samton.erp.api.pm.util.EmailMsgUtil;
import com.samton.erp.api.sys.bean.entity.TErpSysEnterprise;
import com.samton.erp.api.sys.bean.entity.TErpSysEnterpriseSet;
import com.samton.erp.api.sys.service.ISysService;
import com.samton.erp.common.util.MailUtil;
import com.samton.platform.core.constant.StateConstant;
import com.samton.platform.framework.exception.ServiceException;
import com.samton.platform.framework.util.CurrentUtil;
import com.samton.platform.framework.util.MD5Util;
import com.samton.platform.mail.SimpleMailSender;
import com.samton.platform.pm.bean.entity.TPlatformPmUser;
import com.samton.platform.pm.constant.PmExpCodeConstant;
import com.samton.platform.pm.constant.PmStateConstant;
import com.samton.platform.pm.dao.TPlatformPmUserMapper;
import com.samton.platform.pm.util.RegisterUtil;
import com.samton.platform.sms.SmsManager;


@Service("erpPmService")
public class ErpPmServiceImpl implements IErpPmService {
	
	@Resource
	private TPlatformPmUserMapper pmUserMapper;
	
	@Resource
	private ISysService sysService;
	
	private CheckCodeBean generateCheckCode(String loginName,int bit){
		CheckCodeBean checkCode=new CheckCodeBean();
		Random random = new Random();
		String sRand="";
		for (int i=0;i<bit;i++){
			sRand+=String.valueOf(random.nextInt(10));
		}
		checkCode.setCheckCode(sRand);
		checkCode.setTime(System.currentTimeMillis());
		checkCode.setLoginName(loginName);
		checkCode.setCheckFlag(false);
		return checkCode;
	}
	
	@Override
	public CheckCodeBean sendCheckCodeMsg(String loginName) throws ServiceException{
		CheckCodeBean checkCodeBean=this.generateCheckCode(loginName, 4);
		this.sendCheckCodeMsg(loginName, checkCodeBean);
		return checkCodeBean;
	}
	
	@Override
	public CheckCodeBean sendCheckCodeMsgForPwd(String loginName)
			throws ServiceException {
		CheckCodeBean checkCodeBean = this.generateCheckCode(loginName, 4);
		String subject="ERP-密码找回";
		String content="";
		if(RegisterUtil.isEmail(loginName)){
			Map<String,String> info = new HashMap<String,String>();
			info.put("type", "3");
			info.put("code", checkCodeBean.getCheckCode());
			info.put("userName", loginName);
			content = MailUtil.getMailContent(info);
		}else if (RegisterUtil.isMobileNo(loginName)){
			content="尊敬的用户，您此次找回密码的验证码是："+checkCodeBean.getCheckCode()+"，请在30分钟内在找回密码页填入此验证码。谢谢！";
		}
		//this.sendMsg(loginName,subject, content);
		return checkCodeBean;
	}

	private boolean sendCheckCodeMsg(String loginName,CheckCodeBean checkCodeBean){
		if(true) return true;
		String subject="EOC营销通验证码";
		String content="";
		if(RegisterUtil.isEmail(loginName)){
//			content="尊敬的用户，"+checkCodeBean.getCheckCode()+" 为您的营销通验证码，请您尽快完成注册。<br><br>如非本人操作，请忽略此邮件，谢谢！";
			Map<String,String> info = new HashMap<String,String>();
			info.put("type", "1");
			info.put("code", checkCodeBean.getCheckCode());
			content = EmailMsgUtil.getMailContent(info);
		}else if (RegisterUtil.isMobileNo(loginName)){
			content="尊敬的用户，"+checkCodeBean.getCheckCode()+" 为您的营销通验证码，请您尽快完成注册。如非本人操作，请忽略此信息，谢谢！";
		}
		return this.sendMsg(loginName,subject, content);
	}
	
	private boolean sendMsg(String loginName,String subject,String content){
		//给邮箱发验证码邮件
		if(RegisterUtil.isEmail(loginName)){
			Map<String,String> emailMap = new HashMap<String,String>();
			//设置接收邮箱号
			emailMap.put("email", loginName);
			//设置邮件标题
			emailMap.put("subject", subject);
			//设置邮件内容
			emailMap.put("content", content);
			SimpleMailSender.getInitialize().sendMail(emailMap);
			return true;
		}else if (RegisterUtil.isMobileNo(loginName)){
			//为了发送短信安全考虑，先控制一个号码一天最多只能发送20次
//			long count = sysUserMsgMapper.querySendCountByDay(loginName);
//			//最大发送数量
//			int maxCount = 20;
//			String maxCountStr = PropertiesUtil.getCrmProperty("sendMaxCount");
//			if(!StringUtils.isEmpty(maxCountStr)){
//				maxCount = Integer.parseInt(maxCountStr);
//			}
//			if(count < maxCount){
				//短信发送
				Map msg = new HashMap();
				msg.put("phone_nums", loginName);
				msg.put("msg_content", content);
				SmsManager.getInstance().sendMsg(msg);
				
				//获取当前用户信息
//				UserCacheBean userCacheBean = CurrentUtil.getCurrentUser();
//				Long userId = null,enterpriseId = null; String userName = null;
//				if(userCacheBean != null){
//					userId = userCacheBean.getUserId();
//					enterpriseId = userCacheBean.getEnterpriseId();
//					userName = userCacheBean.getUserName();
//				}
//				//同时新增发送记录表
//				TCrmSysUserMsg userMsg = new TCrmSysUserMsg();
//				userMsg.setUserId(userId);
//				userMsg.setEnterpriseId(enterpriseId);
//				userMsg.setMobileTel(loginName);
//				userMsg.setMsgContent(content);
//				userMsg.setCreateUserId(userId);
//				userMsg.setCreateUserName(userName);
//				userMsg.setCreateDate(new Date());
//				//数据库操作
//				sysUserMsgMapper.insertSelective(userMsg);
//			}
			return true;
		}
		return false;
	}

	@Override
	public int registerUser(String loginName, String pwd,short registerType) throws ServiceException {
		TPlatformPmUser user = new TPlatformPmUser();
		user.setLoginName(loginName);
		user.setPwd(pwd);
		user.setRegisterType(registerType);
		return this.registerUser(user);
	}
	
	@Override
	public int registerUser(TPlatformPmUser user) throws ServiceException{
		TErpSysEnterprise enterprise = new TErpSysEnterprise();
		enterprise.setCompanyName(user.getLoginName());
		enterprise.setLegalPerson(user.getLoginName());
		enterprise.setState(StateConstant.ADD);
		CurrentUtil.setBaseBeanByInsert(enterprise);
		//查询登录名是否重复
		Long userId = pmUserMapper.getUserIdByLoginName(user.getLoginName());
		if(userId != null ){
			throw new ServiceException(
					PmExpCodeConstant.PM_LOGINNAME_EXIST_ERROR);
		}
		if (RegisterUtil.isEmail(user.getLoginName())) {
			user.setEmail(user.getLoginName());
			user.setEmailVerify((short)1);
			user.setMobileVerify((short)0);
			user.setLoginFlag((short)1);
			
			enterprise.setContactEmail(user.getLoginName());
			
		} else if (RegisterUtil.isMobileNo(user.getLoginName())) {
			user.setMobilePhone(user.getLoginName());
			user.setMobileVerify((short)1);
			user.setEmailVerify((short)0);
			user.setLoginFlag((short)2);
			
			enterprise.setContactMobile(user.getLoginName());
		}else{
			throw new ServiceException(PmExpCodeConstant.PM_LOGINNAME_FORMAT_ERROR);
		}
		//增加企业信息
		sysService.addEnterprise(enterprise);
		
		//默认免费版
		TErpSysEnterpriseSet enterpriseSet=VersionConstant.getVersionEpSet(VersionConstant.VERSION_FREE);
		enterpriseSet.setEnterpriseId(enterprise.getEnterpriseId());
		enterpriseSet.setState(StateConstant.ADD);
		enterpriseSet.setUseUserCount(1);
		CurrentUtil.setBaseBeanByInsert(enterpriseSet);
		sysService.addEnterpriseSet(enterpriseSet);
		
		user.setEnterpriseId(enterprise.getEnterpriseId());
		user.setActiveState((short)1);
		user.setIsLock((short)0);
		user.setLoginCount(0);
		user.setLastLoginTime(new Date());
		user.setUserName(user.getLoginName());
		user.setSystemId(CurrentUtil.getCurrentSystemId());
		user.setState(PmStateConstant.ADD);
		user.setPwd(MD5Util.getMD5String(user.getPwd()));
		user.setIsManager(PmStateConstant.MANAGER);
		CurrentUtil.setBaseBeanByInsert(user);
		return pmUserMapper.insertSelective(user);
	}
	
	@Override
	public boolean sendSuccesMsg(String userName,String loginName, String pwd)
			throws ServiceException {
		String subject="ERP注册完成";
		String content="";
		if(RegisterUtil.isEmail(loginName)){
			Map<String,String> info = new HashMap<String,String>();
			info.put("type", "2");
			info.put("userName", userName);
			info.put("loginName", loginName);
			info.put("pwd", pwd);
			content = MailUtil.getMailContent(info);
		}else if (RegisterUtil.isMobileNo(loginName)){
			content="感谢您注册ERP，您的登录帐号为："+loginName+"、登录密码为："+pwd+"。请保管好您的帐号及密码，避免被人盗用。咨询客服400-066-0000";
		}
		return this.sendMsg(loginName,subject, content);
	}
}
