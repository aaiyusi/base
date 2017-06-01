<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>电商ERP服务平台</title>
    <link rel="shortcut icon" href="favicon.ico"> 
    <link href="<%=path%>/resources/components/hplus/css/bootstrap.min.css?v=3.3.6" rel="stylesheet">
    <link href="<%=path%>/resources/components/hplus/css/font-awesome.css?v=4.4.0" rel="stylesheet">
    <link href="<%=path%>/resources/components/hplus/css/animate.css" rel="stylesheet">
    <link href="<%=path%>/resources/components/hplus/css/style.css?v=4.1.0" rel="stylesheet">

</head>

<body class="gray-bg">


    <div class="middle-box text-center animated fadeInDown">
        <h1>500</h1>
        <h3 class="font-bold">服务器内部错误</h3>

        <div class="error-desc">
            服务器好像出错了...
            <br/>您可以返回主页看看
            <br/><a href="<%=path%>/" class="btn btn-primary m-t">主页</a>
        </div>
    </div>
</body>

</html>