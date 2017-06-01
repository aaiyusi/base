<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<head>
<script src="${ctx.path}/resources/platform/js/common_format.js"></script>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">

<style type="text/css">
body { font-size:8px; line－height:16px;}
ul{padding:0px;	 margin:0px; }
li{ list-style-type:none;}
.text-center{ text-align:center !important;}
.text-right{ text-align:right !important;}
.text-left{ text-align:left !important;}
.skulist-table{ width:100%; border-collapse:collapse;}
.skulist-table th, .skulist-table td{ padding:0 5px; line-height:20px; height:40px; vertical-align:middle; text-align:left; border:1px solid #ccc;}
.skulist-table th{ height:30px;}
.skulist-table td.photo{ width:40px; text-align:center; padding:0;}
.skulist-table td.photo img{ max-height:40px; max-width:40px; vertical-align:middle;}
.skulist-table th.head{ font-size:20px;}
.skulist-table thead tr:last-child th{ border-bottom-width:3px;}
.signin{ padding-top:20px; line-height:30px; font-size:14px; text-align:right;}
.signin span{ width:150px; display:inline-block; border-bottom:1px solid #000; margin-left:5px;}
</style>
</head>
<html>
  
  <body>
   <!-- 出库 -->
   <c:choose>  
   <c:when test="${storage.type == 0}">    
<table class="skulist-table">
		<tr>
			<td><strong>批次号:</strong>${storage.storageCode}</td>
			<td><strong>出库日期:</strong>${storage.dateString}</td>
			<td><strong>仓库:</strong>${storage.whouseName}</td>
			<td rowspan="2" class="text-center"><img  style='width: 190px; height: 73px;' src="<%=basePath %>/api/whouseIn/getBarcode.do?code=${storage.storageCode}"></td>
		</tr>
		<tr>
			<td colspan="3"><strong>备注:</strong>${storage.remark}</td>
		</tr>
	</table>
	<table class="skulist-table">
		<thead>
			<tr>
				<th colspan="9" class="head text-center">出库清单</th>
			</tr>
			<tr>
				<th width="30" class="text-center">序号</th>
				<th>库存SKU编号</th>
				<th>库存SKU中文名称</th>
				<th>仓位</th>
				<th class="text-center" width="70">出库数量</th>
				<th class="text-center" width="70">出库确认</th>
			</tr>
		</thead>
		<tbody>
		<c:forEach var="item" items="${list}" >
		    <tr>
				<td class="text-center">1</td>
				<td>${item.sku}</td>
				<td>${item.name}</td>
				<td>${item.space_code}</td>
				<td class="text-center">${item.count}</td>
				<td></td>
			</tr>
		</c:forEach>
					</tbody>
	</table>
	<p class="signin">出库签收<span></span></p>
   </c:when>  
     
   <c:otherwise>  
<!-- 入库 -->
   <table class="skulist-table">
		<tr>
			<td><strong>批次号:</strong>${storage.storageCode}</td>
			<td><strong>入库日期:</strong>${storage.dateString}</td>
			<td><strong>仓库:</strong>${storage.whouseName}</td>
			<td rowspan="2" class="text-center"><img style='width: 190px; height: 73px;'  src="<%=basePath %>/api/whouseIn/getBarcode.do?code=${storage.storageCode}"></td>
		</tr>
		<tr>
			<td colspan="3"><strong>备注:</strong>${storage.remark}</td>
		</tr>
	</table>
	<table class="skulist-table">
		<thead>
			<tr>
				<th colspan="9" class="head text-center">入库清单</th>
			</tr>
			<tr>
				<th width="30" class="text-center">序号</th>
				<th>库存SKU编号</th>
				<th>库存SKU中文名称</th>
				<th>仓位</th>
				<th class="text-center" width="70">入库数量</th>
				<th class="text-center" width="70">入库确认</th>
			</tr>
		</thead>
		<tbody>
		   <c:forEach var="item" items="${list}" >
		    <tr>
				<td class="text-center">1</td>
				<td>${item.sku}</td>
				<td>${item.name}</td>
				<td>${item.space_code}</td>
				<td class="text-center">${item.count}</td>
				<td></td>
			</tr>
			</c:forEach>
					</tbody>
	</table>
	<p class="signin">入库签收<span></span></p> 
   </c:otherwise>  
	</c:choose>  
   
   
   
	


  </body>
</html>
