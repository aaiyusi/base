var grid = {};
var Scan = {
	initTable : function(){
		$.jgrid.defaults.styleUI = 'Bootstrap';
		grid = $("#jqGrid").jqGrid({
			beforeRequest: function(){
				$(".ui-jqgrid .jqgrid-overlay").attr("style","display:block");
			},  		 
			loadComplete: function(xhr){
				$(".ui-jqgrid .jqgrid-overlay").attr("style","display:none");
			},  
	        url : '',
	        mtype:"POST",
	        datatype : "json",
	        colNames : ['id','缩略图','SKU编号','商品名称','订购量','重量','包材','待检量','状态'],
	        colModel : [{name : 'detailId',index:'detailId',hidden:true},
	                    {name : 'storgetImage',index:'storgetImage',width : 70,formatter: formatImage},
                		{name : 'sku',index:'sku',width : 100},
                		{name : 'eName',index:'eName'},
                		{name : 'count',editable: true,index:'count',width:70,formatter:function(cellValue, options, rowObject){
                			return '<span class="text-primary num-wait">'+cellValue+'</span>';
                		}},
                		{name : 'weight',index:'weight',hidden:true},
                		{name : 'packName',index:'packName',hidden:true},
                		{name : 'waitCount',editable: true,index:'waitCount',width:70,formatter:function(cellValue, options, rowObject){
                			return '<span class="text-primary num-result">'+cellValue+'</span>';
                		}},
                		{name : 'checkStatus',editable: true,index:'checkStatus',width:70}
            ],
	        autowidth: true,//自适应宽度
	        viewrecords : false,
	        shrinkToFit: true,
	        hoverrows : false,
	        rownumbers:false,//添加左侧行号
	        jsonReader: {
	 	    	root: "data.data",// Json数据
	 	    	userdata: "data.temp",
	 	    	repeatitems: false
	 	    },
	 	   gridComplete:function(){
	 		  var width = $('.jqGrid_wrapper').width();
			    $('#jqGrid').setGridWidth(width);
			   var data = $("#jqGrid").getGridParam('userData');
			   $("#scan-info").find("#skucount").html(data.total);
	 	   }
	    }); 
	    $("#jqGrid").jqGrid('setGridHeight',"auto");
	},
	scan_order : function(){
		$("#scan-order").keypress(function(e){
			var key = e.which;
			if(key == 13){//回车键
				if(!checkUtil.isNullValue($("#scan-order").val())){
					var orderid=$.trim($("#scan-order").val());
					var temp=/^[A-Za-z0-9-_]+$/;
					if(temp.test(orderid)){
						$.ajax({
							type:"POST",
							url: ctx.path + "/api/orders/findOrderAndSell.do",
							data:"date="+new Date()+"&ordersCode="+orderid,
							cache:false,
							dataType:"json",
							success:function(data){
								if(data != null && data.rs == 1){
									var orderdetail = data.data;
									$("#scan-sku").focus();
									$("#scan_result").addClass("dis-none");
									$("#scan-info").removeClass("dis-none");
									$("#scan-info").find("#orderlabel").text(orderdetail.name);
									var ordersId = orderdetail.ordersId;
									$(".main_con #orderId").val(ordersId);
									$("#jqGrid").jqGrid('setGridParam', {
										url : ctx.path + "/api/orders/findOrderGoods.do",
										postData : {
											'ordersId' : ordersId
										}
									}).trigger("reloadGrid"); // 重新载入
									
									if(orderdetail.orderState == 1){
										$("#orderStatus").html("待配货");
									}else if(orderdetail.orderState == 2){
										$("#orderStatus").html("配货中");
									}
									
									//订单备注
									if(orderdetail.remark){
										$("#orderDescr").html(orderdetail.remark);
									}else{
										$("#orderDescr").html("无");
									}
									
									if(orderdetail.country || orderdetail.province || orderdetail.city || orderdetail.address){
										$("#orderAddress").html(orderdetail.country + "  " + orderdetail.province + "  " + orderdetail.city + "  " + orderdetail.address);
									}else{
										$("#orderAddress").html("无");
									}
									
									//显示订单和SKU列表
									$("#scanorder").fadeIn();
									
									$("#noorder").fadeOut();
									$("#scan-order").attr("disabled","disabled");
								}
							}
						});
					}else{
						top.toastr.error("输入的订单编号或运单号含有特殊字符，请检查后再操作!");
						$("#scan-order").val("");
						$("#scan-order").focus();
					}
				}else{
					top.toastr.error("未输入订单编号或运单号，请重新扫描!");
					$("#scan-order").val("");
					$("#scan-order").focus();
				}
			}
		});
	},
	scan_sku : function(){
		$("#scan-sku").keypress(function (e){
			var key = e.which;
			//如果是回车键
			if (key == 13){
				 var sku=$.trim($("#scan-sku").val());
				 var rowData = $("#jqGrid").getCol("sku",true);
				 var rowId = null;
				 $.each(rowData, function(i,n){ 
					if (n.value == sku) {rowId = n.id}
				});
				
				if(!checkUtil.isNullValue($("#scan-sku").val())){
					if(rowId){
						var row = $("#jqGrid").getRowData(rowId);
						var result = delHtmlTag(row.waitCount);
						if(result != 0){
							$("#jqGrid").setRowData(rowId,{"waitCount":result - 1});
							result = result - 1;
							if(result == 0){//已签完
								$("#jqGrid").setRowData(rowId,{"checkStatus":"已验完"});
								$("#jqGrid tbody tr[id='"+rowId+"']").css("background-color","#E03549");
								$("#scanitem-info").fadeIn();
								$("#scanitem-info #skuCode").html(row.sku);
								$("#scanitem-info #sukWight").html(row.weight);
								if(row.packName){
									$("#scanitem-info #sukPack").html(row.packName);
								}else{
									$("#scanitem-info #sukPack").html('无');
								}
								
								$("#scan-sku").val("");
								
								//待验量
								var skuWaitCount = 0;
								var rowWaitCount = $("#jqGrid").getCol("waitCount",true);
								$.each(rowWaitCount, function(i,n){ 
									if (delHtmlTag(n.value)) {skuWaitCount = skuWaitCount + delHtmlTag(n.value)};
								});
								
								//表示已全部验完
								if(skuWaitCount == 0){
									$("#scan-order").removeAttr("disabled");
									var orderid=$(".main_con #orderId").val();
									$.ajax({
										type:"POST",
										url:ctx.path + "/api/orders/packInspect.do",
										data:"ordersId="+orderid+"&isChecked=1",
										cache:false,
										dataType:"json",
										success:function(data){
											if(data != null && data.rs == 1){
												$("#scan_result,#scan-info").fadeOut();
												$("#scan_success #orderCode").html($("#scan-order").val());
												$("#scan_success").fadeIn();
												$("#scan-sku").val("");
												$("#scan-order").val("").focus();
												$("#scanorder").fadeOut();
												//清空表格的数据
												$("#jqGrid").jqGrid("clearGridData");
												top.toastr.success("该商品扫描成功！");
											}else{
												top.toastr.error("数据库更改验货状态失败!");
												$("#scan-sku").val("");
												$("#scan-sku").focus();
											}
										}
									});
								}else{
									top.toastr.success("验货成功！");
								}
							}else{//还未全部验完
								$("#jqGrid").setRowData(rowId,{"checkStatus":"检货中"});
								$("#scanitem-info").fadeIn();
								$("#scanitem-info #skuCode").html(row.sku);
								$("#scanitem-info #sukWight").html(row.weight);
								if(row.packName){
									$("#scanitem-info #sukPack").html(row.packName);
								}else{
									$("#scanitem-info #sukPack").html('无');
								}
								top.toastr.success("验货成功！");
								$("#scan-sku").val("");
								$("#scan-sku").focus();
							}
						}else{
							top.toastr.error("该SKU已验货完成，请勿重复扫描!");
							$("#scan-sku").val("");
							$("#scan-sku").focus();
							return false;
						}
					}else{
						top.toastr.error("订单中不存在此SKU【"+sku+"】请重新扫描!");
						$("#scan-sku").val("");
						$("#scan-sku").focus();
						return false;
					}
				}else{
					top.toastr.error("商品编号不能为空!");
				}
			}
		});
	},
	reset_scan : function(){
		$("#reset_btn").bind("click",function(){
			$("#noorder").fadeIn();
			$("#scanorder").fadeOut();
			$("#scan-order").removeAttr("disabled");
			$("#scan-sku").val("");
			$("#scan-order").val("").focus();
			//top.toastr.success("重置成功！");
		});
	}
}

//屏幕发生变化的时候计算表格高度
$(window).bind('resize', function () {
    var width = $('.jqGrid_wrapper').width();
    $('#jqGrid').setGridWidth(width);
    var newHeight=top.getFrameHeight() - $("#scan-heater").outerHeight() - 100;
	$("#jqGrid").jqGrid('setGridHeight',"auto");
});	

//刷新表单
function refreshGrid(){
	grid.trigger("reloadGrid");
}

function formatImage(cellValue, options, rowObject) {
	var imgSrc = cellValue;
	if(!cellValue){
		imgSrc = ctx.path + "/resources/images/photo_default.jpg";
	}
    var imageHtml = "<img src='" + imgSrc + "' originalValue='暂无图片' style='max-height: 40px;max-width: 40px;vertical-align: middle;' />";
    return imageHtml;
}

function delHtmlTag(str){
  return str.replace(/<[^>]+>/g,"");//去掉所有的html标记
}