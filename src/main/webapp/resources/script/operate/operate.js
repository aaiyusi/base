/**
 * 运营js
 */
var grid = {};
var parentIndex = null;
function operate(cellValue,options,rowObject){
	var template = " <a  onclick=\"openEnterprisePage("+rowObject.enterpriseId+")\" title='编辑'>&nbsp;"+rowObject.enterpriseCode+"</a>&nbsp;&nbsp;";         
        return template;
}
  
$(document).ready(
		function() {
			$.jgrid.defaults.styleUI = 'Bootstrap';
			grid = $("#jqGrid")
					.jqGrid(
							{
								beforeRequest: function(){
									$(".ui-jqgrid .jqgrid-overlay").attr("style","display:block");
								},  		 
								loadComplete: function(xhr){
									$(".ui-jqgrid .jqgrid-overlay").attr("style","display:none");
								},  
								url : ctx.path + '/api/sys/queryEnterpriseList.do',
								mtype : "POST",
								datatype : "json",
								height : top.getFrameHeight()
										- $("#buttonDiv").outerHeight()
										- $("#serachDiv").outerHeight() - 75,
								colNames : [  '企业id', '企业编号', '公司名称', '注册账号', '联系人','联系人电话', '联系人邮箱','注册时间','用户数 '],
								colModel : [{name : 'enterpriseId',index : 'enterpriseId',hidden : true},
								            {name : 'enterpriseCode',index : 'enterpriseCode',editable: true,formatter:operate},
								            {name : 'companyName',editable : true,index : 'companyName',width : 100}, 
								            {name : 'registeAccount',editable : true,index : 'registeAccount',width : 100}, 
											{name : 'legalPerson',editable : true,index : 'legalPerson',width : 100}, 
											{name : 'contactTel',editable : true,index : 'contactTel',width : 100},
											{name : 'contactEmail',editable : true,index : 'contactEmail',width : 100},
											{name : 'createDate',editable : true,index : 'createDate',width : 100,formatter:function(cellvalue){
									    		if(cellvalue){
									    			return DateUtil.getSmpFormatDateByLong(cellvalue,false);
									    		}
									    	}},
											{name : 'useUserCount',editable : true,index : 'useUserCount',width : 100}],
							
								multiselect : true,
								autowidth : true,// 自适应宽度
								shrinkToFit : true,
								rowNum : 20,
								rowList : [ 10, 20, 50 ],
								rownumbers : true,// 添加左侧行号
								altRows : true,// 设置为交替行表格,默认为false
								pager : '#jqGridPager',
								viewrecords : true, // 是否在浏览导航栏显示记录总数
								hidegrid : false,
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
			$(window).bind(
					'resize',
					function() {
						var width = $('.jqGrid_wrapper').width();
						$('#jqGrid').setGridWidth(width);
						var newHeight = top.getFrameHeight()
								- $("#buttonDiv").outerHeight()
								- $("#serachDiv").outerHeight() - 75;
						$("#jqGrid").jqGrid('setGridHeight', newHeight);
					});

			// 刷新表单
			function refreshGrid() {
				grid.trigger("reloadGrid");
			}

			// 校验新增表单
			$("#dataForm").validate(
					{
						submitHandler : function(form) {
							$(form).ajaxSubmit({
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
									var rowObject = responseText.data;
									if(rowObject.platformType!=0){
										openAuthorizationPage(rowObject.shopId,rowObject.platformType);
									}else{
										authorizationOtherShop(+rowObject.shopId,rowObject.shopName);
									}
								}
							});
						}
					});

			// 编辑数据
			$("#dataEditForm").validate(
					{
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
											top.toastr.success("编辑数据成功");
											layer.close(parentIndex); // 再执行关闭
											FormUtil.resetForm("dataEditForm");
										}
									});
						}
					});
			
			//编辑店铺成功
			$("#dataFormEdit").validate({
				 submitHandler: function(form){
					 $(form).ajaxSubmit({
					        //表单提交成功后的回调
					        success: function(responseText, statusText, xhr, $form){
					        	if(responseText.rs == -1){
					        		return false;
					        	}
					        	refreshGrid();//重新加载grid
					        	top.toastr.success("编辑店铺成功");
								layer.close(parentIndex); //再执行关闭
								FormUtil.resetForm("dataFormEdit");
					        }
					    }); 
				 }
			});
			
			//编辑店铺名称成功
			$("#dataFormChangeName").validate({
				 submitHandler: function(form){
					 if(  $("#dataChangeName").find("input[name='shopName']").val() ==  $("#dataChangeName").find("input[name='newShopName']").val() ){
						 top.toastr.error("新店铺名称和原店铺名称不能重复");
						 return false;
					 }
					 
					 $(form).ajaxSubmit({
					        //表单提交成功后的回调
					        success: function(responseText, statusText, xhr, $form){
					        	if(responseText.rs == -1){
					        		return false;
					        	}
					        	refreshGrid();//重新加载grid
					        	top.toastr.success("修改店铺名称成功");
								layer.close(parentIndex); //再执行关闭
								FormUtil.resetForm("dataFormChangeName");
					        }
					    }); 
				 }
			});
			
			//提交授权
			$("#submitAuthorization").validate({
				 submitHandler: function(form){
					 $(form).ajaxSubmit({
					        //表单提交成功后的回调
					        success: function(responseText, statusText, xhr, $form){
					        	if(responseText.rs == -1){
					        		return false;
					        	}
					        	var json = strToJson(responseText);
					        	if( $form.find("input[name='platformType']").val()==2){
					        		json = json.data;
					        	}
					        	json.shopId = $form.find("input[name='shopId']").val();
					        	json.platformType =  $form.find("input[name='platformType']").val();  //授权平台阿里
					        	var dat = objectToJson(json);
					        	//授权
					        	$.ajax({
					                type: "POST",
					                url: ctx.path +'/api/shop/authorizationShop',
					                data:  json ,
					                dataType: "json",
					                success: function(data){
					                	if(data.rs==1){
								        	top.toastr.success("授权成功");
								        	refreshGrid();//重新加载grid
						                	layer.close(parentIndex); //再执行关闭
											$("#submitAuthorization").find("#wizard-2-p-0").show();
											$("#submitAuthorization").find("#wizard-2-p-1").hide();
											FormUtil.resetForm("submitAuthorization");
					                	}
					                	
					                } 
					            });
					        },
					        error: function(jqXHR , textStatus , errorThrown){
					        	var json = strToJson(jqXHR.responseText)
					        	top.toastr.error(json.error_description);
					        	return false;
						    }
					    }); 
				 }
			});
			
			//屏幕发生变化的时候计算表格高度
		    $(window).bind('resize', function () {
		        var width = $('.jqGrid_wrapper').width();
		        $('#jqGrid').setGridWidth(width);
		        var newHeight=top.getFrameHeight() - $("#buttonDiv").outerHeight() - $("#serachDiv").outerHeight() - 84;
				$("#jqGrid").jqGrid('setGridHeight',newHeight);
		    });	
		    
		});
 

//打开企业信息页面
function openEnterprisePage(enterpriseId){
    parentIndex = layer.open({
    title:'企业信息',
    type: 2,
    area: ['90%', '90%'],
    fix: true,
    maxmin: true,
    content: ctx.path + '/api/sys/goGetEnterpriseInfoPage?enterpriseId='+enterpriseId,
    success:function(layero, index){
    	
    }
   });
}


 
  
 
 