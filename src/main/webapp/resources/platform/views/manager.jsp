 <%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/resources";
	Map<String,Object> ctx=new HashMap<String,Object>();
	ctx.put("path", path);
	ctx.put("basePath", basePath);
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
    <link href="${ctx.path}/resources/components/hplus/css/plugins/sweetalert/sweetalert.css" rel="stylesheet">
    <link href="${ctx.path}/resources/components/hplus/css/plugins/toastr/toastr.min.css" rel="stylesheet">
    
    <script src="${ctx.path}/resources/components/jquery/jquery.min.js"></script>
    <script src="${ctx.path}/resources/platform/js/platform.js"></script>
    <script src="${ctx.path}/resources/platform/script/manager/manager.js"></script>
    <script type="text/javascript">
		var ctx = ctx || {};
		ctx.path = '${ctx.path}';
		ctx.basePath = '${ctx.basePath}';
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
                        	<div class="logo_img"><a href="javascript:void(0);"></a></div>
                    	</div>
                        <%-- <div class="dropdown profile-element">
                            <span><img alt="image" class="img-circle" src="${ctx.path}/resources/components/hplus/img/profile_small.jpg" /></span>
                            <a data-toggle="dropdown" class="dropdown-toggle" href="javascript:void(0);">
                                <span class="clear">
                               <span class="block m-t-xs"><strong class="font-bold">Beaut-zihan</strong></span>
                                <span class="text-muted text-xs block">超级管理员<b class="caret"></b></span>
                                </span>
                            </a>
                            <ul class="dropdown-menu animated fadeInRight m-t-xs">
                                <li><a class="J_menuItem" href="form_avatar.html">修改头像</a>
                                </li>
                                <li><a class="J_menuItem" href="profile.html">个人资料</a>
                                </li>
                                <li><a class="J_menuItem" href="contacts.html">联系我们</a>
                                </li>
                                <li><a class="J_menuItem" href="mailbox.html">信箱</a>
                                </li>
                                <li class="divider"></li>
                                <li><a href="login.html">安全退出</a>
                                </li>
                            </ul>
                        </div>
                        <div class="logo-element" style="height: 60px">
                        </div> --%>
                    </li>
                    
                    <li>
                        <a href="javascript:void(0);">
                            <i class="fa fa-home"></i>
                            <span class="nav-label">系统管理</span>
                            <span class="fa arrow"></span>
                        </a>
                        <ul class="nav nav-second-level">
                            <li>
                                <a class="J_menuItem" href="${ctx.path}/resources/platform/views/pm/menuManage.jsp" data-index="0"><em class="fa fa-circle">菜单管理</em></a>
                            </li>
                            <li>
                                <a class="J_menuItem" href="${ctx.path}/resources/platform/views/pm/roleMenuManage.jsp"><em class="fa fa-circle">角色管理</em></a>
                            </li>
                            <li>
                                <a class="J_menuItem" href="${ctx.path}/resources/platform/views/pm/userManage.jsp"><em class="fa fa-circle">用户管理</em></a>
                            </li>
                        </ul>
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
                        <label class="minimalize-styl-2" style="font-size:16px;margin:12px 0px 0px -10px;">江西尚通科技发展股份有限公司</label>
                    </div>
                    <ul class="nav navbar-top-links navbar-right">
                        <li class="dropdown">
                            <a class="dropdown-toggle count-info" data-toggle="dropdown" href="javascript:void(0);">
                                <i class="fa fa-envelope"></i> <span class="label label-warning">16</span>
                            </a>
                        </li>
                        <li class="dropdown">
                        	<a class="dropdown-toggle count-info" data-toggle="dropdown" href="javascript:void(0);">
                                <i class="fa fa-bell"></i> <span class="label label-primary">8</span>
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-toggle count-info" href="javascript:logout();">
                                <i class="fa fa-sign-out"></i> 退出
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
                        <a href="javascript:;" class="active J_menuTab" data-id="index_v1.html"></a>
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
                <iframe class="J_iframe" name="iframe0" width="100%" height="100%" frameborder="0" data-id="index_v1.html" seamless></iframe>
            </div>
        </div>
        <!--右侧部分结束-->
	    <!-- 全局js -->
	    <script src="${ctx.path}/resources/components/jquery/jquery.min.js?v=2.1.4"></script>
	    <script src="${ctx.path}/resources/components/hplus/bootstrap.min.js?v=3.3.6"></script>
	    <script src="${ctx.path}/resources/components/hplus/plugins/metisMenu/jquery.metisMenu.js"></script>
	    <script src="${ctx.path}/resources/components/hplus/plugins/slimscroll/jquery.slimscroll.min.js"></script>
	    <script src="${ctx.path}/resources/components/hplus/plugins/layer/layer.min.js"></script>
	
	    <!-- 自定义js -->
	    <script src="${ctx.path}/resources/components/hplus/hplus.js?v=4.1.0"></script>
	    <script type="text/javascript" src="${ctx.path}/resources/components/hplus/contabs.js"></script>
	
	    <!-- 第三方插件 -->
	    <script src="${ctx.path}/resources/components/hplus/plugins/pace/pace.min.js"></script>
	    <script src="${ctx.path}/resources/components/hplus/plugins/sweetalert/sweetalert.min.js"></script>
	    <script src="${ctx.path}/resources/components/hplus/plugins/toastr/toastr.min.js"></script>
</body>
</html>
