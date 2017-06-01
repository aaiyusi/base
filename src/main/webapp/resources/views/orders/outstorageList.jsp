<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/resources/platform/inc.jsp"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
		<meta charset="utf-8">
		<title>称重出库</title>
		<link href="${ctx.path}/resources/css/reset.css" rel="stylesheet" type="text/css">
		<link href="${ctx.path}/resources/css/common.css" rel="stylesheet" type="text/css">
		<link type="text/javascript" href="${ctx.path}/resources/platform/css/new.css" rel="stylesheet">
    	<link rel="stylesheet" type="text/css" href="${ctx.path}/resources/code/css/custom.css"/>
		<script src="${ctx.path}/resources/script/orders/ordersOut.js?v=${ctx.versions}"></script>
		<script src="${ctx.path}/resources/platform/js/common_check.js"></script>
  </head>
  
  <body>
        <section id="main" role="main">
            <div class="container-fluid main_con">
                <div class="row">
						<form action="">
							<div class="panel panel-default">
								<div class="panel-heading">
									<div class="panel-toolbar">
										<ul class="nav nav-tabs pull-left semibold">
                                           
											<li class="active"><a data-toggle="tab" href="#scan-single"><i class="ico-file4 mr5"></i>单扫单出</a></li>
											<li><a data-toggle="tab" href="#scan-batch" ><i class="ico-clipboard2 mr5"></i>单扫批出</a></li>
										</ul>
									</div>
                                    <div class="panel-toolbar text-right">
<!-- 										<a class="btn btn-default btn-sm text-primary underline" href="https://item.taobao.com/item.htm?spm=a1z10.1-c.w4004-2288912944.6.8drvo1&amp;id=39715316712" target="_blank"><i class="ico-basket2 mr5"></i>电子秤购买链接</a> -->
									</div>
								</div>
								<div class="tab-content">
									<div class="panel-body form-horizontal form-bordered min pt5 tab-pane active"  id="scan-single">
										<div class="form-group" style="border:0;">
											<label class="col-sm-2 control-label">发货格式</label>
											<div class="col-sm-4">
												<select class="form-control scan-type">
													<!-- 大马帮和小马帮 -->
													<option value="type1" selected>仅订单编号</option>
															<option value="type2">订单编号和物流单号</option>
															<option value="type3">订单编号和订单重量</option>
															<option value="type4">订单编号,物流单号,订单重量</option>
															<option value="type5">仅物流单号</option>
															<option value="type6">物流单号和订单重量</option>
														<!-- lazada专版 -->
													</select>
											</div>
											<div class="col-sm-4">
												<p class="loadtext text-muted">(格式：
													<span class="text-danger">xxx</span>
													<span class="text-danger dis-none">,xxx</span>
													<span class="text-danger dis-none">,xxx</span>
												)</p>
											</div>
										</div>
										<div class="form-group tracking-set dis-none">
											<label class="col-sm-2 control-label">物流单号长度</label>
											<div class="col-sm-2">
												<div class="input-group">
													<input  type="text" onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\d]/g,''))" onkeyup="value=value.replace(/[^\d]/g,'') " class="form-control text-center tracking-digit" value="13">
													<span class="input-group-addon">位</span>
												</div>
											</div>
											<div class="col-sm-8">
												<p class="loadtext text-muted">可以验证你扫描枪输入的包裹单号长度是否正确，如不需要此功能，请填0或不填</p>
											</div>
										</div>
										<div class="form-group weight-set dis-none">
											<label class="col-sm-2 control-label">实际与预估重量差额</label>
											<div class="col-sm-2">
												<div class="input-group">
													<input  type="text" onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\d]/g,''))" onkeyup="value=value.replace(/[^\d]/g,'') " class="form-control text-center weight-digit" value="0">
													<span class="input-group-addon">%</span>
												</div>
											</div>
											<div class="col-sm-8">
												<p class="loadtext text-muted">填写差额百分比，此功能可以找出包错货或数量不正确的订单，如不需要此功能，请填0或不填</p>
											</div>
										</div>
										<div class="form-group">
											<label class="col-sm-2 control-label">扫描配送信息</label>
													<div class="col-sm-3 scan-orderlabel">
														<div class="input-group">
															<span class="input-group-addon"><i class="ico-tag mr5"></i>订单编号</span>
															<input type="text"  class="form-control scanorder"  value="">
														</div>
													</div>
													<div class="col-sm-4 scan-trackingnumber">
														<div class="input-group">
															<span class="input-group-addon"><i class="ico-tag mr5"></i>货运单号</span>
															<input type="text" class="form-control trackNumber" value="" disabled>
														</div>
													</div>
													<div class="col-sm-3 scan-weight">
														<div class="input-group">
															<span class="input-group-addon"><i class="ico-tag mr5"></i>订单重量</span>
															<input type="text"  class="form-control orderWeight" onKeyUp="Scan_Out.checkdatadouble(this);" value="" disabled>
														</div>
													</div>
												</div>
                                                <div class="scan-sucess ">
												
                                                </div>
                                        
										<div class="form-group">
											<label class="col-sm-2 control-label">默认配送信息<br/><span style="color:red;font-weight:0;">(只显示成功与未处理)</span></label>
											<div class="col-sm-4">
												<textarea rows="15" class="form-control scan-log"></textarea>
											</div>
                                            <label class="col-sm-2 control-label">失败配送信息<br/><span style="color:red;font-weight:0;">(只显示失败信息)</span></label>
											<div class="col-sm-4">
												<textarea rows="15" class="form-control scan-log-error"></textarea>
											</div>
										</div>
										<div class="panel-footer text-right">
											
											<a  class="btn btn-primary" href='javascript:void(0);' onclick="loadResultPage();">查询处理结果</a>
										
                                        </div>
									</div>
                                    <!-- 单扫单出 end-->
                                    
                                    <!-- 单扫批出 start-->
									<div class="panel-body form-horizontal form-bordered min pt5 tab-pane" id="scan-batch">
										<div class="form-group" style="border:0;">
											<label class="col-sm-2 control-label">发货格式</label>
											<div class="col-sm-4">
												<select class="form-control scan-type2">
														<option value="type1" selected>仅订单编号</option>
														<option value="type2">订单编号和物流单号</option>
														<option value="type3">订单编号和订单重量</option>
														<option value="type4">订单编号,物流单号,订单重量</option>
														<option value="type5">仅物流单号</option>
														<option value="type6">物流单号和订单重量</option>
													</select>
											</div>
											<div class="col-sm-4">
												<p class="loadtext text-muted">(格式：
													<span class="text-danger2">xxx</span>
													<span class="text-danger2 dis-none">,xxx</span>
													<span class="text-danger2 dis-none">,xxx</span>
												)</p>
											</div>
                                               
										</div>
                                        
                                        <div class="form-group tracking-set dis-none">
											<label class="col-sm-2 control-label">物流单号长度</label>
											<div class="col-sm-2">
												<div class="input-group">
													<input  type="text" onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\d]/g,''))" onkeyup="value=value.replace(/[^\d]/g,'') " class="form-control text-center tracking-digit2" value="13">
													<span class="input-group-addon">位</span>
												</div>
											</div>
											<div class="col-sm-8">
												<p class="loadtext text-muted">可以验证你扫描枪输入的包裹单号长度是否正确，如不需要此功能，请填0或不填</p>
											</div>
										</div>
                                       
										<div class="form-group">
											<label class="col-sm-2 control-label">扫描配送信息</label>
											 
											<div class="col-sm-3 scan-orderlabel">
												<div class="input-group">
													<span class="input-group-addon"><i class="ico-tag mr5"></i>订单编号</span>
													<input type="text"  class="form-control scanorder2"    value="">
												</div>
											</div>
											<div class="col-sm-4 scan-trackingnumber">
												<div class="input-group">
													<span class="input-group-addon"><i class="ico-tag mr5"></i>货运单号</span>
													<input type="text"  class="form-control trackNumber2" value="" disabled>
												</div>
											</div>
											<div class="col-sm-3 scan-weight">
												<div class="input-group">
													<span class="input-group-addon"><i class="ico-tag mr5"></i>订单重量</span>
													<input type="text"  class="form-control orderWeight2" onKeyUp="Scan_Out.checkdatadouble(this);" value="" disabled>
												</div>
											</div>
										</div>
                                             
                                        
                                        <div class="form-group">
											<label class="col-sm-2 control-label">默认配送信息</label>
											<div class="col-sm-10">
												<textarea rows="18" class="form-control scan-log2"></textarea>
											</div>
										</div>
                                        
                                        <div class="panel-footer text-right">
											<button type="button" class="btn btn-primary scanButton" >确定</button><button type="button" class="btn btn-default" onclick="loadResultPage();">查询处理结果</button>
										</div>
									</div>
								</div>
							</div>
						</form>
                        <!-- 错误弹出框-->
                        <div class="modal fade in" id="error-alert">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button class="bootbox-close-button close" type="button">×</button>
                                        <h4 class="modal-title"></h4>
                                    </div>
                                <div class="modal-body">
                                    <div class="bootbox-body"></div>
                                </div>
                                <div class="modal-footer">
                                    <button class="btn btn-primary" type="button">确定</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <form id="scanForm" name="scanForm" method="post" action="">
            	<input  id="scanContent" type="hidden" name="scanContent" value=""/>
                <input  id="scanBatch" type="hidden" name="scanType" value=""/>
            </form>
        </section>
  </body>
  <script type="text/javascript">
  	$(document).ready(function(){
  		//初始化
		var scanType="type1";
		$(".scan-orderlabel input").focus();
		Scan_Out.initScanOrder();
  	});
  </script>
</html>
