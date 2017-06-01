<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/resources/platform/inc.jsp"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <title>新增物流匹配规则</title>
    <script src="${ctx.path}/resources/script/logistics/ruleAdd.js"></script>
  </head>
  
  <body class="white-bg">
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
					<label class="col-sm-2 control-label">规则名称</label>
				    <div class="col-sm-4 ">${ruleVo.ruleName}</div>
				
				    <label class="col-sm-2 control-label">订单类型</label>
				    <div class="col-sm-3">
				    	<c:if test="${ruleVo.orderType == 1}">自营订单</c:if>
				    	<c:if test="${ruleVo.orderType != 1}">其他订单</c:if>	
				    </div>
			</div>
				<div class="form-group">
				    <label class="col-sm-2 control-label">匹配物流渠道</label>
				    <div class="col-sm-4">
				    	${ruleVo.logisticsName}
				    	<c:if test="${ruleVo.autoTransport == 1}">(自动交运)</c:if>
				    </div>
				</div>
				<div class="form-group">
					<label class="col-sm-2 control-label">描述</label>
				    <div class="col-sm-9">
				        ${ruleVo.describe}
				    </div>
			</div>
				<div class="form-group">
					<label class="col-sm-2 control-label">优先级</label>
				    <div class="col-sm-4">
				        ${ruleVo.priorityLevel}
				    </div>
					<label class="col-sm-2 control-label">状态</label>
				    <div class="col-sm-4">
				        ${ruleVo.statusTxt}
				    </div>
			</div>
		</div>
  	</div>
  	</div>
  	<div class="ibox" style="padding-top:5px;height:calc(100% - 50px);" id="main">
  		<div class="ibox-title">
		  <h5>条件设置</h5>
		  <div class="ibox-tools">
		    <a class="collapse-link"> <i class="fa fa-chevron-up"></i>
		    </a>
		  </div>
		</div>
		<div class="ibox-content">
			<div class="form-horizontal form-bordered min">
		  		<div class="form-group" >
				    <div class="col-sm-5">
							<h4 class="mt0">已选择的条件</h4>
							<hr class="mt10 mb10">
							<c:if test="${ empty ruleVo.ruleDetailVos}">
								<div class="alert alert-nodata group-nodata nm" style="display: block;" id="nodataShow"><h4>暂无条件！</h4><p>请在左侧勾选需要设置的条件并配置相应的参数</p></div>
							</c:if>
							
							<c:if test="${not empty ruleVo.ruleDetailVos}">
								<ul class="condition-list">
									<c:forEach items="${ruleVo.ruleDetailVos}"  var="ruleDetailVo" >
										<c:if test="${ruleDetailVo.detailType == 1}">
								    		<li style="display: block;">订单商品包含以下仓库:
								    			<span class="selectitem">
								    				<c:forEach items="${ruleDetailVo.detailInfoNames}" var="detailInfoName" >
								    					<span class="item">${detailInfoName},</span>
								    				</c:forEach>
								    			</span>
								    		</li>
										</c:if>
										<c:if test="${ruleDetailVo.detailType == 3}">
											<li style="display: block;">订单包含指定邮政编码:
												<span class="selectitem">
													<span class="item">
													${ruleDetailVo.detailInfo}
													</span>
												</span>
											</li>
										</c:if>
										<c:if test="${ruleDetailVo.detailType == 6}">
											<li style="display: block;">订单运费收入范围:
												<span class="selectitem">
													<span class="item" id="min-price-freight">${ruleDetailVo.moneyMin}</span> 
													≤ 订单运费收入 ≤ 
													<span class="item" id="max-price-freight">${ruleDetailVo.moneyMax}</span> 
													(单位:<span class="unit">
														<c:if test="${ruleDetailVo.moneyUnit == 1}">RMB</c:if>
														<c:if test="${ruleDetailVo.moneyUnit == 2}">USD</c:if>
													</span>)
												</span>
											</li>
										</c:if>
										<c:if test="${ruleDetailVo.detailType == 7}">
											<li style="display: block;">订单商品包含指定自定义分类商品:
												<span class="selectitem">
													<c:forEach items="${ruleDetailVo.detailInfoNames}" var="detailInfoName" >
									    					<span class="item">${detailInfoName},</span>
									    				</c:forEach>
												</span>
											</li>
										</c:if>
										<c:if test="${ruleDetailVo.detailType == 8}">
											<li style="display: block;">订单商品包含以下商品:
												<span class="selectitem">
													<span class="item">
														${ruleDetailVo.detailInfo}
													</span>
												</span>
											</li>
										</c:if>
										<c:if test="${ruleDetailVo.detailType == 10}">
											<li style="display: block;">订单目的地为以下国家:
												<span class="selectitem">
													<c:forEach items="${ruleDetailVo.detailInfoNames}" var="detailInfoName" >
								    					<span class="item">${detailInfoName},</span>
								    				</c:forEach>
												</span>
												(<span id="range-country">
													<c:if test="${ruleDetailVo.countryRange == 1}">之内</c:if>
													<c:if test="${ruleDetailVo.countryRange == 2}">之外</c:if>
												</span>)
											</li>
										</c:if>
										<c:if test="${ruleDetailVo.detailType == 11}">
											<li style="display: block;">订单来源为以下店铺:
												<span class="selectitem">
													<c:forEach items="${ruleDetailVo.detailInfoNames}" var="detailInfoName" >
								    					<span class="item">${detailInfoName},</span>
								    				</c:forEach>
												</span>
											</li>
										</c:if>
										<c:if test="${ruleDetailVo.detailType == 14}">
											<li  style="display: block;">预估重量范围:
												<span class="selectitem">
													<span class="item" id="min-weight">${ruleDetailVo.weightMin }</span>
													 ≤ 预估重量 ≤ 
													 <span class="item" id="max-weight">${ruleDetailVo.weightMax }</span> (单位:g)
												 </span>
											 </li>
										</c:if>
									</c:forEach>
								</ul>
							</c:if>
							
				    </div>
		  		</div>
		  	
				<div class="form-group"  style="height:30px;">
				</div>	
	  		</div>
  		</div>
  	</div>
  </body>
</html>
