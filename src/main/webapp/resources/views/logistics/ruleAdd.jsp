<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/resources/platform/inc.jsp"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <title>新增物流匹配规则</title>
    <script src="${ctx.path}/resources/script/logistics/ruleAdd.js"></script>
  </head>
  
  <body class="white-bg">
  	<form class="form-horizontal" method="post" role="form" id="addRuleForm" action="${ctx.path}/api/logisticsRule/addRule.do">
  	<div class="ibox" >
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
					<label class="col-sm-2 control-label"><span class="text-danger pr5">*</span>规则名称</label>
				    <div class="col-sm-4">
				        <input class="form-control" name="ruleName" placeholder="请输入规则名称" maxlength="50" type="text" required data-msg-required="请输入规则名称！" >
				    </div>
				
				    <label class="col-sm-2 control-label"><span class="text-danger pr5">*</span>订单类型</label>
				    <div class="col-sm-3">	
				    	<select class="form-control"   id="orderType" name="orderType">
				    		<option value="1">自营订单</option>
				    	</select>
				    </div>
			</div>
				<div class="form-group">
				    <label class="col-sm-2 control-label"><span class="text-danger pr5">*</span>匹配物流渠道</label>
				    <div class="col-sm-4">
				    	<select class="form-control"  id="myLogisticsChannelOption"  name="logisticsId"  required data-msg-required="请选择物流渠道！" >
				    		<option value="">-请选择-</option>
				    		<c:forEach items="${lcList}" var="lc">
				    			<option value="${lc.logisticsId}">${lc.name}</option>
				    		</c:forEach>
				    	</select>
				    </div>
				    <!--  
				    <div class="col-sm-2">
						<label class="checkbox-inline semibold"><input type="checkbox" value="1" name="autoTransport"  id="autoApi" disabled="disabled">自动交运</label>
				    </div>
				    -->
				</div>
				<div class="form-group">
					<label class="col-sm-2 control-label">描述</label>
				    <div class="col-sm-9">
				        <input class="form-control" name="describe" placeholder="请输入描述信息" maxlength="100" type="text"  >
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
				    <div class="col-sm-7">
				    				<div id="divCtrlPanel-stockWarehouse" class="panel panel-default form-horizontal form-bordered min condition" style="display: block;">
										<div class="panel-heading">
											<div class="panel-toolbar">
												<label class="checkbox-inline semibold">
												<input type="checkbox" value="1"  name="detailType" />订单商品包含指定仓库</label>
											</div>
										</div>
										<div id="divCtrlPanelValues" class="panel-body dis-none" style="display: none;">
											<div class="form-group choicestaff nm">
												<c:forEach items="${whouseList }"  var="whouse" >
    													<label class="checkbox-inline"><input type="checkbox" name="warehouseId"  value="${whouse.whouse_id }"  cid="detailInfo1"/>${whouse.whouse_name }</label>
												</c:forEach>
                                                        <input type="hidden"  id="detailInfo1" name="detailInfo1"  >
											</div>
										</div>
									</div>
									
									
									<div id="divCtrlPanel-postCode" class="panel panel-default form-horizontal form-bordered min condition">
										<div class="panel-heading">
											<div class="panel-toolbar">
												<label class="checkbox-inline semibold"><input type="checkbox" value="3" name="detailType">订单包含指定邮政编码</label>
											</div>
										</div>
										<div id="divCtrlPanelValues" class="panel-body dis-none" style="display: none;">
											<div class="form-group nm">
												请输入邮政编码<span class="text-muted thin pl10">(多个邮政编码区间用","分隔，区间用"-"分隔，例如：44012-44029,44199-44299)</span>
												<textarea name="detailInfo3"  id="detailInfo3" class="form-control mt5" rows="3"></textarea>
											</div>
										</div>
									</div>
									
									
									<div id="divCtrlPanel-country" class="panel panel-default form-horizontal form-bordered min condition">
										<div class="panel-heading">
											<div class="panel-toolbar">
												<label class="checkbox-inline semibold"><input type="checkbox" value="10" name="detailType">订单目的地为指定国家</label>
												<select name="countryRange10" class="form-control" onclick="event.stopPropagation();" onchange="if(this.value == 1){$('#range-country').text('之内')}else{$('#range-country').text('之外')}">
													<option value="1">之内</option>
													<option value="2">之外</option>
												</select>
                                                <input type="hidden" name="detailInfo10" value="" id="detailInfo10" >
											</div>
										</div>
										<div id="divCtrlPanelValues" class="panel-body tab-content dis-none" style="display: none;">
											<div class="form-group">
									                <p class="alert-warning text-center">温馨提示：由于某些国家存在两个国家二字码，所以这些国家名称会重复出现 ，如需选择请全部勾选。
									                </p>
											</div>
											<div class="form-group">
												<div class="col-sm-12">
													<ul class="nav nav-pills">
														<li class="dropdown active">
															<a href="javascript:void(0);" data-toggle="dropdown" class="dropdown-toggle">请选择大洲<span id="dictText" class="text pr5 pl5">
																<c:forEach items="${dicts}"  var="dict"  varStatus="status" >
																	<c:if test="${ status.index == 0}" >${dict.dict_name}</c:if>
																</c:forEach>
																</span><span class="caret"></span></a>
															<ul role="menu" class="dropdown-menu copytext">
																<c:forEach items="${dicts}"  var="dict"  varStatus="status" >
																	<li class="<c:if test="${ status.index == 0}" >active</c:if>" onclick="$('#dictText').text('${dict.dict_name}')"><a data-toggle="tab" href="#continent-${dict.dict_value_id}">${dict.dict_name}</a></li>
																</c:forEach>
                                                 			</ul>
														</li>
													</ul>
												</div>
											</div>
											
											<c:forEach items="${dicts}"  var="dict"  varStatus="status" >
												<div class="form-group choicestaff tab-pane <c:if test="${ status.index == 0}" >active</c:if>"" id="continent-${dict.dict_value_id}">
													<div class="col-sm-12 " >
														<c:forEach items="${dictCuntrys}"  var="dc" >
															<c:if test="${dict.dict_value_id == dc.dictTypeId}">
                                                				<label class="checkbox-inline"><input type="checkbox" value="${dc.dictValue }" name="country[]" cid="detailInfo10">${dc.dictName}</label>
															</c:if>
														</c:forEach>
													</div>
												</div>
											</c:forEach>
											
                                        </div>
									</div>
									
									
									<div id="divCtrlPanel-shop" class="panel panel-default form-horizontal form-bordered min condition">
										<div class="panel-heading">
											<div class="panel-toolbar">
												<label class="checkbox-inline semibold"><input type="checkbox" value="11" name="detailType">订单来源为指定店铺</label>
                                                <input type="hidden" name="detailInfo11" id="detailInfo11"  value="">
											</div>
										</div>
										<div id="divCtrlPanelValues" class="panel-body tab-content dis-none" style="display: none;">
											<div class="form-group">
												<div class="col-sm-12">
													<ul class="nav nav-pills">
														<li class="dropdown active">
															<a href="javascript:void(0);" data-toggle="dropdown" class="dropdown-toggle">请选择平台<span id="shopDictTest" class="text pr5 pl5">Aliexpress</span><span class="caret"></span></a>
 															<ul role="menu" class="dropdown-menu copytext">
																<li onclick="$('#shopDictTest').text('Aliexpress')"  class="active"><a data-toggle="tab" href="#platform-1">Aliexpress</a></li>
																<li onclick="$('#shopDictTest').text('Wish')"><a data-toggle="tab" href="#platform-2">Wish</a></li>
																<li onclick="$('#shopDictTest').text('Other')"><a data-toggle="tab" href="#platform-0">Other</a></li>
                   											</ul>				
														</li>
														
													</ul>
												</div>
											</div>
											
                                            <div class="form-group choicestaff tab-pane active" id="platform-1">
												<div class="col-sm-12" >
													<c:forEach items="${shopList }"  var="shop">
														<c:if test="${shop.platformType ==1 }">
															<label class="checkbox-inline"><input type="checkbox" name="shopId" value="${shop.shopId }" cid="detailInfo11">${shop.shopName}</label>
														</c:if>
													</c:forEach>
             									</div>
											</div>
											
                                            <div class="form-group choicestaff tab-pane" id="platform-2">
												<div class="col-sm-12"  >
													<c:forEach items="${shopList }"  var="shop">
														<c:if test="${shop.platformType ==2 }">
															<label class="checkbox-inline"><input type="checkbox" name="shopId" value="${shop.shopId }" cid="detailInfo11">${shop.shopName}</label>
														</c:if>
													</c:forEach>
             									</div>
											</div>
											
                                            <div class="form-group choicestaff tab-pane" id="platform-0">
												<div class="col-sm-12" >
													<c:forEach items="${shopList }"  var="shop">
														<c:if test="${shop.platformType ==0 }">
															<label class="checkbox-inline"><input type="checkbox" name="shopId" value="${shop.shopId }" cid="detailInfo11">${shop.shopName}</label>
														</c:if>
													</c:forEach>
             									</div>
											</div>
                                        </div>
									</div>
									
									<div id="divCtrlPanel-shippingFee" class="panel panel-default form-horizontal form-bordered min condition">
										<div id="divCtrlPanelValues" class="panel-heading">
											<div class="panel-toolbar">
												<label class="checkbox-inline semibold"><input type="checkbox" value="6" name="detailType">订单运费收入在指定范围内</label>
												<input type="text"  id="moneyMin6" name="moneyMin6" class="form-control" value="" placeholder="最小金额" onkeypress="if(!this.value.match(/^[\+\-]?\d*?\.?\d*?$/))this.value=this.t_value;else this.t_value=this.value;if(this.value.match(/^(?:[\+\-]?\d+(?:\.\d+)?)?$/))this.o_value=this.value" onkeyup="if(!this.value.match(/^[\+\-]?\d*?\.?\d*?$/))this.value=this.t_value;else this.t_value=this.value;if(this.value.match(/^(?:[\+\-]?\d+(?:\.\d+)?)?$/))this.o_value=this.value;$('#min-price-freight').text($(this).val())" onblur="if(!this.value.match(/^(?:[\+\-]?\d+(?:\.\d+)?|\.\d*?)?$/))this.value=this.o_value;else{if(this.value.match(/^\.\d+$/))this.value=0+this.value;if(this.value.match(/^\.$/))this.value=0;this.o_value=this.value}">
												<input type="text" id="moneyMax6"  name="moneyMax6" class="form-control" value="" placeholder="最大金额" onkeypress="if(!this.value.match(/^[\+\-]?\d*?\.?\d*?$/))this.value=this.t_value;else this.t_value=this.value;if(this.value.match(/^(?:[\+\-]?\d+(?:\.\d+)?)?$/))this.o_value=this.value" onkeyup="if(!this.value.match(/^[\+\-]?\d*?\.?\d*?$/))this.value=this.t_value;else this.t_value=this.value;if(this.value.match(/^(?:[\+\-]?\d+(?:\.\d+)?)?$/))this.o_value=this.value;$('#max-price-freight').text($(this).val())" onblur="if(!this.value.match(/^(?:[\+\-]?\d+(?:\.\d+)?|\.\d*?)?$/))this.value=this.o_value;else{if(this.value.match(/^\.\d+$/))this.value=0+this.value;if(this.value.match(/^\.$/))this.value=0;this.o_value=this.value}">
												<label class="options-item radio-inline ml15"><input type="radio" value="1" name="moneyUnit6" checked="">RMB</label>
												<label class="options-item radio-inline "><input type="radio" value="2" name="moneyUnit6">USD</label>								    
											</div>
										</div>
									</div>
                                    <div id="divCtrlPanel-stockLabel" class="panel panel-default form-horizontal form-bordered min condition">
                                        <div class="panel-heading">
                                            <div class="panel-toolbar">
                                                <label class="checkbox-inline semibold"><input type="checkbox" value="7" name="detailType">订单商品包含指定自定义分类商品</label>
                                            </div>
                                        </div>
                                        <div id="divCtrlPanelValues" class="panel-body dis-none" style="display: none;">
                                            <div class="form-group  nm">
                                            	 <input type="hidden" id="detailInfo7" name="detailInfo7" value="">
                                            	 <div class="tree ">
	                                            	 <ul   style="list-style-type:none;padding:0;margin:0;">
													      <li>
													        <span class="checkbox-inline  semibold"><i class=" fa fa-caret-down"></i></span> 
															<label class="checkbox-inline ">
																<input type="checkbox"   onclick="treeCheckbox(this)" id="allCatalog">
																       全部商品分类
															</label>
			                                            	 <ul   style="list-style-type:none">
																<c:forEach items="${catalogList }"  var="catalog">
																	<c:if test="${catalog.level == 1}">
																		<li>
													        					<span class="checkbox-inline  semibold"><i class=" fa fa-caret-down"></i></span> 
																				<label class="checkbox-inline ">
																					<input type="checkbox"  value="${catalog.catalogiId }"   onclick="treeCheckbox(this,'allCatalog')"  id="cgId${catalog.catalogiId }">
																					</i> ${catalog.name}
																				</label>
																				<ul   style="list-style-type:none">
																				<c:forEach items="${catalogList }"  var="cg">
																					<c:if test="${cg.level == 2 && cg.pCatalogiId ==catalog.catalogiId }">
																						<li>
													        								<span class="checkbox-inline  semibold"></span> 
																							<label class="checkbox-inline ">
																								<input type="checkbox" name="shopId" value="${cg.catalogiId }"   onclick="treeCheckbox(this,'cgId' + ${cg.pCatalogiId})"   cid="cid1" />
																								${cg.name}
																							</label>	
																						</li>
																					</c:if>
																				</c:forEach>
																				</ul>
																		</li>
																	</c:if>
																</c:forEach>
			                                            	 </ul>
		                                            	 </li>
		                                            </ul>	 
                                            	 </div>
                                            </div>
                                        </div>
 
                                    </div>
									<div id="divCtrlPanel-stockSku" class="panel panel-default form-horizontal form-bordered min condition">
										<div class="panel-heading">
											<div class="panel-toolbar">
												<label class="checkbox-inline semibold"><input type="checkbox" value="8" name="detailType">订单商品包含指定商品</label>
											</div>
										</div>
										<div id="divCtrlPanelValues" class="panel-body dis-none" style="display: none;">
											<div class="form-group nm">
												请输入商品编号<span class="text-muted thin pl10">(多个商品编号之间请用","分隔)</span>
												<textarea name="detailInfo8" id="detailInfo8" class="form-control mt5" rows="3"></textarea>
											</div>
										</div>
									</div>
									
									
									
									
									<div id="divCtrlPanel-orderWeight" class="panel panel-default form-horizontal form-bordered min condition">
										<div id="divCtrlPanelValues" class="panel-heading">
											<div class="panel-toolbar">
												<label class="checkbox-inline semibold"><input type="checkbox" value="14" name="detailType">预估重量在指定范围内</label>
												<input type="text" id="weightMin14" name="weightMin14" class="form-control" value="" placeholder="最小重量" onkeypress="if(!this.value.match(/^[\+\-]?\d*?\.?\d*?$/))this.value=this.t_value;else this.t_value=this.value;if(this.value.match(/^(?:[\+\-]?\d+(?:\.\d+)?)?$/))this.o_value=this.value" onkeyup="if(!this.value.match(/^[\+\-]?\d*?\.?\d*?$/))this.value=this.t_value;else this.t_value=this.value;if(this.value.match(/^(?:[\+\-]?\d+(?:\.\d+)?)?$/))this.o_value=this.value;$('#min-weight').text($(this).val())" onblur="if(!this.value.match(/^(?:[\+\-]?\d+(?:\.\d+)?|\.\d*?)?$/))this.value=this.o_value;else{if(this.value.match(/^\.\d+$/))this.value=0+this.value;if(this.value.match(/^\.$/))this.value=0;this.o_value=this.value}">
												<input type="text"  id="weightMax14" name="weightMax14" class="form-control" value="" placeholder="最大重量" onkeypress="if(!this.value.match(/^[\+\-]?\d*?\.?\d*?$/))this.value=this.t_value;else this.t_value=this.value;if(this.value.match(/^(?:[\+\-]?\d+(?:\.\d+)?)?$/))this.o_value=this.value" onkeyup="if(!this.value.match(/^[\+\-]?\d*?\.?\d*?$/))this.value=this.t_value;else this.t_value=this.value;if(this.value.match(/^(?:[\+\-]?\d+(?:\.\d+)?)?$/))this.o_value=this.value;$('#max-weight').text($(this).val())" onblur="if(!this.value.match(/^(?:[\+\-]?\d+(?:\.\d+)?|\.\d*?)?$/))this.value=this.o_value;else{if(this.value.match(/^\.\d+$/))this.value=0+this.value;if(this.value.match(/^\.$/))this.value=0;this.o_value=this.value}">
											</div>
										</div>
									</div>
									
				    </div>
				    
				    <div class="col-sm-5">
							<h4 class="mt0">已选择的条件</h4>
							<hr class="mt10 mb10">
							<div class="alert alert-nodata group-nodata nm" style="display: block;" id="nodataShow"><h4>暂无条件！</h4><p>请在左侧勾选需要设置的条件并配置相应的参数</p></div>
							<ul class="condition-list">
							    <li style="display: none;">订单商品包含以下仓库:<span class="selectitem"></span></li>
								<li style="display: none;">订单包含指定邮政编码:<span class="selectitem"><span class="item"></span></span></li>
								<li style="display: none;">订单目的地为以下国家:<span class="selectitem"></span>(<span id="range-country">之内</span>)</li>
								<li style="display: none;">订单来源为以下店铺:<span class="selectitem"></span></li>
								<li style="display: none;">订单运费收入范围:<span class="selectitem"><span class="item" id="min-price-freight">--</span> ≤ 订单运费收入 ≤ <span class="item" id="max-price-freight">--</span> (单位:<span class="unit">RMB</span>)</span></li>
                                <li style="display: none;">订单商品包含指定自定义分类商品:<span class="selectitem"></span></li>
								<li style="display: none;">订单商品包含以下商品:<span class="selectitem"><span class="item"></span></span></li>
								<li>预估重量范围:<span class="selectitem"><span class="item" id="min-weight">--</span> ≤ 预估重量 ≤ <span class="item" id="max-weight">--</span> (单位:g)</span></li>
							</ul>
				    </div>
		  		</div>
		  	
				<div class="form-group"  style="height:30px;">
				</div>	
	  		</div>
  		</div>
  	</div>
  	<div class="form-group navbar-fixed-bottom" style="background: #f0f4f7;">
		<div class="col-sm-offset-9 col-sm-4" style="text-align: center;vertical-align: middle;">
			<button type="button" class="btn btn-md btn-primary" id="btnAdd">保存</button>
			<button type="button" class="btn btn-md btn-default" id="btnCancel">取消</button>
		</div>
	</div>
  	</form>
  	<script type="text/javascript">
  	 $(function(){
  		 $('.tree li:has(ul)').addClass('parent_li').find(' > span').attr('title', '点击收起');
  		$('.tree li.parent_li > span').on('click', function (e) {
  			 var children = $(this).parent('li.parent_li').find(' > ul > li');
  		    if (children.is(":visible")) {
  		      children.hide('fast');
  		      $(this).attr('title', '点击展开').find(' > i').addClass('fa-caret-right').removeClass('fa-caret-down');
  		    } else {
  		      children.show('fast');
  		      $(this).attr('title', '点击收起').find(' > i').addClass('fa-caret-down').removeClass('fa-caret-right');
  		   }
  	e.stopPropagation();
  		});
  		
  	 });
	
	//启用条件
	$("#main").on("click",".panel-heading input[type='checkbox']",function(event){
		var index=$(this).parents(".condition").index();
		if($(this).prop("checked")){
			$(this).parents(".condition").addClass("active").find(".panel-body").slideToggle();
			$(this).parents(".condition").siblings(".condition").find(".panel-body").hide();
			$(".condition-list li").eq(index).show();
			$("#nodataShow").hide();
		}else{
			$(this).parents(".condition").removeClass("active").find(".panel-body").hide();
			$(".condition-list li").eq(index).hide();
			if($(".condition-list li:visible").length==0){
				$("#nodataShow").show();
			}
		}
		event.stopPropagation();
	});
	

	//计算选中数量
	$(".panel.condition .choicestaff input[type='checkbox']").on("click",function(){
		var index=$(this).parents(".condition").index(),
		text=$(this).parent(".checkbox-inline").text();
		var cid = $(this).attr("cid");
		if($(this).prop("checked")){
			$("#"+cid).val($("#"+cid).val() + $(this).val() + ",");
			$(".condition-list li").eq(index).find(".selectitem").append('<span class="item">'+text+',</span>')
		}else{
			var str = $("#"+cid).val().replace($(this).val()+",", '');
			$("#"+cid).val(str);
			var repeat =$(".condition-list li").eq(index).find(".selectitem .item:contains('"+text+",')").map(function(){ 
				if ($(this).text() == text+",") {return this;}
			});
			repeat.remove();
		}
	});
	
	
	//商品分类
	function treeCheckbox(e,pIdStr){
		var index=$(e).parents(".condition").index();
		if($(e).prop('checked')){
			$(e).parent("label").parent("li").find("input[type='checkbox']").each(function(){  
		            $(this).prop("checked",true);
		    });  
			
		}else{
			$(e).parent("label").parent("li").find("input[type='checkbox']").each(function(){  
	            $(this).prop("checked",false);
		    });  
		}

 	   $("#"+pIdStr).prop("checked",true);
		//如果子类有未选择设置未选择
		$("#"+pIdStr).parent("label").parent("li").find("input[type='checkbox']").each(function(){  
	           if( !$(this).prop("checked")){
	        	   $("#"+pIdStr).prop("checked",false);
	           }
	    });  
		
		var text = "";
		var ids = "";
		//顶级设置
	 	   $("#allCatalog").prop("checked",true);
			$("#allCatalog").parent("label").parent("li").find("input[type='checkbox']").each(function(){  
		           if( !$(this).prop("checked")){
		        	   $("#allCatalog").prop("checked",false);
		           }else{
		        	   if($(this).attr("cid") == "cid1"){
		        		   text += $(this).parent("label").text() + ",";
		        		   ids += $(this).val()+ ",";
		        	   }
		           }
		    });  
			$("#detailInfo7").val(ids);
			$(".condition-list li").eq(index).find(".selectitem").html('<span class="item">'+text+'</span>')
	}
	
	//指定商品和帐号
	$(".panel.condition textarea.form-control").on("blur",function(){
		var index=$(this).parents(".condition").index(),
		text=$(this).val();
		var t = text.replace(/，/gm,",");
		$(this).val(t);
		$(".condition-list li").eq(index).find(".selectitem .item").text(t);
	});
	
	//评价天数
	$("#evaluate-day").on("keyup",function(){
		if($(this).val().length==0)$("#days").hide();
		else $("#days").show().find(".item").text($(this).val());
	});
	
	//切换金额币种
	$(".panel.condition .options-item input[type='radio']").on("click",function(){
		var index=$(this).parents(".condition").index(),
			currency=$(this).val();
			if(currency == 1){
				currency = "RMB";
			}else{
				currency = "USD";
			}
		$(".condition-list li").eq(index).find(".unit").text(currency);
	});

	$("#formModify").find("input[type='radio'][name$='_Rate']:checked").each(function(){
        $(this).click();
    });

    //英文国家选中
    $("#divCtrlPanel-country").on("click","input[name='country[]'][value='GB']",function(){
        if($(this).attr("checked") == "checked" && $("#divCtrlPanel-country").find("input[name='country[]'][value='UK']").attr("checked") != "checked"){
            $("#divCtrlPanel-country").find("input[name='country[]'][value='UK']").prop("checked",true);
            $("#divCtrlPanel-country").find("input[name='country[]'][value='UK']").parent().addClass("active");
       }else{
    	   $("#divCtrlPanel-country").find("input[name='country[]'][value='UK']").prop("checked",false);
    	   $("#divCtrlPanel-country").find("input[name='country[]'][value='UK']").parent().removeClass("active");
        }
    });

    $("#divCtrlPanel-country").on("click","input[name='country[]'][value='UK']",function(){
        if($(this).attr("checked") == "checked" && $("#divCtrlPanelValues").find("input[name='country[]'][value='GB']").attr("checked") != "checked"){
            $("#divCtrlPanel-country").find("input[name='country[]'][value='GB']").prop("checked",true);
            $("#divCtrlPanel-country").find("input[name='country[]'][value='GB']").parent().addClass("active");
       }else{
    	   $("#divCtrlPanel-country").find("input[name='country[]'][value='GB']").prop("checked",false);
           $("#divCtrlPanel-country").find("input[name='country[]'][value='GB']").parent().removeClass("active");
        }
    });
    
    
    //订单类型选择
    

    $("#myLogisticsChannelOption").on("change",function(){	
    	if($(this).val() == ''){
    		$("#autoApi").prop("checked",false);
			$("#autoApi").prop("disabled",true);
    	}else{
			$("#autoApi").prop("disabled",false);
    	}
   });
   
  	</script>
  </body>
</html>
