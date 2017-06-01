$(function(){
	$("#addRuleForm").validate({
  		 submitHandler: function(form){
  			 var berror = false;
  			 var count  = 0;
  			 $("input[name='detailType']").each(function(){  
	           if( $(this).prop("checked")){
	  				count ++;
	        	   var n = $(this).val();
	        	   if( n == 1){
	        		   if($("#detailInfo1").val()==''){
							  top.toastr.error("请选择仓库！");
							  berror = true;
							  return;
	        		   }
	        	   }
	        	   if( n == 3){
	        		   if($("#detailInfo3").val().trim()==''){
							  top.toastr.error("请输入邮政编码！");
							  berror = true;
							  return;
	        		   }
	        	   }
	        	   if( n == 6){
	        		   if($("#moneyMin6").val()=='' || $("#moneyMax6").val()==''){
							  top.toastr.error("请输入运费金额范围！");
							  berror = true;
							  return;
	        		   }
	        	   }
	        	   if( n == 7){
	        		   if($("#detailInfo7").val()=='' ){
							  top.toastr.error("请选择商品分类！");
							  berror = true;
							  return;
	        		   }
	        	   }
	        	   if( n == 8){
	        		   if($("#detailInfo8").val().trim()=='' ){
							  top.toastr.error("请输入商品编号！");
							  berror = true;
							  return;
	        		   }
	        	   }
	        	   if( n == 10){
	        		   if($("#detailInfo10").val()=='' ){
							  top.toastr.error("请选择国家！");
							  berror = true;
							  return;
	        		   }
	        	   }
	        	   if( n == 11){
	        		   if($("#detailInfo11").val()=='' ){
							  top.toastr.error("请选择店铺！");
							  berror = true;
							  return;
	        		   }
	        	   }
	        	   if( n == 14){
	        		   if($("#weightMin14").val()=='' || $("#weightMax14").val()==''  ){
							  top.toastr.error("请输入预估重量范围！");
							  berror = true;
							  return;
	        		   }
	        	   }
	           }
	    });  
  			 
  			 if(berror){
  				 return;
  			 }
  			 if(count <= 0){
				  top.toastr.error("至少有一条条件！");
  				 return;
  			 }
			 $(form).ajaxSubmit({
				 layerMaskFlag:true,
			        //表单提交成功后的回调
			        success: function(responseText, statusText, xhr, $form){
			        	if(responseText.rs == 1){
							  top.toastr.success("编辑物流规则成功！");
			        		 parent.refreshGrid();//刷数据
							var index = parent.layer.getFrameIndex(window.name); //先得到当前iframe层的索引
							parent.layer.close(index); //再执行关闭  
			        	}else {
					      	top.toastr.error("操作失败");
					      }
			        },
				      error: function(jqXHR , textStatus , errorThrown){
					      	top.toastr.error("操作失败");
					      }
			    }); 
		 }
	 });
	
	//新增
	$("#addRuleForm").delegate("#btnAdd","click",function(){
		$("#addRuleForm").submit();
	});
	
	//取消
	$("#addRuleForm").delegate("#btnCancel","click",function(){
		var index = parent.layer.getFrameIndex(window.name); //先得到当前iframe层的索引
 		 parent.layer.close(index); //再执行关闭
	});
});