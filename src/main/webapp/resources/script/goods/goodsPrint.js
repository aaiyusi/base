var goodsIds = Request("goodsIds");

//页面加载时，初始化信息
$(document).ready(function() {

	//获得标签模板信息
	$.ajax({
		url : ctx.path + '/api/print/getTempList.json?tempType=5&type=0',
		type : 'POST',
		success : function(data) {
//			$("#printTempList").html("<option value='0'>-请选择-</option>");
			$.each(data.data, function(i,n){
				$("#printTempList").append("<option value='" + n.tempId + "'>" + n.name + "</option>");
			});
		}
	});
	var lastsel = 0;
	$.jgrid.defaults.styleUI = 'Bootstrap';
	grid = $("#jqGridPrint").jqGrid({
		url : ctx.path + '/api/goods/getPrintGoods.json',
		postData : {
			goodsIds : goodsIds
		},
		mtype : "POST",
		datatype : "json",
		height : top.getFrameHeight()
				- $("#serachDiv").outerHeight() - 84,
		colNames : [ '商品ID', 'SKU', '商品名称', '仓位编码', '打印数量'],
		colModel : [ {
			name : 'goodsId',
			index : 'goodsId',
			key : true,
			hidden : true
		}, {
			name : 'sku',
			width : 60,
			index : 'sku'
		}, {
			name : 'name',
			width : 100,
			index : 'name'
		}, {
			name : 'spaceCode',
			width : 80,
			index : 'spaceCode'
		}, {
			name : 'printNum',
			width : 50,
			index : 'printNum',
			editable : true
		} ],
		autowidth : true,// 自适应宽度
		shrinkToFit : true,
		altRows : true,// 设置为交替行表格,默认为false
		height : '65%',
		hidegrid : false,
        onSelectRow : function(id) {
            if (id && id !== lastsel) {
            	edit = true;
            	grid.jqGrid('saveRow', lastsel);//保存行内容
            	grid.jqGrid('restoreRow', lastsel);//重置行状态
//            	var rowData = grid.jqGrid('getRowData', lastsel);
//            	grid.jqGrid('setCell', lastsel,"printNum",rowData.printNum);//修改行内容
            	grid.jqGrid('editRow', id, false);//设置行为可编辑
            	lastsel = id;
            }else{
            	if(edit){//选中自己可编辑的话设为不可编辑保存记录
            		edit = false;
            		grid.jqGrid('saveRow', lastsel);//保存行内容
//            		var rowData = grid.jqGrid('getRowData', lastsel);
//            		grid.jqGrid('setCell', lastsel,"printNum",rowData.printNum);//修改行内容
            		grid.jqGrid('restoreRow', id);
            	}else{
            		edit = true;
            		grid.jqGrid('editRow', id, false);
            	}
             
            }
        },
		jsonReader : {
			root : "data",// Json数据
			repeatitems : false
		}
	});
});

//打印预览
function print(){
	var printGoodsIds = "";
	var printNums = "";
	$.each(grid.jqGrid('getRowData'),function(i,n){
    	grid.jqGrid('saveRow', n.goodsId);
	});
	$.each(grid.jqGrid('getRowData'),function(i,n){
    	printGoodsIds += n.goodsId + ",";
		printNums += n.printNum + ",";
	});
	printGoodsIds = printGoodsIds.substring(0, printGoodsIds.length - 1);
	printNums = printNums.substring(0, printNums.length - 1);
	window.open(ctx.path + "/api/goods/printGoods.json?printGoodsIds=" + printGoodsIds + "&printNums=" + printNums + "&printTemp=" + $("#printTempList").val());
}

function changeNum(node){
	var num = $(node).val();
	$.each(grid.jqGrid('getRowData'),function(i,n){
		grid.jqGrid('setCell', n.goodsId,"printNum",num);//修改行内容
	});
}

//获得页面传参
function Request(argname){
	var url = location.href;
	var arrStr = url.substring(url.indexOf("?")+1).split("&");
	for(var i =0;i<arrStr.length;i++){
	    var loc    = arrStr[i].indexOf(argname+"=");
	    if(loc!=-1){
	        return arrStr[i].replace(argname+"=","").replace("?","");
	        break;
	    }
	     
	}
	return 0;
}