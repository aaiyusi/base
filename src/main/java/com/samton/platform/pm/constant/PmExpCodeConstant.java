package com.samton.platform.pm.constant;

import org.springframework.stereotype.Component;

import com.samton.platform.framework.exception.constant.ExpCodeConstant;

//业务级别按模块自己划分，第一位数值位为moduleId，moduleId参考t_crm_sys_module表，1\2\3\4\5\6\7\8\9依次递增
@Component
public class PmExpCodeConstant extends ExpCodeConstant{
	
	public static final String PM_SESSION_EXPIRE="100";
	public static final String PM_LOGINNAME_PWD_ERROR="101";
	public static final String PM_MENU_HAS_CHILDREN_DEL_ERROR="102";
	public static final String PM_LOGINNAME_FORMAT_ERROR="103";
	public static final String PM_MENUCODE_REPEAT_ERROR="104";
	public static final String PM_MENU_HAS_CHILDREN_DISABLE_ERROR="105";
	public static final String PM_MANAGER_USER_DEL_DEL_ERROR="106";
	public static final String PM_LOGINNAME_EXIST_ERROR="107";
	public static final String PM_ROLENAME_ERROR="108";
	public static final String PM_USERNAME_NULL="109";
	public static final String PM_PASSWORD_ERROR="111";
	public static final String NO_LOGIN_NAME="112";
//	public static final String PM_ACCESS_DENIED="902";
//	public static final String NO_REGISTER_CHECK_CODE="903";
//	public static final String CHECK_CODE_INVALID="904";
//	public static final String GENERATE_CHECK_CODE_INTERVAL_TOO_SHORT="905";
//	public static final String PICTURE_CHECK_CODE_ERROR="906";
//	public static final String LOGIN_NAME_IS_NOT_UNIQUE="907";
//	public static final String LOGIN_NAME_OR_PWD_ERROR="908";
//	public static final String USER_IS_LOCK="909";
//	public static final String CHECK_CODE_ERROR="911";
//	public static final String ORIGINAL_PWD_ERROR="912";
//	public static final String USER_NOT_ACTIVITY="913";
//	public static final String OPEN_ID_AREADY_CONNECT="914";
//	public static final String AREADY_CONNECT="915";
//	public static final String PM_ACCESS_EDIT="916";
//	public static final String PM_ACCESS_DEL="917";
//	public static final String NO_CHECK_CODE="918"; 
//	public static final String ERROR_CHECK_CODE="919"; 
//	public static final String PERSONAL_TIME_IS_NULL="920";
	
	static{
		msgMap.put(PM_SESSION_EXPIRE, "登录超时，请重新登录");
		msgMap.put(PM_LOGINNAME_PWD_ERROR, "登录名密码错误");
		msgMap.put(PM_MENU_HAS_CHILDREN_DEL_ERROR, "当前菜单下面有子菜单，不可删除");
		msgMap.put(PM_LOGINNAME_FORMAT_ERROR, "登录名格式错误");
		msgMap.put(PM_MENUCODE_REPEAT_ERROR, "菜单编码不唯一");
		msgMap.put(PM_MENU_HAS_CHILDREN_DISABLE_ERROR, "当前菜单下面有子菜单，不可禁用");
		msgMap.put(PM_MANAGER_USER_DEL_DEL_ERROR, "无法删除系统管理员用户");
		msgMap.put(PM_LOGINNAME_EXIST_ERROR, "登录名已被使用");
		msgMap.put(PM_ROLENAME_ERROR, "角色名不能为空");
		msgMap.put(PM_USERNAME_NULL, "用户名称不能为空");
		msgMap.put(PM_PASSWORD_ERROR, "密码错误");
		msgMap.put(NO_LOGIN_NAME,"当前账号未注册");
//		msgMap.put(PM_ACCESS_DENIED, "抱歉，您没有操作权限");
//		msgMap.put(PM_ACCESS_EDIT, "抱歉，您没有编辑权限");
//		msgMap.put(PM_ACCESS_DEL, "抱歉，您没有删除权限");
//		
//		msgMap.put(NO_REGISTER_CHECK_CODE, "未生成注册验证码");
//		msgMap.put(CHECK_CODE_INVALID, "验证码超时，请重新获取");
//		msgMap.put(GENERATE_CHECK_CODE_INTERVAL_TOO_SHORT, "请在一分钟后再重新获取验证码");
//		msgMap.put(PICTURE_CHECK_CODE_ERROR, "图片识别码错误");
//		msgMap.put(LOGIN_NAME_IS_NOT_UNIQUE, "该用户已注册");
//		msgMap.put(LOGIN_NAME_OR_PWD_ERROR, "您的用户名或密码输入有误，请重新输入");
//		msgMap.put(USER_IS_LOCK, "用户被锁定，请联系管理员！");
//		msgMap.put(CHECK_CODE_ERROR, "请输入正确的验证码");
//		msgMap.put(ORIGINAL_PWD_ERROR, "原密码错误");
//		msgMap.put(USER_NOT_ACTIVITY, "用户未激活，请联系管理员！");
//		msgMap.put(AREADY_CONNECT, "CRM帐号已经关了第三方帐号，请先解除关联后再绑定！");
//		msgMap.put(OPEN_ID_AREADY_CONNECT, "第三方帐号已经关联了CRM帐号，请勿重复关联！");		
//		msgMap.put(NO_CHECK_CODE, "未生成验证码！");
//		msgMap.put(ERROR_CHECK_CODE, "验证码不正确！");
//		msgMap.put(PERSONAL_TIME_IS_NULL, "所属时间不能为空！");
	}
	
}
