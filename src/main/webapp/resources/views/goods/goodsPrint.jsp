<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/resources/platform/inc.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<title>商品详情信息</title>
		<script src="${ctx.path}/resources/platform/js/common_grid.js"></script>
		<script src="${ctx.path}/resources/platform/js/common_check.js"></script>
		<script src="${ctx.path}/resources/platform/js/common_format.js"></script>
		<script src="${ctx.path}/resources/script/goods/goodsPrint.js"></script>
		<link type="text/javascript" href="${ctx.path}/resources/platform/css/new.css" rel="stylesheet">
		<link rel="stylesheet" type="text/css" href="${ctx.path}/resources/css/custom.css" />
	</head>
	
	<body class="white-bg">
		<div class="animated fadeInRight">
			<div id="main" role="main">
				<div class="container-fluid has-toobar has-navbar multichoice">
					<div id="serachDiv" class="row form-group-sm">
						<div class="ibox-content">
							<!-- <form id="pageForm" method="post"> -->
								<div class="form-inline">
									<div class="form-group">
										<label>标签模板：</label>
										<select class="form-control" id="printTempList">
										</select>
										<label>打印数量：</label>
										<input type="text" class="form-control text-center" value="1" onafterpaste="this.value=this.value.replace(/\D/g,'')" onkeyup="this.value=this.value.replace(/\D/g,'');changeNum(this)" maxlength="3" >
									</div>
								</div>
							<!-- </form> -->
						</div>
					</div>
					<div class="row">
						<div class="jqGrid_wrapper white-bg">
							<table id="jqGridPrint"></table>
							<!-- 显示table -->
							<!-- <div id="jqGridPagerPrint"></div> -->
							<!-- 显示分页 -->
						</div>
					</div>
					<div class="form-group navbar-fixed-bottom">
						<div class="col-sm-offset-10 col-sm-4" style="align:center;">
							<button type="button" class="btn btn-md btn-primary" onclick="print()">打印预览</button>
							<button type="button" class="btn btn-md btn-default" onclick="parent.layerCloseAll()">取消</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</body>
</html>
