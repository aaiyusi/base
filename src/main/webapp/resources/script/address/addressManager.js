var grid = {};
var parentIndex = null;
//扩展方法，邮箱验证
jQuery.validator.addMethod("email", function(value, element) {   
    var tel = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return this.optional(element) || (tel.test(value));
}, "请输入正确的邮箱");
//扩展方法，传真验证
jQuery.validator.addMethod("fax", function(value, element) {   
    var tel = /^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/;
    return this.optional(element) || (tel.test(value));
}, "请输入正确的传真");

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
}
function operate(cellValue,options,rowObject){
	var template="<a  onclick=\"editPage("+rowObject.addressId+")\" title='编辑'><i class=\"fa fa-edit\"></i>&nbsp;编辑</a>&nbsp;&nbsp;";
	    template+="<a  onclick=\"del("+rowObject.addressId+",'"+rowObject.addressName+"')\" title='删除'><i class=\"fa fa-trash\"></i>&nbsp;删除</a>&nbsp;&nbsp;";
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
						url : ctx.path + '/api/address/getPostAddressList.do',
						mtype : "POST",
						datatype : "json",
						height : top.getFrameHeight()
								- $("#buttonDiv").outerHeight()
								- $("#serachDiv").outerHeight() 
								-126,
						colNames : [ '地址ID', '名称', '联系人', '国家', '省',
								'市', '区', '地址' ,'操作'],
						colModel : [ {
							name : 'addressId',
							index : 'addressId',
							hidden : true
						}, {
							name : 'addressName',
							editable : true,
							index : 'address_name',
							width : 100
						}, {
							name : 'proportion',
							editable : true,
							index : 'proportion',
							width : 100
						}, {
							name : 'country',
							editable : true,
							index : 'country',
							width : 100,
							formatter:coutry
						}, {
							name : 'province',
							editable : true,
							index : 'province',
							width : 100
						}, {
							name : 'city',
							editable : true,
							index : 'city',
							width : 100
						}, {
							name : 'area',
							editable : true,
							index : 'area',
							width : 100
						}, {
							name : 'addresses',
							editable : true,
							index : 'addresses',
							width : 100
						},{
							name:'act',
							index:'act',
							width:100,
							formatter:operate
						}],
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
			$("#dataForm").validate({
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
											top.toastr.success("新增回邮地址成功！");
											FormUtil.resetForm("dataForm");
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
											if (responseText.rs == -1) {
												return false;
											}
											refreshGrid();// 重新加载grid
											top.toastr.success("编辑回邮地址成功！");
											layer.close(parentIndex); // 再执行关闭
											FormUtil.resetForm("dataEditForm");
										}
									});
						}
					});

		});

//校验表单
function validateForm(type){
	var pCode=/^[1-9]\d{5}(?!\d)$/;//邮政编码正则
	var tel = /^0[0-9]{2,3}\d{6,9}$/;//固话正则
	var mobile = /^1[3578]\d{9}$/;//手机正则
	var eml = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;//邮箱正则
	var fax = /^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/;//传真正则
	if(type==1){
		var addressName=$("#addressName").val(); 
		var proportion=$("#proportion").val();
		var country=$("#country").val(); 
		var province=$("#province").val(); 
		var city=$("#city").val(); 
		var area=$("#area").val(); 
		var addresses=$("#addresses").val(); 
		var postcode=$("#postcode").val(); 
		var telephone=$("#telephone").val(); 
		var companyName=$("#companyName").val(); 
		var mobilePhone=$("#mobilePhone").val(); 
		var email=$("#email").val(); 
		var companyFax=$("#companyFax").val(); 
		if(addressName==undefined||addressName==""){
			top.toastr.error("名称不能为空！");
			return false;
		}
		if(proportion==undefined||proportion==""){
			top.toastr.error("联系人不能为空！");
			return false;
		}
		if(country==undefined||country==""){
			top.toastr.error("国家不能为空！"); 
			return false;
		}
		if(province==undefined||province==""){
			top.toastr.error("省不能为空！"); 
			return false;
		}
		if(city==undefined||city==""){
			top.toastr.error("市不能为空！");
			return false;
		}
		if(area==undefined||area==""){
			top.toastr.error("区不能为空！"); 
			return false;
		}
		if(addresses==undefined||addresses==""){
			top.toastr.error("地址不能为空！");
			return false;
		}
		if(postcode==undefined||postcode==""){
			top.toastr.error("邮编不能为空！");
			return false;
		}else if(postcode!=undefined&&postcode.trim()!=""){
			var v=pCode.test(postcode);
			if(v==false){
				top.toastr.error("请输入正确的邮政编码！");
				return false;
			}
		}
		if(telephone==undefined||telephone==""){
			top.toastr.error("固定电话不能为空！");
			return false;
		}else if(telephone!=undefined||telephone.trim()!=""){
			var v=tel.test(telephone);
			if(v==false){
				top.toastr.error("请输入正确的电话号码！");
				return false;
			}
		}
		if(companyName==undefined||companyName==""){
			top.toastr.error("公司名称不能为空！");
			return false;
		}
		if(mobilePhone==undefined||mobilePhone==""){
			top.toastr.error("移动电话不能为空！");
			return false;
		}else if(mobilePhone!=undefined&&mobilePhone.trim()!=""){
			var v=mobile.test(mobilePhone);
			if(v==false){
			top.toastr.error("请输入正确的手机号码！"); 
			return false;
			}
		}
		if(email==undefined||email==""){
			top.toastr.error("邮箱不能为空！");
			return false;
		}else if(email!=undefined&&email!=""){
			var v=eml.test(email);
			if(v==false){
			top.toastr.error("请输入正确的邮箱！");
			return false;
			}
		}
		if(companyFax==undefined||companyFax==""){
			top.toastr.error("传真不能为空！"); 
			return false;
		}else if(companyFax!=undefined||companyFax.trim()!=""){
			 var v=fax.test(companyFax);
			 if(v==false){
		  top.toastr.error("请输入正确的传真！");
		  return false;
			 }
		}
	}else{
		
		var eAddressName=$("#eAddressName").val(); 
		var eProportion=$("#eProportion").val();
		var eCountry=$("#eCountry").val(); 
		var eProvince=$("#eProvince").val(); 
		var eCity=$("#eCity").val(); 
		var eArea=$("#eArea").val(); 
		var eAddresses=$("#eAddresses").val(); 
		var ePostcode=$("#ePostcode").val(); 
		var eTelephone=$("#eTelephone").val(); 
		var eCompanyName=$("#eCompanyName").val(); 
		var eMobilePhone=$("#eMobilePhone").val(); 
		var eEmail=$("#eEmail").val(); 
		var eCompanyFax=$("#eCompanyFax").val(); 
		if(eAddressName==undefined||eAddressName==""){
			top.toastr.error("名称不能为空！");
			return false;
		}
		if(eProportion==undefined||eProportion==""){
			top.toastr.error("联系人不能为空！");
			return false;
		}
		if(eCountry==undefined||eCountry==""){
			top.toastr.error("国家不能为空！"); 
			return false;
		}
		if(eProvince==undefined||eProvince==""){
			top.toastr.error("省不能为空！"); 
			return false;
		}
		if(eCity==undefined||eCity==""){
			top.toastr.error("市不能为空！");
			return false;
		}
		if(eArea==undefined||eArea==""){
			top.toastr.error("区不能为空！"); 
			return false;
		}
		if(eAddresses==undefined||eAddresses==""){
			top.toastr.error("地址不能为空！");
			return false;
		}
		if(ePostcode==undefined||ePostcode==""){
			top.toastr.error("邮编不能为空！");
			return false;
		}else if(ePostcode!=undefined&&ePostcode.trim()!=""){
			var v=pCode.test(ePostcode);
			if(v==false){
				top.toastr.error("请输入正确的邮政编码！");
				return false;
			}
		}
		if(eTelephone==undefined||eTelephone==""){
			top.toastr.error("固定电话不能为空！");
			return false;
		}else if(eTelephone!=undefined||eTelephone.trim()!=""){
			var v=tel.test(eTelephone);
			if(v==false){
				top.toastr.error("请输入正确的电话号码！");
				return false;
			}
		}
		if(eCompanyName==undefined||eCompanyName==""){
			top.toastr.error("公司名称不能为空！");
			return false;
		}
		if(eMobilePhone==undefined||eMobilePhone==""){
			top.toastr.error("移动电话不能为空！");
			return false;
		}else if(eMobilePhone!=undefined&&eMobilePhone.trim()!=""){
			var v=mobile.test(eMobilePhone);
			if(v==false){
			top.toastr.error("请输入正确的手机号码！"); 
			return false;
			}
		}
		if(eEmail==undefined||eEmail==""){
			top.toastr.error("邮箱不能为空！");
			return false;
		}else if(eEmail!=undefined&&eEmail!=""){
			var v=eml.test(eEmail);
			if(v==false){
			top.toastr.error("请输入正确的邮箱！");
			return false;
			}
		}
		if(eCompanyFax==undefined||eCompanyFax==""){
			top.toastr.error("传真不能为空！"); 
			return false;
		}else if(eCompanyFax!=undefined||eCompanyFax.trim()!=""){
			 var v=fax.test(eCompanyFax);
			 if(v==false){
		  top.toastr.error("请输入正确的传真！");
		  return false;
			 }
		}
	}
}

// 打开新增页面
function openAddPage() {
	parentIndex = layer.open({
		title : '新增回邮地址',
		type : 1,
		area : [ '90%', '90%' ],
		fix : true,
		maxmin : true,
		btn : [ '提交', '取消' ],
		yes : function(index, layero) {
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
}

// 打开编辑页面
function editPage(addressId) {
	$.ajax({
		url : ctx.path + '/api/address/getAddressInfo.json',
		async : true,
		dataType : 'json',
		type : 'POST',
		data : {
			addressId : addressId
		},
		success : function(data) {
			if (data.rs == -1) {
				top.toastr.error("操作失败");
				return false;
			}
			$("#dataEditForm").fill(data.data);// 表单数据填充
			$("#dataEditForm").find("#dataId").val(addressId);
			parentIndex = layer.open({
				title : '编辑回邮地址',
				type : 1,
				area : [ '90%', '90%' ],
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
function del(addressId,addressName) {
	
	var delContext = "您确定删除";
		delContext += "回邮地址【" + addressName + "】吗？<br>";
		delContext += "删除成功之后，该操作将无法恢复。";

	layer.confirm(delContext, {
		icon : 3,
		title : "提示"
	}, function(index) {
		$.get(ctx.path + "/api/address/delAddress.do?addressId=" + addressId,
				function(result) {
					if (result.rs == 1) {
						grid.trigger("reloadGrid");// 刷新表单
						top.toastr.success("删除回邮地址成功！");
					} else {
						top.toastr.warning("删除数据失败！");
					}
				}, "json");
		layer.close(index);
	});
}
