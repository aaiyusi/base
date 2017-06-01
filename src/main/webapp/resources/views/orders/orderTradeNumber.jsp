<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/resources/platform/inc.jsp"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
  	<script type="text/javascript">
  		var ids = '${ids}';
  	</script>
    <script src="${ctx.path}/resources/platform/js/common_grid.js"></script>
    <script src="${ctx.path}/resources/platform/js/common_format.js"></script>
    <script src="${ctx.path}/resources/platform/js/common_check.js"></script>
    <script src="${ctx.path}/resources/js/data_form.js"></script>
    <script src="${ctx.path}/resources/script/orders/ordersTrade.js"></script>

  </head>
  
  <body>
 <div class="animated fadeInRight">
    <div id="buttonDiv" class="row wrapper ">
        <div class="col-sm-12">
            <div class="form-inline" style="margin: 5px;margin-top:0px;">
                <div class="form-group">
                    <button class="btn btn-primary btn-sm" type="button" onclick="dobatchAutomaticallyFillTrackNumber()">批量自动填充运单号</button>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-md-12">
        <div class="jqGrid_wrapper white-bg">
            <table id="jqGrid"></table>
            <!-- 显示table -->
        </div>
    </div>
</div>
  </body>
</html>
