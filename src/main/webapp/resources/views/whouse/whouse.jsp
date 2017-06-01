<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/resources/platform/inc.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<script src="${ctx.path}/resources/platform/js/common_grid.js"></script>
<script src="${ctx.path}/resources/platform/js/common_format.js"></script>
<script src="${ctx.path}/resources/script/whouse/whouse.js"></script>
<link href="${ctx.path}/resources/css/reset.css" rel="stylesheet"
	type="text/css">
<link href="${ctx.path}/resources/css/common.css" rel="stylesheet"
	type="text/css">
<link type="text/javascript"
	href="${ctx.path}/resources/platform/css/new.css" rel="stylesheet">
</head>
<body>
	<div class="main_con">
		<div class="warehousemenu_box">
			<div class="warehousemenu_tit">
				<h2>仓库管理</h2>

				<!-- 
      <p:auth mcode="addWhouseCode" >
      </p:auth>
       -->
				<button class="blue_btn" onclick="openAddWhouse()">新增仓库</button>
			</div>
			<div class="warehousemenu_con">
				<div class="col_tit">
					<h2>自建仓库</h2>
				</div>
				<div class="warehousemenu_list" style="overflow:auto;">
					<ul id="whouseSelf">
					</ul>
				</div>
			</div>
		</div>
		<!--   <div class="panel panel-default" id="whouseShelfDiv" style="display:none;">
				<div class="panel-heading">
					<h3 class="panel-title">
						自建仓库
					</h3>
				</div> -->
		<div class="warehousecontent_box" id="whouseShelfDiv"
			style="display:none;">
				<div class="warehousecontent_mess">
					<form method="post" id="whouseFrom"
						>
						<div class="col_tit">
							<h2>自建仓库</h2>
							<button   class="blue_btn" onclick="saveWhouse()" type="button">保存</button>
						</div>
						<input type="hidden" name="whouseId"  />
						<div class="warehousecontent_messlist">
							<ul>
								<li class="width33">
									<label class="label"><font color="red">*</font>仓库名称：</label>
									<div class="inputtextcon">
									  <input type="text" class="inputtext" name="whouseName" id="whouseName"
										data-msg-required="请输入仓库名称！" maxlength="20"/>
									</div>	
								</li>
								<li class="width33">
								    <label class="label">联系人：</label>
								    <div class="inputtextcon">
								        <input type="text" class="inputtext" name="contactName"  id="contactName" maxlength="10"/>
									</div>
							    </li>
								<li class="width34">
								  <label class="label">联系电话：</label>
								  <div class="inputtextcon">
								    <input type="text" class="inputtext" name="contactPhone" id="contactPhone" maxlength="15"/>
								  </div>
								</li>
								<li class="width66">
								   <label class="label">地址：</label>
								   <div class="inputtextcon">
								       <input type="text"
									class="inputtext width273" name="address" id="address"maxlength="100"/>
									</div>
								</li>
								<li class="width34">
								   <label class="label">邮政编码：</label>
								   <div class="inputtextcon">
								     <input type="text"	class="inputtext" name="postcode" id="postcode" maxlength="10"/>
								   </div>
								</li>
							</ul>
						</div>
					</form>
				</div>
				<div id="whouseShelfDivDetial" class="warehousecontent_mess" style="display:none;">
						<div class="col_tit bortopnone">
							<h2>货架管理</h2>
						<button  class="blue_btn"  onclick="openAddPage()" >新增货架</button>
						</div>

							<div class="jqGrid_wrapper">
								<table id="jqGrid"></table>
								<!-- 显示table -->
								<div id="jqGridPager"></div>
								<!-- 显示分页 -->
					</div>
				</div>
			</div>
	</div>




	<div id="dataAdd" class="white-bg" style="display:none;">
		<form method="post" class="form-horizontal" id="addShelfForm"
			action="${ctx.path}/api/warehouse/addErpShelf.do">
			<input type="hidden" name="whouseId" />
			<div class="panel panel-default ibox">
			    <div class="ibox-title">
			      <h5>基本信息</h5>
			      <div class="ibox-tools">
			        <a class="collapse-link"><i class="fa fa-chevron-up"></i> </a>
			      </div>
			    </div>
				<div class="panel-body ibox-content">
					<div class="form-horizontal form-bordered min" id="contentDiv">
						<div class="form-group">
							<label class="col-sm-2 control-label"><font color="red">*</font>货架编号</label>
							<div class="col-sm-4">
								<input type="text" class="form-control" name="shelfCode"
									placeholder="请输入货架编号" maxlength="10" readonly="readonly">
							</div>

							<label class="col-sm-2 control-label"><font color="red">*</font>货架名称</label>
							<div class="col-sm-4">
								<input type="text" class="form-control" name="shelfName"
									placeholder="请输入货架名称" maxlength="50">
							</div>
						</div>

						<div class="form-group">
							<label class="col-sm-2 control-label">仓位前缀</label>
							<div class="col-sm-4">
								<input type="text" class="form-control" name="shousePrefix"
									placeholder="请输入仓位前缀" maxlength="50">
							</div>

							<label class="col-sm-2 control-label">所属仓库</label>
							<div class="col-sm-4">
								<input type="hidden" class="form-control" name="whouseName">
								<p id="whouseNameAdd" class="loadtext"></p>
							</div>
						</div>

						<div class="form-group">
							<label class="col-sm-2 control-label">货架规格</label>
							<div class="col-sm-4">
								<div class="input-group input-group-sm">
									<input type="text" name="line" class="form-control text-center"  onkeyup="this.value=this.value.replace(/\D/g,'')"  onafterpaste="this.value=this.value.replace(/\D/g,'')" maxlength="2"
										placeholder="列数" onchange="updateShouseCount('addShelfForm')">
									<span style="border-width:1px 0;" class="input-group-addon">列</span>
									<input type="text" name="connector" maxlength="1"
										class="form-control text-center" value="&" placeholder="连接符"
										id="kern"> <span style="border-width:1px 0;"
										class="input-group-addon">连接符</span> <input type="text"
										name="tier" class="form-control text-center" placeholder="层数"  onkeyup="this.value=this.value.replace(/\D/g,'')"  onafterpaste="this.value=this.value.replace(/\D/g,'')" maxlength="2"
										onchange="updateShouseCount('addShelfForm')"> <span
										class="input-group-addon">层</span>
								</div>
								<p class="help-block">仓位号生成规则：仓位前缀+所属列+连接符+所属层;限100列20层</p>
							</div>

							<label class="col-sm-2 control-label">仓位数量</label>
							<div class="col-sm-4">
								<input type="hidden" class="form-control" name="shouseCount">
								<label id="shouseCount" style="width:40px"></label> <input
									type="button" class="btn btn-success" value="生成仓位预览" id="countAdd"
									onclick="batchBuildShouses('addShelfForm','addShouseDistribution')">
							</div>

						</div>

					</div>
				</div>
			</div>

			<div class="ibox">
				<div class="ibox-title">
				  <h5>仓位分布预览</h5>
				 <div class="ibox-tools">
				   <a class="collapse-link"><i class="fa fa-chevron-up"></i> </a>
				 </div>
				</div>
				<div class="ibox-content" style="width:100%; padding:0; overflow:auto;">
					<table id="addShouseDistribution" class="shouseDistribution">
					</table>
				</div>
			</div>

		</form>
	</div>


	<div id="dataEdit" class="white-bg" style="display:none;">
		<form method="post" class="form-horizontal" id="editShelfForm"
			action="${ctx.path}/api/warehouse/updateErpShelf.do">
			<input type="hidden" name="shelfId" />
			<div class="panel panel-default">
				<div class="panel-body pt0 pb0">
					<div class="form-horizontal form-bordered min" id="contentDiv">
						<div class="form-group">
							<label class="col-sm-2 control-label"><font color="red">*</font>货架编号</label>
							<div class="col-sm-4">
								<input type="text" class="form-control" name="shelfCode"
									placeholder="请输入货架编号" maxlength="10" readonly="readonly">
							</div>

							<label class="col-sm-2 control-label"><font color="red">*</font>货架名称</label>
							<div class="col-sm-4">
								<input type="text" class="form-control" name="shelfName"
									placeholder="请输入货架名称" maxlength="50">
							</div>
						</div>

						<div class="form-group">
							<label class="col-sm-2 control-label">仓位前缀</label>
							<div class="col-sm-4">
								<input type="text" class="form-control" name="shousePrefix"
									placeholder="请输入仓位前缀" maxlength="50">
							</div>

							<label class="col-sm-2 control-label">所属仓库</label>
							<div class="col-sm-4">
								<input type="hidden" class="form-control" name="whouseName"
									readonly="readonly">
								<p id="whouseNameEdit" class="loadtext"></p>
							</div>
						</div>

						<div class="form-group">
							<label class="col-sm-2 control-label">货架规格</label>
							<div class="col-sm-4">
								<div class="input-group input-group-sm">
									<input type="text" name="line" class="form-control text-center" onkeyup="this.value=this.value.replace(/\D/g,'')"  onafterpaste="this.value=this.value.replace(/\D/g,'')"  maxlength="2"
										placeholder="列数" onchange="updateShouseCount('editShelfForm')">
									<span style="border-width:1px 0;" class="input-group-addon">列</span>
									<input type="text" name="connector"  maxlength="1"
										class="form-control text-center" value="&" placeholder="连接符"
										id="kern"> <span style="border-width:1px 0;"
										class="input-group-addon">连接符</span> <input type="text" onkeyup="this.value=this.value.replace(/\D/g,'')"  onafterpaste="this.value=this.value.replace(/\D/g,'')"  maxlength="2"
										name="tier" class="form-control text-center" placeholder="层数"
										onchange="updateShouseCount('editShelfForm')"> <span
										class="input-group-addon">层</span>
								</div>
								<p class="help-block">仓位号生成规则：仓位前缀+所属列+连接符+所属层;限100列20层</p>
							</div>

							<label class="col-sm-2 control-label">仓位数量</label>
							<div class="col-sm-4">
								<input type="hidden" class="form-control" name="shouseCount"
									readonly="readonly"> <label id="shouseCountEdit"
									style="width:40px"></label> <input type="button" id="countEdit"
									class="btn btn-success" value="生成仓位预览"
									onclick="batchBuildShouses('editShelfForm','editShouseDistribution')">
							</div>
						</div>

					</div>
				</div>
			</div>

			<div class="ibox">
				<div class="ibox-title">
				  <h5>仓位分布预览</h5>
				 <div class="ibox-tools">
				   <a class="collapse-link"><i class="fa fa-chevron-up"></i> </a>
				 </div>
				</div>
				<div class="ibox-content" style="width:100%; padding:0; overflow:auto;">
					<table id="editShouseDistribution" class="shouseDistribution">
					</table>
				</div>
			</div>
		</form>
	</div>
</body>
</html>
