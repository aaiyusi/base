<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/resources/platform/inc.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<script src="${ctx.path}/resources/platform/js/common_grid.js"></script>
		<script src="${ctx.path}/resources/platform/js/common_format.js"></script>
		<script src="${ctx.path}/resources/script/goods/goodsList.js"></script>
		<link type="text/javascript" href="${ctx.path}/resources/platform/css/new.css" rel="stylesheet">
		<link rel="stylesheet" type="text/css" href="${ctx.path}/resources/css/custom.css" />
	</head>
	<body>
		<div class="animated fadeInRight">
			<div id="main" role="main">
				<div class="container-fluid has-toobar has-navbar multichoice">
					<div id="serachDiv" class="row form-group-sm">
						<div class="ibox-content" >
							<form id="pageForm" method="post">
								<div class="form-inline">
									<div class="form-group">
										<select class="form-control" id="modelType" name="modelType">
											<option value="0">SKU</option>
											<option value="1">商品名称</option>
										</select>
										<input type="text" class="form-control input-small" id="modelValue" name="modelValue" maxlength="50" />
										<label>商品状态：</label>
										<select class="form-control" id="saleStateList" name="saleState">
											<option value="0">-请选择-</option>
											<option value="1">自动创建</option>
											<option value="2">等待开发</option>
											<option value="3">正在销售</option>
											<option value="4">商品清仓</option>
											<option value="5">停止销售</option>
										</select>
										<label>商品目录：</label>
										<select class="form-control" id="catalogiItemsList" onchange="catalogiItemChange()" name="pCatalogiId">
											<option value="0">-请选择-</option>
										</select>
										<select class="form-control" id="catalogisList" name="catalogiId">
											<option value="0">-请选择-</option>
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
					<div id="buttonDiv" class="row wrapper ">
						<div class="form-inline operation_con" >
							<div class="form-group">
								<button class="btn btn-primary btn-sm" type="button" onclick="openPrint()">打印商品标签</button>
							</div>
							<div class="large-list-title">
								<button class="btn btn-primary btn-sm btn-success" type="button" onclick="openAddPage();">新增库存SKU</button>
								<div id="upLoadMenu" class="btn-group">
			                		 <button class="btn btn-success btn-sm dropdown-toggle" type="button" data-toggle="dropdown">
										<span class="text mr5 ml5">导入/导出相关</span>
										<span class="caret"></span>
									</button>
									<ul class="dropdown-menu dropdown-menu-left" role="menu">
										<li>
											<a href="javascript:exportGoodsTemplate()">SKU导出</a>
										</li>
										<!-- <li>
											<a href="javascript:gotoExportOrderTemplate()">SKU导入</a>
										</li>
										<li>
											<a href="javascript:gotoExportOrderTemplate()">导入SKU别名</a>
										</li> -->
									</ul>
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
			</div>
		</div>
		<!-- 导出商品 -->
		<div id="exportGoods" class="white-bg" style="display:none;padding-top:10px;">
			<form class="form-horizontal" style="margin-right: 15px; margin-left: 15px;" method="post" role="form" name="exportGoodsForm" id="exportGoodsForm" action="${ctx.path}/api/goods/exportGoodsList.json">
				<input type="hidden" name="page" value="1"/>
				<input type="hidden" name="rows" value="500"/>
				<input type="hidden" name="search">
				<div class="panel-body pa10">
					<div class="panel panel-default multichoice" id="allfield">
						<div class="panel-heading">
							<h4 class="panel-title">所有字段
		                    <label class="checkbox-inline text-primary ml10">
		                      <input type="checkbox" value="all" name="fieldlabel" >
		                      	全选/清空</label>
		                  </h4>
						</div>
						<div class="panel-body pa5 fieldgroup">
							<div class="form-group" style="border-top:0;">
								<label class="col-sm-2 control-label">商品基本类</label>
								<div class="col-sm-10">
									<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="saleImage"><span>缩略图</span></label>
									<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="sku"><span>SKU</span></label>
									<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="name"><span>商品名称</span></label>
									<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="catalogiName"><span>商品目录</span></label>
									<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="saleStateName"><span>商品状态</span></label>
									<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="inventoryCount"><span>库存</span></label>
									<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="notDeliverCount"><span>待发货</span></label>
								</div>
							</div>
							<div class="form-group" style="border-top:0;">
								<label class="col-sm-2 control-label">商品信息类</label>
								<div class="col-sm-10">
									<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="eName"><span>英文名称</span></label>
									<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="virtualSku"><span>虚拟SKU</span></label>
									<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="declareEName"><span>申报品名(英文)</span></label>
									<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="declareName"><span>申报品名(中文)</span></label>
									<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="haveBatteryName"><span>是否带电池</span></label>
									<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="infringementName"><span>侵权</span></label>
									<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="remark"><span>备注信息</span></label>
								</div>
							</div>
							<div class="form-group" style="border-top:0;">
								<label class="col-sm-2 control-label">商品销售信息类</label>
								<div class="col-sm-10">
									<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="storgetImage"><span>库存图片</span></label>
									<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="gLength"><span>尺寸-长(cm)</span></label>
									<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="gWidth"><span>尺寸-宽(cm)</span></label>
									<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="gHeight"><span>尺寸-高(cm)</span></label>
									<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="volume"><span>体积(cm³)</span></label>
									<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="weight"><span>单品重量(g)</span></label>
									<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="volumeWeight"><span>体积重(kg)</span></label>
									<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="packName"><span>包材</span></label>
									<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="packCount"><span>可包装个数</span></label>
									<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="cost"><span>统一成本价</span></label>
									<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="price"><span>售价</span></label>
									<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="salerUserName"><span>销售员</span></label>
								</div>
							</div>
						</div>
						<div id="panel_footer">
						</div>
					</div>
				</div>
			</form>
			<div id="checkVal">
				<span id="saleImage"><input type="hidden" name="map-name-saleImage" value="缩略图"></span>
				<span id="sku"><input type="hidden" name="map-name-sku" value="SKU"></span>
				<span id="name"><input type="hidden" name="map-name-name" value="商品名称"></span>
				<span id="catalogiName"><input type="hidden" name="map-name-catalogiName" value="商品目录"></span>
				<span id="saleStateName"><input type="hidden" name="map-name-saleStateName" value="商品状态"></span>
				<span id="inventoryCount"><input type="hidden" name="map-name-inventoryCount" value="库存"></span>
				<span id="notDeliverCount"><input type="hidden" name="map-name-notDeliverCount" value="待发货"></span>
			</div>
		</div>
	</body>
</html>
