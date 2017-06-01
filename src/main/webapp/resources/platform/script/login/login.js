var layerMask ;
var remberPwdSwitch;
 var userInfo;
 var cookieUserKey="ERP_USER";
 var base64 ;
$(document).ready(
	
	function(){
		$("#loginName").focus();
		$("#loginForm").find("input").focus(function(){
			$(this).parent().parent().find('div').removeClass('focus');
			$(this).parent().addClass('focus');
		})
		
		//初始化
		initUserInfo();
		function initUserInfo(){		
			
			base64 = new Base64(); 
			var storeUserStr=$.cookie(cookieUserKey);
			if( storeUserStr != undefined  && storeUserStr != ""){
				 userInfo=JSON.parse(base64.decode(storeUserStr));
				 remberPwdSwitch=$.cookie("remberPwdSwitch")=="1"?true:false;
				if(!remberPwdSwitch){
					userInfo.pwd="";
					userInfo.loginName="";
					$("#loginForm").find("#labelRemPwd").removeClass('checked');
				}else{
					$("#loginForm").find("#labelRemPwd").addClass('checked');
				}
				$("#loginForm").find("#pwd").val(userInfo.pwd);
				$("#loginForm").find("#loginName").val(userInfo.loginName);
			}
		};
		
		$("#loginForm").validate({
			submitHandler: function(form){
				$(form).ajaxSubmit({
					// 表单提交成功后的回调
					success : function(data,statusText, xhr, $form) {
						if(data.rs==1){
							storeUserCookie();
							window.location.href=ctx.path+data.data;
						}else{
							$("#loginForm").find("#errorMsg").html("用户名或密码错误");
						}
					}
				});
			}
		});
	}
);

function loginCheck(obj){
	
	var $obj = $(obj)
	var loginName = $obj.find("#loginName").val();
	var pwd = $obj.find("#pwd").val();
	if(!CheckTool.checkUserName(loginName)){
    	errorMsg="请输入正确的手机号/邮箱";
    	$obj.find("#errorMsg").html(errorMsg);
    	return false;
    }
	
	if(!CheckTool.checkPwd(pwd)){
    	errorMsg="请输入6-16位密码，可由数字、字母或常用符号组合";
    	$obj.find("#errorMsg").html(errorMsg);
    	return false;
    }
	$obj.submit();
	return true ;
}
	

function loginKeyDown(event){
	if(event.keyCode==13){
		
	}
};

function setCookie(name,value) 
{ 
    var Days = 30; 
    var exp = new Date(); 
    exp.setTime(exp.getTime() + Days*24*60*60*1000); 
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString(); 
} 

//读取cookies 
function getCookie(name) 
{ 
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
        return unescape(arr[2]); 
    else 
        return null; 
} 

function toggleRemberPwd(obj){
	
	var $obj = $(obj);
	$obj.toggleClass('checked');
	remberPwdSwitch = $obj.hasClass('checked');
	$.cookie("remberPwdSwitch",remberPwdSwitch?"1":"0",{expires:7});
};

var storeUserCookie=function(){
	
	var storeUser={};
	storeUser.loginName=$("#loginForm").find("#loginName").val();
	if(remberPwdSwitch){			
		storeUser.pwd= $("#loginForm").find("#pwd").val();
	}
	$.cookie(cookieUserKey, base64.encode(JSON.stringify(storeUser)), {expires:7});
};

function forgetPwd(){
   $("#forgetPS form")[0].reset();
   $("#forgetPS div").removeClass("has-error");
   $("#pErrorMessage").remove();
   $("#forgetPS").find("#forgetPSForm").reset();
}

//找回密码验证码是否正确
function checkRretrieve(){
	var errorMsg;
	var $errorMsg = $("#forgetPS").find("#spanForgetPwd");
	$obj = $(obj);
	var loginName = $("#forgetPS").find("#loginName").val();
	var code = $("#forgetPS").find("#code").val();
	if(!CheckTool.checkUserName(loginName)){
    	errorMsg="请输入正确的手机号/邮箱";
    	$errorMsg.html(errorMsg);
    	return false;
    }else{
    	$errorMsg.html("");
    }
	if(!checkUtil.isNumber(code)){
		errorMsg="请输入正确的验证码";
    	$errorMsg.html(errorMsg);
    	return false;
	}else{
		$errorMsg.html("");
    }
	 //发送验证码
	 $.ajax({
        type: "POST",
        url:  ctx.path +"/api/pm/retrievePwdCheck.json",
        data: {loginName:loginName,checkCode:code},
        dataType: "json",
        success: function(data){
       	 if(data.rs==1){
       		$("#forgetPS").modal("hide");
       		window.open(ctx.path+"/resources/platform/views/register.jsp")
       	 }else{
       		 	$errorMsg.html(data.msg);
	        	return false;
	    	 }
    	 }
	 });
}

/**
 * 获取验证码（找回密码）
 */
function generateCheckCodeRretrieve(obj){
	
	var errorMsg;
	var $errorMsg = $("#forgetPS").find("#spanForgetPwd");
	$obj = $(obj);
	var loginName = $("#forgetPS").find("#loginName").val();
	if(!CheckTool.checkUserName(loginName)){
    	errorMsg="请输入正确的手机号/邮箱";
    	$errorMsg.html(errorMsg);
    	return false;
    }else{
    	$("#errorMsg").html("");
    }
	 //发送验证码
	 $.ajax({
         type: "POST",
         url:  ctx.path +"/api/pm/generateCheckCodeForgetPwd.json",
         data: {loginName:loginName},
         dataType: "json",
         success: function(data){
        	 if(data.rs==1){
        		$("#forgetPS").find("#timeLeft").html("重新获取(60 秒)");
  	    		$(obj).attr("disabled","true");
  	    		var codeTime=60;
  	    		var timeInterval=setInterval(function(){
  	    			 if(codeTime==1){
  	    				 	$("#forgetPS").find("#timeLeft").html("重新获取验证码");
  	    				 	$obj.removeAttr("disabled");
  	    				    clearInterval(timeInterval);
  	    				 	return;
  	    			 }
  	    			 codeTime--;
  	    			$("#forgetPS").find("#timeLeft").html("重新获取("+codeTime+" 秒)");
  	             },1000);
  	    		 $errorMsg.html(data.data.checkCode);
 	    	 }else{
 	    		$errorMsg.html(data.msg);
	        	return false;
 	    	 }
     	 }
	 });
}
