<%@page import="com.samton.erp.api.orders.util.Configuration"%>
<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/resources/platform/inc.jsp"%>
<%
String aliAppKey=Configuration.getProperties("appKey");
String aliAppSecret=Configuration.getProperties("appSecret");
String wishAppKey=Configuration.getProperties("wishAppKey");
String wishAppSecret=Configuration.getProperties("wishAppSecret");
String aliRedirectUri=Configuration.getProperties("aliRedirectUri");
String wishRedirectUri=Configuration.getProperties("wishRedirectUri");
String aliAction=Configuration.getProperties("aliAction");
String wishAction=Configuration.getProperties("wishAction");
String aliUrl=Configuration.getProperties("aliUrl");
String wishUrl=Configuration.getProperties("wishUrl");

Map<String,Object> authorInfMap=new HashMap<String,Object>();

authorInfMap.put("aliAppKey", aliAppKey);
authorInfMap.put("aliAppSecret", aliAppSecret);
authorInfMap.put("wishAppKey", wishAppKey);
authorInfMap.put("wishAppSecret", wishAppSecret);
authorInfMap.put("aliRedirectUri", aliRedirectUri);
authorInfMap.put("wishRedirectUri", wishRedirectUri);
authorInfMap.put("aliAction", aliAction);
authorInfMap.put("wishAction", wishAction);
authorInfMap.put("aliUrl", aliUrl);
authorInfMap.put("wishUrl", wishUrl);
 
pageContext.setAttribute("aim", authorInfMap);
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<script src="${ctx.path}/resources/platform/js/common_grid.js"></script>
<script src="${ctx.path}/resources/platform/js/common_format.js"></script>
<script src="${ctx.path}/resources/script/shop/shopList.js?v=${ctx.versions}"></script>
<link type="text/javascript"
	href="${ctx.path}/resources/platform/css/new.css" rel="stylesheet">
	<script type="text/javascript">
	var aim = aim || {};
	aim.aliAppKey = '${aim.aliAppKey}';
	aim.aliAppSecret = '${aim.aliAppSecret}';
	aim.wishAppKey = '${aim.wishAppKey}';
	aim.wishAppSecret = '${aim.wishAppSecret}';
	aim.aliRedirectUri = '${aim.aliRedirectUri}';
	aim.wishRedirectUri = '${aim.wishRedirectUri}';
	aim.aliAction = '${aim.aliAction}';
	aim.wishAction = '${aim.wishAction}';
	aim.aliUrl = '${aim.aliUrl}';
	aim.wishUrl = '${aim.wishUrl}';
	</script>
	
</head>
<body>
	<div class="animated fadeInRight">
	<section id="main" role="main">
	    <div class="container-fluid has-toobar has-navbar multichoice">
			<div id="serachDiv" class="row form-group-sm">
				<div class="ibox-content"
					style="padding: 5px 10px;padding-bottom: 0px;">
					<form id="pageForm" method="post">
						<div class="form-inline">
							<div class="form-group">
								<label>店铺名称：</label> <input type="text" name="shopName" class="form-control input-small" maxlength="50" />
							</div>
							<div class="form-group clearfix">
								<button type="button" class="btn btn-primary btn-sm" onclick="common.search();">查询</button>
								<button type="button" class="btn btn-white btn-sm" onclick="common.clear();">重置</button>
							</div>
						</div>
					</form>
				</div>
			</div>
	
			
			<div id="buttonDiv" class="row wrapper ">
				<div class="form-inline operation_con" >
					<div class="large-list-title">
						<button class="btn btn-success btn-sm" type="button"
							onclick="openAddPage();">新增店铺</button>
					</div>
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
	</div>
 
	
	<!-- 新增 -->
	<div id="dataAdd" class="white-bg" style="display:none;">
		<form method="post" onsubmit="return checkAddShop(this)" class="form-horizontal" role="form" id="dataForm" action="${ctx.path}/api/shop/addShop.do">
			<div class="panel panel-default">
				<div class="panel-body pt0 pb0">
					<div class="form-horizontal form-bordered min" id="contentDiv">
						<div class="form-group">
							<label class="col-sm-2 control-label"><span class="text-danger pr5">*</span>平台</label>
							<div class="col-sm-4">
								<!-- <select required data-msg-required="请选择平台！" class="form-control" name="platformType" onchange="accountTypeChange(this)"> -->
								<select required data-msg-required="请选择平台！" class="form-control" name="platformType"> 
										<option value="">-请选择-</option>
										<option value="1"  cla="aliexpress" >Aliexpress</option> 
										<option value="2"  cla="wish" >Wish</option> 
										<option value="0"  >Other</option> 
								</select>
							</div>
							<!-- <div class="col-sm-3" id="helpcenterText" style="display:none;">
							<a href="http://lite.mabangerp.com/index.php?mod=helpcenter.detail&amp;type=1&amp;model=1&amp;id=52" target="_blank" class="alert-warning"><i class="ico-question-sign mr5"></i><span style="text-decoration:underline;">授权指引</span></a>
							</div> -->
						</div>
						<div class="form-group">
							<label class="col-sm-2 control-label"><span class="text-danger pr5">*</span>店铺名称</label>
							<div class="col-sm-4">
								<input name="shopName" required data-msg-required="请输入店铺名称！" type="text" class="form-control" name="city"
									placeholder="请输入店铺名称" maxlength="50">
							</div>
						</div>
						<div class="form-group" >
							<label class="col-sm-2 control-label"><span class="text-danger pr5">*</span>平台账号</label>
							<div class="col-sm-4">
								<input  required data-msg-required="请输入平台账号！"  type="text" class="form-control" name="platformAccount"
									placeholder="请输入账号" maxlength="50">
							</div>
						</div>
						<div class="form-group aliexpress" style="display:none;">
							<label class="col-sm-2 control-label">账号类型</label>
							<div class="col-sm-4">
								<label class="radio-inline"><input type="radio" name="accountType" value="1" checked  onclick="$('.accountinfo').hide()">主帐号</label>
								<label class="radio-inline"><input type="radio" name="accountType" value="2" onclick="$('.accountinfo').show()">子帐号</label>
							</div>
						</div>
						<div class="form-group accountinfo" style="display:none;">
							<label class="col-sm-2 control-label">它的主帐号是</label>
							<div class="col-sm-4">
								<input type="text" name="mainAccount" class="form-control" >
							</div>
						</div>
						<div class="form-group aliexpress " style="display:none;">
							<label class="col-sm-2 control-label">下载风控订单</label>
							<div class="col-sm-4">
								<label class="radio-inline"><input type="radio" name="riskFlag" value="1" checked="">下载</label>
								<label class="radio-inline"><input type="radio" name="riskFlag" value="0">不下载</label>
							</div>
						</div>
						<div class="form-group">
							<label class="col-sm-2 control-label"><span class="text-danger pr5">*</span>店长</label>
							<div class="col-sm-4">
								<select name="shopManagerUserId"  required data-msg-required="请选择店铺负责人！" id="personInCharge"  class="form-control" id="catalogiItems">
									<option value="">-请选择-</option>
								</select>
							</div>
						</div>
						<div class="form-group">
							<label class="col-sm-2 control-label">店员</label>
							<div class="col-sm-4">           		                         		 
								<div class="tab-content choicestaff mt5">
									<div id="clerk"  class="tab-pane active" id="staff-0">
										<div class="clear"></div><label class="checkbox-inline">
									</div>
									<p class="text-default nm alert-warning ">温馨提示:请设置好店长和店员，如果设置了店员，则该店铺订单只有店长和店员可以查看，否则所有员工都能查看该店铺订单；</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</form>
	</div>
	<!-- 编辑 -->
	<div id="dataEdit" class="white-bg" style="display:none;">
		<form method="post" onsubmit="checkAddShop(this)" class="form-horizontal" role="form" id="dataFormEdit" action="${ctx.path}/api/shop/updateShop.do">
			<div class="panel panel-default">
				<div class="panel-body pt0 pb0">
					<div class="form-horizontal form-bordered min" id="contentDiv">
						<div class="form-group">
							<label class="col-sm-2 control-label"><span class="text-danger pr5">*</span>平台</label>
							<div class="col-sm-4">
								<!-- <select  disabled type="select" required data-msg-required="请选择平台！" class="form-control" name="platformType" onchange="accountTypeChange(this)"> -->
								<select  disabled type="select" required data-msg-required="请选择平台！" class="form-control" name="platformType">
										<option value="">-请选择-</option>
										<option value="1"  cla="aliexpress" >Aliexpress</option> 
										<option value="2"  cla="wish" >Wish</option> 
										<option value="0"  >Other</option> 
								</select>
							</div>
							<!-- <div class="col-sm-3" id="helpcenterText" style="display:none;">
							<a href="http://lite.mabangerp.com/index.php?mod=helpcenter.detail&amp;type=1&amp;model=1&amp;id=52" target="_blank" class="alert-warning"><i class="ico-question-sign mr5"></i><span style="text-decoration:underline;">授权指引</span></a>
							</div> -->
						</div>
						<div class="form-group">
							<label class="col-sm-2 control-label"><span class="text-danger pr5">*</span>店铺名称</label>
							<div class="col-sm-4">
								<input name="shopName" disabled required data-msg-required="请输入店铺名称！" type="text" class="form-control" maxlength="20">
							</div>
						</div>
						<div class="form-group" >
							<label class="col-sm-2 control-label"><span class="text-danger pr5">*</span>平台账号</label>
							<div class="col-sm-4">
								<input  required data-msg-required="请输入平台账号！"  type="text" class="form-control" name="platformAccount"
									placeholder="请输入账号" maxlength="50">
							</div>
						</div>
						<div class="form-group aliexpress" style="display:none;">
							<label class="col-sm-2 control-label">账号类型</label>
							<div class="col-sm-4">
								<label class="radio-inline"><input type="radio" name="accountType" value="1"  onclick="$('.accountinfo').hide()">主帐号</label>
								<label class="radio-inline"><input type="radio" name="accountType" value="2"  onclick="$('.accountinfo').show()">子帐号</label>
							</div>
						</div>
						<div class="form-group accountinfo" style="display:none;">
							<label class="col-sm-2 control-label">它的主帐号是</label>
							<div class="col-sm-4">
								<input type="text" name="mainAccount" class="form-control" >
							</div>
						</div>
						<div class="form-group aliexpress "  style="display:none;">
							<label class="col-sm-2 control-label">下载风控订单</label>
							<div class="col-sm-4">
								<label class="radio-inline"><input type="radio" name="riskFlag" value="1" checked="">下载</label>
								<label class="radio-inline"><input type="radio" name="riskFlag" value="0">不下载</label>
							</div>
						</div>
						<div class="form-group">
							<label class="col-sm-2 control-label"><span class="text-danger pr5">*</span>店长</label>
							<div class="col-sm-4">
								<select type="select" name="shopManagerUserId"  required data-msg-required="请选择店铺负责人！" id="personInCharge"  class="form-control" id="catalogiItems">
									<option value="">-请选择-</option>
								</select>
							</div>
						</div>
						<div class="form-group">
							<label class="col-sm-2 control-label">店员</label>
							<div class="col-sm-4">           		                         		 
								<div class="tab-content choicestaff mt5">
									<div id="clerk"  class="tab-pane active" id="staff-0">
									</div>
									<p class="text-default nm alert-warning ">温馨提示:请设置好店长和店员，如果设置了店员，则该店铺订单只有店长和店员可以查看，否则所有员工都能查看该店铺订单；</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>					   
			<input type="hidden" name="updateStore" value="1" class="form-control" ><!-- 更新标志位 -->
			<input type="hidden" name="shopId" class="form-control" >
		</form>
	</div>
	
	
	 <!-- 更名 -->
	<div id="dataChangeName" class="white-bg" style="display:none;">
		<form method="post"  onsubmit="return checkChangeName(this)" class="form-horizontal" role="form" id="dataFormChangeName" action="${ctx.path}/api/shop/reNameShop.do">
			<div class="modal-header text-center">
                 <p class="text-danger">*注意:修改店铺名涉及要修改多处相关表，相当于一次外科大手术！！<br>
                 *更名操作最好放在非高峰使用时间,并将所有应用程序先关闭<br>
                 *后台执行更名系列操作需要花费一定时间，点击[确定]按钮后，耐心等待10秒~3分钟<br>
                 *切记！切记！</p>
             </div>
			<div class="panel panel-default">
				<div class="panel-body pt0 pb0">
					<div class="form-horizontal form-bordered min" id="contentDiv">
						<div class="form-group">
							<label class="col-sm-2 control-label"><span class="text-danger pr5"></span>店铺编号</label>
							<div class="col-sm-4">
								 <p name="pshopId" class="loadtext"></p>
							</div>
						</div>
						<div class="form-group">
							<label class="col-sm-2 control-label"><span class="text-danger pr5"></span>旧店铺名称</label>
							<div class="col-sm-4">
								 <p name="oldShopName" class="loadtext"></p>
							</div>
						</div>
						<div class="form-group">
							<label class="col-sm-2 control-label"><span class="text-danger pr5">*</span>新店铺名称</label>
							<div class="col-sm-4">
								<input name="newShopName" required data-msg-required="请输入新店铺名称！" type="text" class="form-control" maxlength="20">
							</div>
						</div>
					</div>
				</div>
			</div>
			<input type="hidden" name="shopId" required data-msg-required="请输入店铺id！"> 
			<input type="hidden" name="shopName" required data-msg-required="请输入店铺名称！"> 
		</form>
	</div>
	
	 <!-- 授权 -->
	<div id="authorization" class="white-bg" style="display:none;">
		<div class="panel panel-default tab-pane active" id="authorize-Aliexpress">
              <form method="post" class="form-horizontal form-bordered form-wizard clearfix" id="submitAuthorization" role="application"><div class="steps clearfix"><ul role="tablist"><li role="tab" class="first current" aria-disabled="false" aria-selected="true"><a id="wizard-2-t-0"  aria-controls="wizard-2-p-0"><span class="current-info audible">current step: </span><span class="number">1.</span><span class="title">第一步：开始授权</span></a></li><li role="tab" class="disabled last" aria-disabled="true"><a id="wizard-2-t-1"   aria-controls="wizard-2-p-1"><span class="number">2.</span><span class="title">第二步：获取授权</span></a></li></ul></div><div class="content clearfix">
              	<input id="stepnum" type="hidden" value="">
                  <!-- Wizard Container 1 -->
                  <div class="wizard-title title current" id="wizard-2-h-0" tabindex="-1">第一步：开始授权</div>
                  <div class="wizard-container body current" id="wizard-2-p-0" role="tabpanel" aria-labelledby="wizard-2-h-0" aria-hidden="false" style="display: block;">
                      <div class="form-group">
                          <div class="col-md-12">
							<div class="alert alert-info fade in mb0">
								<h5 class="semibold text-primary mb10 mt0">第一步：开始授权</h5>
								<p class="mb0">提醒：点击申请后，用账号获取验证码，进入第二步。</p>
							</div>
                          </div>
                      </div>
                      <div class="form-group">
                          <div class="loginform">
                              <button name="authorUrl" onclick="openAuthPage()" class="btn btn-large btn-block btn-primary" type="button" >点击申请</button>
                          </div>
                      </div>
                  </div>
                  <!--/ Wizard Container 1 -->
                  <!-- Wizard Container 2 -->
                  <div class="wizard-title title" id="wizard-2-h-1" tabindex="-1">第二步：获取授权</div>
                  <div class="wizard-container body" id="wizard-2-p-1" role="tabpanel" aria-labelledby="wizard-2-h-1" aria-hidden="true" style="display: none;">
                      <div class="form-group">
                          <div class="col-md-12">
							<div class="alert alert-info fade in mb0">
								<h5 class="semibold text-primary mb10 mt0">第二步：获取授权</h5>
								<p class="mb0">提醒：将验证码复制进去，点击获取授权。</p>
							</div>
                          </div>
                      </div>
                      <div class="form-group">
                      	<label class="col-sm-3 control-label">验证码</label>
                          <div class="col-sm-6">
                              <input type="text" class="form-control" name="code" id="code"  placeholder="请输入验证码"  required data-msg-required="请输入验证码!"  >
                          </div>
                          <div class="col-sm-3">
                              <button class="btn btn-large btn-primary" type="submit" id="smtSubmit"  >获取授权</button>
                          </div>
                      </div>
                  </div>
                  <!--/ Wizard Container 2 -->
              </div>
              <div class="actions clearfix">
              <ul role="menu" aria-label="Pagination">
              	<li class="disabled" aria-disabled="true"><a href="#previous" role="menuitem" class="btn btn-default">上一步</a></li><li aria-hidden="false" aria-disabled="false"><a href="#next" role="menuitem" class="btn btn-default">下一步</a></li><li aria-hidden="true" style="display: none;"><a href="#finish" role="menuitem" class="btn btn-primary">完成</a></li>
              </ul>
              </div>
              <input type="hidden" readonly name="grant_type" value="authorization_code" />
              <input type="hidden" readonly name="need_refresh_token" value="true" /> 
              <input type="hidden" readonly name="client_id" value="24785268" />
              <input type="hidden" readonly name="client_secret" value="xCvsYrnVm4w" />
              <input type="hidden" readonly name="redirect_uri" value="https://authhz.alibaba.com/auth/authCode.htm" />
              <input type="hidden" readonly name="shopId" />
              <input type="hidden" readonly name="platformType" /> 
              </form>
          </div>
	</div>
</body>
</html>
