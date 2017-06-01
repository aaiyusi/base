 <%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/resources/platform/inc.jsp"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<meta charset="UTF-8">
		<title>登录</title>
		<link href="${ctx.path}/resources/platform/css/login.css?v=1.0" rel="stylesheet">
		<script type="text/javascript">
			function loginWindow(){}
			$(function(){
				$(window).ready(function() {
					loginWindow();
					$(window).resize(function(){
						loginWindow();
					})
			        $(".text").focus(function(){
					  $(this).parent().addClass("focus");	
					})
					$(".text").blur(function(){
					  $(this).parent().removeClass("focus");	
					})
			    });
			  });
			
		</script>
	</head>
	<body>
		<div class="header">
			<div class="logo"><img src="${ctx.path}/resources/platform/images/logo.png"/></div>
		<div class="login_box">
			<div class="login_title">
				<h2><i></i>普通登录</h2>				
			</div>
			<form id="loginForm" method="post"  action="${ctx.path}/platform/pm/login.do">
			<div class="login_center">
				<div class="login_con">
	          		<span><i class="user_icon"></i></span><input type="text" name="loginName" class="text" placeholder="登陆名：" />
	        	</div>
		        <div class="login_con">
		          	<span><i class="password_icon"></i></span><input type="password"  name="pwd" class="text" placeholder="密码：" />
		        </div>
	        </div>
	       <font color="red">${errorMsg}</font>
	        <div class="login_footer">
	        	<label class="checkbox checked"><em>记住密码</em></label>
	        	<!-- 
	        	<label class="forget">忘记密码？</label>
	        	 -->
	        	<input type="submit"  value="登录" class="login_btn"  />
	        </div>
	        </form>
		</div>
		<div class="footer">
			<p>建议使用IE8浏览器、电脑分辨率为1024*768以上</p>
		</div>
	</body>
</html>
