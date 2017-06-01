
    var grid = {};
    var parentIndex = null;
    $(document).ready(function(){
    $.jgrid.defaults.styleUI = 'Bootstrap';
    grid = $("#jqGrid").jqGrid({
	beforeRequest: function(){
		$(".ui-jqgrid .jqgrid-overlay").attr("style","display:block");
	},  		 
	loadComplete: function(xhr){
		$(".ui-jqgrid .jqgrid-overlay").attr("style","display:none");
	},  
    url : ctx.path +'/api/tracking/queryList.do',
    mtype:"POST",
    datatype : "json",
    height: top.getFrameHeight() - $("#buttonDiv").outerHeight() - $("#serachDiv").outerHeight() - 125,
    colNames : ['id','交运单号','物流渠道','使用状态','创建人','创建时间','使用时间','操作'],
    colModel : [{name : 'tnum_id',index:'tnum_id',hidden: true},
                		{name : 'tnumber',editable: true,index:'tnumber',width : 100} ,
                		{name : 'name',editable: true,index:'name',width : 100},
                		{name : 'is_used',editable: true,index:'is_used',width : 100,formatter : function(cellvalue, options, rowObject){
                			if(cellvalue == 0 ){
                				return "<font color='green'>未使用</font>";
                			}else{
                				return "<font color='red'>已使用</font>";
                			}
                			}
                		},
                		{name : 'create_user_name',editable: true,index:'create_user_name',width : 100},
                		{name : 'create_date',editable: true,index:'create_date',width : 100},
                		{name : 'user_time',editable: true,index:'last_modify_date',width : 100},
                		{width : 50,formatter : function(cellvalue, options, rowObject){
                          	 return '<a href="javascript:void(0);"  onclick="delOne(' + rowObject.tnum_id+ ',\'' +rowObject.name+'\')"><i class="fa fa-trash" >删除</i></a>';
                        }}],
    multiselect:true,
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
    
    
    //tab页面
    $("#grenul li").bind("click",function(){
        codeType = $(this).attr("labelname");
        if(codeType == "manualSYS"){
        	window.location.href=ctx.path +"/resources/views/logistics/logisticsSysCompany.jsp";
        }else if(codeType == "manualOWN"){
        	window.location.href=ctx.path +"/resources/views/logistics/logisticsOwnCompany.jsp";
        }else{
        	window.location.href=ctx.path +"/resources/views/logistics/trackManager.jsp";
        }
    });
    
    $.ajax({
        url:  ctx.path +'/api/tracking/queryAllLogistics.json',
        async: true,
        dataType: 'json',
        type: 'POST',
        success: function(data ){
        	 var jsonObj =data.data;  
             var optionstring = "";  
             for (var j = 0; j < jsonObj.length; j++) {  
                 optionstring += "<option value=" + jsonObj[j].logisticsId + "  >" + jsonObj[j].name + "</option>";  
             }  
             $("#logisticsIdSelect").html("<option value='' >-不限物流渠道-</option>"+optionstring);  
             $("#used").html("<option value='' selected>不限使用状态</option><option value='0' >未使用</option><option value='1' >已使用</option>")
        },
        error: function(jqXHR , textStatus , errorThrown){
        top.toastr.error("操作失败");
        }
        });
    //模糊查询下拉框
    $('#mohuSelect').change(function(){
    	if($("#mohuSelect").val() != ""){
    		$("#mohuInput").removeAttr("readonly");
    		$("#mohuInput").attr("name",$("#mohuSelect").val());  
    		$("#mohuInput").val("");
    	}else{
    		$('#mohuInput').attr("readonly","readonly");//将input元素设置为readonly
    		$("#mohuInput").val("");
    	}
       });

    //屏幕发生变化的时候计算表格高度
    $(window).bind('resize', function () {
    var width = $('.jqGrid_wrapper').width();
    $('#jqGrid').setGridWidth(width);
    var newHeight=top.getFrameHeight() - $("#buttonDiv").outerHeight() - $("#serachDiv").outerHeight() - 125;
    $("#jqGrid").jqGrid('setGridHeight',newHeight);
    });

    //刷新表单
    function refreshGrid(){
    grid.trigger("reloadGrid");
    }

    //校验新增表单
    $("#dataForm").validate({
    submitHandler: function(form){
    	
    if(checkUtil.isNullValue($("#expresstypeId").val())){
    	$("#expresstypeId").focus(); 
    	top.toastr.error("物流渠道不能为空");
    	return false;
    }
    
    if(checkUtil.isNullValue($("#tnumber").val())){
    	top.toastr.error(" 运单号不能为空");
    	$("#tnumber").focus(); 
    	return false;
    }
    $(form).ajaxSubmit({
    //表单提交成功后的回调
    	layerMaskFlag:true,
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

    //编辑数据
    $("#dataEditForm").validate({
    submitHandler: function(form){
    $(form).ajaxSubmit({
    //表单提交成功后的回调
    	layerMaskFlag:true,
    success: function(responseText, statusText, xhr, $form){
    if(responseText.rs == -1){
    return false;
    }
    refreshGrid();//重新加载grid
    top.toastr.success("编辑数据成功");
    layer.close(parentIndex); //再执行关闭
    FormUtil.resetForm("dataEditForm");
    }
    });
    }
    });

    });

    //打开新增页面
    function openAddPage(){
    	
        $.ajax({
            url:  ctx.path +'/api/tracking/queryAllLogistics.json',
            async: true,
            dataType: 'json',
            type: 'POST',
            success: function(data ){
            	 var jsonObj =data.data;  
                 var optionstring = "";  
                 for (var j = 0; j < jsonObj.length; j++) {  
                     optionstring += "<option value=" + jsonObj[j].logisticsId + "  >" + jsonObj[j].name + "</option>";  
                 }  
                 $("#expresstypeId").html("<option value='' >-物流渠道-</option>"+optionstring);  
            },
            error: function(jqXHR , textStatus , errorThrown){
            top.toastr.error("操作失败");
            }
            });
    parentIndex = layer.open({
    title:'新增交运单号',
    type: 1,
    area: ["600", "300"],
    fix: true,
    maxmin: true,
    btn:['保存','取消'],
    yes:function(index, layero){
    $.ajax({
        url:  ctx.path +'/api/tracking/oneTracking.json',
        async: true,
        data:{ids:$("#tnumber").val()},
        dataType: 'json',
        type: 'POST',
        success: function(data ){
        	if(data.rs == 0){
        		top.toastr.error("交运单号已存在！");
        		return false;
        	}
        	
            $("#dataForm").submit();
        },
        error: function(jqXHR , textStatus , errorThrown){
        top.toastr.error("操作失败");
        }
        });

    },
    content: $('#dataAdd'),
    cancel:function(index){
    FormUtil.resetForm("dataForm");
    }
    });
    }

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
    title:'编辑数据',
    type: 1,
    area: ['90%', '90%'],
    fix: true,
    maxmin: true,
    btn:['保存','取消'],
    yes:function(index, layero){
    	  $.ajax({
    	        url:  ctx.path +'/api/tracking/oneTracking.json',
    	        async: true,
    	        data:{ids:$("#tnumber").val()},
    	        dataType: 'json',
    	        type: 'POST',
    	        success: function(data ){
    	        	if(data.rs == 0){
    	        		top.toastr.error("交运单号已存在！");
    	        		return false;
    	        	}
    	            $("#dataEditForm").submit();
    	        },
    	        error: function(jqXHR , textStatus , errorThrown){
    	        top.toastr.error("操作失败");
    	        }
    	        });

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

    //删除
    function del(){
    var selRows = grid.jqGrid('getGridParam', 'selarrrow');  //选中行id数组
    if(selRows.length <= 0){
    top.toastr.warning("请选择数据删除");
    return false;
    }
    var ids=new Array();
    var len = selRows.length;
    var rowData = new Object();
    var delContext = "您确定删除";
    var rowData = new Object();
    if(selRows.length == 1){  //删除单条数据
    rowData = grid.jqGrid('getRowData',selRows[0]);
    delContext += "登录名【" + rowData.name + "】吗？<br>";
    delContext += "删除成功之后，该操作将无法恢复。";
    } else {
    delContext += "选中的" + selRows.length + "条数据吗？<br>";
    delContext += "删除成功之后，该操作将无法恢复。";
    }
    for(var i = 0;i < len ;i ++) {
    var tempId = selRows[i];
    var row = grid.jqGrid("getRowData",tempId);
    var id = row.tnum_id;//获取选择行数据id
    ids.push(id);
    }
    layer.confirm(delContext, {icon: 3, title:"提示"},
    function(index){
    $.get( ctx.path +"/api/tracking/delTracking.json?ids="+ids.join(","),
    function(result){
    if(result.rs==1){
    grid.trigger("reloadGrid");//刷新表单
    top.toastr.success("删除数据成功！");
    }else{
    top.toastr.warning("删除数据失败！");
    }
    },"json");
    layer.close(index);
    });
    }
    
    //数据右侧删除按钮
    function delOne(id,name){
    	 var delContext = "您确定删除";
	    delContext += "交运单号【" +name + "】吗？<br>";
	    delContext += "删除成功之后，该操作将无法恢复。";
        layer.confirm(delContext, {icon: 3, title:"提示"},
        function(index){
        $.get( ctx.path +"/api/tracking/delTracking.json?ids="+id,
        function(result){
        if(result.rs==1){
        grid.trigger("reloadGrid");//刷新表单
        top.toastr.success("删除数据成功！");
        }else{
        top.toastr.warning("删除数据失败！");
        }
        },"json");
        layer.close(index);
        });
        }
