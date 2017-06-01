<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/resources/platform/inc.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<script src="${ctx.path}/resources/platform/js/common_grid.js"></script>
<script src="${ctx.path}/resources/platform/js/common_format.js"></script>
<script src="${ctx.path}/resources/script/whouse/whouseFlow.js"></script>
<script src="${ctx.path}/resources/js/common/codeTool.js"></script>

<link type="text/javascript"
	href="${ctx.path}/resources/platform/css/new.css" rel="stylesheet">
<link rel="stylesheet" type="text/css"
	href="${ctx.path}/resources/css/custom.css" />

</head>
<body>




	<!-- 界面 -->
	<div class="animated fadeInRight">
	<section id="main" role="main">
	<div class="container-fluid has-toobar has-navbar multichoice"
		id="parentMenu">

	
	
			<div id="serachDiv" class="row form-group-sm">
				<div class="ibox-content bottomnone">
					<form id="pageForm" method="post">
						<div class="form-inline">
							<div class="form-group">
							<input class="form-control layer-date input-small" id="searchDateStart" name="startDate" placeholder="起始日期" readonly="readonly" style="background-color: white;" onClick="WdatePicker({maxDate:'#F{$dp.$D(\'searchDateEnd\')}'})"/>
                           			至
								<input class="form-control layer-date input-small" id="searchDateEnd" name="endDate" placeholder="截止日期" readonly="readonly" style="background-color: white;" onClick="WdatePicker({minDate:'#F{$dp.$D(\'searchDateStart\')}'})"/> 							
								<!-- <label>全部仓库：</label>  --><select class="form-control"
									id="whouseSelect" name="whouse_id"></select>
								<!-- <label>全部类型：</label>  --><select class="form-control"
									id="type" name="typeQuery"></select>
								<input  placeholder="请输入商品编号" name="sku"  class="form-control layer-date input-small"/>
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
<!-- 查看 -->
	<div id="dataDetial" class="white-bg"
		style="display:none;padding-top:10px;">
		<form class="form-horizontal"
			style="margin-right: 15px; margin-left: 15px;" method="post"
			role="form" id="whouseInChildForm"
			>
			<input type="hidden" name="lostId" type="text">
			<div class="panel panel-default">
				<div class="panel-heading">
					<h3 class="panel-title">
						基本信息
					</h3>
				</div>
				<div class="panel-body">
					<div class="form-group">
						<label class="col-sm-2 control-label">日期</label>
						<div class="col-sm-2">
							<p class="loadtext" id="createDate"></p>
						</div>
						<label class="col-sm-2 control-label">商品编号</label>
						<div class="col-sm-2">
							<p class="loadtext" id="sku"></p>
						</div>
						<label class="col-sm-2 control-label">名称</label>
						<div class="col-sm-2">
							<p class="loadtext" id="name"></p>
						</div>
					</div>
					<div class="hr-line-dashed"></div>
					<div class="form-group">
						<label class="col-sm-2 control-label">仓库</label>
						<div class="col-sm-2">
							<p class="loadtext" id="whouseName"></p>
						</div>
						<label class="col-sm-2 control-label">入库数量</label>
						<div class="col-sm-2">
							<p class="loadtext" id="skuin"></p>
						</div>
						<label class="col-sm-2 control-label">出库数量</label>
						<div class="col-sm-2">
							<p class="loadtext" id="skuout"></p>
						</div>
					</div>
				</div>
			</div>

			<div class="panel panel-default">
				<div class="panel-heading">
					<h3 class="panel-title">
						出入库流水详情
					</h3>
				</div>
				<div class="panel-body">
					<div class="row">
							<div class="jqInChlidDetialGrid_wrapper white-bg">
								<table id="jqDetialGrid"></table>
								<!-- 显示table -->
								<div id="jqGridDetialPager"></div>
								<!-- 显示分页 -->
							</div>
					</div>
				</div>
				


				</div>
			</div>
		</form>
	</div>


</body>
</html>
