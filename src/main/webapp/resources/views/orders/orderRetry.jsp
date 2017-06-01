<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/resources/platform/inc.jsp"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
  <script type="text/javascript">
    	var oldOrdersId = '${ordersId}';
    </script>
   <script src="${ctx.path}/resources/platform/js/common_grid.js"></script>
   <script src="${ctx.path}/resources/platform/js/common_format.js"></script>
   <script src="${ctx.path}/resources/platform/js/common_check.js"></script>
   <script src="${ctx.path}/resources/js/data_form.js"></script>
   <script src="${ctx.path}/resources/script/orders/orderRetry.js"></script>
  </head>
  
  <body class="white-bg">
  	<form class="form-horizontal" method="post" role="form" style="margin-right: 0px; margin-left: 0px;" id="retryForm">
		<input type="hidden" id="orderId" value="${ordersId}" />
		<div class="panel panel-default">
			<div class="panel-heading">
					<h3 class="panel-title">
						基本信息
					</h3>
				</div>
			<div class="panel-body">
		  		<div class="row">
		  			<div class="col-md-12">
		  				<div class="form-group">
							<label class="col-sm-2 control-label"><font color="red">*</font>物流渠道</label>
							<div class="col-sm-2">
								<select class="form-control" name="logisticsId">
						            <option value="">-请选择-</option>
						        </select>
							</div>
							<label class="col-sm-2 control-label">货运单号</label>
							<div class="col-sm-2">
								<input type="text" class="form-control" name="trackNumber">
							</div>
							<label class="col-sm-2 control-label">选择包材</label>
							<div class="col-sm-2">
								<select class="form-control" name="packingId">
						            <option value="">-请选择-</option>
						        </select>
							</div>
						</div>
						<div class="hr-line-dashed"></div>
						<div class="form-group">
							<label class="col-sm-2 control-label">重发原因</label>
							<div class="col-sm-2">
								<select class="form-control" name="exceptionReasonId">
									<option value="">-请选择-</option>
									<option value="发错">发错</option>
									<option value="丢包">丢包</option>
									<option value="漏发">漏发</option>
									<option value="破损">破损</option>
									<option value="与实物不符">与实物不符</option>
									<option value="更换渠道">更换渠道</option>									
								 </select>
							</div>
							<label class="col-sm-2 control-label">运费</label>
							<div class="col-sm-2">
								<input type="text" class="form-control" name="shippingCost">
							</div>
						</div>
		  			</div>
		  		</div>
		  	</div>
		</div>
		<div class="panel panel-default">
			<div class="panel-heading">
				<h3 class="panel-title">
					商品清单信息
				</h3>
			</div>
			<div class="panel-body">
				<div class="row">
					    <div class="col-md-12">
					        <div class="jqGrid_wrapper white-bg">
					            <table id="jqGrid"></table>
					        </div>
					    </div>
				</div>
			</div>
		</div>
  		<div class="navbar-fixed-bottom" style="text-align: right;">
  			<div class="row">
  				<div class="col-md-7" style="margin-left: 5px;">
  					<input type="text" placeholder="备注" class="form-control" name="remark">
  				</div>
  				<div class="col-md-5" style="margin-left:-10px;">
  					<button class="btn btn-md btn-primary" id="btnSure" type="button">确定</button>
  					<button type="button" class="btn btn-default btn-cancel">取消</button>
  				</div>
  			</div>
        </div>
	</form>
  </body>
</html>
