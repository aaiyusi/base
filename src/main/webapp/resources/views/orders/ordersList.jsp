<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/resources/platform/inc.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
	<style type="text/css">
		.content-ads{display: none;}
	</style>
    <script src="${ctx.path}/resources/platform/js/common_grid.js"></script>
    <script src="${ctx.path}/resources/platform/js/common_format.js"></script>
    <script src="${ctx.path}/resources/platform/js/common_check.js"></script>
    <script src="${ctx.path}/resources/js/data_form.js"></script>
    <script type="text/javascript" src="//www.17track.net/externalcall.js"></script>
    <script src="${ctx.path}/resources/script/orders/ordersList.js"></script>
    <link type="text/javascript" href="${ctx.path}/resources/platform/css/new.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="${ctx.path}/resources/code/css/custom.css"/>
    <script type="text/javascript">
    function operate(cellValue,options,rowObject) {
	  var button = "";
	  if(rowObject.order_state == 0){
		  button += "<a onclick=\"dealExceptionOrder("+ rowObject.orders_id +")\"><i class=\"fa fa-file-text-o\"></i> 处理</a>&nbsp;&nbsp;";
	  }else if(rowObject.order_state == 1 || rowObject.order_state == 2){
		  button += "<a onclick=\"printOrder("+ rowObject.orders_id +")\"><i class=\"fa fa-print\"></i> 打印</a>&nbsp;&nbsp;";
		  button += "<a onclick=\"updateOrderRemark("+ rowObject.orders_id +")\"><i class=\"fa fa-book\"></i> 备注</a>&nbsp;&nbsp;";
	  }else if(rowObject.order_state == 3){
		  button += "<a onclick=\"printOrder("+ rowObject.orders_id +")\"><i class=\"fa fa-print\"></i> 打印</a>&nbsp;&nbsp;";
		  button += "<a onclick=\"retryOrder("+ rowObject.orders_id +")\"><i class=\"fa fa-retweet\"></i> 重发</a>&nbsp;&nbsp;";
		  button += "<a onclick=\"updateOrderRemark("+ rowObject.orders_id +")\"><i class=\"fa fa-book\"></i> 备注</a>&nbsp;&nbsp;";
	  }else if(rowObject.order_state == 4){
		  button += "<a onclick=\"enableOrder("+ rowObject.orders_id +")\"><i class=\"fa fa-circle-o\"></i> 激活</a>&nbsp;&nbsp;";
	  }
	  return button;
	}
	</script>	
</head>
<body>
	<section id="main" role="main">
	    <div class="container-fluid has-toobar has-navbar multichoice">
	        <div class="panel-navbar row"  id="parentMenu">
	            <div class="scroll-hide">
	                <div class="publish-tab">
	                    <ul class="nav nav-tabs" id="grenul">
	                        <li labelname="del_fail" id="orderState5" onclick="chooseOrderState(5);">
	                        	<a	href="javascript:void(0);" class="pl5 pr5">
	                        		<span class="text" >处理失败<span id="orneNumber_5" class="label label-danger ml5">0</span></span>
	                        	</a>
	                        </li>
	                        <li labelname="yet_calcel" id="orderState4" onclick="chooseOrderState(4);">
	                        	<a href="javascript:void(0);" class="pl5 pr5">
	                        		<span class="text" >已作废<span id="orneNumber_4" class="label label-info ml5">0</span></span>
	                        	</a>
	                        </li>
	                        <li labelname="yet_distrute" id="orderState3" onclick="chooseOrderState(3);">
	                        	<a href="javascript:void(0);" class="pl5 pr5">
	                        		<span class="text" >已发货<span id="orneNumber_3" class="label label-info ml5">0</span></span>
	                        	</a>
	                        </li>
	                        <li labelname="distruteing" id="orderState2" onclick="chooseOrderState(2);">
	                        	<a href="javascript:void(0);" class="pl5 pr5">
	                        		<span class="text" >配货中<span id="orneNumber_2" class="label label-info ml5">0</span></span>
	                        	</a>
	                        </li>
	                        <li labelname="wait_deal" id="orderState1" class="active" onclick="chooseOrderState(1);">
	                        	<a href="javascript:void(0);" class="pl5 pr5">
	                        		<span class="text" >待处理<span id="orneNumber_1" class="label label-info ml5">0</span></span>
	                        	</a>
	                        </li>
	                        <li labelname="wait_approve" id="orderState0" onclick="chooseOrderState(0);">
	                        	<a href="javascript:void(0);" class="pl5 pr5">
	                        		<span class="text" >待审核<span id="orneNumber_0" class="label label-info ml5">0</span></span>
	                        	</a>
	                        </li>
	                    </ul>
	                </div>
	            </div>
	        </div>
    <div id="serachDiv" class="row form-group-sm">
            <div class="ibox-content bottomnone">
                <form id="pageForm" method="post">
                    <div class="form-inline">
                    	<div class="form-group">
	                    	<div class="btn-group">
	                    		<button type="button" class="btn btn-white dropdown-toggle"data-toggle="dropdown">
	                    			<span id="shopButton" class="text pr5">全部店铺</span>
									<span class="caret"></span>
	                    		</button>
	                    		<input type="hidden" name="platformType" value="" />
	                    		<input type="hidden" name="shopId" value="" />
								<input type="hidden" name="isUse" value="" />
	                    		<ul class="dropdown-menu dropdown-menu-left copytext" id="isHidden" role="menu">
	                    		</ul>
	                    	</div>
							<div class="btn-group " id="PCorderStatus">
								<button type="button" class="btn btn-white dropdown-toggle" data-toggle="dropdown">
									<span class="text pr5" id="statusButton">待处理</span>
									<span class="caret"></span>
								</button>
								<ul class="dropdown-menu dropdown-menu-left copytext " role="menu">
									<li>
										<a href="javascript:setCtrlValue('orderState', '-1');">全部状态</a>
										<input type="hidden" name="orderState" value="1" />
									</li>
									<li class="divider"></li>
									<li>
										<a index="0" href="javascript:setCtrlValue('orderState', '0');">待审核</a>
										<a index="1" href="javascript:setCtrlValue('orderState', '1');">待处理</a>
										<a index="2" href="javascript:setCtrlValue('orderState', '2');">配货中</a>
										<a index="3" href="javascript:setCtrlValue('orderState', '3');">已发货</a>
										<a index="4" href="javascript:setCtrlValue('orderState', '4');">已作废</a>
										<a index="5" href="javascript:setCtrlValue('orderState', '5');">处理失败</a>
									</li>
								</ul>
							</div>
				            <div class="btn-group">
				            	<button type="button" class="btn btn-white dropdown-toggle" data-toggle="dropdown">
									<span class="text pr5" id="filterTypeButton">付款日期</span>
									<span class="caret"></span>
								</button>
								<input type="hidden" name="filterType" value="0" />
								<ul class="dropdown-menu dropdown-menu-left copytext" role="menu">
									<li><a href="javascript:setCtrlValue('filterType',0);">付款日期</a></li>
									<li><a href="javascript:setCtrlValue('filterType',1);">发货日期</a></li>
								</ul>
				            </div>
<!--                             <label>订单时间：</label> -->
                            <input class="form-control layer-date input-small hr-33" id="searchDateStart" name="startDate" placeholder="请输入起始日期" readonly="readonly" style="background-color: white;" onClick="WdatePicker({maxDate:'#F{$dp.$D(\'searchDateEnd\')}'})"/>
							<input class="form-control layer-date input-small hr-33" id="searchDateEnd" name="endDate" placeholder="请输入结束日期" readonly="readonly" style="background-color: white;" onClick="WdatePicker({minDate:'#F{$dp.$D(\'searchDateStart\')}'})"/>
							<div class="btn-group">
								<button type="button" class="btn btn-white dropdown-toggle" data-toggle="dropdown">
									<span class="text pr5" id="logisticsButton">全部物流渠道</span>
									<span class="caret"></span>
								</button>
								<input type="hidden" name="logisticsId" value="" />
								<ul class="dropdown-menu dropdown-menu-left copytext" role="menu">
									<div class="fixed-height" id="search_logistics">
									</div>
								</ul>
							</div>					
				            <div class="btn-group">
								<button data-toggle="dropdown" class="btn btn-white dropdown-toggle" type="button">
									<span class="text pr5" id="filtertypedefault">模糊查询</span>
									<span class="caret"></span>
								</button>
								<ul role="menu" class="dropdown-menu dropdown-menu-left copytext fixed-height">
									<li><a href="javascript:void(0);" onClick="assignment('filtertype','','模糊查询');">模糊查询</a></li>
									<li class="divider"></li>
									<li><a href="javascript:void(0);" onClick="assignment('filtertype','name','按订单编号');">按订单编号</a></li>
									<li><a href="javascript:void(0);" onClick="assignment('filtertype','dealNum','按交易号');">按交易号</a></li>
									<li><a href="javascript:void(0);" onClick="assignment('filtertype','bills','按货运单号');">按货运单号</a></li>
									<li><a href="javascript:void(0);" onClick="assignment('filtertype','interiorBills','按内部单号');">按内部单号</a></li>
									<li><a href="javascript:void(0);" onClick="assignment('filtertype','custLogistics','按自选物流');">按自选物流</a></li>
									<li><a href="javascript:void(0);" onClick="assignment('filtertype','customerId','按客户ID');">按客户ID</a></li>
									<li><a href="javascript:void(0);" onClick="assignment('filtertype','customerName','按客户姓名');">按客户姓名</a></li>
									<li><a href="javascript:void(0);" onClick="assignment('filtertype','email','按客户邮箱');">按客户邮箱</a></li>
									<li><a href="javascript:void(0);" onClick="assignment('filtertype','country','按国家(英)');">按国家(英)</a></li>
									<li><a href="javascript:void(0);" onClick="assignment('filtertype','countryCn','按国家(中)');">按国家(中)</a></li>
									<li><a href="javascript:void(0);" onClick="assignment('filtertype','city','按买家城市');">按买家城市</a></li>
									<li><a href="javascript:void(0);" onClick="assignment('filtertype','phone','按买家电话号码');">按买家电话号码</a></li>
									<li><a href="javascript:void(0);" onClick="assignment('filtertype','productId','按ItemID');">按ItemID</a></li>
								</ul>
							</div>
							<input type="text" id="filtervalue" placeholder="请选择查询条件" class="form-control hr-33" disabled>&nbsp;&nbsp;
                            <button type="button" class="btn btn-primary btn-sm" onclick="common.search();searchForm();">查询</button>
                            <button type="button" class="btn btn-white btn-sm" onclick="common.clear();clearForm();">重置</button>
                        </div>
                    </div>
                </form>
            </div>
    </div>

    <div id="buttonDiv" class="row wrapper ">
            <div class="form-inline operation_con" id="commonOpr">
            	<div id="common_opr_btn0" style="display:none;">
            		<div class="form-group">
            			<button class="btn btn-primary btn-sm" type="button" onclick="batchDealState(1);">批量处理异常</button>
            		</div>
            		<div class="form-group">
            			<button class="btn btn-primary btn-sm" type="button" onclick="doBatchOrderOperation('cancel','确定将选择的订单批量作废吗？');">批量作废</button>
            		</div>
            	</div>
            	<div id="common_opr_btn1" style="display:none;">
            		<div class="form-group">
            			<button class="btn btn-primary btn-sm" type="button" onclick="doBatchOrderOperation('distribute','确定将选择的订单转入配货中吗？');">转入配货中</button>
            		</div>
            		<div id="ALLPCHGN" class="btn-group form-group">
            			<button class="btn btn-primary btn-sm dropdown-toggle" data-toggle="dropdown" type="button">
<!--             				<i class="ico-edit"></i> -->
							<span class="text mr5 ml5">批处理功能</span>
							<span class="caret"></span>
            			</button>
            			<ul class="dropdown-menu dropdown-menu-left" role="menu">
            				<li id="PLXGDD">
            					<a id="btnBatchEdit" href="javascript:void(0);" onclick="btnBatchEdit();">批量修改订单</a>
            				</li>
            				<li id="PLGXJYXX">
            					<a onclick="doBatchUpdateShipping()" href="javascript:void(0);">批量更新交运信息</a>
            				</li>
            				<li>
								<a href="javascript:void(0);" onclick="doBatchOrderOperation('delivered','确定将选择的订单标记发货吗？')">标记已发货</a>
							</li>
							<li id="PLZF">
								<a href="javascript:void(0);" onclick="doBatchOrderOperation('cancel','确定将选择的订单批量作废吗？');">批量作废</a>
							</li>
            			</ul>
            		</div>
            		<div class="btn-group form-group" id="logorderMenu">
            			<button data-toggle="dropdown"class="btn btn-primary btn-sm dropdown-toggle" type="button">
<!-- 							<i class="ico-truck2 mr5"></i> -->
							<span class="text">物流交运</span>
							<span class="caret ml5"></span>
						</button>
						<ul role="menu" class="dropdown-menu dropdown-menu-left>">
							<li class="dropdown-header" role="presentation">-请选择-</li>
							<li>
								<a href="javascript:void(0);" onclick="batchAutomaticallyFillTrackNumber();">自动填充交运单号</a>
							</li>
						</ul>
            		</div>
            		<div id="bprintMenu" class="form-group btn-group">
            			<button class="btn btn-primary btn-sm dropdown-toggle " data-toggle="dropdown" data-key="printKey" type="button">
							<span class="text pr5">打印中心</span>
							<span class="caret"></span>
						</button>
						<ul class="dropdown-menu dropdown-menu-left" role="menu">
							<li>
								<a onclick="pickingListPrint();" href="javascript:void(0);">拣货清单打印</a>
							</li>
							<li>
								<a onclick="distributeOrderPrint();" href="javascript:void(0);">配货清单打印</a>
							</li>
							<li class="edit">
								<a target="_blank" href="javascript:goPrintModelPage();">
								<i class="fa fa-print"></i>
								打印模板管理
								</a>
							</li>
						</ul>
            		</div>
            		<div class="form-group">
	                    <button class="btn btn-primary btn-sm" type="button" onclick="openOrderDownloadPage();">同步订单</button>
	                </div>
	                <div class="large-list-title">
		                    <button class="btn btn-success btn-sm" type="button" id="userEditBtn" onclick="openHandlePage();">新增订单</button>
		                	<div id="upLoadMenu" class="btn-group">
		                		 <button class="btn btn-success btn-sm dropdown-toggle" type="button" data-toggle="dropdown">
									<span class="text mr5 ml5">导入/出相关</span>
									<span class="caret"></span>
								</button>
								<ul class="dropdown-menu dropdown-menu-left" role="menu" style="left: auto;min-width: 120px;padding: 0;right: 4px;">
									<li>
										<a href="javascript:gotoExportOrderTemplate()">订单导出</a>
									</li>
								</ul>
		                	</div>
		                </div>
	                </div>
            	<div id="common_opr_btn4" style="display:none;">
            		<div class="form-group">
	                    <button class="btn btn-primary btn-sm" type="button" onclick="doBatchOrderOperation('active','确定将选择的订单批量激活吗？');">批量激活作废订单</button>
	                </div>
	                 <div class="large-list-title">
<!-- 	                	<div class="btn-group btn-add " style="top:-30px;"> -->
		                	<div id="upLoadMenu" class="btn-group">
		                		 <button class="btn btn-success btn-sm dropdown-toggle" type="button" data-toggle="dropdown">
									<span class="text mr5">导入/出相关</span>
									<span class="caret"></span>
								</button>
								<ul class="dropdown-menu dropdown-menu-left" role="menu" style="left: auto;min-width: 120px;padding: 0;right: 4px;">
									<li>
										<a href="javascript:gotoExportOrderTemplate()">订单导出</a>
									</li>
								</ul>
		                	</div>
<!-- 		                </div> -->
	                </div>
            	</div>
            	<div id="common_opr_btn2" style="display:none;">
            		<div id="ALLPCHGN" class="btn-group form-group">
            			<button class="btn btn-primary btn-sm dropdown-toggle" data-toggle="dropdown" type="button">
<!--             				<i class="ico-edit"></i> -->
							<span class="text mr5 ml5">批处理功能</span>
							<span class="caret"></span>
            			</button>
            			<ul class="dropdown-menu dropdown-menu-left" role="menu">
            				<li id="PLXGDD">
            					<a id="btnBatchEdit" href="javascript:void(0);" onclick="btnBatchEdit();">批量修改订单</a>
            				</li>
            				<li id="PLGXJYXX">
            					<a onclick="doBatchUpdateShipping()" href="javascript:void(0);">批量更新交运信息</a>
            				</li>
            				<li>
								<a href="javascript:void(0);" onclick="doBatchOrderOperation('delivered','确定将选择的订单标记发货吗？');">标记已发货</a>
							</li>
							<li id="PLZF">
								<a href="javascript:void(0);" onclick="doBatchOrderOperation('cancel','确定将选择的订单批量作废吗？');">批量作废</a>
							</li>
            			</ul>
            		</div>
            		<div class="btn-group form-group" id="logorderMenu">
            			<button data-toggle="dropdown"class="btn btn-primary btn-sm dropdown-toggle" type="button">
<!-- 							<i class="ico-truck2 mr5"></i> -->
							<span class="text">物流交运</span>
							<span class="caret ml5"></span>
						</button>
						<ul role="menu" class="dropdown-menu dropdown-menu-left>">
							<li class="dropdown-header" role="presentation">-请选择-</li>
							<li>
								<a href="javascript:void(0);" onclick="batchAutomaticallyFillTrackNumber();">自动填充交运单号</a>
							</li>
						</ul>
            		</div>
            		<div id="bprintMenu" class="btn-group form-group">
            			<button class="btn btn-primary btn-sm dropdown-toggle " data-toggle="dropdown" data-key="printKey" type="button">
							<span class="text pr5">打印中心</span>
							<span class="caret"></span>
						</button>
						<ul class="dropdown-menu dropdown-menu-left" role="menu">
							<li>
								<a onclick="pickingListPrint();" href="javascript:void(0);">拣货清单打印</a>
							</li>
							<li>
								<a onclick="distributeOrderPrint();" href="javascript:void(0);">配货清单打印</a>
							</li>
							<li class="edit">
								<a target="_blank" href="javascript:goPrintModelPage();">
								<i class="fa fa-print"></i>
								打印模板管理
								</a>
							</li>
						</ul>
            		</div>
            		<div class="form-group">
	                    <button class="btn btn-primary btn-sm" type="button" onclick="openOrderDownloadPage();">同步订单</button>
	                </div>
	                <div class="large-list-title">
<!-- 	                	<div class="btn-group btn-add " style="top:-30px;"> -->
		                    <button class="btn btn-primary btn-sm btn-success" type="button" id="userEditBtn" onclick="openHandlePage();">新增订单</button>
		                	<div id="upLoadMenu" class="btn-group">
		                		 <button class="btn btn-success btn-sm dropdown-toggle" type="button" data-toggle="dropdown">
									<span class="text mr5 ml5">导入/出相关</span>
									<span class="caret"></span>
								</button>
								<ul class="dropdown-menu dropdown-menu-left" role="menu" style="left: auto;min-width: 120px;padding: 0;right: 4px;">
									<li>
										<a href="javascript:gotoExportOrderTemplate()">订单导出</a>
									</li>
								</ul>
		                	</div>
<!-- 		                </div> -->
	                </div>
            	</div>
            	<div id="common_opr_btn3" style="display:none;">
<!--             		<div class="form-group"> -->
<!-- 	                    <button class="btn btn-primary btn-sm" type="button" onclick="openAddPage();">标记已完成</button> -->
<!-- 	                </div> -->
	                <div class="form-group">
	                    <button class="btn btn-primary btn-sm" type="button" id="orderRetryBtn" onclick="openBatchRetryPage();">批量重发</button>
	                </div>
	                <div id="PCMenuPUS" class="form-group">
						<button class="btn btn-primary btn-sm dropdown-toggle" onclick="doBatchUpdateShipping()" type="button" data-toggle="dropdown">更新交运信息</button>
					</div>
<!-- 					<div id="PCMenuLGM" class="btn-group"> -->
<!-- 						<a class="btn btn-primary btn-sm" onclick="checkBoxOrderId()">物流信息比对</a> -->
<!-- 					</div> -->
	                <div id="bprintMenu" class="form-group btn-group">
            			<button class="btn btn-primary btn-sm dropdown-toggle " data-toggle="dropdown" data-key="printKey" type="button">
							<span class="text pr5">打印中心</span>
							<span class="caret"></span>
						</button>
						<ul class="dropdown-menu dropdown-menu-left" role="menu">
							<li>
								<a onclick="pickingListPrint();" href="javascript:void(0);">拣货清单打印</a>
							</li>
							<li>
								<a onclick="distributeOrderPrint();" href="javascript:void(0);">配货清单打印</a>
							</li>
							<li class="edit">
								<a target="_blank" href="javascript:goPrintModelPage();">
								<i class="fa fa-print"></i>
								打印模板管理
								</a>
							</li>
						</ul>
            		</div>
	                <div class="large-list-title">
<!-- 	                	<div class="btn-group btn-add " style="top:-30px;"> -->
		                	<div id="upLoadMenu" class="btn-group">
		                		 <button class="btn btn-success btn-sm dropdown-toggle" type="button" data-toggle="dropdown">
									<span class="text mr5 ml5">导入/出相关</span>
									<span class="caret"></span>
								</button>
								<ul class="dropdown-menu dropdown-menu-left" role="menu" style="left: auto;min-width: 120px;padding: 0;right: 4px;">
									<li>
										<a href="javascript:gotoExportOrderTemplate()">订单导出</a>
									</li>
								</ul>
		                	</div>
<!-- 		                </div> -->
	                </div>
            	</div>
            	<div id="common_opr_btn5" style="display:none;"></div>
            </div>
    </div>

<div class="row">
        <div class="jqGrid_wrapper white-bg">
            <table id="jqGrid"></table>
            <!-- 显示table -->
            <div id="jqGridPager"></div>
            <!-- 显示分页 -->
        </div>
</div>
</div>
</section>
<div id="addOrderRemark" class="white-bg" style="display:none;padding-top:10px;">
	<form class="form-horizontal" style="margin-right: 15px; margin-left: 15px;" method="post" role="form" id="addRemarkForm" action="${ctx.path}/api/orders/updateOrderRemark.do">
		<input type="hidden" name="ordersId" id="ordersId">
		<div class="form-group">
				<label class="col-sm-offset-1 col-sm-2 control-label">内容：</label>
				<div class="col-sm-8">
					<textarea class="form-control" name="remark"  id="remark" maxlength="500" rows="3" type="textarea"></textarea>
				</div>
			</div>
	</form>
</div>
<div id="addOrderLogist" class="white-bg" style="display:none;padding-top:10px;">
	<form class="form-horizontal" style="margin-right: 15px; margin-left: 15px;" method="post" role="form" id="addOrderLogistForm" action="${ctx.path}/api/orders/addOrderLogist.do">
		<input type="hidden" name="ordersId" id="ordersId">
		<div class="form-group">
			<label class="col-sm-3 control-label">
				<span class="error-message">物流渠道</span>
			</label>
			<div class="col-sm-6">
				<div class="btn-group">
				<button class="btn btn-white dropdown-toggle" data-toggle="dropdown" type="button">
					<span class="text pr5">请选择物流渠道</span>
					<span class="caret"></span>
				</button>
				<input id="orderLogisticsId" type="hidden" name="logisticsId" value="">
				<ul class="dropdown-menu dropdown-menu-left copytext" role="menu">
					<div class="fixed-height" id="logicDiv">
					</div>
					<li class="edit">
						<a class="btn btn-link" style="float:left" href="javascript:goLogistisPage();">
						<i class="fa fa-circle-o mr5"></i>
						启用物流渠道
						</a>
					</li>
				</ul>
				</div>
			</div>
		</div>
		<div class="form-group">
				<label class="col-sm-3 control-label"><span class="error-message">货运单号</span></label>
				<div class="col-sm-6">
			        <input class="form-control" id="bills" name="bills" placeholder="请输入货运单号" maxlength="200" type="text">
				</div>
		</div>
	</form>
</div>

<div id="distributionPrintSet" class="white-bg" style="display:none;padding-top:10px;">
	<form class="form-horizontal" style="margin-right: 15px; margin-left: 15px;" method="post" role="form" id="distributionPrintForm" action="">
	<input type="hidden" name="orderIds" id="orderIds">
	 <div class="row">
	 	<div class="col-md-6">
			<div class="form-group">
                <div class="col-sm-12">
					<label class="control-label mb5">每行一个订单编号</label>
                   	<textarea wrap="off" name="orderCodes" id="orderCodes" class="form-control" rows="14"></textarea>
                   </div>
               </div>
		</div>
		<div class="col-md-6">
			<div class="form-group">
				<div class="col-sm-12 hide">
                   <label class="checkbox-inline"><input type="checkbox" checked="" name="printfields" value="name">订单编号</label>
                </div>
			</div>
			<div class="form-group">
				<div class="col-sm-6">
                  <label class="checkbox-inline"><input type="checkbox" name="printfields" value="bills">货运单号</label>
               </div>
               <div class="col-sm-6">
                  <label class="checkbox-inline"><input type="checkbox" name="printfields" value="platform_type">平台</label>
               </div>
			</div>
			<div class="form-group">
				<div class="col-sm-6">
                   <label class="checkbox-inline"><input type="checkbox"  name="printfields" value="deal_num">交易编号</label>
                </div>
                <div class="col-sm-6">
                   <label class="checkbox-inline"><input type="checkbox"  name="printfields" value="shop_name">店铺</label>
                </div>
			</div>
			<div class="form-group">
				<div class="col-sm-6">
                    <label class="checkbox-inline"><input type="checkbox" name="printfields" value="storget_image" checked="">商品图片</label>
                 </div>
                 <div class="col-sm-6">
                  <label class="checkbox-inline"><input type="checkbox"  name="printfields" value="remark" checked="">备注</label>
               </div>
			</div>
			<div class="form-group">
				<div class="col-sm-6">
                   <label class="checkbox-inline"><input type="checkbox" checked="" name="printfields" value="sku">库存sku</label>
                </div>
                <div class="col-sm-6">
                   <label class="checkbox-inline"><input type="checkbox" checked="" name="printfields" value="original_sku">原厂sku</label>
                </div>
			</div>
			<div class="form-group">
				<div class="col-sm-6">
                 <label class="checkbox-inline"><input type="checkbox" checked="" name="printfields" value="goods_info">多商品属性</label>
              </div>
              <div class="col-sm-6">
                 <label class="checkbox-inline"><input type="checkbox" checked="" name="printfields" value="e_name">商品名称</label>
              </div>
			</div>
			<div class="form-group">
				<div class="col-sm-6">
                   <label class="checkbox-inline"><input type="checkbox"  name="printfields" value="count" checked="">商品数量</label>
                </div>
                <div class="col-sm-6">
                   <label class="checkbox-inline"><input type="checkbox"  name="printfields" value="warehouse" checked="">仓库/仓位编号</label>
                </div>
			</div>
        </div>
	 </div>
	 </form>
</div>

<div id="printSet" class="white-bg" style="display:none;padding-top:10px;">
	<form class="form-horizontal" style="margin-right: 15px; margin-left: 15px;" method="post" role="form" id="printSetForm" action="">
		<input type="hidden" name="orderIds" id="orderIds">
		<div class="row">
			<div class="col-md-6">
				<div class="form-group">
                     <div class="col-sm-12">
						<label class="control-label mb5">每行一个订单编号</label>
                          	<textarea wrap="off" name="orderCodes" id="orderCodes" class="form-control" rows="9"></textarea>
                          </div>
                      </div>
			</div>
			<div class="col-md-6">
					<div class="form-group">
						<div class="col-sm-12">
                            <label class="checkbox-inline"><input type="checkbox" checked="" name="printfield" value="number">打印序号</label>
                         </div>
					</div>
					<div class="form-group">
						<div class="col-sm-12">
                            <label class="checkbox-inline"><input type="checkbox"  name="printfield" value="trackNumber">打印货运单号</label>
                         </div>
					</div>
					<div class="form-group">
						<div class="col-sm-12">
                            <label class="checkbox-inline"><input type="checkbox" name="printfield" value="picture">打印商品图片</label>
                         </div>
					</div>
					<div class="form-group">
						<div class="col-sm-12">
                            <label class="checkbox-inline"><input type="checkbox" checked="" name="printfield" value="warehouse">打印仓库</label>
                         </div>
					</div>
					<div class="form-group">
						<div class="col-sm-12">
                            <label class="checkbox-inline"><input type="checkbox"  name="printfield" value="inventory">打印库存/总库存</label>
                         </div>
					</div>
					<div class="form-group">
						<div class="col-sm-12">
                           <label class="checkbox-inline"><input type="checkbox"  name="printfield" value="osku">打印原厂编SKU</label>
                        </div>
					</div>
              </div>
		</div>
	</form>
</div>

<!-- 编辑订单 -->
<div id="batchEdit" class="white-bg" style="display:none;padding-top:10px;">
	<form class="form-horizontal" style="margin-right: 15px; margin-left: 15px;" method="post" role="form" name="editForm" id="editForm" action="">
		<div class="row">
			<div class="col-md-5">
				<div class="form-group">
					<div class="col-sm-12">
						<label class="control-label mb5">每行一个订单编号</label>
						<textarea wrap="off" rows="10" id="orderCodes" class="form-control" name="orderCodes"></textarea>
					</div>
				</div>
			</div>
			
			<div class="col-md-7">
				<div class="form-group">
					<div class="col-sm-4">
						<label class="checkbox-inline text-default bold"><input type="checkbox" value="2" name="editLogist" id="order-edit2">设置物流渠道</label>
					</div>
					<div class="col-sm-6">
						<select name="logisticsId" id="logisticsId" class="form-control" disabled="disabled">
							<option value="">无</option>
						</select>
					</div>
				</div>
				<div class="form-group">
					<div class="col-sm-4">
						<label class="checkbox-inline text-default bold"><input type="checkbox" value="3" name="editState" id="order-edit3">修改状态</label>
					</div>
					<div class="col-sm-6">
						<select name="orderState" id="orderState" class="form-control" disabled="disabled">
							<option value="3" selected>已发货</option>
							<option value="4" >已作废</option>									
						</select>
					</div>
				</div>
				<div class="form-group">
					<div class="col-sm-4">
						<label class="checkbox-inline text-default bold"><input type="checkbox" value="4" name="editRemark" id="order-edit4">备注</label>
					</div>
					<div class="col-sm-6">
						<textarea wrap="off" name="remark" class="form-control" id="remark" style="width: 235px; height: 130px;" disabled="disabled"></textarea>
					</div>
				</div>
			</div>
		</div>
	</form>
</div>

<div id="batchImportInfo" class="white-bg" style="display:none;padding-top:10px;">
	<form class="form-horizontal" style="margin-right: 15px; margin-left: 15px;" method="post" role="form" name="batchImportForm" id="batchImportForm" action="">
		<div class="form-group">
			<label class="col-sm-3 control-label">更新方式</label>
				<div class="col-sm-6">
					<select class="form-control"
						onChange="$('#batchImportInfo').find('.updataInfo').html($(this).find('option:selected').attr('data-title'))">
						<option value="1" data-title="订单编号，货运单号">按 订单编号 更新 货运单号</option>
						<option value="2" data-title="订单编号，重量">按 订单编号 更新 重量</option>
						<option value="3" data-title="订单编号，运费">按 订单编号 更新 运费</option>
						<option value="4" data-title="货运单号，重量">按 货运单号 更新 重量</option>
						<option value="5" data-title="货运单号，运费">按 货运单号 更新 运费</option>
						<option value="6" data-title="交易号，货运单号">按 交易号 更新 货运单号</option>
					</select>
				</div>
		</div>
		<div class="form-group">
			<label class="col-sm-3 control-label">更新内容</label>
			<div class="col-sm-9">
				<label class="control-label mb5">
					每行一个
					<span class="text-primary pl5 pr5 updataInfo">订单编号，货运单号</span>
				</label>
				<textarea rows="8" class="form-control" name=""></textarea>
			</div>
		</div>
	</form>
</div>

<div id="errorMessage" class="white-bg" style="display:none;padding-top:10px;overflow-x:hidden; ">
	<div class="row">
		<div class="col-md-12">
			<div class="form-group">
				<div class="col-md-12 selectitem">
					<div class="productTr nm">
						<table class="table table-condensed multichoice nm">
							<thead>
								<tr>
									<th>订单编号</th>
									<th class="text-center">失败原因</th>
								</tr>
							</thead>
							<tbody></tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="row"></div>
</div>

<div id="loadManuallyDownloadOrder" class="white-bg" style="display:none;padding-top:10px;">
	<form class="form-horizontal" style="margin-right: 15px; margin-left: 15px;" method="post" role="form" name="downForm" id="downForm" action="">
		<div class="text-center">
			<span class="alert-warning">温馨提示：同一店铺1小时内只能手动下载一次，每个店铺手动<br>下载订单的时间平均为10分钟左右，请耐心等待。</span>
		</div>
		<!-- 添加订单下载列表 -->
		<div class="row">
				<div class="jqOrdersDownGrid_wrapper white-bg">
					<table id="jqDownGrid"></table>
					<!-- 显示table -->
				</div>
		</div>
	</form>
</div>

<!-- 打印订单 -->
<div id="printOrder" class="white-bg" style="display:none;padding-top:10px;">
	<form class="form-horizontal" style="margin-right: 15px; margin-left: 15px;" method="post" role="form" name="printOrderForm" id="printOrderForm" action="">
		<div id="running" class="panel-body tab-pane active">
			<div class="alert alert-warning fade in mb10">
				<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
				<p class="mb0"><i class="fa fa-exclamation-circle pr5 text-danger"></i>温馨提示：在如果选择不到标签模板请进入 <a href="javascript:goPrintModelPage();">[标签模板设置]</a> 复制通用标签(可根据企业要求进行编辑)或者自行定义</p>
			</div>
			<div class="panel panel-default form-horizontal form-bordered min">
				<div class="panel-heading">
	                <h3 class="panel-title" style="width:50%"><i class="fa fa-print mr5"></i>标签自定义模板打印中心<span class="text-warning pl15"><i class="fa fa-exclamation-circle pr5"></i>地址单、配货单、报关单可自由组合打印，发票需单独打印</span>
	                </h3>
	                <div class="panel-toolbar text-right" style="width:20%">
	                 </div>
	            </div>
	            <div class="panel-body pt5 pb5">
	            	<div class="row">
	            		<div class="col-md-4">
	                        <label class="control-label mb5">每行一个订单编号</label>
	                        <textarea rows="15" id="platformOrderIds" class="form-control" name=""></textarea>
						 <br/>
						 <div class="col-md-12">
	                      <span style="color:red;font-family:微软雅黑;font-size:12px;">温馨提示：订单是否已打印，请通过按钮动作完成。</span>
	                     </div>
	                  
		                  <div class="col-md-12">
							  <button class="btn btn-success" type="button" onclick="isPrint()"><i class="fa fa-print mr5"></i>标记为已打印</button>
						  </div>
						 </div>
						 <div class="col-md-8">
							                    <div class="panel panel-default">
							                        <div class="panel-heading">
							                            <h3 class="panel-title">单物流标签打印</h3>
							                        </div>
							                        <div class="panel-body pt0 pb0">
							                        <div class="form-group">
							                                <div class="col-md-12">
							                                    <h4 class="text-primary mt5 mb5">打印常用标签</h4>
							                                </div>
							                            </div>
							                            <div class="form-group">
							                                <label class="col-sm-2 control-label">常用标签</label>
							                                <div class="col-sm-5">
							                                	<select class="form-control" name="CombinationLabel" id="CombinationLabel">
							                                        <option value="">请选择</option>
							                                        <option value="2">地址单</option>
							                                        <option value="4">报关单</option>
							                                        <option value="5">配货单</option>
							                                        <option value="2,4">地址单 + 报关单</option>
							                                        <option value="2,5">地址单 + 配货单</option>
							                                        <option value="4,5">报关单 + 配货单</option>
							                                        <option value="2,4,5">地址单 + 报关单 + 配货单</option>
							                                        <!--
							                                        <option value="83,,88,">美国EUB标签+报关单</option>
							                                        <option value="83,81,88,">美国EUB标签+报关单+配货单</option>
							                                        <option value="91,,93,">俄罗斯EUB标签+报关单</option>
							                                        <option value="91,81,93,">俄罗斯EUB标签+报关单+配货单</option>
							                                        <option value="89,,90,">英国EUB标签+报关单</option>
							                                        <option value="89,81,90,">英国EUB标签+报关单+配货单</option>
							                                        <option value="104,,105,">加拿大EUB标签+报关单</option>
							                                        <option value="104,81,105,">加拿大EUB标签+报关单+配货单</option>
							                                        <option value="95,,96,">澳大利亚EUB标签+报关单</option>
							                                        <option value="95,81,96,">澳大利亚EUB标签+报关单+配货单</option>
							                                        <option value="107,,123,">法国EUB标签+报关单</option>
							                                        <option value="107,81,123,">法国EUB标签+报关单+配货单</option>
							                                        <option value="80,,,">wish邮 挂</option>
							                                        <option value="80,81,,">wish邮 挂+配货单</option>
							                                        <option value="87,,,">wish邮 平</option>
							                                        <option value="87,81,,">wish邮 平+配货单</option>
							                                        <option value=",,86,">燕文平邮标签</option>
							                                        <option value=",81,86,">燕文平邮标签+配货单</option>
							                                        <option value="101,,100,">燕文挂号标签+报关单</option>
							                                        <option value="101,150,100,">燕文挂号标签+报关单+配货单</option>
							                                        <option value="102,,103,">中邮普通标签+报关单</option>
							                                        <option value="102,81,103,">中邮普通标签+报关单+配货单</option>
							                                        <option value="2945,,,">国际平常小包一体化面单</option>
							                                        <option value="94,,,">中邮一体化面单(三合一)</option>
							                                        <option value="3861,,,">线上发货aliexpress标准物流标签</option>
							                                        <option value=",,468,">线上发货平常挂号标签</option>
							                                        <option value=",,466,">线上发货平常小包标签</option>
							                                        -->
							                                    </select>
							                                </div>
							                                <div class="col-sm-2">
							                                    <button class="btn btn-primary" type="button" onClick="printOrderLabels(4)"><i class="fa fa-print mr5"></i>打印</button>
							                                </div>
							                            </div>
							                            <div class="form-group">
							                                <div class="col-md-12">
							                                    <h4 class="text-primary mt5 mb5">打印地址单/报关单/配货单</h4>
							                                </div>
							                            </div>
							                            <div class="form-group">
							                                <label class="col-sm-2 control-label">标签规格</label>
							                                <div class="col-sm-5">
							                                    <select class="form-control"   id="specType" onchange="setOptions(this)">
							                                    	<option value="0">全部规格</option>
							                                    	<option value="1">10cm*10cm</option>
							                                    	<option value="2">8cm*3cm</option>
							                                    	<option value="3">5cm*2cm</option>
							                                    </select>
							                                </div>
							                                <div class="col-sm-5">
																<div class="btn-group">
																	  <button class="btn btn-primary" type="button" onClick="printOrderLabels(1)"><i class="fa fa-print mr5"></i>打印</button>
																</div>
														    </div>
							                            </div>
							                            <div class="form-group">
							                                <label class="col-sm-2 control-label">地址单</label>
							                                <div class="col-sm-5">
							                                    <select class="form-control" name="addressId" id="addressId"></select>
							                                </div>
							                            </div>
							                            <div class="form-group">
							                                <label class="col-sm-2 control-label">报关单</label>
							                                <div class="col-sm-5">
							                                    <select class="form-control" name="customId" id="customId"></select>
							                                </div>
							                            </div>
							                            <div class="form-group">
							                                <label class="col-sm-2 control-label">配货单</label>
							                                <div class="col-sm-5">
							                                    <select class="form-control" name="deliverId" id="deliverId"></select>
							                                </div>
							                            </div>
							                            <div class="form-group">
							                                <div class="col-md-12">
							                                    <h4 class="text-primary mt5 mb5">打印发票</h4>
							                                </div>
							                            </div>
							                            <div class="form-group">
							                                <label class="col-sm-2 control-label">发票</label>
							                                <div class="col-sm-5">
							                                    <select class="form-control" name="invoiceId" id="invoiceId">
							                                        <option value="">请选择</option>
							                                        							                                    </select>
							                                </div>
							                                <div class="col-sm-2">
							                                    <button class="btn btn-primary" type="button" onClick="printOrderLabels(2)"><i class="fa fa-print mr5"></i>打印</button>
							                                </div>
							                                 <div class="col-sm-3">
							                                   <input id="GDdeclareFeeOrigin" class="form-control" name="GDdeclareFeeOrigin" type="text" placeholder="固定申报价值 $"  onkeypress="if(!this.value.match(/^[\+\-]?\d*?\.?\d*?$/))this.value=this.t_value;else this.t_value=this.value;if(this.value.match(/^(?:[\+\-]?\d+(?:\.\d+)?)?$/))this.o_value=this.value" onkeyup="if(!this.value.match(/^[\+\-]?\d*?\.?\d*?$/))this.value=this.t_value;else this.t_value=this.value;if(this.value.match(/^(?:[\+\-]?\d+(?:\.\d+)?)?$/))this.o_value=this.value;$('#min-price-freight').text($(this).val())"  />
							                                 </div>
							                              	<div class="col-sm-6" style="margin-left:55px;">
						                                    </div>
							                            </div>
							                        </div>
							                    </div>
							                     <div class="panel panel-default nm">
							                        <div class="panel-heading">
							                            <h3 class="panel-title">多物流标签打印</h3>
							                        </div>
							                        <div class="panel-body pt0 pb0">
							                            <div class="form-group">
							                                <div class="col-sm-9">
							                                    <p class="loadtext">根据物流渠道中设置的发货标签模板进行打印（暂不支持发票打印）</p>
							                                </div>
							                                <div class="col-sm-3">
							                                    <button class="btn btn-primary" type="button" id="multi-print" onClick="printOrderLabels(3)"><i class="fa fa-print mr5"></i>打印</button>
							                                </div>
							                            </div>
							                        </div>
							                    </div> 
							                </div>
							            </div>
							        </div>
							    </div>	
							</div>
	</form>
</div>

<!-- 导出订单 -->
<div id="exportOrder" class="white-bg" style="display:none;padding-top:10px;">
	<form class="form-horizontal" style="margin-right: 15px; margin-left: 15px;" method="post" role="form" name="exportOrderForm" id="exportOrderForm" action="${ctx.path}/api/orders/exportOrderList.do">
		<input type="hidden" name="page" value="1"/>
		<input type="hidden" name="rows" value="500"/>
		<input type="hidden" name="search">
		<div class="panel-body pa10">
			<div class="panel panel-default multichoice" id="allfield">
				<div class="panel-heading">
					<h4 class="panel-title">所有字段
                    <label class="checkbox-inline text-primary ml10">
                      <input type="checkbox" value="all" name="fieldlabel" >
                      	全选/清空</label>
                  </h4>
				</div>
				<div class="panel-body pa5 fieldgroup">
					<div class="form-group" style="border-top:0;">
						<label class="col-sm-2 control-label">订单信息类</label>
						<div class="col-sm-10">
							<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="name"><span>订单编号</span></label>
							<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="dealNum"><span>交易编号</span></label>
							<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="remark"><span>备注</span></label>
							<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="payTime"><span>付款时间</span></label>
							<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="shopName"><span>店铺名</span></label>
							<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="orderStateCn"><span>状态</span></label>
							<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="deliverTime"><span>发货时间</span></label>
							<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="payment"><span>商品总金额</span></label>
							<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="incomeFreight"><span>原始运费金额</span></label>
							<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="customsCode"><span>运费收入</span></label>
							<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="cost"><span>平台交易费</span></label>
							<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="transferMoney"><span>转账费</span></label>
							<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="paymentMoney"><span>原始商品总金额</span></label>
							<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="originalMoney"><span>订单原始总金额</span></label>
							<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="ordersMoney"><span>订单总金额</span></label>
							<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="totalCost"><span>商品总成本</span></label>
							<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="currencyCode"><span>币种</span></label>
						</div>
					</div>
					<div class="form-group" style="border-top:0;">
						<label class="col-sm-2 control-label">买家信息类</label>
						<div class="col-sm-10">
							<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="customerId"><span>客户账号</span></label>
							<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="customerName"><span>客户姓名</span></label>
							<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="phone1"><span>电话1</span></label>
							<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="phone2"><span>电话2</span></label>
							<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="country"><span>国家</span></label>
							<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="province"><span>所属地区</span></label>
							<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="city"><span>所属城市</span></label>
							<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="postalCode"><span>邮政编码</span></label>
							<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="address"><span>邮寄地址1</span></label>
							<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="spareAddress"><span>邮寄地址2</span></label>
							<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="countryCn"><span>国家(中)</span></label>
							<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="email"><span>联系邮箱</span></label>
						</div>
					</div>
					<div class="form-group" style="border-top:0;">
						<label class="col-sm-2 control-label">商品物流信息类</label>
						<div class="col-sm-10">
							<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="custLogistics"><span>买家自选物流方式</span></label>
							<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="logistisName"><span>货运方式</span></label>
							<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="bills"><span>货运单号</span></label>
							<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="interiorBills"><span>内部单号</span></label>
							<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="antcipatedFreight"><span>预估运费</span></label>
							<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="actualFreight"><span>实际运费</span></label>
							<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="weight"><span>货运重量</span></label>
							<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="packName"><span>包材</span></label>
							<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="packPrice"><span>包材费</span></label>
						</div>
					</div>
					<div class="form-group" style="border-top:0;">
						<label class="col-sm-2 control-label">商品详情类</label>
						<div class="col-sm-10">
							<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="goodsInfo"><span>多物品选项</span></label>
							<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="price"><span>商品销售单价</span></label>
							<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="packWeight"><span>包材重量</span></label>
							<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="productId"><span>商品编号（ItemId）</span></label>
							<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="sku"><span>SKU</span></label>
							<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="childId"><span>子交易号</span></label>
							<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="whouseName"><span>仓库</span></label>
							<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="spaceCode"><span>仓位</span></label>
							<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="count"><span>商品数量</span></label>
							<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="originalSku"><span>原厂编号</span></label>
							<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="inventoryCount"><span>商品库存</span></label>
							<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="catalogName"><span>商品目录</span></label>
							<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="declareName"><span>申报品名中文</span></label>
							<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="declareEname"><span>申报品名英文</span></label>
							<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="eName"><span>商品英文名称</span></label>
							<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="goodsName"><span>商品中文名称</span></label>
							<label class="checkbox-inline"><input type="checkbox" name="fieldlabel" value="saleImage"><span>销售图片</span></label>
						</div>
					</div>
				</div>
				<div id="panel_footer">
				</div>
			</div>
		</div>
	</form>
</div>
</body>
</html>
