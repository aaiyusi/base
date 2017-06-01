<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/resources/platform/inc.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html ng-app="roleApp">
<head>
	<script src="${ctx.path}/resources/js/angular.min.js"></script>
    <script src="${ctx.path}/resources/platform/js/common_grid.js"></script>
    <script src="${ctx.path}/resources/platform/js/common_format.js"></script>
    <script src="${ctx.path}/resources/platform/script/pm/roleMenu.js?v=${ctx.versions}"></script>
    <link type="text/javascript" href="${ctx.path}/resources/platform/css/new.css" rel="stylesheet">
</head>
<body ng-controller="roleCtrl">
<div class="animated fadeInRight">
	<section id="main" role="main">
	    <div class="container-fluid has-toobar has-navbar multichoice">
	    	<div id="serachDiv" class="row form-group-sm">
	            <div class="ibox-content" style="padding: 5px 10px;padding-bottom: 0px;">
	                <form id="pageForm" method="post">
	                    <div class="form-inline">
	                        <div class="form-group">
	                            <label>角色名称：</label> <input type="text" name="roleName" class="form-control input-small"  maxlength="50" />
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
	                <!-- <div class="form-group">
	                    <button class="btn btn-primary btn-sm" type="button" ng-click="openAddPage();">新增</button>
	                </div>
	                <div class="form-group">
	                    <button class="btn btn-primary btn-sm" type="button" id="userEditBtn" ng-click="editPage();">编辑</button>
	                </div>
	                <div class="form-group">
	                    <button class="btn btn-primary btn-sm" type="button" id="userDel" onclick="del();">删除</button>
	                </div> -->
	                <div class="large-list-title">
		                    <button class="btn btn-primary btn-sm btn-success" type="button" ng-click="openAddPage();">新增角色</button>
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
			action="${ctx.path}/platform/pm/addRole.do">
			<div class="panel panel-default">
				<div class="panel-body pt0 pb0">
					<div class="form-horizontal form-bordered min" id="contentDiv">
						<div class="form-group">

							<label class="col-sm-2 control-label"><span
								class="text-danger pr5">*</span>角色名称</label>
							<div class="col-sm-4">
								<input type="text" class="form-control" name="roleName"
									placeholder="请输入角色名称">
							</div>
							 
						</div>
						<div class="form-group">
							<label class="col-sm-2 control-label">描述</label>
							<div class="col-sm-4">
									<textarea class="form-control" rows="3" name="descriptions"
									placeholder="请输入描述" maxlength="1000"></textarea>
							</div>
						</div>
					</div>
				</div>
				<div class="panel-heading">
					<h3 class="panel-title">
						<i class="ico-file4 mr5"></i>权限分配
					</h3>
				</div>
				<div class="panel-body pt0 pb0">
					<div class="form-group" ng-repeat="menu in menus">
						<label class="col-sm-2 control-label" ><input type="checkbox" ng-click="checkedAll(menu)"
								value="{{menu.menu_id}}" ng-checked="allCheckedFlag[menu.menu_id]">{{menu.menu_name}}</label>
						<div class="col-sm-10">
							<label class="checkbox-inline" ng-repeat="submenu in menu.submenusList"> <input type="checkbox" name="menuIds"
								value="{{submenu.menu_id}}" ng-checked="submenu.checked" ng-click="checked(submenu,menu.submenusList)">{{submenu.menu_name}}
							</label>
						</div>
					</div>
				</div>
			</div>

		</form>
</div>

<!-- 编辑 -->
<div id="dataEdit" class="white-bg" style="display:none;">
	<form method="post" class="form-horizontal" id="dataEditForm"
			action="${ctx.path}/platform/pm/updateRole.do">
			<div class="panel panel-default">
				<div class="panel-body pt0 pb0">
					<div class="form-horizontal form-bordered min" id="contentDiv">
						<div class="form-group">
							<label class="col-sm-2 control-label"><span
								class="text-danger pr5">*</span>角色名称</label>
							<div class="col-sm-4">
							<input type="hidden" name="roleId">
								<input type="text" class="form-control" name="roleName"
									placeholder="请输入角色名称">
							</div>
						</div>
						<div class="form-group">
							<label class="col-sm-2 control-label">描述</label>
							<div class="col-sm-4">
									<textarea class="form-control" type="textarea" rows="3" name="descriptions"
									placeholder="请输入描述" maxlength="1000"></textarea>
							</div>
						</div>
					</div>
				</div>
				<div class="panel-heading">
					<h3 class="panel-title">
						<i class="ico-file4 mr5"></i>权限分配
					</h3>
				</div>
				<div class="panel-body pt0 pb0">
					<div class="form-group" ng-repeat="menu in menus">
						<label class="col-sm-2 control-label" ><input type="checkbox" ng-click="checkedAll(menu)"
								value="{{menu.menu_id}}" ng-checked="allCheckedFlag[menu.menu_id]">{{menu.menu_name}}</label>
						<div class="col-sm-10">
							<label class="checkbox-inline" ng-repeat="submenu in menu.submenusList"> <input type="checkbox" name="menuIds"
								value="{{submenu.menu_id}}" ng-checked="submenu.checked" ng-click="checked(submenu,menu.submenusList)">{{submenu.menu_name}}
							</label>
						</div>
					</div>
				</div>
			</div>

		</form>
</div>
</body>
</html>
