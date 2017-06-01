<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/resources/platform/inc.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<script src="${ctx.path}/resources/platform/js/common_grid.js"></script>
<script src="${ctx.path}/resources/platform/js/common_format.js"></script>
<script src="${ctx.path}/resources/script/sysset/sysSet.js"></script>

<link type="text/javascript"
	href="${ctx.path}/resources/platform/css/new.css" rel="stylesheet">
<link rel="stylesheet" type="text/css"
	href="${ctx.path}/resources/code/css/custom.css" />

</head>
<body >
<div class="animated fadeInRight">
	<section id="main" role="main">
	<div class="container-fluid has-toobar has-navbar multichoice"
		id="parentMenu">
		<div class="panel-navbar">
			<div class="scroll-hide">
				<div class="publish-tab">
					<ul class="nav nav-tabs" id="grenul">
						<li id="rate" ><a onclick="change(2)"
							class="pl5 pr5"><span class="text">汇率管理</span></a></li>
						<li id="address" class="active"><a
							onclick="change(1)" class="pl5 pr5"><span class="text">回邮地址管理</span></a></li>
					</ul> 
				</div>
			</div>
		</div>
		<iframe id="iframeInfo" src="${ctx.path}/resources/views/address/addressManager.jsp" style="width:100%;border:none;height:90%;" scrolling="no" frameborder="0"></iframe>
	</div>
    
	</section>
 </div>
</body>
</html>
