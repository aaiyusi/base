<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/resources/platform/inc.jsp"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="${ctx.basePath}">
    
	<link rel="stylesheet" type="text/css" href="${ctx.path}/resources/components/zTree/css/zTreeStyle/zTreeStyle.css" />
	<script type="text/javascript" src="${ctx.path}/resources/components/zTree/js/jquery.ztree.core-3.5.min.js"></script>
	<script type="text/javascript" src="${ctx.path}/resources/components/zTree/js/jquery.ztree.exedit-3.5.min.js"></script>
	<script type="text/javascript" src="${ctx.path}/resources/components/zTree/js/jquery.ztree.excheck-3.5.min.js"></script>
	<style type="text/css">
			.ztree li span.button.add {margin-left:2px; margin-top:10px; margin-right: -1px; background-position:-144px 0; vertical-align:top; *vertical-align:middle}
			.ztree li span.button.up {margin-left:2px; margin-top:10px; margin-right: 2px; width:16px; height:16px; vertical-align:top; *vertical-align:middle;background-image: url("${ctx.path}/resources/components/zTree/css/zTreeStyle/img/custom/up.png");}
			.ztree li span.button.down {margin-left:2px; margin-top:10px; margin-right: 2px; width:16px; height:16px; vertical-align:top; *vertical-align:middle;background-image: url("${ctx.path}/resources/components/zTree/css/zTreeStyle/img/custom/down.png");}
			.ztree li span.button.disable {margin-left:2px; margin-top:10px; margin-right: 2px; width:16px; height:16px; vertical-align:top; *vertical-align:middle;background-image: url("${ctx.path}/resources/components/zTree/css/zTreeStyle/img/custom/disable.png");}
			.ztree li span.button.enable {margin-left:2px; margin-top:10px; margin-right: 2px; width:16px; height:16px; vertical-align:top; *vertical-align:middle;background-image: url("${ctx.path}/resources/components/zTree/css/zTreeStyle/img/custom/enable.png");}
			
			
			*{ box-sizing: border-box;}
			body,h1,h2,h3,h4,h5{padding:0;margin:0;font-family: "微软雅黑";}
			h1,h2,h3,h4,h5{ font-weight: normal;}
			.hr-30{height:30px;}
			.left{position:fixed; width:215px; height:100%; OVERFLOW-Y: auto;OVERFLOW-X: hidden;}
			.right{ margin-left:215px; margin-right:10px;display:none;}
			.right h2{ font-size:18px;color:#354052;}
			.right .new_con{ position:relative; clear: both; min-height: 38px; padding:10px 0;}
			.right .new_con .necessary{ position:absolute; top:14px; color:#ff4800;}
			.right .new_con .new_name{ float:left; width:95px; margin-left:10px; line-height:25px; color:#5f6b7e;}
			.right .new_con .new_content{position: relative; float:left; min-width:400px;color:#5f6b7e}
			.right .new_con .new_text{ width:253px; height:30px; padding:7px 5px; border-radius:4px; border:1px solid #ddd;}
			.right .bottom{ text-align:right; padding-right:20px; border-top:1px solid #dfdfdf;}
			.right .btn{ display:inline-block; height:30px; line-height:27px; padding:0 20px; background-color:#4d72a9; border:1px solid #4d72a9; border-radius:4px; font-size:13px; color:#FFF; cursor:pointer;}
			.float-e-margins .btn {margin-bottom: 0px;}
	</style>
	<script type="text/javascript" src="${ctx.path}/resources/platform/script/pm/menu.js"></script>
	
		</head>
		<body class="gray-bg">
			<div class="wrapper wrapper-content  animated fadeInRight">
				<div class="row">
					<div class="col-sm-4"  >   
						<div class="ibox float-e-margins" >
							<div class="ibox-title">
							<h5>菜单树</h5>
								<div class="ibox-tools">
									<a class="collapse-link"> <i class="fa fa-chevron-up"></i>
									</a>
								</div>
							</div>
							
							<div class="ibox-content" > 
						    <div> 
								<div class="row" > 
									<div class="col-sm-12" >
									       <div id="tree"  style="overflow: auto;"> 
			                                 <div class="full-height-scroll">
												<ul id="treeDemo" class="ztree"></ul> 
										     </div>
										    </div>
									</div>
								</div>
							</div>
							</div>
						</div>
					</div>
				<div class="col-sm-8" id="menuTable">
				<div class="ibox float-e-margins" >
					<div class="ibox-title">
						<h5>
							<span id="menuName"></span>-菜单按钮
						</h5>
						
						<div class="ibox-tools">
							<a class="collapse-link"> <i class="fa fa-chevron-up"></i>
							</a>
						</div>
					</div>
					<div class="form-inline" id="buttonDiv" style="margin_bottom:0px;">
						<div class="form-group">
							<button type="button" class="btn btn-primary btn-sm" onclick="showAddMenuDiv(true)" id="add"> 新增</button>
						</div>
						<div class="form-group">
							<button type="button" class="btn btn-primary btn-sm" onclick="showUpdateMenuDiv(true)" id="edit">编辑</button>
						</div>
						<div class="form-group">
							<button type="button" class="btn btn-primary btn-sm" onclick="delFuncMenus()" id="del"> 删除</button>
						</div>
						<div class="form-group">
							<button type="button" class="btn btn-primary btn-sm" onclick="disableFuncMenu(1)" id="disable"> 禁用</button>
						</div>
						<div class="form-group">
							<button type="button" class="btn btn-primary btn-sm" onclick="disableFuncMenu(1)" id="enable"> 恢复</button>
						</div>
						<div class="form-group">
							<button type="button" class="btn btn-primary btn-sm" onclick="changeFuncMenusSortby(1)" id="up"> 上移</button>
						</div>
						<div class="form-group">
							<button type="button" class="btn btn-primary btn-sm" onclick="changeFuncMenusSortby(0)" id="down"> 下移</button>
						</div>
					</div>
					<div class="ibox-content jqGrid_wrapper white-bg">
						<table id="jqGrid"></table>
						<!-- 显示table -->
						<div id="jqGridPager"></div>
						<!-- 显示分页 -->
					</div>
				</div>
			</div>
				</div>
			</div>


<!--新增菜单-->
<div id="menuDiv" class="white-bg" style="display:none;padding-top:10px;">
	<form method="post" class="form-horizontal" style="margin-right: 15px; margin-left: 15px;" id="menuForm" action="${ctx.path}/platform/pm/addMenu.do">
			<input name='parentId'  type="hidden"  class="form-control"/>
			<div class="form-group">
				<label class="col-sm-3 control-label"><font color="red">*</font>菜单类型：</label>
				<div class="col-sm-8">
						<select class="form-control" name="menuType" type="select"  onchange="menuTypeChange(this.options[this.options.selectedIndex].value,'urlDiv')">
										<option value="0">菜单分组</option>
										<option value="1">功能菜单</option>
						</select>
				</div>
			</div>
			<div class="hr-line-dashed"></div>
			<div class="form-group">
				<label class="col-sm-3 control-label"><font color="red">*</font>菜单编码：</label>
				<div class="col-sm-8">
					<input type="text" name="menuCode" class="form-control"  maxlength="100"  placeholder="请输入菜单编码"  required data-msg-required="请输入菜单编码！" />
				</div>
			</div>
			<div class="hr-line-dashed"></div>
			<div class="form-group">
				<label class="col-sm-3 control-label"><font color="red">*</font>菜单名称：</label>
				<div class="col-sm-8">
					<input type="text" name="menuName" class="form-control" maxlength="10" placeholder="请输入菜单名称"  required data-msg-required="请输入菜单名称！" />
				</div>
			</div>
			<div id="urlDiv" style="display:none;">
				<div class="hr-line-dashed"></div>
				<div class="form-group">
					<label class="col-sm-3 control-label">资源路径：</label>
					<div class="col-sm-8">
						<input type="text" name="url" class="form-control" maxlength="100" placeholder="请输入资源路径" />
					</div>
				</div>
			</div>
			<div class="hr-line-dashed"></div>
			<div class="form-group">
				<label class="col-sm-3 control-label">菜单描述：</label>
				<div class="col-sm-8">
					<input type="text" name="descriptions" class="form-control" maxlength="10" placeholder="请输入菜单描述"  />
				</div>
			</div>
  	</form>
</div>


<!--修改菜单-->
<div id="menuUpdateDiv" class="white-bg" style="display:none;padding-top:10px;">
	<form method="post" class="form-horizontal" style="margin-right: 15px; margin-left: 15px;" id="menuUpdateForm" action="${ctx.path}/platform/pm/updateMenu.do">
			<input name='menuId'  type="hidden" class="form-control" />
			<div class="form-group">
				<label class="col-sm-3 control-label"><font color="red">*</font>菜单类型：</label>
				<div class="col-sm-8">
						<select class="form-control" name="menuType" type="select" onchange="menuTypeChange(this.options[this.options.selectedIndex].value,'urUpdatelDiv')">
										<option value="0">菜单分组</option>
										<option value="1">功能菜单</option>
						</select>
				</div>
			</div>
			<div class="hr-line-dashed"></div>
			<div class="form-group">
				<label class="col-sm-3 control-label"><font color="red">*</font>菜单编码：</label>
				<div class="col-sm-8">
					<input type="text" name="menuCode" id="menuCode" class="form-control"  maxlength="100"  placeholder="请输入菜单编码"  required data-msg-required="请输入菜单编码！"/>
				</div>
			</div>
			<div class="hr-line-dashed"></div>
			<div class="form-group">
				<label class="col-sm-3 control-label"><font color="red">*</font>菜单名称：</label>
				<div class="col-sm-8">
					<input type="text" name="menuName" class="form-control" maxlength="10" placeholder="请输入菜单名称"  required data-msg-required="请输入菜单名称！" />
				</div>
			</div>
			<div id="urlUpdateDiv" style="display:none;">
				<div class="hr-line-dashed"></div>
				<div class="form-group">
					<label class="col-sm-3 control-label">资源路径：</label>
					<div class="col-sm-8">
						<input type="text" name="url" class="form-control" maxlength="100" placeholder="请输入资源路径"  />
					</div>
				</div>
			</div>
			<div class="hr-line-dashed"></div>
			<div class="form-group">
				<label class="col-sm-3 control-label">菜单描述：</label>
				<div class="col-sm-8">
					<input type="text" name="descriptions" class="form-control" maxlength="10" placeholder="请输入菜单描述"  />
				</div>
			</div>
  	</form>
</div>
</body>
</html>