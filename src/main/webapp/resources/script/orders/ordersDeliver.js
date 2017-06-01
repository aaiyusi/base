var grid = {};
$(function(){
	$.jgrid.defaults.styleUI = 'Bootstrap';
	grid=$("#jqGrid").jqGrid({
		url : ctx.path + "/api/ordersDeliver/queryOrdersDeliverList.do",
    	mtype:"POST",
        datatype: "json",//数据来源，本地数据
        height: $(window).height()-$("#serachDiv").height() - 77,//高度，表格高度。可为数值、百分比或'auto'
        multiselect:false,
        autowidth: true,//自动宽
        shrinkToFit: true,
        rowNum: 20,
        rowList: [20, 50, 100],
        colNames: ['订单编号','发货Id','店铺','货运单号','是否扣除库存 ','备注','发货结果','发货员','发货时间'],
        colModel: [
            {name: 'name',index:'name',sortable:false,formatter:function(cellvalue,options,rowObject){
	    		return "<a onclick='loadOrderViewPage("+ rowObject.ordersId +")'>"+cellvalue+"</a>";
	    	}},
            {name: 'deliverId', index:'deliverId',key:true,hidden:true},
            {name: 'shopName',index: 'shopName',editable: true,width: 80, search: true},
            {name: 'bills',index: 'bills',editable: true, search: true,formatter:function(cellvalue, options, rowObject){
            	if(cellvalue){
            		return cellvalue;
            	}else{
            		return "无物流单号";
            	}
            }},
            {name: 'deductStorage',index: 'deductStorage',editable: true,width: 120,search: true,formatter:function(cellvalue, options, rowObject){
            	if(cellvalue == 1){
            		return "是";
            	}else{
            		return "否";
            	}
            }},
            {name: 'remark',index: 'remark',editable: true,search: true},
            {name: 'deliverResult',index: 'deliverResult',editable: true,width: 150,search: true,formatter:function(cellvalue, options, rowObject){
            	if(cellvalue == '1'){
            		return "<span class=\"text-success\">query_sendOk</span>";
            	}else{
            		return "";
            	}
            }},
            {name: 'createUserName',index: 'createUserName',editable: true,width: 100,search: true},
            {name: 'deliverTime',index: 'deliverTime',editable: true,width: 180,search: true,formatter:function(cellvalue){
            	if(cellvalue){
	    			return DateUtil.getSmpFormatDateByLong(cellvalue,true);
	    		}else{
	    			return "";
	    		}
            }}
        ],
        rownumbers:false,//添加左侧行号
        altRows:true,//设置为交替行表格,默认为false
        sortname:'deliverId',
        sortorder:'desc',
        pager: "#jqGridPager",
        viewrecords: true, //是否在浏览导航栏显示记录总数
        viewrecords: true, //是否在浏览导航栏显示记录总数
	    hidegrid: false,
	    jsonReader: {
		    root: "data.data",// Json数据
		    records: "data.totalRows",// 总记录数
		    total:"data.totalPages",
		    page:"data.page",
		    repeatitems: false
	    },
        gridComplete: function(){
    	},                
        loadComplete:function(data){ //完成服务器请求后，回调函数    
        	var newHeight = $(window).height()-$("#serachDiv").height() - 77;
        	$("#jqGrid").jqGrid('setGridHeight',newHeight);
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
		var newHeight=$(window).height()-$("#serachDiv").height() - 77;
		$("#jqGrid").jqGrid('setGridHeight',newHeight);
    });	
    
  //加载店铺
	HttpUtil.post(ctx.path + "/api/shop/queryShopTreeByPlatformType.do", "isUse=1", function(data){
		var optionStr = '<li><a href="javascript:void(0);" onclick="setCtrlValue(\'shopId\', \'\');setCtrlValue(\'platformType\', \'\');" class="btn-from-reset">全部店铺</a></li>';
		optionStr += '<li class="divider"></li>';
		if(data != null && data.rs == 1){
				$.each(data.data,function(i,n){
					var platformType = n.platform_type; 
					var childList = n.childrens;
					if(childList != null){
						if(platformType == 1){
							optionStr += '<li class="dropdown-submenu">';
							optionStr += '<a tabindex="-1" href="javascript:void(0);">Aliexpress</a>';
							optionStr += '<ul class="dropdown-menu fixed-height">';
							optionStr += '<li><a href="javascript:setCtrlValue(\'platformType\',\'1\');setCtrlValue(\'shopId\', \'\');">全部Aliexpress店铺</a></li>';
							optionStr += '<li class="divider"></li>';
							$.each(childList,function(key,value){
								var isUser = value.is_use;
								if(isUser == 0){
									optionStr += '<li class="hide-shop"><a href="javascript:setCtrlValue(\'shopId\',\''+value.shop_id+'\');setCtrlValue(\'platformType\', \'\');">'+value.shop_name+'</a></li>';
								}else if(isUser == 1){
									optionStr += '<li class=""><a href="javascript:setCtrlValue(\'shopId\',\''+value.shop_id+'\');setCtrlValue(\'platformType\', \'\');">'+value.shop_name+'</a></li>';
								}
							});
							optionStr += '</ul></li>';
						}else if(platformType == 2){
							optionStr += '<li class="dropdown-submenu">';
							optionStr += '<a tabindex="-1" href="javascript:void(0);">Wish</a>';
							optionStr += '<ul class="dropdown-menu fixed-height">';
							optionStr += '<li><a href="javascript:setCtrlValue(\'platformType\',\'2\');setCtrlValue(\'shopId\', \'\');">全部Wish店铺</a></li>';
							optionStr += '<li class="divider"></li>';
							$.each(childList,function(key,value){
								var isUser = value.is_use;
								if(isUser == 0){
									optionStr += '<li class="hide-shop"><a href="javascript:setCtrlValue(\'shopId\',\''+value.shop_id+'\');setCtrlValue(\'platformType\', \'\');">'+value.shop_name+'</a></li>';
								}else if(isUser == 1){
									optionStr += '<li class=""><a href="javascript:setCtrlValue(\'shopId\',\''+value.shop_id+'\');setCtrlValue(\'platformType\', \'\');">'+value.shop_name+'</a></li>';
								}
							});
							optionStr += '</ul></li>';
						}else if(platformType == 0){
							optionStr += '<li class="dropdown-submenu">';
							optionStr += '<a tabindex="-1" href="javascript:void(0);">Other</a>';
							optionStr += '<ul class="dropdown-menu fixed-height">';
							optionStr += '<li><a href="javascript:setCtrlValue(\'platformType\',\'0\');setCtrlValue(\'shopId\', \'\');">全部Other店铺</a></li>';
							optionStr += '<li class="divider"></li>';
							$.each(childList,function(key,value){
								var isUser = value.is_use;
								if(isUser == 0){
									optionStr += '<li class="hide-shop"><a href="javascript:setCtrlValue(\'shopId\',\''+value.shop_id+'\');setCtrlValue(\'platformType\', \'\');">'+value.shop_name+'</a></li>';
								}else if(isUser == 1){
									optionStr += '<li class=""><a href="javascript:setCtrlValue(\'shopId\',\''+value.shop_id+'\');setCtrlValue(\'platformType\', \'\');">'+value.shop_name+'</a></li>';
								}
							});
							optionStr += '</ul></li>';
						}
					}else{
						if(platformType == 1){
							optionStr += '<li role="presentation" class="dropdown-header">Aliexpress</li>';
						}else if(platformType == 2){
							optionStr += '<li role="presentation" class="dropdown-header">Wish</li>';
						}else if(platformType == 0){
							optionStr += '<li role="presentation" class="dropdown-header">Other</li>';
						}
					}
				});
			}
		 $("#pageForm #isHidden").empty().append(optionStr);
	});
});

//刷新数据
function reloadGrid(){
	grid.trigger("reloadGrid");
}

function assignment(filtertype,filtername,filterlabel){
	if(filterlabel == '模糊查询'){
		$("#filtervalue").val("");
		$("#filtervalue").removeAttr("name");
		$("#filtervalue").attr("disabled","disabled");
	}else{
		$("#filtervalue").attr("name",filtername);
		$("#filtervalue").removeAttr("disabled");
	}
}

function setCtrlValue(name, value){
	$('#pageForm input[name="' + name + '"]').val(value);
}

//清除表单
function clearForm(){
	$("#pageForm #shopButton").html("全部店铺");
	$("#pageForm #sendStatusdefault").html("不限发货结果");
	$("#pageForm #operdefault").html("不限发货员");
	$("#pageForm #filtertypedefault").html("模糊查询");
	$("#filtervalue").attr("disabled","disabled");
}

//查看订单详情
function loadOrderViewPage(ordersId){
	if(ordersId){
		parentIndex = parent.layer.open({
		    title:'订单详情',
		    type: 2,
		    area: ['90%', '90%'],
		    fix: true,
		    maxmin: true,
		    content: ctx.path + '/api/orders/loadOrderViewPage.do?type=1&ordersId='+ordersId
		 });
	}
}