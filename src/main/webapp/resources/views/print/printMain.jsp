<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@taglib prefix="p" uri="/custom-tags"%>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>ERP Print Controller</title>
<link rel="stylesheet" href="${ctx.path}/erp/resources/css/print/uielement.min.css">
<link rel="stylesheet" type="text/css" href="${ctx.path}/erp/resources/css/print/print.css" />
<script type="text/javascript" src="${ctx.path}/erp/resources/components/jquery/jquery.min.js"></script>
<link rel="stylesheet" type="text/css" href="${ctx.path}/erp/resources/css/print/style.css" />
<style type="text/css">
<!--
body {
	margin: 0px;
	padding: 0;
}

.noprint {
	display: none
}

ul {
	padding: 0px;
	margin: 0px;
}

li {
	list-style-type: none;
}

body .label-content {
	background-color: transparent;
	border-radius: 0;
	-webkit-box-shadow: none;
	-moz-box-shadow: none;
	box-shadow: none;
	page-break-after: always;
	page-break-inside: avoid;
}

.label-content .view-mask,.label-content .custom-area,.label-content .custom-drop .dropitem .line-handle,.label-content .custom-drop .dropitem .ui-resizable-handle
	{
	display: none;
}

.label-content .custom-drop {
	border: 1px solid #fff;
}

.label-content .custom-drop .dropitem {
	cursor: default;
}

.label-content .custom-drop .dropitem:hover {
	color: inherit;
	background-color: transparent;
}
-->
</style>
</head>
<!--/ END Head -->
<!-- START Body -->
<body class="unauthorized">
${content}
</body>
</html>

