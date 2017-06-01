
    var grid = {};
    var parentIndex = null;
    var coun= {   
    		"AO":"安哥拉",   
    		"AF":"阿富汗",   
    		"AL":"阿尔巴尼亚",   
    		"DZ":"阿尔及利亚",   
    		"AD":"安道尔共和国",   
    		"AI":"安圭拉岛",   
    		"AG":"安提瓜和巴布达",   
    		"AR":"阿根廷",   
    		"AM":"亚美尼亚",   
    		"AU":"澳大利亚",   
    		"AT":"奥地利",   
    		"AZ":"阿塞拜疆",   
    		"BT":"不丹",
    		"BS":"巴哈马",   
    		"BH":"巴林",   
    		"BD":"孟加拉国",   
    		"BB":"巴巴多斯",   
    		"BY":"白俄罗斯",   
    		"BE":"比利时",   
    		"BZ":"伯利兹",   
    		"BJ":"贝宁",   
    		"BM":"百慕大群岛",   
    		"BO":"玻利维亚",   
    		"BW":"博茨瓦纳",   
    		"BR":"巴西",   
    		"BN":"文莱",   
    		"BG":"保加利亚",   
    		"BF":"布基纳法索",   
    		"MM":"缅甸",   
    		"BI":"布隆迪",   
    		"CM":"喀麦隆",   
    		"CA":"加拿大",   
    		"CF":"中非共和国",   
    		"TD":"乍得",   
    		"CL":"智利",   
    		"CN":"中国",   
    		"CO":"哥伦比亚",   
    		"CG":"刚果",   
    		"CK":"库克群岛",   
    		"CR":"哥斯达黎加",   
    		"CU":"古巴",   
    		"CY":"塞浦路斯",   
    		"CZ":"捷克",   
    		"DK":"丹麦",   
    		"DJ":"吉布提",   
    		"DO":"多米尼加共和国",   
    		"EC":"厄瓜多尔",   
    		"EG":"埃及",   
    		"SV":"萨尔瓦多",   
    		"EE":"爱沙尼亚",   
    		"ET":"埃塞俄比亚",   
    		"FJ":"斐济",   
    		"FI":"芬兰",   
    		"FR":"法国",   
    		"GF":"法属圭亚那",   
    		"GA":"加蓬",   
    		"GM":"冈比亚",   
    		"GE":"格鲁吉亚",   
    		"DE":"德国",   
    		"GH":"加纳",   
    		"GI":"直布罗陀",   
    		"GR":"希腊",   
    		"GD":"格林纳达",   
    		"GU":"关岛",   
    		"GT":"危地马拉",   
    		"GN":"几内亚",   
    		"GY":"圭亚那",   
    		"HT":"海地",   
    		"HN":"洪都拉斯",   
    		"HK":"香港",   
    		"HU":"匈牙利",   
    		"IS":"冰岛",   
    		"IN":"印度",   
    		"ID":"印度尼西亚",   
    		"IR":"伊朗",   
    		"IQ":"伊拉克",   
    		"IE":"爱尔兰",   
    		"IL":"以色列",   
    		"IT":"意大利",   
    		"JM":"牙买加",   
    		"JP":"日本",   
    		"JO":"约旦",   
    		"KH":"柬埔寨",   
    		"KZ":"哈萨克斯坦",   
    		"KE":"肯尼亚",   
    		"KR":"韩国",   
    		"KW":"科威特",   
    		"KG":"吉尔吉斯坦",   
    		"LA":"老挝",   
    		"LV":"拉脱维亚",   
    		"LB":"黎巴嫩",   
    		"LS":"莱索托",   
    		"LR":"利比里亚",   
    		"LY":"利比亚",   
    		"LI":"列支敦士登",   
    		"LT":"立陶宛",   
    		"LU":"卢森堡",   
    		"MO":"澳门",   
    		"MG":"马达加斯加",   
    		"MW":"马拉维",   
    		"MY":"马来西亚",   
    		"MV":"马尔代夫",   
    		"ML":"马里",   
    		"MT":"马耳他",   
    		"MU":"毛里求斯",   
    		"MX":"墨西哥",   
    		"MD":"摩尔多瓦",   
    		"MC":"摩纳哥",   
    		"MN":"蒙古",   
    		"MS":"蒙特塞拉特岛",   
    		"MA":"摩洛哥",   
    		"MZ":"莫桑比克",   
    		"NA":"纳米比亚",   
    		"NR":"瑙鲁",   
    		"NP":"尼泊尔",   
    		"NL":"荷兰",   
    		"NZ":"新西兰",   
    		"NI":"尼加拉瓜",   
    		"NE":"尼日尔",   
    		"NG":"尼日利亚",   
    		"KP":"朝鲜",   
    		"NO":"挪威",   
    		"OM":"阿曼",   
    		"PK":"巴基斯坦",   
    		"PA":"巴拿马",   
    		"PG":"巴布亚新几内亚",   
    		"PY":"巴拉圭",   
    		"PE":"秘鲁",   
    		"PH":"菲律宾",   
    		"PL":"波兰",   
    		"PF":"法属玻利尼西亚",   
    		"PT":"葡萄牙",   
    		"PR":"波多黎各",   
    		"QA":"卡塔尔",   
    		"RO":"罗马尼亚",   
    		"RU":"俄罗斯",   
    		"LC":"圣卢西亚",   
    		"VC":"圣文森特岛",   
    		"SM":"圣马力诺",   
    		"ST":"圣多美和普林西比",   
    		"SA":"沙特阿拉伯",   
    		"SN":"塞内加尔",   
    		"SC":"塞舌尔",   
    		"SL":"塞拉利昂",   
    		"SG":"新加坡",   
    		"SK":"斯洛伐克",   
    		"SI":"斯洛文尼亚",   
    		"SB":"所罗门群岛",   
    		"SO":"索马里",   
    		"ZA":"南非",   
    		"ES":"西班牙",   
    		"LK":"斯里兰卡",   
    		"SD":"苏丹",   
    		"SR":"苏里南",   
    		"SZ":"斯威士兰",   
    		"SE":"瑞典",   
    		"CH":"瑞士",   
    		"SY":"叙利亚",   
    		"TW":"台湾省",   
    		"TJ":"塔吉克斯坦",   
    		"TZ":"坦桑尼亚",   
    		"TH":"泰国",   
    		"TG":"多哥",   
    		"TO":"汤加",   
    		"TT":"特立尼达和多巴哥",   
    		"TN":"突尼斯",   
    		"TR":"土耳其",   
    		"TM":"土库曼斯坦",   
    		"UG":"乌干达",   
    		"UA":"乌克兰",   
    		"AE":"阿拉伯联合酋长国",   
    		"GB":"英国",   
    		"US":"美国",   
    		"UY":"乌拉圭",   
    		"UZ":"乌兹别克斯坦",   
    		"VE":"委内瑞拉",   
    		"VN":"越南",   
    		"YE":"也门",   
    		"YU":"南斯拉夫",   
    		"ZW":"津巴布韦",   
    		"ZR":"扎伊尔",   
    		"ZM":"赞比亚"   
    		};
    		function coutry(c){
    			return coun[c];
    		};
    		function operate(cellValue,options,rowObject){
    		  	var template='';
    		  	var str ="";
    		  	if(rowObject.state == 2){
					str='display:none;';
				}
    			if(options.rowId == 1){
        			 template='<div id="'+rowObject.logisticsId+'" style="'+str+'" ><button class="btn btn-primary btn-sm btn-setchannel channelSetting mr5 "   onclick="editPage(' + rowObject.logisticsId+ ')">设置</ button>'+
        		   	'<button  class="btn btn-default btn-sm btn-setchannel channelSetting mr5 " onclick="copyLogistics(' +  rowObject.logisticsId+ ',\''+rowObject.name+'\')">复制</button></div>';
    			}else{
    				template='<div id="'+rowObject.logisticsId+'" style="float:left;'+str+'"><button class="btn btn-primary btn-sm btn-setchannel channelSetting mr5 "   onclick="editPage(' + rowObject.logisticsId+ ')">设置</ button>'+
        		   	'<button  class="btn btn-default btn-sm btn-setchannel channelSetting mr5 " onclick="copyLogistics(' +  rowObject.logisticsId+ ',\''+rowObject.name+'\')">复制</button></div>'+
        		   	'<div style="float:left;"><button  class="btn btn-default btn-sm text-danger doDelete" onclick="del(' +  rowObject.logisticsId+ ',\''+rowObject.name+'\')">删除</button></div>	';
    			}
    				return template;
    		   };
		   function status(cellValue,options,rowObject){//是否启用
				var template = "";
			   if(cellValue == 1){
				   template='<div class="switch switch-small"><input type="checkbox" value="1" onchange="changeCheck('+rowObject.logisticsId+',this.checked)" checked />	 </div>   	';
			   }else{
				   template='<div class="switch switch-small"><input type="checkbox" onchange="changeCheck('+rowObject.logisticsId+',this.checked)"  value="2" />	 </div>   	';
			   }
   				return template;
   		   };
   		 //平台认可物流渠道
   		function eCode(cellValue,options,rowObject){
   			var template='';
   			if(rowObject.wishLogistics != "" && rowObject.wishLogistics != null){
   				template += "<font style='font-weight:bold;'>wish :</font> "+rowObject.wishLogistics+"\n";
   			}
   			if(rowObject.aliexpressLogistics != "" && rowObject.aliexpressLogistics != null){
   				template += "<font style='font-weight:bold;'>aliexpress :</font> "+rowObject.aliexpressLogistics+"\n";
   			}
   			if(template == "" ){
   				template = "--";
   			}
   				return template;
   		   };
		   //绑定显示明细事件
		   function childrenDetail(cellValue,options,rowObject){
			   	var template = '<a href="javascript:void(0)" id='+rowObject.sys_logistics_id+' onclick="showDeatil(this,'+options.rowId+','+rowObject.sys_logistics_id+')" class="fa fa-plus-circle text-primary">'+rowObject.name+'</a>';
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
				   $("<tr><td colspan="+tr.find("td").length+" id='detailTr_"+dataId+"'><table id='jqGrid_detail_"+dataId+"'></table></td></tr>").insertAfter(tr);
				   tr.attr("initDetail","true"); 
				   var detailTable = $("#jqGrid_detail_"+dataId).jqGrid(
							{
								url : ctx.path + '/api/tracking/queryAllLogisticsById.do?sysLogisticsId='+dataId,
								mtype : "POST",
								datatype : "json",
								height : top.getFrameHeight()
										- $("#buttonDiv").outerHeight()
										- $("#serachDiv").outerHeight() - 125,
								colNames : [ 'id', '物流渠道', '平台认可物流渠道', 
										'启用', '操作'],
								colModel : [ {
									name : 'logisticsId',
									index : 'logisticsId',
									hidden : true
								}, {
									name : 'name',
									editable : true,
									index : 'name',
									width : 100
								}, {
									name : 'eCode',
									editable : true,
									index : 'eCode',
									width : 90,
									formatter : eCode
								}, {
									name : 'state',
									editable : true,
									index : 'state',
									width : 90,
									formatter : status
								}, {
									formatter : operate,
									width : 60
								}],
								  autowidth: true,//自适应宽度
								  height: '100%',//自适应高度
							        viewrecords : true,
							        shrinkToFit: true,
							        jsonReader : {
										root : "data",// Json数据
									},
									gridComplete: function () {
//						                 $(this).closest('.ui-jqgrid-view').find('div.ui-jqgrid-hdiv').hide()
						             }
							});
				   detailTable.jqGrid("setGridParam", {url:ctx.path + '/api/tracking/queryAllLogistics.do?sysLogisticsId='+dataId});
				   detailTable.trigger("reloadGrid");
			   }else{
				   if($("#detailTr_"+dataId).is(':visible')){
					   $("#detailTr_"+dataId).hide();
				   }else{
					   $("#detailTr_"+dataId).show();
				   }
			   }
		   };
    		   
    $(document).ready(function(){
    $.jgrid.defaults.styleUI = 'Bootstrap';
    grid = $("#jqGrid").jqGrid({
	beforeRequest: function(){
		//$(".ui-jqgrid .jqgrid-overlay").attr("style","display:block");
	},  		 
	loadComplete: function(xhr){
		$(".ui-jqgrid .jqgrid-overlay").attr("style","display:none");
	},  
    url : ctx.path +'/api/logisticsCompany/queryMainList.do',
    mtype:"POST",
    datatype : "json",
    height: top.getFrameHeight() - $("#buttonDiv").outerHeight() - $("#serachDiv").outerHeight() - 125,
    colNames : ['id','物流公司名称','创建时间','操作'],
    colModel : [{name : 'sys_logistics_id',hidden: true},
                		{name : 'name',index:'name',width:100,formatter:childrenDetail},
                		{name : 'create_date',editable: true,index:'create_date',width : 100},
                		{width : 50,formatter : function(cellvalue, options, rowObject){
                				return '<div class="btn-group"><button class="btn btn-default btn-sm"   onclick="updateName(' + rowObject. sys_logistics_id+ ',\''+rowObject.name+'\')">修改名称</ button><button  class="btn btn-default btn-sm text-danger doDelete" onclick="sysDel(' + rowObject. sys_logistics_id+ ',\''+rowObject.name+'\')">删除</button></div>';
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
    
    //启用算运费
    $("#auto_freight").bind("click",function(){
    	if($(this).is(':checked') == true){
    		$("#freight_rule").enable();
    		$("#discount").enable();
    	}else{
    		$("#freight_rule").attr("disabled","disabled");
    		$("#discount").attr("disabled","disabled");
    	}
    });

    //启用算运费
    $("#auto_freight_edit").bind("click",function(){
    	if($(this).is(':checked') == true){
    		$("#freight_rule_edit").enable();
    		$("#discount_edit").enable();
    	}else{
    		$("#freight_rule_edit").attr("disabled","disabled");
    		$("#discount_edit").attr("disabled","disabled");
    	}
    });
    
    //回邮地址修改下拉绑定
    $("#addressSelectEdit").change(function(){
    	var id = $(this).val();
    	$.ajax({
    		url : ctx.path + '/api/address/getAddressInfo.json',
    		async : true,
    		dataType : 'json',
    		type : 'POST',
    		data : {
    			addressId : id
    		},
    		success : function(data) {
    			fillEditAddress(data.data);
    			if (data.rs == -1) {
    				top.toastr.error("操作失败");
    				return false;
    			}
    		},
    		error : function(jqXHR, textStatus, errorThrown) {
    			top.toastr.error("操作失败");
    		}
    	});
    });
    
    //回邮地址下拉绑定
    $("#addressSelect").change(function(){
    	var id = $(this).val();
    	$.ajax({
    		url : ctx.path + '/api/address/getAddressInfo.json',
    		async : true,
    		dataType : 'json',
    		type : 'POST',
    		data : {
    			addressId : id
    		},
    		success : function(data) {
    			fillAddAddress(data.data);
    			if (data.rs == -1) {
    				top.toastr.error("操作失败");
    				return false;
    			}
    		},
    		error : function(jqXHR, textStatus, errorThrown) {
    			top.toastr.error("操作失败");
    		}
    	});
    });

    //查询
    $('#queryName').keyup(function () {
    	common.search();
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
    var newHeight=top.getFrameHeight() - $("#buttonDiv").outerHeight() - $("#serachDiv").outerHeight() -125;
    $("#jqGrid").jqGrid('setGridHeight',newHeight);
    });

    //刷新表单
    function refreshGrid(){
    grid.trigger("reloadGrid");
    }

    //校验新增表单
    $("#dataForm").validate({
    submitHandler: function(form){
    $(form).ajaxSubmit({
    //表单提交成功后的回调
    layerMaskFlag:true,
    success: function(responseText, statusText, xhr, $form){
    if(responseText.rs == -1){
    return false;
    }
    refreshGrid();//重新加载grid
    top.toastr.success("新增物流渠道成功");
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
    
    //拷贝数据
    $("#copyForm").validate({
    submitHandler: function(form){
    if($("#copyName").val() == null || $("#copyName").val() == ""){
    	 top.toastr.error("渠道名称不能为空！");
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
    layer.close(parentIndex); //再执行关闭
    FormUtil.resetForm("copyForm");
    }
    });
    }
    });
    
    //拷贝数据
    $("#updateFormName").validate({
    submitHandler: function(form){
    if($("#updateLogisticsCompanyName").val() == null || $("#updateLogisticsCompanyName").val() == ""){
    	 top.toastr.error("物流公司名称不能为空！");
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
    layer.close(parentIndex); //再执行关闭
    FormUtil.resetForm("updateFormName");
    }
    });
    }
    });
    
  

    });

    //打开新增页面
    function openAddPage(){
        $.ajax({
            url:  ctx.path +'/api/logisticsCompany/queryAddresByFirst.json',
            async: true,
            dataType: 'json',
            type: 'POST',
            success: function(data ){
            	$("#addressIdAdd").val(data.data.addressId);
            	$("#backAddressIdAdd").val(data.data.addressId);
            	$("#addressNameAdd").text(data.data.addressName);
            	$("#proportionAdd").text(data.data.proportion);
            	$("#countryAdd").text(coutry(data.data.country));
            	$("#provinceAdd").text(data.data.province);
            	$("#cityAdd").text(data.data.city);
            	$("#areaAdd").text(data.data.area);
            	$("#addressesAdd").text(data.data.addresses);
            	$("#postcodeAdd").text(data.data.postcode);
            	$("#companyNameAdd").text(data.data.companyName);
            	$("#telephoneAdd").text(data.data.telephone);
            	$("#mobilePhoneAdd").text(data.data.mobilePhone);
            	$("#emailAdd").text(data.data.email);
            	$("#companyFaxAdd").text(data.data.companyFax);
            },
            error: function(jqXHR , textStatus , errorThrown){
            top.toastr.error("操作失败");
            }
            });	
        $.ajax({
            url:  ctx.path +'/api/logisticsCompany/queryAllAddress.json',
            async: true,
            dataType: 'json',
            type: 'POST',
            success: function(data ){
            	 var jsonObj =data.data;  
                 var optionstring = "";  
                 for (var j = 0; j < jsonObj.length; j++) {  
                     optionstring += "<option value=" + jsonObj[j].addressId + "  >" + jsonObj[j].addressName + "</option>";  
                 }  
                 $("#addressSelect").html("<option value='' >-选择回邮地址-</option>"+optionstring);  
            },
            error: function(jqXHR , textStatus , errorThrown){
            top.toastr.error("操作失败");
            }
            });
        
    parentIndex = layer.open({
    title:'新增自定义物流',
    type: 1,
    area: ['90%', '90%'],
    fix: true,
    zIndex: 50,//使弹窗置后
    maxmin: true,
    btn:['保存','取消'],
    yes:function(index, layero){
	 if(checkUtil.isNullValue($("#nameAdd").val())){
    	$("#nameAdd").focus(); 
    	top.toastr.error("物流渠道名称不能为空");
    	return false;
    }    	
	 if(checkUtil.isNullValue($("#declare_nameAdd").val())){
	    	$("#declare_nameAdd").focus(); 
	    	top.toastr.error("申报品名(中文)不能为空");
	    	return false;
	    }    	
 	 if(checkUtil.isNullValue($("#declare_enameAdd").val())){
 	    	$("#declare_enameAdd").focus(); 
 	    	top.toastr.error("申报品名(英文)不能为空");
 	    	return false;
 	    }    		
 	
 	 if(!checkUtil.isMoneyValue($("#declare_percentAdd").val())){
 	    	$("#declare_percentAdd").focus(); 
 	    	top.toastr.error("申报百分比格式不正确");
 	    	return false;
 	    }  
 	 if(!checkUtil.isMoneyValue($("#min_declareAdd").val())){
 	    	$("#min_declareAdd").focus(); 
 	    	top.toastr.error("最小申报价值格式不正确");
 	    	return false;
 	    }    
 	 if(!checkUtil.isMoneyValue($("#max_declareAdd").val())){
 	    	$("#max_declareAdd").focus(); 
 	    	top.toastr.error("最大申报价值格式不正确");
 	    	return false;
 	    }  
    $("#dataForm").submit();
    cleanTemple(0,"Add");
	layer.close(index);
    },
    content: $('#dataAdd'),
    cancel:function(index){
    FormUtil.resetForm("dataForm");
    cleanTemple(0,"Add");
    }
    });
    }
    
    //标签模板置空
    function cleanTemple(typeId,moduleId){
    	var temp ='<div class="label-group-large"><div class="nodata" style="display: block;"> <h4 class="title">未启用</h4><p>如需启用，请点击右上角的选择</p></div></div>'
    	if(typeId == 0){
    		for(var i = 1 ;i<=3;i++){
        		$("#labelId"+i+moduleId).html(temp);
        		$("#cancel"+moduleId+"Module"+i).hide();
        	}
    	}else{
    		$("#labelId"+typeId+moduleId).html(temp);
    	}
    	
    }
    
    function fillEditAddress(data){
    	$("#addressIdEdit").val(data.addressId);
    	$("#backAddressIdEdit").val(data.addressId);
    	$("#addressNameEdit").text(data.addressName);
    	$("#proportionEdit").text(data.proportion);
    	$("#countryEdit").text(coutry(data.country));
    	$("#provinceEdit").text(data.province);
    	$("#cityEdit").text(data.city);
    	$("#areaEdit").text(data.area);
    	$("#addressesEdit").text(data.addresses);
    	$("#postcodeEdit").text(data.postcode);
    	$("#companyNameEdit").text(data.companyName);
    	$("#telephoneEdit").text(data.telephone);
    	$("#mobilePhoneEdit").text(data.mobilePhone);
    	$("#emailEdit").text(data.email);
    	$("#companyFaxEdit").text(data.companyFax);
    }
    
    function fillAddAddress(data){
    	$("#addressIdAdd").val(data.addressId);
    	$("#backAddressIdAdd").val(data.addressId);
    	$("#addressNameAdd").text(data.addressName);
    	$("#proportionAdd").text(data.proportion);
    	$("#countryAdd").text(coutry(data.country));
    	$("#provinceAdd").text(data.province);
    	$("#cityAdd").text(data.city);
    	$("#areaAdd").text(data.area);
    	$("#addressesAdd").text(data.addresses);
    	$("#postcodeAdd").text(data.postcode);
    	$("#companyNameAdd").text(data.companyName);
    	$("#telephoneAdd").text(data.telephone);
    	$("#mobilePhoneAdd").text(data.mobilePhone);
    	$("#emailAdd").text(data.email);
    	$("#companyFaxAdd").text(data.companyFax);
    }

    //打开编辑页面
    function editPage(rowId){
        $.ajax({
            url:  ctx.path +'/api/logisticsCompany/queryAddresById.json',
            data:{id : rowId},
            async: true,
            dataType: 'json',
            type: 'POST',
            success: function(data ){
            	fillEditAddress(data.data);
            },
            error: function(jqXHR , textStatus , errorThrown){
            top.toastr.error("操作失败");
            }
            });
        
        $.ajax({
            url:  ctx.path +'/api/logisticsCompany/queryAllAddress.json',
            async: true,
            dataType: 'json',
            type: 'POST',
            success: function(data ){
            	 var jsonObj =data.data;  
                 var optionstring = "";  
                 for (var j = 0; j < jsonObj.length; j++) {  
                     optionstring += "<option value=" + jsonObj[j].addressId + "  >" + jsonObj[j].addressName + "</option>";  
                 }  
                 $("#addressSelectEdit").html("<option value='' >-选择回邮地址-</option>"+optionstring);  
            },
            error: function(jqXHR , textStatus , errorThrown){
            top.toastr.error("操作失败");
            }
            });
        
    $.ajax({
    url:  ctx.path +'/api/logisticsCompany/queryLogisticsCompanyById.json',
    async: true,
    data: {dataId:rowId},
    success: function(data ){
    if(data.rs == -1 ){
    top.toastr.error("操作失败");
    return false;
    }
    FormUtil.resetForm("dataEditForm");
    $("#auto_freight_edit").attr("checked", false);
    $("#hidetracknumberEdit").attr("checked", false);
    $("#dataEditForm").fill(data.data);//表单数据填充
    if(data.data.autoFreight == 1){
    	$("#freight_rule_edit").enable();
		$("#discount_edit").enable();
		$("#freight_rule_edit").val(data.data.freightRule);
    }
    $("#addressSelectEdit").val(data.data.backAddressId);
    parentIndex = layer.open({
        title:'编辑物流渠道',
        type: 1,
        area: ['90%', '90%'],
        fix: true,
        zIndex: 50,//使弹窗置后
        maxmin: true,
        btn:['保存','取消'],
        yes:function(index, layero){
        	 if(checkUtil.isNullValue($("#nameEdit").val())){
        	    	$("#nameEdit").focus(); 
        	    	top.toastr.error("物流渠道名称不能为空");
        	    	return false;
        	    }    	
        		 if(checkUtil.isNullValue($("#declare_nameEdit").val())){
        		    	$("#declare_nameEdit").focus(); 
        		    	top.toastr.error("申报品名(中文)不能为空");
        		    	return false;
        		    }    	
        	 	 if(checkUtil.isNullValue($("#declare_enameEdit").val())){
        	 	    	$("#declare_enameEdit").focus(); 
        	 	    	top.toastr.error("申报品名(英文)不能为空");
        	 	    	return false;
        	 	    }    		
        	 	
        	 	 if(!checkUtil.isMoneyValue($("#declare_percentEdit").val())){
        	 	    	$("#declare_percentEdit").focus(); 
        	 	    	top.toastr.error("申报百分比格式不正确");
        	 	    	return false;
        	 	    }  
        	 	 if(!checkUtil.isMoneyValue($("#min_declareEdit").val())){
        	 	    	$("#min_declareEdit").focus(); 
        	 	    	top.toastr.error("最小申报价值格式不正确");
        	 	    	return false;
        	 	    }    
        	 	 if(!checkUtil.isMoneyValue($("#max_declareEdit").val())){
        	 	    	$("#max_declareEdit").focus(); 
        	 	    	top.toastr.error("最大申报价值格式不正确");
        	 	    	return false;
        	 	    }  
        $("#dataEditForm").submit();
        cleanTemple(0,"Edit");
        layer.close(index);
        },
        content: $('#dataEdit'),
        cancel:function(index){
        	cleanTemple(0,"Edit");
        FormUtil.resetForm("dataEditForm");
        }
        });
    
   
    /**
     * 模板填充
     */
    if(data.data.addressTempId != null){
    		var imagePath = ctx.printPath+"/print-1-"+data.data.addressTempId+".jpg ";
    		$("#tempIdEdit1").val(data.data.addressTempId);
    		var width = $("#labelId1Edit").width() ;
    		var height = $("#labelId1Edit").height();
    		$("#labelId1Edit").html("<img src="+imagePath+" width="+width+" height="+height+"  	/>");
    		$("#cancelEditModule1").show();
    }
    if(data.data.declarationTempId != null){
    		var imagePath = ctx.printPath+"/print-2-"+data.data.declarationTempId+".jpg ";
    		$("#tempIdEdit2").val(data.data.declarationTempId);
    		var width = $("#labelId2Edit").width() ;
    		var height = $("#labelId2Edit").height();
    		$("#labelId2Edit").html("<img src="+imagePath+" width="+width+" height="+height+"  	/>");
    		$("#cancelEditModule2").show();
    }
    if(data.data.allocationTempId != null){
    		var imagePath = ctx.printPath+"/print-3-"+data.data.allocationTempId+".jpg ";
    		$("#tempIdEdit3").val(data.data.allocationTempId);
    		var width = $("#labelId3Edit").width() ;
    		var height = $("#labelId3Edit").height();
    		$("#labelId3Edit").html("<img src="+imagePath+" width="+width+" height="+height+"  	/>");
    		$("#cancelEditModule3").show();
    }
   
    
    

    },
    error: function(jqXHR , textStatus , errorThrown){
    top.toastr.error("操作失败");
    }
    });
    }

    
    //主删除
    function sysDel(id,name){
	var delContext = "您确定删除";
    delContext += "物流公司【" + name + "】吗？<br>";
    delContext += "删除成功之后，该操作将无法恢复。";
    layer.confirm(delContext, {
		icon : 3,
		title : "提示"
	}, function(index) {
		$.get( ctx.path +"/api/logisticsCompany/delSysLogisticsCompanyById.json?id="+id,
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
    };
    
    //子删除
    function del(id,name){
	var delContext = "您确定删除";
    delContext += "物流渠道【" + name + "】吗？<br>";
    delContext += "删除成功之后，该操作将无法恢复。";
    layer.confirm(delContext, {
		icon : 3,
		title : "提示"
	}, function(index) {
		$.get( ctx.path +"/api/logisticsCompany/delLogisticsCompanyById.json?id="+id,
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
    };

    /**
     * 子表复制
     * @param logisticsId
     * @param name
     */
    function copyLogistics(logisticsId,name){
    	
    	$("#copyIogisticsId").val(logisticsId);
    	$("#copyName").val(name+"的复制");
        parentIndex = layer.open({
            title:'渠道复制',
            type: 1,
            area: ['550', '200'],
            fix: true,
            maxmin: true,
            btn:['保存','取消'],
            yes:function(index, layero){
            $("#copyForm").submit();
            },
            content: $('#copyLogistics'),
            cancel:function(index){
            FormUtil.resetForm("copyForm");
            }
            });
    };
    
    /**
     * 修改物流渠道名称
     * @param id
     * @param name
     */
    function updateName(id,name){
    	$("#updateSysLogisticsId").val(id);
    	$("#updateLogisticsCompanyName").val(name);
        parentIndex = layer.open({
            title:'修改物流公司名称',
            type: 1,
            area: ['550', '200'],
            layerMaskFlag:true,
            fix: true,
            maxmin: true,
            btn:['保存','取消'],
            yes:function(index, layero){
            $("#updateFormName").submit();
            },
            content: $('#upadteLogisticsName'),
            cancel:function(index){
            FormUtil.resetForm("updateFormName");
            }
            });
    };
    
    /**
     * 弹出模板选择界面
     */
    function openModule(typeId,moduleId){
    	var tempModel =$("#label"+moduleId+"Size").val();
    	if(tempModel == ""){
    		top.toastr.error("请先选择标签尺寸！");
    		return false;
    	}
    	
    	var name = "";
    	if(typeId == 1){
    		name = "地址单模板";
    	}else if(typeId == 2){
    		name = "报关单模板";
    	}else if(typeId ==3){
    		name = "配货单模板";
    	}
        $.ajax({
            url:  ctx.path +'/api/print/getTempList.json',
            type: 'POST',
            data:{type : 0,tempType : typeId,tempModel : tempModel},
            success: function(data ){
            	$("#imageSelect").html("");
            	var jsonObj =data.data;  
            	 var optionstring = "";  
            	 if(jsonObj != undefined){
            		 for (var j = 0; j < jsonObj.length; j++) {  
            			 optionstring += "<option value=" + jsonObj[j].tempId + " data-img-src="+ctx.printPath+"/print-"+jsonObj[j].tempType+"-"+jsonObj[j].tempId+".jpg >" + jsonObj[j].name + "</option>";  
            		 }  
            	 }
                 $("#imageSelect").html("<option value='' >-选择模板-</option>"+optionstring);  
                 /**
                  * 图片选择器
                  */
                 $("select.image-picker").imagepicker({
             		hide_select:false
             	});
             	
             	$("select.image-picker.show-labels").imagepicker({
             		hide_select:true, 
             		show_label:true
             	});
             	//瀑布流布局
             	var container = $("select.image-picker.masonry").next("ul.thumbnails");
             	$(".thumbnail").css("height","200px");
             	$(".thumbnail").css("width","200px");
             	
             	container.imagesLoaded(function(){ 
            		container.masonry({ 
            			itemSelector:"li"
            		}); 
            	});
            	
            },
            error: function(jqXHR , textStatus , errorThrown){
            top.toastr.error("操作失败");
            }
            });
    	
        parentIndex = layer.open({
            title:'选择'+name,
            type: 1,
            area: ['870', '550'],
            fix: true,
            maxmin: true,
            btn:['保存','取消'],
            yes:function(index, layero){
            	$("#cancel"+moduleId+"Module"+typeId).show();//显示取消
            	var imagePath = ctx.printPath+"/print-"+typeId+"-"+$("#imageSelect").val()+".jpg ";
            	$("#tempId"+moduleId+typeId).val($("#imageSelect").val());
            	var width = $("#labelId"+typeId+moduleId).width() ;
            	var height = $("#labelId"+typeId+moduleId).height();
            	$("#labelId"+typeId+moduleId).html("<img src="+imagePath+" width="+width+" height="+height+"  	/>");
            	layer.close(index);
            	$("thumbnails image_picker_selector").html("");
            },
            content: $('#openModule'),
            cancel:function(index){
            	$("thumbnails image_picker_selector").html("");
            }
            });
    }

    //取消模板选择时
    /**
     * typeId:模板类型
     * moduleId：操作类型
     */
    function cancelModule(typeId,moduleId){
    		cleanTemple(typeId,moduleId);
    		$("#cancel"+moduleId+"Module"+typeId).hide();
    		$("#tempId"+moduleId+typeId).val("");
    }

    
    function openModuleManager(){
    	top.openMenu("/erp/resources/views/print/printList.jsp");
    }
    
    /**
     * 启用/禁用物流渠道
     * @param id 渠道id
     * @param value 启用/禁用值
     */
    function changeCheck(id,value){
    	$("#"+id).toggle();
        $.ajax({
            url:  ctx.path +'/api/logisticsCompany/trunOffOn.json',
            layerMaskFlag:true,
            type: 'POST',
            data:{id : id,value : value == true ? 1:2},
            success: function(data ){
            	if(data == 1){
            		if(value == true){
            			top.toastr.success("启用成功！");
            		}else{
            			top.toastr.success("禁用成功！");
            		}
            	}else{
            		top.toastr.error("操作失败成功！");
            	}
            },
            error: function(jqXHR , textStatus , errorThrown){
            top.toastr.error("操作失败");
            }
            });
    }
