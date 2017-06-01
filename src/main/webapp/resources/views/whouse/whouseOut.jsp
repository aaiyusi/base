<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/resources/platform/inc.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<script src="${ctx.path}/resources/platform/js/common_grid.js"></script>
<script src="${ctx.path}/resources/platform/js/common_format.js"></script>
<script src="${ctx.path}/resources/script/whouse/whouseOut.js"></script>
<script src="${ctx.path}/resources/js/common/codeTool.js"></script>

<link type="text/javascript"
	href="${ctx.path}/resources/platform/css/new.css" rel="stylesheet">
<link rel="stylesheet" type="text/css"
	href="${ctx.path}/resources/code/css/custom.css" />

</head>
<body>
<div class="animated fadeInRight">
	<section id="main" role="main">
	<div class="container-fluid has-toobar has-navbar multichoice"
		id="parentMenu">
		<div class="panel-navbar row">
			<div class="scroll-hide">
				<div class="publish-tab">
					<ul class="nav nav-tabs" id="grenul">
						<li labelname="manualOut" class="active"><a href="javascript:void(0);"
							class="pl5 pr5"><span class="text">手工出库</span></a></li>
						<li labelname="manualIn" ><a
							href="javascript:void(0);" class="pl5 pr5"><span class="text">手工入库</span></a></li>
					</ul>
				</div>
			</div>
		</div>
	



	<!-- 出库界面 -->
		<div id="serachDiv" class="row form-group-sm">
				<div class="ibox-content bottomnone"	>
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
				<div class="form-inline operation_con">
					<div class="large-list-title">
						<button class="btn btn-success btn-sm" type="button"
							onclick="openAddPage();">新增出库批次</button>
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

	<!-- 新增出库批次 -->
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
						基本信息&nbsp;&nbsp;&nbsp;&nbsp;<font color="red">不同出库日期或者不同仓库的请分批提交出库</font>
					</h3>
				</div>
				<div class="panel-body">
					<div class="form-group">
						<label class="col-sm-2 control-label"><font color="red">*</font>批次号</label>
						<div class="col-sm-2">
							<p class="loadtext" id="storageCode"></p>
						</div>
						<label class="col-sm-2 control-label">出库时间</label>
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
								data-msg-required="请输出备注！"></input>
						</div>
					</div>
				</div>
			</div>

			<div class="panel panel-default">
				<div class="panel-heading">
					<h3 class="panel-title">
						出库商品清单&nbsp;&nbsp;&nbsp;&nbsp;<font color="red">批量导出前请先在上方选择出库日期和仓库</font>
					</h3>
				</div>
				<div class="panel-body">
					<div class="form-group">
						<label class="col-sm-2 control-label"><font color="red">*</font>添加出库商品</label>
						<div class="col-sm-2">
							<input type="text" name="InSKU" class="form-control"id="InSKU"
								maxlength="10" placeholder="出库存SKU(必填)" required
								data-msg-required="请输出库存SKU！"><label id="InSKUCheck" style="color:red"></label>
						</div>
						<div class="col-sm-2">
							<input type="text" name="InCount" class="form-control" id="InCount"
								maxlength="10" placeholder="出库数量(必填)" required
								data-msg-required="请输出出库数量！"><label id="InCountCheck" style="color:red"></label>
						</div>
						<div class="col-sm-2">
							<select class="form-control" id="spaceId" placeholder="仓位(必填)"
								name="whouse_id"><option value="">-选择仓位-</option></select>
						</div>
						<div class="col-sm-2" align="right">
							<!-- <button class="btn btn-success" id="childAdd">单个添加</button> -->
							<input id="childAdd" type="button" class="btn btn-success" value="单个添加" />
						</div>
					</div>

					<!-- 添加出库列表 -->
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

	<!-- 查看出库批次 -->
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
						<label class="col-sm-2 control-label">出库时间</label>
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
						出库商品清单
					</h3>
					<div class="panel-toolbar text-right" >
							<a class="btn btn-warning"  id="printInList" target="_blank"   >打印出库清单</a>
							</div>
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
