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
	<script type="text/javascript">
	//要挎行的列name值
	var rownames = "";
	//要挎行的列id值
	var rowids = "";
	
	$(function(){
		fun_rowspan("platform_type");
		fun_rowspan("name");
		fun_rowspan("bills");
		fun_rowspan("deal_num");
		fun_rowspan("shop_name");
		fun_rowspan("remark");
	});
		
	//列垮行显示 
	function fun_rowspan(rclassName) {
		$("td[rows='"+rclassName+"']").each(function(i,data){
			if(rownames.split($(this).attr("name")).length > 1) {
				var firstId = $("td[name="+$(this).attr("name")+"]")[0].id;
				if($("#"+firstId).attr("row") == "true") {
					$(this).remove();
					return;
				}
				var rs = $("td[name="+$(this).attr("name")+"]").length;
				$("#"+firstId).attr("rowspan",rs); 
				$("#"+firstId).attr("row","true");
				$(this).remove();
				return;
			}
			rownames += ">"+$(this).attr("name");
			$(this).attr("id",$(this).attr("name")+"id"+i);
			rowids += ">"+$(this).attr("id");
		})
	}
	</script>
  </head>
  
  <body>
  <div class="label-content" >
  	<table class="printlist-table">
  		<thead>
  			<tr>
				<th colspan="${size + 1}" class="head text-center" style="border:1px solid #000">配货清单(${timeStr})</th>
			</tr>
  			<tr>
  				<th width="30" class="text-center" style="border:1px solid #000">序号</th>
  				<c:forEach var="item" items="${table.head.columns}">
  					<th class="text-center" width="100" style="border:1px solid #000">${item.label}</th>
  				</c:forEach>
  			</tr>
  		</thead>
  		<tbody>
  			<c:forEach items="${list}" var="list" varStatus="status">
  				<tr>
  					<% 
  						Object ordersName = null;
  						rowNum = rowNum +1;
  					%>
  					<td class="text-center" style="border:1px solid #000">${status.count}</td>
  					<c:forEach items="${table.head.columns}" var="head">
  						<% 
  							Column col=	(Column)pageContext.getAttribute("head");
  							Map<String,Object> row= (Map<String,Object>)pageContext.getAttribute("list");
  							String dbLabel = col.getDbLabel();
  							String render = col.render(row, col.getDbLabel());
  							Object val = render;
  							if ( val==null ) val = "";
  							if("name".equals(dbLabel)){
  								ordersName = val;
  							}
  							%>
  						<td style="border:1px solid #000" class="text-center <%if(col.getColType() == 4){ %> photo <%}%>" <%if(col.isRender()){%> name="<%=ordersName%><%=dbLabel%><%=val%>" rows="<%=dbLabel%>" <%}%>>
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
				<td colspan="${size + 1}" class="text-center" style="border:1px solid #000">
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
