
	var storageId = 0;
    var grid = {};
    var parentIndex = null;
    var oldSelectId ;//仓库选择前值
    var edit = false;
    $(document).ready(function(){
    $.jgrid.defaults.styleUI = 'Bootstrap';
    grid = $("#jqGrid").jqGrid({
	beforeRequest: function(){
		$(".ui-jqgrid .jqgrid-overlay").attr("style","display:block");
	},  		 
	loadComplete: function(xhr){
		$(".ui-jqgrid .jqgrid-overlay").attr("style","display:none");
	},  
    url : ctx.path +'/api/whouseOut/queryList.do',
    mtype:"POST",
    datatype : "json",
    height: top.getFrameHeight() - $("#buttonDiv").outerHeight() - $("#serachDiv").outerHeight() - 125,
    colNames : ['id','批次编号','仓库','备注','SKU个数','出库时间','操作人','操作'],
    colModel : [{name : 'storage_id',index:'storage_id',hidden:true},
                		{name : 'storage_code',editable: true,index:'storage_code',width : 100,
    								formatter : function(cellvalue, options, rowObject){
    								return '<a href="javascript:void(0);"  onclick="detialWhouseChild(' + options. rowId+ ')">'+cellvalue+'</i></a>';
    								}
                		},
                		{name : 'whouse_name',editable: true,index:'whouse_name',width : 100},
                		{name : 'remark',editable: true,index:'remark',width : 200},
                		{name : 'sku_count',editable: true,index:'sku_count',width : 100},
                		{name : 'create_date',index:'create_date',width:100,sorttype: "date",formatter : function(cellvalue){
                       	 return DateUtil.getSmpFormatDate(new Date(cellvalue), true);}},
                		{name : 'create_user_name',editable: true,index:'create_user_name',width : 100},
                		{width : 50,formatter : function(cellvalue, options, rowObject){
                          	 return '<a href="javascript:void(0);"  onclick="detialWhouseChild(' + options. rowId+ ')"><i class="fa fa-eye" >查看</i></a>';
                        }}],
    autowidth: true,//自适应宽度
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
    
    //tab页面
        $("#grenul li").bind("click",function(){
            codeType = $(this).attr("labelname");
            
            if(codeType == "manualOut"){
            	window.location.href=ctx.path +"/resources/views/whouse/whouseOut.jsp";
            }else{
            	window.location.href=ctx.path +"/resources/views/whouse/whouseIn.jsp";
            }
        });
        
        
        $("#printInList").bind("click",function(){
        	window.open(ctx.path +"/api/whouseIn/queryDetialByStorageCode.do?storageId="+storageId);
        });

      //输入框失去焦点事件
    	$('#InSKU').blur(function() {
    		if($("#whouseAddSelect").children('option:selected').val() == ""){
    			top.toastr.error("请先选择仓库信息");
    		}
    		if( $('#InSKU').val() == ""){
    			return false;
    		}
    		if($("#whouseAddSelect").children('option:selected').val() != "" && $(this).val() !=""){
    	  		$.ajax({  
                    url:  ctx.path +"/api/whouseIn/querySpaceIdBySku.do",    //后台webservice里的方法名称  
                    data : {
                    	whouseId : $("#whouseAddSelect").children('option:selected').val(),
                    	sku:$(this).val()
        			},
                    type: "post",  
                    success: function (data) {  
                    	if(data.data.length == 1){
                    			var jsonObj =data.data;  
                    			var optionstring = "";  
                    			for (var j = 0; j < jsonObj.length; j++) {  
                    				optionstring += "<option value=\"" + jsonObj[j].spaceId + "\"  >" + jsonObj[j].space_code + "</option>";  
                    			}  
                    			$("#spaceId").html(optionstring);  
                    	}else{
                        	//验证SKU是否存在
                            $.ajax({  
                                url:  ctx.path +"/api/whouseOut/queryBySku.do",    //后台webservice里的方法名称  
                                data : {
                    				sku : $("#InSKU").val()
                    			},
                                type: "post",  
                                success: function (data) {  
                                	if(data.rs == 1){
                                		top.toastr.error("库存SKU【"+ $('#InSKU').val()+"】没有【"+$("#whouseAddSelect").find("option:selected").text()+"】仓库信息或者没有激活该仓库");
                                		$("#spaceId").html("<option value=''>-选择仓位-</option>");
                                		return false;
                                	}else{
                                		top.toastr.error("您输入的sku不存在");
                                		$("#spaceId").html("<option value=''>-选择仓位-</option>");
                                		return false;
                                	}
                                },  
                                error: function (msg) {  
                                	top.toastr.error(msg);
                                }  
                            }); 
                    	}
                    },  
                    error: function (msg) {  
                    	top.toastr.error(msg);
                    }  
                }); 
    		}
    		}); 
        //仓库下拉选择联动库位
        $('#whouseAddSelect').change(function(){
          	 var obj = $("#jqAddGrid").jqGrid("getRowData");
         	if(obj.length != 0){
         		//询问框
         		layer.confirm('确认更换仓库吗？这样做会导致下面入库商品清单中没有保存入库的项目被删除.', {
         		  btn: ['确认更换仓库','取消'] //按钮
         		}, function(){
         		    //清空内容
         			 var temp = $("#whouseAddSelect").val();
         		    FormUtil.resetForm("whouseInChildForm");
         		   $("#whouseAddSelect").val(temp);//选择之前的内容
         		    jQuery("#jqAddGrid").jqGrid("clearGridData");
         		    layer.msg('请重新输入', {icon: 1, time: 2000 });
         		}, function(){
         			$("#whouseAddSelect").val(oldSelectId);//选择之前的内容
         			
         		});
         	}else{
         		$( "#InSKU" ).val( '');
        		$("#InCount").val('');
        		$("#spaceId").html("<option value=''>-选择仓位-</option>");
        		$("#price").val('');
         	}
            //联想下拉
            $.ajax({  
                url:  ctx.path +"/api/whouseOut/querySkuByWhouseId.do",    //查询该仓库下的sku
                type: "post",  
                data:{
                	whouseId : $(this).val()
                },
                success: function (data) {  
                	var availableTags =data.data;
                	//input智能查询
             	   $( "#InSKU" ).autocomplete({
          		      minLength: 0,
          		      source: availableTags,
          		      focus: function( event, ui ) {
          		        $( "#InSKU" ).val( ui.item.label );
          		        return false;
          		      },
          		      select: function( event, ui ) {
          		 
          		        return false;
          		      }
          		    })
          		    .data( "ui-autocomplete" )._renderItem = function( ul, item ) {
          		      return $( "<li>" )
          		        .append( "<a>sku:" + item.label + "<br>名称:" + item.desc + "</a>" )
          		        .appendTo( ul );
          		    };
                },  
                error: function (msg) {  
                    top.toastr.error('操作失败');
                }  
            }); 
        });
        
        
    //下拉框
    $.ajax({  
        url:  ctx.path +"/api/whouseOut/selectWhouse.do",    //后台webservice里的方法名称  
        type: "post",  
        dataType: "json",  
        contentType: "application/json",  
        traditional: true,  
        success: function (data) {  
                var jsonObj =data.data;  
                var optionstring = "";  
                for (var j = 0; j < jsonObj.length; j++) {  
                    optionstring += "<option value=\"" + jsonObj[j].whouse_id + "\"  >" + jsonObj[j].whouse_name + "</option>";  
                }  
                $("#whouseSelect").html("<option value='' >全部仓库</option>"+optionstring);  
        },  
        error: function (msg) {  
            alert("出错了！");  
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

    
    /**
     * 出库主子表界面操作
     */
    
    //屏幕发生变化的时候计算表格高度
    $(window).bind('resize', function () {
    var width = $('.jqGrid_wrapper').width();
    $('#jqGrid').setGridWidth(width);
    var newHeight=top.getFrameHeight() - $("#buttonDiv").outerHeight() - $("#serachDiv").outerHeight() - 125;
    $("#jqGrid").jqGrid('setGridHeight',newHeight);
    });


    

    
    //子表添加行
    $("#childAdd").bind("click",function(){
    	var isFlag =true;//表单验证
    	if(checkUtil.isNullValue($("#whouseAddSelect").val())){
    		$("#whouseAddSelect").focus(); 
    		top.toastr.error("请先选择要出库的仓库");
    		return false;
    	}
    	if(checkUtil.isNullValue($("#InSKU").val())){
    		$("#InSKU").focus(); 
    		isFlag= false;
    	}
    	if(checkUtil.isNullValue($("#InCount").val())){
    		$("#InCount").focus(); 
    		isFlag= false;
    	}
    	if(checkUtil.isNullValue($("#spaceId").val())){
    		$("#spaceId").focus(); 
    		isFlag= false;
    	}
    	if(isFlag == false){
    		top.toastr.error("SKU编号和出库数量及仓位不能为空或格式不正确");
    		return false;
    	}
    	if(!checkUtil.isInt($("#InCount").val())){
    		$("#InCount").focus(); 
    		top.toastr.error("出库数量格式不正确");
    		return false;
    	}
    	//验证SKU是否存在
        $.ajax({  
            url:  ctx.path +"/api/whouseOut/queryBySku.do",    //后台webservice里的方法名称  
            data : {
				sku : $("#InSKU").val()
			},
            type: "post",  
            success: function (data) {  
            	if(data.rs == 1){
            		var entity = data.data;
                	$("#InSKU").val();
                	$("#price").val();
                	$("#InCount").val();
                	$("#whouseId").val();
                    var ids = jQuery("#jqAddGrid").jqGrid('getDataIDs');  
                    //获得当前最大行号（数据编号）  
                    var rowid = Math.max.apply(Math,ids);  
                    if(rowid == -Infinity){
                    	rowid = 0;
                    }
                    //获得新添加行的行号（数据编号）  
                    newrowid = rowid+1;  
                    var dataRow = {    
                    		detailId : "",  
                    		spaceId : $("#spaceId").val(),
                    		storgetImage : entity.storgetImage,  
                    		sku : entity.sku,  
                    		name : entity.name,  
                    		spaceCode : $("#spaceId").find("option:selected").text(),  
                    		inventoryCount :entity.inventoryCount,  
                    		count : $("#InCount").val(),  
                    		price : $("#price").val() == "" ? 0:$("#price").val() ,
                    		totalPrice : $("#InCount").val()*($("#price").val() == "" ? 0:$("#price").val())
                    };      
                   
                    //将新添加的行插出到第一列  
                    var su = jQuery("#jqAddGrid").jqGrid('addRowData', newrowid, dataRow);
                    //以下是添加时就为修改状态	
//                    jQuery("#jqAddGrid").jqGrid('saveRow', rowid);//保存行内容
//                    $("#jqAddGrid").setGridParam({cellEdit:false}); 
//                    jQuery('#jqAddGrid').jqGrid('restoreRow', rowid);//重置行状态
//                    jQuery('#jqAddGrid').jqGrid('editRow', newrowid, true);//可编辑
//                    $("#jqAddGrid").jqGrid('setSelection',newrowid);//选中新增行
                    
            	}else{
            		top.toastr.error("您输入的sku不存在");
            		return false;
            	}
            },  
            error: function (msg) {  
            	top.toastr.error(msg);
            }  
        }); 
    	
    });
    
    
    
    
    });
    /**************************************方法如下*************************************/
    
    //获取选中前值
    function getnowid(){
    	oldSelectId = $('#whouseAddSelect').val();
    }
    
    
    //刷新表单
    function refreshGrid(){
    grid.trigger("reloadGrid");
    }
    
    //屏幕发生变化的时候计算表格高度
    function reSizeAdd(){
        var width = $('.jqInChlidAddGrid_wrapper').width();
        $('#jqAddGrid').setGridWidth(width);
        var newHeight=top.getFrameHeight()  - 75;
        $("#jqAddGrid").jqGrid('setGridHeight',newHeight);
    }
    
    var chlidGrid;//子表grid
    var lastsel;//最后选择行
    
    
    /**
     * 打开新增页面
     */
    function openAddPage(){
    	chlidGrid = $("#jqAddGrid").jqGrid({
	        url : '',
	        mtype:"POST",
	        datatype : "json",
	        height: top.getFrameHeight() - $("#buttonDiv").outerHeight() - $("#serachDiv").outerHeight() - 110,
	        colNames : ['id','space_id','缩略图','库存SKU编号','中文名称','仓位','变动前库存','出库数量','操作'],
	        colModel : [{name : 'detailId',index:'detailId',hidden:true},
	                    		{name : 'spaceId',index:'spaceId',hidden:true},
	                    		{name : 'storgetImage',index:'storgetImage',width : 50,
	        						formatter : function(cellvalue, options, rowObject){
	        							var imgSrc = cellvalue;
	        							if(!cellvalue){
	        								imgSrc = ctx.path + "/resources/images/photo_default.jpg";
	        							}
	        							var imageHtml = "<img src='" + imgSrc + "' originalValue='暂无图片' style='max-height: 40px;max-width: 40px;vertical-align: middle;'/>";
	        							return imageHtml;
	        					}},
	                    		{name : 'sku',index:'sku',width : 100},
	                    		{name : 'name',index:'name',width : 100},
	                    		{name : 'spaceCode',index:'spaceCode',width : 100},
	                    		{name : 'inventoryCount',index:'inventoryCount',width:100},
	                    		{name : 'count',editable: true,index:'count',width : 100},
	                    		{name : 'make' ,width : 140,
	                    			formatter : function(cellvalue, options, rowObject){
		                               	 return '<a href="javascript:void(0);"   onclick="editWhouseChild(' + options. rowId+ ')"><i class="fa fa-edit" >编辑</i></a>&nbsp;&nbsp;<a href="javascript:void(0);"   onclick="delWhouseChild(' + options. rowId+ ')"><i class="fa fa-trash" >删除</i></a>';
	                                }}
	                    			],
	        autowidth: true,//自适应宽度
	        viewrecords : true,
	        shrinkToFit: true,
	        onSelectRow : function(id) {
	            if (id && id !== lastsel) {
	            edit = true;
	             jQuery("#jqAddGrid").jqGrid('saveRow', lastsel);//保存行内容
	             jQuery('#jqAddGrid').jqGrid('restoreRow', lastsel);//重置行状态
	              jQuery('#jqAddGrid').jqGrid('editRow', id, true);//设置行为可编辑
	              lastsel = id;
	            }else{
	            	if(edit){//选中自己可编辑的话设为不可编辑保存记录
	            		 edit = false;
	            		 jQuery("#jqAddGrid").jqGrid('saveRow', lastsel);//保存行内容
	            		 jQuery('#jqAddGrid').jqGrid('restoreRow', id);
	            	}else{
	            		edit = true;
	            		jQuery('#jqAddGrid').jqGrid('editRow', id, true);
	            	}
	            }
	          }
	    });   

        //下拉框
        $.ajax({  
            url:  ctx.path +"/api/whouseOut/selectWhouse.do",    //后台webservice里的方法名称  
            type: "post",  
            dataType: "json",  
            contentType: "application/json",  
            traditional: true,  
            success: function (data) {  
                    var jsonObj =data.data;  
                    var optionstring = "";  
                    for (var j = 0; j < jsonObj.length; j++) {  
                        optionstring += "<option value=\"" + jsonObj[j].whouse_id + "\"  >" + jsonObj[j].whouse_name + "</option>";  
                    }  
                    $("#whouseAddSelect").html("<option value='' >-选择仓库-</option>"+optionstring);  
            },  
            error: function (msg) {  
            	top.toastr.error(msg);
            }  
        });    
        
    	
        

        
       var storage_code = CodeUtil.batchNoOut();//批次号
       var time =  DateUtil.getFormatDate(new Date(), "yyyy-MM-dd");//生成日期
       
       $("#storageCode").text(storage_code);
       $("#createDate").text(time);
    	
    parentIndex = layer.open({
    title:'新增出库批次',
    type: 1,
    area: ['90%', '90%'],
    fix: true,
    zIndex: 50,
    maxmin: true,
    btn:['保存','取消'],
    yes:function(index, layero){
    var obj = $("#jqAddGrid").jqGrid("getRowData");
    if(!checkUtil.isNullValue(obj)){
    	var flag = whouseInSave();
    	if(flag == false){
    		return false;
    	}
    	
    }else{
    	top.toastr.error("请至少输入一个出库的SKU");
    }
    },
    content: $('#dataAdd'),
    cancel:function(index){
    //清空内容
    FormUtil.resetForm("whouseInChildForm");
    jQuery("#jqAddGrid").jqGrid("clearGridData");
    $("#spaceId").html("<option value=''>-选择仓位-</option>");
    },
    full:function(layero){
    	setTimeout(function(){
    		reSizeAdd();
    	},100);
    },
    success:function(layero){
    	reSizeAdd();
    },
    restore: function(layero){
    	reSizeAdd();
    }
    });
    
    }
    //数据提交
    function whouseInSave(){
    	var whouseInChild = new Array();  
    	var whouseStorage = {}  
    	var param = {}
    	
    	
    	var storageCode = $("#storageCode").text();
    	var createDate = $("#createDate").text();
    	var whouseAddSelect = $("#whouseAddSelect").val();
    	var remark = $("#remark").val();
    	
    	var flag = true;
    	 jQuery("#jqAddGrid").jqGrid('saveRow', lastsel);
    	 $("#jqAddGrid").setGridParam({cellEdit:false});  //不可编辑
    	 var obj = $("#jqAddGrid").jqGrid("getRowData");
    	    jQuery(obj).each(function(key){//遍历grid行
    	    	whouseInChild.push(obj[key]);
    	    	if(!checkUtil.isInt(obj[key].count)){
            		top.toastr.error("出库数量格式不正确");
            		flag = false;
            		return false;
            	}
    	    });
    	
    	if(flag == false){
    		return false;
    	}
    	    
    	whouseStorage.storageCode = storageCode;
    	whouseStorage.createDate = createDate;
    	whouseStorage.whouseId = whouseAddSelect;
    	whouseStorage.remark = remark;
    	whouseStorage.skuCount = whouseInChild.length;
    	
    	
    	    param.wsdList = whouseInChild;//子表list插出集合
    	    param.whouseStorage = whouseStorage;//主表插出集合
            $.ajax({  
                url:  ctx.path +"/api/whouseOut/addStrorage.do",    //后台webservice里的方法名称  
                type: "post",  
                dataType: "json",  
                contentType: "application/json;charset=utf-8",  
                traditional: true,  
                layerMaskFlag:true,
                data:
                	JSON.stringify(param )
                	,
                success: function (data) {  
                	if(data.rs == 1){
                		top.toastr.success("新增出库批次成功");
                	}else{
                		top.toastr.error("新增出库批次失败");
                	}
                	 //清空内容
                    FormUtil.resetForm("whouseInChildForm");
                    jQuery("#jqAddGrid").jqGrid("clearGridData");
                    $("#spaceId").html("<option value=''>-选择仓位-</option>");
                	layer.close(parentIndex);
                	refreshGrid();
                },  
                error: function (msg) {  
                	top.toastr.error(msg);
                }  
            });    
    };

    //删除行
    function delWhouseChild(rowId){
 		/*//询问框
 		layer.confirm('确认要将该商品从出库商品中删除吗，请注意删除以后不可恢复！', {
 		  btn: ['确认','取消'] //按钮
 		}, function(){
 			$("#jqAddGrid").jqGrid("delRowData", rowId);  
 		}, function(){
 			
 		});*/
 		$("#jqAddGrid").jqGrid("delRowData", rowId);  
    };
    //编辑行
    function editWhouseChild(rowId){
        if (rowId && rowId !== lastsel) {
            jQuery("#jqAddGrid").jqGrid('saveRow', lastsel);//保存行内容
            jQuery('#jqAddGrid').jqGrid('restoreRow', lastsel);//重置行状态
            jQuery('#jqAddGrid').jqGrid('editRow', rowId, true);//设置行为可编辑
            lastsel = rowId;
          }
    }
    
    
    /**
     * 查看详情
     */
      function detialWhouseChild(rowId){
      	var rowData = $("#jqGrid").jqGrid("getRowData",rowId);
      	storageId = rowData.storage_id;
      	//主表赋值
        $.ajax({  
            url:  ctx.path +"/api/whouseOut/queryDetialHeadByStorageId.do",    //后台webservice里的方法名称  
            type: "post",  
            data:{
            	storageId :rowData.storage_id
            },
            success: function (data) {  
            	$("#storageCodeDetial").text(data.data.storageCode);
            	$("#createDateDetial").text(DateUtil.getSmpFormatDate(new Date(data.data.createDate), false));
            	$("#whouseAddSelectDetial").text(data.data.whouseName);
            	$("#remarkDetial").text(data.data.remark);
            },  
            error: function (msg) {  
            	top.toastr.error("操作失败");
            }  
        });   
      	//子表遍历
        var detialGrid = $("#jqDetialGrid").jqGrid({
            url : ctx.path +'/api/whouseOut/queryDetialByStorageId.do?storageId='+rowData.storage_id,
            mtype:"POST",
            datatype : "json",
            height: top.getFrameHeight() - $("#buttonDiv").outerHeight() - $("#serachDiv").outerHeight() - 110,
            colNames : ['id','缩略图','库存SKU编号','中文名称','仓位','变动前库存','出库数量'],
            colModel : [{name : 'detail_id',index:'detail_id',hidden:true},
                        		{name : 'storget_image',index:'storget_image',width : 50,
            					formatter : function(cellvalue, options, rowObject){
            						if(cellvalue != "" && cellvalue != null && cellvalue != undefined){
        								return "<img src='"+cellvalue+"' border='0' style='width: 40px; height: 40px;' />";
        							}else{
        								return "<img src='/erp/resources/images/photo_default.jpg' border='0' style='width: 40px; height: 40px;' />";
        							}
            					}},
                        		{name : 'sku',index:'sku',width : 100},
                        		{name : 'name',index:'name',width : 100},
                        		{name : 'space_code',index:'space_code',width : 100},
                        		{name : 'inventory_count',index:'inventory_count',width:100},
                        		{name : 'count',editable: true,index:'count',width : 100}
                        			],
            autowidth: true,//自适应宽度
            viewrecords : true,
            shrinkToFit: true,
            rowNum : 20,
            rowList: [10, 20, 50],
            pager : '#jqGridDetialPager',
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
        detialGrid.jqGrid("setGridParam", {url:ctx.path +'/api/whouseOut/queryDetialByStorageId.do?storageId='+rowData.storage_id});
        detialGrid.trigger("reloadGrid");
        //屏幕发生变化的时候计算表格高度
        function reSizeDetail(){
        	var width = $('.jqInChlidDetialGrid_wrapper').width();
            $('#jqDetialGrid').setGridWidth(width);
            var newHeight=top.getFrameHeight()  - 75;
            $("#jqDetialGrid").jqGrid('setGridHeight',newHeight);
        }
 
      //弹出详情
        var parentIndex = layer.open({
            title:'查看出库批次',
            type: 1,
            area: ['90%', '90%'],
            fix: true,
            maxmin: true,
            btn:['取消'],
            cancel:function(index, layero){
            	
            },
            content: $('#dataDetial'),
            full:function(layero){
            	setTimeout(function(){
            		reSizeDetail();
            	},100);
            },
            success:function(layero){
            	reSizeDetail();
            },
            restore: function(layero){
            	reSizeDetail();
            }
            });
      
      }
    
    
