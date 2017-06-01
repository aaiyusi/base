<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions"   prefix="fn" %>
<%@ include file="/resources/platform/inc.jsp"%>
                                                

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <title>仓位打印</title>
  </head>
  <body >
  <div id="context" ></div>
  </body>
    <script type="text/javascript">
  		var space ='${list}';
  		var temp =  eval( "(" + space + ")" );
  		for(var i=0 ;i<temp.length ;i++){
  				console.log(temp[i]);
  			setTimeout(
  					show(temp[i].spaceCode.replace("&","%26"))
  			,i*60)
  		}
  		function show(temp){
  			 return function()  
  	        {  
  	            add(temp);  
  	        }  
  		}
		function add(temp){
			$("#context").append("<div style='width: 50mm; height: 19mm;'><img style='width: 190px; height: 73px;' src='${ctx.path}/api/whouseIn/getBarcode.do?code="+temp+"'></div>");
		}
	</script>
</html>
