var setting = {
				view: {
					addHoverDom: addHoverDom,
					removeHoverDom: removeHoverDom,
					selectedMulti: false
				},
				async: {
					enable: true,
					url: ctx.path+"/platform/pm/getMenusByMenuTypes.do",
					otherParam: { "menuTypes":"0,1","states":"1,2"},
					dataFilter: filter
				},
				data: {
					key: {
						name: "menuName",
						url:"none"
					},
					simpleData: {
						enable:true,
						idKey: "menuId",
						pIdKey: "parentId",
						rootPId: ""
					}
				},
				callback: {
					onAsyncSuccess: onAsyncSuccess,
					onNodeCreated: zTreeOnNodeCreated,
					onClick: zTreeOnClick
				}
			};
			function filter(treeId, parentNode, childNodes) {
				if (!childNodes) return null;
				return childNodes.data;
			}
			function onAsyncSuccess(event, treeId, treeNode, msg) {
				zTree = $.fn.zTree.getZTreeObj(treeId);
				zTree.expandAll(true);
			}
			function zTreeOnNodeCreated(event, treeId, treeNode) {
				if(treeNode.state==2){
					treeNode.icon=ctx.path+"/resources/components/zTree/css/zTreeStyle/img/custom/disable.png";
				}
				if(treeNode.menuType==0){
//					treeNode.icon=ctx.path+"/resources/components/zTree/css/zTreeStyle/img/diy/1_open.png";
					treeNode.isParent=true;
				}
//				else{
//					treeNode.icon=ctx.path+"/resources/components/zTree/css/zTreeStyle/img/diy/3.png";
//				}
				$.fn.zTree.getZTreeObj(treeId).updateNode(treeNode);
			}
			function zTreeOnClick(event, treeId, treeNode) {
				if(treeNode.menuType==1){
					$("#menuName").html(treeNode.menuName);
					$("#menuTable").show();
					grid.jqGrid('setGridParam',{  
			            datatype:'json',  
			            postData:{'parentId':treeNode.menuId}, 
			            page:1  
			        }).trigger("reloadGrid"); 
				}else{
					$("#menuTable").hide();
				}
			}
			
			var toggleMenuType=function(menuFormId,isFuncMenu){
				$("#"+menuFormId+" select[name='menuType']").empty();
				if(isFuncMenu){
					$("#"+menuFormId+" select[name='menuType']").append('<option value="2">菜单按钮</option>');
				}else{
					$("#"+menuFormId+" select[name='menuType']").append('<option value="0">菜单分组</option><option value="1">功能菜单</option>');
				}
			};
			
			var menuTypeChange=function(menuType,menuTypeDivId){
				if(menuType==1||menuType==2){
					$("#"+menuTypeDivId).show();
				}else{
					$("#"+menuTypeDivId).hide();
				}
			};
			
			var newCount = 1;
			var currentNode=null;
			var showAddMenuDiv=function(isFuncMenu){
				toggleMenuType("menuForm",isFuncMenu);
				if(isFuncMenu){
					var nodes = zTree.getSelectedNodes();
					$("#menuForm").fill({parentId:nodes[0].menuId,menuCode:nodes[0].menuCode+"_"});
				}else{
					var defaultMenuCode="";
					if(currentNode.menuCode!=""){
						defaultMenuCode=currentNode.menuCode+"_";
					}
					$("#menuForm").fill({parentId:currentNode.menuId,menuCode:defaultMenuCode});
				}
				parentIndex = layer.open({
					title:'新增菜单',
				    type: 1,
				    area: ['45%', '70%'],
				    fix: true,
				    maxmin: true,
				    btn:['提交','取消'],
				    yes:function(index, layero){
				    	$("#menuForm").submit();
				    },
				    content: $('#menuDiv'),
				    cancel:function(index){
				    	FormUtil.resetForm("menuForm");
				    }
				});
			};
			
			var showUpdateMenuDiv=function(isFuncMenu){
				toggleMenuType("menuUpdateForm",isFuncMenu);
				var menuType=null;
				if(isFuncMenu){
					var selRows = grid.jqGrid('getGridParam', 'selarrrow');
					if(selRows.length!=1){
						top.toastr.warning("请选择一行数据");
						return false;
					}
					var rowData = grid.jqGrid('getRowData',selRows[0]);
					rowData.menuType=2;
					menuType=rowData.menuType;
					$("#menuUpdateForm").fill(rowData);
				}else{
					menuType=currentNode.menuType;
					$("#menuUpdateForm").fill(currentNode);
				}
				menuTypeChange(menuType,'urlUpdateDiv');
				parentIndex = layer.open({
					title:'编辑菜单',
				    type: 1,
				    area: ['45%', '70%'],
				    fix: true,
				    maxmin: true,
				    btn:['提交','取消'],
				    yes:function(index, layero){
				    	$("#menuUpdateForm").submit();
				    },
				    content: $('#menuUpdateDiv'),
				    cancel:function(index){
				    	FormUtil.resetForm("menuUpdateForm");
				    }
				});
			};
			
			function addHoverDom(treeId, treeNode) {
				currentNode=treeNode;
				var sObj = $("#" + treeNode.tId + "_span");
				if ($("#removeBtn_"+treeNode.tId).length>0) return;
				var enableStr = "<span class='button enable' id='enableBtn_" + treeNode.tId + "' title='恢复' onfocus='this.blur();' onclick='disableMenu(0)' ></span>";
				var disableStr = "<span class='button disable' id='disableBtn_" + treeNode.tId + "' title='禁用' onfocus='this.blur();' onclick='disableMenu(1)' ></span>";
				var addStr = "<span class='button add' id='addBtn_" + treeNode.tId + "' title='新增' onfocus='this.blur();' onclick='showAddMenuDiv(false)' ></span>";
				var editStr = "<span class='button edit' id='editBtn_" + treeNode.tId + "' title='编辑' onfocus='this.blur();' onclick='showUpdateMenuDiv(false)' ></span>";
				var delStr= "<span class='button remove' id='removeBtn_" + treeNode.tId + "' title='删除' onfocus='this.blur();' onclick='delMenu()'></span>";
				var upStr= "<span class='button up' id='upBtn_" + treeNode.tId + "' title='上移' onfocus='this.blur();' onclick='changeMenusSortby(1)'></span>";
				var downStr= "<span class='button down' id='downBtn_" + treeNode.tId + "' title='下移' onfocus='this.blur();' onclick='changeMenusSortby(0)'></span>";
				sObj.after(downStr);
				sObj.after(upStr);
				sObj.after(delStr);
				sObj.after(editStr);
				if(treeNode.menuType==0){					
					sObj.after(addStr);
				}
				if(treeNode.state==2){					
					sObj.after(enableStr);
				}else{
					sObj.after(disableStr);
				}
			};
			function removeHoverDom(treeId, treeNode) {
				$("#enableBtn_"+treeNode.tId).unbind().remove();
				$("#disableBtn_"+treeNode.tId).unbind().remove();
				if(treeNode.menuType==0){									
					$("#addBtn_"+treeNode.tId).unbind().remove();
				}
				$("#editBtn_"+treeNode.tId).unbind().remove();
				$("#removeBtn_"+treeNode.tId).unbind().remove();
				$("#upBtn_"+treeNode.tId).unbind().remove();
				$("#downBtn_"+treeNode.tId).unbind().remove();
			};
			
			function delMenu(){
					 var delContext = "您确定删除菜单【" + currentNode.menuName + "】吗？<br>";
						   delContext += "删除成功之后，该操作将无法恢复。";
					 layer.confirm(delContext, {icon: 3, title:"提示"},
					 function(index){
					    	$.post(ctx.path+'/platform/pm/delMenus.do', {menuIds:currentNode.menuId}, function (data, status){
								 if(data.rs==1){
									 zTree.removeNode(currentNode);
			  						 top.toastr.success("删除菜单成功！");
								 }else{
									 //top.toastr.warning("删除菜单失败！");
								 }
							},"json");
					    	layer.close(index);
					 });
			}
			
			function disableMenu(isDisable){
				var context = "您确定";
				var stateContext=null;
				if(isDisable==1){
					stateContext="禁用";
				}else{
					stateContext="恢复";
				}
				context+=stateContext;
				context+="菜单【" + currentNode.menuName + "】吗？";
				 layer.confirm(context, {icon: 3, title:"提示"},
				 function(index){
				    	$.post(ctx.path+'/platform/pm/disableMenus.do', {menuIds:currentNode.menuId,isDisable:isDisable}, function (data, status){
							 if(data.rs==1){
								var enableStr = "<span class='button enable' id='enableBtn_" +currentNode.tId + "' title='恢复' onfocus='this.blur();' onclick='disableMenu(0)' ></span>";
								var disableStr = "<span class='button disable' id='disableBtn_" + currentNode.tId + "' title='禁用' onfocus='this.blur();' onclick='disableMenu(1)' ></span>";
								 if(isDisable==1){
									 $("#enableBtn_"+currentNode.tId).unbind().remove();
									 $("#disableBtn_"+currentNode.tId).unbind().remove();
									 $("#" + currentNode.tId + "_span").after(enableStr);
									 currentNode.state=2;
									 currentNode.icon=ctx.path+"/resources/components/zTree/css/zTreeStyle/img/custom/disable.png";									 
								 }else{
									 $("#enableBtn_"+currentNode.tId).unbind().remove();
									 $("#disableBtn_"+currentNode.tId).unbind().remove();
									 $("#" + currentNode.tId + "_span").after(disableStr);
									 currentNode.state=1;
									 currentNode.icon=null;
								 }
								 zTree.updateNode(currentNode); 
		  						 top.toastr.success(stateContext+"菜单成功！");
							 }
						},"json");
				    	layer.close(index);
				 });
			}
			
			function disableFuncMenu(isDisable){
				var selRows = grid.jqGrid('getGridParam', 'selarrrow');  //选中行id数组
				 if(selRows.length <= 0){
					 top.toastr.warning("请选择菜单按钮");
					 return false;
				 }
				 var ids=new Array();
				 var len = selRows.length;
				 for(var i = 0;i < len ;i ++) {  
					  	var tempId = selRows[i];
					  	var row = grid.jqGrid("getRowData",tempId);
					  	var id = row.menuId;//获取选择行数据id
					  	ids.push(id);
				 }
				 
				 var context = "您确定";
					var stateContext=null;
					if(isDisable==1){
						stateContext="禁用";
					}else{
						stateContext="恢复";
					}
					context+=stateContext;
					if(selRows.length == 1){
						context+="菜单【" + currentNode.menuName + "】吗？";
					 } else {
						context += "选中的" + selRows.length + "个菜单吗？<br>";
					 }
				 layer.confirm(context, {icon: 3, title:"提示"},
				 function(index){
				    	$.post(ctx.path+'/platform/pm/disableMenus.do', {menuIds:ids.join(","),isDisable:isDisable}, function (data, status){
							 if(data.rs==1){
								 grid.trigger("reloadGrid");//刷新表单
		  						 top.toastr.success(stateContext+"菜单成功！");
							 }
						},"json");
				    	layer.close(index);
				 });
			}
			
			function changeMenusSortby(isUp){
		    	$.post(ctx.path+'/platform/pm/changeMenusSortby.do', {menuIds:currentNode.menuId,isUp:isUp}, function (data, status){
					 if(data.rs==1){
						 var msg=null;
						 if(isUp){							 
							 zTree.moveNode(currentNode.getPreNode(),currentNode,"prev");
							 msg="上移成功";
						 }else{
							 zTree.moveNode(currentNode.getNextNode(),currentNode,"next");
							 msg="下移成功";
						 }
  						 top.toastr.success(msg);
					 }else if(data.rs==0){
						 top.toastr.warning("移动失败！");
					 }
				},"json");
			}
			
			
			function changeFuncMenusSortby(isUp){
				var selRows = grid.jqGrid('getGridParam', 'selarrrow');  //选中行id数组
				 if(selRows.length <= 0){
					 top.toastr.warning("请选择需要移动的菜单按钮");
					 return false;
				 }
				 var ids=new Array();
				 var len = selRows.length;
				 for(var i = 0;i < len ;i ++) {  
					  	var tempId = selRows[i];
					  	var row = grid.jqGrid("getRowData",tempId);
					  	var id = row.menuId;//获取选择行数据id
					  	ids.push(id);
				 }  
		    	$.post(ctx.path+'/platform/pm/changeMenusSortby.do', {menuIds:ids.join(","),isUp:isUp}, function (data, status){
					 if(data.rs==1){
						 var msg=null;
						 grid.trigger("reloadGrid");//刷新表单
						 if(isUp){							 
							 msg="上移成功";
						 }else{
							 msg="下移成功";
						 }
  						 top.toastr.success(msg);
					 }else if(data.rs==0){
						 top.toastr.warning("移动失败！");
					 }
				},"json");
			}
			
			function delFuncMenus(){
				var selRows = grid.jqGrid('getGridParam', 'selarrrow');  //选中行id数组
				 if(selRows.length <= 0){
					 top.toastr.warning("请选择数据删除");
					 return false;
				 }
				 var ids=new Array();
				 var len = selRows.length;
				 var delContext = "您确定删除";
				 var rowData = new Object();
				 if(selRows.length == 1){  //删除单条数据
					rowData = grid.jqGrid('getRowData',selRows[0]);
					delContext += "菜单【" + rowData.menuName + "】吗？<br>";
					delContext += "删除成功之后，该操作将无法恢复。";
				 } else {
					delContext += "选中的" + selRows.length + "条数据吗？<br>";
					delContext += "删除成功之后，该操作将无法恢复。";
				 }
				 for(var i = 0;i < len ;i ++) {  
				  	var tempId = selRows[i];
				  	var row = grid.jqGrid("getRowData",tempId);
				  	var id = row.menuId;//获取选择行数据id
				  	ids.push(id);
				  }  
				 layer.confirm(delContext, {icon: 3, title:"提示"},
				 function(index){
				    	$.post(ctx.path+'/platform/pm/delMenus.do', {menuIds:ids.join(",")}, function (data, status){
							 if(data.rs==1){
								 grid.trigger("reloadGrid");//刷新表单
		  						 top.toastr.success("删除菜单成功！");
							 }else{
								 top.toastr.warning("删除菜单失败！");
							 }
						},"json");
				    	layer.close(index);
				 });
			}
			

var zTree=null;
var grid = {};
var validator;
var parentIndex = null;
$(function() {
	$.fn.zTree.init($("#treeDemo"), setting, []);
	$.jgrid.defaults.styleUI = 'Bootstrap';
	grid = $("#jqGrid").jqGrid({
		beforeRequest: function(){
			$(".ui-jqgrid .jqgrid-overlay").attr("style","display:block");
		},  		 
		loadComplete: function(xhr){
			$(".ui-jqgrid .jqgrid-overlay").attr("style","display:none");
		},  
		url : ctx.path + "/platform/pm/getFuncMenusByParentId.do",
		mtype : "POST",
		datatype : "json",// 数据来源，本地数据
		height : ($(window).height() - 265),
		// width:1000,//这个宽度不能为百分比
		multiselect : true,
		autowidth : true,// 自动宽
		shrinkToFit : true,
		rowNum : 20,
		rowList : [ 20, 50, 100 ],
		colNames : [ '功能id', '菜单名称','菜单编码', '菜单描述','状态' ],
		colModel : [ {
			name : 'menuId',
			index : 'menuId',
			editable : true,
			align : 'center',
			key : true,
			hidden : true
		}, {
			name : 'menuName',
			index : 'menuName',
			editable : true,
			width : '10',
			align : 'left'
		}, {
			name : 'menuCode',
			index : 'menuCode',
			editable : true,
			width : '15',
			align : 'left'
		}, {
			name : 'descriptions',
			index : 'descriptions',
			editable : true,
			width : '10',
			align : 'left'
		}, {
			name : 'state',
			index : 'state',
			editable : true,
			width : '5',
			align : 'left',
			formatter:function(cellvalue, options, rowObject){
				if(cellvalue==1) return "正常";
				else return "禁用";
			}
		}],
		rownumbers : true,// 添加左侧行号
		altRows : true,// 设置为交替行表格,默认为false
		pager : "#jqGridPager",
		viewrecords : true,
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
    
    $("#tree").height($(window).height() - 155);
    
	$(window).bind('resize', function() {
		var width = $('.jqGrid_wrapper').width();
		$('#jqGrid').setGridWidth(width);
		var newHeight = ($(window).height() - 265);
		$("#jqGrid").jqGrid('setGridHeight', newHeight);
		$("#tree").height($(window).height() - 155);
	});
	$("#menuTable").hide();
	
	$("#menuForm").validate({
		 rules: {
			"menuCode" : {remote: ctx.path+"/platform/pm/checkMenuForm.do"}
		 },
		 messages: {
			"menuCode" : {remote: "菜单编码重复！"}
		 },
		 submitHandler: function(form){
			 $(form).ajaxSubmit({
			        //表单提交成功后的回调
			        success: function(responseText, statusText, xhr, $form){
			        	if(responseText.rs == 1){
			        		 var menuObj=$("#menuForm").serializeJson();
			        		 if(menuObj.menuType==2){
			        			grid.trigger("reloadGrid"); 
			        		}else{				        			
			        			menuObj.menuId=responseText.data;
			        			var nodes = zTree.getSelectedNodes();
			        			var parentNode = nodes[0];
			        			zTree.addNodes(parentNode,menuObj);
			        		}
							 top.toastr.success("新增菜单成功");
							 layer.close(parentIndex); //再执行关闭
							 FormUtil.resetForm("menuForm");
			        	}
			        }
			    }); 
		 }
	 });
	
	 $("#menuUpdateForm").validate({
		 rules: {
			"menuCode" : {remote: {
				type:"POST",
				url:ctx.path+"/platform/pm/checkMenuForm.do",
				data:{
					menuId : function(){
						return $("#menuUpdateForm input[name='menuId']").val();
					}
				}
			}}
		 },
		 messages: {
			"menuCode" : {remote: "菜单编码重复！"}
		 },
		 submitHandler: function(form){
			 $(form).ajaxSubmit({
			        //表单提交成功后的回调
			        success: function(responseText, statusText, xhr, $form){
			        	if(responseText.rs == 1){
			        		var menuObj=$("#menuUpdateForm").serializeJson();
			        		if(menuObj.menuType==2){
			        			grid.trigger("reloadGrid"); 
			        		}else{			        			
			        			var nodes = zTree.getSelectedNodes();
			        			var currentNode = nodes[0];
			        			currentNode.menuType=menuObj.menuType;
			        			currentNode.menuCode=menuObj.menuCode;
			        			currentNode.menuName=menuObj.menuName;
			        			currentNode.descriptions=menuObj.descriptions;
			        			zTree.updateNode(currentNode); 
			        		}
							 top.toastr.success("修改菜单成功");
							 layer.close(parentIndex); //再执行关闭
							 FormUtil.resetForm("menuUpdateForm");
			        	}
			        }
			    }); 
		 }
	 });	
});