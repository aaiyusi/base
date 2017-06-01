<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@page import="com.samton.erp.api.orders.task.AliThreadSyncTask"%>
<%@page import="com.samton.erp.api.orders.task.InitTask"%>
<%@page import="com.samton.platform.framework.context.SpringContext"%>
<%@page import="com.samton.erp.api.shop.service.IShopService"%>
<%@page import="org.apache.commons.lang.StringUtils"%>
<%@page import="com.samton.erp.api.orders.util.Configuration"%>
<%@page import="com.samton.erp.api.orders.task.WishThreadSyncTask"%>
<%
	if(request.getParameter("sms") != null){
		if("true".equals(request.getParameter("sms"))){
	AliThreadSyncTask.runFlag = true;
	WishThreadSyncTask.runFlag = true;
// 	IShopService shopService = (IShopService) SpringContext.getBean("shopService");
// 	InitTask task = InitTask.getInstance();
// 	task.setShopService(shopService);
// 	task.init();
		}else{
	AliThreadSyncTask.runFlag = false;
	WishThreadSyncTask.runFlag = false;
		}
	}
	out.println("同步线程任务已"+(AliThreadSyncTask.runFlag?"启动":"停止"));
	//线程日志打印 
	String logFlag = request.getParameter("logFlag");
	if(StringUtils.isNotBlank(logFlag) && "true".equals(logFlag)){
		Configuration.logFlag = true;	
	}else if(StringUtils.isNotBlank(logFlag) && "false".equals(logFlag)){
		Configuration.logFlag = false;
	}
	
	out.println("<br/>");
	out.println("线程日志打开："+(Configuration.logFlag ? "打开" : "关闭")+"<br/>");
	out.println("<a href='info.jsp?logFlag=false'>关闭日志</a>");
	out.println("<a href='info.jsp?logFlag=true'>打开日志</a>");
%>