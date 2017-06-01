//页面加载时，初始化信息
$(document).ready(function() {
	$.jgrid.defaults.styleUI = 'Bootstrap';
	grid = $("#jqGrid").jqGrid({
		beforeRequest: function(){
			$(".ui-jqgrid .jqgrid-overlay").attr("style","display:block");
		},  		 
		loadComplete: function(xhr){
			$(".ui-jqgrid .jqgrid-overlay").attr("style","display:none");
		},  
		url : ctx.path + '/api/print/queryTempByPage.json',
		mtype : "POST",
		datatype : "json",
		height : top.getFrameHeight()
				- $("#serachDiv").outerHeight() - 85,
		colNames : [ '标签模板ID', '模板名称', '单据类型', '规格类型', '规格', '操作'],
		colModel : [ {
			name : 'tempId',
			index : 'tempId',
			key : true,
			hidden : true
		}, {
			name : 'name',
			width : 120,
			index : 'name'
		}, {
			name : 'tempType',
			width : 100,
			index : 'tempType',
			formatter:function(cellvalue){
				switch (cellvalue) {
				case 1:
					return "地址单";
					break;
				case 2:
					return "报关单";
					break;
				case 3:
					return "配货单";
					break;
				case 4:
					return "发票";
					break;
				case 5:
					return "商品标签";
					break;
				}
	    	}
		}, {
			name : 'standard',
			width : 60,
			index : 'standard',
			formatter:function(cellvalue){
				if (cellvalue == 1){
					return "标准规格";
				} else {
					return "自定义规格";
				}
	    	}
		}, {
			name : 'tempModel',
			width : 80,
			index : 'tempModel',
			formatter:function(cellvalue, options, rowObject){
				return rowObject.tLength + "cm x " + rowObject.tWidth + "cm";
	    	},
			sortable : false
		}, {
			name : 'operate',
			width : 50,
			index : 'operate',
			formatter:function(cellvalue, options, rowObject){
	    		return "<a onclick='viewImage(" + rowObject.tempType + "," + rowObject.tempId + ")'><i class=\"fa fa-eye\"></i> 预览</a>";
	    	},
			sortable : false
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
		sortname : 'tempId',
		sortorder : 'desc',
		jsonReader : {
			root : "data.data",// Json数据
			records : "data.totalRows",// 总记录数
			total : "data.totalPages",
			page : "data.page",
			repeatitems : false
		}
	});
});

//预览
function viewImage(standard, tempId){
	window.open(ctx.path + "/resources/images/print/print-" + standard + "-" + tempId + ".jpg");
}
