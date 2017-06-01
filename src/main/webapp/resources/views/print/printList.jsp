<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/resources/platform/inc.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<script src="${ctx.path}/resources/platform/js/common_grid.js"></script>
		<script src="${ctx.path}/resources/platform/js/common_format.js"></script>
		<script src="${ctx.path}/resources/script/print/printList.js"></script>
		<link type="text/javascript" href="${ctx.path}/resources/platform/css/new.css" rel="stylesheet">
		<link rel="stylesheet" type="text/css" href="${ctx.path}/resources/css/custom.css" />
	</head>
	<body>
		<div class="animated fadeInRight">
			<div id="main" role="main">
				<div class="container-fluid has-toobar has-navbar multichoice">
					<div id="serachDiv" class="row form-group-sm">
						<div class="ibox-content" style="padding: 5px 10px;padding-bottom: 0px;">
							<form id="pageForm" method="post">
								<div class="form-inline">
									<div class="form-group">
										<label>标签名称：</label>
										<input type="text" class="form-control input-small" id="name" name="name" maxlength="50" />
										<label>模板类型：</label>
										<select class="form-control" id="tempType" name="tempType">
											<option value="0">全部单据类型</option>
											<option value="1">地址单</option>
											<option value="2">报送单</option>
											<option value="3">配货单</option>
											<option value="4">发票</option>
											<option value="5">商品标签</option>
										</select>
										<label>模板规格：</label>
										<select class="form-control" id="tempModel" name="tempModel">
											<option value="0">全部规格</option>
											<option value="1">10cm*10cm</option>
											<option value="2">8cm*3cm</option>
											<option value="3">5cm*2cm</option>
										</select>
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
			</div>
		</div>
	</body>
</html>
