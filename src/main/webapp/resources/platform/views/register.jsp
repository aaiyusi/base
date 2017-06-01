 <%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/resources/platform/inc.jsp"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
	    <title>电商ERP服务平台</title>
	    <meta name="keywords" content="">
	    <meta name="description" content="">
	    <link href="${ctx.path}/resources/css/reset.css?v=${ctx.versions}" rel="stylesheet">
	    <link href="${ctx.path}/resources/css/common.css?v=${ctx.versions}" rel="stylesheet">
	    <link href="${ctx.path}/resources/css/login.css?v=${ctx.versions}" rel="stylesheet">
	    <script src="${ctx.path}/resources/platform/script/login/register.js?v=${ctx.versions}"></script>
	</head>
	
<body class="minwidth1000 minheight1000">
<div class="header">
  <div class="layout">
     <a href="#" class="logo"><img src="${ctx.path}/resources/images/logo_07.png" /></a>
  </div>
</div>

<div class="loginbody">
  <form onsubmit="return registeCheck(this);"  role="form" id="loginForm" method="post" action="${ctx.path}/platform/pm/login.do">
  <div class="logincon">
     <div class="loginimg"><img src="${ctx.path}/resources/images/loginimg_10.png" alt="img"/></div>
     <div class="loginwrap">
       <div class="logintit">
         <h2>注册</h2>
       </div>
       <div class="loginerror"><span id="errorMsg" >${errorMsg}</span></div>
       <div class="textcon focus">
         <label class="midicon user_icon"></label><input type="text" class="text" id="loginName"  name="loginName"   data-msg-required="请输入手机/邮箱！" placeholder="请输入手机号/邮箱"/> <button type="button" onclick="generateCheckCode(this)" class="codebtn"><span id="timeLeft">获取验证码</span></button> 
       </div>
       <div class="textcon">
         <label class="midicon code_icon"></label><input type="text" maxlength="4" class="text" id="code" name="code" placeholder="请输入验证码"  data-msg-required="请输入验证码！" />
       </div> 
       <div class="textcon">
         <label class="midicon password_icon"></label><input type="password" class="text" id="pwd" name="pwd"  placeholder="请输入密码"   data-msg-required="请输入密码!" />
       </div>
       <div class="textcon">
         <label class="midicon password_icon"></label><input type="password" class="text" id="repwd" name="repwd" placeholder="请输入确认密码"   data-msg-required="请输入确认密码！" />
       </div>
       <div   class="loginbtn pdt0">
         <button type="submit" class="registered_submit">注 册</button>
       </div>
       <div class="loginbottom">已有账号，<a href="${ctx.path}/resources/platform/views/login.jsp" >立即登录</a></div>
     </div>
  </div>
  </form>
</div>

<div class="loginfooter">
  <p>© 2016 All Rights Reserved</p>
</div>
</body>
	<%-- <body class="signin">
	    <div class="signinpanel">
	        <div class="row">
	            <div class="col-sm-7">
	                <div class="signin-info">
	                    <div class="logopanel m-b">
	                        <h1>[ 电商ERP服务平台 ]</h1>
	                    </div>
	                    <div class="m-b"></div>
	                    <h4>欢迎使用 <strong>电商ERP服务平台</strong></h4>
	                    <ul class="m-b">
	                        <li><i class="fa fa-arrow-circle-o-right m-r-xs"></i> 优势一</li>
	                        <li><i class="fa fa-arrow-circle-o-right m-r-xs"></i> 优势二</li>
	                        <li><i class="fa fa-arrow-circle-o-right m-r-xs"></i> 优势三</li>
	                        <li><i class="fa fa-arrow-circle-o-right m-r-xs"></i> 优势四</li>
	                        <li><i class="fa fa-arrow-circle-o-right m-r-xs"></i> 优势五</li>
	                    </ul>
<!-- 	                    <strong>还没有账号？ <a href="#">立即注册&raquo;</a></strong> -->
	                </div>
	            </div>
	            <div class="col-sm-5">
	                <form onsubmit="return registeCheck(this);"  role="form" id="loginForm" method="post" action="${ctx.path}/platform/pm/login.do">
	                    <h4 class="no-margins">注册：<font color="red" style="font-size: 12px;font-weight: normal;"><span id="errorMsg"></span></font></h4>
	                    <p class="m-t-md"><a href="${ctx.path}/resources/platform/views/login.jsp">登录到互联网+平台</a></p>
	                    <input maxlength="50" type="text" id="loginName" name="loginName" placeholder="手机/邮箱" class="form-control uname"  required data-msg-required="请输入手机/邮箱！" />
						<button style="height: 45px;" type="button" class="btn bnt-default " onclick="generateCheckCode(this)" id="btn-code1"><span id="timeLeft">获取验证码</span></button>
	                    <input maxlength="4" type="text" id="code" name="code" placeholder="验证码"   required data-msg-required="请输入验证码！" class="form-control pword m-b"  />
	                    <input maxlength="16" type="password" id="pwd" name="pwd" placeholder="密码"  required data-msg-required="请输入密码！"  class="form-control pword m-b"  />
	                    <input maxlength="16" type="password" id="repwd" name="repwd"  placeholder="确认密码"  required data-msg-required="请输入确认密码！" class="form-control pword m-b" />
	                    <!-- <a href="javascript:;"></a><a href="javascript:;">忘记密码了？</a> -->
	                    <button type="submit" class="btn btn-success btn-block">注册</button>
	                </form>
	            </div>
	            <div class="col-sm-5">
	           		 <div class="register_bottom">还没有帐号？<a ng-click="goRegister()">立即注册</a></div>
	            </div>
	        </div>
	        <div class="signup-footer">
	            <div class="pull-left">
	                &copy; 2016 All Rights Reserved.
	            </div>
	        </div>
	    </div>
	</body> --%>
</html>
