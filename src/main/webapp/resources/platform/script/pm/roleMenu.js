var grid = {};
var parentIndex = null;
var editPage;
function operate(cellValue,options,rowObject){
   	var template = "<a  onclick=\"editPage("+rowObject.roleId+")\" title='编辑'><i class=\"fa fa-edit\"></i>&nbsp;编辑</a>&nbsp;&nbsp;";
   		template += "<a  onclick=\"del("+rowObject.roleId+",'"+rowObject.roleName+"')\" title='删除'><i class=\"fa fa-trash\"></i>&nbsp;删除</a>&nbsp;&nbsp;";
	return template;
};

$(document).ready(function() {
    $.jgrid.defaults.styleUI = 'Bootstrap';
    grid = $("#jqGrid").jqGrid({
    	beforeRequest: function(){
    		$(".ui-jqgrid .jqgrid-overlay").attr("style","display:block");
		},  		 
		loadComplete: function(xhr){
			$(".ui-jqgrid .jqgrid-overlay").attr("style","display:none");
		},  
        url: ctx.path + '/platform/pm/queryRoels.do',
        mtype: "POST",
        datatype: "json",
        height: top.getFrameHeight() - $("#buttonDiv").outerHeight() - $("#serachDiv").outerHeight() - 85,
        colNames: ['角色ID','角色名称', '描述','操作'],
        colModel: [{
            name: 'roleId',
            index: 'roleId',
            hidden: true
        },{
        	name: 'roleName',
        	index: 'roleName',
        	editable: true,
            width: 100
        },
        {
            name: 'descriptions',
            editable: true,
            index: 'descriptions',
            width: 100
        },
        {name : 'act',index:'act',sortable:false ,title: false,formatter:operate}],
        //multiselect: true,
        autowidth: true,
        // 自适应宽度
        shrinkToFit: true,
        rowNum: 20,
        rowList: [10, 20, 50],
        rownumbers: false,
        // 添加左侧行号
        altRows: true,
        // 设置为交替行表格,默认为false
        pager: '#jqGridPager',
        viewrecords: true,
        // 是否在浏览导航栏显示记录总数
        hidegrid: false,
        jsonReader: {
            root: "data.data",
            // Json角色
            records: "data.totalRows",
            // 总记录数
            total: "data.totalPages",
            page: "data.page",
            repeatitems: false
        }
    });

    // 设置按钮
    grid.jqGrid('navGrid', '#jqGridPager', {
        edit: false,
        add: false,
        del: false,
        search: false
    },
    {
        height: 200,
        reloadAfterSubmit: true
    });

    // 屏幕发生变化的时候计算表格高度
    $(window).bind('resize',
    function() {
        var width = $('.jqGrid_wrapper').width();
        $('#jqGrid').setGridWidth(width);
        var newHeight = top.getFrameHeight() - $("#buttonDiv").outerHeight() - $("#serachDiv").outerHeight() - 85;
        $("#jqGrid").jqGrid('setGridHeight', newHeight);
    });

    // 刷新表单
    function refreshGrid() {
        grid.trigger("reloadGrid");
    }

    // 校验新增表单
    $("#dataForm").validate({
        submitHandler: function(form) {
            $(form).ajaxSubmit({
            	layerMaskFlag:true,
                // 表单提交成功后的回调
                success: function(responseText, statusText, xhr, $form) {
                	console.log(responseText);
                    if (responseText.rs == -1) {
                    	
                        return false;
                    }
                    refreshGrid(); // 重新加载grid
                    top.toastr.success("新增角色成功");
                    FormUtil.resetForm("dataForm");
                    layer.close(parentIndex); // 再执行关闭
                }
            });
        }
    });

    // 编辑角色
    $("#dataEditForm").validate({
        submitHandler: function(form) {
            $(form).ajaxSubmit({
            	layerMaskFlag:true,
                // 表单提交成功后的回调
                success: function(responseText, statusText, xhr, $form) {
                    if (responseText.rs == -1) {
                        return false;
                    }
                    refreshGrid(); // 重新加载grid
                    top.toastr.success("编辑角色成功");
                    layer.close(parentIndex); // 再执行关闭
                    FormUtil.resetForm("dataEditForm");
                }
            });
        }
    });

});

// 打开新增页面
function openAddPage() {
    parentIndex = layer.open({
        title: '新增角色',
        type: 1,
        area: ['90%', '90%'],
        fix: true,
        maxmin: true,
        btn: ['保存', '取消'],
        yes: function(index, layero) {
            $("#dataForm").submit();
        },
        content: $('#dataAdd'),
        cancel: function(index) {
            FormUtil.resetForm("dataForm");
        }
    });
}

// 打开编辑页面
function editPage() {
    var selRows = grid.jqGrid('getGridParam', 'selarrrow');
    if (selRows.length != 1) {
        top.toastr.warning("请选择一行进行编辑！");
        return;
    }
    var row = $("#jqGrid").jqGrid("getRowData", selRows[0]);
    $.ajax({
        url: ctx.path + '/platform/pm/getdata.json',
        async: true,
        dataType: 'json',
        type: 'POST',
        data: {
            dataId: row.dataId
        },
        success: function(data) {
            if (data.rs == -1) {
                top.toastr.error("操作失败");
                return false;
            }
            $("#dataEditForm").fill(data.data); // 表单角色填充
            $("#dataEditForm").find("#dataId").val(row.dataId);
            parentIndex = layer.open({
                title: '编辑角色',
                type: 1,
                area: ['90%', '90%'],
                fix: true,
                maxmin: true,
                btn: ['保存', '取消'],
                yes: function(index, layero) {
                    $("#dataEditForm").submit();
                },
                content: $('#dataEdit'),
                cancel: function(index) {
                    FormUtil.resetForm("dataEditForm");
                }
            });
        },
        error: function(jqXHR, textStatus, errorThrown) {
            top.toastr.error("操作失败");
        }
    });
}

// 删除
function del(id,name) {
    /*var selRows = grid.jqGrid('getGridParam', 'selarrrow'); // 选中行id数组
    if (selRows.length <= 0) {
        top.toastr.warning("请选择角色删除");
        return false;
    }*/
    var ids = new Array();
    /*var len = selRows.length;
    var rowData = new Object();*/
    var delContext = "您确定删除";
    /*var rowData = new Object();
    if (selRows.length == 1) { // 删除单条角色
        rowData = grid.jqGrid('getRowData', selRows[0]);*/
        delContext += "登录名【" + name + "】吗？<br>";
        delContext += "删除成功之后，该操作将无法恢复。";
    /*} else {
        delContext += "选中的" + selRows.length + "条角色吗？<br>";
        delContext += "删除成功之后，该操作将无法恢复。";
    }
    for (var i = 0; i < len; i++) {
        var tempId = selRows[i];
        var row = grid.jqGrid("getRowData", tempId);
        var id = row.roleId; // 获取选择行角色id*/
        ids.push(id);
    /*}*/
    layer.confirm(delContext, {
        icon: 3,
        title: "提示"
    },
    function(index) {
        $.get(ctx.path + "/platform/pm/delRole.json?roleIds=" + ids.join(","),
        function(result) {
            if (result.rs == 1) {
                grid.trigger("reloadGrid"); // 刷新表单
                top.toastr.success("删除角色成功！");
            } else {
                top.toastr.warning("删除角色失败！");
            }
        },
        "json");
        layer.close(index);
    });
}



//angular 动态绑定数据
var userModule = angular.module("roleApp",[]);
userModule.controller("roleCtrl",function($scope,$http){
	  $scope.menus = [];
	  //打开新增窗口
	  $scope.openAddPage = function(){
		 $scope.allCheckedFlag = [];
		 parentIndex = layer.open({
	        title: '新增角色',
	        type: 1,
	        area: ['90%', '90%'],
	        fix: true,
	        maxmin: true,
	        btn: ['保存', '取消'],
	        yes: function(index, layero) {
	            $("#dataForm").submit();
	        },
	        content: $('#dataAdd'),
	        cancel: function(index) {
	            FormUtil.resetForm("dataForm");
	        }
	    });
	  	var url = ctx.path +'/platform/pm/getMenusByRoleId.json';
	  	$http({
		      	method:'POST',
					url : url,
					params : { roleId:0}
		      }).success(function (data) {
		    	 $scope.menus = data.data;
		  }).error(function(){
			 
	      });
	  };
	  //打开编辑窗口
	  editPage = $scope.editPage = function(id){
		  $scope.allCheckedFlag = [];
	  	 /* var selRows = grid.jqGrid('getGridParam', 'selarrrow');
	  	  if(selRows.length != 1){
	  	  	top.toastr.warning("请选择一行进行编辑！");
	  	  	return;
	  	  } 
	  	  var row = $("#jqGrid").jqGrid("getRowData",selRows[0]);*/
	  	  $http({
			      	method:'POST',
						url : ctx.path +'/platform/pm/getRole.json',
			    	    params : { roleId:id}
			      }).success(function (data) {
			    	 if(data.rs == -1 ){
		    	      		top.toastr.error("操作失败");
		    	      		return false;
	  	      	 }
	  	         $("#dataEditForm").fill(data.data);//表单数据填充
	  	         $scope.menus = data.menus.data;
	  	         //$("#userEditForm").find("#userId").val(row.userId); 
	  	         parentIndex = layer.open({
	  		       		title:'编辑角色',
	  		       	    type: 1,
	  		       	    area: ['90%', '90%'],
	  		       	    fix: true,
	  		       	    maxmin: true,
	  			       	btn:['保存','取消'],
	  			 	    yes:function(index, layero){
	  			 	    	$("#dataEditForm").submit();
	  			 	    },
	  		       	    content: $('#dataEdit'),
	  		       	    cancel:function(index){
	  		       	    	FormUtil.resetForm("dataEditForm");
	  		       	    }
	  		       	}); 
			  }).error(function(){
				  top.toastr.error("操作失败");
		      });
	  	
	  };
	  $scope.allCheckedFlag = [];
	  //角色全选方法
	  $scope.checkedAll = function(menu){
		$scope.allCheckedFlag[menu.menu_id] = !$scope.allCheckedFlag[menu.menu_id];
	  	$.each(menu.submenusList,function(i,row){
	  		this.checked = $scope.allCheckedFlag[menu.menu_id];
			});
	  }
	  $scope.checked = function(menu,submenuList){
		menu.checked = !menu.checked; 
	  	if($scope.allCheckedFlag[menu.parent_id]){
	  		$scope.allCheckedFlag[menu.parent_id] = false;
	  	}else{
	  		if(menu.checked){ 
	  			$.each(submenuList,function(i,row){
	  				if(!this.checked){
	  					return false;
	  				}
	  				if(i == submenuList.length - 1){
	  					$scope.allCheckedFlag[menu.parent_id] = true;
	  				}
	  			});
	  		}
	  	}
	  }
});

