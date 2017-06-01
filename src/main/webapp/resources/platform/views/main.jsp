 <%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/resources";
	Map<String,Object> ctx=new HashMap<String,Object>();
	ctx.put("path", path);
	ctx.put("basePath", basePath);
	ctx.put("versions", System.currentTimeMillis());
	pageContext.setAttribute("ctx", ctx);
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
  	 <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=9" />

    <title>电商ERP服务平台</title>


    <!--[if lt IE 9]>
    	<script>
	        alert('本系统已不支持IE6-8，请使用谷歌、火狐等浏览器\n或360、QQ等国产浏览器的极速模式浏览本页面！');
	    </script>
    <![endif]-->

    <link rel="shortcut icon" href="${ctx.path}/resources/platform/images/favicon.ico" type="image/x-icon"> 
    <link href="${ctx.path}/resources/components/hplus/css/bootstrap.min.css?v=3.3.6" rel="stylesheet">
    <link href="${ctx.path}/resources/components/hplus/css/font-awesome.min.css?v=4.4.0" rel="stylesheet">
    <link href="${ctx.path}/resources/components/hplus/css/animate.css" rel="stylesheet">
    <link href="${ctx.path}/resources/components/hplus/css/style.css?v=4.1.0" rel="stylesheet">
    <link href="${ctx.path}/resources/css/erp_style.css" rel="stylesheet">
    <link href="${ctx.path}/resources/components/hplus/css/plugins/sweetalert/sweetalert.css" rel="stylesheet">
    <link href="${ctx.path}/resources/components/hplus/css/plugins/toastr/toastr.min.css" rel="stylesheet">
    <script src="${ctx.path}/resources/components/jquery/jquery.min.js"></script>
    <script src="${ctx.path}/resources/platform/js/platform.js"></script>
	
	<!-- 校验 -->
	<script src="${ctx.path}/resources/components/validation/jquery.validate.js"></script>
	<script src="${ctx.path}/resources/components/validation/additional-methods.js"></script>
	<script src="${ctx.path}/resources/components/validation/messages_zh.js"></script>
	<script src="${ctx.path}/resources/platform/js/common_validate.js"></script>
	<script src="${ctx.path}/resources/platform/js/common_check.js"></script>

	<script src="${ctx.path}/resources/platform/script/main/main.js"></script>
	<script src="${ctx.path}/resources/platform/script/manager/manager.js?v=${ctx.versions}"></script>
    <script type="text/javascript">
		var ctx = ctx || {};
		ctx.path = '${ctx.path}';
		ctx.basePath = '${ctx.basePath}';
		ctx.versions = '${ctx.versions}';
		
		$(document).ready(function(){
			var menus = ${menus};
			initMainMenus(menus);
			
			layer.config({
				skin : 'layer-ext-moon',
				extend : 'skin/moon/style.css'
			});
		});
	</script>
  </head>
  
<body class="fixed-sidebar full-height-layout gray-bg" style="overflow:hidden">
    <div id="wrapper">
        <!--左侧导航开始-->
        <nav class="navbar-default navbar-static-side" role="navigation">
            <div class="nav-close"><i class="fa fa-times-circle"></i>
            </div>
            <div class="sidebar-collapse">
               <ul class="nav" id="side-menu">
					<li class="nav-header mlogo" style="height: 49px" id="nav-header-menu">
                        <div class="dropdown profile-element">
                    	</div>
                    </li>
                </ul>
            </div>
        </nav>
        <!--左侧导航结束-->
        <!--右侧部分开始-->
        <div id="page-wrapper" class="gray-bg dashbard-1">
            <div class="row border-bottom">
                <nav class="navbar navbar-static-top" role="navigation" style="margin-bottom: 0">
                    <div class="navbar-header"><a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="javascript:void(0);"><i class="fa fa-bars"></i> </a>
                    	<!-- 
                        <form role="search" class="navbar-form-custom" method="post" action="search_results.html">
                            <div class="form-group">
                                <input type="text" placeholder="请输入您需要查找的内容 …" class="form-control" name="top-search" id="top-search">
                            </div>
                        </form>
                        -->
                        <label id="lableCompany" class="minimalize-styl-2" style="font-size:16px;margin:12px 0px 0px -10px;">${enterprise.companyName }</label>
                    </div>
                    <ul class="nav navbar-top-links navbar-right">
                        <!-- <li class="dropdown">
                            <a class="dropdown-toggle count-info" data-toggle="dropdown" href="javascript:void(0);" title="">
                                <i class="midicon sms_ico"></i> <span class="label label-warning">16</span>
                            </a>
                        </li>
                        <li class="dropdown">
                        	<a class="dropdown-toggle count-info" data-toggle="dropdown" href="javascript:void(0);">
                                <i class="midicon remind_ico"></i> <span class="label label-primary">8</span>
                            </a>
                        </li> -->
                        <li class="dropdown profile">
	                        <a data-toggle="dropdown" class="dropdown-toggle" href="javascript:void(0);">
								<i class="midicon usersettings_ico"></i><span class="arrow pl5"></span>
	                        </a>
	                        <ul role="menu" class="dropdown-menu">
	                            <li><a href="#changeInfo" data-toggle="modal" onclick="openInfoPage()" ><span class="icon"><i class="ico-user2 mr5"></i></span>个人资料</a></li>
								<li><a href="#changePS" data-toggle="modal" onclick="openPwdPage()"><span class="icon"><i class="ico-key2 mr5"></i></span>修改密码</a></li>
	                        </ul>
                   		</li>
                        <li>
                            <a class="dropdown-toggle count-info" href="javascript:logout();">
                                <i class="midicon exit_ico"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="row content-tabs">
                <button class="roll-nav roll-left J_tabLeft"><i class="fa fa-backward"></i>
                </button>
                <nav class="page-tabs J_menuTabs">
                    <div class="page-tabs-content">
                       <a href="javascript:;" class="active J_menuTab" data-id="${ctx.path}/resources/views/home.jsp">首页</a>
                    </div>
                </nav>
                <button class="roll-nav roll-right J_tabRight"><i class="fa fa-forward"></i>
                </button>
                <div class="btn-group roll-nav roll-right">
                    <button class="dropdown J_tabClose" data-toggle="dropdown">关闭操作<span class="caret"></span>

                    </button>
                    <ul role="menu" class="dropdown-menu dropdown-menu-right">
                        <li class="J_tabShowActive"><a>定位当前选项卡</a>
                        </li>
                        <li class="divider"></li>
                        <li class="J_tabCloseAll"><a>关闭全部选项卡</a>
                        </li>
                        <li class="J_tabCloseOther"><a>关闭其他选项卡</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row J_mainContent" id="content-main">
                <iframe class="J_iframe" name="iframe0" width="100%" height="100%" frameborder="0" src="${ctx.path}/resources/views/home.jsp" data-id="${ctx.path}/resources/views/home.jsp" seamless></iframe>
            </div>
        </div>
        <!--右侧部分结束-->
	    <!-- 全局js -->
	    <script src="${ctx.path}/resources/components/hplus/bootstrap.min.js?v=3.3.6"></script>
	    <script src="${ctx.path}/resources/components/hplus/plugins/metisMenu/jquery.metisMenu.js"></script>
	    <script src="${ctx.path}/resources/components/hplus/plugins/slimscroll/jquery.slimscroll.min.js"></script>
	    <script src="${ctx.path}/resources/components/hplus/plugins/layer/layer.min.js"></script>
		<script src="${ctx.path}/resources/components/jquery/jquery.formFill.js"></script>
		<script src="${ctx.path}/resources/components/jquery/jquery.form.js"></script>

	    <!-- 自定义js -->
	    <script src="${ctx.path}/resources/components/hplus/hplus.js?v=4.1.0"></script>
	    <script type="text/javascript" src="${ctx.path}/resources/components/hplus/contabs.js"></script>
	
	    <!-- 第三方插件 -->
	    <script src="${ctx.path}/resources/components/hplus/plugins/pace/pace.min.js"></script>
	    <script src="${ctx.path}/resources/components/hplus/plugins/sweetalert/sweetalert.min.js"></script>
	    <script src="${ctx.path}/resources/components/hplus/plugins/toastr/toastr.min.js"></script>
	    
	    
	    <!------------------------------------------------- 修改密码开始 ---------------------------------------------->
	    <div id="changePS" class="modal fade" aria-hidden="true" style="display: none;">
			<div class="modal-dialog">
				<form parsley-validate="" action="${ctx.path}/platform/pm/updateCurrentPwd.do" id="navigation-formEmployee" name="navigation-formEmployee" class="modal-content form-horizontal form-bordered advance-search">
					<div class="modal-content">
						<div class="modal-header text-center">
							<button type="button" class="close" data-dismiss="modal">×</button>
							<div class="ico-key2" style="font-size:30px;"></div>
							<h3 class="semibold modal-title mb5">修改密码</h3>
							<p class="text-danger mb0">请输入6-16位密码，可由数字、字母或常用符号组合，如果不修改密码请勿填写</p>
						</div>
						<div class="modal-body">
							<div class="row">
								<div class="col-md-12">
									<!-- panel body -->
									<div class="form-group">
										<label class="col-sm-3 control-label"><span class="text-danger pr5">*</span>旧密码</label>
										<div class="col-sm-6">
											<input type="password" maxlength="16" minlength="6" placeholder="旧密码"  required data-msg-required="请输入旧密码！" class="form-control" id="oldPwd" name="oldPwd">
										</div>
									</div>
									<div class="form-group">
										<label class="col-sm-3 control-label"><span class="text-danger pr5">*</span>新密码</label>
										<div class="col-sm-6">
											<input type="password" maxlength="16" minlength="6"  placeholder="新密码" required data-msg-required="请输入新密码！" class="form-control" id="pwd" name="pwd">
										</div>
									</div>
									<div class="form-group">
										<label class="col-sm-3 control-label"><span class="text-danger pr5">*</span>确认新密码</label>
										<div class="col-sm-6">
											<input type="password"  maxlength="16" minlength="6"  placeholder="确认新密码" required data-msg-required="请输入确认新密码！" class="form-control" id="repwd" name="repwd">
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="modal-footer">
							<button type="button" onclick="checkUpdatePwd( $('#navigation-formEmployee') )"  class="btn btn-primary">保存</button>
							<button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
						</div>
					</div><!-- /.modal-content -->
				</form>
			</div><!-- /.modal-dialog -->
		</div>
		<!-----------------------------------------------  修改密码开结束----------------------------------------------- >
		
		<!------------------------------------------------- 个人资料开始 ---------------------------------------------->
	    <div id="changeInfo" class="modal fade" aria-hidden="true" style="display: none;">
			<div class="modal-dialog">
				<form parsley-validate="" onSubmit=""  action="${ctx.path}/platform/pm/updateCurrentUserInfo.do" id="formEmployeeDetail" name="formEmployeeDetail" class="modal-content form-horizontal form-bordered advance-search">
					<div class="modal-content">
						<div class="modal-header text-center">
							<button type="button" class="close" data-dismiss="modal">×</button>
							<div class="ico-key2" style="font-size:30px;"></div>
							<h3 class="semibold modal-title mb5">修改个人资料</h3>
							<p class="text-danger mb0"></p>
						</div>
						<div class="modal-body">
							<div class="row">
								<div class="col-md-12">
									<!-- panel body -->
									<div class="form-group">
										<label class="col-sm-3 control-label"><span class="text-danger pr5">*</span>姓名</label>
										<div class="col-sm-6">
											<input type="text" class="form-control" maxlength="25" placeholder="姓名"  required data-msg-required="请输入姓名！" pl  id="userName"  name="userName">
										</div>
									</div>
									<div class="form-group">
										<label class="col-sm-3 control-label">手机</label>
										<div class="col-sm-6">
											<input type="text" isMobile="true" maxlength="25"  placeholder="手机" class="form-control"  id="mobilePhone" name="mobilePhone">
										</div>
									</div>
									<div class="form-group">
										<label class="col-sm-3 control-label">邮箱</label>
										<div class="col-sm-6">
											<input type="text" email="true" maxlength="25" placeholder="邮箱" class="form-control" id="email" name="email">
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="modal-footer">
							<button type="button" onclick="checkUpdateInfo($('#formEmployeeDetail'))" class="btn btn-primary" >保存</button>
							<button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
						</div>
					</div><!-- /.modal-content -->
				</form>
			</div><!-- /.modal-dialog -->
		</div>
		<!----------------------------------------------- 个人资料结束----------------------------------------------- -->
</body>
</html>
