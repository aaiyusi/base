<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@taglib prefix="p" uri="/custom-tags"%>
<%@taglib prefix="erp" uri="/erptaglib"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/resources";
Map<String,Object> ctx=new HashMap<String,Object>();
ctx.put("path", path);
ctx.put("basePath", basePath);
ctx.put("versions", System.currentTimeMillis());
ctx.put("printPath", basePath + "/images/print");
pageContext.setAttribute("ctx", ctx);
%>
<base href="${ctx.path}">
<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">    
<meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">
<link rel="stylesheet" href="${ctx.path}/resources/components/hplus/css/plugins/jqgrid/ui.jqgrid.css?v=${ctx.versions}"/>
<link rel="stylesheet" href="${ctx.path}/resources/components/jquery/jqueryUI/jquery-ui.min.css?v=${ctx.versions}">
<link rel="stylesheet" href="${ctx.path}/resources/components/hplus/css/bootstrap.min.css?v=${ctx.versions}">
<link rel="stylesheet" href="${ctx.path}/resources/components/hplus/css/font-awesome.css?v=${ctx.versions}" >
<link rel="stylesheet" href="${ctx.path}/resources/components/hplus/css/plugins/sweetalert/sweetalert.css?v=${ctx.versions}" />
<link rel="stylesheet" href="${ctx.path}/resources/components/hplus/css/style.css?v=${ctx.versions}" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="${ctx.path}/resources/css/custom.css?v=${ctx.versions}"/>
<link rel="stylesheet" type="text/css" href="${ctx.path}/resources/css/library.min.css?v=${ctx.versions}"/>
<link rel="stylesheet" type="text/css" href="${ctx.path}/resources/components/hplus/switch/bootstrap-switch.min.css?v=${ctx.versions}"/>

<!-- 全局js -->
<script src="${ctx.path}/resources/components/jquery/jquery.min.js"></script>
<script src="${ctx.path}/resources/components/jquery/jqueryUI/jquery-ui.min.js"></script>
<script src="${ctx.path}/resources/components/jquery/jquery.form.js"></script>
<script src="${ctx.path}/resources/components/jquery/jquery.formFill.js"></script>
<script src="${ctx.path}/resources/components/hplus/plugins/jqgrid/i18n/grid.locale-cn.js"></script>
<script src="${ctx.path}/resources/components/hplus/plugins/jqgrid/jquery.jqGrid.min.js"></script>
<script src="${ctx.path}/resources/components/hplus/bootstrap.min.js"></script>
<script src="${ctx.path}/resources/components/hplus/content.js?v=${ctx.versions}"></script>
<script src="${ctx.path}/resources/components/hplus/plugins/layer/layer.min.js"></script>
<script src="${ctx.path}/resources/components/hplus/plugins/layer/extend/layer.ext.js"></script>
<script src="${ctx.path}/resources/components/hplus/plugins/sweetalert/sweetalert.min.js"></script>
<script src="${ctx.path}/resources/components/hplus/switch/bootstrap-switch.min.js"></script>

<!-- 验证插件 -->
<script src="${ctx.path}/resources/components/validation/jquery.validate.js"></script>
<script src="${ctx.path}/resources/components/validation/additional-methods.js"></script>
<script src="${ctx.path}/resources/components/validation/messages_zh.js"></script>
<script src="${ctx.path}/resources/platform/js/common_validate.js"></script>
<script src="${ctx.path}/resources/platform/js/common_check.js"></script>
<script src="${ctx.path}/resources/platform/js/platform.js?v=${ctx.versions}"></script>


<!-- 基本方法js -->
<script src="${ctx.path}/resources/js/common/common.js"></script>
<script type="text/javascript">
var ctx = ctx || {};
ctx.path = '${ctx.path}';
ctx.basePath = '${ctx.basePath}';
ctx.versions = '${ctx.versions}';
ctx.printPath = '${ctx.printPath}';

layer.config({
	skin : 'layer-ext-moon',
	extend : 'skin/moon/style.css'
});
</script>