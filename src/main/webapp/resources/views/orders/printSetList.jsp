<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/resources/platform/inc.jsp"%>
<%@page import="com.samton.erp.api.orders.grid.*"%>
<% 
	Integer rowNum = 0;
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>配货清单打印预览</title>
	<link type="text/javascript" href="${ctx.path}/resources/css/print.css" rel="stylesheet">
  </head>
  
  <body>
  <div class="label-content" >
  	<table class="printlist-table">
  		<thead>
  			<tr> 
				<th colspan="${size + 4}"  class="text-right" style="border:1px solid #000;">库存量指当前仓库的库存；多个仓位以分号隔开</th>
			</tr>
  			<tr>
				<th colspan="${size + 4}" class="head text-center" style="border:1px solid #000">拣货清单(${timeStr})</th>
			</tr>
  			<tr>
  				<c:forEach var="item" items="${table.head.columns}">
  					<th class="text-center"  <c:if test="${not empty item.width && item.width != 0}">width="${item.width}"</c:if>  style="border:1px solid #000">${item.label}</th>
  				</c:forEach>
  			</tr>
  		</thead>
  		<tbody>
  			<c:forEach items="${list}" var="list" varStatus="status">
  				<tr>
  					<% 
  						rowNum = rowNum +1;
  					%>
  					<c:forEach items="${table.head.columns}" var="head">
  						<% 
  							Column col=	(Column)pageContext.getAttribute("head");
  							Map<String,Object> row= (Map<String,Object>)pageContext.getAttribute("list");
  							String dbLabel = col.getDbLabel();
  							String render = col.render(row, col.getDbLabel());
  							Object val = render;
  							if ( val==null ) val = "";
  							%>
  						<td style="border:1px solid #000" class="text-center <%if(col.getColType() == 4){ %> photo <%}%>">
  						<%if(col.getColType() == 4){ %>
  							<span><img src="<%=val%>" alt="无图片"/></span>
  						<% }else{%>
  							<span><%=val%></span>
  						<%}%>
  						</td>
  					</c:forEach>
  				</tr>
  			</c:forEach>
  		</tbody>
  		<tfoot>
			<tr>
				<td colspan="${size + 4}" class="text-center" style="border:1px solid #000">
					共计
					<strong><%=rowNum%></strong> 个商品种类
					<strong style="padding-left:10px;">${amount}</strong> 件商品
				</td>
			</tr>
		</tfoot>
  	</table>
  	</div>
  </body>
</html>
