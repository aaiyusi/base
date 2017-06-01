var grid = {};
var rolesMap={};
var parentIndex = null;

var editPage ;
function operate(cellValue,options,rowObject){
   	var template = "<a  onclick=\"editPage("+rowObject.userId+")\" title='编辑'><i class=\"fa fa-edit\"></i>&nbsp;编辑</a>&nbsp;&nbsp;";
   	if(rowObject.isAdmin != 1 && rowObject.isManager != 1){
   		template += "<a  onclick=\"del("+rowObject.userId+",'"+rowObject.loginName+"')\" title='删除'><i class=\"fa fa-trash\"></i>&nbsp;删除</a>&nbsp;&nbsp;";
   	}
	return template;
};
   
$(document).ready(function(){
	$.jgrid.defaults.styleUI = 'Bootstrap';
	grid = $("#jqGrid").jqGrid({
		beforeRequest: function(){
			$(".ui-jqgrid .jqgrid-overlay").attr("style","display:block");
		},  		 
		loadComplete: function(xhr){
			$(".ui-jqgrid .jqgrid-overlay").attr("style","display:none");
		},  
		url : ctx.path +'/platform/pm/queryUsers.do',
		mtype:"POST",
		datatype : "json",
		height: top.getFrameHeight() - $("#buttonDiv").outerHeight() - $("#serachDiv").outerHeight() - 85,
		colNames : ['员工ID','登录名', '员工姓名', '邮箱', '手机', '最后登陆时间','操作'],
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
                 }},
                 {name : 'act',index:'act',sortable:false ,title: false,formatter:operate}
 	    ],
 	    //multiselect:true,
 	    autowidth: true,//自适应宽度 
 	    shrinkToFit: true,
 	    rowNum : 20,
 	    rowList: [10, 20, 50],
 	    rownumbers:false,//添加左侧行号
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
        var newHeight=top.getFrameHeight() - $("#buttonDiv").outerHeight() - $("#serachDiv").outerHeight() - 85;
		$("#jqGrid").jqGrid('setGridHeight',newHeight);
    });	
    
    //刷新表单
    function refreshGrid(){
    	grid.trigger("reloadGrid");
    }
    //校验新增表单
	$("#userForm").validate({
		 submitHandler: function(form){
			 $(form).ajaxSubmit({
				 	layerMaskFlag:true,
			        //表单提交成功后的回调
			        success: function(responseText, statusText, xhr, $form){
			        	if(responseText.rs == -1){
			        		return false;
			        	}
			        	refreshGrid();//重新加载grid
			        	top.toastr.success("新增员工成功");
			        	FormUtil.resetForm("userForm");
						layer.close(parentIndex); //再执行关闭 
			        }
			    }); 
		 }
	 });
	 
	 //编辑员工
	 $("#userEditForm").validate({
		 submitHandler: function(form){
			 $(form).ajaxSubmit({
				 	layerMaskFlag:true,
			        //表单提交成功后的回调
			        success: function(responseText, statusText, xhr, $form){
			        	if(responseText.rs == -1){
			        		return false;
			        	}
			        	refreshGrid();//重新加载grid
			        	top.toastr.success("编辑员工成功");
						layer.close(parentIndex); //再执行关闭
						FormUtil.resetForm("userEditForm");
			        }
			    }); 
		 }
	 });
		 
});

//打开新增页面
function openAddPage(){
	parentIndex = layer.open({
		title:'新增员工',
	    type: 1,
	    area: ['90%', '90%'],
	    fix: true,
	    maxmin: true,
	    btn:['保存','取消'],
	    yes:function(index, layero){
	    	$("#userForm").submit();
	    },
	    content: $('#userAdd'),
	    cancel:function(index){
	    	FormUtil.resetForm("userForm");
	    }
	});
	
}

//打开编辑页面
/*function editPage(){
  var selRows = grid.jqGrid('getGridParam', 'selarrrow');
  if(selRows.length != 1){
  	top.toastr.warning("请选择一行进行编辑！");
  	return;
  } 
  var row = $("#jqGrid").jqGrid("getRowData",selRows[0]);
  $.ajax({
      url:  ctx.path +'/platform/pm/getUser.json',
      async: true,
      dataType: 'json',
      type: 'POST',
      data: {userId:row.userId},
      success: function(data ){
      	if(data.rs == -1 ){
      		top.toastr.error("操作失败");
      		return false;
      	}
         $("#userEditForm").fill(data.data);//表单数据填充
         $("#userEditForm").find("#userId").val(row.userId); 
         parentIndex = layer.open({
	       		title:'编辑员工',
	       	    type: 1,
	       	    area: ['90%', '90%'],
	       	    fix: true,
	       	    maxmin: true,
		       	btn:['保存','取消'],
		 	    yes:function(index, layero){
		 	    	$("#userEditForm").submit();
		 	    },
	       	    content: $('#userEdit'),
	       	    cancel:function(index){
	       	    	FormUtil.resetForm("userEditForm");
	       	    }
	       	});
      },
      error: function(jqXHR , textStatus , errorThrown){
      	top.toastr.error("操作失败");
      }
    });
}*/

//删除
function del(id,name){
	 var ids=new Array();
	 ids.push(id);
	 /*var selRows = grid.jqGrid('getGridParam', 'selarrrow');  //选中行id数组
	 if(selRows.length <= 0){
		 top.toastr.warning("请选择数据删除");
		 return false;
	 }
	 var ids=new Array();
	 var len = selRows.length;
	 var rowData = new Object();*/
	 var delContext = "您确定删除";
	 //var rowData = new Object();
	 /*if(selRows.length == 1){  //删除单条数据
		rowData = grid.jqGrid('getRowData',selRows[0]);*/
		delContext += "登录名【" + name + "】吗？<br>";
		delContext += "删除成功之后，该操作将无法恢复。";
	/* } else {
		delContext += "选中的" + selRows.length + "条数据吗？<br>";
		delContext += "删除成功之后，该操作将无法恢复。";
	 }
	 for(var i = 0;i < len ;i ++) {  
	  	var tempId = selRows[i];
	  	var row = grid.jqGrid("getRowData",tempId);
	  	var id = row.userId;//获取选择行数据id
	  	ids.push(id);
	  }*/
	 layer.confirm(delContext, {icon: 3, title:"提示"},  
   function(index){
	  	$.get( ctx.path +"/platform/pm/delUsers.json?userIds="+ids.join(","),
	  			function(result){
	  				if(result.rs==1){
	  						grid.trigger("reloadGrid");//刷新表单
	  						top.toastr.success("删除员工成功！");
 					}else{
 						//top.toastr.warning("删除员工失败！");
 					}                 
				  },"json");       	  
	  	layer.close(index);
   });
}

//设置角色
function setRole(){
	var id=grid.jqGrid('getGridParam', 'selrow');
	var ids = grid.jqGrid('getGridParam', 'selarrrow');
	if(id==null){
  	top.toastr.warning("请点击您要设置角色的员工");
  	return;
  }
  if(ids.length > 1){
  	top.toastr.warning("请选择一行进行操作");
   	return;
  }
  var row = grid.jqGrid("getRowData",ids[0]);
	 $.post(ctx.path+'/platform/pm/getUserRoles.do', {userId:row.userId}, function (data, status){
		$("#ownerRole").empty();
		$("#roleList").empty();
		 if(data.rs==1){
			 for(var i=0,len=data.roles.length;i<len;i++){
				 rolesMap[data.roles[i].roleId]=data.roles[i];
				 data.roles[i].isSet=false;
				 for(var j=0,userRolesLen=data.userRoles.length;j<userRolesLen;j++){
					 if(data.roles[i].roleId==data.userRoles[j]){
						 data.roles[i].isSet=true;
						 break;
					 }
				 }
				 if(data.roles[i].isSet){
					 createRoleOption('ownerRole',data.roles[i]);
				 }else{
					 createRoleOption('roleList',data.roles[i]);
				 }
			 }
			 parentIndex = layer.open({
				title:'设置角色',
			    type: 1,
			    area: ['60%', '80%'],
			    fix: false, //不固定
			    maxmin: true,
			    btn:['保存','取消'],
		 	    yes:function(index, layero){
		 	    	saveGroupRole();//保存角色
		 	    },
			    content: $("#roleSet")
			});
		 }
	},"json");
}

//创建角色选项
var createRoleOption=function(selectId,roleObj){
	option = $("#"+selectId);
	option.append(" <option value = " + roleObj.roleId + ">" + roleObj.roleName + "</option>");
	 //return "<li id='roleLi_"+roleObj.roleId+"'  onclick='selectRole("+roleObj.roleId+")' ondblclick='toggleRole("+roleObj.roleId+")'><a>"+roleObj.roleName+"</a></li>";
};

//移除角色
function removeRole() {
	var roleList = $("#roleList");
	$("#ownerRole > option:selected").clone().appendTo(roleList);
	$("#ownerRole > option:selected").remove();
}

//设置角色
function addRole() {
	$("#roleList > option:selected").each(function(){
		var ownerRole = $("#ownerRole:not(:has(option[value="+$(this).val()+"]))");
		if ( ownerRole.length == 0 ) {
			top.toastr.error("访问该角色已添加，请重新选择！");
		} else {
			$(this).clone().appendTo(ownerRole);
			$(this).remove();
		}
	});
}

//保存角色
function saveGroupRole(){
	var selRows =  $("#jqGrid").jqGrid("getGridParam","selarrrow");  //选中行id数组
	var row = $("#jqGrid").jqGrid("getRowData",selRows[0]);
	var setRoleIds=[];
	$("#ownerRole > option").each(function(){
		setRoleIds.push($(this).val());
	});
	$.ajax({
      type: "POST",
      url: ctx.path+'/platform/pm/setUserRoles.do',
      traditional: true,
      data: {userId:row.userId,roleIds:setRoleIds},
      dataType: "json",
      success: function(data){
      	if(data.rs==1){
      		top.toastr.success("设置角色成功");
      		layer.close(parentIndex); //再执行关闭
      	}else{
      		top.toastr.error("设置角色失败");
      	}
      	grid.trigger("reloadGrid");//重新加载grid
   	}
  });
}



//angular 动态绑定数据
var userModule = angular.module("userApp",[]);
userModule.controller("userCtrl",function($scope,$http){
	$scope.roles = [];
	$scope.shops = [];
	$scope.whouses = [];
	//打开新增窗口
    $scope.openAddPage = function(){
    	$scope.whAllchecked = false; 
    	$scope.roleAllchecked = false; 
    	$scope.shopAllchecked = false; 
    	parentIndex = layer.open({
    		title:'新增员工',
    	    type: 1,
    	    area: ['90%', '90%'],
    	    fix: true,
    	    maxmin: true,
    	    btn:['保存','取消'],
    	    yes:function(index, layero){
    	    	$("#userForm").submit();
    	    },
    	    content: $('#userAdd'),
    	    cancel:function(index){
    	    	FormUtil.resetForm("userForm");
    	    }
    	});
    	var url = ctx.path +'/platform/pm/getRolesAndMenus.json';
    	$http({
		      	method:'POST',
					url : url,
		      }).success(function (data) {
		    	$scope.roles = data.roles;
		    	$scope.shops = data.shops;
		    	$scope.whouses = data.whouses;
		  }).error(function(){
			 
	      });
    };

    //打开编辑窗口
    editPage = $scope.editPage = function(id){
    	  $scope.whAllchecked = false; 
    	  $scope.roleAllchecked = false; 
    	  $scope.shopAllchecked = false; 
    	  /*var selRows = grid.jqGrid('getGridParam', 'selarrrow');
    	  if(selRows.length != 1){
    	  	top.toastr.warning("请选择一行进行编辑！");
    	  	return;
    	  }*/
    	  //var row = $("#jqGrid").jqGrid("getRowData",selRows[0]);
    	  $http({
		      	method:'POST',
					url : ctx.path +'/platform/pm/getUser.json',
		    	    params : { userId:id}
		      }).success(function (data) {
		    	 if(data.rs == -1 ){
	    	      		top.toastr.error("操作失败");
	    	      		return false;
    	      	 }
    	         $("#userEditForm").fill(data.data);//表单数据填充
    	         //$("#userEditForm").find("#userId").val(row.userId); 
    	         parentIndex = layer.open({
    		       		title:'编辑员工',
    		       	    type: 1,
    		       	    area: ['90%', '90%'],
    		       	    fix: true,
    		       	    maxmin: true,
    			       	btn:['保存','取消'],
    			 	    yes:function(index, layero){
    			 	    	$("#userEditForm").submit();
    			 	    },
    		       	    content: $('#userEdit'),
    		       	    cancel:function(index){
    		       	    	FormUtil.resetForm("userEditForm");
    		       	    }
    		       	});
    	         $scope.roles = data.roles;
 		    	 $scope.shops = data.shops;
 		    	 $scope.whouses = data.whouses;
		  }).error(function(){
			  top.toastr.error("操作失败");
	      });
    	
    };
    //角色全选方法
    $scope.checkedAllRole = function(){
    	$scope.roleAllchecked = !$scope.roleAllchecked;
    	$.each($scope.roles,function(i,row){
    		this.checked = $scope.roleAllchecked;
		});
    }
    $scope.checkedRole = function(role){
    	role.checked = !role.checked; 
    	if($scope.roleAllchecked){
    		$scope.roleAllchecked = false;
    	}else{
    		if(role.checked){ 
    			$.each($scope.roles,function(i,row){
    				if(!this.checked){
    					return false;
    				}
    				if(i == $scope.roles.length - 1){
    					$scope.roleAllchecked = true;
    				}
    			});
    		}
    	}
    }
    //店铺全选方法
    $scope.checkedAllShop = function(){
    	$scope.shopAllchecked = !$scope.shopAllchecked;
    	$.each($scope.shops,function(i,row){
    		this.checked = $scope.shopAllchecked;
		});
    }
    $scope.checkedShop = function(shop){
    	shop.checked = !shop.checked; 
    	if($scope.shopAllchecked){
    		$scope.shopAllchecked = false;
    	}else{
    		if(shop.checked){ 
    			$.each($scope.shops,function(i,row){
    				if(!this.checked){
    					return false;
    				}
    				if(i == $scope.shops.length - 1){
    					$scope.shopAllchecked = true;
    				}
    			});
    		}
    	}
    }
    //仓库全选方法
    $scope.checkedAllWH = function(){
    	$scope.whAllchecked = !$scope.whAllchecked;
    	$.each($scope.whouses,function(i,row){
    		this.checked = $scope.whAllchecked;
		});
    }
    $scope.checkedWH = function(whouse){
    	whouse.checked = !whouse.checked; 
    	if($scope.whAllchecked){
    		$scope.whAllchecked = false;
    	}else{
    		if(whouse.checked){ 
    			$.each($scope.whouses,function(i,row){
    				if(!this.checked){
    					return false;
    				}
    				if(i == $scope.whouses.length - 1){
    					$scope.whAllchecked = true;
    				}
    			});
    		}
    	}
    }
});
 
