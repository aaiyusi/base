var grid = {};
var parentIndex = null;
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
						url : ctx.path + '/platform/pm/querydatas.do',
						mtype : "POST",
						datatype : "json",
						height : top.getFrameHeight()
								- $("#buttonDiv").outerHeight()
								- $("#serachDiv").outerHeight() - 75,
						colNames : [ '目录ID', '目录中文名称', '英文名称', '父级ID', '目录级别',
								'排序', '描述', '报关编码' ],
						colModel : [ {
							name : 'catalogiId',
							index : 'catalogiId',
							hidden : true
						}, {
							name : 'name',
							editable : true,
							index : 'name',
							width : 100
						}, {
							name : 'eName',
							editable : true,
							index : 'eName',
							width : 100
						}, {
							name : 'pCatalogiId',
							editable : true,
							index : 'pCatalogiId',
							width : 100
						}, {
							name : 'level',
							editable : true,
							index : 'level',
							width : 100
						}, {
							name : 'orderNum',
							editable : true,
							index : 'orderNum',
							width : 100
						}, {
							name : 'remark',
							editable : true,
							index : 'remark',
							width : 100
						}, {
							name : 'customsCode',
							editable : true,
							index : 'customsCode',
							width : 100
						} ],
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
							debugger;
							$(form).ajaxSubmit(
									{
										testflag:true,
										layerMaskFlag:true,
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
										}
									});
						}
					});

			// 编辑数据
			$("#dataEditForm").validate(
					{
						submitHandler : function(form) {
							$(form).ajaxSubmit(
									{	layerMaskFlag:true,
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

		});

// 打开新增页面
function openAddPage() {
	parentIndex = layer.open({
		title : '新增数据',
		type : 1,
		area : [ '90%', '90%' ],
		fix : true,
		maxmin : true,
		btn : [ '提交', '取消' ],
		yes : function(index, layero) {
			$("#dataForm").submit();
		},
		content : $('#dataAdd'),
		cancel : function(index) {
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
		url : ctx.path + '/platform/pm/getdata.json',
		async : true,
		dataType : 'json',
		type : 'POST',
		data : {
			dataId : row.dataId
		},
		success : function(data) {
			if (data.rs == -1) {
				top.toastr.error("操作失败");
				return false;
			}
			$("#dataEditForm").fill(data.data);// 表单数据填充
			$("#dataEditForm").find("#dataId").val(row.dataId);
			parentIndex = layer.open({
				title : '编辑数据',
				type : 1,
				area : [ '90%', '90%' ],
				fix : true,
				maxmin : true,
				btn : [ '提交', '取消' ],
				yes : function(index, layero) {
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
function del() {
	var selRows = grid.jqGrid('getGridParam', 'selarrrow'); // 选中行id数组
	if (selRows.length <= 0) {
		top.toastr.warning("请选择数据删除");
		return false;
	}
	var ids = new Array();
	var len = selRows.length;
	var rowData = new Object();
	var delContext = "您确定删除";
	var rowData = new Object();
	if (selRows.length == 1) { // 删除单条数据
		rowData = grid.jqGrid('getRowData', selRows[0]);
		delContext += "登录名【" + rowData.loginName + "】吗？<br>";
		delContext += "删除成功之后，该操作将无法恢复。";
	} else {
		delContext += "选中的" + selRows.length + "条数据吗？<br>";
		delContext += "删除成功之后，该操作将无法恢复。";
	}
	for (var i = 0; i < len; i++) {
		var tempId = selRows[i];
		var row = grid.jqGrid("getRowData", tempId);
		var id = row.dataId;// 获取选择行数据id
		ids.push(id);
	}
	layer.confirm(delContext, {
		icon : 3,
		title : "提示"
	}, function(index) {
		$.get(ctx.path + "/platform/pm/deldatas.json?dataIds=" + ids.join(","),
				function(result) {
					if (result.rs == 1) {
						grid.trigger("reloadGrid");// 刷新表单
						top.toastr.success("删除数据成功！");
					} else {
						top.toastr.warning("删除数据失败！");
					}
				}, "json");
		layer.close(index);
	});
}
