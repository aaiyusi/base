function operate(cellValue,options,rowObject){

}
  

$(document).ready(
		//更新当前企业信息
		$("#frmCompanyInfomation").validate({
			 submitHandler: function(form){
			 }
		})
);
  

getCurrentEnterpriseInfo();
function getCurrentEnterpriseInfo(){
	$.ajax({
	    type: "POST",
	    url: ctx.path +'/api/sys/getCurrentEnterpriseInfo.do',
	    dataType: "json",
	    success: function(data){
	    	debugger;
	    	if(data.rs == 1){
	    		 var result = data.data;
	    		 $("#frmCompanyInfomation").fill(result);//表单数据填充
	    		 $("#enterpriseCode").html(result.enterpriseCode);
	    		 $("#managerName").html(result.managerName);
	    	}
	    } 
	});
}


function checkValue(){
	debugger
	var serialize = $("#frmCompanyInfomation").serialize();
	$.ajax({
        type: "POST",
        url:  ctx.path +"/api/sys/updateCurrentEnterpriseInfo.do",
        data: serialize,
        dataType: "json",
        async: false,
        success: function(data){
	       	 if(data.rs==1){
	       		top.toastr.success("编辑公司资料成功");
	       		return false;
	       	 }else{
	       		top.toastr.error("编辑公司资料失败");
	        	return false;
		     }
    	 }
	 })
	return false;
}