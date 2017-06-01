
    var grid = {};
    var parentIndex = null;
    var oldSelectId ;//仓库选择前值
    var isChangeTab = true;//哪个查询框
    $(document).ready(function(){
    $.jgrid.defaults.styleUI = 'Bootstrap';
    grid = $("#jqGrid").jqGrid({
	beforeRequest: function(){
		$(".ui-jqgrid .jqgrid-overlay").attr("style","display:block");
	},  		 
	loadComplete: function(xhr){
		$(".ui-jqgrid .jqgrid-overlay").attr("style","display:none");
	},  
    url : ctx.path +'/api/whouseOutInFlow/queryList.do',
    mtype:"POST",
    datatype : "json",
    height: top.getFrameHeight() - $("#buttonDiv").outerHeight() - $("#serachDiv").outerHeight() - 85,
    colNames : ['仓库id','日期','商品编号','名称','仓库','入库数量','出库数量','操作'],
    colModel : [
                		{name : 'whouse_id',hidden: true},
                		{name : 'create_date',editable: true,index:'create_date',width : 100},
                		{name : 'sku',editable: true,index:'sku',width : 100},
                		{name : 'name',editable: true,index:'name',width : 200},
                		{name : 'whouse_name',editable: true,index:'whouse_name',width : 100},
                		{name : 'skuin',editable: true,index:'skuin',width : 100,formatter : function(cellvalue, options, rowObject){
                        	 return '<font color="green">+'+cellvalue+'</font>';
                        }},
                		{name : 'skuout',editable: true,index:'skuout',width : 100,formatter : function(cellvalue, options, rowObject){
                			if(cellvalue <0){
                				return '<font color="red">'+cellvalue+'</font>';
                			}else{
                				return '<font color="red">-'+cellvalue+'</font>';
                			}
                        }},
                		{width : 50,formatter : function(cellvalue, options, rowObject){
                         	 return '<a href="javascript:void(0);"  onclick="detialWhouseChild(' + options. rowId+ ')"><i class="fa fa-eye" >查看</i></a>';
                       }}
                		],
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
    

    
    //仓库查询下拉框
    $.ajax({  
        url:  ctx.path +"/api/warehouseCheck/selectWhouse.do",    //后台webservice里的方法名称  
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
    
    //仓库查询下拉框
    var jsonObj = [];
    jsonObj.push({name:'入库',id:'1'});
    jsonObj.push({name:'出库',id:'0'});
    var typeTemp = '';
    for (var j = 0; j < jsonObj.length; j++) {  
    	typeTemp += "<option value=\"" + jsonObj[j].id + "\"  >" + jsonObj[j].name + "</option>";  
    }  
    $("#type").html("<option value='' >全部类型</option>"+typeTemp);  
    

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
     * 盘点主子表界面操作
     */
    
    //屏幕发生变化的时候计算表格高度
    $(window).bind('resize', function () {
    var width = $('.jqGrid_wrapper').width();
    $('#jqGrid').setGridWidth(width);
    var newHeight=top.getFrameHeight() - $("#buttonDiv").outerHeight() - $("#serachDiv").outerHeight() - 85;
    $("#jqGrid").jqGrid('setGridHeight',newHeight);
    });


    
    });

    /**************************************方法******************************/

    
    
    
    /**
     * 查看详情
     */
      function detialWhouseChild(rowId){
      	var rowData = $("#jqGrid").jqGrid("getRowData",rowId);
      	//主表赋值
            	$("#createDate").text(rowData.create_date);
            	$("#sku").text(rowData.sku);
            	$("#name").text(rowData.name);
            	$("#whouseName").text(rowData.whouse_name);
            	$("#skuin").html(rowData.skuin);
            	$("#skuout").html(rowData.skuout);
      	//子表遍历
        var detialGrid = $("#jqDetialGrid").jqGrid({
            url :ctx.path +'/api/whouseOutInFlow/queryDetailList.do?create_date='+rowData.create_date+'&whouse_id='+rowData.whouse_id+'&sku='+rowData.sku+'&typeQuery='+$("#type").val(),
            mtype:"POST",
            datatype : "json",
            height: top.getFrameHeight() - $("#buttonDiv").outerHeight() - $("#serachDiv").outerHeight() - 110,
            colNames : ['批次号','时间','类型','仓位','变更数量','操作人','备注'],
            colModel : [{name : 'storage_code',hidden:true,width : 200},
                        		{name : 'create_date',index:'create_date',width : 200},
                        		{name : 'type',index:'type',width : 100,formatter : function(cellvalue, options, rowObject){
                        			if(cellvalue == 1){//入库
                        				 return '<font color="green">入库</font>';
                        			}else{//出库
                        				return '<font color="red">出库</font>';
                        			}
                                }},
                        		{name : 'space_code',index:'space_code',width:100},
                        		{name : 'count',index:'count',width : 100,formatter : function(cellvalue, options, rowObject){
                        			if(rowObject.type == 1){//入库
                       				 return '<font color="green">+'+cellvalue+'</font>';
                       			}else{//出库
                       				if(cellvalue <=0){
                        				return '<font color="red">'+cellvalue+'</font>';
                        			}else{
                        				return '<font color="red">-'+cellvalue+'</font>';
                        			}
                       			}
                               }},
                        		{name : 'create_user_name',index:'create_user_name',width : 100},
                        		{name : 'isflag',editable: true,index:'isflag',width : 300,formatter : function(cellvalue, options, rowObject){
                        			//0是出入库，1是仓存盘点
                        			if(cellvalue == 1){//库存盘点
                          				   return '库存盘点，相关批次:<font color="green">'+rowObject.storage_code+'</font>;';
                          			}else{//出入库
                          				if(rowObject.type == 1){//入库
                          					return '手工入库，相关批次:<font color="green">'+rowObject.storage_code+'</font>;';
                          				}else{
                          					return '手工出库，相关批次:<font color="green">'+rowObject.storage_code+'</font>;';
                          				}
                          			}
                                  }}
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
        detialGrid.jqGrid("setGridParam", {url:ctx.path +'/api/whouseOutInFlow/queryDetailList.do?create_date='+rowData.create_date+'&whouse_id='+rowData.whouse_id+'&sku='+rowData.sku+'&typeQuery='+$("#type").val()});
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
            title:'查看出入库流水详情',
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
    
    
