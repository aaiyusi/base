// JavaScript Document
// 字符上限截取
function subString(str, len, hasDot){
    var newLength = 0;
    var newStr = "";
    var chineseRegex = /[^\x00-\xff]/g;
    var singleChar = "";
    var strLength = str.replace(chineseRegex,"**").length;
    for(var i = 0;i < strLength;i++){
        singleChar = str.charAt(i).toString();
        if(singleChar.match(chineseRegex) != null){
            newLength += 2;
        }else{
            newLength++;
        }
        if(newLength > len){
            break;
        }
        newStr += singleChar;
    }
    if(hasDot && strLength > len){
        newStr += "...";
    }
    return newStr;
}
//大列表自定义滚动
function autoHeight(){
	var toolsHeight=$(".autoscrolllist .list-body").offset().top+55,
		winHeight=$(window).height()-toolsHeight;
		$(".autoscrolllist .list-body").height(winHeight);
};
//清除空格
function trim(ss){return ss.replace(/(^\s*)|(\s*$)/g, "");}

//触发式弹出提示，4个参数分别为:绑定的元素、提示文字、气泡位置、启用动画效果
function showPopoverTip(obj,content,placement,shake){
	var popoberClass;
	shake==true? popoberClass="popover popovertip animation animating shake" : popoberClass="popover popovertip";
	$(obj).popover({
		container:"body",
		trigger:"manual",
		placement: placement||"top",
		content:content,
		template: '<div class="'+ popoberClass +'" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div><i class="ico-remove btn-remove"></i></div>'
	});
	$(obj).popover("show");
	$(".popovertip .btn-remove").on("click",function(){
		$(this).parent(".popovertip").remove();
	});
}

//复制表头自适应滚动
(function ($) {
    $.fn.extend({
        "fixedTableHead": function (options) {
        	//检测用户传进来的参数是否合法
            if (!isValid(options)) return this;
        	//清除上一次执行创建的dom
        	if($("#fixedTableHead").length>0)$("#fixedTableHead").remove();
        	//默认参数
		    var defaluts = {
		        type: "ul-li",	  //列表格式，分table和ul-li两种
		        container: ".container-fluid"	//父级容器
		    };
        	//使用jQuery.extend 覆盖插件默认参数
            var opts = $.extend({}, defaluts, options);
            return this.each(function () {  //这里的this 就是 jQuery对象。这里return 为了支持链式调用
                //遍历要自适应的列表表头,当调用fixedTableHead()插件的是一个集合的时候。
                var $this = $(this); //获取当前dom 的 jQuery对象，这里的this是当前循环的dom
                //根据参数来设置 dom的样式
                var tableClass=$this.attr("class");
                var cleft= $(opts.container).css("padding-left");
                var cright=$(opts.container).css("padding-right");
                $(opts.container).css("position","relative");
                switch(opts.type){
                	//ul li布局列表
                	case "ul-li":
                		var scrollHeight=$this.find(".list-title").height();
                		//创建滚动表头dom
                		var headHtml='<div id="fixedTableHead" style="display:none; left:'+cleft+'; right:'+cright+';  border:#cfd9db 1px solid; background-color:#eeeeee; position:absolute;top:0;z-index:100;">'+
                						'<div class="'+tableClass+'">'+
                							'<ul class="list-title">'+ $this.find(".list-title").clone(true).html() + '</ul>'+
                						'</div>'+
                					'</div>';
                		$(opts.container).append(headHtml);
                	break;
                	//table布局列表
                	case "table":
                		var scrollHeight=$this.find("thead").height();
                		//创建滚动表头dom
                		var headHtml='<div id="fixedTableHead" class="panel" style="display:none; margin-bottom:0; border-width:0 1px; border-radius:0; background-color:#f9f9f9; position:absolute; top:0;z-index:1030;">'+
                						'<table class="'+tableClass+'">'+
                							'<thead>'+ $this.find("thead").clone(true).html() + '</thead>'+
                						'</table>'+
                					'</div>';
                		$(opts.container).append(headHtml);
                		$("#fixedTableHead").css({"left":cleft,"right":cright});
                		//遍历表头单元格，设置对应的宽度
                		$this.find("thead th").each(function(index){
                			$("#fixedTableHead thead tr").children("th").eq(index).attr("width",$(this).outerWidth());
                		});
                	break;
                }
                //根据屏幕滚动设置距顶部距离
                $(window).bind("scroll",function(){
					if($(this).scrollTop()<=($this.offset().top+scrollHeight)){
						$("#fixedTableHead").fadeOut().css("top","0");
					}else {
						$("#fixedTableHead").fadeIn().css("top",$(this).scrollTop());
					};
				});
            });
            //私有方法，检测参数是否合法
		    function isValid(options) {
		        return !options || (options && typeof options === "object") ? true : false;
		    }
        }
    });
})(window.jQuery);

//可横向纵向滚动可带脚注表格
(function ($) {
    $.fn.autoScrollTable=function (){
    	var tableCon=this;//this是表格的父容器
    	tableCon.css({
			"overflow":"scroll",
			"position":"relative"
		})
    	var pagetools=$(".panel-footer.table-control").outerHeight()||0;
        var toolsHeight=tableCon.offset().top + pagetools,
		winHeight=$(window).height()-toolsHeight-15;
		tableCon.css("height",winHeight).children(".table").css({
			"min-width":"100%",
			"white-space":"nowrap"
		});
		//$("#headtable, #foottable").remove();
		if($("#headtable").length<1){
			var headtable=tableCon.children(".table").children("thead").html();
			var tableClass=tableCon.children(".table").attr("class");
			tableCon.append('<div id="headtable" style="left: -1px;min-width: 100%;position: absolute;top: 0;z-index:1;"><table class="'+ tableClass +'" style="min-width: 100%; white-space: nowrap;"><thead>'+ headtable +'</thead></table></div>');
			$("#headtable th").each(function(index){
				var targetWidth=tableCon.children(".table").children("thead").find("th").eq(index).width();
				$(this).width(targetWidth);
			});
		}
		//如果含有脚注(有bug)
		/*
		if(tableCon.find("tfoot").length>0){
			var foottable=tableCon.children(".table").children("tfoot").html();
			var footHeight=tableCon.children(".table").children("tfoot").height();
			var defaultTop=winHeight-footHeight-20;
			tableCon.append('<div id="foottable" style="left: 0;min-width: 100%;position: absolute;top:'+ defaultTop +'px; z-index:1;"><table class="'+ tableClass +'" style="min-width: 100%; white-space: nowrap;"><tfoot>'+ foottable +'</thead></tfoot></div>');
			$("#foottable th").each(function(index){
				var targetWidth=tableCon.children(".table").children("tfoot").find("th").eq(index).width();
				$(this).width(targetWidth);
			});
			tableCon.children(".table").children("tfoot").css("visibility","hidden");
		};
		*/
		tableCon.bind("scroll",function(){
			var list_top = $(this).scrollTop();
			$("#headtable").css("top",list_top);
			//$("#foottable").css("top",defaultTop+list_top);
		});
    };
})(window.jQuery);

//图片预览效果
(function ($){
    $.fn.extend({
        viewLargePhoto : function () {
            return this.each(function () {
				var obj = $(this);
            	var	skewX=0,skewY=0,
					winWidth=$(window).width(),
					winHeight=$(window).height();
				obj.on("mouseover",function(e){
					var	imageSrc=$(this).children("img").attr("src"),
						tooltip = '<div id="tooltip" class="phototool"><img src="'+imageSrc+'"></div>',
						scrollTop=$(window).scrollTop();
					$("body").append(tooltip);
					var tipWidth=$("#tooltip").width(),tipHeight=$("#tooltip").height();
					e.pageX>(winWidth-tipWidth)?skewX=e.pageX-tipWidth-10 : skewX=e.pageX+10;
					(e.pageY-scrollTop)>(winHeight-tipHeight)?skewY=e.pageY-tipHeight-20 : skewY=e.pageY+20;
					$("#tooltip").css({
						"top": skewY+"px",
						"left":skewX+"px"
					}).show("fast");
				}).on("mouseout",function(){
					$("#tooltip").remove();
				}).on("mousemove",function(e){
					var tipWidth=$("#tooltip").width(),tipHeight=$("#tooltip").height(),
						scrollTop=$(window).scrollTop();
					e.pageX>(winWidth-tipWidth)?skewX=e.pageX-tipWidth-10 : skewX=e.pageX+10;
					(e.pageY-scrollTop)>(winHeight-tipHeight)?skewY=e.pageY-tipHeight-20 : skewY=e.pageY+20;
					$("#tooltip").css({
						"top":skewY+"px",
						"left":skewX+"px"
					});
				});
        	});
    	}
    })
})(window.jQuery);
$(function(){
	//新增内容提示
	(function () {
		if($(".newtooltip").length > 0){
			$(".newtooltip").tooltip({
				container:"body",
				trigger:"manual",
				//placement: "top",
				template:'<div class="tooltip" role="tooltip" style="z-index:1039;"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div><span class="btn-close ico-close2"></span></div>'
			});
			$(".newtooltip").tooltip("show");
			$(document).on("click",".tooltip .btn-close",function(){
				var title=$(this).prev(".tooltip-inner").text();
				var targetObj=$(".newtooltip[data-original-title='"+title+"']");
				$(this).parent().remove();
			});
		};
	})();
	
	//左侧tab跟随屏幕滚动
	(function () {
		if($(".fixed-scroll").length > 0 && $(window).width()>=767){
			var sHegiht= $(".fixed-scroll").offset().top;
			$(window).on("scroll",function(){
				var sWidth= $(".fixed-scroll").width();
				$(".fixed-scroll").css({"position":"fixed","top":sHegiht,"width":sWidth});
			});
		};
	})();
	
	//限制textarea字符数量
	$("textarea[data-toggle='textcounter'], input[data-toggle='textcounter']").on("keyup",function(){
		var	maxlimit=parseInt($(this).attr("data-limit")),
			limitNum=$(this).next().find(".limitNum");
		$(this).val().length > maxlimit?$(this).val($(this).val().substring(0, maxlimit)):limitNum.text(maxlimit - $(this).val().length);
	});
	
	//tab及modal跨页面传参
	(function () {
		var URL = document.location.toString();
		if($(".tab-pane").length > 0){
			var QueryString,arr =new Array(), paneId;
			if(URL.indexOf("pane")!=-1){
				QueryString=URL.substring(URL.indexOf("?")+1,URL.length);
				arr=QueryString.split("&");
				for(var i=0; i<arr.length; i++){
					if(arr[i].search("pane")!=-1)paneId="#"+arr[i].substring(5,arr[i].length);
				}
				$(paneId).addClass("active").siblings(".tab-pane").removeClass("active");
				$("a[data-toggle='tab'][href='"+paneId+"']").parent("li").addClass("active").siblings("li").removeClass("active");
				$(".nav li[rel='"+paneId+"']").addClass("active").siblings("li").removeClass("active");
			}else QueryString = "";
		}
		if($(".modal").length > 0){
			var QueryString2,arr2 =new Array(), modalId;
			if(URL.indexOf("modal")!=-1){
				QueryString2=URL.substring(URL.indexOf("?")+1,URL.length);
				arr2=QueryString2.split("&");
				for(var i=0; i<arr2.length; i++){
					if(arr2[i].search("modal")!=-1)modalId="#"+arr2[i].substring(6,arr2[i].length);
				}
				$(modalId).modal();
			}else QueryString2 = "";
		}
	})();
	
	//下拉选单点击copy选项文字
	$("body").on("click",".copytext li[class!='edit'][class!='dropdown-submenu'] >a",function(){
		$(this).parents(".btn-group, .nav").find("span.text").stop().html($(this).html()).find(".badge").remove();
	});
	
	//新增SKU
	$(".labelkeyword .keyword, .form-control.stockskuname").keypress(function (e) {
		var key = e.which;
		if (key == 13) {
			$(this).next(".input-group-btn").find(".btn-success").click();
		};
	});
	
	//站点国旗注释,操作按钮注释
	$(".img-flag, .icon-btn, .messageico").tooltip({
		container:"body",
		trigger:"hover ",
		placement: "top"
	});
	
	//数字输入框组件
	$("#main").on("click",".customnum .add",function(){
		var n=$(this).parent(".customnum").find(".form-control"),o=$(this).parents("tr, li").find(".total"),s=parseInt(n.val()),t= s*1 + 1;
		if(o.length>0&&s>=parseInt(o.html())){
			alert("超过限定数量");
			n.val("0").prev(".subtract").addClass("text-gray");
		}
		else{
			n.val(t);
			$(this).parent(".customnum").find(".subtract").removeClass("text-gray");
		};
	});
	$("#main").on("click",".customnum .subtract",function(){
		if(!$(this).hasClass("text-gray")){
			var n=$(this).parent(".customnum").find(".form-control"),s=parseInt(n.val()), t=s*1-1;
			if(s>=1){
				n.val(t);
				if(s==1)$(this).addClass("text-gray");
			}
		}
	});
	$("#main").on("change",".customnum .form-control",function(){
		var o=$(this).parents("tr, li").find(".total"),s=parseInt($(this).val());
		if(o.length>0&&s>parseInt(o.html())){
			alert("超过限定数量");
			$(this).val("0").prev(".subtract").addClass("text-gray");
		}else if(s==0)$(this).parent(".customnum").find(".subtract").addClass("text-gray");
		else $(this).parent(".customnum").find(".subtract").removeClass("text-gray");
	});
	
	//显示&隐藏商品详细
	$("#showDetail").on("click",function(){
		if($(this).attr("checked")){
			$(".autoscrolllist .unfoldicon").removeClass("ico-plus-circle").addClass("ico-minus-circle").parents("li").find(".productTr").show();
			$(".panel-group  .panel-collapse, .panel-group .productTr").show();
			$(".panel-group .unfoldicon").removeClass("ico-plus-circle2").addClass("ico-minus-circle2");
		}
		else {
			$(".autoscrolllist .unfoldicon").addClass("ico-plus-circle").removeClass("ico-minus-circle").parents("li").find(".productTr").hide();
			$(".panel-group .panel-collapse, .panel-group .productTr").hide();
			$(".panel-group .unfoldicon").removeClass("ico-minus-circle2").addClass("ico-plus-circle2");
		}
	});
	//显示&隐藏内容
	$(".autoscrolllist .unfoldicon").on("click",function(){
		$(this).toggleClass("ico-plus-circle").toggleClass("ico-minus-circle").parents("li").find(".productTr").toggle();
		var allsub = $(".autoscrolllist .productTr").length;
		var showsub = $(".autoscrolllist .productTr").not(":hidden").length;
		if(showsub==allsub)$("#showDetail").attr("checked",true);
		else $("#showDetail").attr("checked",false);
	});
	
	//窗口内员工全选取消功能
	$(".choicestaff").on("click","input[type='checkbox'][value='all']",function(){
		var objName=$(this).attr("name");
		if ($(this).prop("checked")) {  
			$("input[name='"+objName+"']").prop("checked", true).parent("label").addClass("active");
		} else {  
			$("input[name='"+objName+"']").prop("checked", false).parent("label").removeClass("active");
		}
	});
	//窗口内员工复选框的事件
	$(".choicestaff").on("click","input[type='checkbox'][value!='all']",function(){
		$(this).prop("checked")?$(this).parent("label").addClass("active"):$(this).parent("label").removeClass("active");
		var objName=$(this).attr("name");
		if (!$("input[name='"+objName+"']").checked) {  
			$("input[name='"+objName+"'][value='all']").prop("checked", false);
		}
		var chsub = $("input[name='"+objName+"'][value!='all']").length;
		var checkedsub = $("input[name='"+objName+"'][value!='all']:checked").length;  
		if (checkedsub == chsub) {  
			$("input[name='"+objName+"'][value='all']").prop("checked", true);  
		}  
	});
	
	//全选取消功能
	$(document).on("click","input[type='checkbox'][value='all']",function(){
		var objName=$(this).attr("name");
		if ($(this).prop("checked")){
			$("input[name='"+objName+"']").not(':disabled').prop("checked", true).parents("tr, li").addClass("active");
		} else {
			$("input[name='"+objName+"']").not(':disabled').prop("checked", false).parents("tr, li").removeClass("active");
		}
	});
	//复选框的事件
	$(".multichoice").on("click","input[type='checkbox'][value!='all']",function(event){
		if ($(this).prop("checked"))$(this).parents("tr, li").addClass("active");
		else $(this).parents("tr, li").removeClass("active");
		var objName=$(this).attr("name");
		if (!$("input[name='"+objName+"']").not(':disabled').checked) {
			$("input[name='"+objName+"'][value='all']").prop("checked", false);
		};
		var chsub = $("input[name='"+objName+"'][value!='all']").not(':disabled').length;
		var checkedsub = $("input[name='"+objName+"'][value!='all']:checked").not(':disabled').length;  
		if (checkedsub == chsub) {  
			$("input[name='"+objName+"'][value='all']").prop("checked", true);  
		};
		event.stopPropagation();
	});
	
	//复选框文字变化
	$(".multicheck input[type='checkbox']").on("click",function(){
		if($(this).prop("checked")){
			$(this).parent("label").addClass("active");
		}else {
			$(this).parent("label").removeClass("active");
		};
	});
	
	//必选一项的复选框
	$(".will-choose").on("click","input[type='checkbox']",function(){
		var name=$(this).attr("name");
		var siblings=$("input[type='checkbox'][name='"+name+"']:checked");
		if(siblings.length==0){
			$.gritter.add({
				class_name:'gritter-error',
				title: "不能取消",
				text: "请至少选择一项",
				time: 2000,
				sticky: false
			});
			return false;
		}
	});
	
	//多选下拉框
	function checkSelected(obj){
		var parent=obj.parents(".multiple-group"),
			chsub=parent.find("input[type='checkbox'][value!='all']").length,
			checked=parent.find("input[type='checkbox'][value!='all']:checked").length;
		parent.find(".choice strong").html(checked);
		checked == chsub?parent.find("input[type='checkbox'][value='all']").prop("checked", true):parent.find("input[type='checkbox'][value='all']").prop("checked", false);
	};
	$(".multiple-group").on("click","input[type='checkbox'][value!='all']",function(){
		$(this).prop("checked")?$(this).parent("label").next("select.form-control").prop("disabled",false):$(this).parent("label").next("select.form-control").prop("disabled",true);
		checkSelected($(this));
	});
	$(".multiple-group").on("click","input[type='checkbox'][value='all']",function(){
		var parent= $(this).parents(".multiple-group");
		$(this).prop("checked")?parent.find("input[type='checkbox'][value!='all']").prop("checked", true):parent.find("input[type='checkbox'][value!='all']").prop("checked", false);
		checkSelected($(this));
	});
	$(".multiple-group").on("click",".checkbox-inline, select.form-control",function(event){
		event.stopPropagation();
	});
	
	//下拉选单显示&关闭隐藏项
	$(document).on("click","li.view-hidden",function(e){
		var viewInput=$(this).find("input[name='view-hidden']");
		var hideItem=$(this).parent(".dropdown-menu").find(".hide-item");
		if(viewInput.prop("checked")){
			hideItem.show();
		}else{
			hideItem.hide();
		};
		e.stopPropagation();
	});
	
	//排序按钮组
	$(".sort-group .dropdown-menu").on("click",".btn",function(event){
		$(this).parents(".dropdown-menu").find(".btn").removeClass("active");
		$(this).addClass("active");
		event.stopPropagation();
	});
	
	//大列表表头排序按钮
	$(".table thead .sort, .list-title .sort").addClass("sorting");
	$("body").on("click",".sort",function(){
		if($(this).hasClass("sorting"))$(this).removeClass("sorting").addClass("sorting_asc");
		else if($(this).hasClass("sorting_asc"))$(this).removeClass("sorting_asc").addClass("sorting_desc");
		else if($(this).hasClass("sorting_desc"))$(this).removeClass("sorting_desc").addClass("sorting_asc");
		$(this).closest("th, li").siblings("th, li").find(".sort").removeClass("sorting_asc sorting_desc").addClass("sorting");
	});
	
	$(".panelshow").on("click", function() {
		if($(".typepanel").css("top")=="0px"){
			$("html").animate({ marginTop: "0" });
			$(".typepanel").animate({ top: "-41px" });
			$(this).removeClass("opened");
			$(this).find("i").removeClass("ico-minus").addClass("ico-plus");
		}else{
			$("html").animate({ marginTop: "41px" });
			$(".typepanel").animate({ top: "0" });
			$(this).addClass("opened");
			$(this).find("i").removeClass("ico-plus").addClass("ico-minus");
		}
	});
});