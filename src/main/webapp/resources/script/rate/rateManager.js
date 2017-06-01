var grid = {};
var parentIndex = null;
function operate(cellValue,options,rowObject){
	var template="<a  onclick=\"editPage("+rowObject.rateId+")\" title='编辑'><i class=\"fa fa-edit\"></i>&nbsp;编辑</a>&nbsp;&nbsp;";
        template+="<a  onclick=\"del("+rowObject.rateId+",'"+rowObject.currencyName+"')\" title='删除'><i class=\"fa fa-trash\"></i>&nbsp;删除</a>&nbsp;&nbsp;";
        return template;
}
$(document).ready(
		function() {
			$.jgrid.defaults.styleUI = 'Bootstrap';
			grid = $("#jqGrid")
					.jqGrid(
							{
								url : ctx.path + '/api/rate/getSysRateList.do',
								mtype : "POST",
								datatype : "json",
								height : top.getFrameHeight()
										- $("#buttonDiv").outerHeight()
										- $("#serachDiv").outerHeight()
										- 126,
								colNames : [ '汇率ID', '货币符号', '货币名称', '标准汇率',
										'汇率折扣比例','操作' ],
								colModel : [ {
									name : 'rateId',
									index : 'rateId',
									hidden : true
								}, {
									name : 'currencyCode',
									editable : true,
									index : 'currencyCode',
									width : 100
								}, {
									name : 'currencyName',
									editable : true,
									index : 'currencyName',
									width : 100
								}, {
									name : 'standardRate',
									editable : true,
									index : 'standardRate',
									width : 100
								}, {
									name : 'proportion',
									editable : true,
									index : 'proportion',
									width : 100
								} ,{
									name:'act',
									index:'act',
									width:100,
									formatter:operate,
								}],
								autowidth : true,// 自适应宽度
								shrinkToFit : true,
								rowNum : 20,
								rowList : [ 10, 20, 50 ],
							//	rownumbers : true,// 添加左侧行号
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

			
			// 编辑数据
			$("#dataEditForm").validate({
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
											top.toastr.success("编辑汇率成功！");
											layer.close(parentIndex); // 再执行关闭
											FormUtil.resetForm("dataEditForm");
										}
									});
						}
					});

		});

function validateForm(){
	var pro=/^[0-9]{1,3}([.]{1}[0-9]{1,4})?$/;
	var proportion=$("#proportion").val(); 
	if(proportion==undefined||proportion==""){
		top.toastr.error("汇率折扣比例不能为空！");
		return false;
	}else if(proportion!=undefined&&proportion.trim()!=""){
		var v=pro.test(proportion);
		if(v==false){
			top.toastr.error("请输入正确的汇率折扣比例！");
			return false;
		}
	}
}
// 打开编辑页面
function editPage(rateId) {
	
	$.ajax({
		url : ctx.path + '/api/rate/getSysRateInfo.json',
		async : true,
		dataType : 'json',
		type : 'POST',
		data : {
			rateId : rateId
		},
		success : function(data) {
			if (data.rs == -1) {
				top.toastr.error("操作失败");
				return false;
			}
			$("#dataEditForm").fill(data.data);// 表单数据填充
			$("#dataEditForm").find("#dataId").val(rateId);
			parentIndex = layer.open({
				title : '编辑汇率',
				type : 1,
				area : [ '40%', '40%' ],
				fix : true,
				maxmin : true,
				btn : [ '提交', '取消' ],
				yes : function(index, layero) {
					var v=validateForm();
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
function del(rateId,currencyName) {
	var delContext = "您确定删除";
		delContext += "货币名称【" + currencyName + "】吗？<br>";
		delContext += "删除成功之后，该操作将无法恢复。";
	layer.confirm(delContext, {
		icon : 3,
		title : "提示"
	}, function(index) {
		$.get(ctx.path + "/api/rate/delSysRate.json?rateId=" + rateId,
				function(result) {
					if (result.rs == 1) {
						grid.trigger("reloadGrid");// 刷新表单
						top.toastr.success("删除汇率成功！");
					} else {
						top.toastr.warning("删除数据失败！");
					}
				}, "json");
		layer.close(index);
	});
}
