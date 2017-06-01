<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/resources/platform/inc.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<script src="${ctx.path}/resources/platform/js/common_grid.js"></script>
<script src="${ctx.path}/resources/platform/js/common_format.js"></script>
<script src="${ctx.path}/resources/platform/js/common_check.js"></script>
<script
	src="${ctx.path}/resources/script/logistics/ruleList.js?v=${ctx.versions}1"></script>
<link rel="stylesheet" type="text/css" href="${ctx.path}/resources/platform/css/new.css">
</head>
<body>
	<div class="animated fadeInRight">
			<section id="main" role="main">
			<div class="container-fluid has-toobar has-navbar multichoice">
				<div id="serachDiv" class="row form-group-sm">
					<div class="ibox-content" style="padding: 5px 10px;padding-bottom: 0px;">
						<form id="pageForm" method="post">
							<div class="form-inline">
								<div class="form-group">
										<label>规则名称：</label>
									 <input type="text" class="form-control input-small"
										id="ruleName" name="ruleName" maxlength="50"
										placeholder="规则名称" />
										<label>物流渠道：</label>
									<select class="form-control" id="logisticsId" name="logisticsId">
										<option value="">全部物流渠道</option>
									</select> <select class="form-control" id="status" name="status">
										<option value="">全部状态</option>
										<option value="1">启用</option>
										<option value="0">停用</option>
									</select> 
								</div>
								<div class="form-group clearfix">
									<button type="button" class="btn btn-primary btn-sm"
										onclick="common.search();">查询</button>
									<button type="button" class="btn btn-white btn-sm"
										onclick="common.clear();">重置</button>
								</div>
							</div>
						</form>
					</div>
				</div>
				<div id="buttonDiv" class="row wrapper ">
					<div class="form-inline operation_con">
						<div class="large-list-title">
							<button class="btn btn-success btn-sm" type="button"
								onclick="openAddPage();">新增物流匹配规则</button>
						</div>
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
