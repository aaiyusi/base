//初始化参数
var goodsId = 0;
var catalogItems = [];
var reg3 = /^\d{1,9}([.]\d{1,3})?$/;
var reg4 = /^\d{1,9}([.]\d{1,4})?$/;
var whouse = [];
var whouses = [];
var shelfs = [];
var spaces = [];
var shelfList = "";
var spaceList = "";

//页面加载时，初始化信息
$(document).ready(function() {
	$("#myTab li").bind("click",function (){
		top.toastr.error("保存基本信息后，才能选择！");
		$("#myTab li").attr("class","");
		$("#myTab li:eq(0)").attr("class","active");
		return false;
	});
	$("#myTab li:first").unbind("click");

	//获得商品目录信息
	$.ajax({
		url : ctx.path + '/api/catalog/getCatalogTree.json',
		type : 'POST',
		async : false,
		success : function(data) {
			catalogItems = data.data.catalogList;
			
			$("#catalogiItems").html("<option value='0'>-请选择-</option>");
			$.each(catalogItems, function(i,n){
				$("#catalogiItems").append("<option value='" + n.catalogiId + "'>" + n.name + "</option>");
			});
			$("#catalogis").html("<option value='0'>-请选择-</option>");
		}
	});

	
	var goodsId = Request("goodsId");
	if(goodsId != undefined && goodsId != 0){
		$.ajax({
			url : ctx.path + '/api/goods/getGoodsById.json',
			dataType : 'json',
			type : 'POST',
			data : {
				goodsId : goodsId
			},
			success : function(data) {
				if (data.rs == -1) {
					top.toastr.error("操作失败");
					return false;
				}
				// 表单数据填充
				$("#dataForm").fill(data.data);
				$("#salesDataForm").fill(data.data);
				
				$("#dataForm").find("#goodsId").val(goodsId);
				$("#salesDataForm").find("#salesGoodsId").val(goodsId);
				//设置商品目录初始化
				var itemsNode = $("#catalogiItems").find("option[value='" + data.data.pCatalogiId + "']");
				if(itemsNode.html() != undefined){
					itemsNode.attr("selected", true);
					catalogiItemChange();
				}
				var catalogisNode = $("#catalogis").find("option[value='" + data.data.catalogiId + "']");
				if(catalogisNode.html() != undefined){
					catalogisNode.attr("selected", true);
				}
				var batteryNode = $("#haveBattery").find("option[value='" + data.data.haveBattery + "']");
				if(batteryNode.html() != undefined){
					batteryNode.attr("selected", true);
				}
				var infringementNode = $("#infringement").find("option[value='" + data.data.infringement + "']");
				if(infringementNode.html() != undefined){
					infringementNode.attr("selected", true);
				}
				var saleStateNode = $("#saleState").find("option[value='" + data.data.saleState + "']");
				if(saleStateNode.html() != undefined){
					saleStateNode.attr("selected", true);
				}
				$("#virtualSku").html(data.data.virtualSku);
				
				var image = data.data.storgetImage;
				$.each(image.split(';'),function(i,n){
					 var opr ="<li><div><div class=\"picture_con\"\">"+
          		   "<img src=\""+n+"\" style=\"width: 130px;height: 149px;\"></div>"+
          		   "<span class=\"picture_size\">"+
          		   "<span class=\"pic_size\">1024*1024</span>"+
          		   "<a href=\"javascript:;\" class=\"redtext_link\" onclick=\"deltImg(this,'"+n+"')\">移除</a></span>" +
          		   "</div></li>";
            		$("#tpic-drop li.upload_pictures").before(opr);
				});
				$("#tImg").hide();
				$("#sku").attr("disabled","disabled");
				
				addHref($("#baseContinue"));
			},
			error : function(jqXHR, textStatus, errorThrown) {
				top.toastr.error("操作失败");
			}
		});
	}
	
	$.jgrid.defaults.styleUI = 'Bootstrap';
	historyGrid = $("#jqGrid").jqGrid({
		beforeRequest: function(){
			$(".ui-jqgrid .jqgrid-overlay").attr("style","display:block");
		},  		 
		loadComplete: function(xhr){
			$(".ui-jqgrid .jqgrid-overlay").attr("style","display:none");
		},  
		url : ctx.path + '/api/goods/getGoodsHistorysByGoodsId.json',
		mtype : "POST",
		datatype : "json",
		postData : {
			goodsId : goodsId
		},
		colNames : [ '订单编号', '数量', '金额', '订单日期', '买家ID', '状态'],
		colModel : [{
			name : 'orderNum',
			index : 'orderNum',
			width : 120,
			sortable : false
		}, {
			name : 'count',
			index : 'count',
			width : 50,
			sortable : false
		}, {
			name : 'price',
			index : 'price',
			width : 70,
			sortable : false
		}, {
			name : 'createDate',
			index : 'createDate',
			width : 80,
			sortable : false,
			formatter:function(cellvalue){
	    		if(cellvalue){
	    			return DateUtil.getSmpFormatDateByLong(cellvalue,true);
	    		}
	    	}
		}, {
			name : 'customerName',
			index : 'customerName',
			width : 100,
			sortable : false
		}, {
			name : 'orderState',
			index : 'orderState',
			width : 60,
			sortable : false,
			formatter : function(cellvalue, options, rowObject){
				var temp = "";
				switch (cellvalue) {
				case 0:
					temp = "未发货";
					break;
				case 1:
					temp = "待处理";
					break;
				case 2:
					temp = "配货中";
					break;
				case 3:
					temp = "已发货";
					break;
				case 4:
					temp = "已作废";
					break;
				case 5:
					temp = "处理失败";
					break;
				}
				return temp;
			}
		} ],
		autowidth : true,// 自适应宽度
		shrinkToFit : true,
		rowNum : 20,
		rowList : [ 10, 20, 50 ],
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
	

	// 屏幕发生变化的时候计算表格高度
	$(window).bind('resize',function() {
		setResize();
	});
	
	filetUpload();
	
});

//打开包材管理界面
function getGoodsPackingMain(){
	top.openMenu("/erp/resources/views/packing/packingManager.jsp");
}

//打开商品目录界面
function getGoodsStorageMain(){
	top.openMenu("/erp/resources/views/catalog/catalogList.jsp");
}


//tab切换方法
function resizeTime(){
	setTimeout(function(){
		setResize();
	},100);
}

//计算表格高度
function setResize(){
	$('#jqGridWhouse').setGridWidth($('#whouse').width());
	$('#jqGrid').setGridWidth($('#history').width());
	var newHeight = top.getFrameHeight() - 280;
	$("#jqGridWhouse").jqGrid('setGridHeight', newHeight);
	$("#jqGrid").jqGrid('setGridHeight', newHeight);
}

//商品目录时更改方法
function catalogiItemChange(){
	$("#catalogis").html("<option value='0'>-请选择-</option>");
	var catalogis = {};
	var catalogiItemsId = $("#catalogiItems").val();
	$.each(catalogItems, function(i,n){
		if(n.catalogiId == catalogiItemsId){
			catalogis = n;
		} 
	});
	$.each(catalogis.catalogList, function(j,m){
		$("#catalogis").append("<option value='" + m.catalogiId + "'>" + m.name + "</option>");
	});
}

//添加商品方法
function addGoods(type, node){
	
	if(checkData()){
		return;
	}
	if(handleImage()){
		return 
	}
	
	var goodsId = $("#goodsId").val();
	
	if(goodsId == 0){
	
	$.ajax({
		layerMaskFlag:true,
		url : ctx.path + '/api/goods/addGoods.json',
		type : 'POST',
		data : $("#dataForm").serialize(),
		dataType : "json",
		success : function(data) {
			if(data.rs == 1){
				top.toastr.success("商品保存成功！");
				$("#goodsId").val(data.data);
				$("#salesGoodsId").val(data.data);
				$("#sku").attr("disabled","disabled");
				//重新加载grid
	        	parent.refreshGrid();
				if(type == 0){
					parent.layerCloseAll();
					FormUtil.resetForm("dataForm");
				} else {
					addHref(node);
					$("#myTab li:eq(1) a").trigger("click");
				}
	        	//设置参数
	        	$("#jqGrid").jqGrid('setGridParam',{page:1,rows:20,postData:{goodsId : data.data}});
	        	//刷新表单
	        	$("#jqGrid").trigger("reloadGrid"); 
			}
		}
	});
	
	}else{//编辑
		$.ajax({
			layerMaskFlag:true,
			url : ctx.path + '/api/goods/updateGoods.json',
			type : 'POST',
			data : $("#dataForm").serialize(),
			dataType : "json",
			success : function(data) {
				if(data.rs == 1){
					top.toastr.success("编辑商品成功！");
					//重新加载grid
		        	parent.refreshGrid();
					if(type == 0){
						parent.layerCloseAll();
						FormUtil.resetForm("dataForm");
					} 
		        	//设置参数
		        	$("#jqGrid").jqGrid('setGridParam',{page:1,rows:20,postData:{goodsId : data.data}});
		        	//刷新表单
		        	$("#jqGrid").trigger("reloadGrid"); 
				}
			}
		});
	}
}

//检验基本信息数据
function checkData(){
	var sku = $("#sku").val();
	var name = $("#name").val();
	var eName = $("#eName").val();
	var catalogiId = $("#catalogis").val();
	var saleState = $("#saleState").val();
	
	if (sku == undefined || sku == "") {
		top.toastr.error("SKU不能为空！");
		return true;
	}
	if (name == undefined || name == "") {
		top.toastr.error("中文名称不能为空！");
		return true;
	}
	if (eName == undefined || eName == "") {
		top.toastr.error("英文名称不能为空！");
		return true;
	}
	if (catalogiId == undefined || catalogiId == "" || catalogiId == 0) {
		top.toastr.error("请选择商品目录！");
		return true;
	}
	if (saleState == undefined || saleState == "" || saleState == 0) {
		top.toastr.error("请选择商品状态！");
		return true;
	}
	return false;
}

//处理图片内容
function handleImage(){
	//产品图片,用分号分隔
	var curImg = [];//产品图片
	$('#tpic-drop li').find(".picture_con").each(function(){
		var src = $(this).find('img').attr("src");
		curImg.push(src);
	});
	var imageURLs = curImg.join(";");
	if($.trim(imageURLs) == "" ){
		top.toastr.error("产品图片为不能为空！");
		return true;
	}
	$('#imageURLs').val(imageURLs);//详细图片
	$("#saleImage").val(curImg[0]);//主图
}

//修改保存
function editGoods(formId){
	if(formId == "dataForm"){
		if(checkData()){
			return;
		}
	} else if(formId == "salesDataForm") {
		var gLength = $("#gLength").val();
		var gWidth = $("#gWidth").val();
		var gHeight = $("#gHeight").val();
		
		var weight = $("#weight").val();
		var volume = $("#volume").val();
		var cost = $("#cost").val();
		var packCount = $("#packCount").val();
		var price = $("#price").val();
		var volumeWeight = $("#volumeWeight").val();

		if(gLength != undefined && gLength != "" && !reg3.test(gLength)){
			top.toastr.error("尺寸-长只能输入数字！");
			return;
		}
		if(gWidth != undefined && gWidth != "" && !reg3.test(gWidth)){
			top.toastr.error("尺寸-宽只能输入数字！");
			return;
		}
		if(gHeight != undefined && gHeight != "" && !reg3.test(gHeight)){
			top.toastr.error("尺寸-高只能输入数字！");
			return;
		}
		if(volume != undefined && volume != "" && !reg4.test(volume)){
			top.toastr.error("体积只能输入数字！");
			return;
		}
		if(weight != undefined && weight != "" && !reg4.test(weight)){
			top.toastr.error("单品重量只能输入数字！");
			return;
		}
		if(volumeWeight != undefined && volumeWeight != "" && !reg4.test(volumeWeight)){
			top.toastr.error("体积重只能输入数字！");
			return;
		}
		if(packCount != undefined && packCount != "" && !reg4.test(packCount)){
			top.toastr.error("可包装个数只能输入数字！");
			return;
		}
		if(cost != undefined && cost != "" && !reg4.test(cost)){
			top.toastr.error("统一成本价只能输入数字！");
			return;
		}
		if(price != undefined && price != "" && !reg4.test(price)){
			top.toastr.error("售价只能输入数字！");
			return;
		}
	}
	if(handleImage()){
		return;
	}
	
	$.ajax({
		layerMaskFlag:true,
		url : ctx.path + '/api/goods/updateGoods.json',
		type : 'POST',
		data : $("#" + formId).serialize(),
		dataType : "json",
		success : function(data) {
			if(data.rs == 1){
				top.toastr.success("商品信息修改成功！");
				//重新加载grid
	        	parent.refreshGrid();
	        	//设置参数
	        	$("#jqGridWhouse").jqGrid('setGridParam',{page:1,rows:20,postData:{goodsId : goodsId}});
	        	//刷新表单
	        	$("#jqGridWhouse").trigger("reloadGrid"); 
	        	//设置参数
	        	$("#jqGrid").jqGrid('setGridParam',{page:1,rows:20,postData:{goodsId : data.data}});
	        	//刷新表单
	        	$("#jqGrid").trigger("reloadGrid"); 
	        	parent.layerCloseAll();
			}
		}
	});
}

//开启Tab的切换
function addHref(node){
	$("#myTab li").unbind();
	$($("#myTab li a")[1]).attr("href","#tab-2");
	$($("#myTab li a")[2]).attr("href","#tab-3");
	$($("#myTab li a")[3]).attr("href","#tab-4");
	
	$(node).hide();
	
	$("#baseAdd").removeAttr("onclick");
	$("#baseAdd").attr("onclick", "editGoods('dataForm')");
}

//获得页面传参
function Request(argname){
	var url = location.href;
	var arrStr = url.substring(url.indexOf("?")+1).split("&");
	for(var i =0;i<arrStr.length;i++){
	    var loc    = arrStr[i].indexOf(argname+"=");
	    if(loc!=-1){
	        return arrStr[i].replace(argname+"=","").replace("?","");
	        break;
	    }
	     
	}
	return 0;
}


/**图片上传*/
function filetUpload(){
	var tuploader = new plupload.Uploader({ //实例化一个plupload上传对象
			browse_button : 'tbrowse',//buttonId
			multi_selection: false,
			url : ctx.path+'/api/upload/fileUpload',
			file_data_name :'file',
			unique_names:true,
			chunk_size:0,
			flash_swf_url : ctx.path+'/resources/components/plupload/Moxie.swf',
			silverlight_xap_url : ctx.path+'/resources/components/plupload/Moxie.xap',
			filters: {
			  mime_types : [ //只允许上传图片文件和rar压缩文件
			    { title : "图片文件", extensions : "jpg,gif,png,bmp,jpeg" }
			  ],
			  max_file_size : '5120kb', //最大只能上传2Mb的文件
			  prevent_duplicates : false //不允许队列中存在重复文件
			}
		});
		tuploader.init(); //初始化
		
		//绑定文件添加进队列事件
		tuploader.bind('FilesAdded',function(uploader,files){
			  var len = $("#tpic-drop li .picture_con").length;
			  if(len >= 8){
				  top.toastr.error("最大支持"+8+"张图片,您还能选择"+(0-len)+"张!");
				  return;
			  }
			  $.each(uploader.files, function (i, file) { //保留最新的第一个文件
			        if (uploader.files.length <= 1) {
			            return;
			        }
			        uploader.removeFile(file);
			    });		
			  
				  uploader.start(); //开始上传
		});
	
		//上传完文件返回真实文件名称
		tuploader.bind('FileUploaded',function(uploader,file,responseObject){
			  var result = eval("("+responseObject.response+")");
			  if(result.rs==1){
              var opr ="<li><div><div class=\"picture_con\"\">"+
            		   "<img src=\""+result.data.fileInfo.attachmentPath.replace(/\\/g, '/')+"\"   style=\"width: 130px;height: 149px;\"></div>"+
            		   "<span class=\"picture_size\">"+
            		   "<span class=\"pic_size\">1024*1024</span>"+
            		   "<a href=\"javascript:;\" class=\"redtext_link\" onclick=\"deltImg(this,'"+result.data.fileInfo.attachmentPath.replace(/\\/g, '/')+"')\">移除</a></span>" +
            		   "</div></li>";
              		$("#tpic-drop li.upload_pictures").before(opr);
              		$("#tImg").hide();
					getImgRealPX(result.data.fileInfo.attachmentPath.replace(/\\/g, '/'),"tpic-drop");
					top.toastr.success("上传成功！");
			  }else {
				  top.toastr.error("上传失败！");
			  }
	     });
		 
		tuploader.bind('Error',function(uploader,err){
			 if(err.file.size>(1024*1024*5)){
				 top.toastr.error("上传文件不能超过5M！");
			 }else{
				 top.toastr.error("上传失败！");
			 }
	     });
}

/**移除图片*/
function deltImg(obj,aliAttId){
	$(obj).closest('li').remove();
	var len = $("#tpic-drop li .picture_con").length;
	if(len == 0){
		$("#tImg").show();
	}
}