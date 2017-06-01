$(function(){
	$("#addOrderForm").validate({
  		 submitHandler: function(form){
			 $(form).ajaxSubmit({
				   layerMaskFlag:true,
			        //表单提交成功后的回调
			        success: function(responseText, statusText, xhr, $form){
			        	if(responseText.rs == 1){
			        		 parent.refreshGrid();//刷数据
							  top.toastr.success("新增订单成功！");
							  window.location.href = ctx.path + '/api/orders/loadOrderViewPage.do?ordersId='+responseText.data;
							  parent.changeLayerTitle("订单详情");
			        	}
			        }
			    }); 
		 }
	 });
	
	//新增
	$("#addOrderForm").delegate("#btnAdd","click",function(){
		if(checkData()) return;
		$("#addOrderForm").submit();
	});
	
	//取消
	$("#addOrderForm").delegate("#btnCancel","click",function(){
		var index = parent.layer.getFrameIndex(window.name); //先得到当前iframe层的索引
 		 parent.layer.close(index); //再执行关闭
	});
	
	//加载店铺下拉框
	HttpUtil.post(ctx.path + "/api/shop/queryAllShopsList.do", "", function(data){
		var optionStr = '<option value="">-请选择-</option>';
		if(data != null && data.rs == 1){
			$.each(data.data,function(i,n){
				optionStr += '<option value="'+n.shop_id+'">'+n.shop_name+'</option>';
			});
		}
		$("#addOrderForm select[name='shopId']").empty().append(optionStr);
	});
	
	//加载币别下拉框
	HttpUtil.post(ctx.path + "/api/rate/queryAllRateList.do", "", function(data){
		var optionStr = '<option value="">-请选择-</option>';
		if(data != null && data.rs == 1){
			$.each(data.data,function(i,n){
				optionStr += '<option value="'+n.rateId+'">'+n.currencyCode+'</option>';
			});
		}
		$("#addOrderForm select[name='currency']").empty().append(optionStr);
	});
});

//校验格式
function checkData(){
	//订单编号
	var name = $("#addOrderForm input[name='name']").val();
	//订单日期
	var ordersDate = $("#addOrderForm input[name='ordersDate']").val();
	//交易号
	var dealNum = $("#addOrderForm input[name='dealNum']").val();
	//店铺
	var shopId = $("#addOrderForm select[name='shopId']").val();
	//应收邮资
	var customsCode = $("#addOrderForm input[name='customsCode']").val();
	//保险金额
	var insurance = $("#addOrderForm input[name='insurance']").val();
	//应收货款
	var payment = $("#addOrderForm input[name='payment']").val();
	//平台费用
	var cost = $("#addOrderForm input[name='cost']").val();
	//币别
	var currency = $("#addOrderForm select[name='currency']").val();
	//客户id
	var customerId = $("#addOrderForm input[name='customerId']").val();
	//客户姓名
	var customerName = $("#addOrderForm input[name='customerName']").val();
	//订单编号不为空
	if(checkUtil.isNullValue(name)){
		top.toastr.error("订单编号不能为空！");
		return true;
	}else if(!checkUtil.isInt(name)){
		top.toastr.error("订单编号只能为数字！");
		return true;
	}
	
	//订单日期不为空
	if(checkUtil.isNullValue(ordersDate)){
		top.toastr.error("订单时间不能为空！");
		return true;
	}
	
	//交易号不为空
	if(checkUtil.isNullValue(dealNum)){
		top.toastr.error("交易号不能为空！");
		return true;
	}else if(!checkUtil.isInt(dealNum)){
		top.toastr.error("交易号只能为数字！");
		return true;
	}
	
	//店铺id
	if(checkUtil.isNullValue(shopId)){
		top.toastr.error("店铺不能为空！");
		return true;
	}
	
	//应收邮资
	if(!checkUtil.isNullValue(customsCode)){
		if(!checkUtil.isMoney(customsCode)){
			top.toastr.error("应收邮资金额输入不正确！");
			return true;
		}
	}
	
	//保险金额
	if(!checkUtil.isNullValue(insurance)){
		if(!checkUtil.isMoney(insurance)){
			top.toastr.error("保险金额金额输入不正确！");
			return true;
		}
	}
	
	//应收货款
	if(!checkUtil.isNullValue(payment)){
		if(!checkUtil.isMoney(payment)){
			top.toastr.error("应收货款金额输入不正确！");
			return true;
		}
	}
	
	//平台费用
	if(!checkUtil.isNullValue(cost)){
		if(!checkUtil.isMoney(cost)){
			top.toastr.error("平台费用金额输入不正确！");
			return true;
		}
	}
	
	//币别
	if(checkUtil.isNullValue(currency)){
		top.toastr.error("币别不能为空！");
		return true;
	}
	
	//客户id
	if(checkUtil.isNullValue(customerId)){
		top.toastr.error("客户ID不能为空！");
		return true;
	}
	
	//客户姓名
	if(checkUtil.isNullValue(customerName)){
		top.toastr.error("客户姓名不能为空！");
		return true;
	}
	return false;
}