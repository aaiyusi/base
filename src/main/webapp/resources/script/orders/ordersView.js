var grid = {};
var goodsGrid = {};
var orderGrid = {};
$(function(){
	var type = $("#type").val();
	 //校验表单
	$("#updateOrderForm").validate({
		 submitHandler: function(form){
			 $(form).ajaxSubmit({
				 	layerMaskFlag:true,
			        //表单提交成功后的回调
			        success: function(responseText, statusText, xhr, $form){
			        	if(responseText.rs == -1){
			        		return false;
			        	}
			        	if(!checkUtil.isNullValue(type)){
			        	}else{
			        		parent.refreshGrid();//重新加载grid
			        	}
			        	top.toastr.success("编辑订单信息成功");
			        	var oprType = $("#tab-1").find("#oprType").val();
			        	if(oprType == 1){
			        		//继续下一步
			        		nextStep(1);
			        	}
			        }
			    }); 
		 }
	 });
	 
	 //校验表单
	$("#updateOrdersGoodsForm").validate({
		 submitHandler: function(form){
			 $(form).ajaxSubmit({
			        //表单提交成功后的回调
			        success: function(responseText, statusText, xhr, $form){
			        	if(responseText.rs == -1){
			        		return false;
			        	}
			        	if(!checkUtil.isNullValue(type)){
			        	}else{
			        		parent.refreshGrid();//重新加载grid
			        	}
			        	top.toastr.success("编辑商品物流信息成功");
			        }
			    }); 
		 }
	 });
	
	$("body").delegate("#btnCancel","click",function(){
		var index = parent.layer.getFrameIndex(window.name); //先得到当前iframe层的索引
 		 parent.layer.close(index); //再执行关闭
	});
	
	//加载店铺下拉框
	HttpUtil.postSync(ctx.path + "/api/shop/queryAllShopsList.do", "", function(data){
		var optionStr = '<option value="">-请选择-</option>';
		if(data != null && data.rs == 1){
			$.each(data.data,function(i,n){
				optionStr += '<option value="'+n.shop_id+'">'+n.shop_name+'</option>';
			});
		}
		$("#updateOrderForm select[name='shopId']").empty().append(optionStr);
	});
	
	//加载币别下拉框
	HttpUtil.postSync(ctx.path + "/api/rate/queryAllRateList.do", "", function(data){
		var optionStr = '<option value="">-请选择-</option>';
		if(data != null && data.rs == 1){
			$.each(data.data,function(i,n){
				optionStr += '<option value="'+n.rateId+'">'+n.currencyCode+'</option>';
			});
		}
		$("#updateOrderForm select[name='currency']").empty().append(optionStr);
	});
	
	//加载物流渠道下拉框
	HttpUtil.postSync(ctx.path + "/api/logisticsCompany/queryAuthLogistics.do", "", function(data){
		var optionStr = '<option value="">-请选择-</option>';
		if(data != null && data.rs == 1){
			$.each(data.data,function(i,n){
				optionStr += '<option value="'+n.logistics_id+'">'+n.logistics_name+'</option>';
			});
		}
		$("#updateOrdersGoodsForm select[name='logisticsId']").empty().append(optionStr);
	});
	
	//加载包材下拉框
	HttpUtil.postSync(ctx.path + "/api/packing/getPackingListNoPage.do", "", function(data){
		var optionStr = '<option value="">-请选择-</option>';
		if(data != null && data.rs == 1){
			$.each(data.data,function(i,n){
				optionStr += '<option value="'+n.packingId+'">'+n.name+'</option>';
			});
		}
		$("#updateOrdersGoodsForm select[name='packingId']").empty().append(optionStr);
	});
	
	//加载订单信息
	HttpUtil.postSync(ctx.path + "/api/orders/queryOrdersInfoById.do", "ordersId="+oldOrdersId, function(data){
		// 表单数据填充
		$("#updateOrderForm #orderCode").html(data.data.name);
		$("#updateOrderForm #dealNum").html(data.data.dealNum);
		$("#updateOrderForm").fill(data.data);
		$("#updateOrdersGoodsForm").fill(data.data);
	});
});

//修改订单信息
function updateOrder(type){
	//订单状态
	var orderState = $("#updateOrderForm").find("#orderState").val();
	$("#tab-1").find("#oprType").val(type);
	if(checkData()) return;
	if(orderState == 4){//已作废
		if(type == 1){
    		//继续下一步
			nextStep(1);
    	}
	}else{
		$("#updateOrderForm").submit();
	}
}

//下一步
function nextStep(index){
	$("#myTab li:eq("+index+") a").trigger("click");
}

//校验数据格式
function checkData(){
	//客户id
	var customerId = $("#custInfoDiv input[name='customerId']").val();
	//客户名称
	var customerName = $("#custInfoDiv input[name='customerName']").val();
	//客户id
	if(checkUtil.isNullValue(customerId)){
		top.toastr.error("客户ID不能为空！");
		return true;
	}
	
	//客户姓名
	if(checkUtil.isNullValue(customerName)){
		top.toastr.error("客户姓名不能为空！");
		return true;
	}
	return false;
}

//修改商品物流信息
function updateOrderGoods(){
	$("#updateOrdersGoodsForm").submit();
}

//修改商品物流信息
function updateOrderGoodsLogistis(type){
	//订单状态
	var orderState = $("#updateOrderForm").find("#orderState").val();
	if(orderState == 3 || orderState == 4){//已发货、已作废
		if(type == 1){
			nextStep(2);//直接进行下一步
		}
		return false;
	}
	var oprType = $("#updateOrderForm").find("#type").val();
	var flag = true;
	var goodsChild = new Array(); 
	var ordersItem = {};
	var params = {};
	var rowData = $("#jqAddGrid").jqGrid("getRowData");
	$(rowData).each(function(i,n){
		var goodsItem = {};
		var sku = n.sku.split("<br>")[0];
		var $quantity = $("input#quantity"+n.goods_id).val();
		var $price= $("input#price"+n.goods_id).val();
		var $remark= $("input#remark"+n.goods_id).val();
		var $warehouse = $("#warehouseId"+n.goods_id).val();
		var $stock = $("#stockId"+n.goods_id).val();
		if(checkUtil.isNullValue($quantity)){
			top.toastr.error("商品sku【"+sku+"】订购量不能为空！");
			return false;
		}else if(!checkUtil.isInt($quantity)){
			top.toastr.error("商品sku【"+sku+"】订购量只能为数字！");
			return false;
		}
		
		if(checkUtil.isNullValue($price)){
			top.toastr.error("商品sku【"+sku+"】单价不能为空！");
			return false;
		}else if(!checkUtil.isMoney($price)){
			top.toastr.error("商品sku【"+sku+"】的单价输入不正确！");
			return false;
		}
		goodsItem.detailId = n.detail_id;
		goodsItem.orderId = n.order_id;
		goodsItem.goodsId = n.goods_id;
		goodsItem.orderNum = n.order_num;
		goodsItem.count = $quantity;
		goodsItem.price = $price;
		goodsItem.weight = n.weight;
		goodsItem.customsCode = $warehouse;
		goodsItem.spaceId = $stock;
		goodsItem.goodsInfo = $remark;
		goodsItem.sku = sku;
		goodsChild.push(goodsItem);
	});
	
	var fields = $('#updateOrdersGoodsForm').serializeArray();
	$.each( fields, function(i, field){
		ordersItem[field.name] = $.trim(field.value);
	});
	
	//封装参数
	params.itemList = goodsChild;
	params.ordersItem = ordersItem;
	//请求服务器
	$.ajax({  
        url:  ctx.path + "/api/orders/addOrdersGoodsLogistisInfo.do",    //后台webservice里的方法名称  
        type: "post",  
        dataType: "json",  
        layerMaskFlag:true,
        contentType: "application/json;charset=utf-8",  
        traditional: true,  
        data:JSON.stringify(params),
        success: function (data) {
        	if(data.rs == 1){
        		top.toastr.success("修改订单商品信息成功");
        		reloadGrid();
        		if(type == 1){
        			nextStep(2);
        		}
        		if(!checkUtil.isNullValue(oprType)){
        		}else{
        			parent.refreshGrid();//重新加载grid
        		}
        	}else{
        		top.toastr.error("修改订单商品信息失败");
        	}
        },  
        error: function (msg) {  
        	top.toastr.error(msg);
        }  
    }); 
}
//订单日志
function orderLogClick(){
	$.jgrid.defaults.styleUI = 'Bootstrap';
	grid = $("#jqGrid").jqGrid({
		beforeRequest: function(){
			$(".ui-jqgrid .jqgrid-overlay").attr("style","display:block");
		},  		 
		loadComplete: function(xhr){
			$(".ui-jqgrid .jqgrid-overlay").attr("style","display:none");
		},  
		url : ctx.path +'/api/orders/queryOrdersLogList.do?ordersId='+oldOrdersId,
		mtype:"POST",
		datatype : "json",
		height: "calc(100% - 60)",
		colNames : ['日志ID','操作属性', '描述', '操作员','操作时间'],
		colModel : [ 
		         {name : 'logId',index:'logId',hidden:true},
                 {name : 'operationType',index : 'operationType',width : 70},
                 {name : 'content',index : 'content'},
                 {name : 'createUserName',index : 'createUserName',width : 50},
                 {name : 'createDate',index : 'createDate',width : 70,sorttype: "date",formatter:function(cellvalue){
		    		if(cellvalue){
		    			return DateUtil.getSmpFormatDateByLong(cellvalue,true);
		    		}
		    	}}
 	    ],
 	    multiselect:false,
 	    autowidth: true,//自适应宽度 
 	    shrinkToFit: true,
 	    rowNum : 20,
 	    rowList: [10, 20, 50],
 	    rownumbers:true,//添加左侧行号
 	    altRows:true,//设置为交替行表格,默认为false
 	    pager : '#jqGridPager',
 	    viewrecords: true, //是否在浏览导航栏显示记录总数
 	    hidegrid: false,
 	    jsonReader: {
 	    	root: "data.data",// Json数据
 	    	records: "data.totalRows",// 总记录数
 	    	total:"data.totalPages",
 	    	page:"data.page",
 	    	repeatitems: false
 	    },
 	   gridComplete : function(){
 		  var width = $('.jqGrid_wrapper').width();
 		  $('#jqGrid').setGridWidth(width);
 		  $("#jqGrid").jqGrid('setGridHeight',"calc(100% - 60)");
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

}

//屏幕发生变化的时候计算表格高度
$(window).bind('resize', function () {
    var width = $('.jqGrid_wrapper').width();
    $('#jqGrid').setGridWidth(width);
    //var newHeight=$(window).height() - $("#myTab").outerHeight() - 100;
	$("#jqGrid").jqGrid('setGridHeight',"calc(100% - 60)");
});	

//刷新表单
function refreshGrid(){
	grid.trigger("reloadGrid");
}

//商品物流信息
function orderGoodsClick(){
	var isReload = false;
	$.jgrid.defaults.styleUI = 'Bootstrap';
	goodsGrid = $("#jqAddGrid").jqGrid({
			beforeRequest: function(){
				$(".ui-jqgrid .jqgrid-overlay").attr("style","display:block");
			},  		 
			loadComplete: function(xhr){
				$(".ui-jqgrid .jqgrid-overlay").attr("style","display:none");
			},
	        url : ctx.path +'/api/orders/queryOrdersDetailList.do?ordersId='+oldOrdersId,
	        mtype:"POST",
	        datatype : "json",
	        colNames : ['id','订单id','商品id','缩略图','SKU编号','商品信息','商品名称','子交易号','订购量','单价','重量','仓库','仓位','操作'],
	        colModel : [{name : 'detail_id',index:'detail_id',hidden:true},
	                    {name : 'order_id',index:'order_id',hidden:true},
	                    {name : 'goods_id',index:'goods_id',hidden:true},
	                    {name : 'storget_image',index:'storget_image',align:'center',width : 80,formatter: formatImage},
                		{name : 'sku',index:'sku',align:'center',width : 80,formatter:function(cellvalue, options, rowObject){
                			var htmlStr = cellvalue;
                			if(typeof(rowObject.platform_goods_id) != "undefined"){
                				htmlStr = htmlStr + "<br/><a onclick=\"openProductDetailPage('"+ rowObject.e_name +"','"+ rowObject.platform_goods_id +"',"+rowObject.platform_type+")\" title=\"平台链接\">"+rowObject.platform_goods_id+"</a>";
                			}
                			return htmlStr;
                		}},
                		{name : 'goods_info',index:'goods_info',align:'center',width : 100,formatter:function(cellvalue, options, rowObject){
                			if(rowObject.order_state == 3 || rowObject.order_state == 4){
                				return cellvalue;
                			}else{
                				if(checkUtil.isNullValue(cellvalue)){
                					cellvalue = '';
                				}
                				return '<input class="form-control input-sm" id="remark'+rowObject.goods_id+'" type="text" placeholder="输入商品信息" value="'+cellvalue+'">';
                			}
                		}},
                		{name : 'e_name',index:'e_name',align:'center',width : 80},
                		{name : 'order_num',index:'order_num',align:'center',width : 150},
                		{name : 'count',editable: true,index:'count',align:'center',width:120,formatter:function(cellvalue, options, rowObject){
                			if(rowObject.order_state == 3 || rowObject.order_state == 4){
                				return cellvalue;
                			}else{
                				if(!cellvalue) cellvalue = 0;
                				return '<input onblur="" style="width: 80px;" class="form-control text-center input-sm number" id="quantity'+rowObject.goods_id+'" name="quantity['+rowObject.goods_id+']" value="'+cellvalue+'">';
                			}
                		}},
                		{name : 'price',editable: true,index:'price',align:'center',width : 120,formatter:function(cellvalue, options, rowObject){
                			if(rowObject.order_state == 3 || rowObject.order_state == 4){
                				return cellvalue;
                			}else{
                				if(!cellvalue) cellvalue = 0;
                				return '<input class="form-control text-center input-sm" style="width: 80px;" id="price'+rowObject.goods_id+'" name="sellPrice['+rowObject.goods_id+']" value="'+cellvalue+'">';
                			}
                		}},
                		{name : 'weight',index:'weight',align:'center',width : 60},
                		{name : 'customs_code',editable: true,align:'center',index:'customs_code',width : 120,formatter:formatWarehouse},
                		{name : 'space_id',editable: true,align:'center',index:'space_id',width : 120,formatter:formatSpace},
                		{width : 80,align:'center',formatter : function(cellvalue, options, rowObject){
	            			if(rowObject.order_state == 3 || rowObject.order_state == 4){
	            				return "";
	            			}else{
	            				 var buttonHtml = " <a onclick=\"delOrderItem("+ options.rowId +",'"+rowObject.sku+"')\"><i class=\"fa fa-trash\" >删除</i></a>&nbsp;&nbsp;";
	                           	 return buttonHtml;
	            			}
	                    }}
            ],
	        autowidth: true,//自适应宽度
	        viewrecords : false,
	        hoverrows : false,
	        shrinkToFit: true,
	        rownumbers:false,//添加左侧行号
	        jsonReader: {
	 	    	root: "data.data",// Json数据
	 	    	repeatitems: false
	 	    },
	 	   gridComplete:function(){
	 		  isReload = true;
 			 var width = $('.jqOrdersGoodsGrid_wrapper').width();
	 		 $('#jqAddGrid').setGridWidth(width);
	 		 $("#jqAddGrid").jqGrid('setGridHeight','auto');
	 	   }
	    }); 
	if(!isReload){
		reloadGrid();
	}
}

//打开商品的详情页面
function openProductDetailPage(productName, productId, platformType){
	if(typeof(productId) != "undefined" && !checkUtil.isNullValue(productId) && platformType != 0){
		if(platformType == 1){//Aliexpress
			window.open("http://www.aliexpress.com/item/"+productName+"/"+productId+".html");
		}else if(platformType == 2){//Wish
			window.open("https://www.wish.com/c/"+productId);
		}
	}
}

function formatImage(cellValue, options, rowObject) {
	var imgSrc = cellValue;
	if(!cellValue){
		imgSrc = ctx.path + "/resources/images/photo_default.jpg";
	}
	
    var imageHtml = "<img src='" + imgSrc + "' originalValue='暂无图片' style='max-height: 40px;max-width: 40px;vertical-align: middle;'/>";
    return imageHtml;
}

function formatWarehouse(cellValue, options, rowObject){
	if(rowObject.order_state == 3 || rowObject.order_state == 4){
		if(rowObject.whouse_name){
			return rowObject.whouse_name;
		}else{
			return '无';
		}
	}else{
		var spaceId = checkUtil.isNullValue(rowObject.space_id) ? 0 : rowObject.space_id;
		var selectHtml = '<select class="form-control input-sm" onchange="changeOrderItemWarehouse(this.value,'+spaceId+','+rowObject.goods_id+')" id="warehouseId'+rowObject.goods_id+'" name="">';
		selectHtml+= loadOrderWare(rowObject.goods_id,cellValue);
		selectHtml+= '</select>';
		return selectHtml;
	}
}

function formatSpace(cellValue, options, rowObject){
	if(rowObject.order_state == 3 || rowObject.order_state == 4){
		if(rowObject.space_code){
			return rowObject.space_code;
		}else{
			return '无';
		}
	}else{
		var selectHtml = '<select id="stockId'+rowObject.goods_id+'" class="form-control input-sm" name="">';
		selectHtml += loadOrderSpace(rowObject.customs_code,cellValue,rowObject.goods_id);
		selectHtml+= '</select>';
		return selectHtml;
	}
}

function loadOrderWare(goodsId,cellValue){
	var optionStr = "<option value=''>-请选择-</option>";
	if(goodsId){
		$.ajax({
	        url:  ctx.path +'/api/goodsStorage/queryWhouseListByGoodsId.do',
	        async: false,
	        dataType: 'json',
	        type: 'POST',
	        data: {
	        	"goodsId" : goodsId
	        },
	        success: function(data){
	        	if(data.rs == 1){
	        		for (var i = 0; i < data.data.length; i++) {
						var temp = data.data[i];
						if(temp.whouseId == cellValue){
							optionStr += "<option value='"+temp.whouseId+"' selected>"+temp.whouseName+"</option>";
						}else{
							optionStr += "<option value='"+temp.whouseId+"'>"+temp.whouseName+"</option>";
						}
					}
	        	}
	        },
	        error: function(jqXHR , textStatus , errorThrown){
	        	top.toastr.error("操作失败");
	        }
	      });
	}
	return optionStr;
}

function loadOrderSpace(whouseId,cellValue,goodsId){
	var optionStr = "<option value=''>-请选择-</option>";
	if(whouseId){
		$.ajax({
	        url:  ctx.path +'/api/goodsStorage/querySpaceListByWhouseId.do',
	        async: false,
	        dataType: 'json',
	        type: 'POST',
	        data: {
	        	"whouseId" : whouseId,
	        	"goodsId" : goodsId
	        },
	        success: function(data){
	        	if(data.rs == 1){
	        		for (var i = 0; i < data.data.length; i++) {
						var temp = data.data[i];
						if(temp.spaceId == cellValue){
							optionStr += "<option value='"+temp.spaceId+"' selected>"+temp.spaceCode+"</option>";
						}else{
							optionStr += "<option value='"+temp.spaceId+"'>"+temp.spaceCode+"</option>";
						}
					}
	        	}
	        },
	        error: function(jqXHR , textStatus , errorThrown){
	        	top.toastr.error("操作失败");
	        }
	      });
	}
	return optionStr;
}

function changeOrderItemWarehouse(whouseId,spaceId,goodsId){
	var optionStr = "";
	if(whouseId){
		$.ajax({
	        url:  ctx.path +'/api/goodsStorage/querySpaceListByWhouseId.do',
	        async: false,
	        dataType: 'json',
	        type: 'POST',
	        data: {
	        	"whouseId" : whouseId,
	        	"goodsId" : goodsId
	        },
	        success: function(data){
	        	if(data.rs == 1){
	        		for (var i = 0; i < data.data.length; i++) {
						var temp = data.data[i];
						if(temp.spaceId == spaceId){
							optionStr += "<option value='"+temp.spaceId+"' selected>"+temp.spaceCode+"</option>";
						}else{
							optionStr += "<option value='"+temp.spaceId+"'>"+temp.spaceCode+"</option>";
						}
					}
	        		
	        		$("#stockId"+goodsId).empty().append(optionStr);
	        	}
	        },
	        error: function(jqXHR , textStatus , errorThrown){
	        	top.toastr.error("操作失败");
	        }
	      });
	}else{
		optionStr = "<option value=''>-请选择-</option>";
		$("#stockId"+goodsId).empty().append(optionStr);
	}
	return optionStr;
}

//保存
function saveOrderItem(detailId,goodsSku){
	var $quantity = $("input#quantity"+detailId).val();
	var $remark= $("input#remark"+detailId).val();
	var $price= $("input#price"+detailId).val();
	var $warehouse = $("#warehouseId"+detailId).val();
	var $stock = $("#stockId"+detailId).val();
	if(checkUtil.isNullValue($quantity)){
		top.toastr.error("订购量不能为空！");
		return false;
	}else if(!checkUtil.isInt($quantity)){
		top.toastr.error("订购量只能为数字！");
		return false;
	}
	
	if(checkUtil.isNullValue($price)){
		top.toastr.error("单价不能为空！");
		return false;
	}else if(!checkUtil.isMoney($price)){
		top.toastr.error("请输入正确的单价！");
		return false;
	}
	
	$.ajax({
        url:  ctx.path +'/api/orders/updateOrderGoodsItem.do',
        dataType: 'json',
        type: 'POST',
        data: {
        	"detailId" : detailId,
        	"count" : $quantity,
        	"sku" : goodsSku,
        	"goodsInfo" : $remark,
        	"price" :  $price,
        	"customsCode" : $warehouse,
        	"spaceId" : $stock
        },
        success: function(data){
        	if(data.rs == 1){
        		$("#goods_sku").val("");
        		$("#goods_count").val(1);
        		top.toastr.success("修改订单商品成功");
        		//reloadGrid();
        	}
        },
        error: function(jqXHR , textStatus , errorThrown){
        	top.toastr.error("操作失败");
        }
      });
}

//删除
function delOrderItem(rowId,goodsSku){
	var row = $("#jqAddGrid").getRowData(rowId);
	var detailId = row.detail_id;
	if(checkUtil.isNullValue(detailId)){
		$("#jqAddGrid").jqGrid("delRowData", rowId);
	}else{
		var delContext = "确认要将该商品从订单中作废吗？";
		  layer.confirm(delContext, {icon: 3, title:"提示"},
		    function(index){
			  $.get(ctx.path +"/api/orders/updateOrderItemState.do?detailId="+detailId+"&state=0&sku="+goodsSku,
	  			function(result){
	  				if(result.rs==1){
	  					 $("#jqAddGrid").jqGrid("delRowData", rowId);
	  					  top.toastr.success("删除商品成功！");
						}               
				  },"json"); 
			  layer.close(index);
	  });
	}
}

//还原
function renewOrderItem(detailId,goodsSku){
	if(!detailId){
		top.toastr.error("订单明细不存在！");
		return false;
	}
	
	var delContext = "确认要还原该商品吗？";
	  layer.confirm(delContext, {icon: 3, title:"提示"},
	    function(index){
		  $.get(ctx.path +"/api/orders/updateOrderItemState.do?detailId="+detailId+"&state=1&sku="+goodsSku,
  			function(result){
  				if(result.rs==1){
  						reloadGrid();
  						top.toastr.success("操作成功！");
					}               
			  },"json"); 
		  layer.close(index);
  });
}

//屏幕发生变化的时候计算表格高度
$(window).bind('resize', function () {
    var width = $('.jqOrdersGoodsGrid_wrapper').width();
    $('#jqAddGrid').setGridWidth(width);
    $("#jqAddGrid").jqGrid('setGridHeight','auto');
    var newwidth = $('.jqRelateGrid_wrapper').width();
	$('#jqRelateGrid').setGridWidth(newwidth);
	$("#jqRelateGrid").jqGrid('setGridHeight','auto');
});

//刷新表单
function reloadGrid(){
	goodsGrid.trigger("reloadGrid");
}

//添加商品订单
function addOrderGoods(){
	var goodsSku = $.trim($("#goods_sku").val());
	var goodsCount = $("#goods_count").val();
	//判断sku是否为空
	if(checkUtil.isNullValue(goodsSku)){
		top.toastr.error("sku编号不能为空！");
		return false;
	}
	
	//判断订购量是否为空
	if(checkUtil.isNullValue(goodsCount)){
		top.toastr.error("订购量不能为空！");
		return false;
	}else if(!checkUtil.isNumber(goodsCount)){
		top.toastr.error("订购量只能为数字！");
		return false;
	}
	
	//根据sku查询商品信息
	HttpUtil.post(ctx.path +"/api/orders/queryGoodsInfoBySku.do", "sku="+goodsSku, function(data){
		if(data.rs == 1){
			var childId = data.data.childId;
			var entity = data.data.goods;
			if(entity == null){
				top.toastr.error("库存SKU不存在！");
				$("#goods_sku").val("");
				$("#goods_count").val(1);
	    		return false;
			}
			if(entity.saleState == 5){//停售状态
				top.toastr.error("此SKU为停售状态不能添加！");
				$("#goods_sku").val("");
				$("#goods_count").val(1);
	    		return false;
			}
			
			var rowData = $("#jqAddGrid").getCol("sku",true);
			var isExists = false;
			$.each(rowData, function(i,n){ 
				if (n.value == goodsSku) {isExists = true;}
			});
			
			//sku
			if(isExists){
				top.toastr.error("订单已存在该库存SKU，请勿重复添加！");
				$("#goods_sku").val("");
				$("#goods_count").val(1);
	    		return false;
			}
			
			 var ids = $("#jqAddGrid").jqGrid('getDataIDs');  
             //获得当前最大行号（数据编号）  
             var rowid = Math.max.apply(Math,ids);  
             if(rowid == -Infinity){
             	rowid = 0;
             }
             //获得新添加行的行号（数据编号）  
             newrowid = rowid+1;  
             var dataRow = {    
            		detail_id : "",
            		order_id : oldOrdersId,
            		goods_id : entity.goodsId,
            		storget_image : entity.storgetImage,  
            		sku : entity.sku,  
            		e_name : entity.name,  
             		goods_info : '(追加商品)',  
             		order_num : childId,
             		count :goodsCount,  
             		price : typeof(entity.price) != "undefined" ? entity.price : 0,  
             		weight: typeof(entity.weight) != "undefined" ? entity.weight : 0,
             		customs_code : '',
             		space_id :''
             };      
            
             //将新添加的行插入到第一列  
             $("#jqAddGrid").jqGrid('addRowData', newrowid, dataRow);
             $("#goods_sku").val("");
			 $("#goods_count").val(1);
		}else{
			top.toastr.error("库存SKU不存在！");
    		return false;
		}
	});
//	$.ajax({
//        url:  ctx.path +'/api/orders/addOrderGoodsItem.do',
//        async: true,
//        dataType: 'json',
//        type: 'POST',
//        data: {
//        	"orderId" : oldOrdersId,
//        	"count" : goodsCount,
//        	"sku" : goodsSku
//        },
//        success: function(data){
//        	if(data.rs == 1){
//        		$("#goods_sku").val("");
//        		$("#goods_count").val(1);
//        		top.toastr.success("添加订单商品成功");
//        		reloadGrid();
//        	}
//        },
//        error: function(jqXHR , textStatus , errorThrown){
//        	top.toastr.error("操作失败");
//        }
//      });
}

//查询关联订单信息
function orderRelateClick(){
	$.jgrid.defaults.styleUI = 'Bootstrap';
	orderGrid = $("#jqRelateGrid").jqGrid({
			beforeRequest: function(){
				$(".ui-jqgrid .jqgrid-overlay").attr("style","display:block");
			},  		 
			loadComplete: function(xhr){
				$(".ui-jqgrid .jqgrid-overlay").attr("style","display:none");
			},  
	        url : ctx.path +'/api/orders/queryRelateOrderList.do?ordersId='+oldOrdersId,
	        mtype:"POST",
	        datatype : "json",
	        colNames : ['id','订单编号','状态','货运方式','货运单号','金额','重量','支出运费'],
	        colModel : [{name : 'ordersId',index:'ordersId',hidden:true},
	                    {name : 'name',index:'name',formatter:function(cellvalue,options,rowObject){
	        	    		return "<a onclick='loadOrderViewPage("+ rowObject.ordersId +")'>"+cellvalue+"</a>";
	        	    	}},
                		{name : 'orderState',index:'orderState',width : 100,formatter:function(cellvalue, options, rowObject){
                			if(cellvalue == 0){
                				return "待处理";
                			}else if(cellvalue == 1 || cellvalue == 2){
                				return "配货中";
                			}else if(cellvalue == 3){
                				return "已发货";
                			}else if(cellvalue == 4){
                				return "已作废";
                			}else if(cellvalue == 5){
                				return "处理失败";
                			}
                		}},
                		{name : 'logisticsName',index:'logisticsName',width : 100},
                		{name : 'bills',index:'bills',width : 100},
                		{name : 'payment',editable: true,index:'payment',width:80,formatter:function(cellvalue, options, rowObject){
                			if(cellvalue){
                				return cellvalue.add(rowObject.customsCode).toFixed(3);
                			}else{
                				return "0.000";
                			}
                		}},
                		{name : 'weight',editable: true,index:'weight',width : 80,formatter:function(cellvalue, options, rowObject){
                			if(cellvalue){
                				return cellvalue.toFixed(2) + "g";
                			}else{
                				return "0.00g";
                			}
                		}},
                		{name : 'actualFreight',index:'actualFreight',width : 80,formatter:function(cellvalue, options, rowObject){
                			if(cellvalue){
                				return cellvalue.toFixed(3);
                			}else{
                				return "0.000";
                			}
                		}}
            ],
	        autowidth: true,//自适应宽度
	        viewrecords : false,
	        hoverrows : false,
	        shrinkToFit: true,
	        rownumbers:false,//添加左侧行号
	        jsonReader: {
	 	    	root: "data.data",// Json数据
	 	    	repeatitems: false
	 	    },
	 	   gridComplete:function(){
	 		  var width = $('.jqRelateGrid_wrapper').width();
	 			$('#jqRelateGrid').setGridWidth(width);
	 			$("#jqRelateGrid").jqGrid('setGridHeight','auto');
	 	   }
	    });
}

//查看订单详情
function loadOrderViewPage(ordersId){
	if(ordersId){
		parentIndex = parent.layer.open({
		    title:'订单详情',
		    type: 2,
		    area: ['90%', '90%'],
		    fix: true,
		    maxmin: true,
		    content: ctx.path + '/api/orders/loadOrderViewPage.do?ordersId='+ordersId
		 });
	}
}

//物流跟踪信息
function orderLogicClick(){
	var bills = $("#updateOrdersGoodsForm").find("input[name='bills']").val(); 
	 if(!checkUtil.isNullValue(bills)){
		   YQV5.trackSingle({
		        YQ_ContainerId:"YQContainer",
		        YQ_Height:"100%",
		        YQ_Fc:"0",
		        YQ_Lang:"zh-cn",
		        YQ_Num:bills
		    });
	   }else{
		   $("#YQContainer").empty().html("暂无运单号");
	   }
}

//给Number类型增加一个mul方法，调用起来更加方便。 
Number.prototype.add = function (arg){ 
  return accAdd(arg, this); 
} 

//加法函数，用来得到精确的加法结果 
//说明：javascript的加法结果会有误差，在两个浮点数相加的时候会比较明显。这个函数返回较为精确的加法结果。 
//调用：accAdd(arg1,arg2) 
//返回值：arg1加上arg2的精确结果 
function accAdd(arg1,arg2){ 
  var r1,r2,m; 
  try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0} 
  try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0} 
  m=Math.pow(10,Math.max(r1,r2)) 
  return (arg1*m+arg2*m)/m 
}