<%@page import="com.samton.erp.api.orders.util.Configuration"%>
<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/resources/platform/inc.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<script src="${ctx.path}/resources/platform/js/common_grid.js"></script>
<script src="${ctx.path}/resources/platform/js/common_format.js"></script>
<script src="${ctx.path}/resources/script/operate/operate.js?v=${ctx.versions}"></script>
<link type="text/javascript" href="${ctx.path}/resources/platform/css/new.css" rel="stylesheet">
</head>
<body>
	<div class="animated fadeInRight">
		<section id="main" role="main">
		<div class="container-fluid has-toobar has-navbar multichoice">
		<div id="serachDiv" class="row form-group-sm">
			<div class="ibox-content"
				style="padding: 5px 10px;padding-bottom: 0px;">
				<form id="pageForm" method="post">
					<div class="form-inline">
						<div class="form-group">
							<label>企业名称：</label> <input type="text" name="companyName" class="form-control input-small" maxlength="50" />
						</div>
						<div class="form-group clearfix">
							<button type="button" class="btn btn-primary btn-sm" onclick="common.search();">查询</button>
							<button type="button" class="btn btn-white btn-sm" onclick="common.clear();">重置</button>
						</div>
					</div>
				</form>
			</div>
		</div>
		
		
		<div class="row">
			<div class="jqGrid_wrapper white-bg">
				<table id="jqGrid"></table>
				<!-- 显示table -->
				<div id="jqGridPager"></div>
				<!-- 显示分页 -->
			</div>
		</div>
	</div>
	</section>
	</div>
	 
</body>
</html>
