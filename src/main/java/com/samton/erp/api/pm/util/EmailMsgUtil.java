package com.samton.erp.api.pm.util;

import java.util.Map;

import org.apache.commons.lang.StringUtils;

public class EmailMsgUtil {
	
	/**
	 * 邮件发送模版
	 * @param info.type 类型1，注册验证码、2，完成注册、3，找回密码、4、授权验证 5加入公司申请  6加入公司申请成功
	 * rcc_qq qq第三方注册获取验证码  rcc_wb 第三方微博注册  rcc_wx第三方微信注册 rcc_join_company 申请加入公司
	 */
	public static String getMailContent(Map<String,String> info){
		String type = info.get("type");
		StringBuffer msg = new StringBuffer();
		if("1".equals(type)||"rcc_qq".equals(type)||"rcc_wx".equals(type)||"rcc_wb".equals(type)){
			msg.append("<p style='line-height:30px;'>尊敬的用户,</p>");
			msg.append("<p style='line-height:30px;'> <span style='font-size: 20px;'>"+info.get("code")+"</span> 为您的营销通验证码，请您尽快完成注册。</p>");
		}else if("3".equals(type)){
			msg.append("<p style='line-height:30px;'>亲爱的"+info.get("userName")+"：</p>");
			msg.append("<p style='line-height:30px;'>欢迎使用EOC营销通找回密码功能。</p>");
			msg.append("<p style='line-height:30px;'>您此次找回密码的验证码是： <span style='font-size: 20px;'>"+info.get("code")+"</span> ，请在30分钟内在找回密码页填入此验证码。</p>");
			msg.append("<p style='line-height:30px;'>如果您并未发过此请求，则可能是因为其他用户在尝试重设密码时误输入了您的电子邮件地址而使您收到这封邮件，那么您可以放心的忽略此邮件，无需进一步采取任何操作。</p>");
		}else if("4".equals(type)){
			//验证邮箱绑定
			msg.append("<p style='line-height:30px;'>亲爱的"+info.get("userName")+"：</p>");
			msg.append("<p style='line-height:30px;'>欢迎使用EOC营销通邮箱绑定功能，您的邮箱已授权成功！</p>");
		}else if("5".equals(type)||"rcc_join_company".equals(type)){
			//加入公司申请码
			msg.append("<p style='line-height:30px;'>尊敬的用户,</p>");
			msg.append("<p style='line-height:30px;'> <span style='font-size: 20px;'>"+info.get("code")+"</span> 为您的营销通验证码，请您尽快完成加入公司申请。</p>");
		}else if("6".equals(type)){
			//成功加入公司
			String passwordInf = StringUtils.isNotEmpty(info.get("pwd"))?("，初始密码为："+info.get("pwd")):"";
			msg.append("<p style='line-height:30px;'>"+info.get("userName")+"，您好。</p>");
			msg.append("<p style='line-height:30px;'>恭喜您成功加入公司("+info.get("enterpriseCode")+") ！</p>");
			msg.append("<p style='line-height:30px;'>您的登录帐号为："+info.get("loginName")+passwordInf+"。</p>");
			msg.append("<p style='line-height:30px;'>请保管好您的帐号及密码，避免被他人盗用。</p>");
		}else if("7".equals(type)){
			//新增用户
			String passwordInf = StringUtils.isNotEmpty(info.get("pwd"))?("，初始密码为：("+info.get("pwd"))+")":"，初始密码为原帐户密码";
			msg.append("<p style='line-height:30px;'>【EOC营销通】("+info.get("userName")+")邀请您加入("+info.get("enterpriseName")+")，</p>");
			msg.append("<p style='line-height:30px;'>您的登录帐号：("+info.get("loginName")+")"+passwordInf+"。感谢您的使用，谢谢！</p>");
			msg.append("<p style='line-height:30px;'>登录地址：www.eoc.cn。客服支持电话：400-066-0000。</p>");
		}else{
			msg.append("<p style='line-height:30px;'>"+info.get("userName")+"，您好。</p>");
			msg.append("<p style='line-height:30px;'>恭喜您成功注册EOC营销通！</p>");
			msg.append("<p style='line-height:30px;'>您的登录帐号为："+info.get("loginName")+"，初始密码为："+info.get("pwd")+"。</p>");
			msg.append("<p style='line-height:30px;'>请保管好您的帐号及密码，避免被他人盗用。</p>");
		}
//		String path = PropertiesUtil.getCrmProperty("crm_server");
		String path = "";
		String content = "<!doctype html>"+
				"<html>"+
				"<head>"+
				"<meta http-equiv='Content-Type' content='text/html; charset=utf-8'/>"+
				"<meta http-equiv='X-UA-Compatible' content='IE=edge,chrome=1'>"+
				"</head>"+
				"<body>"+
				  "<style>.maildiv *{margin:0; padding:0;} .green_button {display: inline-block;height: 32px;line-height: 29px;padding: 0 20px;background-color: #4d72a9;border: 1px solid #4d72a9;border-radius: 4px;font-size: 12px; color: #FFF;cursor: pointer;}</style>"+
				  "<div style='width:787px; margin:20px auto;' class='maildiv'>"+
				    "<div style='height:64px; background-color:#4d72a9; border-top-left-radius:3px; border-top-right-radius:3px;'>"+
				      "<a href='javascript:' style='float:left; margin-top:20px; margin-left:15px;'><img src='"+path+"resources/images/logo_08.png'/>"+"</a>"+
				    "</div>"+
				    "<div style='padding:10px 36px; border:1px solid #f8f8f8; overflow:hidden;'>"+
				      "<div style='clear:both'>"+
				          "<div style=' float:left; width:460px; display:inline;'>"+
				          msg.toString()+
				          "</div>"+
				          "<div style='float:right; display:inline; margin-top:10px;'>"+
				            "<a href='"+path+"' "
				            + "target='_blank'><input type='button' class='green_button' value='登录营销通' /></a>"+
				          "</div>"+
				      "</div>"+
				      "<div style='clear:both; padding-top:20px;'>"+
				        "<a href='javascript:'><img src='"+path+"resources/images/login.png' style='display:block; width:100%;'/></a>"+
				      "</div>"+
				    "</div>"+
				    "<div style='height:57px; background-color:#f8f8f8; padding-top:8px; padding-left:15px;'>"+
				      "<p style='line-height:20px;'>本邮件由系统自动发出，请勿回复</p>"+
				      "<p style='line-height:20px;'>如有任何疑问，请来电咨询 400-066-0000</p>"+
				    "</div>"+
				  "</div>"+  
				"</body>"+
				"</html>";
		return content;
	}

}
