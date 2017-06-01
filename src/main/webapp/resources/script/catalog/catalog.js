
var grid = {};
var children=null;
var parentIndex = null;
var detailTable=null;
var childrenGird=null;
function operate(cellValue,options,rowObject){
   	var template="<a  onclick=\"editPage("+rowObject.catalogiId+","+rowObject.level+","+rowObject.pCatalogiId+")\" title='编辑'><i class=\"fa fa-edit\"></i>&nbsp;编辑</a>&nbsp;&nbsp;";
   	    template+="<a  onclick=\"del("+rowObject.catalogiId+",'"+rowObject.name+"'"+","+rowObject.level+","+rowObject.pCatalogiId+")\" title='删除'><i class=\"fa fa-trash\"></i>&nbsp;删除</a>&nbsp;&nbsp;";
   	 template+="<a  onclick=\"openAddPage("+rowObject.catalogiId+")\" title='添加子分类'><i class=\"fa fa-sitemap\"></i>&nbsp;添加子分类</a>&nbsp;&nbsp;";
		return template;
   };
   //childrenName样式设置
   function childrenName(cellValue,options,rowObject){
		var template = '<label  id='+rowObject.catalogiId+' style="padding-left:15px;">'+rowObject.name+'</label>';
		return template;
   }
   //绑定显示明细事件
   function childrenDetail(cellValue,options,rowObject){
	   	var template = '<a href="javascript:void(0)" id='+rowObject.catalogiId+' onclick="showDeatil(this,'+options.rowId+','+rowObject.catalogiId+')" class="fa fa-plus-circle text-primary">'+rowObject.name+'</a>';
			return template;
	   };
   //加载明细
   function showDeatil(obj,rowId,dataId){
	   //var tr = $("#jqGrid").find("#"+rowId);
	   var tr = $(obj).parent().parent();
	   if($("#"+dataId).attr("class") == "fa fa-minus-circle text-primary"){
		   $("#"+dataId).attr("class","fa fa-plus-circle text-primary");
	   }else{
		   $("#"+dataId).attr("class","fa fa-minus-circle text-primary");
	   }
	   if(tr.attr("initDetail") == undefined){
		   $("<tr><td colspan="+tr.find("td").length+" id='detailTr_"+dataId+"' class='detailtable_con'><table id='jqGrid_detail_"+dataId+"'></table></td></tr>").insertAfter(tr);
		   tr.attr("initDetail","true"); 
		   detailTable= $("#jqGrid_detail_"+dataId).jqGrid(
					{
						url : ctx.path + '/api/catalog/getCatalogChildren.do?catalogiId='+dataId,
						mtype : "POST",
						datatype : "json",
						height : top.getFrameHeight()
								- $("#buttonDiv").outerHeight()
								- $("#serachDiv").outerHeight() - 75,
						colNames : [ '目录ID','层级','父级ID', '目录中文名称', '英文名称', 
								'操作'],
						colModel : [ {
							name : 'catalogiId',
							index : 'catalogiId',
							hidden : true
						},{
							name : 'level',
							index : 'level',
							hidden:true,
							width:100
						}, {
							name:'pCatalogiId',
							index:'p_catalogi_id',
							hidden:true
						},{
							name : 'name',
							editable : true,
							index : 'name',
							width : 100,
							formatter:childrenName
						}, {
							name : 'eName',
							editable : true,
							index : 'eName',
							width : 105
						},{
							name:'act',
							index:'act',
							editable:true,
							formatter:childrenOperate,
							width:100
						} ],
						  autowidth: true,//自适应宽度
						  height: '100%',//自适应高度
					        viewrecords : true,
					        shrinkToFit: true,
					        jsonReader : {
								root : "data.data",// Json数据
								records : "data.totalRows",// 总记录数
								total : "data.totalPages",
								page : "data.page",
								repeatitems : false
							},
							gridComplete: function () {
				                 $(this).closest('.ui-jqgrid-view').find('div.ui-jqgrid-hdiv').hide();
				             }
					});
		   detailTable.jqGrid("setGridParam", {url:ctx.path + '/api/catalog/getCatalogChildren.do?catalogiId='+dataId});
		   detailTable.trigger("reloadGrid");
		     
	   }else{
		   if($("#detailTr_"+dataId).is(':visible')){
			   $("#detailTr_"+dataId).hide();
		   }else{
			   $("#detailTr_"+dataId).show();
		   }
	   }
   }
   function childrenOperate(cellValue,options,rowObject){
	   	var template="<a  onclick=\"editPage("+rowObject.catalogiId+","+rowObject.level+","+rowObject.pCatalogiId+")\" title='编辑'><i class=\"fa fa-edit\"></i>&nbsp;编辑</a>&nbsp;&nbsp;";
	   	    template+="<a  onclick=\"del("+rowObject.catalogiId+",'"+rowObject.name+"'"+","+rowObject.level+","+rowObject.pCatalogiId+")\" title='删除'><i class=\"fa fa-trash\"></i>&nbsp;删除</a>&nbsp;&nbsp;";
			return template;
	   };
	   
function change(t){
	if(t==2){
		$("#parent").show();
	}else{
		$("#parent").hide();
	}
	
};  
function pullDown(){
	//下拉父级
    $.ajax({
  	  url:  ctx.path +"/api/catalog/getCatalogParent.do",   
  	  type:"post",
  	  dataType:"json",
  	  contentType:"application/json",
  	  traditional: true,  
  	  success:function(data){
  		  var jsonObj=data.data;
  		  var optionstring="";
  		  for(var i=0;i<jsonObj.length;i++){
  			  optionstring += "<option value=\"" + jsonObj[i].catalogiId + "\"  >" + jsonObj[i].name + "</option>";
  		  }
  		  $("#pId").html("<option value='' >-请选择-</option>"+optionstring); 
  	  },
  	  error:function(msg){
  		  top.toastr.error(msg);
  	  }
    });
	
}


//校验表单
function validateForm(type){
	var reg = /^[1-9]{1,}[0-9]*$/;
	if(type==1){
	var name=$("#addName").val();
	var level=$("#addLevel").val();
	var orderNum=$("#orderNum").val();
	
	if(name==undefined||name==""){ 
		top.toastr.error("目录中文名称不能为空！");
		return false;
	}
	if(orderNum!=undefined&&orderNum.trim()!=""){ 
     if(!reg.test(orderNum)){
    	 top.toastr.error("请输入正确的序号！"); 
    	 return false;
     }
	}
	}else{
		var eName=$("#eName").val();
		var eOrderNum=$("#eOrderNum").val();
		if(eName==undefined||eName==""){
			top.toastr.error("目录中文名称不能为空！"); 
			return false;
		}
		if(eOrderNum!=undefined&&eOrderNum.trim()!=""){ 
		 if(!reg.test(eOrderNum)){
	    	 top.toastr.error("请输入正确的序号！"); 
	    	 return false;
	     }
		}
	}
	
}


$(document).ready(
		function() {
			$.jgrid.defaults.styleUI = 'Bootstrap';
			grid = $("#jqGrid").jqGrid(
					{
						beforeRequest: function(){
							//$(".ui-jqgrid .jqgrid-overlay").attr("style","display:block");
						},  		 
						loadComplete: function(xhr){
							$(".ui-jqgrid .jqgrid-overlay").attr("style","display:none");
						},  
						url : ctx.path + '/api/catalog/getCatalogList.do',
						mtype : "POST",
						datatype : "json",
						height : top.getFrameHeight()
								- $("#buttonDiv").outerHeight()
								- $("#serachDiv").outerHeight() - 75,
						colNames : [ '目录ID','层级','父级ID', '目录中文名称', '英文名称', 
								    '操作'],
						colModel : [ {
							name : 'catalogiId',
							index : 'catalogiId',
							hidden : true
						}, {
							name : 'level',
							index : 'level',
							hidden : true
						}, {
							name:'pCatalogiId',
							index:'p_catalogi_id',
							hidden:true
						},{
							name : 'name',
							editable : true,
							index : 'name',
							formatter:childrenDetail,
							width : 100
						},{
							name : 'eName',
							editable : true,
							index : 'eName',
							width : 100
						},{
							name:'act',
							index:'act',
							sortable:false,
							formatter:operate,
							width:100
						} ],
						autowidth : true,// 自适应宽度
						shrinkToFit : true,
						rowNum : 20,
						rowList : [ 10, 20, 50 ],
						//rownumbers : true,// 添加左侧行号
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
			//下拉父级
			pullDown();
			// 校验新增表单
			$("#dataForm").validate({
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
											if(responseText.msg==0||detailTable==null){
												refreshGrid();// 重新加载grid
												}else{
													$("#jqGrid_detail_"+childrenGird).trigger("reloadGrid");
												}
											top.toastr.success("新增商品分类成功！");
											FormUtil.resetForm("dataForm");
											layer.close(parentIndex); // 再执行关闭
										}
									});
						}
					});

			// 编辑数据
			$("#dataFormEdit").validate({
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
											if(responseText.msg==1){
												refreshGrid();// 重新加载grid
												}else{
											$("#jqGrid_detail_"+childrenGird).trigger("reloadGrid");
												}
											top.toastr.success("编辑商品分类成功！");
											layer.close(parentIndex); // 再执行关闭
											FormUtil.resetForm("dataFormEdit");
										}
									});
						}
					});

		});


// 打开新增页面
function openAddPage(pId) {
	$("#addStatus").val(pId);
	childrenGird=pId;
	parentIndex = layer.open({
		title : '新增商品分类',
		type : 1,
		area : [ '40%', '62%' ],
		fix : true,
		maxmin : true,
		btn : [ '提交', '取消' ],
		yes : function(index, layero) {
			$("#pId").val(pId); 
			var v=validateForm(1);
			if(v==false){
				return;
			}
			$("#dataForm").submit();
		},
		content : $('#dataAdd'),
		cancel : function(index) {
			FormUtil.resetForm("dataForm");
		}
	});
	pullDown();
}

// 打开编辑页面
function editPage(catalogiId,level,pId) {
	$("#status").val(level);
	childrenGird=pId;
	$.ajax({
		url : ctx.path + '/api/catalog/getCatalogInfo.json',
		async : true,
		dataType : 'json',
		type : 'POST',
		data : {
			dataId : catalogiId
		},
		success : function(data) {
			if (data.rs == -1) {
				top.toastr.error("操作失败");
				return false;
			}
			$("#dataFormEdit").fill(data.data);// 表单数据填充
			$("#dataFormEdit").find("#dataId").val(catalogiId);
			pullDown();
			parentIndex = layer.open({
				title : '编辑商品分类',
				type : 1,
				area : [ '40%', '62%' ],
				fix : true,
				maxmin : true,
				btn : [ '提交', '取消' ],
				yes : function(index, layero) {
					var v=validateForm(2);
					if(v==false){
						return;
					}
					$("#dataFormEdit").submit();
				},
				content : $('#dataEdit'),
				cancel : function(index) {
					FormUtil.resetForm("dataFormEdit");
				}
			});
		},
		error : function(jqXHR, textStatus, errorThrown) {
			top.toastr.error("操作失败");
		}
	});
}

// 删除
function del(catalogiId,name,level,pId) {
	var delContext = "您确定删除";
		delContext += "目录名【" + name + "】吗？<br>";
		delContext += "删除成功之后，该操作将无法恢复。";
		childrenGird=pId;
	layer.confirm(delContext, {
		icon : 3,
		title : "提示"
	}, function(index) {
		$.get(ctx.path + "/api/catalog/delCatalog.json",
				{catalogiId:catalogiId,status:level},
				function(result) {
			        
			        if(result.msg==1){
			        	grid.trigger("reloadGrid");// 刷新表单
			        }else if(result.msg==2){
			        	$("#jqGrid_detail_"+childrenGird).trigger("reloadGrid");
		            }else{
			        	top.toastr.warning("商品目录已使用,不可删除！");
			        	return;
			        }
					
					top.toastr.success("删除商品分类成功！");
					
				}, "json");
		layer.close(index);
	});
}
