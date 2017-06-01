$.validator.setDefaults({
	errorElementClass: "hidden"
})
var grid = {};
var parentIndex = null;
function operate(cellValue,options,rowObject){
	var template = " <a  onclick=\"openEditPage("+rowObject.shopId+")\" title='编辑'><i class=\"fa fa-edit\"></i>&nbsp;编辑</a>&nbsp;&nbsp;";
        template += "<a  onclick=\"openChangeNamePage("+rowObject.shopId+")\" title='更名'><i class=\"fa fa-retweet\"></i>&nbsp;更名</a>&nbsp;&nbsp;";
        if(rowObject.isUse==1){
        	template += "<a  onclick=\"disable("+rowObject.shopId+",'"+rowObject.shopName+"')\" title='禁用'><i class=\"fa fa-ban\"></i>&nbsp;禁用</a>&nbsp;&nbsp;";
        }
        if(rowObject.isUse==0){
        	template += "<a  onclick=\"enable("+rowObject.shopId+",'"+rowObject.shopName+"')\" title='启用'><i class=\"fa fa-circle-o\"></i>&nbsp;启用</a>&nbsp;&nbsp;";
        }
        if(rowObject.platformType!=0){
        	template += "<a  onclick=\"openAuthorizationPage("+rowObject.shopId+","+rowObject.platformType+")\" title='授权'><i class=\"fa fa-legal\"></i>&nbsp;授权</a>&nbsp;&nbsp;";
        }else if ( rowObject.platformType == 0  && rowObject.state != 1){
        	template += "<a  onclick=\"authorizationOtherShop("+rowObject.shopId+",'"+rowObject.shopName+"')\" title='授权'><i class=\"fa fa-legal\"></i>&nbsp;授权</a>&nbsp;&nbsp;";
        }
        
        return template;
}

function operatePlatformType(cellValue,options,rowObject){
	var template = ""
	if(rowObject.platformType==1){
		template = "Aliexpress";
	}else if(rowObject.platformType==2){
		template = "Wish";
	}else if(rowObject.platformType==0){
		template = "other";
	}
	return template;
}

function operateIsUse(cellValue,options,rowObject){
	var template = ""
	if(rowObject.isUse==1){
		template = "启用";
	}else if(rowObject.isUse==0){
		template = "禁用";
	}
	return template;
	
}
function operateState(cellValue,options,rowObject){
	var template = ""
	if(rowObject.state==1){
		template = "Token令牌授权成功";
	}else if(rowObject.state==0){
		template = "Token令牌未授权";
	}
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
								url : ctx.path + '/api/shop/queryShopList.do',
								mtype : "POST",
								datatype : "json",
								height : top.getFrameHeight()
										- $("#buttonDiv").outerHeight()
										- $("#serachDiv").outerHeight() - 75,
								colNames : [  '店铺id', '名称', '平台', '账号', '状态','店长', 'Token验证结果','操作' ],
								colModel : [{name : 'shopId',index : 'shopId',hidden : true},
								            {name : 'shopName',index : 'shopName',editable: true},
								            {name : 'platformType',editable : true,index : 'platformType',width : 100,formatter:operatePlatformType}, 
								            {name : 'platformAccount',editable : true,index : 'platformAccount',width : 100}, 
											{name : 'isUse',editable : true,index : 'isUse',width : 100,formatter:operateIsUse}, 
											{name : 'shopManagerUserName',editable : true,index : 'shopManagerUserName',width : 100},
											{name : 'state',editable : true,index : 'state',width : 100,formatter:operateState} ,
											{name : 'act',index:'act',editable:true,width:160,formatter:operate}],
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
								- $("#serachDiv").outerHeight() - 84;
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
								layerMaskFlag:true,
								// 表单提交成功后的回调
								success : function(responseText,
										statusText, xhr, $form) {
									if (responseText.rs == -1) {
										return false;
									}
									refreshGrid();// 重新加载grid
									top.toastr.success("新增店铺成功");
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
										layerMaskFlag:true,
										// 表单提交成功后的回调
										success : function(responseText,
												statusText, xhr, $form) {
											if (responseText.rs == -1) {
												return false;
											}
											refreshGrid();// 重新加载grid
											top.toastr.success("编辑店铺成功");
											layer.close(parentIndex); // 再执行关闭
											FormUtil.resetForm("dataEditForm");
										}
									});
						}
					});
			
			//编辑店铺
			$("#dataFormEdit").validate({
				 submitHandler: function(form){
					 $(form).ajaxSubmit({
						 	layerMaskFlag:true,
					        success: function(responseText, statusText, xhr, $form){
					        	if(responseText.rs == -1){
					        		return false;
					        	}
					        	refreshGrid();//重新加载grid
					        	top.toastr.success("编辑店铺成功");
								layer.close(parentIndex); //再执行关闭
								FormUtil.resetForm("dataFormEdit");
								 
					        },
		                    error: function(XmlHttpRequest, textStatus, errorThrown){  
		                    	 
		                    }  
					    }); 
				 }
			});
			
			//编辑店铺名称
			$("#dataFormChangeName").validate({
				 submitHandler: function(form){
					 if(  $("#dataChangeName").find("input[name='shopName']").val() ==  $("#dataChangeName").find("input[name='newShopName']").val() ){
						 top.toastr.error("新店铺名称和原店铺名称不能一致");
						 return false;
					 }
					 
					 $(form).ajaxSubmit({
						 	layerMaskFlag:true,
					        //表单提交成功后的回调
					        success: function(responseText, statusText, xhr, $form){
					        	if(responseText == "" || responseText.rs == -1){
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
						 	layerMaskFlag:true,
					        //表单提交成功后的回调
					        success: function(responseText, statusText, xhr, $form){
					        	if(responseText == "" || responseText.rs == -1){
					        		top.toastr.error("授权失败");
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
					        		complete:function(XHR, TS){
					        			layer.close(layerMask);  
					                },
					                beforeSend:function(XHR){
					                	layerMask = layer.load(1);
					                },
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
					                	}else{
					                		top.toastr.error(data.msg);
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
			
			

		});
 
function checkAddShop(form){
	var platformType = $(form).find("select[name='platformType']").val();
	var shopName = $(form).find("input[name='shopName']").val();
	var platformAccount = $(form).find("input[name='platformAccount']").val();
	var shopManagerUserId = $(form).find("select[name='shopManagerUserId']").val();
	
	 if( checkUtil.isNullValue(platformType) ){
		top.toastr.error("平台不能为空！");
		return false;
	 } 
	 if( checkUtil.isNullValue(shopName) ){
		top.toastr.error("店铺名称不能为空！");
		return false;
	 }  
	 if( checkUtil.isNullValue(platformAccount) ){
		top.toastr.error("平台账号不能为空！");
		return false;
	 }  
	 if( checkUtil.isNullValue(shopManagerUserId) ){
		top.toastr.error("店长不能为空！");
		return false;
	 }  
	 //$(form).submit();
	 return true;
}

function checkChangeName(form){
	var newShopName = $(form).find("input[name='newShopName']").val();
	var shopId = $(form).find("input[name='shopId']").val();
	 if( checkUtil.isNullValue(newShopName) ){
		top.toastr.error("新店铺名称不能为空！");
		return false;
	 }  
	 if( checkUtil.isNullValue(shopId) ){
		top.toastr.error("店铺ID不能为空！");
		return false;
	 }  
}

//打开新增页面
function openAddPage(){
	parentIndex = layer.open({
		title:'新增店铺',
	    type: 1,
	    area: ['60%', '90%'],
	    fix: true,
	    maxmin: true,
	    btn:['提交','取消'],
	    yes:function(index, layero){
	    	$("#dataForm").submit();
	    	//checkAddShop($("#dataForm"));
	    },
	    content: $('#dataAdd'),
	    cancel:function(index){
	    	FormUtil.resetForm("dataForm");
	    }
	});
	$.ajax({
        type: "POST",
        url: ctx.path +'/platform/pm/queryUsers.do',
        data: {rows:1000},
        dataType: "json",
        success: function(data){
        	$("#clerk").html("");
        	$("#personInCharge").find("option:not(:first)").remove();
        	var data = data.data.data;
        	for (var i=0; i<data.length; i++)
        	{
        		var op = "<option value="+ data[i].userId +" >"+ data[i].userName  +"</option>";
        		$("#personInCharge").append(op);
        		var ch = '<input type="checkbox" value="' + data[i].userId + '" name="shopUsers['+i+'].userId">'+ data[i].userName + '</label><label class="checkbox-inline ">'
        		$("#clerk").append(ch);
        	}
                   
        } 
    });
}

//账号类型改变
function accountTypeChange(obj){
	$("#helpcenterText").hide();
	var ops =  $(obj).find("option");
	for (var i=0; i<ops.length; i++)
	{
		var op = ops[i];
		var cla = $(op).attr("cla");
		if(cla){
			$("."+cla).hide();
		}
	}
	var cla = $(obj).find("option:selected").attr("cla");
	if(cla){
		$("."+cla).show();
	}
	var val= $(obj).find("option:selected").val();
	if(val!=0){
		$("#helpcenterText").show();
	}
	
}

var plt;
var info ;
//打开授权页面
function openAuthorizationPage(shopId,platType){
	plt = platType;
	var tokenUrl = ctx.path +'/api/shop/getWishToken';
	/*var accountInfo = {
				"aliexpress":[{"client_id":"24785268","client_secret":"xCvsYrnVm4w","redirect_uri":"http://gw.api.alibaba.com/auth/authCode.htm",
							  "action":"https://gw.api.alibaba.com/openapi/http/1/system.oauth2/getToken/24785268",
							  "url":"http://gw.api.alibaba.com/auth/authorize.htm?client_id=24785268&site=aliexpress&redirect_uri=http://gw.api.alibaba.com/auth/authCode.htm&_aop_signature=C1E6C9A0E4A6F14AD505AF3674608459799F24CC"}],
				"wish":[{"client_id":"570e1d7826b1743cc9ab1126","client_secret":"80d0096400474de998ce337dd120b33b","redirect_uri":"https://authhz.alibaba.com/auth/authCode.htm",
							  "action":tokenUrl,
							  "url":"https://sandbox.merchant.wish.com/oauth/authorize?client_id=570e1d7826b1743cc9ab1126"}],
				}*/
	
	
	/*
	var accountInfo = {
			"aliexpress":[{"client_id":"24785268","client_secret":"xCvsYrnVm4w","redirect_uri":"http://gw.api.alibaba.com/auth/authCode.htm",
						  "action":"https://gw.api.alibaba.com/openapi/http/1/system.oauth2/getToken/24785268",
						  "url":"http://gw.api.alibaba.com/auth/authorize.htm?client_id=24785268&site=aliexpress&redirect_uri=http://gw.api.alibaba.com/auth/authCode.htm&_aop_signature=C1E6C9A0E4A6F14AD505AF3674608459799F24CC"}],
			"wish":[{"client_id":"57105e95a18a3f0735778cbb","client_secret":"64c59aaaca2f4f3997e24ec24d98940d","redirect_uri":"https://authhz.alibaba.com/auth/authCode.htm",
						  "action":tokenUrl,
						  "url":"https://merchant.wish.com/oauth/authorize?client_id=57105e95a18a3f0735778cbb"}]
			}
	*/
	var accountInfo = {
			"aliexpress":[{"client_id":aim.aliAppKey ,"client_secret":aim.aliAppSecret,"redirect_uri":aim.aliRedirectUri,
						  "action":aim.aliAction,
						  "url":aim.aliUrl}],
			"wish":[{"client_id":aim.wishAppKey,"client_secret":aim.wishAppSecret,"redirect_uri":aim.wishRedirectUri,
						  "action":aim.wishAction,
						  "url":aim.wishUrl}]
			}
	
		if(platType==1){//阿里
			 info = accountInfo.aliexpress;
		}else if(platType==2){//wish
			 info = accountInfo.wish;
		}
		
		$("#authorization").find("input[name='grant_type']").val("authorization_code");
		$("#authorization").find("input[name='client_id']").val(info[0].client_id);
		$("#authorization").find("input[name='client_secret']").val(info[0].client_secret);
		$("#authorization").find("input[name='redirect_uri']").val(info[0].redirect_uri);
		$("#authorization").find("form").attr("action",info[0].action);
	$.ajax({
	      url:  ctx.path +'/api/shop/getShopById.json',
	      async: true,
	      dataType: 'json',
	      type: 'POST',
	      data: {shopId:shopId},
	      success: function(data ){
	      	if(data.rs == -1 ){
	      		top.toastr.error("操作失败");
	      		return false;
	      	}
	    	 var data = data.data;
	    	 $("#submitAuthorization").fill(data);//表单数据填充
	         parentIndex = layer.open({
		       		title:'授权',
		       	    type: 1,
		       	    area: ['70%', '58%'],
		       	    fix: true,
		       	    maxmin: true,
			       	//btn:['申请','取消'],
			 	    yes:function(index, layero){
			 	    	$("#submitAuthorization").submit();
			 	    },
		       	    content: $('#authorization'),
			       	success:function(layero, index){ 
			       		
			       	},
		       	    cancel:function(index){
		       	    	$("#submitAuthorization").find("#wizard-2-p-0").show();
						$("#submitAuthorization").find("#wizard-2-p-1").hide();
		       	    	FormUtil.resetForm("submitAuthorization");
		       	    }
		       	});
	      },
	      error: function(jqXHR , textStatus , errorThrown){
	      	top.toastr.error("操作失败");
	      }
	    });

}

//打开更改名称页面
function openChangeNamePage(obj){
	$.ajax({
	      url:  ctx.path +'/api/shop/getShopById.json',
	      async: true,
	      dataType: 'json',
	      type: 'POST',
	      data: {shopId:obj},
	      success: function(data ){
	      	if(data.rs == -1 ){
	      		top.toastr.error("操作失败");
	      		return false;
	      	}
	    	 var data = data.data;
	         $("#dataChangeName").fill(data);//表单数据填充
	         parentIndex = layer.open({
		       		title:'变更店铺名',
		       	    type: 1,
		       	    area: ['70%', '78%'],
		       	    fix: true,
		       	    maxmin: true,
			       	btn:['提交','取消'],
			 	    yes:function(index, layero){
			 	    	$("#dataFormChangeName").submit();
			 	    },
		       	    content: $('#dataChangeName'),
			       	success:function(layero, index){ 
			       		$("#dataChangeName").find("p[name='pshopId']").html($("#dataChangeName").find("input[name='shopId']").val() );
			       		$("#dataChangeName").find("p[name='oldShopName']").html($("#dataChangeName").find("input[name='shopName']").val() );
			       	},
		       	    cancel:function(index){
		       	    	FormUtil.resetForm("dataFormChangeName");
		       	    }
		       	});
	      },
	      error: function(jqXHR , textStatus , errorThrown){
	      	top.toastr.error("操作失败");
	      }
	    });
}

//授权其他平台账号
function authorizationOtherShop(shopId,shopName){
	var delContext = "您确定要授权";
	delContext += "店铺【" + shopName + "】吗？<br>";
	layer.confirm(delContext, {icon: 3, title:"提示"},  
    function(index){
	  	$.get( ctx.path +"/api/shop/authorizationShop.json?shopId="+shopId+"&platformType=0",
	  			function(result){
	  				if(result.rs==1){
	  					grid.trigger("reloadGrid");//重新加载grid
						top.toastr.success("授权店铺成功！");
 					}else{
 						top.toastr.error("授权店铺失败！");
 					}                 
				  },"json");       	  
	  	layer.close(index);
    });
}


//禁用
function disable(shopId,shopName){
	var delContext = "您确定要禁用";
	delContext += "店铺【" + shopName + "】吗？<br>";
	layer.confirm(delContext, {icon: 3, title:"提示"},  
    function(index){
	  	$.get( ctx.path +"/api/shop/disableShop.json?shopId="+shopId,
	  			function(result){
	  				if(result.rs==1){
	  					grid.trigger("reloadGrid");//重新加载grid
						top.toastr.success("禁用店铺成功！");
 					}else{
 						top.toastr.error("禁用店铺失败！");
 					}                 
				  },"json");       	  
	  	layer.close(index);
    });
}

//启用
function enable(shopId,shopName){
	var delContext = "您确定要启用";
	delContext += "店铺【" + shopName + "】吗？<br>";
	layer.confirm(delContext, {icon: 3, title:"提示"},  
    function(index){
	  	$.get( ctx.path +"/api/shop/enableShop.json?shopId="+shopId,
	  			function(result){
	  				if(result.rs==1){
	  					grid.trigger("reloadGrid");// 刷新表单;//重新加载grid
						top.toastr.success("启用店铺成功！");
 					}else{
 						//top.toastr.error("启用店铺失败！");
 					}                 
				  },"json");       	  
	  	layer.close(index);
    });
	
}


//打开编辑页面
function openEditPage(obj){
	$.ajax({
	      url:  ctx.path +'/api/shop/getShopById.json',
	      async: true,
	      dataType: 'json',
	      type: 'POST',
	      data: {shopId:obj},
	      success: function(data){
	      	if(data.rs == -1 ){
	      		top.toastr.error("操作失败");
	      		return false;
	      	}
	    	 var data = data.data;
	         $("#dataEdit").fill(data);//表单数据填充
	         parentIndex = layer.open({
		       		title:'编辑',
		       	    type: 1,
		       	    area: ['90%', '90%'],
		       	    fix: true,
		       	    maxmin: true,
			       	btn:['提交','取消'],
			 	    yes:function(index, layero){
			 	    	$("#dataFormEdit").submit();
			 	    },
		       	    content: $('#dataEdit'),
			       	success:function(layero, index){
			       		if(data.platformType==1){
			       			//$(".aliexpress").show();
			       		}
			       		$.ajax({
			       	        type: "POST",
			       	        url: ctx.path +'/platform/pm/queryUsers.do',
			       	        data: {rows:1000},
			       	        dataType: "json",
			       	        success: function(da){
			       	        	var personInCharge = $("#dataEdit").find("#personInCharge");
			       	        	$(personInCharge).find("option:not(:first)").remove();
			       	        	var da = da.data.data;
			       	        	$("#dataEdit").find("#clerk").html("");
			       	        	$("#dataEdit").find("#clerk").append('<div class="clear"></div><label class="checkbox-inline">');
			       	        	for (var i=0; i<da.length; i++)
			       	        	{
			       	        		op = "<option value="+ da[i].userId +" >"+ da[i].userName  +"</option>";
			       	        		$(personInCharge).append(op);
			       	        		var check = "";
			       	        		for(var x in data.shopUsers){
			       	        			if(da[i].userId == data.shopUsers[x].userId)  check = "checked"
			       	        		}
			       	        		var ch = '<input '+check+'  type="checkbox" value="' + da[i].userId + '" name="shopUsers['+i+'].userId">'+ da[i].userName + '</label><label class="checkbox-inline ">';
			       	        		$("#dataEdit").find("#clerk").append(ch);
			       	        	}
			       	        	$(personInCharge).val(data.shopManagerUserId); 
			       	        	//设置为编辑标志
			       	        	$("#dataEdit").find("input[name='updateStore']").val("1");
			       	        } 
			       	    });
			       	 
			       	},
		       	    cancel:function(index){
		       	    	FormUtil.resetForm("dataFormEdit");
		       	    }
		       	});
	      },
	      error: function(jqXHR , textStatus , errorThrown){
	      	top.toastr.error("操作失败");
	      }
	    });
}

 
//
function openAuthPage(){
	 $("#authorization").find('#wizard-2-p-0').hide();
	 $("#authorization").find('#wizard-2-p-1').show();
	 window.open(info[0].url);
}