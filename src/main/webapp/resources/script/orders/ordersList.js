    var grid = {};
    var orderGrid = {};
    var parentIndex = null;
    $(document).ready(function(){
    	$("#buttonDiv").find("#common_opr_btn1").show();
	    $.jgrid.defaults.styleUI = 'Bootstrap';
	    grid = $("#jqGrid").jqGrid({
    	beforeRequest: function(){
    		$(".ui-jqgrid .jqgrid-overlay").attr("style","display:block");
		},  		 
		loadComplete: function(xhr){
			$(".ui-jqgrid .jqgrid-overlay").attr("style","display:none");
		},  
	    url : ctx.path +'/api/orders/queryOrdersList.do',
	    mtype:"POST",
	    datatype : "json",
	    height: top.getFrameHeight() - $("#buttonDiv").height() - $("#serachDiv").height() - $("#parentMenu").height() - 80,
	    colNames : ['订单ID','运单号','渠道id','平台','店铺','订单编号','买家ID','国家(英)','国家(中)','订单金额(￥)','付款日期','物流方式','是否缺货','操作'],
	    colModel : [
	    	{name : 'orders_id',index:'orders_id',hidden:true},
	    	{name : 'bills',index:'bills',hidden:true},
	    	{name : 'logistics_id',index:'logistics_id',hidden:true},
	    	{name : 'platform_type',index:'platform_type',width : 100,formatter:function(cellvalue){
	    		if(cellvalue == 0){
	    			return "Other";
	    		}else if(cellvalue == 1){
	    			return "Aliexpress";
	    		}else if(cellvalue == 2){
	    			return "Wish";
	    		}else if(cellvalue == 3){
	    			return "Lazada";
	    		}else if(cellvalue == 4){
	    			return "Amazon";
	    		}else if(cellvalue == 5){
	    			return "ebay";
	    		}
	    	}},
	    	{name : 'shop_name',index:'shop_name',width : 150,formatter:function(cellvalue,options,rowObject){
	    		if(cellvalue){
	    			if(rowObject.is_use == 0){
	    				return cellvalue + "(停)";
	    			}else{
	    				return cellvalue;
	    			}
	    		}else{
	    			return "";
	    		}
	    	}},
	    	{name : 'name',index:'name',width : 200,formatter:function(cellvalue,options,rowObject){
	    		return "<a onclick='loadOrderViewPage("+ rowObject.orders_id +")'>"+cellvalue+"</a>";
	    	}},
	    	{name : 'customer_id',index:'customer_id',width : 100},
	    	{name : 'country',index:'country',width : 100},
	    	{name : 'country_cn',index:'country_cn',width : 100},
	    	{name : 'orders_money',index:'orders_money',width : 150,formatter:function(cellvalue,options,rowObject){
	    		if(cellvalue){
	    			return cellvalue.toFixed(3);
	    		}else{
	    			return "0.000";
	    		}
	    	}},
	    	{name : 'pay_time',index:'pay_time',width : 120,formatter:function(cellvalue){
	    		if(cellvalue){
	    			return DateUtil.getSmpFormatDateByLong(cellvalue,false);
	    		}else{
	    			return "未付款";
	    		}
	    	}},
	    	{name : 'logistics_name',index:'logistics_name',formatter:function(cellvalue,options,rowObject){
	    		var cellStr = "";
	    		if(!cellvalue){
	    			cellStr += "<a title=\"物流渠道未选择\" href=\"javascript:void(0);\" onclick=\"addOrderLogist("+ rowObject.orders_id +")\" class=\"text-danger underline btn-change-myLogisticsChannelId\">物流渠道未选择</a>";
	    			if(rowObject.bills){
	    				cellStr += "【<a id='logic"+rowObject.orders_id+"' onclick='doTrack("+rowObject.orders_id+",\""+rowObject.bills+"\")'>"+rowObject.bills+"</a>】";
	    			}
	    		}else{
	    			cellStr += ""+cellvalue;
	    			if(rowObject.bills){
	    				cellStr += "【<a id='logic"+rowObject.orders_id+"' onclick='doTrack("+rowObject.orders_id+",\""+rowObject.bills+"\")'>"+rowObject.bills+"</a>】";
	    			}
	    		}
	    		return cellStr;
	    	}},
	    	{name : 'is_stockout',index:'is_stockout',width:120,formatter:function(cellvalue,options,rowObject){
	    		if(rowObject.order_state == 4){
	    			return "-";
	    		}else{
	    			if(cellvalue != null){
		    			if(cellvalue == 1){
		    				return "否";
		    			}else if(cellvalue == 0){
		    				return "是";
		    			}else if(cellvalue == -1){
		    				return "商品未关联";
		    			}
		    		}else{
		    			return "";
		    		}
	    		}
	    	}},
	    	{name : 'act',index:'act',sortable:false ,width:240,title: false,formatter:operate}
	    ],
	    multiselect:true,
	    autowidth: true,//自适应宽度
	    shrinkToFit: true,
	    rowNum : 20,
	    rowList: [10, 20, 50],
	    rownumbers:false,//添加左侧行号
	    altRows:true,//设置为交替行表格,默认为false
	    pager : '#jqGridPager',
	    viewrecords: true, //是否在浏览导航栏显示记录总数
	    hidegrid: false,
	    sortname : 'orders_id',
		sortorder : 'desc',
	    jsonReader: {
		    root: "data.data",// Json数据
		    records: "data.totalRows",// 总记录数
		    total:"data.totalPages",
		    page:"data.page",
		    repeatitems: false
	    }
    });

    // 设置按钮
    grid.jqGrid('navGrid', '#jqGridPager', {
	    edit: false,
	    add: false,
	    del: false,
	    search: false
	    }, {
	    height: 200,
	    reloadAfterSubmit: true
    });

    //屏幕发生变化的时候计算表格高度
    $(window).bind('resize', function () {
	    var width = $('.jqGrid_wrapper').width();
	    $('#jqGrid').setGridWidth(width);
	    var newHeight = top.getFrameHeight() - $("#buttonDiv").height() - $("#serachDiv").height() - $("#parentMenu").height() - 80;
	    $("#jqGrid").jqGrid('setGridHeight',newHeight);
    });
    
	$("#jqDownGrid").jqGrid({
	        url : ctx.path +'/api/shop/queryAllAuthShopList.do',
	        mtype:"POST",
	        datatype : "json",
	        colNames : ['id','平台','店铺名称','最近下载时间','备注'],
	        colModel : [{name : 'shopId',index:'shopId',hidden:true},
	                    {name : 'platformType',index:'platformType',width : 100,formatter: function(cellvalue, options, rowObject){
	                    	if(cellvalue == 1){
	                    		return "Aliexpress";
	                    	}else if(cellvalue == 2){
	                    		return "Wish";
	                    	}
	                    }},
	                    {name : 'shopName',index:'shopName'},
	                    {name : 'lastSyncDate',index:'lastSyncDate',width : 120,formatter: function(cellvalue, options, rowObject){
	                    	if(cellvalue){
	                    		return DateUtil.getSmpFormatDateByLong(cellvalue,true);
	                    	}else{
	                    		return '';
	                    	}
	                    }},
                        {name : 'remark',index:'remark'}
            ],
            multiselect:true,
	        autowidth: true,//自适应宽度
	        viewrecords : false,
	        hoverrows : false,
	        shrinkToFit: true,
	        rownumbers:false,//添加左侧行号
		    altRows:true,//设置为交替行表格,默认为false
		    hidegrid: false,
	        jsonReader: {
	 	    	root: "data.data",// Json数据
	 	    	repeatitems: false
	 	    },
	 	   gridComplete:function(){
	 		  var width = $('.jqOrdersDownGrid_wrapper').width();
	 			$('#jqDownGrid').setGridWidth(width);
	 			$("#jqDownGrid").jqGrid('setGridHeight','auto');
	 	   },
	 	   loadComplete:function(){
	 		   
	 	   }
	}); 
	
    $("#editForm #order-edit2").click(function(){
    	if($(this).is(":checked")){
    		$("#editForm #logisticsId").attr("disabled",false);
    	}else{
    		$("#editForm #logisticsId").attr("disabled",true);
    	}
    });
    
    $("#editForm #order-edit3").click(function(){
    	if($(this).is(":checked")){
    		$("#editForm #orderState").attr("disabled",false);
    	}else{
    		$("#editForm #orderState").attr("disabled",true);
    	}
    });
    
    $("#editForm #order-edit4").click(function(){
    	if($(this).is(":checked")){
    		$("#editForm #remark").attr("disabled",false);
    	}else{
    		$("#editForm #remark").attr("disabled",true);
    	}
    });
    
    //加载物流渠道下拉框
	HttpUtil.post(ctx.path + "/api/logisticsCompany/queryAuthLogistics.do", "", function(data){
		var optionStr = '<li><a href="javascript:void(0)" onclick="setCtrlValue(\'logisticsId\', \'\');" class="btn-from-reset">全部物流渠道</a></li>';
		optionStr += '<li><a href="javascript:setCtrlValue(\'logisticsId\', \'-1\');">物流渠道为空</a></li>';
		if(data != null && data.rs == 1){
			optionStr += '<li class="divider"></li>';
			$.each(data.data,function(i,n){
				optionStr += '<li><a href="javascript:setCtrlValue(\'logisticsId\', \''+n.logistics_id+'\');">'+n.logistics_name+'</a></li>';
			});
		}
		$("#pageForm #search_logistics").empty().append(optionStr);
	});
	
	//加载店铺
	HttpUtil.post(Http.queryShopListByType(), "", function(data){
		var optionStr = '<li><a href="javascript:void(0);" onclick="setCtrlValue(\'shopId\', \'\');setCtrlValue(\'platformType\', \'\');" class="btn-from-reset">全部店铺</a></li>';
		optionStr += '<li class="divider"></li>';
		if(data != null && data.rs == 1){
				$.each(data.data,function(i,n){
					var platformType = n.platform_type; 
					var childList = n.childrens;
					if(childList != null){
						if(platformType == 1){
							optionStr += '<li class="dropdown-submenu">';
							optionStr += '<a tabindex="-1" href="javascript:void(0);">Aliexpress</a>';
							optionStr += '<ul class="dropdown-menu fixed-height">';
							optionStr += '<li><a href="javascript:setCtrlValue(\'platformType\',\'1\');setCtrlValue(\'shopId\', \'\');">全部Aliexpress店铺</a></li>';
							optionStr += '<li class="divider"></li>';
							$.each(childList,function(key,value){
								var isUser = value.is_use;
								if(isUser == 0){
									optionStr += '<li class="hide-shop"><a href="javascript:setCtrlValue(\'shopId\',\''+value.shop_id+'\');setCtrlValue(\'platformType\', \'\');">'+value.shop_name+'</a></li>';
								}else if(isUser == 1){
									optionStr += '<li class=""><a href="javascript:setCtrlValue(\'shopId\',\''+value.shop_id+'\');setCtrlValue(\'platformType\', \'\');">'+value.shop_name+'</a></li>';
								}
							});
							optionStr += '</ul></li>';
						}else if(platformType == 2){
							optionStr += '<li class="dropdown-submenu">';
							optionStr += '<a tabindex="-1" href="javascript:void(0);">Wish</a>';
							optionStr += '<ul class="dropdown-menu fixed-height">';
							optionStr += '<li><a href="javascript:setCtrlValue(\'platformType\',\'2\');setCtrlValue(\'shopId\', \'\');">全部Wish店铺</a></li>';
							optionStr += '<li class="divider"></li>';
							$.each(childList,function(key,value){
								var isUser = value.is_use;
								if(isUser == 0){
									optionStr += '<li class="hide-shop"><a href="javascript:setCtrlValue(\'shopId\',\''+value.shop_id+'\');setCtrlValue(\'platformType\', \'\');">'+value.shop_name+'</a></li>';
								}else if(isUser == 1){
									optionStr += '<li class=""><a href="javascript:setCtrlValue(\'shopId\',\''+value.shop_id+'\');setCtrlValue(\'platformType\', \'\');">'+value.shop_name+'</a></li>';
								}
							});
							optionStr += '</ul></li>';
						}else if(platformType == 0){
							optionStr += '<li class="dropdown-submenu">';
							optionStr += '<a tabindex="-1" href="javascript:void(0);">Other</a>';
							optionStr += '<ul class="dropdown-menu fixed-height">';
							optionStr += '<li><a href="javascript:setCtrlValue(\'platformType\',\'0\');setCtrlValue(\'shopId\', \'\');">全部Other店铺</a></li>';
							optionStr += '<li class="divider"></li>';
							$.each(childList,function(key,value){
								var isUser = value.is_use;
								if(isUser == 0){
									optionStr += '<li class="hide-shop"><a href="javascript:setCtrlValue(\'shopId\',\''+value.shop_id+'\');setCtrlValue(\'platformType\', \'\');">'+value.shop_name+'</a></li>';
								}else if(isUser == 1){
									optionStr += '<li class=""><a href="javascript:setCtrlValue(\'shopId\',\''+value.shop_id+'\');setCtrlValue(\'platformType\', \'\');">'+value.shop_name+'</a></li>';
								}
							});
							optionStr += '</ul></li>';
						}
					}else{
						if(platformType == 1){
							optionStr += '<li role="presentation" class="dropdown-header">Aliexpress</li>';
						}else if(platformType == 2){
							optionStr += '<li role="presentation" class="dropdown-header">Wish</li>';
						}else if(platformType == 0){
							optionStr += '<li role="presentation" class="dropdown-header">Other</li>';
						}
					}
				});
			}
		optionStr += '<li class="view-hidden"><label class="checkbox-inline ml10"><input onclick="isHidden()" type="checkbox" checked value="" id="view-hidden" autocomplete="off">显示已停用店铺</label></li>';
		 $("#pageForm #isHidden").empty().append(optionStr);
	});
});

//批量修改订单
function btnBatchEdit(){
	$("#editForm")[0].reset();
	parentIndex = layer.open({
		title:'批量修改订单',
	    type: 1,
	    area: ['65%', '68%'],
	    fix: true,
	    maxmin: true,
	    btn:['保存','取消'],
	    yes:function(index, layero){
	    	var orderIds = $("#editForm").find("#orderCodes").val();
	    	if(checkUtil.isNullValue(orderIds)){
	    		top.toastr.error("请输入要修改的订单！");
	    		return false;
	    	}
	    	
	    	var $form = $("form[name='editForm']");
	    	var label =[]; 
	    	$form.find('input:checked').each(function(){
	    		label.push($(this).val());
	    	});
	    	
	    	var checkA = $form.find("#order-edit2").is(":checked");
	    	var logisticsVal = $form.find("#logisticsId").val();
	    	
	    	var checkB = $form.find("#order-edit4").is(":checked");
	    	var remarkVal = $form.find("#remark").val();
	    	
	    	var checkC = $form.find("#order-edit3").is(":checked");
	    	
	    	if((label.length == 0) || (checkA && checkUtil.isNullValue(logisticsVal) && !checkC) || (checkB && checkUtil.isNullValue(remarkVal) && !checkC)){
	    		top.toastr.error("没选择需修改的内容！");
	    		return false;
	    	}
	    	
	    	$("#editForm").attr("action", ctx.path + "/api/orders/batchEditOrders.do");
	    	$("#editForm").submit();
	    },
	    content: $('#batchEdit'),
	    success:function(layero, index){
	    	var optionStr = '<option value="">无</option>';
	    	HttpUtil.post(Http.queryAuthLogistics(), "", function(data){
	    		if(data != null && data.rs == 1){
	    			$.each(data.data,function(i,n){
	    				optionStr += '<option value="'+n.logistics_id+'">'+n.logistics_name+'</option>';
	    			});
	    			$("#editForm").find("#logisticsId").empty().append(optionStr);
	    		}
	    	});
	    	FormUtil.resetForm("editForm");
	    	$("#editForm #logisticsId").attr("disabled",true);
	    	$("#editForm #orderState").attr("disabled",true);
	    	$("#editForm #remark").attr("disabled",true);
	    	$("#editForm").find("#orderIds").val("");
	        $("#editForm").find("#orderCodes").val("");
	    	var selRows = grid.jqGrid('getGridParam', 'selarrrow');  //选中行id数组
	        if(selRows.length <= 0){
	        	return false;
	        }
	        var ids=new Array();
	        var names = new Array();
	        var len = selRows.length;
	        var rowData = new Object();
	        for(var i = 0;i < len ;i ++) {
	    	    var tempId = selRows[i];
	    	    var row = grid.jqGrid("getRowData",tempId);
	    	    var id = row.orders_id;//获取选择行数据id
	    	    var name = row.name;
	    	    ids.push(id);
	    	    names.push(delHtmlTag(name));
	    	}
	        if(names.length > 0){
	        	names.push("");
	        }
	        $("#editForm").find("#orderIds").val(ids.join(","));
	        $("#editForm").find("#orderCodes").val(names.join("\n"));
	        
	        $("#editForm").validate({
	   		 submitHandler: function(form){
				 $(form).ajaxSubmit({
					 	layerMaskFlag:true,
				        //表单提交成功后的回调
				        success: function(responseText, statusText, xhr, $form){
				        	if(responseText.rs == 1){
				        		var errorList = responseText.data;
				        		if(errorList.length == 0){
				    				  grid.trigger("reloadGrid");//刷数据
									  top.toastr.success("操作成功！");
									  layer.close(parentIndex); 
				    			}else{
				    				notFoundPlatformOrderIds(errorList);
				    				return false;
				    			}
				        	}
				        }
				    }); 
			 }
		 });
	    }
	});
}
    
//刷新表单
function refreshGrid(){
	grid.trigger("reloadGrid");
}

//打开新增页面
function openHandlePage(){
    parentIndex = layer.open({
    title:'新增订单',
    type: 2,
    area: ['90%', '90%'],
    fix: true,
    maxmin: true,
    content: ctx.path + '/api/orders/goOrderAddPage',
    success:function(layero, index){
    	
    }
   });
}

//物流追踪
function doTrack(ordersId,tradeNo){
	 YQV5.trackSingleF2({
	        YQ_ElementId:"logic"+ordersId,
	        YQ_Width:500,
	        YQ_Height:350,
	        YQ_Fc:"0",
	        YQ_Lang:"zh-cn",
	        YQ_Num:tradeNo
	    });
}

//更改弹窗标题
function changeLayerTitle(title){
	layer.title(title, parentIndex);
}

//批量处理异常订单
function batchDealState(orderState){
	var selRows = grid.jqGrid('getGridParam', 'selarrrow');  //选中行id数组
    if(selRows.length <= 0){
    	top.toastr.warning("请选择要处理的订单！");
    	return false;
    }
    var ids=new Array();
    var len = selRows.length;
    var rowData = new Object();
    var delContext = "";
    if(orderState == 3){
    	delContext += "确定将选择的订单标记发货吗？";
    }else if(orderState == 4){
    	delContext += "确定将选择的订单批量作废吗？";
    }else{
    	delContext += "您确定批量处理";
    	if(selRows.length == 1){  //处理单条数据
    	    rowData = grid.jqGrid('getRowData',selRows[0]);
    	    delContext += "订单号【" + rowData.name + "】吗？<br>";
    	}else {
    	    delContext += "选中的" + selRows.length + "条订单吗？<br>";
    	}
    }
    for(var i = 0;i < len ;i ++) {
	    var tempId = selRows[i];
	    var row = grid.jqGrid("getRowData",tempId);
	    var id = row.orders_id;//获取选择行数据id
	    ids.push(id);
	}
    layer.confirm(delContext, {icon: 3, title:"提示"},
	    function(index){
	    $.get( ctx.path +"/api/orders/batchDealOrderState.do?ids="+ids.join(",")+"&orderState="+orderState,
    	    function(result){
	    	    if(result.rs==1){
	    	    	grid.trigger("reloadGrid");//刷新表单
	    	    	if(orderState == 1){
	    	    		top.toastr.success("订单激活成功！");
	    	    	}else if(orderState == 4){
	    	    		top.toastr.success("订单作废成功！");
	    	    	}else if(orderState == 2){
	    	    		top.toastr.success("已开始配货！");
	    	    	}else if(orderState == 3){
	    	    		top.toastr.success("订单发货成功！");
	    	    	}
	    	    }
    	    },"json");
	    layer.close(index);
    });
}

//批量处理订单
function doBatchOrderOperation(flag,tip){
	var selRows = grid.jqGrid('getGridParam', 'selarrrow');  //选中行id数组
    if(selRows.length <= 0){
    	top.toastr.warning("请选择要处理的订单！");
    	return false;
    }
    var ids=new Array();
    var len = selRows.length;
    var rowData = new Object();
    var delContext = tip;
    var path = "";
    var msg = "";
    for(var i = 0;i < len ;i ++) {
	    var tempId = selRows[i];
	    var row = grid.jqGrid("getRowData",tempId);
	    var id = row.orders_id;//获取选择行数据id
	    ids.push(id);
	}
    //发货
    if(flag == 'delivered'){
    	path = ctx.path +"/api/orders/batchDealOrderState.do?ids="+ids.join(",")+"&orderState=3";
    	msg = "订单发货成功！";
    }else if(flag == 'cancel'){//作废
    	path = ctx.path +"/api/orders/batchDealOrderState.do?ids="+ids.join(",")+"&orderState=4";
    	msg = "订单作废成功！";
    }else if(flag == 'distribute'){//配货中
    	path = ctx.path +"/api/orders/batchDealOrderState.do?ids="+ids.join(",")+"&orderState=2";
    	msg = "已开始配货！";
    }else if(flag == 'active'){//激活订单
    	path = ctx.path +"/api/orders/batchDealOrderState.do?ids="+ids.join(",")+"&orderState=1";
    	msg = "激活订单成功！";
    }
    
    layer.confirm(delContext, {icon: 3, title:"提示"},
    	    function(index){
	    $.get(path,function(result){
	    	    if(result.rs==1){
	    	    	var errorList = result.data;
	    			if(errorList.length == 0){
	    				grid.trigger("reloadGrid");//刷新表单
		    	    	top.toastr.success(msg);
	    			}else{
	    				notFoundPlatformOrderIds(errorList);
	    			}
	    	    }
    	    },"json");
	    layer.close(index);
    });
}

function chooseSaleLogics(value){
	$("#pageForm").find("#platformType").val(value);
}

function chooseOrderState(state){
	common.clear();
	clearForm(state);
	$("#pageForm #orderState").val(state);
	var params = {};
	//显示消息
	$("#jqGrid")[0].grid.beginReq();
	params['orderState'] = $.trim(state);
	params['isUse'] = null;
	//设置参数
	$("#jqGrid").jqGrid('setGridParam',{page:1,rows:20,postData:params});
	//隐藏消息
	$("#jqGrid")[0].grid.endReq();
	//刷新表单
	$("#jqGrid").trigger("reloadGrid");
	$("#buttonDiv").find("#common_opr_btn"+state).show().siblings().hide();
	resizeGrid();//重新计算表格的高度
}

//处理异常订单
function dealExceptionOrder(orderIds){
	if(orderIds){
		$.get(ctx.path +"/api/orders/updateOrderState.do?ordersId="+orderIds+"&orderState=1",
	  			function(result){
	  				if(result.rs==1){
	  						grid.trigger("reloadGrid");//刷新表单
	  						top.toastr.success("批量处理成功！");
    					}               
				  },"json");  
	}
}

//激活订单
function enableOrder(orderIds){
	if(orderIds){
		var delContext = "您确定需要激活该订单吗？";
		  layer.confirm(delContext, {icon: 3, title:"提示"},
		    function(index){
			  $.get(ctx.path +"/api/orders/enableOrder.do?ordersId="+orderIds,
			  			function(result){
			  				if(result.rs==1){
			  						grid.trigger("reloadGrid");//刷新表单
			  						top.toastr.success("激活订单成功！");
		    					}               
						  },"json"); 
		    layer.close(index);
	    });
	}
}

function updateOrderRemark(ordersId){
	parentIndex = layer.open({
		title:'订单备注',
	    type: 1,
	    area: ['45%', '40%'],
	    fix: true,
	    maxmin: true,
	    btn:['保存','取消'],
	    yes:function(index, layero){
	    	$("#addRemarkForm").submit();
	    },
	    content: $('#addOrderRemark'),
	    success:function(layero, index){
	    	$("#addOrderRemark").find("#ordersId").val(ordersId);
	    	$.get(ctx.path +"/api/orders/queryOrdersInfoById.do?ordersId="+ordersId,
	      			function(result){
	      				if(result.rs==1){
	      					var remark = result.data.remark;
	      					$("#addOrderRemark").find("#remark").val(remark);
	    				}               
	    			  },"json"); 
	    	$("#addRemarkForm").validate({
		   		 submitHandler: function(form){
					 $(form).ajaxSubmit({
					        //表单提交成功后的回调
					        success: function(responseText, statusText, xhr, $form){
					        	if(responseText.rs == 1){
					        		  grid.trigger("reloadGrid");//刷数据
									  top.toastr.success("操作成功！");
									  layer.close(parentIndex);  
					        	}else if(responseText.rs == -1){
					        		top.toastr.error(responseText.msg);
					        	}else{
					        		top.toastr.error("操作失败！");
					        	}
					        }
					    }); 
				 }
			 });
	    }
	});
}

//新增物流渠道
function addOrderLogist(ordersId){
	if(ordersId){
		  $.ajax({
	        url:  ctx.path +'/api/logisticsCompany/queryAuthLogistics.do',
	        async: true,
	        dataType: 'json',
	        type: 'POST',
	        data: {},
	        success: function(data){
	        	$("#logicDiv").empty();
	        	var optionstr = "<li class=\"hide\">";
    			optionstr += "<a id=\"logisticsId-reset\" onclick=\"$('#addOrderLogistForm #orderLogisticsId').val('');\" href=\"javascript:void(0);\">请选择物流渠道</a>";
    			optionstr += "</li>";
	        	if(data.rs == -1){
	        		return false;
	        	}else{
	        		if(data.data){
	        			for(var i = 0; i< data.data.length; i++){
	        				optionstr += "<li>";
	        				optionstr += "<a onclick=\"$('#addOrderLogistForm #orderLogisticsId').val('"+data.data[i].logistics_id+"');\" href=\"javascript:void(0);\">"+data.data[i].logistics_name+"</a>";
	        				optionstr += "</li>";
	        			}
	        			$("#logicDiv").append(optionstr);
	        		}
	        	}
	        },
	        error: function(jqXHR , textStatus , errorThrown){
	        	top.toastr.error("操作失败");
	        }
	      });
			parentIndex = layer.open({
    			title:'设置物流渠道',
    		    type: 1,
    		    area: ['45%', '50%'],
    		    fix: true,
    		    maxmin: true,
    		    btn:['保存','取消'],
    		    yes:function(index, layero){
    		    	$("#addOrderLogistForm").submit();
    		    },
    		    content: $('#addOrderLogist'),
    		    success:function(layero, index){
    		    	$("#addOrderLogist").find("#ordersId").val(ordersId);
    		    	$("#addOrderLogist").find("#bills").val("");
    		    	$("#addOrderLogistForm").validate({
    			   		 submitHandler: function(form){
    						 $(form).ajaxSubmit({
    						        //表单提交成功后的回调
    						        success: function(responseText, statusText, xhr, $form){
    						        	if(responseText.rs == 1){
    						        		  grid.trigger("reloadGrid");//刷数据
    										  top.toastr.success("操作成功！");
    										  layer.close(parentIndex);  
    						        	}else if(responseText.rs == -1){
    						        		top.toastr.error(responseText.msg);
    						        	}else{
    						        		top.toastr.error("操作失败！");
    						        	}
    						        }
    						    }); 
    					 }
    				 });
    		    }
    		});
	}
}

//查看订单详情
function loadOrderViewPage(ordersId){
	if(ordersId){
		parentIndex = layer.open({
		    title:'订单详情',
		    type: 2,
		    area: ['90%', '90%'],
		    fix: true,
		    maxmin: true,
		    content: ctx.path + '/api/orders/loadOrderViewPage.do?ordersId='+ordersId
		 });
	}
}

//配货清单打印
function distributeOrderPrint(){
	parentIndex = layer.open({
		title:'配货清单打印设置',
	    type: 1,
	    area: ['65%', '80%'],
	    fix: true,
	    maxmin: true,
	    btn:['导出EXCEL文件','打印预览','取消'],
	    yes:function(index, layero){
	    	var orderIds = $("#distributionPrintForm").find("#orderCodes").val();
	    	if(checkUtil.isNullValue(orderIds)){
	    		top.toastr.error("请选择要导出的订单！");
	    		return false;
	    	}
	    	
	    	HttpUtil.post(ctx.path + "/api/orders/queryOrderIdsByName.do", "names="+orderIds, function(data){
	    		if(data != null && data.rs == 1){
	    			var result = data.data;
	    			var errorList = result.errorList;
	    			var ids = result.ids;
	    			if(errorList.length == 0){
	    				$("#distributionPrintForm").find("#orderIds").val(ids);
	    				$("#distributionPrintForm").attr("action", ctx.path + "/api/orders/exportDistributionPrintSetList.do");
	    		    	$("#distributionPrintForm").submit();
	    			}else{
	    				notFoundPlatformOrderIds(errorList);
	    				return false;
	    			}
	    		}
	    	});
	    },
	    btn2:function(index){
	    	var orderIds = $("#distributionPrintForm").find("#orderCodes").val();
	    	if(checkUtil.isNullValue(orderIds)){
	    		top.toastr.error("请选择要打印的订单！");
	    		return false;
	    	}
	    	
	    	HttpUtil.post(ctx.path + "/api/orders/queryOrderIdsByName.do", "names="+orderIds, function(data){
	    		if(data != null && data.rs == 1){
	    			var result = data.data;
	    			var errorList = result.errorList;
	    			var ids = result.ids;
	    			if(errorList.length == 0){
	    				$("#distributionPrintForm").find("#orderIds").val(ids);
	    				$("#distributionPrintForm").attr("action", ctx.path + "/api/orders/loadDistributionPrintSetList.do");
	    		    	$("#distributionPrintForm").attr("target","_blank");
	    		    	$("#distributionPrintForm").submit();
	    			}else{
	    				notFoundPlatformOrderIds(errorList);
	    				return false;
	    			}
	    		}
	    	});
	    },
	    content: $('#distributionPrintSet'),
	    success:function(layero, index){
	    	$("#distributionPrintForm").removeAttr("action");
	        $("#distributionPrintForm").removeAttr("target");
	    	$("#distributionPrintForm").find("#orderIds").val("");
	        $("#distributionPrintForm").find("#orderCodes").val("");
	    	var selRows = grid.jqGrid('getGridParam', 'selarrrow');  //选中行id数组
	        if(selRows.length <= 0){
	        	return false;
	        }
//	        var ids=new Array();
	        var names = new Array();
	        var len = selRows.length;
	        var rowData = new Object();
	        for(var i = 0;i < len ;i ++) {
	    	    var tempId = selRows[i];
	    	    var row = grid.jqGrid("getRowData",tempId);
	    	    var id = row.orders_id;//获取选择行数据id
	    	    var name = row.name;
//	    	    ids.push(id);
	    	    names.push(delHtmlTag(name));
	    	}
//	        $("#distributionPrintForm").find("#orderIds").val(ids.join(","));
	        $("#distributionPrintForm").find("#orderCodes").val(names.join("\n")+"\n");
	    }
	});
}

//拣货清单打印
function pickingListPrint(){
	parentIndex = layer.open({
		title:'拣货清单打印设置',
	    type: 1,
	    area: ['50%', '65%'],
	    fix: true,
	    maxmin: true,
	    btn:['打印预览','取消'],
	    yes:function(index, layero){
	    	var orderIds = $("#printSetForm").find("#orderCodes").val();
	    	if(checkUtil.isNullValue(orderIds)){
	    		top.toastr.error("请选择要打印的订单！");
	    		return false;
	    	}
	    	
	    	HttpUtil.post(ctx.path + "/api/orders/queryOrderIdsByName.do", "names="+orderIds, function(data){
	    		if(data != null && data.rs == 1){
	    			var result = data.data;
	    			var errorList = result.errorList;
	    			var ids = result.ids;
	    			if(errorList.length == 0){
	    				$("#printSetForm").find("#orderIds").val(ids);
	    				$("#printSetForm").attr("action", ctx.path + "/api/orders/loadPrintSetList.do");
	    		    	$("#printSetForm").attr("target","_blank");
	    		    	$("#printSetForm").submit();
	    			}else{
	    				notFoundPlatformOrderIds(errorList);
	    				return false;
	    			}
	    		}
	    	});
	    },
	    content: $('#printSet'),
	    success:function(layero, index){
	    	$("#printSetForm").find("#orderIds").val("");
	        $("#printSetForm").find("#orderCodes").val("");
	    	var selRows = grid.jqGrid('getGridParam', 'selarrrow');  //选中行id数组
	        if(selRows.length <= 0){
	        	return false;
	        }
//	        var ids=new Array();
	        var names = new Array();
	        var len = selRows.length;
	        var rowData = new Object();
	        for(var i = 0;i < len ;i ++) {
	    	    var tempId = selRows[i];
	    	    var row = grid.jqGrid("getRowData",tempId);
	    	    var id = row.orders_id;//获取选择行数据id
	    	    var name = row.name;
//	    	    ids.push(id);
	    	    names.push(delHtmlTag(name));
	    	}
//	        $("#printSetForm").find("#orderIds").val(ids.join(","));
	        $("#printSetForm").find("#orderCodes").val(names.join("\n")+"\n");
	    }
	});
}

function delHtmlTag(str){
  return str.replace(/<[^>]+>/g,"");//去掉所有的html标记
}

var Http = {
		queryAuthLogistics : function(){
			return ctx.path + "/api/logisticsCompany/queryAuthLogistics.do";
		},
		batchImportOrders : function(){
			return ctx.path + "/api/orders/batchImportOrders.do";
		},
		queryShopListByType : function(){
			return ctx.path + "/api/shop/queryShopTreeByPlatformType.do";
		},
		downloadOrder : function(){
			return ctx.path + "/api/shop/downloadOrder.do";
		},
		printOrder : function(){
			return ctx.path + "/api/orders/printOrder.do";
		},
		printOrderNames : function(){
			return ctx.path + "/api/orders/printOrderNames.do";
		}
};

//批量更新交运信息
function doBatchUpdateShipping(){
	$("#batchImportForm").find("textarea").val('');
	var selRows = grid.jqGrid('getGridParam', 'selarrrow');  //选中行id数组
    if(selRows.length > 0){
    	var ids=new Array();
        var names = new Array();
        var len = selRows.length;
        var rowData = new Object();
        for(var i = 0;i < len ;i ++) {
    	    var tempId = selRows[i];
    	    var row = grid.jqGrid("getRowData",tempId);
    	    var name = row.name;
    	    names.push(delHtmlTag(name));
    	}
        if(names.length > 0){
        	names.push("");
        }
        $("#batchImportForm").find("textarea").val(names.join("\n"));
    }
	$('#batchImportForm').find('select').find('option[value=1]').attr("selected",true);
	$('#batchImportForm').find('.updataInfo').html($('#BatchImportInfo').find('select').find('option:selected').attr('data-title'));
	parentIndex = layer.open({
		title:'批量更新交运信息',
	    type: 1,
	    area: ['50%', '68%'],
	    fix: true,
	    maxmin: true,
	    btn:['保存','取消'],
	    yes:function(index, layero){
	    	var orderIds = $("#batchImportForm").find("textarea").val();
	    	if(checkUtil.isNullValue(orderIds)){
	    		top.toastr.error("请填写更新内容");
	    		return false;
	    	}
	    	var postdata = "updateOrderInfo="+$("#batchImportForm").find("textarea").val() + "&type="+$("#batchImportForm").find("select option:selected").val();
	    	HttpUtil.post(Http.batchImportOrders(), postdata, function(data){
	    		if(data){
	    			var errorList = data.data;
	    			if(errorList.length == 0){
	    				  grid.trigger("reloadGrid");//刷数据
						  top.toastr.success("更新交运信息成功");
						  layer.close(parentIndex); 
	    			}else{
	    				notFoundPlatformOrderIds(errorList);
	    				return false;
	    			}
	    		}
	    	});
	    },
	    content: $('#batchImportInfo')
	});
}

//展示错误信息
function notFoundPlatformOrderIds(errorList){
	var failedRowsHtml = '';
	if(errorList.length > 0){//如果存在失败的条目
		$.each(errorList,function(i,n){
			$.each(n,function(key,value){
				failedRowsHtml += '<tr>';
				failedRowsHtml += '<td><span class="semibold text-accent">'+key+'</span></td>';
				failedRowsHtml += '<td class="text-center">'+value+'</td>';
				failedRowsHtml += '</tr>';
			});
		});
		
		$("#errorMessage").find("tbody").html(failedRowsHtml);
		layer.open({
			title:'操作失败的项目',
		    type: 1,
		    area: ['60%', '80%'],
		    fix: true,
		    maxmin: true,
		    content: $('#errorMessage')
		});
	}
}

//订单重发
function retryOrder(ordersId){
	if(ordersId){
		parentIndex = layer.open({
		    title:'订单重发',
		    type: 2,
		    area: ['90%', '90%'],
		    fix: true,
		    maxmin: true,
		    content: ctx.path + '/api/orders/loadOrderRetryPage.do?ordersId='+ordersId
		 });
	}
}

function assignment(filtertype,filtername,filterlabel){
	if(filterlabel == '模糊查询'){
		$("#filtervalue").val("");
		$("#filtervalue").removeAttr("name");
		$("#filtervalue").attr("disabled","disabled");
	}else{
		$("#filtervalue").attr("name",filtername);
		$("#filtervalue").removeAttr("disabled");
	}
}

function resizeGrid(){
	var width = $('.jqGrid_wrapper').width();
    $('#jqGrid').setGridWidth(width);
    var newHeight=top.getFrameHeight() - $("#buttonDiv").height() - $("#serachDiv").height() - $("#parentMenu").height() - 80;
    $("#jqGrid").jqGrid('setGridHeight',newHeight);
}

function resizeGridTimeout(){
	var timeout = null;
	if(timeout == null){
		timeout = setTimeout(function(){
				resizeGrid();//重新计算表格的高度
				timeout = null;
		}, 50);
	}
}

function setCtrlValue(name, value){
	$('#pageForm input[name="' + name + '"]').val(value);
	resizeGridTimeout();
}

function isHidden(){
	var isHidden = $("#view-hidden").prop('checked');
	if(isHidden){
		$("#pageForm #isHidden").find(".hide-shop").show();
		$('#pageForm input[name="isUse"]').val("");
	}else{
		$("#pageForm #isHidden").find(".hide-shop").hide();
		$('#pageForm input[name="isUse"]').val("1");
	}
}

//清除表单
function clearForm(state){
	$("#pageForm #shopButton").html("全部店铺");
	$("#pageForm #view-hidden").prop('checked',true);
	isHidden();
	if(typeof(state) != "undefined"){
		var $stateText = $("#PCorderStatus a[index='"+state+"']").html();
		$("#pageForm #statusButton").html($stateText);
		$("#pageForm input[name=\"orderState\"]").val(state);
	}else{
		var $id = $(".nav-tabs .active").attr("id");
		var $state = $id.substring(10);
		var $stateText = $("#PCorderStatus a[index='"+$state+"']").html();
		$("#pageForm #statusButton").html($stateText);
		$("#pageForm input[name=\"orderState\"]").val($state);
	}
	$("#pageForm #filterTypeButton").html("付款日期");
	$('#pageForm input[name="filterType"]').val("0");
	$("#pageForm #logisticsButton").html("全部物流渠道");
	$("#pageForm #filtertypedefault").html("模糊查询");
	$("#pageForm #filtervalue").attr("disabled","disabled");
	resizeGridTimeout();
}

//查询表单
function searchForm(){
	var orderState = $("#pageForm").find("#orderState").val();
	if(orderState != -1){
		$("#grenul").find("#orderState"+orderState).addClass("active").siblings("li").removeClass("active");
		$("#buttonDiv").find("#common_opr_btn"+orderState).show().siblings().hide();
	}
}

//打开打印模板管理页面
function goPrintModelPage(){
	top.openMenu(ctx.path + "/resources/views/print/printList.jsp");
}

//打开启用物流渠道
function goLogistisPage(){
	top.openMenu(ctx.path + "/resources/views/logistics/logisticsOwnCompany.jsp");
}

//打开批量重发页面
function openBatchRetryPage(){
	var selRows = grid.jqGrid('getGridParam', 'selarrrow');  //选中行id数组
    if(selRows.length <= 0){
    	top.toastr.warning("请选择要重发的订单！");
    	return false;
    }
    var ids=new Array();
    var len = selRows.length;
    var rowData = new Object();
    for(var i = 0;i < len ;i ++) {
	    var tempId = selRows[i];
	    var row = grid.jqGrid("getRowData",tempId);
	    var id = row.orders_id;//获取选择行数据id
	    ids.push(id);
	}
    
	if(ids.length > 0){
		parentIndex = layer.open({
		    title:'订单批量重发',
		    type: 2,
		    area: ['90%', '90%'],
		    fix: true,
		    maxmin: true,
		    content: ctx.path + '/api/orders/loadOrderBatchRetryPage.do?ids='+ids.join(",")
		 });
	}
}

function openOrderDownloadPage(){
	parentIndex = layer.open({
		title:'同步订单',
	    type: 1,
	    area: ['60%', '80%'],
	    fix: true,
	    maxmin: true,
	    btn:['确认下载','取消'],
	    yes:function(index, layero){
	    	var selRows = $("#jqDownGrid").jqGrid('getGridParam', 'selarrrow');  //选中行id数组
	        if(selRows.length <= 0){
	        	top.toastr.warning("请选择要操作的店铺！");
	        	return false;
	        }
	        var ids=new Array();
	        var len = selRows.length;
	        var rowData = new Object();
	        for(var i = 0;i < len ;i ++) {
	    	    var tempId = selRows[i];
	    	    var row = $("#jqDownGrid").jqGrid("getRowData",tempId);
	    	    var id = row.shopId;//获取选择行数据id
	    	    ids.push(id);
	    	}
	    	var postdata = "ids="+ids.join(",");
	    	HttpUtil.post(Http.downloadOrder(), postdata, function(data){
	    		if(data){
	    			if(data.rs == 1){
	    				 top.toastr.success("下载订单任务已提交，请稍后查看订单!");
						 layer.close(parentIndex); 
	    			}else{
	    				top.toastr.error("没有找到启用并授权完成的店铺!");
	    			}
	    		}
	    	});
	    },
	    content: $('#loadManuallyDownloadOrder'),
	    success:function(layero, index){
	    	$("#jqDownGrid").trigger('reloadGrid');
	    },
	    full:function(layero){
	    	setTimeout(function(){
	    		 reSizeLayer();
	    	},100);
	    },
	    restore:function(layero){
	    	reSizeLayer();
	    }
	});
}

function reSizeLayer(){
	var width = $('.jqOrdersDownGrid_wrapper').width();
	$('#jqDownGrid').setGridWidth(width);
	$("#jqDownGrid").jqGrid('setGridHeight','auto');
}

//自动填充交运单号
function batchAutomaticallyFillTrackNumber(){
	var selRows = grid.jqGrid('getGridParam', 'selarrrow');  //选中行id数组
    if(selRows.length <= 0){
    	top.toastr.warning("请选择要自定交运的订单！");
    	return false;
    }
    var ids=new Array();
    var len = selRows.length;
    var rowData = new Object();
    for(var i = 0;i < len ;i ++) {
	    var tempId = selRows[i];
	    var row = grid.jqGrid("getRowData",tempId);
	    var id = row.orders_id;//获取选择行数据id
	    ids.push(id);
	}
    
    parentIndex = layer.open({
	    title:'批量自动填充运单号',
	    type: 2,
	    area: ['90%', '90%'],
	    fix: true,
	    maxmin: true,
	    content: ctx.path + '/api/orders/loadOrderTradePage.do?ids='+ids.join(",")
	 });
}

//打印
function printOrder(orderId){
	if(orderId != null){
		var rowData = $("#jqGrid").getCol("orders_id",true);
		 var rowId = null;
		 $.each(rowData, function(i,n){ 
			if (n.value == orderId) {rowId = n.id}
		 });
		 var row = $("#jqGrid").getRowData(rowId);
		 var bills = row.bills;
		 var logistics_id = row.logistics_id;
		 var name = row.name;
		 var delContext = "";
		 if(checkUtil.isNullValue(bills) && checkUtil.isNullValue(logistics_id)){
			 delContext = "你修改的订单-暂无渠道-暂无运单号，确定继续打印？";
		 }else if(checkUtil.isNullValue(bills)){
			 delContext = "你修改的订单-暂无运单号，确定继续打印？";
		 }else if(checkUtil.isNullValue(logistics_id)){
			 delContext = "你修改的订单-暂无渠道，确定继续打印？";
		 }

		 if(checkUtil.isNullValue(delContext)){
			 parentIndex = layer.open({
				    title:'订单打印',
				    type: 1,
				    area: ['90%', '90%'],
				    fix: true,
				    maxmin: true,
				    content: $("#printOrder"),
				    success:function(layero, index){
				    	$("#printOrderForm").find("#platformOrderIds").val();
				    	$("#printOrderForm").find("#platformOrderIds").val(delHtmlTag(name)+"\n");
				    	//打印单子下拉框
				    	$.ajax({
							url : ctx.path + '/api/print/getTempList.do?type=0',
							type : 'POST',
							async : false,
							success : function(data) {
								$("#specType").get(0).selectedIndex=0;
								$("#addressId").append("");
								$("#customId").append("");
								$("#deliverId").append("");
								$("#invoiceId").append("");
								var addressId = "<option value=''>请选择</option>";
								var customId = "<option value=''>请选择</option>";
								var deliverId =  "<option value=''>请选择</option>";
								var invoiceId  = "<option value=''>请选择</option>";
								$.each(data.data,function(i,n){
									var tLength = n.tLength;
									var tWidth = n.tWidth;
									var pId = 0;
									if(tLength == 10 && tWidth == 10){
										var pId = 1;
									}
									if(tLength == 8 && tWidth == 3){
										var pId = 2;
									}
									if(tLength == 5 && tWidth == 2){
										var pId = 3;
									}
									var optionStr = "<option value='"+n.tempId+"' pId='"+pId+"'>"+n.name+"</option>";
									//地址单
									if(n.tempType == 1){
										addressId += optionStr;
									}
									//报送单
									if(n.tempType == 2){
										customId += optionStr;
									}
									//配货单
									if(n.tempType == 3){
										deliverId += optionStr;
									}
									//发票单
									if(n.tempType == 4){
										invoiceId += optionStr;
									}
								});
								$("#addressId").html(addressId);
								$("#customId").html(customId);
								$("#deliverId").html(deliverId);
								$("#invoiceId").html(invoiceId);
								
							},
						      error: function(jqXHR , textStatus , errorThrown){
							      	top.toastr.error("打印单加载失败");
							      }
						});
				    	
				    }
				 });
		 }else{
			 layer.confirm(delContext, {icon: 3, title:"提示"},
				    function(index){
					  parentIndex = layer.open({
						    title:'订单打印',
						    type: 1,
						    area: ['90%', '90%'],
						    fix: true,
						    maxmin: true,
						    content: $("#printOrder"),
						    success:function(layero, index){
						    	$("#printOrderForm").find("#platformOrderIds").val();
						    	$("#printOrderForm").find("#platformOrderIds").val(delHtmlTag(name)+"\n");
						    	//打印单子下拉框
						    	$.ajax({
									url : ctx.path + '/api/print/getTempList.do?type=0',
									type : 'POST',
									async : false,
									success : function(data) {
										$("#specType").get(0).selectedIndex=0;
										$("#addressId").append("");
										$("#customId").append("");
										$("#deliverId").append("");
										$("#invoiceId").append("");
										var addressId = "<option value='' pId='0'>请选择</option>";
										var customId = "<option value='' pId='0'>请选择</option>";
										var deliverId =  "<option value='' pId='0'>请选择</option>";
										var invoiceId  = "<option value='' pId='0'>请选择</option>";
										$.each(data.data,function(i,n){
											var tLength = n.tLength;
											var tWidth = n.tWidth;
											var pId = 0;
											if(tLength == 10 && tWidth == 10){
												var pId = 1;
											}
											if(tLength == 8 && tWidth == 3){
												var pId = 2;
											}
											if(tLength == 5 && tWidth == 2){
												var pId = 3;
											}
											var optionStr = "<option value='"+n.tempId+"' pId='"+pId+"'>"+n.name+"</option>";
											//地址单
											if(n.tempType == 1){
												addressId += optionStr;
											}
											//报送单
											if(n.tempType == 2){
												customId += optionStr;
											}
											//配货单
											if(n.tempType == 3){
												deliverId += optionStr;
											}
											//发票单
											if(n.tempType == 4){
												invoiceId += optionStr;
											}
										});
										$("#addressId").html(addressId);
										$("#customId").html(customId);
										$("#deliverId").html(deliverId);
										$("#invoiceId").html(invoiceId);
										
									},
								      error: function(jqXHR , textStatus , errorThrown){
									      	top.toastr.error("打印单加载失败");
									      }
								});
						    }
						 });
					  layer.close(index);
			    });
		 }
	}
}

//标记为已打印
function isPrint(){
	//获取订单id
	var platformOrderIds = $("#printOrderForm").find("#platformOrderIds").val();
	if(checkUtil.isNullValue(platformOrderIds)){
		top.toastr.error("请输入要标记打印的订单号！");
		return false;
	}
	//请求服务器
	var postdata = "platformOrderIds="+platformOrderIds;
	HttpUtil.post(Http.printOrder(), postdata, function(data){
		if(data){
			if(data.rs == 1){
				var errorList = data.data;
				if(errorList.length > 0){
					notFoundPlatformOrderIds(errorList);
					return false;
				}else{
					grid.trigger("reloadGrid");//刷数据
					top.toastr.success("订单标记打印成功!");
				}
			}
		}
	});
}


//打印预览
function printOrderLabels(t_type){
	//获取订单id
	var platformOrderIds = $("#printOrderForm").find("#platformOrderIds").val();
	if(checkUtil.isNullValue(platformOrderIds)){
		top.toastr.error("请输入要打印的订单号！");
		return false;
	}
	var GDdeclareFeeOrigin = null;
	var printTemps = "";
	if(t_type == 1){
		if( !checkUtil.isNullValue($("#addressId").val())){
			printTemps += $("#addressId").val() + ",";
		}
		if(!checkUtil.isNullValue($("#customId").val())){
			printTemps += $("#customId").val() + ",";
		}
		if(!checkUtil.isNullValue($("#deliverId").val())){
			printTemps += $("#deliverId").val() + ",";
		}
		if(checkUtil.isNullValue(printTemps)){
			top.toastr.error("请至少选择一种打印模板！");
			return false;
		}
	}else if(t_type == 2){
		if(!checkUtil.isNullValue($("#invoiceId").val())){
			printTemps += $("#invoiceId").val() ;
		}

		if(checkUtil.isNullValue(printTemps)){
			top.toastr.error("请选择一种发票打印模板！");
			return false;
		}
		GDdeclareFeeOrigin = $("#GDdeclareFeeOrigin").val();
	}else if(t_type == 3){
		
	}else if(t_type == 4){
		if(!checkUtil.isNullValue($("#CombinationLabel").val())){
			printTemps += $("#CombinationLabel").val() ;
		}
		if(checkUtil.isNullValue(printTemps)){
			top.toastr.error("请先选择标签！");
			return false;
		}
	}else{
		return false;
	}
	
	//请求服务器
	var postdata = "platformOrderIds="+platformOrderIds;
	HttpUtil.post(Http.printOrderNames(), postdata, function(data){
		if(data){
			if(data.rs == 1){
				var errorList = data.data.errorList;
				var ids = data.data.ids;
				if(errorList.length > 0){
					notFoundPlatformOrderIds(errorList);
					return false;
				}else{
					if(t_type == 1 || t_type == 4){
						window.open(ctx.path + "/api/orders/printOrders.json?printOrdersIds=" + ids + "&printTemps=" + printTemps );
					}else if(t_type == 2){
						window.open(ctx.path + "/api/orders/printOrdersInvoice.json?printOrdersIds=" + ids + "&printTemps=" + printTemps + "&GDdeclareFeeOrigin=" + GDdeclareFeeOrigin );
					}else if(t_type == 3){
						window.open(ctx.path + "/api/orders/printOrdersLogistics.json?printOrdersIds=" + ids );
					}
				}
			}
		}
	});
	
}

function setOptions(e){
		var pId = $(e).val();
		if(pId != 0){
			$("#addressId").find("option").each(function(){  
				if($(this).attr("pId") == pId ){
					$(this).css("display","block");
				}else if($(this).attr("pId") == 0 ){
					$(this).css("display","block");
					$(this).prop("selected","selected");
				}else{
					$(this).css("display","none");
				}
			});
			$("#customId").find("option").each(function(){  
				if($(this).attr("pId") == pId ){
					$(this).css("display","block");
				}else if($(this).attr("pId") == 0 ){
					$(this).css("display","block");
					$(this).prop("selected","selected");
				}else{
					$(this).css("display","none");
				}
			});
			$("#deliverId").find("option").each(function(){  
				if($(this).attr("pId") == pId ){
					$(this).css("display","block");
				}else if($(this).attr("pId") == 0 ){
					$(this).css("display","block");
					$(this).prop("selected","selected");
				}else{
					$(this).css("display","none");
				}
			});
		}else{

			$("#addressId").find("option").each(function(){  
					$(this).css("display","block");
			});
			$("#customId").find("option").each(function(){  
				$(this).css("display","block");
		});
			$("#deliverId").find("option").each(function(){  
				$(this).css("display","block");
		});
		}
}

//导出订单
function gotoExportOrderTemplate(){
	parentIndex = layer.open({
	    title:'订单导出',
	    type: 1,
	    area: ['78%', '90%'],
	    fix: true,
	    maxmin: true,
	    btn:['导出','取消'],
	    yes:function(index, layero){
	    	var params = {};
	    	var fields = $('#pageForm').serializeArray();
	    	$.each( fields, function(i, field){
	    		params[field.name] = $.trim(field.value);
	    	});
	    	$("#exportOrderForm input[name='search']").val(JSON.stringify(params));
	    	$("#exportOrderForm").submit();
	    },
	    content: $("#exportOrder"),
	    success:function(layero, index){
	    	$("#exportOrder :checkbox").prop("checked",false);
			$("#exportOrder #panel_footer").empty();
			resetExportForm();
	    }
	 });
}

//重置导出表单
function resetExportForm(){
	var resetArr = new Array("name","dealNum","payTime","shopName","orderStateCn","ordersMoney","originalMoney","customerId","logistisName","bills","country","countryCn");
	for (var i = 0; i < resetArr.length; i++) {
		var value = resetArr[i];
		var $ele = $(".fieldgroup input[value='"+value+"']");
		$ele.prop("checked",true);
		var label=$ele.next("span").html(),
		text=$ele.val(),
		targetItem = '<span id="'+text+'"><input type="hidden" name="map-name-'+text+'" value="'+label+'"></span>';
		$("#exportOrder #panel_footer").append(targetItem);
	}
} 

$(function(){
	$(".fieldgroup input[name='fieldlabel']").bind("click",function(){
		var label=$(this).next("span").html(),
		text=$(this).val(),
		targetItem = '<span id="'+text+'"><input type="hidden" name="map-name-'+text+'" value="'+label+'"></span>';
		if($(this).prop("checked")){
			$("#exportOrder #panel_footer").append(targetItem);
		}else{
			$("#exportOrder span[id='"+text+"']").remove();
		}
	});
	
	$("input[name='fieldlabel'][value='all']").bind("click",function(){
		if($(this).prop("checked")){
			$("#allfield :checkbox").prop("checked",true);
			for(var i=0;i<$("#allfield .fieldgroup input[name='fieldlabel']").length;i++){
				var uq = $("#allfield .fieldgroup input[name='fieldlabel']").eq(i).val();
				var len = $("#exportOrder #panel_footer span[id='"+uq+"']").length;
				if(len == 0){
					$("#exportOrder #panel_footer").append('<span id="'+uq+'"><input type="hidden" name="map-name-'+uq+'" value="'+$("#allfield .fieldgroup input[name='fieldlabel']").eq(i).next("span").html()+'"></span>');
				}
			}
		}else{
			$("#allfield :checkbox").prop("checked",false);
			$("#exportOrder #panel_footer").empty();
		}
	});
	
	//查询订单总数
	 $.ajax({
         url:ctx.path + "/api/orders/queryOrderCount.do",
         type:"post",
         dataType:"json",
         success:function(data){
      	   if(data && data.rs == 1){
    			var errorList = data.data;
    			for(var i=0; i<errorList.length;i++){
    				$("#grenul").find("#orneNumber_"+errorList[i].p_state).empty().html(errorList[i].order_count);
    			}
	    	}
         }
   });
});