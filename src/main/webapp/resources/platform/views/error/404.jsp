<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>电商ERP服务平台</title>
    <link rel="shortcut icon" href="<%=path%>/resources/images/favicon.ico"> 
    <link href="<%=path%>/resources/components/hplus/css/bootstrap.min.css?v=3.3.6" rel="stylesheet">
    <link href="<%=path%>/resources/components/hplus/css/font-awesome.css?v=4.4.0" rel="stylesheet">
    <link href="<%=path%>/resources/components/hplus/css/animate.css" rel="stylesheet">
    <link href="<%=path%>/resources/components/hplus/css/style.css?v=4.1.0" rel="stylesheet">

</head>

<body class="gray-bg">


    <div class="middle-box text-center animated fadeInDown">
        <h1>404</h1>
        <h3 class="font-bold">页面未找到！</h3>

        <div class="error-desc">
            抱歉，页面好像去火星了~
            <form class="form-inline m-t" style="display:none" role="form">
                <div class="form-group">
                    <input type="email" class="form-control" placeholder="请输入您需要查找的内容 …">
                </div>
                <button type="submit" class="btn btn-primary">搜索</button>
            </form>
        </div>
    </div>
</body>

</html>