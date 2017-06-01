var grid = {};
var rolesMap={};
var parentIndex = null;
$(document).ready(function() {
	$.jgrid.defaults.styleUI = 'Bootstrap';
	grid = $("#jqGrid").jqGrid({
		beforeRequest: function(){
			$(".ui-jqgrid .jqgrid-overlay").attr("style","display:block");
		},  		 
		loadComplete: function(xhr){
			$(".ui-jqgrid .jqgrid-overlay").attr("style","display:none");
		},  
		url : ctx.path + '/api/logisticsRule/ruleList.do',
		mtype : "POST",
		datatype : "json",
		height: top.getFrameHeight() - $("#buttonDiv").outerHeight() - $("#serachDiv").outerHeight() - 84,
		colNames : [ '规则ID', '优先级', '规则名称', '物流渠道',  '状态', '操作'],
		colModel : [ 
		             {name : 'ruleId',index : 'ruleId',hidden : true,align : 'left'}, 
		             {name : 'priorityLevel',index : 'priorityLevel',width : 100,align : 'left',
			formatter:function(cellvalue,options,rowObject){
            	if(cellvalue!=null){
            		var str =  "<select onchange='updateRuleLevel(this,";
            		str += rowObject.ruleId;
            		str += ")'>";
            		for(i=1;i<=10;i++){
            			str += "<option value='"+ i +"' ";
            			if(cellvalue == i){
            				str += " selected='selected' ";
            			}
            			str += ">" + i + "</option>";
            		}
            		str += "</select>";
            		return str;
            	}else{
            		return "";
            	}
            }
		}, 
		{name : 'ruleName',index : 'ruleName',width : 200,align : 'left'},
		{name : 'logisticsName',index : 'logisticsName',width : 300,align : 'left'},
		{name : 'statusTxt',index : 'statusTxt',width : 100,align : 'left'}, 
		{name : 'operation',index : 'operation',width : 200,align : 'left',sortable : false,title : '',
			formatter : function(cellvalue, options, rowObject){
				var button = "<a  title='编辑'  onclick='openEditPage(" + rowObject.ruleId + ")'><i class=\"fa fa-edit\"></i>编辑</a>&nbsp;&nbsp;" + 
								"<a  title='查看'  onclick=\"openInfoPage("+ rowObject.ruleId + ")\"><i class=\"fa fa-eye\"></i>查看</a>&nbsp;&nbsp;"+
							"<a title='删除' onclick=\"delRule("+ rowObject.ruleId + ",'" + rowObject.ruleName + "')\"><i class=\"fa fa-trash\"></i>删除</a>&nbsp;&nbsp;";
				if(rowObject.status == 0){
					button += "<a  title='启用'  onclick='updateRuleStatus(" + rowObject.ruleId + ",1)'><i class=\"fa fa-hourglass-start\"></i>启用</a>&nbsp;&nbsp;" ;
				}else{
					button += "<a  title='停用'  onclick='updateRuleStatus(" + rowObject.ruleId + ",0)'><i class=\"fa fa-ban\"></i>停用</a>&nbsp;&nbsp;" ;
				}
				return button;
			}
		} ],
		multiselect : true,
		autowidth : true,// 自适应宽度
		shrinkToFit : true,
		rowNum : 20,
		rowList : [ 10, 20, 50 ],
 	    rownumbers:true,//添加左侧行号
		altRows : true,// 设置为交替行表格,默认为false
		pager : '#jqGridPager',
		viewrecords : true, // 是否在浏览导航栏显示记录总数
		hidegrid : false,
		sortname : 'ruleId',
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
	//屏幕发生变化的时候计算表格高度
    $(window).bind('resize', function () {
        var width = $('.jqGrid_wrapper').width();
        $('#jqGrid').setGridWidth(width);
        var newHeight=top.getFrameHeight() - $("#buttonDiv").outerHeight() - $("#serachDiv").outerHeight() - 84;
		$("#jqGrid").jqGrid('setGridHeight',newHeight);
    });	
    
    
    //下拉框
    $.ajax({  
        url:  ctx.path +"/api/logisticsRule/getLogisticsCompanyList.do",    //获取物流渠道集合  
        type: "post",  
        dataType: "json",  
        contentType: "application/json",  
        traditional: true,  
        success: function (data) {  
                var jsonObj =data.data;  
                var optionstring = "";  
                for (var j = 0; j < jsonObj.length; j++) {  
                    optionstring += "<option value=\"" + jsonObj[j].logisticsId + "\"  >" + jsonObj[j].name + "</option>";  
                }  
                $("#logisticsId").html("<option value='' >全部物流渠道</option>"+optionstring);  
        },  
        error: function (msg) {  
        	 top.toastr.error(msg);  
        }  
    });            
    
});

//刷新表单
function refreshGrid(){
	grid.trigger("reloadGrid");
}


//打开新增页面
function openAddPage(){
    parentIndex = layer.open({
    title:'新增物流匹配规则',
    type: 2,
    area: ['90%', '90%'],
    fix: true,
    maxmin: true,
    content: ctx.path + '/api/logisticsRule/goRuleAddPage',
    success:function(layero, index){
    	
    }
   });
}


//打开详情页面
function openInfoPage(ruleId){
  parentIndex = layer.open({
  title:'查看物流匹配规则详情',
  type: 2,
  area: ['90%', '90%'],
  fix: true,
  maxmin: true,
  content: ctx.path + '/api/logisticsRule/goRuleInfoPage.do?ruleId=' + ruleId,
  success:function(layero, index){
  	
  }
 });
}


//打开编辑页面
function openEditPage(ruleId){
  parentIndex = layer.open({
  title:'编辑物流匹配规则',
  type: 2,
  area: ['90%', '90%'],
  fix: true,
  maxmin: true,
  content: ctx.path + '/api/logisticsRule/goRuleEditPage?ruleId=' + ruleId,
  success:function(layero, index){
  	
  }
 });
}

//状态更新
function updateRuleStatus(ruleId,status){
	$.ajax({
		url : ctx.path + '/api/logisticsRule/updateRuleStatus.do?ruleId='+ruleId+'&status='+status,
		type : 'POST',
		async : false,
		success : function(responseText) {
			if(responseText.rs == 1){
				if(status == 0){
					  top.toastr.success("停用成功！");
				}else{
					  top.toastr.success("启用成功！");
				}
	     		 refreshGrid();//刷数据
			}else{
				top.toastr.error("操作失败");
			}
		},
	      error: function(jqXHR , textStatus , errorThrown){
		      	top.toastr.error("操作失败");
		      }
	});
}


//排序更新
function updateRuleLevel(e,ruleId){
	var priorityLevel = $(e).val();
	$.ajax({
		url : ctx.path + '/api/logisticsRule/updateRuleLevel.do?ruleId='+ruleId+'&priorityLevel='+priorityLevel,
		type : 'POST',
		async : false,
		success : function(responseText) {
			if(responseText.rs == 1){
				top.toastr.success("排序更新成功！");
				refreshGrid();//刷数据
			}else{
				top.toastr.error("操作失败");
			}
		},
	      error: function(jqXHR , textStatus , errorThrown){
		      	top.toastr.error("操作失败");
		      }
	});
}


function delRule(ruleId,ruleName){
	var delContext = "您确定删除";
	delContext += "物流匹配规则【" + ruleName + "】吗？<br>";
	delContext += "删除成功之后，该操作将无法恢复。";
	layer.confirm(delContext, {
		icon : 3,
		title : "提示"
	}, function(index) {
		$.ajax({
			url : ctx.path + '/api/logisticsRule/delRule.do?ruleId='+ruleId,
			type : 'POST',
			async : false,
			success : function(responseText) {
				if(responseText.rs == 1){
					top.toastr.success(ruleName + "删除成功！");
					refreshGrid();//刷数据
				}else{
					top.toastr.error("操作失败");
				}
			},
		      error: function(jqXHR , textStatus , errorThrown){
			      	top.toastr.error("操作失败");
			      }
		});
		layer.close(index);
	});
}