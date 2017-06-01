var grid = {};
var rolesMap={};
var parentIndex = null;
$(document).ready(function(){
	debugger
	$.jgrid.defaults.styleUI = 'Bootstrap';
	grid = $("#jqGrid").jqGrid({
		beforeRequest: function(){
			$(".ui-jqgrid .jqgrid-overlay").attr("style","display:block");
		},  		 
		loadComplete: function(xhr){
			$(".ui-jqgrid .jqgrid-overlay").attr("style","display:none");
		},  
		url : ctx.path +'/api/pm/queryUsers.do?enterpriseId='+enterpriseId,
		mtype:"POST",
		datatype : "json",
		/*height: top.getFrameHeight() - $("#buttonDiv").outerHeight() - $("#serachDiv").outerHeight() - 84,*/
		height:320,
		colNames : ['员工ID','登录名', '员工姓名', '邮箱', '手机', '最后登陆时间'],
		colModel : [ 
		         {name : 'userId',index:'userId',hidden:true},
                 {name : 'loginName',editable: true,index : 'loginName',width : 60},
                 {name : 'userName',editable: true,index : 'userName',width : 100},
                 {name : 'email',editable: true,index : 'email',width : 100},
                 {name : 'mobilePhone',editable: true,index : 'mobilePhone',width : 100},
                 {name : 'lastLoginTime',editable: false,index : 'lastLoginTime',width : 90,sorttype: "date",formatter:function(cellvalue){
                	 if(typeof(cellvalue) != undefined && cellvalue){
                		 return DateUtil.getSmpFormatDateByLong(cellvalue,true);
                	 }else{
                		 return "";
                	 }
                 }}
 	    ],
 	    multiselect:true,
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
        var newHeight=top.getFrameHeight() - $("#buttonDiv").outerHeight() - $("#serachDiv").outerHeight() - 84;
		$("#jqGrid").jqGrid('setGridHeight',newHeight);
    });	
    
    //刷新表单
    function refreshGrid(){
    	grid.trigger("reloadGrid");
    }
});
 
