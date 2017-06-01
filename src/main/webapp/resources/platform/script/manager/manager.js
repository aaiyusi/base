$.validator.setDefaults({
	errorElementClass: "hidden"
})
var parentIndex = null;
$(document).ready(function(){
	toastr.options = {
	  "closeButton": false,
	  "debug": false,
	  "progressBar": false,
	  "positionClass": "toast-top-center",
	  "onclick": null,
	  "showDuration": "400",
	  "hideDuration": "1000",
	  "timeOut": "2000",
	  "extendedTimeOut": "1000",
	  "showEasing": "swing",
	  "hideEasing": "linear",
	  "showMethod": "fadeIn",
	  "hideMethod": "fadeOut"
	}
	//修改员工密码校验
	$("#navigation-formEmployee").validate({
  		 submitHandler: function(form){
  			return false;
  		 }
	});
	//修改员工信息校验
	$("#formEmployeeDetail").validate({
		submitHandler: function(form){
  			return false;
  		 }
	});
	
});


//获取框架的高度
function getFrameHeight(){
	return $("#content-main").height()-5;
}

//退出登录
function logout(){
	layer.confirm("您确定要退出系统吗？", {icon: 3, title:"退出"},  
	   function(index){
			window.location.href=ctx.path+'/platform/pm/logout.do';    	  
		  	layer.close(index);
	   });
	/*swal({
        title: "您确定要退出系统吗？",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "确认",
        cancelButtonText:"取消",
        closeOnConfirm: true
    }, function () {
    	window.location.href=ctx.path+'/platform/pm/logout.do';
    });*/
}

function openPwdPage()
{
   $("#changePS form")[0].reset();
   $("#changePS div").removeClass("has-error");
   $("#pErrorMessage").remove();
}
 
function checkUpdatePwd(obj){
	$obj = $(obj);
	var oldPwd =  $obj.find("#oldPwd").val();
	var pwd = $obj.find("#pwd").val();
	var repwd = $obj.find("#repwd").val();
	
	if(checkUtil.isNullValue(oldPwd)){
		top.toastr.error("旧密码不能为空");
		return false;
	}else if(!CheckTool.checkPwd(oldPwd)){
		top.toastr.error("请输入6-16位旧密码，可由数字、字母或常用符号组合");
    	return false;
	}
	
	if(checkUtil.isNullValue(pwd)){
		top.toastr.error("新密码不能为空");
		return false;
	}else if(!CheckTool.checkPwd(pwd)){
		top.toastr.error("请输入6-16位新密码，可由数字、字母或常用符号组合");
    	return false;
	}
	
	if(checkUtil.isNullValue(repwd)){
		top.toastr.error("确认密码不能为空");
		return false;
	}else if(!CheckTool.checkPwd(repwd)){
		top.toastr.error("请输入6-16位确认密码，可由数字、字母或常用符号组合");
    	return false;
	}
	
	if(pwd!=repwd){
		top.toastr.error("新密码和确认密码不一致，请重新输入");
		return false;
	}
	 
	var seri = $obj.serialize();
	$.ajax({
	    type: "POST",
	    url: ctx.path +'/api/pm/updateCurrentPwd.do',
	    dataType: "json",
	    data:seri,
	    success: function(data){
	    	if(data.rs == 1){
	    		$("#changePS").modal("hide");
	    		top.toastr.success("修改密码成功");
	    		return false;
	    	}else{
	    		return false;
	    	}
	    } 
	});
	return false;
}

function checkUpdateInfo(obj){
	 var $obj = $(obj);
	 //姓名
	 var userName =  $obj.find("#userName").val();
	 var mobilePhone =  $obj.find("#mobilePhone").val();
	 var email =  $obj.find("#email").val();
	 
	 if(checkUtil.isNullValue(userName)){
		top.toastr.error("姓名不能为空！");
		return true;
	 } 
	 
	 if( !checkUtil.isNullValue(mobilePhone) && !CheckTool.checkPhone(mobilePhone)){
		top.toastr.error("手机格式错误！");
		return true;
	 } 
	 
	 if( !checkUtil.isNullValue(email) && !CheckTool.checkEmail(email)){
		top.toastr.error("邮箱格式错误！");
		return true;
	 } 
	 
	var seri = $obj.serialize();
	$.ajax({
	    type: "POST",
	    url: ctx.path +'/api/pm/updateCurrentUserInfo.do',
	    dataType: "json",
	    data:seri,
	    success: function(data){
	    	if(data.rs == 1){
	    		$("#changeInfo").modal("hide");
	    		top.toastr.success("编辑个人资料成功");
	    	}else{
	    		top.toastr.error("编辑个人资料失败");
	    	}
	    } 
	});
	return false;
}

//打开修改个人信息页面
function openInfoPage(){
	
   $("#changeInfo form")[0].reset();
   $("#changeInfo div").removeClass("has-error");
   $("#pErrorMessage").remove();
   $.ajax({
	    type: "POST",
	    url: ctx.path +'/api/pm/getCurrentUser.do',
	    dataType: "json",
	    success: function(data){
	    	if(data.rs == 1){
	    		 $("#formEmployeeDetail").fill(data.data);//表单数据填充
	    	}
	    } 
	});
}
 