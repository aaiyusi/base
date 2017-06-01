<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/resources/platform/inc.jsp"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <title>订单新增页面</title>
    <script src="${ctx.path}/resources/script/orders/ordersAdd.js"></script>
  </head>
  
  <body class="white-bg">
  	<form class="form-horizontal" method="post" role="form" id="addOrderForm" action="${ctx.path}/api/orders/addOrder.do">
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
					<label class="col-sm-2 control-label"><span class="text-danger pr5">*</span>订单编号</label>
				    <div class="col-sm-4">
				        <input class="form-control" name="name" placeholder="请输入订单编号" maxlength="100" type="text">
				    </div>
				
				    <label class="col-sm-2 control-label"><span class="text-danger pr5">*</span>订单时间</label>
				    <div class="col-sm-4">
				        <input class="form-control" name="ordersDate" placeholder="请输入订单时间" type="text" readonly="readonly" style="background-color: white;" onClick="WdatePicker()">
				    </div>
				</div>
				<div class="form-group">
					<label class="col-sm-2 control-label"><span class="text-danger pr5">*</span>交易号</label>
				    <div class="col-sm-4">
				        <input class="form-control" name="dealNum" placeholder="请输入交易号" maxlength="100" type="text">
				    </div>
				    <label class="col-sm-2 control-label"><span class="text-danger pr5">*</span>所属店铺</label>
				    <div class="col-sm-4">
				    	<select class="form-control" name="shopId" required data-msg-required="请选择店铺！">
				            <option value="">-请选择-</option>
				        </select>
				    </div>
				</div>
				<div class="form-group">
					 <label class="col-sm-2 control-label">应收邮资(RMB)</label>
				     <div class="col-sm-4">
				        <div class="input-group input-group-sm">
				            <input class="form-control" name="customsCode" placeholder="请输入应收邮资(RMB)" maxlength="9" type="text">
				            <span class="input-group-addon">RMB</span>
				        </div>
				     </div>
				     <label class="col-sm-2 control-label">保险金额(RMB)</label>
				    <div class="col-sm-4">
				        <div class="input-group input-group-sm">
				            <input class="form-control" name="insurance" placeholder="请输入保险金额(RMB)" maxlength="9" type="text">
				            <span class="input-group-addon">RMB</span>
				        </div>
				    </div>
				</div>
				<div class="form-group">
					 <label class="col-sm-2 control-label">应收货款(RMB)</label>
				     <div class="col-sm-4">
				        <div class="input-group input-group-sm">
				            <input class="form-control" name="payment" placeholder="请输入应收货款(RMB)" maxlength="9" type="text">
				            <span class="input-group-addon">RMB</span>
				        </div>
				     </div>
				      <label class="col-sm-2 control-label">平台费用(RMB)</label>
				    <div class="col-sm-4">
				        <div class="input-group input-group-sm">
				            <input class="form-control" name="cost" placeholder="请输入平台费用(RMB)" maxlength="9" type="text">
				            <span class="input-group-addon">RMB</span>
				        </div>
				    </div>
				</div>
				<div class="form-group">
					<label class="col-sm-2 control-label">收款帐号</label>
				    <div class="col-sm-4">
				        <input class="form-control" name="gatheringAccount" placeholder="请输入收款帐号" maxlength="200" type="text">
				    </div>
				
				    <label class="col-sm-2 control-label"><span class="text-danger pr5">*</span>币别</label>
				    <div class="col-sm-4">
				    	 <select class="form-control" name="currency" required data-msg-required="请选择币别！">
				            <option value="">-请选择-</option>
				        </select>
				    </div>
				</div>
				<div class="form-group">
					<label class="col-sm-2 control-label">平台留言</label>
					<div class="col-sm-8">
						<textarea class="form-control" name="message" maxlength="500" rows="3" type="textarea" placeholder="请输入平台留言"></textarea>
					</div>
				</div>
				<div class="form-group">
					<label class="col-sm-2 control-label">备注信息</label>
					<div class="col-sm-8">
						<textarea class="form-control" name="remark" maxlength="500" rows="3" type="textarea" placeholder="请输入备注信息"></textarea>
					</div>
				</div>
			</div>
		</div>
  	</div>
  	<div class="ibox" style="padding-top:5px;margin-bottom: 60px;" id="custInfoDiv">
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
  	<div class="form-group navbar-fixed-bottom" style="background: #f0f4f7;">
		<div style="text-align: right;vertical-align: middle; font-size:0; padding-right: 20px;">
			<button type="button" class="btn btn-md btn-primary mr10" id="btnAdd">保存</button>
			<button type="button" class="btn btn-md btn-default mr10" id="btnCancel">取消</button>
		</div>
	</div>
  	</form>
  </body>
</html>
