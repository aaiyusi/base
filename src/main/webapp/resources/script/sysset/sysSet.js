 
$(function(){
	
});

function change(type){
    if(type==1){
    	$("#iframeInfo").attr("src","erp/resources/views/address/addressManager.jsp"); 
        $("#rate").attr("class","");
        $("#address").attr("class","active"); 
    }else if(type==2){
		$("#iframeInfo").attr("src","erp/resources/views/rate/rateManager.jsp");
		$("#address").attr("class","");
        $("#rate").attr("class","active");
	}
}