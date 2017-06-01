<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/resources/platform/inc.jsp"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
  	<script type="text/javascript">
	  	var ids = [];
		<c:forEach items="${orderList}" var="item">
			ids.push(${item.ordersId});
		</c:forEach>
  	</script>
   <script src="${ctx.path}/resources/platform/js/common_grid.js"></script>
   <script src="${ctx.path}/resources/platform/js/common_format.js"></script>
   <script src="${ctx.path}/resources/platform/js/common_check.js"></script>
   <script src="${ctx.path}/resources/js/data_form.js"></script>
   <script src="${ctx.path}/resources/script/orders/orderBatchRetry.js"></script>
  </head>
  
  <body class="white-bg">
  	<form class="form-horizontal" method="post" role="form" style="margin-right: 0px; margin-left: 0px;" id="batchRetryForm">
  		<div class="form-group bgcolor-white" style="height:calc(100% + 50px)">
  			<div class="col-sm-2">
  				<label class="checkbox-inline"><input type="checkbox" name="checkAllRetry" id="checkAllRetry">全选</label>
  			</div>
  			<div class="col-sm-3">
				<label class="checkbox-inline"><input type="checkbox" name="mark_sendAll" id="mark_sendAll">全部重新标记为已发货</label>
			</div>
			<div class="col-sm-7 text-right">
				<p class="loadtext">
					本次重发将包含<span class="text-primary pl5 pr5 retrySort">0</span>个商品种类共<span class="text-primary pl5 pr5 retryNumber">0</span>件商品
				</p>
			</div>
			<div class="form-group">
				<div class="slimScrollDiv" style="position: relative; width: auto;">
					<div class="col-md-12 selectitem" style="overflow: hidden; width: auto;">
						<c:forEach items="${orderList}" var="order">
							<div class="panel panel-default mb5">
								<div class="panel-heading large-list-title">
									<div class="panel-toolbar">
										<span class="panel-toolbar-title fsize14 text-primary">
											<a class="unfoldicon mr5 fa fa-minus-circle text-primary" href="javascript:void(0)"></a>
											订单编号:
											<span class="pl5">${order.name}</span>
											<input type="hidden" value="${order.name}" name="platformOrderIds_${order.ordersId}">
											<input type="hidden" value="${order.ordersId}" name="orderId">
											<input type="hidden" name="detailIds_${order.ordersId}" id="detailIds_${order.ordersId}">
										</span>
									</div>
									<div class="btn-group btn-add">
										<input class="form-control input-sm pct20 fr ml10" style="width: 120px;margin-right: 10px;" name="tracknumber_${order.ordersId}" placeholder="货运单号" value="">
										<select class="form-control input-sm pct20 fr ml10" style="width: 150px;" name="myLogisticsChannel_${order.ordersId}">
											<option value="">物流渠道(必选)</option>
											<c:forEach var="item" items="${logistList }" varStatus="v">
				                     			<option value="${item.logistics_id}">${item.logistics_name }</option>
				        					</c:forEach>
										</select>
										<select class="form-control input-sm pct20 fr ml10" style="width: 120px;" name="exceptionReasonId_${order.ordersId}">
											<option value="">重发原因</option>
											<option value="发错">发错</option>
											<option value="丢包">丢包</option>
											<option value="漏发">漏发</option>
											<option value="破损">破损</option>
											<option value="与实物不符">与实物不符</option>
											<option value="更换渠道">更换渠道</option>
										</select>
										<label class="checkbox-inline fr">
											<input type="checkbox" value="1" name="markSend_${order.ordersId}" id="mark-send_${order.ordersId}"><label for="mark-send_${order.ordersId}">重新标记为已发货</label>
										</label>
									</div>
								</div>
								<div class="panel-collapse">
									<div class="row">
										    <div class="col-md-12">
										        <div class="jqGrid_wrapper${order.ordersId} white-bg" id="jqGrid_wrapper${order.ordersId}">
										            <table id="jqGrid${order.ordersId}"></table>
										        </div>
										    </div>
									</div>
								</div>
							</div>
						</c:forEach>
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
