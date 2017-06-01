$(document).ready(function() {
	
	$.ajax({
		url : ctx.path + '/face/getCatalogList.do',
		type : 'POST',
		data : $("#dataForm").serialize(),
		dataType : "json",
		success : function(data) {
			var catalog = data.data.data;
			var total = data.totalRows;
			var temp ="";
			if(catalog != undefined){
				$.each(catalog,function(index,value){
					if(value.children.length == 0){//没有子节点
						temp += "<li class=\"level-1  item-"+index+1+"\"><a href=#><span>"+value.eName+"</span></a></li>";
					}else{
						
					var name = value.eName;
					var chlidLi = "";
					$.each(value.children,function(index,child){
						var childName = child.eName;
						chlidLi += "<li class=\"menu-item  item-header\"><a href=\"#\">"+childName+"</a></li>";	
					});
						
					var head = 	"<li class=\"level-1  parent item-1\"><a href=\"#\"> <span>"+name+"</span><span class=\"pull-xs-right hidden-lg-up\"> <spandata-target=\"#ver_sub_menu_5641\" data-toggle=\"collapse\""+
							"class=\"navbar-toggler collapse-icons\"> <i class=\"material-icons add\">&#xE313;</i> <i class=\"material-icons remove\">&#xE316;</i></span></span></a>";
					
					var tail = "<div id=\"ver_sub_menu_5641\" class=\"owl-sub-menu menu-dropdown owl-vm-sub-auto collapse\"><input type=\"hidden\" value=\"0\" name=\"v-menu-sub-width\"class=\"v-menu-sub-width\" />"+
						"<div class=\"col-xs-12\">	<div class=\"owl-menu-row row \"><div class=\"owl-menu-col col-xs-12 col-lg-5 \"><ul class=\"ul-column\">"+chlidLi+
						"</ul></div></div></div></div></li>";
								
					temp += head + tail;	
					}
				});
					
				
				
				$("#js-category-left ul ").append(temp);//添加左边分类的内容
			}
			
		}
	});
	

	//跳转登录页面
	$("#sign").click(function(){

		$("#slider-wrapper").hide();
		$(".owl-topcolum-block").hide();
		$("#_desktop_menu_ver").hide();
		$("#contactus").hide();
		
//		$("#mainPanel .container .row").append($("#signPanel").html());
		$("#signPanel").show();
	});
	
	//跳转联系我们页面
	$("#contact").click(function(){

		$("#slider-wrapper").hide();
		$(".owl-topcolum-block").hide();
		$("#_desktop_menu_ver").hide();
		$("#signPanel").hide();
		
		$("#contactus").show();
	});
	
	
});

