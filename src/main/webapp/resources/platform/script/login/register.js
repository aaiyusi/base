 var layerMask ;
$(document).ready(function(){
	$("#loginForm").validate();
	$("#loginName").focus();
	$("#loginForm").find("input").focus(function(){
		$(this).parent().parent().find('div').removeClass('focus');
		$(this).parent().addClass('focus');
	})
});

var errorMsg="";
function registeCheck(obj){
	var $obj = $(obj)
	var loginName = $obj.find("#loginName").val();
	var code = $obj.find("#code").val();
	var pwd = $obj.find("#pwd").val();
	var repwd = $obj.find("#repwd").val();
	var timeLeftMsg = $obj.find("#timeLeft").html();
	
	if(timeLeftMsg=="获取验证码"){
		errorMsg="请获取验证码";
		$obj.find("#errorMsg").html(errorMsg);
    	return false;
	}
	if( !CheckTool.isCode4(code) ){
		errorMsg="请输入正确的验证码";
		$obj.find("#errorMsg").html(errorMsg);
    	return false;
	}
	 
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
	
	if(!CheckTool.checkPwd(repwd)){
    	errorMsg="请输入6-16位确认密码，可由数字、字母或常用符号组合";
    	$obj.find("#errorMsg").html(errorMsg);
    	return false;
    }
	
	if(pwd!=repwd){
		errorMsg="两次输入的密码不一致，请重新输入";
    	$obj.find("#errorMsg").html(errorMsg);
    	return false;
	}
	$.ajax({
		complete:function(XHR, TS){
			layer.close(layerMask);  
        },
        beforeSend:function(XHR){
        	layerMask = layer.load(1);
        },
        type: "POST",
        url:  ctx.path +"/api/pm/registerUser.json",
        data: {loginName:loginName,checkCode:code,pwd:pwd},
        dataType: "json",
        async: false,
        success: function(data){
	       	 if(data.rs==1){
	       		login();
	       	 }else{
	       		$obj.find("#errorMsg").html(data.msg);
	        	return false;
		     }
    	 }
	 });
	return false;
	
	function login(){
		$.ajax({
   	        type: "POST",
   	        url:  ctx.path +"/platform/pm/login.do",
   	        data: {loginName:loginName,pwd:pwd},
   	        dataType: "json",
   	        async: false,
   	        success: function(data){
   		       	 if(data.rs==1){
   		       		 window.location.href=ctx.path+data.data;
   		       	 }else{
   		       		$obj.find("#errorMsg").html("用户名或密码错误");
   		        	return false;
   			     }
   	    	 }
   		 });
	}
}


$("#btn-code1").click(function(){
	var loginName = $("#loginName");
	if(!CheckTool.checkUserName(loginName)){
    	errorMsg="请输入正确的手机号/邮箱";
    	$("#errorMsg").html(errorMsg);
    	return false;
    }
})
	
/**
 * 获取验证码
 */
function generateCheckCode(obj){
	$obj = $(obj);
	var loginName = $("#loginName").val();
	if(!CheckTool.checkUserName(loginName)){
    	errorMsg="请输入正确的手机号/邮箱";
    	$("#errorMsg").html(errorMsg);
    	return false;
    }else{
    	$("#errorMsg").html("");
    }
	 //发送验证码
	 $.ajax({
		 complete:function(XHR, TS){
			layer.close(layerMask);  
         },
         beforeSend:function(XHR){
        	layerMask = layer.load(1);
         },
         type: "POST",
         url:  ctx.path +"/api/pm/generateCheckCodeRegister.json",
         data: {loginName:loginName},
         dataType: "json",
         success: function(data){
        	 if(data.rs==1){
        		$("#timeLeft").html("重新获取</br>(60 秒)");
  	    		$(obj).attr("disabled","true");
  	    		var codeTime=60;
  	    		var timeInterval=setInterval(function(){
  	    			 if(codeTime==1){
  	    				 	$("#timeLeft").html("重新获取");
  	    				 	$obj.removeAttr("disabled");
  	    				    clearInterval(timeInterval);
  	    				 	return;
  	    			 }
  	    			 codeTime--;
  	    			 $("#timeLeft").html("重新获取</br>("+codeTime+" 秒)");
  	             },1000);
  	    		$("#errorMsg").html(data.data.checkCode);
 	    	 }else{
 	    		$("#errorMsg").html(data.msg);
	        	return false;
 	    	 }
     	 }
	 });
}

 