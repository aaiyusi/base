package com.samton.erp.api.pm.controller;

import java.awt.Font;
import java.awt.Graphics2D;
import java.awt.image.BufferedImage;
import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;
import javax.imageio.ImageIO;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.samton.erp.api.pm.bean.CheckCodeBean;
import com.samton.erp.api.pm.constant.ErpPmConstant;
import com.samton.erp.api.pm.constant.ErpPmExpCodeConstant;
import com.samton.erp.api.pm.constant.PmConstant;
import com.samton.erp.api.pm.service.IErpPmService;
import com.samton.erp.api.pm.util.IdentifyingCode;
import com.samton.platform.common.bean.param.JqParamBean;
import com.samton.platform.framework.base.SdkBaseController;
import com.samton.platform.framework.exception.ControllerException;
import com.samton.platform.framework.exception.constant.ExpCodeConstant;
import com.samton.platform.framework.mybatis.pagination.Pagination;
import com.samton.platform.framework.util.CurrentUtil;
import com.samton.platform.framework.util.NetworkUtil;
import com.samton.platform.pm.bean.entity.TPlatformPmUser;
import com.samton.platform.pm.constant.PmExpCodeConstant;
import com.samton.platform.pm.constant.PmStateConstant;
import com.samton.platform.pm.service.IPmService;

@Controller
@RequestMapping("/api/pm")
public class ErpPmController extends SdkBaseController{

	@Resource
	private IPmService pmService;
	@Resource
	private IErpPmService erpPmService;
	
	@RequestMapping("/checkCodePic")   
    @ResponseBody
	public void checkCodePic() throws Exception{
		HttpServletResponse response=this.getResponse();
        //设置不缓存图片  
        response.setHeader("Pragma", "No-cache");
        response.setHeader("Cache-Control", "No-cache");
        response.setDateHeader("Expires", 0);
        //指定生成的相应图片  
        response.setContentType("image/jpeg");
        IdentifyingCode idCode = new IdentifyingCode();  
        BufferedImage image =new BufferedImage(idCode.getWidth() , idCode.getHeight() , BufferedImage.TYPE_INT_BGR) ;  
        Graphics2D g = image.createGraphics();  
        //定义字体样式  
        Font myFont = new Font("黑体" , Font.BOLD , 26);  
        //设置字体  
        g.setFont(myFont);  
          
        g.setColor(idCode.getRandomColor(200 , 250));  
        //绘制背景  
        g.fillRect(0, 0, idCode.getWidth() , idCode.getHeight());  
          
        g.setColor(idCode.getRandomColor(180, 200));  
        idCode.drawRandomLines(g, 160);  
        String checkCodePic=idCode.drawRandomString(4, g);  
        this.setSessionAttribute(PmConstant.PICTURE_CHECK_CODE, checkCodePic);
        g.dispose();  
        ImageIO.write(image, "JPEG", response.getOutputStream());
	}

	
	/**
	 * 
	 * @Description: 发送注册验证码
	 * @param @param loginName
	 * @param @param picCheckCode
	 * @param @return
	 * @param @throws Exception   
	 * @return Map<String,Object>  
	 * @throws
	 * @author yokoboy
	 * @date 2016年4月15日
	 */
	@RequestMapping("/generateCheckCodeRegister")   
    @ResponseBody
	public Map<String, Object> generateCheckCodeRegister(String loginName,String picCheckCode) throws Exception{
			if(StringUtils.isEmpty(loginName)){
				throw new ControllerException(ExpCodeConstant.PARAMTER_ILLEGAL, "generateCheckCode--->登录名为空",false);
			}
			if(!pmService.isLoginNameUnique(loginName)){
				throw new ControllerException(PmExpCodeConstant.PM_LOGINNAME_EXIST_ERROR, null,false);
			}
			CheckCodeBean checkCodeBean=(CheckCodeBean) this.getSessionAttribute(ErpPmConstant.REGISTER_CHECK_CODE);
			if(checkCodeBean==null){
				checkCodeBean=erpPmService.sendCheckCodeMsg(loginName);
				this.setSessionAttribute(ErpPmConstant.REGISTER_CHECK_CODE, checkCodeBean);
			}else {
				long checkCodeTime=checkCodeBean.getTime();
				long currentTime=System.currentTimeMillis();
				//超过1min，重新生成checkCode
				if(currentTime-checkCodeTime>60*1000){
					checkCodeBean=erpPmService.sendCheckCodeMsg(loginName);
					this.setSessionAttribute(ErpPmConstant.REGISTER_CHECK_CODE, checkCodeBean);
				}else {				
					throw new ControllerException(ErpPmExpCodeConstant.GENERATE_CHECK_CODE_INTERVAL_TOO_SHORT, true);
				}
			}
			return this.getResultMap(true, checkCodeBean);
			//return this.getResultMap(true);
	}
	
	/**
	 * 
	 * @Description: 注册
	 * @param @param loginName
	 * @param @param checkCode
	 * @param @param pwd
	 * @param @return
	 * @param @throws Exception   
	 * @return Map<String,Object>  
	 * @throws
	 * @author yokoboy
	 * @date 2016年4月18日
	 */
	@RequestMapping("/registerUser")   
    @ResponseBody
	public Map<String, Object> registerUser(String loginName,String checkCode,String pwd) throws Exception{
		//基础参数非空验证
		if(StringUtils.isEmpty(loginName)||StringUtils.isEmpty(pwd)){
			throw new ControllerException(ExpCodeConstant.PARAMTER_ILLEGAL, "registerUser--->参数非法",false);
		}
		//用户名已经存在
		if(!pmService.isLoginNameUnique(loginName)){
			throw new ControllerException(PmExpCodeConstant.PM_LOGINNAME_EXIST_ERROR, "registerUser--->参数非法",false);
		}
		//判断是否通过验证
		CheckCodeBean checkCodeBean=(CheckCodeBean) this.getSessionAttribute(ErpPmConstant.REGISTER_CHECK_CODE);
		if(checkCodeBean==null || ( checkCodeBean!=null && checkCodeBean.isCheckFlag() ) ){
			throw new ControllerException(ErpPmExpCodeConstant.CHECK_CODE_INVALID, null,false);
		}
		boolean checkFlag=checkCodeBean!=null&&checkCodeBean.getLoginName().equals(loginName)&&checkCode.equalsIgnoreCase(checkCodeBean.getCheckCode()) && !checkCodeBean.isCheckFlag();
		if(!checkFlag){
			throw new ControllerException(ErpPmExpCodeConstant.CHECK_CODE_ERROR, null,false);
		}else{
			checkCodeBean.setCheckFlag(true);
		}
		TPlatformPmUser user = new TPlatformPmUser();
		user.setLoginName(loginName);
		user.setPwd(pwd);
		user.setRegisterAddress(NetworkUtil.getIpAddress(request));
		user.setRegisterType(PmStateConstant.REGISTER_TYPE_PC);
		int result = erpPmService.registerUser(user);
		if(result>0){
			//注册成功后短信邮箱提示
			//erpPmService.sendSuccesMsg(loginName,loginName,pwd);
		}
		return this.getResultMap(result > 0 ? true : false);
	}
	
	/**
	 * 
	 * @Description: 获取当前登录企业用户信息
	 * @param @return
	 * @param @throws Exception   
	 * @return Map<String,Object>  
	 * @throws
	 * @author yokoboy
	 * @date 2016年4月19日
	 */
	@RequestMapping("/getCurrentUser")
	@ResponseBody
	public Map<String, Object> getCurrentUser() throws Exception {
		long userId = CurrentUtil.getCurrentUser().getUserId();
		TPlatformPmUser user = pmService.getUserById(userId);
		return this.getResultMap(user!=null, user);
	}
	
	/**
	 * 
	 * @Description: 更新当前个人用户信息
	 * @param @param user
	 * @param @return
	 * @param @throws Exception   
	 * @return Map<String,Object>  
	 * @throws
	 * @author yokoboy
	 * @date 2016年4月19日
	 */
	@RequestMapping("/updateCurrentUserInfo")
	@ResponseBody
	public Map<String, Object> updateCurrentUserInfo(TPlatformPmUser user) throws Exception {
		TPlatformPmUser pmUser = new TPlatformPmUser();
		pmUser.setUserId( CurrentUtil.getCurrentUser().getUserId() );
		pmUser.setEnterpriseId( CurrentUtil.getCurrentUser().getEnterpriseId());
		pmUser.setUserName(user.getUserName());
		pmUser.setMobilePhone(user.getMobilePhone());
		pmUser.setEmail(user.getEmail());
		int result = pmService.updatePmUser(pmUser);
		return this.getResultMap(result>0);
	}
	
	/**
	 * 
	 * @Description: 更新当前用户密码
	 * @param @param oldPwd
	 * @param @param pwd
	 * @param @return
	 * @param @throws Exception   
	 * @return Map<String,Object>  
	 * @throws
	 * @author yokoboy
	 * @date 2016年4月19日
	 */
	@RequestMapping("/updateCurrentPwd")
	@ResponseBody
	public Map<String, Object> updateCurrentPwd(String oldPwd,String pwd) throws Exception {
		//基础参数非空验证
		if(StringUtils.isEmpty(oldPwd)||StringUtils.isEmpty(pwd) ){
			throw new ControllerException(ExpCodeConstant.PARAMTER_ILLEGAL, "registerUser--->参数非法",false);
		}
		int result = pmService.updateCurrentPwd(oldPwd, pwd);
		return this.getResultMap(result>0);
	}

	
	/**
	 * 
	 * @Description: 找回密码生产验证码
	 * @param @param loginName
	 * @param @return
	 * @param @throws Exception   
	 * @return Map<String,Object>  
	 * @throws
	 * @author yokoboy
	 * @date 2016年4月19日
	 */
	@RequestMapping("/generateCheckCodeForgetPwd")   
    @ResponseBody
	public Map<String, Object> generateCheckCodeForgetPwd(String loginName) throws Exception{
		if(StringUtils.isEmpty(loginName)){
			throw new ControllerException(ExpCodeConstant.PARAMTER_ILLEGAL, "retrievePwd--->登录名为空",false);
		}
		if(pmService.isLoginNameUnique(loginName)){
			throw new ControllerException(PmExpCodeConstant.NO_LOGIN_NAME, null, false);
		}
		Map<String, Object> jo=new HashMap<>();
		CheckCodeBean checkCodeBean=(CheckCodeBean) this.getSessionAttribute(ErpPmConstant.RETRIEVE_PWD_CHECK_CODE);
		if(checkCodeBean==null){
			checkCodeBean=erpPmService.sendCheckCodeMsgForPwd(loginName);
			this.setSessionAttribute(ErpPmConstant.RETRIEVE_PWD_CHECK_CODE, checkCodeBean);
			jo.put("rs",1);
			return this.getResultMap(checkCodeBean);
		}else {
			long checkCodeTime=checkCodeBean.getTime();
			long currentTime=System.currentTimeMillis();
			//超过1min，重新生成checkCode
			if(currentTime-checkCodeTime>60*1000){
				checkCodeBean=erpPmService.sendCheckCodeMsgForPwd(loginName);
				this.setSessionAttribute(ErpPmConstant.RETRIEVE_PWD_CHECK_CODE,checkCodeBean);
				jo.put("rs",1);
				return this.getResultMap(checkCodeBean);
			}else {
				throw new ControllerException(ErpPmExpCodeConstant.GENERATE_CHECK_CODE_INTERVAL_TOO_SHORT, null,false);
			}
		}
	}
	
	/**
	 * 
	 * @Description: 找回密码(校验验证码是否正确)
	 * @param @param loginName
	 * @param @param checkCode
	 * @param @return
	 * @param @throws Exception   
	 * @return Map<String,Object>  
	 * @throws
	 * @author yokoboy
	 * @date 2016年4月19日
	 */
	@RequestMapping("/retrievePwdCheck")   
    @ResponseBody
	public Map<String, Object> retrievePwdCheck(String loginName,String checkCode) throws Exception{
		if(StringUtils.isEmpty(loginName)||StringUtils.isEmpty(checkCode)){
			throw new ControllerException(ExpCodeConstant.PARAMTER_ILLEGAL, "retrievePwdCheck--->非法参数",false);
		}
		//判断验证码是否正确
		CheckCodeBean checkCodeBean=(CheckCodeBean) this.getSessionAttribute(ErpPmConstant.RETRIEVE_PWD_CHECK_CODE);
		if(checkCodeBean==null || ( checkCodeBean!=null && checkCodeBean.isCheckFlag() ) ){
			throw new ControllerException(ErpPmExpCodeConstant.CHECK_CODE_INVALID, null,false);
		}
		boolean checkFlag= checkCodeBean.getLoginName().equals(loginName)&&checkCode.equalsIgnoreCase(checkCodeBean.getCheckCode()) && !checkCodeBean.isCheckFlag();
		if(!checkFlag){
			throw new ControllerException(ErpPmExpCodeConstant.CHECK_CODE_ERROR, null,false);
		}else{
			checkCodeBean.setCheckFlag(true);
		}
		return this.getResultMap(checkFlag);
	}
	
	/**
	 * 
	 * @Description: 找回密码（重置密码）
	 * @param @param loginName
	 * @param @param checkCode
	 * @param @return
	 * @param @throws Exception   
	 * @return Map<String,Object>  
	 * @throws
	 * @author yokoboy
	 * @date 2016年4月19日
	 */
	@RequestMapping("/retrievePwd")   
    @ResponseBody
	public Map<String, Object> retrievePwd(String loginName,String pwd) throws Exception{
		CheckCodeBean checkCodeBean=(CheckCodeBean) this.getSessionAttribute(PmConstant.RETRIEVE_PWD_CHECK_CODE);
		if(StringUtils.isEmpty(loginName)||StringUtils.isEmpty(pwd)||!loginName.equals(checkCodeBean.getLoginName())){
			throw new ControllerException(ExpCodeConstant.PARAMTER_ILLEGAL, "retrievePwd--->非法参数", false);
		}
		if(checkCodeBean==null||!checkCodeBean.isCheckFlag()){
			throw new ControllerException(ErpPmExpCodeConstant.CHECK_CODE_INVALID,false);
		}
		Long userId = CurrentUtil.getCurrentUser().getUserId();
		TPlatformPmUser user=pmService.getUserById(userId) ;
		if(!loginName.equals(user.getLoginName())){
			throw new ControllerException(ErpPmExpCodeConstant.CHECK_CODE_INVALID,false);
		}
		int result = pmService.updateCurrentPwd(null, pwd);
		return this.getResultMap(result>0);
	}
	
 
	/**
	 * 
	 * @Description: 查询某个企业所有用户的信息
	 * @param @param paramBean
	 * @param @param pmUser
	 * @param @return
	 * @param @throws Exception   
	 * @return Map<String,Object>  
	 * @throws
	 * @author yokoboy
	 * @date 2016年4月21日
	 */
	@RequestMapping("/queryUsers")
	@ResponseBody
	public Map<String, Object> queryUsers(JqParamBean paramBean,
			TPlatformPmUser pmUser) throws Exception {
		pmUser.setSystemId(CurrentUtil.getCurrentSystemId());
		pmUser.setState(PmStateConstant.ADD);
		paramBean.setSearch(pmUser);
		paramBean.setEnterpriseId(pmUser.getEnterpriseId());
		Pagination<TPlatformPmUser> users = pmService.queryUsers(paramBean);
		return this.getResultMap(true, users);
	}

	
}
