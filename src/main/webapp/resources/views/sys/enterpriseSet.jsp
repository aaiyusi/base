<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/resources/platform/inc.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<script src="${ctx.path}/resources/platform/js/common_grid.js"></script>
<script src="${ctx.path}/resources/platform/js/common_format.js"></script>
<script src="${ctx.path}/resources/script/sys/enterpriseSet.js?v=${ctx.versions}"></script>
<link type="text/javascript" href="${ctx.path}/resources/platform/css/new.css" rel="stylesheet">
</head>
<body>
<section role="main" id="main">
<div id="enterpriseInfo" class="container-fluid">
	<div class="row">
			<form  method="post" class="form-horizontal" role="form" name="frmCompanyInfomation" id="frmCompanyInfomation" action="${ctx.path}/api/sys/updateCurrentEnterpriseInfo.do" >
				<div class="panel panel-default">
					<div class="panel-heading">
						<h3 class="panel-title"><i class="ico-file4 mr5"></i>公司资料</h3>
					</div>
					<div class="panel-body pt0 pb0">
						<div class="form-horizontal form-bordered min">
							<div class="form-group">
								<label class="col-sm-2 control-label">企业编号</label>
								<div class="col-sm-4">
									<p class="loadtext" id="enterpriseCode"></p>
								</div>
							</div>
							<div class="form-group">
								<label class="col-sm-2 control-label">企业超级管理员</label>
								<div class="col-sm-4">
									<p class="loadtext"><span id="managerName"></span></p>      
								</div>
							</div>
							<div class="form-group">
								<label class="col-sm-2 control-label"><span class="text-danger pr5">*</span>公司名称</label>
								<div class="col-sm-4">
									<input type="text" required data-msg-required="请输入公司名称！"   class="form-control" placeholder="请输入公司名称" maxlength="50"  name="companyName"    >
								</div>
							</div>
							<div class="form-group">
								<label class="col-sm-2 control-label">公司地址</label>
								<div class="col-sm-8">
									<input  type="text" class="form-control"  maxlength="50"  id="address" name="address" placeholder="请输入详细地址" >
								</div>
							</div>
							<div class="form-group">
								<label class="col-sm-2 control-label">联系人</label>
								<div class="col-sm-4">
									<input  name="legalPerson" type="text" placeholder="请输入联系人" maxlength="30"  class="form-control" >
								</div>
							</div>
							<div class="form-group">
								<label class="col-sm-2 control-label">联系人邮箱</label>
								<div class="col-sm-4">
									<input  name="contactEmail" email="true" data-msg-email="请输入有效的Email地址" placeholder="请输入联系人邮箱" maxlength="25" type="text" class="form-control" >
								</div>
							</div>
							<div class="form-group">
								<label class="col-sm-2 control-label">联系人qq</label>
								<div class="col-sm-4">
									<input  name="contactQq" qq="true" type="text" placeholder="请输入联系人qq" maxlength="25"  class="form-control" >
								</div>
							</div>
							<div class="form-group">
								<label class="col-sm-2 control-label">联系人手机</label>
								<div class="col-sm-4">
									<input name="contactMobile" isMobile="true" placeholder="请输入联系人手机" maxlength="25"  type="text" class="form-control" >
								</div>
							</div>
							<div class="form-group">
								<label class="col-sm-2 control-label">联系人电话</label>
								<div class="col-sm-4">
									<input  name="contactTel" isTel="true" type="text" placeholder="请输入联系人电话" maxlength="25"   class="form-control" >
								</div>
							</div>
						</div>
					</div>
					<div class="panel-footer">
						<div class="row">
							<div class="col-custom-12 text-right">
								<button type="button" onclick="checkValue()" class="btn btn-primary">保存</button>
							</div>
						</div>
					</div>
				</div>
			</form>
	</div>
</div>
</section>
</body>
</html>
