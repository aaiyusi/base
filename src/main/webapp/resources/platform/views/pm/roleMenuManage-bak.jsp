<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/resources/platform/inc.jsp"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<link rel="stylesheet" type="text/css" href="${ctx.path}/resources/components/zTree/css/zTreeStyle/zTreeStyle.css" />
		<script type="text/javascript" src="${ctx.path}/resources/components/zTree/js/jquery.ztree.core-3.5.min.js"></script>
		<script type="text/javascript" src="${ctx.path}/resources/components/zTree/js/jquery.ztree.exedit-3.5.min.js"></script>
		<script type="text/javascript" src="${ctx.path}/resources/components/zTree/js/jquery.ztree.excheck-3.5.min.js"></script>
		<script type="text/javascript" src="${ctx.path}/resources/components/hplus/plugins/slimscroll/jquery.slimscroll.min.js"></script>
		<script type="text/javascript" src="${ctx.path}/resources/platform/script/pm/roleMenu.js"></script>
		<style type="text/css">
			body{padding:0;margin:0; background:#f4f6fa;}
			.left{OVERFLOW-Y: auto;OVERFLOW-X: hidden;}
			.left ul li:hover{background:#f5f5f5;}
			.left,.right{margin:0px 0;}
			.right{padding:0px;}
			.right .catalog{margin:0;margin-bottom:0px; font-weight:bold; background:url(${ctx.path}/resources/platform/images/catalog_ico.png) no-repeat; font-size:14px; color:#555; padding-left:20px;}
			/*
			.btn{ display:inline-block; height:30px; line-height:27px; padding:0 20px; background-color:#4d72a9; border:1px solid #4d72a9; border-radius:4px; font-size:13px; color:#FFF; cursor:pointer;}
			.add_btn{margin:10px; margin-bottom:0; background:url(${ctx.path}/resources/platform/images/add_ico.png) no-repeat #4d72a9 7px;}
			*/
			.user_list ul{margin:0px; padding:0;list-style-type:none; font-size: 14px;}
			.user_list li{ padding-bottom:5px; padding-top:5px; line-height:30px;border-bottom:1px solid #e9e9e9; color:#354052;}
			.user_list span{ color:#676a6c;}
			.edit_btn,.del_btn,.iradio_btn,.iCheck_btn{float:right; display: inline-block; width:19px; height:19px; margin-left:10px; margin-top:5px; border-radius: 4px; background:url(${ctx.path}/resources/platform/images/userManage.png) no-repeat; text-indent:999px;white-space:nowrap; cursor: pointer;}
			.del_btn{ background-position:0 -25px;}
			.menu_save{ margin-top:15px;}
			.iradio_btn{background-position:-1px -60px;}
			.iCheck_btn{background-position:-1px -83px;}
		</style>
	</head>
	<body>
		<div class="wrapper wrapper-content animated fadeInRight">
			<div class="row">
				<div class="col-sm-5 left">
					<div class="ibox" >
						<div class="ibox-content">
							<div class="mail-tools tooltip-demo m-t-sm">
								<button class="btn btn-primary btn-sm" id="addRoleBtn" onclick="showAddRole()">新增角色</button>
							</div>
							 <div class="m-t-xs" style="height:500px;">
	                        	<div class="full-height-scroll project-list" >
	                        		<div class="user_list table-responsive">
			                        	<ul id="roleListDiv">
<!-- 			                        		<li>角色名称<span onclick="" class="iradio_btn"></span><span onclick="" class="iCheck_btn"></span><span onclick="" class="del_btn"></span><span onclick="alert(1)" class="edit_btn"></span></li> -->
			                        	</ul>
			                        </div>
	                    		</div>
	                    	</div>
						</div>
					</div>
				</div>
				<div class="col-sm-7 right">
					<div class="ibox ">
						<div class="ibox-content">
<!-- 							<h2 class="catalog">角色菜单</h2> -->
							<div class="mail-tools tooltip-demo m-t-sm pull-left">
								<button class="btn btn-primary btn-sm" id="addRoleFunsBtn" onclick="setRoleMenus()">保存角色菜单</button>
							</div>
			                 <h2 class="catalog m-t-sm pull-right">菜单功能权限</h2>
							<div style="clear:both;"></div>
							 <div class="m-t-xs">
	                        	<div class="full-height-scroll m-t-xs" >
									<ul id="treeDemo" class="ztree"></ul>		                            
		                        </div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

<div id="roleDiv" class="white-bg" style="display:none;padding-top:10px;">
	<form method="post" class="form-horizontal" style="margin-right: 15px; margin-left: 15px;" id="roleForm" action="">
		<input type="hidden" name="roleId" />
		<div class="form-group">
			<label class="col-sm-3 control-label"><font color="red">*</font>角色名称：</label>
			<div class="col-sm-9">
				<input type="text" name="roleName" class="form-control" maxlength="100" placeholder="请输入角色名称" required data-msg-required="请输入角色名称！"/>
			</div>
		</div>
		<div class="hr-line-dashed"></div>
		<div class="form-group">
			<label class="col-sm-3 control-label">角色描述：</label>
			<div class="col-sm-9">
				<textarea class="form-control" name="descriptions" maxlength="500" rows="3" type="textarea" placeholder="请输入角色描述"></textarea>
			</div>
		</div>
	</form>
</div>

<SCRIPT type="text/javascript">
	$(document).ready(function(){
		loadRoleMenu();
		//细滚动条边框支持
		$('.full-height-scroll').slimScroll({
	        height: '100%'
	    });
	    
	    //滚动条父级div高度自适应
	    $("body").css('overflow','hidden');
	    $(".full-height-scroll").parent().parent().css('height', $(window).height()-155);
	    $(window).bind('resize', function () {
			$(".full-height-scroll").parent().parent().css('height', $(window).height()-155);
		});
	});
</SCRIPT>
	</body>
</html>
