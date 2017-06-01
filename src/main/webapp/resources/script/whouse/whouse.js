function addWhouseDiv(whouseObj){
	var btnName="启用";
	 if(whouseObj.state==1){
		 btnName="停用";
	 }
	 var whouseObjStr='<li id="whouseObj_'+whouseObj.whouseId+'" ><div onclick="showWhouseDetail('+whouseObj.whouseId+')"><a href="javascript:void(0);">'+whouseObj.whouseName+'</a></div><button class="blue_btn" id="toggleWhouseBtn_'+whouseObj.whouseId+'" onclick="toggleWhouseState('+whouseObj.whouseId+')" >'+btnName+'</button></li>';
	 $("#whouseSelf").html($("#whouseSelf").html()+whouseObjStr);
}

function initWhouse(){
	$.post(ctx.path+'/api/warehouse/getErpWarehouse.do', {}, function (data, status){
		 if(data.rs==1){
			 var whouseSelfArray=data.data[0];
			 for(var i=0,len=whouseSelfArray.length;i<len;i++){
				 var whouseObj=whouseSelfArray[i];
				 addWhouseDiv(whouseObj);
			 }
			 if(whouseSelfArray.length > 0){
				 showWhouseDetail(whouseSelfArray[0].whouseId);
			 }
		 }
	},"json");
}

function showWhouseDetail(whouseId){
	if($("#toggleWhouseBtn_"+whouseId).html() == "启用"){
		 initShelfGrid("");
		top.toastr.error("该仓库已停用！");
		return false;
	}
	$("#whouseShelfDiv").show();
	$("#whouseShelfDivDetial").show();
	$.post(ctx.path+'/api/warehouse/getErpWarehouseDetail.do', {whouseId:whouseId}, function (data, status){
		 if(data.rs==1){
			 var warehouse=data.data;
			 $("#whouseFrom").fill(warehouse);
			 initShelfGrid(whouseId);
		 }
	});
	var width = $('.jqGrid_wrapper').width();
    $('#jqGrid').setGridWidth(width);
}


function openAddWhouse(){
	var whouseObj=$("#whouseFrom").serializeJson();
	for(var key in whouseObj){
		whouseObj[key]="";
	}
	$("#whouseFrom").fill(whouseObj);
	$("#whouseShelfDiv").show();
	$("#whouseShelfDivDetial").hide();
	 initShelfGrid("");
}

function batchBuildShouses(formId,shouseDistributionId){
	if(formId == "addShelfForm"){
		$("#countAdd").attr("disabled", "disabled");
	}else{
		$("#countEdit").attr("disabled", "disabled");
	}
	var shelfObj=$("#"+formId).serializeJson();
	var line=parseInt(shelfObj.line);
	var tier=parseInt(shelfObj.tier);
	var connector=shelfObj.connector;
	var shousePrefix=shelfObj.shousePrefix;
	$("#"+shouseDistributionId).html("");
	for(var i=1;i<=tier;i++){
		var str="<tr>";
		var tierNo=i<10?"0"+i:i;
		for(var j=1;j<=line;j++){
			var lineNo=j<10?"0"+j:j;
			var shouseName=shousePrefix+tierNo+connector+lineNo;
			str+="<td style='width:"+(100/line)+"%'>"+shouseName+"</td>";
		}
		str+="</tr>";
		$("#"+shouseDistributionId).html($("#"+shouseDistributionId).html()+str);
	}
	if(formId == "addShelfForm"){
		$("#countAdd").removeAttr("disabled"); 
	}else{
		$("#countEdit").removeAttr("disabled"); 
	}
}

function saveWhouse(){
	var mobile = /^1[3578]\d{9}$/;//手机正则
	if($("#contactPhone").val() != "" && !mobile.test($("#contactPhone").val())){
		top.toastr.error("联系电话不正确！");
		return false;
	}
	if($("#postcode").val() != "" && !checkUtil.ispCode($("#postcode").val())){
		top.toastr.error("邮编号码不正确！");
		return false;
	}
	if($("#whouseName").val() == "" || $("#whouseName").val() == null){
		top.toastr.error("仓库名称不能为空！");
		return false;
	}
    	var whouseObj=$("#whouseFrom").serializeJson();
    	$.post(ctx.path+'/api/warehouse/addOrUpdateWhouse.do', whouseObj, function (data, status){
	   		 if(data.rs==1){
	   			 if(whouseObj.whouseId==""){
	   				whouseObj.state=1;
	   				whouseObj.whouseId=data.data;
	   				$("#whouseFrom").fill(whouseObj);
	   				$("#whouseShelfDivDetial").show();
	   				refreshGrid();
	   				addWhouseDiv(whouseObj);
	   			 }else{
		   				whouseObj.state=1;
		   				whouseObj.whouseId=data.data;
		   				refreshGrid();
	   			 }
	   			var width = $('.jqGrid_wrapper').width();
   		        $('#jqGrid').setGridWidth(width);
	   			top.toastr.success("保存成功！");
	   		 }
    	},"json");
    	
}

function toggleWhouseState(whouseId){
	var btnName=$("#toggleWhouseBtn_"+whouseId).html();
	$.post(ctx.path+'/api/warehouse/toggleWhouseState.do', {whouseId:whouseId}, function (data, status){
		 if(data.rs==1){
			 top.toastr.success(btnName+"成功！");
			 if(btnName=="启用") btnName="停用";
			 else btnName="启用";
			 $("#toggleWhouseBtn_"+whouseId).html(btnName);
		 }
	},"json");
}


//打开新增页面
var parentIndex=null;
function openAddPage(){
	var whouseId=$("#whouseFrom input[name='whouseId']").val();
	if(whouseId==""){
		top.toastr.warning("请先添加仓库信息！");
		return;
	}
	  $.ajax({
          url:ctx.path+"/api/warehouse/getShelfSeq.do",
          async:false,
          type:"post",
          dataType:"json",
          success:function(data) {
        	  $("#addShelfForm input[name='shelfCode']").val(data.data);
        	  $("#addShelfForm input[name='shousePrefix']").val(data.data+"-");
          }
	  });
	  $("#shouseDistribution").html("");
	  var whouseName=$("#whouseFrom input[name='whouseName']").val();
	  $("#addShelfForm input[name='whouseName']").val(whouseName);  
	  $("#whouseNameAdd").text(whouseName);
	  $("#addShelfForm input[name='whouseId']").val(whouseId);  
	  $("#addShelForm inpu[name='shouseCount']").val(0);
	  $("#shouseCount").text(0);
	  $("#addShouseDistribution").html("");
	parentIndex = layer.open({
		title:'新增货架',
		type: 1,
		area: ['90%', '90%'],
		fix: true,
		zIndex: 50,
		maxmin: true,
		btn:['保存','取消'],
		yes:function(index, layero){
			if($("#addShelfForm input[name='shelfName']").val() == "" || $("#addShelfForm input[name='shelfName']").val() == null){
				$("#addShelfForm input[name='shelfName']").focus();
				 top.toastr.error("请输入货架名称");
				 return false;
			}
			$("#addShelfForm").submit();
		},
		content: $('#dataAdd'),
		cancel:function(index){
			FormUtil.resetForm("addShelfForm");
		}
	});
}


function openEditShelf(shelfId){
	$.ajax({
		url:ctx.path+"/api/warehouse/getShelfById.do",
		async:false,
		type:"post",
		dataType:"json",
		data: {shelfId:shelfId},
		success:function(data) {
			$("#editShelfForm").fill(data.data);
			$("#whouseNameEdit").text($("#whouseFrom input[name='whouseName']").val());
		    $("#shouseCountEdit").text(data.data.shouseCount);
		    if(data.data.inventoryCount != 0 ){
				$("#editShelfForm input[name='line']").attr("readonly", "readonly");
				$("#editShelfForm input[name='tier']").attr("readonly", "readonly");
				$("#editShelfForm input[name='connector']").attr("readonly", "readonly");
			}else{
				$("#editShelfForm input[name='line']").removeAttr("readonly"); 
				$("#editShelfForm input[name='tier']").removeAttr("readonly"); 
				$("#editShelfForm input[name='connector']").removeAttr("readonly"); 
			}
			batchBuildShouses('editShelfForm','editShouseDistribution');
		}
	});
	parentIndex = layer.open({
		title:'编辑货架',
		type: 1,
		area: ['90%', '90%'],
		fix: true,
		maxmin: true,
		btn:['保存','取消'],
		yes:function(index, layero){
			if($("#editShelfForm input[name='shelfName']").val() == "" || $("#editShelfForm input[name='shelfName']").val() == null){
				$("#editShelfForm input[name='shelfName']").focus();
				 top.toastr.error("请输入货架名称");
				 return false;
			}
			$("#editShelfForm").submit();
		},
		content: $('#dataEdit'),
		cancel:function(index){
			FormUtil.resetForm("editShelfForm");
		}
	});
}


function toggleShelfState(shelfId,state){
	$.post(ctx.path+'/api/warehouse/toggleShelfState.do', {shelfId:shelfId}, function (data, status){
		 if(data.rs==1){
			 var btnName="启用";
			 if(state==1) btnName="停用";
			 top.toastr.success(btnName+"成功！");
			 grid.trigger("reloadGrid");
		 }
	},"json");
}

var grid = {},skuGrid={};
$(document).ready(function(){
	initWhouse();
	$.jgrid.defaults.styleUI = 'Bootstrap';
    grid = $("#jqGrid").jqGrid({
	beforeRequest: function(){
		$(".ui-jqgrid .jqgrid-overlay").attr("style","display:block");
	},  		 
	loadComplete: function(xhr){
		$(".ui-jqgrid .jqgrid-overlay").attr("style","display:none");
	},  
    url : ctx.path +'/api/warehouse/getErpShelfByWhouseId.do',
    mtype:"POST",
    datatype : "json",
    height: top.getFrameHeight() - $("#buttonDiv").outerHeight() - $("#serachDiv").outerHeight() - 257,
    colNames : ['id','货架编号','货架名称','仓位前缀','库存数','层数/列数'/*,'仓位数'*/,'状态','操作'],
    colModel : [
	                	 {name : 'shelfId',index:'shelfId',hidden:true},
	                	 {name : 'shelfCode',editable: true,index:'shelfCode',width : 100},
		                 {name : 'shelfName',editable: true,index:'shelfName',width : 100},
		                 {name : 'shousePrefix',editable: true,index:'shousePrefix',width : 100},
		                 {name : 'inventoryCount',editable: true,index:'inventoryCount',width : 70},
		                 {name : 'tierline',width:80,formatter : function(cellvalue, options, rowObject){
		                	 	return rowObject.tier+"/"+rowObject.line;
	 					 }},
		                /* {name : 'shouseCount',editable: true,index:'shouseCount',width : 100},*/
	                	 {name : 'state',editable: true,index:'state',width : 50,formatter : function(cellvalue, options, rowObject){
	                		    if(cellvalue==1)return "<font color='green'>正常</font>";
	                		    else return "<font color='red'>停用</font>";
                	 	 }},
	                	 {name : 'operate',width : 250,formatter : function(cellvalue, options, rowObject){
	                		 	var btnName="启用";
	                		 	var toggleShelf = "";
	                		 	if(rowObject.state==1){
	                		 		btnName="停用";
	                		 	}
	                		 	if(rowObject.inventoryCount == 0){//如果存在库存则不能禁用隐藏禁用按钮
	                		 		toggleShelf = "<a  href='javascript:void(0);'  onclick='toggleShelfState("+rowObject.shelfId+","+rowObject.state+")'><i class='fa fa-ban'>"+btnName+"</i></a>&nbsp;&nbsp;";
	                		 	}
								var str="<a  href='javascript:void(0);' onclick='openEditShelf("+rowObject.shelfId+")'><i class='fa fa-edit'>编辑</i></a>&nbsp;&nbsp;";
								str+= toggleShelf;
								str+= "<a  href='javascript:void(0);'  onclick='showSkuGrid("+rowObject.shelfId+")'><i class='fa fa-eye' >SKU明细查询</i></a>&nbsp;&nbsp;";
								str+="<a  href='javascript:void(0);'  onclick='printSpace("+rowObject.shelfId+")'><i class='fa fa-print' >打印仓位</i></a>";
								return str;
	                	 }}
                	],
    multiselect:false,
    autowidth: false,//自适应宽度
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
	    var newHeight=top.getFrameHeight() - $("#buttonDiv").outerHeight() - $("#serachDiv").outerHeight() -257;
	    $("#jqGrid").jqGrid('setGridHeight',newHeight);
    });
    
   /* $("#whouseFrom").validate({
		submitHandler: function(form){
			if($("#contactPhone").val() != "" && !checkUtil.isMobileNum($("#contactPhone"))){
				top.toastr.error("联系电话不正确！");
				return false;
			}
			if($("#postcode").val() != "" && !checkUtil.ispCode($("#postcode"))){
				top.toastr.error("邮编号码不正确！");
				return false;
			}
			if($("#whouseName").val() == "" || $("#whouseName").val() == null){
				top.toastr.error("仓库名称不能为空！");
				return false;
			}
			$(form).ajaxSubmit({
				//表单提交成功后的回调
				success: function(responseText, statusText, xhr, $form){
					if(responseText.rs == 1){
						var whouseObj=$("#whouseFrom").serializeJson();
						 if(whouseObj.whouseId==""){
				  				whouseObj.state=1;
				  				whouseObj.whouseId=responseText.data;
				  				$("#whouseFrom").fill(whouseObj);
				  				addWhouseDiv(whouseObj);
				  			 }
				  			$("#whouseShelfDivDetial").show();
				  			refreshGrid();
				  			top.toastr.success("保存成功！");
					}
				}
			});
		}
	});*/
    
	$("#addShelfForm").validate({
		submitHandler: function(form){
			$(form).ajaxSubmit({
				layerMaskFlag:true,
				//表单提交成功后的回调
				success: function(responseText, statusText, xhr, $form){
					if(responseText.rs == 1){
						 initShelfGrid($("#addShelfForm input[name='whouseId']").val());
						top.toastr.success("新增货架成功");
						layer.close(parentIndex); //再执行关闭
						FormUtil.resetForm("addShelfForm");
					}
				}
			});
		}
	});
	
	$("#editShelfForm").validate({
		submitHandler: function(form){
			$(form).ajaxSubmit({
				//表单提交成功后的回调
				layerMaskFlag:true,
				success: function(responseText, statusText, xhr, $form){
					if(responseText.rs == 1){
						refreshGrid();//重新加载grid
						top.toastr.success("编辑货架成功");
						layer.close(parentIndex); //再执行关闭
						FormUtil.resetForm("editShelfForm");
					}
				}
			});
		}
	});
	
	
	 

    //校验新增表单
    $("#dataForm").validate({
    submitHandler: function(form){
    $(form).ajaxSubmit({
    //表单提交成功后的回调
    success: function(responseText, statusText, xhr, $form){
    if(responseText.rs == -1){
    return false;
    }
    refreshGrid();//重新加载grid
    top.toastr.success("新增数据成功");
    FormUtil.resetForm("dataForm");
    layer.close(parentIndex); //再执行关闭
    }
    });
    }
    });


    //打开编辑页面
    function editPage(){
    var selRows = grid.jqGrid('getGridParam', 'selarrrow');
    if(selRows.length != 1){
    top.toastr.warning("请选择一行进行编辑！");
    return;
    }
    var row = $("#jqGrid").jqGrid("getRowData",selRows[0]);
    $.ajax({
    url:  ctx.path +'/platform/pm/getdata.json',
    async: true,
    dataType: 'json',
    type: 'POST',
    data: {dataId:row.dataId},
    success: function(data ){
    if(data.rs == -1 ){
    top.toastr.error("操作失败");
    return false;
    }
    $("#dataEditForm").fill(data.data);//表单数据填充
    $("#dataEditForm").find("#dataId").val(row.dataId);
    parentIndex = layer.open({
    title:'编辑货架',
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
    },
    error: function(jqXHR , textStatus , errorThrown){
    top.toastr.error("操作失败");
    }
    });
    }
	
});

/**
 * 打印仓位
 * @param shelfId
 * @returns
 */
function printSpace(shelfId){
   window.open(ctx.path +"/api/warehouse/getSpacesByShalf.do?shelfId="+shelfId);
};

function updateShouseCount(formId){
	var shelfObj=$("#"+formId).serializeJson();
	if(typeof(shelfObj.line)!="undefined"&&shelfObj.line!=""&&typeof(shelfObj.tier)!="undefined"&&shelfObj.tier!=""){		
		try{
			if(shelfObj.tier >20){
				top.toastr.error("层数请小于20");
				$("#"+formId+" input[name='tier']").val("");
				$("#"+formId+" input[name='tier']").focus();
				return false;
			}
			var line=parseInt(shelfObj.line);
			var tier=parseInt(shelfObj.tier); 
			var shouseCount=line*tier;
//			$("#"+formId+" input[name='shouseCount']").val(shouseCount);		
			if(formId == "addShelfForm"){
				$("#shouseCount").text(shouseCount);
			}else{
				$("#shouseCountEdit").text(shouseCount);
			}
		}catch(e){
			top.toastr.error("仓位生成失败");
		}
	}
}

//刷新表单
function refreshGrid(){
	grid.trigger("reloadGrid");
}


function initShelfGrid(whouseId){
	$("#jqGrid").jqGrid('setGridParam',{  
        datatype:'json',  
        postData:{whouseId:whouseId},
   }).trigger("reloadGrid");
}


function showSkuGrid(shelfId){
//	shelfId=1;
	parentIndex = layer.open({
		title : 'SKU明细',
		type : 2,
		area : [ '90%', '90%' ],
		fix : true,
		maxmin : true,
		content : ctx.path+"/resources/views/whouse/shelfSku.jsp?shelfId="+shelfId
	});
}