<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/resources/platform/inc.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<script src="${ctx.path}/resources/platform/js/common_grid.js"></script>
<script src="${ctx.path}/resources/platform/js/common_format.js"></script>
<script src="${ctx.path}/resources/js/common/codeTool.js"></script>
<script src="${ctx.path}/resources/script/logistics/trackManager.js"></script>
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
					<div class="publish-tab ">
						<ul class="nav nav-tabs" id="grenul">
							<li labelname="trackManager" class="active"><a
								href="javascript:void(0);" class="pl5 pr5"><span
									class="text">运单号管理</span></a></li>
							<li labelname="manualOWN"><a href="javascript:void(0);"
								class="pl5 pr5"><span class="text">自定义物流</span></a></li>
						<!-- 	<li labelname="manualSYS"><a href="javascript:void(0);"
								class="pl5 pr5"><span class="text">系统默认物流</span></a></li> -->
						</ul>
					</div>
				</div>
			</div>

			<div class="alert alert-warning fade in group-warning mb10">
				<button aria-hidden="true" data-dismiss="alert" class="close"
					type="button">×</button>
				<!--<i class="ico-warning-sign"></i>-->
				<p class="mb0">
					*对于ERP尚不支持的物流公司(或者部分中小物流公司本身就不提供物流API接口),如何获取到跟踪单号呢？放心，ERP也有解决办法！ <br>
					请您先找该物流公司客户经理要一批跟踪号的区间段。客户经理一般会给你一定数目的跟踪号,一般是一个记事本文件或Excel文件，一个跟踪号一行，如:LK10000001234CN,LK10000001245CN,
					... LK10000001675CN，可以将这些跟踪号使用新增订单运单号功能添加至下表进行管理
				</p>
			</div>
			<div id="serachDiv" class="row form-group-sm">
				<div class="ibox-content bottomnone">
					<div class="form-inline">
						<form id="pageForm" method="post">
						<div class="form-group">
							<!-- <label>全部仓库：</label>  -->
							<select class="form-control" id="logisticsIdSelect"
								name="logisticsId"></select>
							<!-- <label>全部类型：</label>  -->
							<select class="form-control" id="used" name="used"></select> <select
								class="form-control" name="mohu" id="mohuSelect">
								<option value="">模糊查询条件</option>
								<option value="orderId">按订单编号</option>
								<option value="tnumber">按交运单号</option>
							</select> 
							<input id="mohuInput" placeholder="请输入关键字"
								class="form-control layer-date input-small" readonly="readonly" />
						</div>
							<div class="form-group clearfix">
								<button type="button" class="btn btn-primary btn-sm"
									onclick="common.search();">查询</button>
								<button type="button" class="btn btn-white btn-sm"
									onclick="common.clear();">重置</button>
							<%-- 	<button type="button" class="btn btn-white btn-sm"
									onclick="window.open('${ctx.path}/resources/views/logistics/imageSelect.jsp')">弹出</button> --%>
							</div>
						</form>
					</div>
				</div>
			</div>

			<div id="buttonDiv" class="row wrapper ">
				<div class="form-inline operation_con">
					<div class="large-list-title">
						<button class="btn btn-success btn-sm" type="button" id="userDel"
							onclick="del();">删除</button>
					</div>
					<div class="large-list-title">
						<button class="btn btn-success btn-sm" type="button"
							onclick="openAddPage();">新增交运单号</button>
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
	<!-- 新增 -->
	<div id="dataAdd" class="white-bg" style="display:none;">
		<form method="post" class="form-horizontal" id="dataForm"
			action="${ctx.path}/api/tracking/addTracking">
			<div class="panel panel-default">
				<div class="panel-body pt0 pb0">
					<div class="form-horizontal form-bordered min">
						<!-- panel body -->
						<div class="form-group">
							<label class="col-sm-3 control-label"> <span
								class="text-danger mr5">*</span> 物流渠道
							</label>
							<div class="col-sm-6">
								<select class="form-control" name="logisticsId"
									id="expresstypeId">
								</select>
							</div>
						</div>
						<div class="form-group">
							<label class="col-sm-3 control-label"> <span
								class="text-danger mr5">*</span> 运单号
							</label>
							<div class="col-sm-9">
								<textarea rows="4" class="form-control" name="tnumber"
									id="tnumber"></textarea>
								<p class="alert-warning">每行一个跟踪单号,不需要标点符号和字符</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</form>
	</div>
</body>
</html>
