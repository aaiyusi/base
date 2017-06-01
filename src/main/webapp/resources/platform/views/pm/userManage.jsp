<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/resources/platform/inc.jsp"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html ng-app="userApp">
<head>
	<script src="${ctx.path}/resources/js/angular.min.js"></script>
	<script src="${ctx.path}/resources/platform/js/common_grid.js"></script>
	<script src="${ctx.path}/resources/platform/js/common_format.js"></script>
	<script src="${ctx.path}/resources/platform/script/pm/userGrid.js?v=${ctx.versions}"></script>
	<link type="text/javascript" href="${ctx.path}/resources/platform/css/new.css" rel="stylesheet">
</head>
<body ng-controller="userCtrl">
	<div class="animated fadeInRight">
	<section id="main" role="main">
	    <div class="container-fluid has-toobar has-navbar multichoice">
			<div id="serachDiv" class="row form-group-sm">
				<div class="ibox-content" style="padding: 5px 10px;padding-bottom: 0px;">
				  <form id="pageForm" method="post">
					<div class="form-inline">
						<div class="form-group">
							<label>登录名：</label> <input type="text" class="form-control input-small" name ="loginName" maxlength="50" placeholder="请输入登录名" />
							<label>员工姓名：</label> <input type="text" class="form-control input-small" name ="userName" maxlength="50" placeholder="请输入员工姓名" />
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
					<div class="form-inline operation_con">
						<!-- <div class="form-group">
							<button class="btn btn-primary btn-sm btn-success" type="button" ng-click="openAddPage()">新增</button> 
						</div> -->
						<!-- <div class="form-group">
							<button class="btn btn-primary btn-sm" type="button" id="userEditBtn" ng-click="editPage();">编辑</button>
						</div>
						<div class="form-group">
							<button class="btn btn-primary btn-sm" type="button" id="userDel" onclick="del();">删除</button>
						</div> -->
						<!-- <div class="form-group">
							<button class="btn btn-primary btn-sm" type="button" id="setRole" onclick="setRole();">分配角色</button>
						</div> -->
						<div class="large-list-title">
			                    <button class="btn btn-primary btn-sm btn-success" type="button" ng-click="openAddPage()">新增员工</button>
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

<!--新增用户-->
<div id="userAdd" class="white-bg" style="display:none;">
	<form method="post" class="form-horizontal" id="userForm"
		action="${ctx.path}/platform/pm/addUser.do">
		<div class="panel panel-default">
			<div class="panel-body pt0 pb0">
				<div class="form-horizontal form-bordered min" id="contentDiv">
					<div class="form-group">
						<label class="col-sm-2 control-label"><span
							class="text-danger pr5">*</span>登录名</label>
						<div class="col-sm-4">
							<input type="text" class="form-control" name="loginName"
								placeholder="请输入登录名">
						</div>
						<label class="col-sm-2 control-label"><span
							class="text-danger pr5">*</span>密码</label>
						<div class="col-sm-4">
							<input type="password" class="form-control" name="pwd"
								placeholder="请输入密码">
						</div>
					</div>
					<div class="form-group">

						<label class="col-sm-2 control-label"><span
							class="text-danger pr5">*</span>员工姓名</label>
						<div class="col-sm-4">
							<input type="text" class="form-control" name="userName"
								placeholder="请输入员工姓名">
						</div>

						<label class="col-sm-2 control-label">邮箱</label>
						<div class="col-sm-4">
							<input type="text" class="form-control" name="email"
								placeholder="请输入邮箱" maxlength="50">
						</div>
					</div>
					<div class="form-group">
						<label class="col-sm-2 control-label">手机</label>
						<div class="col-sm-4">
							<input type="text" class="form-control" name="mobilePhone"
								placeholder="请输入手机" maxlength="50">
						</div>
							<input type="hidden" class="form-control" name="userId"
								placeholder="请输入用户ID">
					</div>
				</div>
			</div>
			<div class="panel-heading">
				<h3 class="panel-title">
					<i class="ico-file4 mr5"></i>角色
				</h3>
			</div>
			<div class="panel-body pt0 pb0">
				<div class="form-group">
					<label class="col-sm-2 control-label"><input ng-checked="roleAllchecked" ng-click="checkedAllRole()" type="checkbox"
							value="" id="allRolesLabel">全选</label>
					<div class="col-sm-10">
						<label class="checkbox-inline" ng-repeat="role in roles"> <input type="checkbox"
							value="{{role.role_id}}"  ng-checked="role.checked" ng-click="checkedRole(role)" name="roles">{{role.role_name}}
						</label>
					</div>
				</div>
			</div>
			<div class="panel-heading">
				<h3 class="panel-title">
					<i class="ico-file4 mr5"></i>店铺权限
				</h3>
			</div>
			<div class="panel-body pt0 pb0">
				<div class="form-group">
					<label class="col-sm-2 control-label"><input type="checkbox" ng-checked="shopAllchecked" ng-click="checkedAllShop()">全选</label>
					<div class="col-sm-10">
						<label class="checkbox-inline" ng-repeat="shop in shops"> 
							<input type="checkbox" ng-checked="shop.checked" ng-click="checkedShop(shop)" name="shopIds" value="{{shop.shop_id}}">{{shop.shop_name}}
						</label>
					</div>
				</div>
			</div>
			<div class="panel-heading">
				<h3 class="panel-title">
					<i class="ico-file4 mr5"></i>仓库权限
				</h3>
			</div>
			<div class="panel-body pt0 pb0">
				<div class="form-group">
					<label class="col-sm-2 control-label" ><input type="checkbox" ng-checked="whAllchecked" ng-click="checkedAllWH()">全选</label>
					<div class="col-sm-10">
						<label class="checkbox-inline" ng-repeat="whouse in whouses">
							<input type="checkbox" ng-checked="whouse.checked" ng-click="checkedWH(whouse)" name="whouseIds" value="{{whouse.whouse_id}}" >{{whouse.whouse_name}}
						</label>
					</div>
				</div>
			</div>
		</div>
	</form>
</div>
	
<!--编辑用户-->	
<div id="userEdit" class="white-bg" style="display:none;">
	<form method="post" class="form-horizontal" id="userEditForm"
		action="${ctx.path}/platform/pm/updateUser.do">
		<div class="panel panel-default">
			<div class="panel-body pt0 pb0">
				<div class="form-horizontal form-bordered min" id="contentDiv">
					<div class="form-group">
						<label class="col-sm-2 control-label"><span
							class="text-danger pr5">*</span>登录名</label>
						<div class="col-sm-4">
							<input type="hidden" name="userId">
							<input type="text" class="form-control" readonly="readonly" name="loginName"
								placeholder="请输入登录名">
						</div>
						<!-- <label class="col-sm-2 control-label"><span
							class="text-danger pr5">*</span>密码</label>
						<div class="col-sm-4">
							<input type="password" class="form-control" name="pwd"
								placeholder="请输入密码">
						</div> -->
					</div>
					<div class="form-group">

						<label class="col-sm-2 control-label"><span
							class="text-danger pr5">*</span>员工姓名</label>
						<div class="col-sm-4">
							<input type="text" class="form-control" name="userName"
								placeholder="请输入员工姓名">
						</div>

						<label class="col-sm-2 control-label">邮箱</label>
						<div class="col-sm-4">
							<input type="text" class="form-control" name="email"
								placeholder="请输入邮箱" maxlength="50">
						</div>
					</div>
					<div class="form-group">
						<label class="col-sm-2 control-label">手机</label>
						<div class="col-sm-4">
							<input type="text" class="form-control" name="mobilePhone"
								placeholder="请输入手机" maxlength="50">
						</div>
							<input type="hidden" class="form-control" name="userId"
								placeholder="请输入用户ID">
					</div>
				</div>
			</div>
			<div class="panel-heading">
				<h3 class="panel-title">
					<i class="ico-file4 mr5"></i>角色
				</h3>
			</div>
			<div class="panel-body pt0 pb0">
				<div class="form-group">
					<label class="col-sm-2 control-label"><input ng-checked="roleAllchecked" ng-click="checkedAllRole()" type="checkbox"
							value="" id="allRolesLabel">全选</label>
					<div class="col-sm-10">
						<label class="checkbox-inline" ng-repeat="role in roles"> <input type="checkbox"
							value="{{role.role_id}}"  ng-checked="role.checked" ng-click="checkedRole(role)" name="roles">{{role.role_name}}
						</label>
					</div>
				</div>
			</div>
			<div class="panel-heading">
				<h3 class="panel-title">
					<i class="ico-file4 mr5"></i>店铺权限
				</h3>
			</div>
			<div class="panel-body pt0 pb0">
				<div class="form-group">
					<label class="col-sm-2 control-label"><input type="checkbox" ng-checked="shopAllchecked" ng-click="checkedAllShop()">全选</label>
					<div class="col-sm-10">
						<label class="checkbox-inline" ng-repeat="shop in shops"> 
							<input type="checkbox" ng-checked="shop.checked" ng-click="checkedShop(shop)" name="shopIds" value="{{shop.shop_id}}">{{shop.shop_name}}
						</label>
					</div>
				</div>
			</div>
			<div class="panel-heading">
				<h3 class="panel-title">
					<i class="ico-file4 mr5"></i>仓库权限
				</h3>
			</div>
			<div class="panel-body pt0 pb0">
				<div class="form-group">
					<label class="col-sm-2 control-label" ><input type="checkbox" ng-checked="whAllchecked" ng-click="checkedAllWH()">全选</label>
					<div class="col-sm-10">
						<label class="checkbox-inline" ng-repeat="whouse in whouses">
							<input type="checkbox" ng-checked="whouse.checked" ng-click="checkedWH(whouse)" name="whouseIds" value="{{whouse.whouse_id}}" >{{whouse.whouse_name}}
						</label>
					</div>
				</div>
			</div>
		</div>
	</form>
</div>	

<!-- 设置角色 -->
<%-- <div id="roleSet" class="white-bg" style="display:none;">
	<table class="white-bg animated fadeInRightBig" width="50%" align="center" style="margin-top: 10px;">
	  <thead style="COLOR:#fff; FONT-WEIGHT: bold; FONT-SIZE: 9pt; background:#39aef5; line-height:32px;">
	  	<tr>
		  <th style="text-align:center;">该用户拥有角色</th>
		  <th></th>
		  <th style="text-align:center;">全部角色</th>	
	  	</tr>		
	  </thead>
	  <tbody>
		<tr>
		  <td width="23%" align="right">		  	  
	        <select id="ownerRole" name="ownerRole" class="form-control" style="width:280px" size=15 ondblclick="removeRole();" multiple="">
			</select>
	      </td>
	      <td width="50px" align="center">
	   		<input type="button" class="btn btn-primary btn-sm" value="  <  " onClick="addRole();" /><br><br>
            <input type="button" class="btn btn-primary btn-sm" value="  >  " onClick="removeRole();"/>
		  </td>
	      <td width="23%" align="left">	
	        <select id="roleList" name="roleList" class="form-control" style="width:280px" size=15 ondblclick="addRole();" multiple="">
			</select>
	      </td>
        </tr>
      </tbody>
	</table>
</div> --%>
</html>

