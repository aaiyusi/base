$(function(){
	if($(".nav-tabs").length > 0){
		$(".nav-tabs").delegate("li","click",function(){ 
			$(this).addClass("active").siblings("li").removeClass("active");
		});
	}
	
	//下拉选单点击copy选项文字
	$("body").on("click",".copytext li[class!='edit'][class!='dropdown-submenu'] >a",function(){
		$(this).parents(".btn-group, .nav").find("span.text").stop().html($(this).html()).find(".badge").remove();
	});
});