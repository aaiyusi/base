<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/resources/platform/inc.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<script src="${ctx.path}/resources/platform/js/common_grid.js"></script>
<script src="${ctx.path}/resources/platform/js/common_format.js"></script>
<script src="${ctx.path}/resources/script/whouse/shelfSku.js"></script>

<link type="text/css"  href="${ctx.path}/resources/platform/css/new.css" rel="stylesheet">
<link type="text/css"  href="${ctx.path}/resources/css/custom.css"  rel="stylesheet" />
<script type="text/javascript">
	var shelfId='${param.shelfId}';
</script>
</head>
<body>

	<!-- 界面 -->
	<div class="row">
		<div class="col-md-12">
			<div class="jqGrid_wrapper white-bg">
				<table id="jqGrid"></table>
				<!-- 显示table -->
				<div id="jqGridPager"></div>
				<!-- 显示分页 -->
			</div>
		</div>
	</div>

</body>
</html>
