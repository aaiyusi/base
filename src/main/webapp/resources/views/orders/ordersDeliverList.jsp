<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/resources/platform/inc.jsp"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
   <script src="${ctx.path}/resources/platform/js/common_grid.js"></script>
   <script src="${ctx.path}/resources/platform/js/common_format.js"></script>
   <script src="${ctx.path}/resources/platform/js/common_check.js"></script>
   <script src="${ctx.path}/resources/js/data_form.js"></script>
   <script src="${ctx.path}/resources/script/orders/ordersDeliver.js"></script>
   <link type="text/javascript" href="${ctx.path}/resources/platform/css/new.css" rel="stylesheet">
   <link rel="stylesheet" type="text/css" href="${ctx.path}/resources/code/css/custom.css"/>
  </head>
  
  <body>
    <div class="animated fadeInRight">
		<div id="serachDiv" class="row form-group-sm">
			<div class="ibox-content bottomnone">
			  <form id="pageForm" method="post">
				<div class="form-inline">
					<div class="form-group">
						<div class="btn-group">
							<button data-toggle="dropdown" class="btn btn-white dropdown-toggle" type="button">
                                <span class="text pr5" id="sendStatusdefault">不限发货结果</span><span class="caret"></span>
                            </button>
                            <input type="hidden" name="deliverResult" value="" />
                             <ul role="menu" class="dropdown-menu dropdown-menu-left copytext">
                            	<li ><a href="javascript:setCtrlValue('deliverResult','');">不限发货结果</a></li>
                                <li ><a href="javascript:setCtrlValue('deliverResult','1');">发货成功</a></li>
								<li ><a href="javascript:setCtrlValue('deliverResult','0');">发货失败</a></li>
                            </ul>
						</div>
						<div class="btn-group">
                    		<button type="button" class="btn btn-white dropdown-toggle"data-toggle="dropdown">
                    			<span id="shopButton" class="text pr5">不限店铺</span>
								<span class="caret"></span>
                    		</button>
                    		<input type="hidden" name="platformType" value="" />
                    		<input type="hidden" name="shopId" value="" />
                    		<ul class="dropdown-menu dropdown-menu-left copytext" id="isHidden" role="menu">
                    		</ul>
                    	</div>
                    	<div id="opertypeid" class="btn-group">
                    		<button class="btn btn-white dropdown-toggle" type="button" data-toggle="dropdown">
                    			<span id="operdefault" class="text pr5">不限发货员</span>
                    			<span class="caret"></span>
                    		</button>
                    		<input type="hidden" name="userId" value="" />
                    		<ul class="dropdown-menu dropdown-menu-left copytext fixed-height" role="menu">
                    			<li ><a href="javascript:setCtrlValue('userId','');">不限发货员</a></li>
                    			<c:forEach var="item" items="${userList }" varStatus="v">
                    				<li ><a href="javascript:setCtrlValue('userId','${item.userId}');">${item.userName}</a></li>
                    			</c:forEach>
                    		</ul>
                    	</div>
						<input class="form-control layer-date input-small hr-33" id="searchDateStart" name="startDate" placeholder="请输入起始日期" readonly="readonly" style="background-color: white;" onClick="WdatePicker({maxDate:'#F{$dp.$D(\'searchDateEnd\')}'})"/>
						至&nbsp;&nbsp;<input class="form-control layer-date input-small hr-33" id="searchDateEnd" name="endDate" placeholder="请输入结束日期" readonly="readonly" style="background-color: white;" onClick="WdatePicker({minDate:'#F{$dp.$D(\'searchDateStart\')}'})"/> 							
						</div>
						<div class="form-group">
							<div class="btn-group">
								<div class="input-group">
									<div class="input-group-btn">
										<button data-toggle="dropdown" class="btn btn-white dropdown-toggle" type="button">
											<span class="text pr5" id="filtertypedefault">模糊查询</span><span class="caret"></span>
										</button>
										<ul role="menu" class="dropdown-menu dropdown-menu-left copytext fixed-height">
											<li><a href="javascript:void(0);" onClick="assignment('filtertype','','模糊查询');">模糊查询</a></li>
											<li class="divider"></li>
											<li><a href="javascript:void(0);" onClick="assignment('filtertype','name','订单编号');">订单编号</a></li>
											<li><a href="javascript:void(0);" onClick="assignment('filtertype','bills','物流单号');">物流单号</a></li>
											<li><a href="javascript:void(0);" onClick="assignment('filtertype','remark','备注');">备注</a></li>
										</ul>
									</div>
								</div>
							</div>
							<input type="text" id="filtervalue" placeholder="请输入查询条件" class="form-control hr-33" disabled>&nbsp;&nbsp;
							<button type="button" class="btn btn-primary btn-sm" onclick="common.search();">查询</button>
							<button type="button" class="btn btn-white btn-sm" onclick="common.clear();clearForm();">重置</button>
					</div>							
				</div>
			  </form>	
			</div>
		</div>
	</div>
	
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
