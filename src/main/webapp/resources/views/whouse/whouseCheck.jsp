<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/resources/platform/inc.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<script src="${ctx.path}/resources/platform/js/common_grid.js"></script>
<script src="${ctx.path}/resources/platform/js/common_format.js"></script>
<script src="${ctx.path}/resources/script/whouse/whouseCheck.js"></script>
<script src="${ctx.path}/resources/js/common/codeTool.js"></script>

<link type="text/javascript"
	href="${ctx.path}/resources/platform/css/new.css" rel="stylesheet">
<link rel="stylesheet" type="text/css"
	href="${ctx.path}/resources/css/custom.css" />

</head>
<body>




	<!-- 盘点界面 -->
	<section id="main" role="main">
	<div class="container-fluid has-toobar has-navbar multichoice"
		id="parentMenu">
	<div class="animated fadeInRight">
		<div id="serachDiv" class="row form-group-sm">
				<div class="ibox-content bottomnone" 
					>
					<form id="pageForm" method="post">
						<div class="form-inline">
							<div class="form-group">
								<input class="form-control layer-date input-small" id="searchDateStart" name="startDate" placeholder="起始日期" readonly="readonly" style="background-color: white;" onClick="WdatePicker({maxDate:'#F{$dp.$D(\'searchDateEnd\')}'})"/>
                           			至
								<input class="form-control layer-date input-small" id="searchDateEnd" name="endDate" placeholder="截止日期" readonly="readonly" style="background-color: white;" onClick="WdatePicker({minDate:'#F{$dp.$D(\'searchDateStart\')}'})"/> 							
								<!-- <label>全部仓库：</label> --> <select class="form-control"
									id="whouseSelect" name="whouse_id"></select>
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
				<div class="form-inline operation_con" >
					<div class="large-list-title">
						<button class="btn btn-success btn-sm" type="button"
							onclick="openAddPage();">新增盘点批次</button>
					</div>
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


	<!-- 新增盘点批次 -->
	<div id="dataAdd" class="white-bg"
		style="display:none;padding-top:10px;">
		<form class="form-horizontal"
			style="margin-right: 15px; margin-left: 15px;" method="post"
			role="form" id="whouseInChildForm"
			>
			<input type="hidden" name="lostId" type="text">
			<div class="panel panel-default">
				<div class="panel-heading">
					<h3 class="panel-title">
						基本信息&nbsp;&nbsp;&nbsp;&nbsp;<font color="red">不同盘点日期或者不同仓库的请分批提交盘点</font>
					</h3>
				</div>
				<div class="panel-body">
					<div class="form-group">
						<label class="col-sm-2 control-label"><font color="red">*</font>批次号</label>
						<div class="col-sm-2">
							<p class="loadtext" id="storageCode"></p>
						</div>
						<label class="col-sm-2 control-label">盘点时间</label>
						<div class="col-sm-2">
							<p class="loadtext" id="createDate"></p>
						</div>
						<label class="col-sm-2 control-label"><font color="red">*</font>仓库</label>
						<div class="col-sm-2">
							<select class="form-control" id="whouseAddSelect" onfocus="getnowid()"
								name="whouse_id"></select>
						</div>
					</div>
					<div class="hr-line-dashed"></div>
					<div class="form-group">
						<label class=" col-sm-2 control-label">备注</label>
						<div class="col-sm-10">
							<input type="text" class="form-control" name="remark" id="remark"
								maxlength="500" rows="1" type="textarea" 
								data-msg-required="请输入备注！"></input>
						</div>
					</div>
				</div>
			</div>

			<div class="panel panel-default">
				<div class="panel-heading">
					<h3 class="panel-title">
						盘点商品清单&nbsp;&nbsp;&nbsp;&nbsp;<font color="red">批量导入前请先在上方选择盘点日期和仓库</font>
					</h3>
				</div>
				<div class="panel-body">
					<div class="form-group">
						<div class="col-sm-3">
						<div class="btn-group hidden-xs">
						<input type="button"  class="btn btn-default active" id="showSKU" value="按SKU盘点" onclick="$(this).addClass('active');$(this).siblings('.btn-default').removeClass('active')"></input><input type="button" id="showSpace" class="btn btn-default" value="按仓位盘点" onclick="$(this).addClass('active');$(this).siblings('.btn-default').removeClass('active')"></input>
						</div>
						</div>
						<div id="panel1">
						<div class="col-sm-2">
							<input type="text" name="InSKU" class="form-control"id="InSKU"
								maxlength="10" placeholder="盘点存SKU(必填)" required
								data-msg-required="请输盘点存SKU！"><label id="InSKUCheck" style="color:red"></label>
						</div>
						<div class="col-sm-2">
							<select class="form-control" id="spaceId" placeholder="仓位(必填)"
								name="whouse_id"><option value="">-选择仓位-</option></select>
							
						</div>
						<div class="col-sm-2">
							<input type="text" name="InCount" class="form-control" id="InCount"
								maxlength="10" placeholder="盘点数量(必填)" required
								data-msg-required="请输入盘点数量！"><label id="InCountCheck" style="color:red"></label>
						</div>
						</div>
						<div id="panel2"  style="display:none;">
						<div class="col-sm-2">
							<select class="form-control" id="spaceId2" placeholder="仓位(必填)"
							name="whouse_id"><option value="">-选择仓位-</option></select>
						</div>
						<div class="col-sm-2">
						<select class="form-control" id="InSKU2" placeholder="盘点存SKU(必填)"
							name="whouse_id"><option value="">-选择SKU-</option></select>
						</div>
						<div class="col-sm-2">
								<input type="text" name="InCount" class="form-control" id="InCount2"
								maxlength="10" placeholder="盘点数量(必填)" required
								data-msg-required="请输入盘点数量！"><label id="InCountCheck2" style="color:red"></label>
						</div>
						</div>
						<div class="col-sm-2" align="right">
							<!-- <button class="btn btn-success" id="childAdd">单个添加</button> -->
							<input id="childAdd" type="button" class="btn btn-success" value="单个添加" />
						</div>
					</div>

					<!-- 添加盘点列表 -->
					<div class="row">
							<div class="jqInChlidAddGrid_wrapper white-bg">
								<table id="jqAddGrid"></table>
								<!-- 显示table -->
							</div>
					</div>
				</div>
			</div>
		</form>
	</div>

	<!-- 查看盘点批次 -->
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
						<label class="col-sm-2 control-label">批次号</label>
						<div class="col-sm-2">
							<p class="loadtext" id="storageCodeDetial"></p>
						</div>
						<label class="col-sm-2 control-label">盘点时间</label>
						<div class="col-sm-2">
							<p class="loadtext" id="createDateDetial"></p>
						</div>
						<label class="col-sm-2 control-label">仓库</label>
						<div class="col-sm-2">
							<p class="loadtext" id="whouseAddSelectDetial"></p>
						</div>
					</div>
					<div class="hr-line-dashed"></div>
					<div class="form-group">
						<label class=" col-sm-2 control-label">备注</label>
						<div class="col-sm-10">
							<p class="loadtext" id="remarkDetial"></p>
						</div>
					</div>
				</div>
			</div>

			<div class="panel panel-default">
				<div class="panel-heading">
					<h3 class="panel-title">
						盘点商品清单
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
