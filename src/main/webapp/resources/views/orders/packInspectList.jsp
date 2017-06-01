<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/resources/platform/inc.jsp"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
		<meta charset="utf-8">
		<title>包装验货</title>
		<link href="${ctx.path}/resources/css/reset.css" rel="stylesheet" type="text/css">
		<link href="${ctx.path}/resources/css/common.css" rel="stylesheet" type="text/css">
		<script src="${ctx.path}/resources/script/orders/storage.js?v=${ctx.versions}"></script>
		<script src="${ctx.path}/resources/platform/js/common_check.js"></script>
  </head>
  
  <body>
  	<section id="main" role="main">
  	<div class="container-fluid has-toobar has-navbar multichoice">
  	<div class="main_con">
  		<input type="hidden" id="orderId">
		<!--包装验货 -->
	  <div class="core_box" id="scan-heater">
	     	<div class="col_tit">
	        <h2>包装验货</h2>
	     	</div>
	     	<div class=" package_heater">
		     	<!--输入框-->
		       <div class="package_ipt">
		       		<ul>
		       			<li><input type="text" class="inputtext w200" placeholder="扫描订单号或货运单号" id="scan-order"/></li>
		       			<li><input type="text" class="inputtext w200" placeholder="扫描商品编号" id="scan-sku"/></li>
		       			<li><button class="blue_btn w200" id="reset_btn">重置</button></li>
		       		</ul>
		       </div>
					<!--订单信息-->
					<div class="gray_box package_info" id="scan_result">
						<h3>包装验货</h3>
						<p>请扫描订单编号或货运单号</p>
					</div>
					<!--订单信息-->
					<div class="gray_box package_info dis-none" id="scan-info">
						<div class="package_info_tit">订单编号：<span id="orderlabel"></span></div>
						<div class="package_info_tit">SUK总数量：<span id="skucount">0</span></div>
						<ul class="dis-none" id="scanitem-info">
							<li>SKU编号：<span id="skuCode"></span></li>
							<li>SKU重量：<span id="sukWight"></span></li>
							<li>包材：<span id="sukPack"></span></li>
						</ul>
					</div>
					<div class="gray_box package_info dis-none" id="scan_success">
						<h3>订单编号：<span id="orderCode"></span>&nbsp;&nbsp;&nbsp;&nbsp;验货成功</h3>
					</div>
	 			</div>
	   </div>
	   <!--暂无订单信息-->
	   <div class="core_box" id="noorder">
		   <div class="gray_box package_none">
		   		<i class="prompt_ico"></i>
			  	<h3>暂无订单商品信息</h3>
			  	<p>请扫描订单编号或运单号</p>
		   </div>
		</div>
		<div class="core_box dis-none" id="scanorder">
		    <div class="jqGrid_wrapper white-bg">
	            <table id="jqGrid"></table>
	            <!-- 显示table -->
	            <div id="jqGridPager"></div>
	            <!-- 显示分页 -->
	        </div>
		   <div class="customer_contact">
		   		<p><span>检货中：</span><span class="text-primary pl5" id="orderStatus"></span></p>
		   		<p><span>地址信息：</span><span class="text-muted pl5" id="orderAddress"></span></p>
		   		<p><span>订单备注：</span><span class="text-danger bold fsize16 pl5" id="orderDescr"></span></p>
		   </div>
		</div>
	</div>
	</div>
	</section>
  </body>
  
  <script type="text/javascript">
  		$(function(){
  			$("#scan-order").focus();
  			$("#scan-sku").val("");
  			Scan.initTable();
  			Scan.scan_order();
  			Scan.scan_sku();
  			Scan.reset_scan();
  		});
  </script>
</html>
