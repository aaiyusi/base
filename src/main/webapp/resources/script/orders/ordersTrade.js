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
		url : ctx.path +'/api/orders/queryOrderTradeNumList.do?ids='+ids,
		mtype:"POST",
		datatype : "json",
		height: '100%',
		colNames : ['订单ID','运单ID','物流ID','订单编号', '物流公司', '物流渠道', '填充单号', '填充状态','失败原因'],
		colModel : [ 
		         {name : 'ordersId',index:'ordersId',hidden:true},
		         {name : 'tnumId',index:'tnumId',hidden:true},
		         {name : 'logisticsId',index:'logisticsId',hidden:true},
                 {name : 'name',editable: true,index : 'name',width : 120,formatter:function(cellvalue,options,rowObject){
                	 return "<a onclick='loadOrderViewPage("+ rowObject.ordersId +")'>"+cellvalue+"</a>";
                 }},
                 {name : 'companyName',editable: true,index : 'companyName',width : 100},
                 {name : 'logisticsName',editable: true,index : 'logisticsName',width : 100},
                 {name : 'tnumber',editable: true,index : 'tnumber',width : 100},
                 {name : 'isUseCn',editable: false,index : 'isUseCn',width : 90,formatter:function(cellvalue,options,rowObject){
                	 if(cellvalue == '填充失败'){
                		 return '<span class="label label-danger">'+cellvalue+'</span>';
                	 }else if(cellvalue == '填充成功'){
                		 return '<span class="label label-success">'+cellvalue+'</span>';
                	 }else{
                		 return '<span class="label label-info">'+cellvalue+'</span>';
                	 }
                 }},
                 {name : 'reason',editable: true,index : 'reason'}
 	    ],
 	    multiselect:true,
 	    autowidth: true,//自适应宽度 
 	    shrinkToFit: true,
 	    altRows:true,//设置为交替行表格,默认为false
 	    viewrecords: true, //是否在浏览导航栏显示记录总数
 	    hidegrid: false,
 	    jsonReader: {
 	    	root: "data.data",// Json数据
 	    	repeatitems: false
 	    },
 	    gridComplete:function(){
	 		  var width = $('.jqGrid_wrapper').width();
	 			$('#jqGrid').setGridWidth(width);
	 			$("#jqGrid").jqGrid('setGridHeight','auto');
	 	}
	});
	
	//屏幕发生变化的时候计算表格高度
    $(window).bind('resize', function () {
        var width = $('.jqGrid_wrapper').width();
        $('#jqGrid').setGridWidth(width);
		$("#jqGrid").jqGrid('setGridHeight',"auto");
    });	
});

//刷新表单
function refreshGrid(){
	grid.trigger("reloadGrid");
}

//填充运单号
function dobatchAutomaticallyFillTrackNumber(){
	var selRows = grid.jqGrid('getGridParam', 'selarrrow');  //选中行id数组
    if(selRows.length <= 0){
    	top.toastr.warning("请选择要填充的订单编号！");
    	return false;
    }
    var ids=new Array();
    var len = selRows.length;
    var rowData = new Object();
    for(var i = 0;i < len ;i ++) {
	    var tempId = selRows[i];
	    var row = grid.jqGrid("getRowData",tempId);
	    var id = row.ordersId;//获取选择行数据id
	    ids.push(id);
	}
    
    $.ajax({
        url:ctx.path + "/api/orders/batchAutomaticallyFillTrackNumber.do",
        type:"post",
        dataType:"json",
        data:{"ids":ids.join(",")},
        success:function(data){
     	   if(data){
     		   if(data.rs == 1){
     			  var msgList = data.data;
	  				$.each(msgList,function(i,n){
	  					$.each(n,function(key,value){
	  						var rowData = $("#jqGrid").getCol("ordersId",true);
	  						 var rowId = null;
	  						 $.each(rowData, function(i,n){ 
	  							if (n.value == key) {rowId = n.id}
	  						});
	  						if(!checkUtil.isNullValue(value)){
	  							var arr = value.split(";");
	  							if(arr[0] == 0){
	  								$("#jqGrid").setRowData(rowId,{"isUseCn":"填充成功","tnumber":arr[1]});
	  							}else{
	  								$("#jqGrid").setRowData(rowId,{"isUseCn":"填充失败","reason":arr[0]});
	  							}
	  						}
	  						parent.refreshGrid();//刷数据
	  						$('#jqGrid').setSelection(rowId,true);
	  					});
	  				});
     		   }
	    }
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
		    content: ctx.path + '/api/orders/loadOrderViewPage.do?type=3&ordersId='+ordersId
		 });
	}
}