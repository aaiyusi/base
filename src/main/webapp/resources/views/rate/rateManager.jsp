<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/resources/platform/inc.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
    <script src="${ctx.path}/resources/platform/js/common_grid.js"></script>
    <script src="${ctx.path}/resources/platform/js/common_format.js"></script>
    <script src="${ctx.path}/resources/script/rate/rateManager.js"></script>
    <link type="text/javascript" href="${ctx.path}/resources/platform/css/new.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="${ctx.path}/resources/css/custom.css" />
	   
</head>
<body style="overflow:hidden;"> 
	    <div class="has-toobar has-navbar multichoice"> 

        <div class="jqGrid_wrapper white-bg">
            <table id="jqGrid"></table>
            <!-- 显示table -->
            <div id="jqGridPager"></div>
            <!-- 显示分页 -->
        </div>
<!-- 编辑 -->
<div id="dataEdit" class="white-bg" style="display:none;">
	<form method="post" class="form-horizontal" id="dataEditForm"
			action="${ctx.path}/api/rate/editSysRateInfo.do">
			
	<div class="panel panel-default">
	    <div class="panel-body pt0 pb0">
		<div class="form-horizontal form-bordered min" id="contentDiv">
		<div class="form-group">
    <input type="hidden" name="rateId" id="dataId"/>  
    <label class="col-sm-4 control-label"><font color="red">*</font>汇率折扣比例</label>
    <div class="col-sm-6">
        <div class="input-group input-group-sm">
            <input type="text" class="form-control" id="proportion" name="proportion" placeholder="请输入汇率折扣比例" maxlength="8"/>
        </div>
    </div>
</div></div>
	    </div>
	</div>
	</form>
</div>
</div>
</body>
</html>
