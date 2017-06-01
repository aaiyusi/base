<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/resources/platform/inc.jsp"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html ng-app="userApp">
<head>
	<script src="${ctx.path}/resources/platform/js/common_grid.js"></script>
	<script src="${ctx.path}/resources/platform/js/common_format.js"></script>
	<script src="${ctx.path}/resources/script/sys/enterpriseDetail.js?v=${ctx.versions}"></script>
	<link type="text/javascript" href="${ctx.path}/resources/platform/css/new.css" rel="stylesheet">
	<script>
		var enterpriseId = "${enterprise.enterpriseId}";
	</script>
</head>
<body ng-controller="userCtrl">

<div id="enterpriseInfo" class="container-fluid">
	<div class="row">
		<div class="col-custom-12">
			<form  method="post" class="form-horizontal" role="form" name="frmCompanyInfomation" id="frmCompanyInfomation" action="${ctx.path}/api/sys/updateCurrentEnterpriseInfo.do" >
				<div class="panel panel-default">
					<div class="panel-body pt0 pb0">
						<div class="form-horizontal form-bordered min">
							<div class="form-group">
								<label class="col-sm-2 control-label">企业编号</label>
								<div class="col-sm-4">
									<p class="loadtext">${enterprise.enterpriseCode }</p>
								</div>
								<label class="col-sm-2 control-label">企业超级管理员</label>
								<div class="col-sm-4">
									<p class="loadtext">${enterprise.managerName }</p>      
								</div>
							</div>
							<div class="form-group">
								<label class="col-sm-2 control-label">公司名称</label>
								<div class="col-sm-4">
									<p class="loadtext">${enterprise.companyName }</p>
								</div>
								<label class="col-sm-2 control-label">公司地址</label>
								<div class="col-sm-4">
									<p class="loadtext" >${enterprise.address }</p>
								</div>
							</div>
							<div class="form-group">
								<label class="col-sm-2 control-label">联系人</label>
								<div class="col-sm-4">
									<p class="loadtext" >${enterprise.legalPerson }</p>
								</div>
								<label class="col-sm-2 control-label">联系人邮箱</label>
								<div class="col-sm-4">
									<p class="loadtext" >${enterprise.contactEmail }</p>
								</div>
							</div>
							<div class="form-group">
								<label class="col-sm-2 control-label">联系人qq</label>
								<div class="col-sm-4">
									<p class="loadtext" >${enterprise.contactQq }</p>
								</div>
								<label class="col-sm-2 control-label">联系人手机</label>
								<div class="col-sm-4">
									<p class="loadtext">${enterprise.contactMobile }</p>
								</div>
							</div>
							<div class="form-group">
								<label class="col-sm-2 control-label">联系人电话</label>
								<div class="col-sm-4">
									<p class="loadtext">${enterprise.contactTel }</p>
								</div>
							</div>
						</div>
					</div>
					 
				</div>
			</form>
		</div>
	</div>
</div>

	<div class="animated fadeInRight">
	<section id="main" role="main">
	    <div class="container-fluid has-toobar has-navbar multichoice">
			<!-- <div id="serachDiv" class="row form-group-sm">
				<div class="ibox-content" style="padding: 5px 10px;padding-bottom: 0px;">
				  <form id="pageForm" method="post">
					<div class="form-inline">
						<div class="form-group">
							<label>登录名：</label> <input type="text" class="form-control input-small" name ="loginName" maxlength="50" placeholder="请输入登录名" />
							<label>用户名：</label> <input type="text" class="form-control input-small" name ="userName" maxlength="50" placeholder="请输入用户名" />
				            <div class="form-group clearfix">
							<button type="button" class="btn btn-primary btn-sm" onclick="common.search();">查询</button>
							<button type="button" class="btn btn-white btn-sm" onclick="common.clear();">重置</button>
							</div>
						</div>							
					</div>
				  </form>	
				</div>
			</div> -->
		
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

