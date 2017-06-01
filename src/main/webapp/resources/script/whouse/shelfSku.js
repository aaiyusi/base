var grid = {};
var parentIndex = null;
var oldSelectId ;//仓库选择前值
var isChangeTab = true;//哪个查询框
    
$(document).ready(function(){
    $.jgrid.defaults.styleUI = 'Bootstrap';
    grid = $("#jqGrid").jqGrid({
	beforeRequest: function(){
		$(".ui-jqgrid .jqgrid-overlay").attr("style","display:block");
	},  		 
	loadComplete: function(xhr){
		$(".ui-jqgrid .jqgrid-overlay").attr("style","display:none");
	},  
    url : ctx.path +'/api/goods/getSkuListByShelfId.do?shelfId='+shelfId,
    mtype:"POST",
    datatype : "json",
    height: $(window).height() - 75,
    colNames : ['id','SKU','商品名称','仓库','仓位','库存'],
    colModel : [
                		{name : 'goodsId',hidden: true},
                		{name : 'sku',editable: true,index:'sku'},
                		{name : 'name',editable: true,index:'name'},
                		{name : 'whouseName',editable: true,index:'whouseName',width : 100},
                		{name : 'spaceCode',editable: true,index:'spaceCode',width : 100},
                		{name : 'inventoryCount',editable: true,index:'inventoryCount',width : 100}
            		 ],
    autowidth: true,//自适应宽度
    shrinkToFit: true,
    rowNum : 20,
    rowList: [10, 20, 50],
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
	    var newHeight= $(window).height() - 75;
	    $("#jqGrid").jqGrid('setGridHeight',newHeight);
    });


    
});