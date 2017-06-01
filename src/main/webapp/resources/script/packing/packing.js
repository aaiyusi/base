var grid = {};
var parentIndex = null;
function operate(cellValue,options,rowObject){
	var template="<a  onclick=\"editPage("+rowObject.packingId+")\" title='编辑'><i class=\"fa fa-edit\"></i>&nbsp;编辑</a>&nbsp;&nbsp;";
	template+="<a  onclick=\"del("+rowObject.packingId+",'"+rowObject.name+"')\" title='删除'><i class=\"fa fa-trash\"></i>&nbsp;删除</a>&nbsp;&nbsp;";
	return template;
}
$(document).ready(
		function() {
			$.jgrid.defaults.styleUI = 'Bootstrap';
			grid = $("#jqGrid").jqGrid(
					{
						beforeRequest: function(){
							$(".ui-jqgrid .jqgrid-overlay").attr("style","display:block");
						},  		 
						loadComplete: function(xhr){
							$(".ui-jqgrid .jqgrid-overlay").attr("style","display:none");
						},  
						url : ctx.path + '/api/packing/getPackingList.do',
						mtype : "POST",
						datatype : "json",
						height : top.getFrameHeight()
								- $("#buttonDiv").outerHeight()
								- $("#serachDiv").outerHeight() - 75,
						colNames : [ '包材Id','包材名称', '成本(CNY)','长*宽*高(cm)','操作' ],
						colModel : [ 
                       {name : 'packingId',index:'packing_Id',hidden:true},  
						             {
							name : 'name',
							editable : true,
							index : 'name',
							width : 100
						}, {
							name : 'price',
							editable : true,
							index : 'price',
							width : 100
						},{
							name:'size',
							editable:true,
							index:'size',
							width:100
						},{
							name:'act',
							index:'act',
							formatter:operate
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

			// 校验新增表单
			$("#dataAddForm").validate({
						submitHandler : function(form) {
							$(form).ajaxSubmit(
									{
										// 表单提交成功后的回调
										success : function(responseText,
												statusText, xhr, $form) {
											if(responseText.msg==2){
												top.toastr.error("此包材名称已使用,不能重名！");
												return false;
											}
											if (responseText.rs == -1) {
												return false;
											}
											refreshGrid();// 重新加载grid
											top.toastr.success("新增包装成功");
											FormUtil.resetForm("dataAddForm");
											layer.close(parentIndex); // 再执行关闭
										}
									});
						}
					});

			// 编辑数据
			$("#dataEditForm").validate({
						submitHandler : function(form) {
							$(form).ajaxSubmit(
									{
										// 表单提交成功后的回调
										success : function(responseText,
												statusText, xhr, $form) {
											if(responseText.msg==2){
												top.toastr.error("此包材名称已使用,不能重名！");
												return false;
											}
											if (responseText.rs == -1) {
												return false;
											}
											refreshGrid();// 重新加载grid
											top.toastr.success("编辑包装成功");
											layer.close(parentIndex); // 再执行关闭
											FormUtil.resetForm("dataEditForm");
										}
									});
						}
					});

		});
//校验表单
function validateForm(type){
	var threePoint=/^-?\d+([.]{1}[0-9]{1,3})?$/;
	var money = /^[0-9]{1,3}([.]{1}[0-9]{1,3})?$/;
	if(type==1){
		var name=$("#name").val();
		var level=$("#level").val(); 
		var length=$("#length").val();
		var width=$("#width").val(); 
		var height=$("#height").val(); 
		var weight=$("#weight").val(); 
		var price=$("#price").val();
		if(name==undefined||name==""){
			top.toastr.error("包材名称不能为空！");
			return false;
		} 
		if(level==undefined||level==""){
			top.toastr.error("级别不能为空！"); 
			return false;
		}
		if(length==undefined||length==""){
			top.toastr.error("长度不能为空！");
			return false;
		}else if(threePoint.test(length)==false){ 
			top.toastr.error("长度请输入小数点后最多三位的数字！");
			return false;
		}
		if(width==undefined||width==""){
			top.toastr.error("宽度不能为空！");
			return false;
		}else if(threePoint.test(width)==false){
			top.toastr.error("宽度请输入小数点后最多三位的数字！");
			return false;
		}
		if(height==undefined||height==""){
			top.toastr.error("高度不能为空！"); 
			return false;
		}else if(threePoint.test(height)==false){
			top.toastr.error("高度请输入小数点后最多三位的数字！");
			return false;
		}
		if(weight==undefined||weight==""){
			top.toastr.error("重量不能为空！"); 
			return false;
		}else if(threePoint.test(weight)==false){
			top.toastr.error("重量请输入小数点后最多三位的数字！"); 
			return false;
		}
		if(price!=undefined&&price.trim()!=""){
			var v=money.test(price);
			if(v==false){
				top.toastr.error("价格请输入小于1000的正确金额！");
				return false;
			}
		}
	}else{
		var eName=$("#eName").val();
		var eLevel=$("#eLevel").val(); 
		var eLength=$("#eLength").val();
		var eWidth=$("#eWidth").val(); 
		var eHeight=$("#eHeight").val(); 
		var eWeight=$("#eWeight").val(); 
		var ePrice=$("#ePrice").val();
		if(eName==undefined||eName==""){
			top.toastr.error("包材名称不能为空！");
			return false;
		} 
		if(eLevel==undefined||eLevel==""){
			top.toastr.error("级别不能为空！"); 
			return false;
		}
		if(eLength==undefined||eLength==""){
			top.toastr.error("长度不能为空！");
			return false;
		}else if(threePoint.test(eLength)==false){ 
			top.toastr.error("长度请输入小数点后最多三位的数字！");
			return false;
		}
		if(eWidth==undefined||eWidth==""){
			top.toastr.error("宽度不能为空！");
			return false;
		}else if(threePoint.test(eWidth)==false){
			top.toastr.error("宽度请输入小数点后最多三位的数字！");
			return false;
		}
		if(eHeight==undefined||eHeight==""){
			top.toastr.error("高度不能为空！"); 
			return false;
		}else if(threePoint.test(eHeight)==false){
			top.toastr.error("高度请输入小数点后最多三位的数字！");
			return false;
		}
		if(eWeight==undefined||eWeight==""){
			top.toastr.error("重量不能为空！"); 
			return false;
		}else if(threePoint.test(eWeight)==false){
			top.toastr.error("重量请输入小数点后最多三位的数字！"); 
			return false;
		}
		if(ePrice!=undefined&&ePrice.trim()!=""){
			var v=money.test(ePrice);
			if(v==false){
				top.toastr.error("价格请输入小于1000的正确金额！");
				return false;
			}
		}
	}
}

// 打开新增页面
function openAddPage() {
	parentIndex = layer.open({
		title : '新增包装',
		type : 1,
		area : [ '70%', '60%' ],
		fix : true,
		maxmin : true,
		btn : [ '提交', '取消' ],
		yes : function(index, layero) {
			var v=validateForm(1);
			if(v==false){
				return;
			}
			$("#dataAddForm").submit();
		},
		content : $('#dataAdd'),
		cancel : function(index) {
			FormUtil.resetForm("dataForm");
		}
	});
}

// 打开编辑页面
function editPage(packingId) {
	$.ajax({
		url : ctx.path + '/api/packing/getPackingInfo.json',
		async : true,
		dataType : 'json',
		type : 'POST',
		data : {
			dataId : packingId
		},
		success : function(data) {
			if (data.rs == -1) {
				top.toastr.error("操作失败");
				return false;
			}
			$("#dataEditForm").fill(data.data);// 表单数据填充
			$("#dataEditForm").find("#packingId").val(packingId);
			parentIndex = layer.open({
				title : '编辑包装',
				type : 1,
				area : [ '70%', '60%' ],
				fix : true,
				maxmin : true,
				btn : [ '提交', '取消' ],
				yes : function(index, layero) {
					var v=validateForm(2);
					if(v==false){
						return;
					}
					$("#dataEditForm").submit();
				},
				content : $('#dataEdit'),
				cancel : function(index) {
					FormUtil.resetForm("dataEditForm");
				}
			});
		},
		error : function(jqXHR, textStatus, errorThrown) {
			top.toastr.error("操作失败");
		}
	});
}

// 删除
function del(packingId,name) {
	
	
	var delContext = "您确定删除";
		delContext += "包材【" + name + "】吗？<br>";
		delContext += "删除成功之后，该操作将无法恢复。";
	layer.confirm(delContext, {
		icon : 3,
		title : "提示"
	}, function(index) {
		$.get(ctx.path + "/api/packing/deletePacking.do?packingId=" + packingId,
				function(result) {
			        if(result.msg==2){
			        	top.toastr.error("商品目录已使用,不可删除！");
			        	return;
			        }
					if (result.msg == 1) {
						grid.trigger("reloadGrid");// 刷新表单
						top.toastr.success("删除包装成功！");
					} else {
						top.toastr.warning("删除包装失败！");
					}
				}, "json");
		layer.close(index);
	});
}
