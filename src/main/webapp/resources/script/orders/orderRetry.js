var grid = {};
$(function(){
	$.jgrid.defaults.styleUI = 'Bootstrap';
	grid = $("#jqGrid").jqGrid({
			beforeRequest: function(){
				$(".ui-jqgrid .jqgrid-overlay").attr("style","display:block");
			},  		 
			loadComplete: function(xhr){
				$(".ui-jqgrid .jqgrid-overlay").attr("style","display:none");
			},  
	        url : ctx.path +'/api/orders/queryOrderGoodsList.do?ordersId='+oldOrdersId,
	        mtype:"POST",
	        height:"100%",
	        datatype : "json",
	        colNames : ['id','SKU编号','中文名称','单价','重量','数量','重发数量'],
	        colModel : [{name : 'detailId',index:'detailId',hidden:true},
                		{name : 'sku',index:'sku',width : 80},
                		{name : 'eName',index:'eName',},
                		{name : 'price',editable: true,index:'price',width : 50},
                		{name : 'weight',index:'weight',width : 50,formatter:function(cellvalue, options, rowObject){
                			return (rowObject.count * cellvalue);
                		}},
                		{name : 'count',editable: true,index:'count',width:50},
                        {name : 'waitCount',index:'waitCount',width:80,formatter:function(cellvalue, options, rowObject){
                			return '<input onblur="" style="width: 100px;display:none;" class="form-control text-center input-sm number" id="count'+rowObject.detailId+'" name="quantity['+rowObject.detailId+']" value="'+cellvalue+'">';
                		}}
            ],
            multiselect:true,
	        autowidth: true,//自适应宽度
	        viewrecords : false,
	        hoverrows : false,
	        shrinkToFit: true,
	        rownumbers:true,//添加左侧行号
	        jsonReader: {
	 	    	root: "data.data",// Json数据
	 	    	repeatitems: false
	 	    },
	 	   gridComplete:function(){
	 		  var width = $('.jqGrid_wrapper').width();
	 			$('#jqGrid').setGridWidth(width);
	 			$("#jqGrid").jqGrid('setGridHeight','auto');
	 	   },
	 	  onSelectRow:function(rowid,status){
	 		 var row = $("#jqGrid").getRowData(rowid);
	 		 var detailId = row.detailId;
	 		  if(status){
	 			  $("#count"+detailId).show();
	 		  }else{
	 			 $("#count"+detailId).hide();
	 		  }
	 	  },
	 	 onSelectAll:function(aRowids,status){
	 		 $.each(aRowids,function(i,n){
	 			 var row = $("#jqGrid").getRowData(n);
		 		 var detailId = row.detailId;
		 		  if(status){
		 			  $("#count"+detailId).show();
		 		  }else{
		 			 $("#count"+detailId).hide();
		 		  }
	 		 });
	 	 }
	    }); 
	
	//屏幕发生变化的时候计算表格高度
	$(window).bind('resize', function () {
	    var width = $('.jqGrid_wrapper').width();
	    $('#jqGrid').setGridWidth(width);
	    $("#jqGrid").jqGrid('setGridHeight','auto');
	});
	
	$("#retryForm").on("click",".btn-cancel",function(){
		var index = parent.layer.getFrameIndex(window.name); //先得到当前iframe层的索引
 		 parent.layer.close(index); //再执行关闭
	});
	
	var splitSubmit=true;
	$("#retryForm").on("click","#btnSure",function(){
		var logisticsVal = $("#retryForm").find("select[name=logisticsId]").val();
		if(checkUtil.isNullValue(logisticsVal)){
			top.toastr.error("请选择物流渠道!");
			return false;
		}
		
		var selRows = grid.jqGrid('getGridParam', 'selarrrow');  //选中行id数组
	    if(selRows.length <= 0){
	    	top.toastr.error("请选择要重发的商品！");
	    	splitSubmit=false;
	    	return false;
	    }
	    
	    var fee = $("#retryForm").find("input[name=shippingCost]").val();
	    if(!checkUtil.isNullValue(fee)){
	    	if(!checkUtil.isMoney(fee)){
	    		top.toastr.error("请输入正确的运费金额！");
		    	splitSubmit=false;
		    	return false;
	    	}
	    }
	    
	    var len = selRows.length;
	    var data='';
	    for(var i = 0;i < len ;i ++) {
		    var tempId = selRows[i];
		    var row = grid.jqGrid("getRowData",tempId);
		    var detailId = row.detailId;
		    var skuNumber = row.count;//获取选择行数据id
		    var newNumber = $("#count"+detailId).val();
		    if(checkUtil.isNullValue(newNumber) || newNumber == "0" || newNumber == 0){
		    	top.toastr.error("重发数量不能为0或为空！");
		    	splitSubmit=false;
		    	return false;
		    }
		    
		    if(newNumber>skuNumber){
		    	top.toastr.error("重发数量不能大于原数量！");
		    	splitSubmit=false;
		    	return false;
		    }
		    
		    data+=";"+detailId+","+newNumber;
		    splitSubmit=true;
		}
	    
	    var postDta = "ordersId="+$("#orderId").val()+"&orderSplitData="+data.substr(1)+"&remark="+$("#retryForm").find("input[name=remark]").val();
	    postDta+= "&logisticsId="+$("#retryForm").find("select[name=logisticsId]").val()+"&trackNumber="+$("#retryForm").find("input[name=trackNumber]").val()+"&packageId="+$("#retryForm").find("select[name=packingId]").val()+"&shippingCost="+$("#retryForm").find("input[name=shippingCost]").val()+"&exceptionReason="+$("#retryForm").find("select[name=exceptionReasonId]").val();
	    if(splitSubmit){
	    	HttpUtil.post(Http.retryOrder(), postDta, function(data){
	    		if(data.rs == 1){
	    			top.toastr.success("重发订单成功！");
	    			parent.refreshGrid();//重新加载grid
	    			var index = parent.layer.getFrameIndex(window.name); //先得到当前iframe层的索引
	    	 		parent.layer.close(index); //再执行关闭
	    		}
	    	});
	    }
	});
	
	//加载物流渠道下拉框
	HttpUtil.post(Http.queryAuthLogistics(), "", function(data){
		var optionStr = '<option value="">-请选择-</option>';
		if(data != null && data.rs == 1){
			$.each(data.data,function(i,n){
				optionStr += '<option value="'+n.logistics_id+'">'+n.logistics_name+'</option>';
			});
		}
		$("#retryForm select[name='logisticsId']").empty().append(optionStr);
	});
	
	//加载包材下拉框
	HttpUtil.post(Http.getPackingListNoPage(), "", function(data){
		var optionStr = '<option value="">-请选择-</option>';
		if(data != null && data.rs == 1){
			$.each(data.data,function(i,n){
				optionStr += '<option value="'+n.packingId+'">'+n.name+'</option>';
			});
		}
		$("#retryForm select[name='packingId']").empty().append(optionStr);
	});
});

var Http = {
		retryOrder : function(){
			return ctx.path + "/api/orders/retryOrder.do";
		},
		queryAuthLogistics : function(){
			return ctx.path + "/api/logisticsCompany/queryAuthLogistics.do";
		},
		getPackingListNoPage : function(){
			return ctx.path + "/api/packing/getPackingListNoPage.do";
		}
};