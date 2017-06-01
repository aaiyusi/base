<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/resources/platform/inc.jsp"%>
<!DOCTYPE html>
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
	    <script src="${ctx.path}/resources/platform/script/login/login.js?v=${ctx.versions}"></script>
	    <script src="${ctx.path}/resources/js/common/base64.js?v=${ctx.versions}"></script>
	    <script src="${ctx.path}/resources/components/jquery/plugins/jquery.cookie.js?v=${ctx.versions}"></script>
	     <!--[if lt IE 9]>
	    <script>
	        alert('本系统已不支持IE6-8，请使用谷歌、火狐等浏览器\n或360、QQ等国产浏览器的极速模式浏览本页面！');
	    </script>
	    <![endif]-->
	    <script>
	        if (window.top !== window.self) {
	            window.top.location = window.location;
	        }
	    </script>
	</head>
<body>
<div class="header">
  <div class="layout">
    <%--  <a href="#" class="logo"><img src="${ctx.path}/resources/images/logo_07.png" /></a> --%>
  </div>
</div>

<div class="loginbody">
<form id="loginForm" method="post" action="${ctx.path}/platform/pm/login.do">
  <div class="logincon">
    <%--  <div class="loginimg"><img src="${ctx.path}/resources/images/loginimg_10.png" alt="img"/></div> --%>
     <div class="loginwrap">
       <div class="logintit">
         <h2>登录<font color="red" style="font-size: 12px;font-weight: normal;"></font></h2>
       </div>
       <div class="loginerror"><span id="errorMsg" >${errorMsg}</span></div>
       <div class="textcon focus">
         <label class="midicon user_icon"></label><input type="text"  id="loginName" name="loginName" maxlength="25"      data-msg-required="请输入手机号码/邮箱"  class="text" placeholder="请输入手机号/邮箱"/>
       </div>
       <div class="textcon">
         <label class="midicon password_icon"></label><input type="password" type="password" maxlength="16"   data-msg-required="请输入登录密码"  id="pwd" name="pwd" class="text" placeholder="请输入登录密码"/>
       </div>
       <div class="passwordope_con">
         <label id="labelRemPwd" onclick="toggleRemberPwd(this)" class="checkbox"><i></i><em>记住密码</em></label>
         <!--<a href="javascript:void(0)" data-target="#forgetPS" data-toggle="modal" class="forgetpass">忘记密码？</a> -->
       </div>
       <div class="loginbtn overflow">
         <button type="button" onclick="loginCheck($('#loginForm'));" class="submit_btn">登 录</button>
         <button type="button" class="registered_btn" onclick="window.location='${ctx.path}/resources/platform/views/register.jsp'">注 册</button>
       </div>
       <div class="dockingplat_con">
         <span>已对接的平台</span>
       </div>
       <div class="dockingplat_logo">
         <ul>
           <li><img src="${ctx.path}/resources/images/dockingplat_logo01_03.png" alt="img"/></li>
           <li><img src="${ctx.path}/resources/images/dockingplat_logo02_05.png" alt="img"/></li>
         </ul>
       </div>
     </div>
  </div>
  </form>
</div>


<div class="loginfooter">
  <p>© 2016 All Rights Reserved</p>
</div>

<div id="forgetPS" class="modal fade in" aria-hidden="false" style="display: none;">
	<div class="modal-dialog">
		<form id="forgetPSForm" class="modal-content form-horizontal form-bordered advance-search" action="">
			<div class="modal-header text-center pl0 pr0" style="border-bottom:0;">
				<button type="button" class="close mr5" data-dismiss="modal">×</button>
				<div class="ico-key" style="font-size:30px;"></div>
				<h4 class="modal-title text-primary">找回密码</h4>
				<ul class="nav nav-tabs nav-justified mt10 semibold">
					<li class=""><a data-toggle="tab" href="#mobile-forget">通过邮箱/手机找回密码<font color="red" style="font-size: 12px;font-weight: normal;"><span id="spanForgetPwd"></span></font></a></li>
				</ul>
			</div>
			<div class="tab-content">
				<div class="tab-pane active" id="mobile-forget">
					<div class="form-group nm">
						<label class="col-sm-3 control-label">邮箱/手机</label>
						<div class="col-sm-8">
							<div class="input-group">
								<input type="text" maxlength="25" isMobileOrEmail="true" required placeholder="请输入手机号/邮箱" class="form-control" id="loginName" name="loginName">
								<span class="input-group-btn">
									<button type="button" class="btn btn-primary" onclick="generateCheckCodeRretrieve(this)" id="btn-code"><span id="timeLeft">获取验证码</span></button>
								</span>
							</div>
						</div>
					</div>
					<div class="form-group nm">
						<label class="col-sm-3 control-label">验证码</label>
						<div class="col-sm-3">
							<input type="text" id="code" name="code" maxlength="4" number="true" required data-msg-required="请输入验证码" placeholder="请输入验证码"  class="form-control" style="width:278px;">
						</div>
					</div>
					<div class="modal-footer mt10">
						<button type="button" onclick="checkRretrieve()" class="btn btn-success">确定</button>
						<button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
					</div>
				</div>
			</div>
		</form>
	</div>
</div>
	<%-- 
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
	                </div>
	            </div>
	            <div class="col-sm-5">
	                <form id="loginForm" method="post" action="${ctx.path}/platform/pm/login.do">
	                    <h4 class="no-margins">登录：<font color="red" style="font-size: 12px;font-weight: normal;">${errorMsg}</font></h4>
	                    <p class="m-t-md">登录到互联网+平台</p>
	                    <input type="text" name="loginName" value="18622173721" class="form-control uname" placeholder="用户名" />
	                    <input type="password" name="pwd" value="123456" class="form-control pword m-b" placeholder="密码" />
	                    <a href="javascript:;"></a><a href="javascript:;">忘记密码了？</a>
	                    &nbsp;&nbsp;&nbsp;&nbsp;<a target="_blank" href="${ctx.path}/resources/platform/views/register.jsp">注册</a>
	                    <button class="btn btn-success btn-block">登录</button>
	                </form>
	            </div>
	            <div class="col-sm-5">
	           		 <div class="register_bottom">还没有帐号？<a target="_blank" href="${ctx.path}/resources/platform/views/register.jsp">立即注册</a></div>
	            </div>
	        </div>
	        <div class="signup-footer">
	            <div class="pull-left">
	                &copy; 2016 All Rights Reserved.
	            </div>
	        </div>
	    </div> --%>
</body>
</html>
