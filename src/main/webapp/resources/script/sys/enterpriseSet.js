$.validator.setDefaults({
	errorElementClass: "hidden"
})

$(document).ready(function(){
	//更新当前企业信息
	$("#frmCompanyInfomation").validate({
		submitHandler: function(form){
  			return false;
  		 }
	});
	getCurrentEnterpriseInfo();
	function getCurrentEnterpriseInfo(){
		$.ajax({
		    type: "POST",
		    url: ctx.path +'/api/sys/getCurrentEnterpriseInfo.do',
		    dataType: "json",
		    success: function(data){
		    	if(data.rs == 1){
		    		 var result = data.data;
		    		 $("#frmCompanyInfomation").fill(result);//表单数据填充
		    		 $("#enterpriseCode").html(result.enterpriseCode);
		    		 $("#managerName").html(result.managerName);
		    	}
		    } 
		});
	}
	
});

function checkValue(){
	var companyName = $("#frmCompanyInfomation").find("input[name='companyName']").val();
	var address = $("#frmCompanyInfomation").find("input[name='address']").val();
	var contactEmail = $("#frmCompanyInfomation").find("input[name='contactEmail']").val();
	var contactQq = $("#frmCompanyInfomation").find("input[name='contactQq']").val();
	var contactMobile = $("#frmCompanyInfomation").find("input[name='contactMobile']").val();
	var contactTel = $("#frmCompanyInfomation").find("input[name='contactTel']").val();
	if(checkUtil.isNullValue(companyName)){
		top.toastr.error("公司名称不能为空！");
		return true;
	}
	
	if(!checkUtil.isNullValue(contactEmail) && !checkUtil.isEmail(contactEmail)){
		top.toastr.error("联系人邮箱格式不正确");
		return true;
	}
	if(!checkUtil.isNullValue(contactQq) && !checkUtil.isQQ(contactQq)){
		top.toastr.error("联系人qq格式不正确");
		return true;
	}
	if(!checkUtil.isNullValue(contactMobile) && !checkUtil.isPhone(contactMobile)){
		top.toastr.error("联系人手机格式不正确");
		return true;
	}
	
	if(!checkUtil.isNullValue(contactTel) && !checkUtil.isTelephoneNum(contactTel)){
		top.toastr.error("联系人电话格式不正确");
		return true;
	}
	
	var serialize = $("#frmCompanyInfomation").serialize();
	var layerMask ;
	$.ajax({
		complete:function(XHR, TS){
			layer.close(layerMask);  
        },
        beforeSend:function(XHR){
        	layerMask = layer.load(1);
        },
        type: "POST",
        url:  ctx.path +"/api/sys/updateCurrentEnterpriseInfo.do",
        data: serialize,
        dataType: "json",
        async: false,
        success: function(data){
	       	 if(data.rs==1){
	       		top.toastr.success("编辑公司资料成功");
	       		$(top.document).find("#lableCompany").html(companyName);
	       		return false;
	       	 }else{
	       		top.toastr.error("编辑公司资料失败");
	        	return false;
		     }
    	 }
	 })
	return false;
}
  

