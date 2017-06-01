var grid = {};
var parentIndex = null;
var isSave = false;
var catalogItemsList = [];
$(document).ready(function() {
	$(".fieldgroup input[name='fieldlabel']").bind("click",function(){
		var label=$(this).next("span").html(),
		text=$(this).val(),
		targetItem = '<span id="'+text+'"><input type="hidden" name="map-name-'+text+'" value="'+label+'"></span>';
		if($(this).prop("checked")){
			$("#exportGoods #panel_footer").append(targetItem);
		}else{
			$("#exportGoods span[id='"+text+"']").remove();
		}
	});
	
	$("input[name='fieldlabel'][value='all']").bind("click",function(){
		if($(this).prop("checked")){
			for(var i=0;i<$("#allfield .fieldgroup input[name='fieldlabel']").length;i++){
				var uq = $("#allfield .fieldgroup input[name='fieldlabel']").eq(i).val();
				if($("#allfield .fieldgroup input[name='fieldlabel']").eq(i).is(':checked') == true){
					continue;
				}
				$("#exportGoods #panel_footer").append('<span id="'+uq+'"><input type="hidden" name="map-name-'+uq+'" value="'+$("#allfield .fieldgroup input[name='fieldlabel']").eq(i).next("span").html()+'"></span>');
			}
			$("#allfield :checkbox").prop("checked",true);
		}else{
			$("#allfield :checkbox").prop("checked",false);
			$("#exportGoods #panel_footer").empty();
		}
	});
	
	$.jgrid.defaults.styleUI = 'Bootstrap';
	grid = $("#jqGrid").jqGrid({
		beforeRequest: function(){
			$(".ui-jqgrid .jqgrid-overlay").attr("style","display:block");
		},  		 
		loadComplete: function(xhr){
			$(".ui-jqgrid .jqgrid-overlay").attr("style","display:none");
		},  
		url : ctx.path + '/api/goods/queryGoodsList.json',
		mtype : "POST",
		datatype : "json",
		height : top.getFrameHeight()
				- $("#buttonDiv").outerHeight()
				- $("#serachDiv").outerHeight() - 85,
		colNames : [ '商品ID', '缩略图', 'SKU', '商品名称', '商品目录', '商品状态', '库存', '待发货', '操作'],
		colModel : [ {
			name : 'goodsId',
			index : 'goodsId',
			key : true,
			hidden : true
		}, {
			name : 'saleImage',
			index : 'saleImage',
			width : 100,
			sortable : false,
			formatter : function(cellvalue, options, rowObject){
				var temp = "<img src='";
				if(cellvalue != undefined && cellvalue != ""){
					temp += cellvalue;
				} else {
					temp += "/erp/resources/images/photo_default.jpg";
				}
				temp += "' border='0' style='width: 100px; height: 60px;'/>";
				return temp;
			}
		}, {
			name : 'sku',
			index : 'sku',
			width : 100,
			formatter : function(cellvalue, options, rowObject){
				var html  = "<a href='javascript:void(0);' onclick='editPage(" + rowObject.goodsId + ")'>" + cellvalue + "</a>";
				return html;
			}
		}, {
			name : 'name',
			index : 'name',
			width : 100
		}, {
			name : 'catalogiName',
			index : 'catalogiName',
			width : 100
		}, {
			name : 'saleState',
			index : 'saleState',
			width : 100,
			formatter : function(cellvalue, options, rowObject){
				var temp = "";
				switch (cellvalue) {
				case 1:
					temp = "自动创建";
					break;
				case 2:
					temp = "等待开发";
					break;
				case 3:
					temp = "正在销售";
					break;
				case 4:
					temp = "商品清仓";
					break;
				case 5:
					temp = "停止销售";
					break;
				}
				return temp;
			}
		}, {
			name : 'inventoryCount',
			index : 'inventoryCount',
			width : 100
		}, {
			name : 'notDeliverCount',
			index : 'notDeliverCount',
			width : 100
		}, {
			name : 'deliverCount',
			index : 'deliverCount',
			width : 100,
			sortable : false,
			title : '',
			formatter : function(cellvalue, options, rowObject){
				var button = "<a onclick='editPage(" + rowObject.goodsId + ")'><i class=\"fa fa-edit\"></i> 编辑</a>&nbsp;&nbsp;" + 
							"<a onclick=\"delGoods("+ rowObject.goodsId +",'" + rowObject.sku + "','" + rowObject.name + "')\"><i class=\"fa fa-trash\"></i> 删除</a>";
				return button;
			}
		} ],
		multiselect : true,
		autowidth : true,// 自适应宽度
		shrinkToFit : true,
		rowNum : 20,
		rowList : [ 10, 20, 50 ],
		altRows : true,// 设置为交替行表格,默认为false
		pager : '#jqGridPager',
		viewrecords : true, // 是否在浏览导航栏显示记录总数
		hidegrid : false,
		sortname : 'goodsId',
		sortorder : 'desc',
		jsonReader : {
			root : "data.data",// Json数据
			records : "data.totalRows",// 总记录数
			total : "data.totalPages",
			page : "data.page",
			repeatitems : false
		}
	});

	// 设置按钮
	grid.jqGrid('navGrid', '#jqGridPager', {
		edit : false,
		add : false,
		del : false,
		search : false
	}, {
		height : 200,
		reloadAfterSubmit : true
	});

	// 屏幕发生变化的时候计算表格高度
	$(window).bind('resize',function() {
		var width = $('.jqGrid_wrapper').width();
		$('#jqGrid').setGridWidth(width);
		var newHeight = top.getFrameHeight()
				- $("#buttonDiv").outerHeight()
				- $("#serachDiv").outerHeight() - 85;
		$("#jqGrid").jqGrid('setGridHeight', newHeight);
	});

	// 校验新增表单
	$("#dataForm").validate({
		submitHandler : function(form) {
			$(form).ajaxSubmit(
					{
						// 表单提交成功后的回调
						success : function(responseText,
								statusText, xhr, $form) {
							if (responseText.rs == -1) {
								return false;
							}
							refreshGrid();// 重新加载grid
							top.toastr.success("新增数据成功");
							FormUtil.resetForm("dataForm");
							layer.close(parentIndex); // 再执行关闭
						}
					});
		}
	});

	// 编辑数据
	$("#dataEditForm").validate({
		submitHandler : function(form) {
			$(form).ajaxSubmit({
				// 表单提交成功后的回调
				success : function(responseText,
						statusText, xhr, $form) {
					if (responseText.rs == -1) {
						return false;
					}
					refreshGrid();// 重新加载grid
					top.toastr.success("编辑数据成功");
					layer.close(parentIndex); // 再执行关闭
					FormUtil.resetForm("dataEditForm");
				}
			});
		}
	});
	
    //tab页面
    $("#grenul li").bind("click",function(){
    	liClick(this);
    });
    
	//获得商品目录信息
	$.ajax({
		url : ctx.path + '/api/catalog/getCatalogTree.json',
		type : 'POST',
		async : false,
		success : function(data) {
			catalogItemsList = data.data.catalogList;
			
			$("#catalogiItemsList").html("<option value='0'>-请选择-</option>");
			$.each(catalogItemsList, function(i,n){
				$("#catalogiItemsList").append("<option value='" + n.catalogiId + "'>" + n.name + "</option>");
			});
			$("#catalogisList").html("<option value='0'>-请选择-</option>");
		}
	});

});

//关闭所有弹窗
function closeLayer(){
	layer.closeAll();
}

//导出商品
function exportGoodsTemplate(){
	parentIndex = layer.open({
	    title:'商品导出',
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
	    	$("#exportGoodsForm input[name='search']").val(JSON.stringify(params));
	    	$("#exportGoodsForm").submit();
	    },
	    content: $("#exportGoods"),
	    success:function(layero, index){
	    	$("#exportGoods :checkbox").prop("checked",false);
			$("#exportGoods #panel_footer").empty();
			$("#exportGoods #panel_footer").html($("#exportGoods #checkVal").html());
			var vals = ",saleImage,sku,name,catalogiName,saleStateName,inventoryCount,notDeliverCount";
			$.each($(".fieldgroup input[name='fieldlabel']"),function(i,n){
				if(vals.indexOf("," + $(n).val(), 0) > -1){
			    	$(n).prop("checked",true);
				}
			});
	    }
	 });
}

//商品目录时更改方法
function catalogiItemChange(){
	$("#catalogisList").html("<option value='0'>-请选择-</option>");
	var catalogis = {};
	var catalogiItemsId = $("#catalogiItemsList").val();
	$.each(catalogItemsList, function(i,n){
		if(n.catalogiId == catalogiItemsId){
			catalogis = n;
		} 
	});
	$.each(catalogis.catalogList, function(j,m){
		$("#catalogisList").append("<option value='" + m.catalogiId + "'>" + m.name + "</option>");
	});
}

//删除商品
function delGoods(id, sku, name){
	var delContext = "您确定删除";
	delContext += "SKU为【" + sku + "】<br>商品名称为【" + name + "】吗？<br>";
	delContext += "删除成功之后，该操作将无法恢复。";
	layer.confirm(delContext, {
		icon : 3,
		title : "提示",
		btn: ['确定','取消'] //按钮
	}, function(index) {
		$.get(ctx.path + "/api/goods/deleteGoods.json?goodsId=" + id,
				function(result) {
					if (result.rs == 1) {
						grid.trigger("reloadGrid");// 刷新表单
						top.toastr.success("删除数据成功！");
					} else {
						top.toastr.warning("删除数据失败！");
					}
				}, "json");
		layer.close(index);
	});
}

//关闭弹窗
function layerCloseAll(){
	layer.closeAll();
}

// 刷新表单
function refreshGrid() {
	grid.trigger("reloadGrid");
}
/*
function liClick(node){
    var codeType = $(node).attr("labelname");
    
	if(codeType != "baseInfo" && ($("#goodsId").val() == 0 || $("#goodsId").val() == "" || $("#goodsId").val() == undefined)){
		top.toastr.error("请先保存库存SKU信息再进行下一步操作");
		return;
	}
	
	//移除所有li上的选择样式
	$("#grenul li").removeClass("active");
	//给当前选择tab添加选择选中样式
	$(node).addClass("active");

	$("#contentDiv .panel-body").hide();
    switch (codeType) {
	case "baseInfo":
		$($("#contentDiv .panel-body")[0]).show();
		break;
	case "salesInfo":
		$($("#contentDiv .panel-body")[1]).show();
		break;
	case "historyInfo":
		$($("#contentDiv .panel-body")[2]).show();
		break;
	}
}*/

// 打开新增页面
function openAddPage() {
	parentIndex = layer.open({
		title : '新增商品信息',
		type : 2,
		area : [ '90%', '90%' ],
		fix : true,
		maxmin : true,
		content : ctx.path + '/resources/views/goods/goodsView.jsp'
	});
//	FormUtil.resetForm("dataForm");

//	liClick($("#grenul").find("[labelname=baseInfo]"));
	
//	parentIndex = layer.open({
//		title : '新增数据',
//		type : 1,
//		area : [ '90%', '90%' ],
//		fix : true,
//		maxmin : true,
//		content : $('#dataAdd'),
//		btn : [ '提交', '取消' , '保存并继续'],
//		yes : function(index, layero){
//			addFunction(index, layero, 0);
//		},
//		cancel : function(index) {
//			FormUtil.resetForm("dataForm");
//		},
//		btn3 : function(index, layero){
//			addFunction(index, layero, 1);
//		}
//	});
//	$("#catalogiItems").html("<option value='0'>-请选择-</option>");
//	$.each(catalogItems, function(i,n){
//		$("#catalogiItems").append("<option value='" + n.catalogiId + "'>" + n.name + "</option>");
//	});
//	$("#catalogis").html("<option value='0'>-请选择-</option>");
}


//导入
function importFun(){
}

//添加商品方法
function addFunction(index, layero, type){
	
	var sku = $("#sku").val();
	var name = $("#name").val();
	var eName = $("#eName").val();
	var catalogiId = $("#catalogis").val();
	var saleState = $("#saleState").val();
	
	if (sku == undefined || sku == "") {
		top.toastr.error("SKU不能为空！");
		return;
	}
	if (name == undefined || name == "") {
		top.toastr.error("中文名称不能为空！");
		return;
	}
	if (eName == undefined || eName == "") {
		top.toastr.error("英文名称不能为空！");
		return;
	}
	if (catalogiId == undefined || catalogiId == "" || catalogiId == 0) {
		top.toastr.error("请选择商品目录！");
		return;
	}
	if (saleState == undefined || saleState == "" || saleState == 0) {
		top.toastr.error("请选择商品状态！");
		return;
	}
	
	$.ajax({
		url : ctx.path + '/api/goods/addGoods.json',
		type : 'POST',
		data : $("#dataForm").serialize(),
		dataType : "json",
		success : function(data) {
			if(data.rs == 1){
				$("#goodsId").val(data.data);
				if(type == 0){
					layer.close(index);
					FormUtil.resetForm("dataForm");
				} else {
					liClick($("#grenul").find("[labelname=whouseInfo]"));
				}
			}
		}
	});
	
//	$("#dataForm").submit();
}

// 打开编辑页面
function editPage(goodsId) {

	parentIndex = layer.open({
		title : '修改商品信息',
		type : 2,
		area : [ '90%', '90%' ],
		fix : true,
		maxmin : true,
		content : ctx.path + '/resources/views/goods/goodsView.jsp?goodsId=' + goodsId
		
	});
}

//打印界面
function openPrint(){
	var rowIds = grid.jqGrid('getGridParam','selarrrow');
	if(rowIds.length <= 0){
		top.toastr.error("请选择最少一行商品信息！");
		return;
	}
	var goodsIds = "";
	$.each(rowIds, function(i,n){
		goodsIds += n + ",";
	});
	goodsIds = goodsIds.substring(0, goodsIds.length - 1);
	parentIndex = layer.open({
		title : '打印商品信息',
		type : 2,
		area : [ '90%', '90%' ],
		fix : true,
		maxmin : true,
		content : ctx.path + '/resources/views/goods/goodsPrint.jsp?goodsIds=' + goodsIds/*,
		btn : [ '打印预览', '取消'],
		yes : function(index, layero){
			alert("打印预览");
		},
		cancel : function(index) {
			layer.close(index);
		}*/
	});
	
//	window.open(ctx.path + "/api/goods/printGoods.json");
}