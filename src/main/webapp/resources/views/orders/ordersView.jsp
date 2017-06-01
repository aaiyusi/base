<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/resources/platform/inc.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <title>订单详情信息</title>
    <script type="text/javascript">
    	var oldOrdersId = '${ordersId}';
    </script>
    <script src="${ctx.path}/resources/platform/js/common_grid.js"></script>
    <script src="${ctx.path}/resources/platform/js/common_check.js"></script>
    <script src="${ctx.path}/resources/platform/js/common_format.js"></script>
    <script type="text/javascript" src="//www.17track.net/externalcall.js"></script>
    <script src="${ctx.path}/resources/script/orders/ordersView.js"></script>
    <link type="text/javascript" href="${ctx.path}/resources/platform/css/new.css" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="${ctx.path}/resources/css/custom.css" />
	<script type="text/javascript">
		$(function(){
			var orderState = $("#updateOrderForm").find("#orderState").val();
			if(orderState == 3){
				$("#updateOrderForm :input:not(:hidden):not([spec='true'])").attr("disabled","disabled");
				$("#updateOrdersGoodsForm :input,#add-skulabel :input").attr("disabled","disabled");
				$("#btnGoodsUpdate").attr("disabled","disabled");
			}else if(orderState == 4){
				$("#updateOrderForm :input:not(:hidden),#btnUpdate").attr("disabled","disabled");
				$("#updateOrdersGoodsForm :input,#add-skulabel :input").attr("disabled","disabled");
				$("#btnGoodsUpdate").attr("disabled","disabled");
			}
		});
	</script>
  </head>
  
  <body class="white-bg">
  		<div class="animated fadeInRight">
		<div class="row m-b-lg">
            <div class="col-sm-12">
                <div class="tabs-container">
                        <ul class="nav nav-tabs" id="myTab">
                            <li class="active"><a data-toggle="tab" href="#tab-1">基础信息</a>
                            </li>
                           	<li class="" onclick="orderGoodsClick();">
		                        <a data-toggle="tab" href="#tab-2" id="productTab">商品物流信息</a>
		                    </li>
		                    <li class="" onclick="orderRelateClick();">
		                        <a data-toggle="tab" href="#tab-4" id="orderTab">关联订单信息</a>
		                    </li>
		                    <li class="" onclick="orderLogClick();">
		                    	<a data-toggle="tab" href="#tab-3" id="orderLogTab">订单操作日志</a>
                            </li>
                            <li class="" onclick="orderLogicClick();">
		                    	<a data-toggle="tab" href="#tab-5" id="orderLogicTab">物流跟踪信息</a>
                            </li>
                        </ul>
                        <div class="tab-content ">
                        	<!-- 基础信息页签 -->
                            <div id="tab-1" class="tab-pane active">
                                <div class="panel-body">
                                	<form class="form-horizontal" method="post" role="form" id="updateOrderForm" action="${ctx.path}/api/orders/updateOrder.do">
                                		<input type="hidden" name="ordersId" id="ordersId" value="${orders.ordersId}" type="text">
                                		<input type="hidden" id="type" value="${type}">
									  	<div class="ibox" id="orderInfoDiv">
									  		<div class="ibox-title">
											  <h5>基本信息</h5>
											  <div class="ibox-tools">
											    <a class="collapse-link"> <i class="fa fa-chevron-up"></i>
											    </a>
											  </div>
											</div>
											<div class="ibox-content"> 
												<div class="form-horizontal form-bordered min">
													<div class="form-group">
														<label class="col-sm-2 control-label">订单编号</label>
													    <div class="col-sm-4">
															<span id="orderCode"></span>
<!-- 													        <input class="form-control" name="name"  maxlength="100" type="hidden"> -->
													    </div>
													
													    <label class="col-sm-2 control-label">订单状态</label>
													    <div class="col-sm-4">
													        <select class="form-control" id="orderState" name="orderState" disabled="disabled" type="select">
													            <option value="">-请选择-</option>
													            <option value="0">待审核</option>
													            <option value="1">待处理</option>
													            <option value="2">配货中</option>
													            <option value="3">已发货</option>
													            <option value="4">已作废</option>
													            <option value="5">处理处理</option>
													        </select>
													    </div>
													</div>
													<div class="form-group">
														<label class="col-sm-2 control-label">交易号</label>
													    <div class="col-sm-4">
													    	<span id="dealNum"></span>
<!-- 													        <input class="form-control" name="dealNum"  maxlength="100" type="hidden"> -->
													    </div>
													    <label class="col-sm-2 control-label">所属店铺</label>
													    <div class="col-sm-4">
													    	<select class="form-control" name="shopId" disabled="disabled" type="select">
													            <option value="">-请选择-</option>
<!-- 													            <c:forEach var="item" items="${shopList }" varStatus="v"> -->
<!-- 									                     			<option value="${item.shop_id}" ${orders.shopId == item.shop_id ? "selected" : ""}>${item.shop_name }</option> -->
<!-- 									        					</c:forEach> -->
													        </select>
													    </div>
													</div>
													<div class="form-group">
														 <label class="col-sm-2 control-label">应收邮资</label>
													     <div class="col-sm-4">
													        <div class="input-group input-group-sm">
													            <input class="form-control" name="customsCode" disabled="disabled" maxlength="9" type="text">
													            <span class="input-group-addon">RMB</span>
													        </div>
													     </div>
													     <label class="col-sm-2 control-label">保险金额</label>
													    <div class="col-sm-4">
													        <div class="input-group input-group-sm">
													            <input class="form-control" name="insurance"  disabled="disabled" maxlength="9" type="text">
													            <span class="input-group-addon">RMB</span>
													        </div>
													    </div>
													 </div>
													<div class="form-group">
														<label class="col-sm-2 control-label">应收货款</label>
													     <div class="col-sm-4">
													        <div class="input-group input-group-sm">
													            <input class="form-control" name="payment" disabled="disabled" maxlength="9" type="text">
													            <span class="input-group-addon">RMB</span>
													        </div>
													     </div>
													    <label class="col-sm-2 control-label">平台费用</label>
													    <div class="col-sm-4">
													        <div class="input-group input-group-sm">
													            <input class="form-control" name="cost" disabled="disabled" maxlength="9" type="text">
													            <span class="input-group-addon">RMB</span>
													        </div>
													    </div>
													</div>
													 <div class="form-group">
													 	 <label class="col-sm-2 control-label">退款金额</label>
													    <div class="col-sm-4">
													        <div class="input-group input-group-sm">
													            <input class="form-control" name="refundMoney" disabled="disabled" maxlength="9" type="text">
													            <span class="input-group-addon">RMB</span>
													        </div>
													    </div>
													     <label class="col-sm-2 control-label">转账费</label>
													    <div class="col-sm-4">
													        <div class="input-group input-group-sm">
													            <input class="form-control" name="transferMoney" disabled="disabled" maxlength="9" type="text">
													            <span class="input-group-addon">RMB</span>
													        </div>
													    </div>
													</div>
													<div class="form-group">
														<label class="col-sm-2 control-label">收款帐号</label>
													    <div class="col-sm-4">
													        <input class="form-control" name="gatheringAccount" disabled="disabled" maxlength="200" type="text">
													    </div>
													
													    <label class="col-sm-2 control-label">币别</label>
													    <div class="col-sm-4">
													    	 <select class="form-control" name="currency" disabled="disabled" type="select">
													            <option value="">-请选择-</option>
													        </select>
													    </div>
													</div>
													<div class="form-group">
														<label class="col-sm-2 control-label">平台留言</label>
														<div class="col-sm-8">
															<textarea class="form-control" name="message" maxlength="500" rows="3" type="textarea" disabled="disabled"></textarea>
														</div>
													</div>
													<div class="form-group">
														<label class="col-sm-2 control-label">备注信息</label>
														<div class="col-sm-8">
															<textarea class="form-control" name="remark" spec="true" maxlength="500" rows="3" type="textarea" placeholder="请输入备注信息"></textarea>
														</div>
													</div>
												</div>
											</div>
									  	</div>
									  	<div class="ibox" style="padding-top:5px;margin-bottom: 30px;" id="custInfoDiv">
									  		<div class="ibox-title">
											  <h5>客户信息</h5>
											  <div class="ibox-tools">
											    <a class="collapse-link"> <i class="fa fa-chevron-up"></i>
											    </a>
											  </div>
											</div>
											<div class="ibox-content">
												<div class="form-horizontal form-bordered min">
											  		<div class="form-group">
											  			<label class="col-sm-2 control-label"><span class="text-danger pr5">*</span>客户ID</label>
													    <div class="col-sm-4">
													        <input class="form-control" name="customerId" placeholder="请输入客户ID" maxlength="200" type="text">
													    </div>
													     <label class="col-sm-2 control-label"><span class="text-danger pr5">*</span>客户姓名</label>
													    <div class="col-sm-4">
													        <input class="form-control" name="customerName" placeholder="请输入客户姓名" maxlength="200" type="text">
													    </div>
											  		</div>
											  		<div class="form-group">
											  			<label class="col-sm-2 control-label">联系电话1</label>
													    <div class="col-sm-4">
													        <input class="form-control" name="phone1" placeholder="请输入联系电话1" maxlength="50" type="text">
													    </div>
													
													    <label class="col-sm-2 control-label">联系电话2</label>
													    <div class="col-sm-4">
													        <input class="form-control" name="phone2" placeholder="请输入联系电话2" maxlength="50" type="text">
													    </div>
											  		</div>
											  		<div class="form-group">
											  			 <label class="col-sm-2 control-label">联系邮箱</label>
													    <div class="col-sm-4">
													        <input class="form-control" name="email" placeholder="请输入联系邮箱" maxlength="200" type="text">
													    </div>
													
													    <label class="col-sm-2 control-label">所属国家</label>
													    <div class="col-sm-4">
													        <input class="form-control" name="country" placeholder="请输入英文全称" maxlength="200" type="text">
													    </div>
											  		</div>
											  		<div class="form-group">
											  			<label class="col-sm-2 control-label">省份/州</label>
													    <div class="col-sm-4">
													        <input class="form-control" name="province" placeholder="请输入省份/州" maxlength="200" type="text">
													    </div>
													
													    <label class="col-sm-2 control-label">所属城市</label>
													    <div class="col-sm-4">
													        <input class="form-control" name="city" placeholder="请输入所属城市" maxlength="100" type="text">
													    </div>
											  		</div>
											  		<div class="form-group">
											  			<label class="col-sm-2 control-label">邮政编码</label>
													    <div class="col-sm-4">
													        <input class="form-control" name="postalCode" placeholder="请输入邮政编码" maxlength="100" type="text">
													    </div>
											  		</div>
											  		<div class="form-group">
											  			<label class="col-sm-2 control-label">邮寄地址</label>
													    <div class="col-sm-8">
													        <input class="form-control" name="address" placeholder="请输入邮寄地址" maxlength="500" type="text">
													    </div>
											  		</div>
											  		<div class="form-group">
											  			<label class="col-sm-2 control-label">备用地址</label>
													    <div class="col-sm-8">
													        <input class="form-control" name="spareAddress" placeholder="请输入备用地址" maxlength="500" type="text">
													    </div>
											  		</div>
										  		</div>
									  		</div>
									  	</div>
									  	</form>
                                </div>
                                <div class="form-group navbar-fixed-bottom" style="background: #f0f4f7;">
						            <div style="text-align: right;vertical-align: middle; padding-right: 20px;">
						              <input type="hidden" id="oprType" value="0"/>
						              <button type="button" class="btn btn-md btn-primary" id="btnUpdate" spec="true" onclick="updateOrder(0);">保存</button>
						              <button type="button" class="btn btn-md btn-primary" id="btnContinue" onclick="updateOrder(1);">保存并继续</button>
						              <button type="button" class="btn btn-md btn-default" id="btnCancel">取消</button>
						            </div>
						        </div>
                            </div>
                            <!-- 按商品物流信息页签 -->
                            <div id="tab-2" class="tab-pane">
                                <div class="panel-body">
                                	<form class="form-horizontal" method="post" role="form" id="updateOrdersGoodsForm" action="${ctx.path}/api/orders/updateOrderGood.do">
									<input type="hidden" name="ordersId" type="text" value="">
									<div class="ibox" id="goodsPanel">
										<div class="ibox-title">
											<h5>商品物流信息</h5>
											<div class="ibox-tools">
											    <a class="collapse-link"> 
											      <i class="fa fa-chevron-up"></i>
											    </a>
										    </div>
										</div>
										<div class="ibox-content">
											<div class="form-group">
									  			<label class="col-sm-2 control-label">买家自选物流</label>
											    <div class="col-sm-4">
											        <input class="form-control" name="custLogistics"  maxlength="100" type="text" disabled="disabled">
											    </div>
									  			<label class="col-sm-2 control-label">物流渠道</label>
											    <div class="col-sm-4">
											        <select class="form-control" name="logisticsId" type="select">
											            <option value="">-请选择-</option>
											        </select>
											    </div>
									  		</div>
									  		<div class="form-group">
									  			<label class="col-sm-2 control-label">货运单号</label>
											    <div class="col-sm-4">
											        <input class="form-control" name="bills" maxlength="50" type="text">
											    </div>
											
											    <label class="col-sm-2 control-label">内部单号</label>
											    <div class="col-sm-4">
											        <input class="form-control" name="interiorBills" maxlength="50" type="text">
											    </div>
									  		</div>
									  		<div class="form-group">
												 <label class="col-sm-2 control-label">预估运费</label>
											     <div class="col-sm-4">
											        <div class="input-group input-group-sm">
											            <input class="form-control" name="antcipatedFreight" maxlength="9" type="text">
											            <span class="input-group-addon">RMB</span>
											        </div>
											     </div>
											      <label class="col-sm-2 control-label">实际运费</label>
											    <div class="col-sm-4">
											        <div class="input-group input-group-sm">
											            <input class="form-control" name="actualFreight" maxlength="9" type="text">
											            <span class="input-group-addon">RMB</span>
											        </div>
											    </div>
											</div>
											<div class="form-group">
												 <label class="col-sm-2 control-label">货运重量</label>
											     <div class="col-sm-4">
											        <div class="input-group input-group-sm">
											            <input class="form-control" name="weight" maxlength="9" type="text">
											            <span class="input-group-addon">g</span>
											        </div>
											     </div>
											      <label class="col-sm-2 control-label">包材</label>
											    <div class="col-sm-4">
											        <div class="input-group input-group-sm">
											            <select class="form-control" name="packingId" type="select">
												            <option value="">-请选择-</option>
												        </select>
											        </div>
											    </div>
											</div>
											<div class="form-group">
												<label class="col-sm-2 control-label">是否快速拣货</label>
												<div class="col-sm-2">
												<label class="checkbox-inline">
													<input type="checkbox" value="1" name="fastPicking">
												</label>
												</div>
											</div>
										</div>
									</div>
									</form>
									<div class="ibox">
										<div class="ibox-title">
												<h5>商品清单</h5>
												<div id="add-skulabel" class="input-group input-group-sm fr" style="width: 320px; margin-top:-7px;">
													<span class="input-group-addon">SKU</span>
													<input class="form-control" type="text" value="" id="goods_sku" name="sku" placeholder="输入sku编号"/>
													<span class="input-group-addon" style="border-width:1px 0;">订购量</span>
													<input class="form-control text-center" type="text" value="1" id="goods_count" name="count" style="width: 50px;" onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\d]/g,''))" onkeyup="value=value.replace(/[^\d]/g,'') ">
													<span class="input-group-btn">
														<button type="button" class="btn btn-sm btn-success" title="添加" onclick="addOrderGoods();">添加</button>
													</span>
												</div>
										</div>
										<div class="ibox-content">
											<!-- 添加入库列表 -->
											<div class="row">
													<div class="jqOrdersGoodsGrid_wrapper white-bg">
														<table id="jqAddGrid"></table>
														<!-- 显示table -->
													</div>
											</div>
										</div>
									</div>
                                </div>
                                <div class="form-group navbar-fixed-bottom" style="background: #f0f4f7;">
						            <div style="text-align: right;vertical-align: middle; padding-right: 20px;">
						              <button type="button" class="btn btn-md btn-primary" id="btnGoodsUpdate" spec="true" onclick="updateOrderGoodsLogistis(0);">保存</button>
						              <button type="button" class="btn btn-md btn-primary" id="btnContinue" onclick="updateOrderGoodsLogistis(1);">保存并继续</button>
						              <button type="button" class="btn btn-md btn-default" id="btnCancel">取消</button>
						            </div>
						        </div>
                            </div>
                            <!-- 按关联订单信息页签 -->
                            <div id="tab-4" class="tab-pane">
                            	<div class="panel-body">
	                            	<div class="ibox">
									        <div class="jqRelateGrid_wrapper white-bg">
									            <table id="jqRelateGrid"></table>
									        </div>
									</div>
                                </div>
                                <div class="form-group navbar-fixed-bottom" style="background: #f0f4f7;">
						            <div style="text-align: right;vertical-align: middle; padding-right: 20px;">
						              <button type="button" class="btn btn-md btn-primary" id="btnContinue" onclick="nextStep(3);">继续下一步</button>
						              <button type="button" class="btn btn-md btn-default" id="btnCancel">取消</button>
						            </div>
						        </div>
                            </div>
                            <!-- 按订单操作日志信息页签 -->
                            <div id="tab-3" class="tab-pane">
                           		<div class="panel-body">
	                            	<div class="ibox">
									        <div class="jqGrid_wrapper white-bg">
									            <table id="jqGrid"></table>
									            <!-- 显示table -->
									            <div id="jqGridPager"></div>
									            <!-- 显示分页 -->
									        </div>
									</div>
                               </div>
                               <div class="form-group navbar-fixed-bottom" style="background: #f0f4f7;">
						            <div style="text-align: right;vertical-align: middle; padding-right: 20px;">
						              <button type="button" class="btn btn-md btn-primary" id="btnContinue" onclick="nextStep(4);">继续下一步</button>
						              <button type="button" class="btn btn-md btn-default" id="btnCancel">取消</button>
						            </div>
						        </div>
                           </div>
                           <!-- 按物流跟踪信息页签 -->
                            <div id="tab-5" class="tab-pane">
                               <div class="panel-body">
                                  <div class="ibox">
                            	     <div id="YQContainer"></div>
                            	  </div>
                               </div>
<!--                                <div class="form-group navbar-fixed-bottom" style="background: #f0f4f7;"> -->
<!-- 						            <div style="text-align: right;vertical-align: middle; padding-right: 20px;"> -->
<!-- 						              <button type="button" class="btn btn-md btn-default" id="btnCancel">取消</button> -->
<!-- 						            </div> -->
<!-- 						        </div> -->
                            </div>
                       </div>
                </div>
            </div>
	</div>
 </div>	
  </body>
</html>
