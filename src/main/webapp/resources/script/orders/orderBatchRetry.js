$(function(){
	$("#batchRetryForm").on("click",".btn-cancel",function(){
		var index = parent.layer.getFrameIndex(window.name); //先得到当前iframe层的索引
 		 parent.layer.close(index); //再执行关闭
	});
	$.each(ids,function(i,n){
		loadGoodsItem(n);
		//屏幕发生变化的时候计算表格高度
		$(window).bind('resize', function () {
		    var width = $('#jqGrid_wrapper'+n).width();
		    $('#jqGrid'+n).setGridWidth(width);
		    $("#jqGrid"+n).jqGrid('setGridHeight','auto');
		});
	});
	
	//显示&关闭商品列表
	$("#batchRetryForm").on("click",".panel-toolbar-title",function(){
		$(this).children(".unfoldicon").toggleClass("fa-plus-circle fa-minus-circle").closest(".panel").find(".panel-collapse").toggle();
	});
	
	//窗口内订单全选
	$("#checkAllRetry").bind("click",function(){
		var sort=0, num=0;
		if ($(this).prop("checked")) {
			$.each(ids,function(i,n){
				$('#jqGrid_wrapper'+n+' thead').find("#cb_jqGrid"+n).prop("checked", true);
				var idArr =  $('#jqGrid'+n).jqGrid('getDataIDs');
				$.each(idArr,function(key,value){
					$('#jqGrid'+n).setSelection(value,true);
					sort += 1;
					var row = $('#jqGrid'+n).getRowData(value);
					var detailId = row.detailId;
					num += parseInt($("#count"+detailId).val());
				});
			});
			
		} else {
			$.each(ids,function(i,n){
				$('#jqGrid_wrapper'+n+' thead').find("#cb_jqGrid"+n).prop("checked", false);
				var idArr =  $('#jqGrid'+n).jqGrid('getDataIDs');
				$.each(idArr,function(key,value){
					$('#jqGrid'+n).setSelection(value,false);
				});
			});
		}
		
		$("#batchRetryForm .retrySort").text(sort);
		$("#batchRetryForm .retryNumber").text(num);
	});
	
	//批量标记为已发货
	$("#mark_sendAll").bind("click",function(){
		if ($(this).prop("checked")){
			$("input[name^='markSend']").prop("checked", true);
		} else {
			$("input[name^='markSend']").prop("checked", false);
		}
	});
	$("#batchRetryForm").on("click","input[name^='markSend']",function(){
		if (!$(this).checked) {
			$("#mark_sendAll").prop("checked", false);
		};
		var chsub = $("input[name^='markSend']").length;
		var checkedsub = $("input[name^='markSend']:checked").length;  
		if (checkedsub == chsub) {  
			$("#mark_sendAll").prop("checked", true);  
		};
	});
	//订单批量重发
	$("#batchRetryForm").on("click","#btnSure",function(){
		var checkBol = false,selectN = 0,detailIds=[];
		$.each(ids,function(i,n){
			var selRows = $("#jqGrid"+n).jqGrid('getGridParam', 'selarrrow'); 
			var len = selRows.length;
			var logicVal =  $("#batchRetryForm").find("select[name='myLogisticsChannel_"+n+"']").val();
			var nameVal = $("#batchRetryForm").find("input[name='platformOrderIds_"+n+"']").val();
			if(len > 0){
				selectN++;
				if(checkUtil.isNullValue(logicVal)){
					top.toastr.error("订单编号【"+nameVal+"】物流渠道必选!");
					checkBol = true;
					return false;
				}
				for(var i = 0;i < len ;i ++) {
					var tempId = selRows[i];
				    var row = $("#jqGrid"+n).jqGrid("getRowData",tempId);
				    var detailId = row.detailId;
				    detailIds.push(detailId);
				}
				$("#detailIds_"+n).val(detailIds.join(","));
				detailIds=[];
			}
		 });
		
		if(selectN == 0){
			top.toastr.error("请选择要处理的订单!");
			checkBol = true;
			return false;
		}
		
		if(!checkBol){
		      $.ajax({
		           url:ctx.path + "/api/orders/batchRetryOrder.do",
		           type:"post",
		           dataType:"json",
		           data:$("#batchRetryForm").serialize(),
		           beforeSend:function(){$('.btn-success').attr("disabled","disabled"); },
		           success:function(data){
		        	   $('.btn-success').removeAttr("disabled");
		        	   if(data){
			    			var errorList = data.data;
			    			if(errorList.length == 0){
			    				  parent.refreshGrid();//刷数据
								  top.toastr.success("批量重发订单成功！");
								  var index = parent.layer.getFrameIndex(window.name); //先得到当前iframe层的索引
							 	  parent.layer.close(index); //再执行关闭
			    			}else{
			    				parent.notFoundPlatformOrderIds(errorList);
			    				return false;
			    			}
			    		}
		           }
		     });
		}
	});
});

function loadGoodsItem(orderId){
	$.jgrid.defaults.styleUI = 'Bootstrap';
	$("#jqGrid"+orderId).jqGrid({
	        url : ctx.path +'/api/orders/queryOrderGoodsList.do?ordersId='+orderId,
	        mtype:"POST",
	        height:"100%",
	        datatype : "json",
	        colNames : ['id','SKU编号','中文名称','单价','重量','数量','重发数量'],
	        colModel : [{name : 'detailId',index:'detailId',hidden:true},
                		{name : 'sku',index:'sku',width : 80},
                		{name : 'eName',index:'eName',},
                		{name : 'price',editable: true,index:'price',width : 50},
                		{name : 'weight',index:'weight',width : 50},
                		{name : 'count',editable: true,index:'count',width:50},
                        {name : 'waitCount',index:'waitCount',width:80,formatter:function(cellvalue, options, rowObject){
                			return '<input onblur="" style="width: 100px;" class="form-control text-center input-sm number" id="count'+rowObject.detailId+'" name="quantity_'+rowObject.detailId+'" onkeyup="retryNumKeyUp(this.value,'+rowObject.detailId+','+orderId+');"  value="'+cellvalue+'">';
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
	 		  var width = $('#jqGrid_wrapper'+orderId).width();
	 			$('#jqGrid'+orderId).setGridWidth(width);
	 			$("#jqGrid"+orderId).jqGrid('setGridHeight','auto');
	 	   },
	 	  onSelectRow:function(rowid,status){
	 		 var sort=0, num=0;
	 		$.each(ids,function(i,n){
	 			var selRows = $("#jqGrid"+n).jqGrid('getGridParam', 'selarrrow'); 
	 			var len = selRows.length;
	 			sort += len;
	 			for(var i = 0;i < len ;i ++) {
	 				var tempId = selRows[i];
	 			    var row = $("#jqGrid"+n).jqGrid("getRowData",tempId);
	 			    var detailId = row.detailId;
	 			    num += parseInt($("#count"+detailId).val());
	 			}
			});
	 		 $("#batchRetryForm .retrySort").text(sort);
	 		 $("#batchRetryForm .retryNumber").text(num);
	 	  },
	 	  onSelectAll:function(aRowids,status){
	 		 var sort=0, num=0;
	 		 $.each(ids,function(i,n){
	 			var selRows = $("#jqGrid"+n).jqGrid('getGridParam', 'selarrrow'); 
	 			var len = selRows.length;
	 			sort += len;
	 			for(var i = 0;i < len ;i ++) {
	 				var tempId = selRows[i];
	 			    var row = $("#jqGrid"+n).jqGrid("getRowData",tempId);
	 			    var detailId = row.detailId;
	 			    num += parseInt($("#count"+detailId).val());
	 			}
			 });
	 		 $("#batchRetryForm .retrySort").text(sort);
	 		 $("#batchRetryForm .retryNumber").text(num);
	 	  },
	 	 onSortCol:function(index,iCol,sortorder){
	 		var sort=0, num=0;
	 		 $.each(ids,function(i,n){
	 			var selRows = $("#jqGrid"+n).jqGrid('getGridParam', 'selarrrow'); 
	 			var len = selRows.length;
	 			sort += len;
	 			for(var i = 0;i < len ;i ++) {
	 				var tempId = selRows[i];
	 			    var row = $("#jqGrid"+n).jqGrid("getRowData",tempId);
	 			    var detailId = row.detailId;
	 			    num += parseInt($("#count"+detailId).val());
	 			}
			 });
	 		 $("#batchRetryForm .retrySort").text(sort);
	 		 $("#batchRetryForm .retryNumber").text(num);
	 	 }
	    }); 
}

function retryNumKeyUp(value,detailId,orderId){
	var rowData = $("#jqGrid"+orderId).getCol("detailId",true);
	 var rowId = null;
	 $.each(rowData, function(i,n){ 
		if (n.value == detailId) {rowId = n.id}
	});
	var row = $("#jqGrid"+orderId).getRowData(rowId);
	var skuNumber = row.count;
	if(checkUtil.isNullValue(value)){
		top.toastr.error("重发数量不能为0或为空!");
		$("#count"+detailId).val(skuNumber);
		return false;
	}else{
		value=value.replace(/[^\d]/g,'');
		$("#count"+detailId).val(value);
		if(value == 0){
			top.toastr.error("重发数量不能为0或为空!");
			$("#count"+detailId).val(skuNumber);
			return false;
		}
		
		if(value > skuNumber){
			top.toastr.error("重发数量不能大于原数量!");
			$("#count"+detailId).val(skuNumber);
			return false;
		}
	}
	
	var sort=0, num=0;
	 $.each(ids,function(i,n){
		var selRows = $("#jqGrid"+n).jqGrid('getGridParam', 'selarrrow'); 
		var len = selRows.length;
		sort += len;
		for(var i = 0;i < len ;i ++) {
			var tempId = selRows[i];
		    var row = $("#jqGrid"+n).jqGrid("getRowData",tempId);
		    var detailId = row.detailId;
		    num += parseInt($("#count"+detailId).val());
		}
	 });
	 $("#batchRetryForm .retrySort").text(sort);
	 $("#batchRetryForm .retryNumber").text(num);
}