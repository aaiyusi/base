var Scan_Out = {
	initScanOrder : function(){
	
		//单扫单出
		$(".scan-type").bind("change",function(){
			var type = $(this).val();
			var trackSet = $(this).parents(".tab-pane").find(".tracking-set");
			var weightSet = $(this).parents(".tab-pane").find(".weight-set");
			var scanOrder = $(this).parents(".tab-pane").find(".scanorder");
			var trackNumber = $(this).parents(".tab-pane").find(".trackNumber");
			var orderWeight = $(this).parents(".tab-pane").find(".orderWeight");
			var textDanger = $(this).parents(".form-group").find(".loadtext .text-danger");
			
			switch(type){
				case "type1" :
					textDanger.first().show().siblings(".text-danger").hide();
					trackSet.hide();weightSet.hide();
					scanOrder.attr("disabled",false);trackNumber.attr("disabled",true);orderWeight.attr("disabled",true);
					$(".scanorder").val("");
					$(".trackNumber").val("");
					$(".orderWeight").val("");
					$(".scan-log").val("");
					$(".scan-log-error").val("");
					$(".scanorder").focus();
					break;
				case "type2":
					textDanger.last().hide().siblings(".text-danger").show();
					trackSet.show();weightSet.hide();
					scanOrder.attr("disabled",false);trackNumber.attr("disabled",false);orderWeight.attr("disabled",true);
					$(".scanorder").val("");
					$(".trackNumber").val("");
					$(".orderWeight").val("");
					$(".scan-log").val("");
					$(".scan-log-error").val("");
					$(".scanorder").focus();
					break;
				case "type3":
					textDanger.last().hide().siblings(".text-danger").show();
					trackSet.hide();weightSet.show();
					scanOrder.attr("disabled",false);trackNumber.attr("disabled",true);orderWeight.attr("disabled",false);
					$(".scanorder").val("");
					$(".trackNumber").val("");
					$(".orderWeight").val("");
					$(".scan-log").val("");
					$(".scan-log-error").val("");
					$(".scanorder").focus();
					break;
				case "type4":
					textDanger.show();
					trackSet.show();weightSet.show();
					scanOrder.attr("disabled",false);trackNumber.attr("disabled",false);orderWeight.attr("disabled",false);
					$(".scanorder").val("");
					$(".trackNumber").val("");
					$(".orderWeight").val("");
					$(".scan-log").val("");
					$(".scan-log-error").val("");
					$(".scanorder").focus();
					break;
				case "type5":
					textDanger.first().show().siblings(".text-danger").hide();
					trackSet.show();weightSet.hide();
					scanOrder.attr("disabled",true);trackNumber.attr("disabled",false);orderWeight.attr("disabled",true);
					$(".scanorder").val("");
					$(".trackNumber").val("");
					$(".orderWeight").val("");
					$(".scan-log").val("");
					$(".scan-log-error").val("");
					$(".scanorder").focus();
					break;
				case "type6":
					textDanger.last().hide().siblings(".text-danger").show();
					trackSet.show();weightSet.show();
					scanOrder.attr("disabled",true);trackNumber.attr("disabled",false);orderWeight.attr("disabled",false);
					$(".scanorder").val("");
					$(".trackNumber").val("");
					$(".orderWeight").val("");
					$(".scan-log").val("");
					$(".scan-log-error").val("");
					$(".scanorder").focus();
					break;
			}
		});
		
		// 单扫单出  输入订单编号
		$(".scanorder").keypress(function(e){
			var key = e.which;
			if(key == 13){
				var orderid = $.trim($(".scanorder").val());//订单编号
				var scanType = $.trim($(".scan-type").val());//发货格式
				var trackNumber = $.trim($(".trackNumber").val());//货运单号
				var orderweight = $.trim($(".orderWeight").val());//订单重量
				var trackLength = $.trim($(".tracking-digit").val());//物流单号长度
				var weightDigit = $.trim($(".weight-digit").val());//实际与预估重量差额
				var scanlog =$(".scan-log").val().replace(" ","").replace("	","");//去掉空格和TAB
				
				//仅订单编号
				if(scanType == "type1"){
					if(checkUtil.isNullValue(orderid)){//订单编号为空时
						top.toastr.error("订单编号不能为空!");
					}
					
					if(!checkUtil.isNullValue(orderid)){//订单编号不为空时
						var postdata = "orderCode="+orderid+"&scanType="+scanType;
						scanlog += orderid + ",(未处理)" + "\r\n";
						$(".scan-log").val(scanlog);
						Scan_Out.post(Http.sendOrder(), postdata, function(data){
							if(data != null && data.rs == 1){
								var result = data.data.code;
								if(result == 1){//发货成功
									var orderweight = "-";
									var totalWeight = 0;
									if(data.data.weight){
										totalWeight = data.data.weight + "g";
									}
									var htmlstr = "<div class=\"alert alert-success mt5 mb0\"><button aria-hidden=\"true\" data-dismiss=\"alert\" class=\"close\" type=\"button\">×</button>"+
									"<h4 class=\"nm\">操作成功!预估重量为:<span class=\"weight-estimate pl5 pr5\">"+totalWeight+"</span>，实际重量为:<span class=\"weight-actual pl5 pr5\">"+orderweight+"</span>，<span class=\"label-number pl5 pr5\">"+orderid+"</span>设置已发货成功</h4></div>";
									$(".scan-sucess").html(htmlstr);
									//如果成功  那么就把当前订单改成成功
									var scanlog1 = $(".scan-log").val().replace(orderid+",(未处理)",orderid+",(发货成功)");
									$(".scan-log").val(scanlog1);
								}else if(result == -2){//订单不存在
									$(".scanorder").blur();
									$(".trackNumber").blur();
									$(".orderWeight").blur();
									$(".scan-sucess").html("");
									top.toastr.error("操作失败!订单不存在");
									//先获取当前输入的地方
									var error = $(".scan-log").val();
									//将当前的一行找出
									var errors = error.split("\n");
									var errorOrder = "";
									for(var i =0;i<errors.length;i++){
										var resultError = errors[i];
										if(resultError.indexOf(orderid) >=0){
											errorOrder = resultError;
										}
									}
									error = error.replace(errorOrder,"");
									
									$(".scan-log").val(error);
									var scanError = $(".scan-log-error").val();
									//记录错误的信息 
									if(errorOrder.indexOf(")")+1 < errorOrder.length){
										var temperr = errorOrder.substring(0,errorOrder.indexOf(")")+1).replace(orderid+",(未处理)",orderid+",(订单不存在)");
										
										temperr += errorOrder.substring(errorOrder.indexOf(")")+1)+"\r\n";
										$(".scan-log-error").val(temperr);
									}else{
										$(".scan-log-error").val(scanError+errorOrder.replace(orderid+",(未处理)",orderid+",(订单不存在)\r\n"));
									}
								}else if(result == -3){//禁止发货
									$(".scanorder").blur();
									$(".trackNumber").blur();
									$(".orderWeight").blur();
									$(".scan-sucess").html("");
									top.toastr.error("操作失败!订单【"+orderid+"】禁止发货");
									//先获取当前输入的地方
									var error = $(".scan-log").val();
									//将当前的一行找出
									var errors = error.split("\n");
									var errorOrder = "";
									for(var i =0;i<errors.length;i++){
										var resultError = errors[i];
										if(resultError.indexOf(orderid) >=0){
											errorOrder = resultError;
										}
									}
									error = error.replace(errorOrder,"");
									$(".scan-log").val(error);
									var scanError = $(".scan-log-error").val();
									//如果当前错误的信息  不是以)结尾的  那么就截取到 ) 这个位置  然后拼接剩下的  替换之后+\r\n
									if(errorOrder.indexOf(")")+1 < errorOrder.length){
										var temperr = errorOrder.substring(0,errorOrder.indexOf(")")+1).replace(orderid+",(未处理)",orderid+",(禁止发货)");
										temperr += errorOrder.substring(errorOrder.indexOf(")")+1)+"\r\n";
										$(".scan-log-error").val(temperr);
									}else{
										$(".scan-log-error").val(scanError+errorOrder.replace(orderid+",(未处理)",orderid+",(禁止发货)\r\n"));
									}
								}else if(result == -4){//已发货
									$(".scanorder").blur();
									$(".trackNumber").blur();
									$(".orderWeight").blur();
									$(".scan-sucess").html("");
									top.toastr.error("操作失败!订单【"+orderid+"】已发货,不允许重复发货");
									//先获取当前输入的地方
									var error = $(".scan-log").val();
									//将当前的一行找出
									var errors = error.split("\n");
									var errorOrder = "";
									for(var i =0;i<errors.length;i++){
										var resultError = errors[i];
										if(resultError.indexOf(orderid) >=0){
											errorOrder = resultError;
										}
									}
									error = error.replace(errorOrder,"");
									$(".scan-log").val(error);
									var scanError = $(".scan-log-error").val();
									//如果当前错误的信息  不是以)结尾的  那么就截取到 ) 这个位置  然后拼接剩下的  替换之后+\r\n
									if(errorOrder.indexOf(")")+1 < errorOrder.length){
										var temperr = errorOrder.substring(0,errorOrder.indexOf(")")+1).replace(orderid+",(未处理)",orderid+",(已发货)");
										temperr += errorOrder.substring(errorOrder.indexOf(")")+1)+"\r\n";
										$(".scan-log-error").val(temperr);
									}else{

										$(".scan-log-error").val(scanError+errorOrder.replace(orderid+",(未处理)",orderid+",(已发货)\r\n"));
									}

								}else if(result == -5){//作废
									$(".scanorder").blur();
									$(".trackNumber").blur();
									$(".orderWeight").blur();
									$(".scan-sucess").html("");
									top.toastr.error("操作失败!订单【"+orderid+"】状态作废 禁止发货");
									//先获取当前输入的地方
									var error = $(".scan-log").val();
									//将当前的一行找出
									var errors = error.split("\n");
									var errorOrder = "";
									for(var i =0;i<errors.length;i++){
										var resultError = errors[i];
										if(resultError.indexOf(orderid) >=0){
											errorOrder = resultError;
										}
									}
									error = error.replace(errorOrder,"");
									$(".scan-log").val(error);
									var scanError = $(".scan-log-error").val();
									//如果当前错误的信息  不是以)结尾的  那么就截取到 ) 这个位置  然后拼接剩下的  替换之后+\r\n
									if(errorOrder.indexOf(")")+1 < errorOrder.length){
										var temperr = errorOrder.substring(0,errorOrder.indexOf(")")+1).replace(orderid+",(未处理)",orderid+",(作废)");
										temperr += errorOrder.substring(errorOrder.indexOf(")")+1)+"\r\n";
										$(".scan-log-error").val(temperr);
									}else{
										$(".scan-log-error").val(scanError+errorOrder.replace(orderid+",(未处理)",orderid+",(作废)\r\n"));
									}
								}else if(result == -1){
									top.toastr.error("订单编号不能为空");
								}
							}
						});
						//清空数据
						$(".scanorder").val("");
						$(".scanorder").focus();
					}
				}
				
				//扫描订单编号和物流单号type2      扫描订单编号和物流单号和订单重量type4  发货
				if(scanType=="type2" || scanType=="type4"){
					if(checkUtil.isNullValue(orderid)){//订单编号为空时
						top.toastr.error("订单编号不能为空!");
					}
					
					if(!checkUtil.isNullValue(orderid)){//订单编号为空时
						//一扫描订单编号  就自动跳到货运单号那边  并且设置货运单号为空  等待输入
						$(".trackNumber").val("");
						$(".trackNumber").focus();
					}else{
						$(".scanorder").blur();
						return false;
					}
				}
				
				//扫描订单编号和订单重量  发货
				if(scanType=="type3"){
					if(checkUtil.isNullValue(orderid)){//订单编号为空时
						top.toastr.error("订单编号不能为空!");
					}
					
					if(!checkUtil.isNullValue(orderid)){//订单编号为空时
						//一扫描订单编号  就自动跳到货运单号那边  并且设置货运单号为空  等待输入
						$(".orderWeight").val("");
						$(".orderWeight").focus();
					}else{
						$(".scanorder").blur();
						return false;
					}
				}
			}
		});
		
		// 单扫单出  输入货运单号
		$(".trackNumber").keypress(function(e){
			var key = e.which;
			if(key == 13){//回车键
				var orderid = $.trim($(".scanorder").val());//订单编号
				var scanType = $.trim($(".scan-type").val());//发货方式
				var trackNumber = $.trim($(".trackNumber").val());//货运单号
				var orderweight =  $.trim($(".orderWeight").val());//订单重量
				var trackLength =  $.trim($(".tracking-digit").val());//货运单号设置的长度
				var scanlog =$(".scan-log").val().replace(" ","").replace("	","");//去掉空格和TAB
				
				//订单编号和物流单号
				if(scanType == "type2"){
					//订单编号为空
					if(checkUtil.isNullValue(orderid)){
						top.toastr.error("订单编号不能为空!");
						$(".scanorder").focus();
						return false;
					}
					
					//货运单号为空
					if(checkUtil.isNullValue(trackNumber)){
						$(".trackNumber").blur();
						top.toastr.error("货运单号不能为空!");
						$(".trackNumber").focus();
						return false;
					}
					
					//货运单号设置的长度不为空时
					if(!checkUtil.isNullValue(trackLength) && trackLength > 0){
						//如果货运单号不为空  并且货运单号的长度等于设置的物流单号长度  发货
						if(!checkUtil.isNullValue(trackNumber) && trackNumber.length == trackLength){
							var postdata = "orderCode="+orderid+"&trackNumber="+trackNumber+"&scanType="+scanType;
							scanlog += orderid+",(未处理)"+","+trackNumber+"\r\n";
							$(".scan-log").val(scanlog);
							Scan_Out.post(Http.sendOrder(), postdata, function(data){
								if(data != null && data.rs == 1){
									var result = data.data.code;
									if(result == 1){//发货成功
										var orderweight = "-";
										var totalWeight = 0;
										if(data.data.weight){
											totalWeight = data.data.weight + "g";
										}
										var htmlstr = "<div class=\"alert alert-success mt5 mb0\"><button aria-hidden=\"true\" data-dismiss=\"alert\" class=\"close\" type=\"button\">×</button>"+
										"<h4 class=\"nm\">操作成功!预估重量为:<span class=\"weight-estimate pl5 pr5\">"+totalWeight+"</span>，实际重量为:<span class=\"weight-actual pl5 pr5\">"+orderweight+"</span>，<span class=\"label-number pl5 pr5\">"+orderid+"</span>设置已发货成功</h4></div>";
										$(".scan-sucess").html(htmlstr);
										//如果成功  那么就把当前订单改成成功
										var scanlog1 = $(".scan-log").val().replace(orderid+",(未处理)"+","+trackNumber,orderid+",(发货成功)"+","+trackNumber);
										$(".scan-log").val(scanlog1);
									}else if(result == -2){//订单不存在
										$(".scanorder").blur();
										$(".trackNumber").blur();
										$(".orderWeight").blur();
										$(".scan-sucess").html("");
										top.toastr.error("操作失败!订单不存在");
										//先获取当前输入的地方
										var error = $(".scan-log").val();
										//将当前的一行找出
										var errors = error.split("\n");
										var errorOrder = "";
										for(var i =0;i<errors.length;i++){
											var resultError = errors[i];
											if(resultError.indexOf(orderid) >=0){
												errorOrder = resultError;
											}
										}
										error = error.replace(errorOrder,"");
										
										$(".scan-log").val(error);
										var scanError = $(".scan-log-error").val();
										//记录错误的信息 
										if(errorOrder.indexOf(")")+1 < errorOrder.length){
											var temperr = errorOrder.substring(0,errorOrder.indexOf(")")+1).replace(orderid+",(未处理)",orderid+",(订单不存在)");
											
											temperr += errorOrder.substring(errorOrder.indexOf(")")+1)+"\r\n";
											$(".scan-log-error").val(temperr);
										}else{
											$(".scan-log-error").val(scanError+errorOrder.replace(orderid+",(未处理)"+","+trackNumber,orderid+",(订单不存在)"+","+trackNumber+"\r\n"));
										}
									}else if(result == -3){//禁止发货
										$(".scanorder").blur();
										$(".trackNumber").blur();
										$(".orderWeight").blur();
										$(".scan-sucess").html("");
										top.toastr.error("操作失败!订单【"+orderid+"】禁止发货");
										//先获取当前输入的地方
										var error = $(".scan-log").val();
										//将当前的一行找出
										var errors = error.split("\n");
										var errorOrder = "";
										for(var i =0;i<errors.length;i++){
											var resultError = errors[i];
											if(resultError.indexOf(orderid) >=0){
												errorOrder = resultError;
											}
										}
										error = error.replace(errorOrder,"");
										$(".scan-log").val(error);
										var scanError = $(".scan-log-error").val();
										//如果当前错误的信息  不是以)结尾的  那么就截取到 ) 这个位置  然后拼接剩下的  替换之后+\r\n
										if(errorOrder.indexOf(")")+1 < errorOrder.length){
											var temperr = errorOrder.substring(0,errorOrder.indexOf(")")+1).replace(orderid+",(未处理)",orderid+",(禁止发货)");
											temperr += errorOrder.substring(errorOrder.indexOf(")")+1)+"\r\n";
											$(".scan-log-error").val(temperr);
										}else{
											$(".scan-log-error").val(scanError+errorOrder.replace(orderid+",(未处理)"+","+trackNumber,orderid+",(禁止发货)"+","+trackNumber+"\r\n"));
										}
									}else if(result == -4){//已发货
										$(".scanorder").blur();
										$(".trackNumber").blur();
										$(".orderWeight").blur();
										$(".scan-sucess").html("");
										top.toastr.error("操作失败!订单【"+orderid+"】已发货,不允许重复发货");
										//先获取当前输入的地方
										var error = $(".scan-log").val();
										//将当前的一行找出
										var errors = error.split("\n");
										var errorOrder = "";
										for(var i =0;i<errors.length;i++){
											var resultError = errors[i];
											if(resultError.indexOf(orderid) >=0){
												errorOrder = resultError;
											}
										}
										error = error.replace(errorOrder,"");
										$(".scan-log").val(error);
										var scanError = $(".scan-log-error").val();
										//如果当前错误的信息  不是以)结尾的  那么就截取到 ) 这个位置  然后拼接剩下的  替换之后+\r\n
										if(errorOrder.indexOf(")")+1 < errorOrder.length){
											var temperr = errorOrder.substring(0,errorOrder.indexOf(")")+1).replace(orderid+",(未处理)",orderid+",(已发货)");
											temperr += errorOrder.substring(errorOrder.indexOf(")")+1)+"\r\n";
											$(".scan-log-error").val(temperr);
										}else{

											$(".scan-log-error").val(scanError+errorOrder.replace(orderid+",(未处理)"+","+trackNumber,orderid+",(已发货)"+","+trackNumber+"\r\n"));
										}

									}else if(result == -5){//作废
										$(".scanorder").blur();
										$(".trackNumber").blur();
										$(".orderWeight").blur();
										$(".scan-sucess").html("");
										top.toastr.error("操作失败!订单【"+orderid+"】状态作废 禁止发货");
										//先获取当前输入的地方
										var error = $(".scan-log").val();
										//将当前的一行找出
										var errors = error.split("\n");
										var errorOrder = "";
										for(var i =0;i<errors.length;i++){
											var resultError = errors[i];
											if(resultError.indexOf(orderid) >=0){
												errorOrder = resultError;
											}
										}
										error = error.replace(errorOrder,"");
										$(".scan-log").val(error);
										var scanError = $(".scan-log-error").val();
										//如果当前错误的信息  不是以)结尾的  那么就截取到 ) 这个位置  然后拼接剩下的  替换之后+\r\n
										if(errorOrder.indexOf(")")+1 < errorOrder.length){
											var temperr = errorOrder.substring(0,errorOrder.indexOf(")")+1).replace(orderid+",(未处理)",orderid+",(作废)");
											temperr += errorOrder.substring(errorOrder.indexOf(")")+1)+"\r\n";
											$(".scan-log-error").val(temperr);
										}else{
											$(".scan-log-error").val(scanError+errorOrder.replace(orderid+",(未处理)",orderid+"+","+trackNumber,(作废)"+","+trackNumber+"\r\n"));
										}
									}else if(result == -1){
										top.toastr.error("订单编号和货运单号不能为空");
									}
								}
							});
							$(".scanorder").val("");
							$(".trackNumber").val("");
							$(".scanorder").focus();
						}else{//否则提示错误信息
							$(".trackNumber").blur();
							top.toastr.error("物流单号长度【"+trackNumber.length+"】与预设长度不符!");
//							$(".trackNumber").val("");
							$(".trackNumber").focus();
							return false;
						}
					}else{//物流单号长度为空时直接发货
						var postdata = "orderCode="+orderid+"&trackNumber="+trackNumber+"&scanType="+scanType;
						scanlog += orderid+",(未处理)"+","+trackNumber+"\r\n";
						$(".scan-log").val(scanlog);
						Scan_Out.post(Http.sendOrder(), postdata, function(data){
							if(data != null && data.rs == 1){
								var result = data.data.code;
								if(result == 1){//发货成功
									var orderweight = "-";
									var totalWeight = 0;
									if(data.data.weight){
										totalWeight = data.data.weight + "g";
									}
									var htmlstr = "<div class=\"alert alert-success mt5 mb0\"><button aria-hidden=\"true\" data-dismiss=\"alert\" class=\"close\" type=\"button\">×</button>"+
									"<h4 class=\"nm\">操作成功!预估重量为:<span class=\"weight-estimate pl5 pr5\">"+totalWeight+"</span>，实际重量为:<span class=\"weight-actual pl5 pr5\">"+orderweight+"</span>，<span class=\"label-number pl5 pr5\">"+orderid+"</span>设置已发货成功</h4></div>";
									$(".scan-sucess").html(htmlstr);
									//如果成功  那么就把当前订单改成成功
									var scanlog1 = $(".scan-log").val().replace(orderid+",(未处理)"+","+trackNumber,orderid+",(发货成功)"+","+trackNumber);
									$(".scan-log").val(scanlog1);
								}else if(result == -2){//订单不存在
									$(".scanorder").blur();
									$(".trackNumber").blur();
									$(".orderWeight").blur();
									$(".scan-sucess").html("");
									top.toastr.error("操作失败!订单不存在");
									//先获取当前输入的地方
									var error = $(".scan-log").val();
									//将当前的一行找出
									var errors = error.split("\n");
									var errorOrder = "";
									for(var i =0;i<errors.length;i++){
										var resultError = errors[i];
										if(resultError.indexOf(orderid) >=0){
											errorOrder = resultError;
										}
									}
									error = error.replace(errorOrder,"");
									
									$(".scan-log").val(error);
									var scanError = $(".scan-log-error").val();
									//记录错误的信息 
									if(errorOrder.indexOf(")")+1 < errorOrder.length){
										var temperr = errorOrder.substring(0,errorOrder.indexOf(")")+1).replace(orderid+",(未处理)",orderid+",(订单不存在)");
										
										temperr += errorOrder.substring(errorOrder.indexOf(")")+1)+"\r\n";
										$(".scan-log-error").val(temperr);
									}else{
										$(".scan-log-error").val(scanError+errorOrder.replace(orderid+",(未处理)"+","+trackNumber,orderid+",(订单不存在)"+","+trackNumber+"\r\n"));
									}
								}else if(result == -3){//禁止发货
									$(".scanorder").blur();
									$(".trackNumber").blur();
									$(".orderWeight").blur();
									$(".scan-sucess").html("");
									top.toastr.error("操作失败!订单【"+orderid+"】禁止发货");
									//先获取当前输入的地方
									var error = $(".scan-log").val();
									//将当前的一行找出
									var errors = error.split("\n");
									var errorOrder = "";
									for(var i =0;i<errors.length;i++){
										var resultError = errors[i];
										if(resultError.indexOf(orderid) >=0){
											errorOrder = resultError;
										}
									}
									error = error.replace(errorOrder,"");
									$(".scan-log").val(error);
									var scanError = $(".scan-log-error").val();
									//如果当前错误的信息  不是以)结尾的  那么就截取到 ) 这个位置  然后拼接剩下的  替换之后+\r\n
									if(errorOrder.indexOf(")")+1 < errorOrder.length){
										var temperr = errorOrder.substring(0,errorOrder.indexOf(")")+1).replace(orderid+",(未处理)",orderid+",(禁止发货)");
										temperr += errorOrder.substring(errorOrder.indexOf(")")+1)+"\r\n";
										$(".scan-log-error").val(temperr);
									}else{
										$(".scan-log-error").val(scanError+errorOrder.replace(orderid+",(未处理)"+","+trackNumber,orderid+",(禁止发货)"+","+trackNumber+"\r\n"));
									}
								}else if(result == -4){//已发货
									$(".scanorder").blur();
									$(".trackNumber").blur();
									$(".orderWeight").blur();
									$(".scan-sucess").html("");
									top.toastr.error("操作失败!订单【"+orderid+"】已发货,不允许重复发货");
									//先获取当前输入的地方
									var error = $(".scan-log").val();
									//将当前的一行找出
									var errors = error.split("\n");
									var errorOrder = "";
									for(var i =0;i<errors.length;i++){
										var resultError = errors[i];
										if(resultError.indexOf(orderid) >=0){
											errorOrder = resultError;
										}
									}
									error = error.replace(errorOrder,"");
									$(".scan-log").val(error);
									var scanError = $(".scan-log-error").val();
									//如果当前错误的信息  不是以)结尾的  那么就截取到 ) 这个位置  然后拼接剩下的  替换之后+\r\n
									if(errorOrder.indexOf(")")+1 < errorOrder.length){
										var temperr = errorOrder.substring(0,errorOrder.indexOf(")")+1).replace(orderid+",(未处理)",orderid+",(已发货)");
										temperr += errorOrder.substring(errorOrder.indexOf(")")+1)+"\r\n";
										$(".scan-log-error").val(temperr);
									}else{

										$(".scan-log-error").val(scanError+errorOrder.replace(orderid+",(未处理)"+","+trackNumber,orderid+",(已发货)"+","+trackNumber+"\r\n"));
									}

								}else if(result == -5){//作废
									$(".scanorder").blur();
									$(".trackNumber").blur();
									$(".orderWeight").blur();
									$(".scan-sucess").html("");
									top.toastr.error("操作失败!订单【"+orderid+"】状态作废 禁止发货");
									//先获取当前输入的地方
									var error = $(".scan-log").val();
									//将当前的一行找出
									var errors = error.split("\n");
									var errorOrder = "";
									for(var i =0;i<errors.length;i++){
										var resultError = errors[i];
										if(resultError.indexOf(orderid) >=0){
											errorOrder = resultError;
										}
									}
									error = error.replace(errorOrder,"");
									$(".scan-log").val(error);
									var scanError = $(".scan-log-error").val();
									//如果当前错误的信息  不是以)结尾的  那么就截取到 ) 这个位置  然后拼接剩下的  替换之后+\r\n
									if(errorOrder.indexOf(")")+1 < errorOrder.length){
										var temperr = errorOrder.substring(0,errorOrder.indexOf(")")+1).replace(orderid+",(未处理)",orderid+",(作废)");
										temperr += errorOrder.substring(errorOrder.indexOf(")")+1)+"\r\n";
										$(".scan-log-error").val(temperr);
									}else{
										$(".scan-log-error").val(scanError+errorOrder.replace(orderid+",(未处理)"+","+trackNumber,orderid+",(作废)"+","+trackNumber+"\r\n"));
									}
								}else if(result == -1){
									top.toastr.error("订单编号和货运单号不能为空");
								}
							}
						});
						$(".scanorder").val("");
						$(".trackNumber").val("");
						$(".scanorder").focus();
					}
				}
				
				//订单编号,物流单号,订单重量方式发货
				if(scanType == "type4"){
					//订单编号为空
					if(checkUtil.isNullValue(orderid)){
						top.toastr.error("订单编号不能为空!");
						$(".scanorder").focus();
						return false;
					}
					
					//货运单号为空
					if(checkUtil.isNullValue(trackNumber)){
						$(".trackNumber").blur();
						top.toastr.error("货运单号不能为空!");
						$(".trackNumber").focus();
						return false;
					}
					
					//货运单号设置的长度不为空时
					if(!checkUtil.isNullValue(trackLength) && trackLength > 0){
						//如果货运单号不为空  并且货运单号的长度等于设置的物流单号长度  发货
						if(!checkUtil.isNullValue(trackNumber) && trackNumber.length == trackLength){
							$(".orderWeight").val("");
							$(".orderWeight").focus();
						}else{
							$(".trackNumber").blur();
							top.toastr.error("物流单号长度【"+trackNumber.length+"】与预设长度不符!");
//							$(".trackNumber").val("");
							$(".trackNumber").focus();
							return false;
						}
					}else{//如果没有设置物流单号长度
						$(".orderWeight").val("");
						$(".orderWeight").focus();
					}
				}
				
				//仅物流单号发货
				if(scanType == "type5"){

					//货运单号为空
					if(checkUtil.isNullValue(trackNumber)){
						$(".trackNumber").blur();
						top.toastr.error("货运单号不能为空!");
						$(".trackNumber").focus();
						return false;
					}
					
					//货运单号设置的长度不为空时
					if(!checkUtil.isNullValue(trackLength) && trackLength > 0){
						//如果货运单号不为空  并且货运单号的长度等于设置的物流单号长度  发货
						if(!checkUtil.isNullValue(trackNumber) && trackNumber.length == trackLength){
							var postdata = "trackNumber="+trackNumber+"&scanType="+scanType;
							scanlog +=  trackNumber+",(未处理)"+"\r\n";
							$(".scan-log").val(scanlog);
							Scan_Out.post(Http.sendOrder(), postdata, function(data){
								if(data != null && data.rs == 1){
									var result = data.data.code;
									if(result == 1){//发货成功
										var orderweight = "-";
										var totalWeight = 0;
										if(data.data.weight){
											totalWeight = data.data.weight + "g";
										}
										var htmlstr = "<div class=\"alert alert-success mt5 mb0\"><button aria-hidden=\"true\" data-dismiss=\"alert\" class=\"close\" type=\"button\">×</button>"+
										"<h4 class=\"nm\">操作成功!预估重量为:<span class=\"weight-estimate pl5 pr5\">"+totalWeight+"</span>，实际重量为:<span class=\"weight-actual pl5 pr5\">"+orderweight+"</span>，<span class=\"label-number pl5 pr5\">"+trackNumber+"</span>设置已发货成功</h4></div>";
										$(".scan-sucess").html(htmlstr);
										//如果成功  那么就把当前订单改成成功
										var scanlog1 = $(".scan-log").val().replace(trackNumber+",(未处理)",trackNumber+",(发货成功)");
										$(".scan-log").val(scanlog1);
									}else if(result == -2){//订单不存在
										$(".scanorder").blur();
										$(".trackNumber").blur();
										$(".orderWeight").blur();
										$(".scan-sucess").html("");
										top.toastr.error("操作失败!订单不存在");
										//先获取当前输入的地方
										var error = $(".scan-log").val();
										//将当前的一行找出
										var errors = error.split("\n");
										var errorOrder = "";
										for(var i =0;i<errors.length;i++){
											var resultError = errors[i];
											if(resultError.indexOf(trackNumber) >=0){
												errorOrder = resultError;
											}
										}
										error = error.replace(errorOrder,"");
										
										$(".scan-log").val(error);
										var scanError = $(".scan-log-error").val();
										//记录错误的信息 
										if(errorOrder.indexOf(")")+1 < errorOrder.length){
											var temperr = errorOrder.substring(0,errorOrder.indexOf(")")+1).replace(trackNumber+",(未处理)",trackNumber+",(订单不存在)");
											
											temperr += errorOrder.substring(errorOrder.indexOf(")")+1)+"\r\n";
											$(".scan-log-error").val(temperr);
										}else{
											$(".scan-log-error").val(scanError+errorOrder.replace(trackNumber+",(未处理)",trackNumber+",(订单不存在)\r\n"));
										}
									}else if(result == -3){//禁止发货
										$(".scanorder").blur();
										$(".trackNumber").blur();
										$(".orderWeight").blur();
										$(".scan-sucess").html("");
										top.toastr.error("操作失败!该订单禁止发货");
										//先获取当前输入的地方
										var error = $(".scan-log").val();
										//将当前的一行找出
										var errors = error.split("\n");
										var errorOrder = "";
										for(var i =0;i<errors.length;i++){
											var resultError = errors[i];
											if(resultError.indexOf(trackNumber) >=0){
												errorOrder = resultError;
											}
										}
										error = error.replace(errorOrder,"");
										$(".scan-log").val(error);
										var scanError = $(".scan-log-error").val();
										//如果当前错误的信息  不是以)结尾的  那么就截取到 ) 这个位置  然后拼接剩下的  替换之后+\r\n
										if(errorOrder.indexOf(")")+1 < errorOrder.length){
											var temperr = errorOrder.substring(0,errorOrder.indexOf(")")+1).replace(trackNumber+",(未处理)",trackNumber+",(禁止发货)");
											temperr += errorOrder.substring(errorOrder.indexOf(")")+1)+"\r\n";
											$(".scan-log-error").val(temperr);
										}else{
											$(".scan-log-error").val(scanError+errorOrder.replace(trackNumber+",(未处理)",trackNumber+",(禁止发货)\r\n"));
										}
									}else if(result == -4){//已发货
										$(".scanorder").blur();
										$(".trackNumber").blur();
										$(".orderWeight").blur();
										$(".scan-sucess").html("");
										top.toastr.error("操作失败!该订单已发货,不允许重复发货");
										//先获取当前输入的地方
										var error = $(".scan-log").val();
										//将当前的一行找出
										var errors = error.split("\n");
										var errorOrder = "";
										for(var i =0;i<errors.length;i++){
											var resultError = errors[i];
											if(resultError.indexOf(trackNumber) >=0){
												errorOrder = resultError;
											}
										}
										error = error.replace(errorOrder,"");
										$(".scan-log").val(error);
										var scanError = $(".scan-log-error").val();
										//如果当前错误的信息  不是以)结尾的  那么就截取到 ) 这个位置  然后拼接剩下的  替换之后+\r\n
										if(errorOrder.indexOf(")")+1 < errorOrder.length){
											var temperr = errorOrder.substring(0,errorOrder.indexOf(")")+1).replace(trackNumber+",(未处理)",trackNumber+",(已发货)");
											temperr += errorOrder.substring(errorOrder.indexOf(")")+1)+"\r\n";
											$(".scan-log-error").val(temperr);
										}else{

											$(".scan-log-error").val(scanError+errorOrder.replace(trackNumber+",(未处理)",trackNumber+",(已发货)\r\n"));
										}

									}else if(result == -5){//作废
										$(".scanorder").blur();
										$(".trackNumber").blur();
										$(".orderWeight").blur();
										$(".scan-sucess").html("");
										top.toastr.error("操作失败!该订单状态作废 禁止发货");
										//先获取当前输入的地方
										var error = $(".scan-log").val();
										//将当前的一行找出
										var errors = error.split("\n");
										var errorOrder = "";
										for(var i =0;i<errors.length;i++){
											var resultError = errors[i];
											if(resultError.indexOf(trackNumber) >=0){
												errorOrder = resultError;
											}
										}
										error = error.replace(errorOrder,"");
										$(".scan-log").val(error);
										var scanError = $(".scan-log-error").val();
										//如果当前错误的信息  不是以)结尾的  那么就截取到 ) 这个位置  然后拼接剩下的  替换之后+\r\n
										if(errorOrder.indexOf(")")+1 < errorOrder.length){
											var temperr = errorOrder.substring(0,errorOrder.indexOf(")")+1).replace(trackNumber+",(未处理)",trackNumber+",(作废)");
											temperr += errorOrder.substring(errorOrder.indexOf(")")+1)+"\r\n";
											$(".scan-log-error").val(temperr);
										}else{
											$(".scan-log-error").val(scanError+errorOrder.replace(trackNumber+",(未处理)",trackNumber+",(作废)\r\n"));
										}
									}else if(result == -1){
										top.toastr.error("货运单号不能为空！");
									}
								}
							});
							$(".orderWeight").val("");
							$(".orderWeight").focus();
						}else{
							$(".trackNumber").blur();
							top.toastr.error("物流单号长度【"+trackNumber.length+"】与预设长度不符!");
//							$(".trackNumber").val("");
							$(".trackNumber").focus();
							return false;
						}
					}else{//如果没有设置物流单号长度
						var postdata = "trackNumber="+trackNumber+"&scanType="+scanType;
						scanlog +=  trackNumber+",(未处理)"+"\r\n";
						$(".scan-log").val(scanlog);
						Scan_Out.post(Http.sendOrder(), postdata, function(data){
							if(data != null){
								var result = data.data.code;
								if(result == 1){//发货成功
									var orderweight = "-";
									var totalWeight = 0;
									if(data.data.weight){
										totalWeight = data.data.weight + "g";
									}
									var htmlstr = "<div class=\"alert alert-success mt5 mb0\"><button aria-hidden=\"true\" data-dismiss=\"alert\" class=\"close\" type=\"button\">×</button>"+
									"<h4 class=\"nm\">操作成功!预估重量为:<span class=\"weight-estimate pl5 pr5\">"+totalWeight+"</span>，实际重量为:<span class=\"weight-actual pl5 pr5\">"+orderweight+"</span>，<span class=\"label-number pl5 pr5\">"+trackNumber+"</span>设置已发货成功</h4></div>";
									$(".scan-sucess").html(htmlstr);
									//如果成功  那么就把当前订单改成成功
									var scanlog1 = $(".scan-log").val().replace(trackNumber+",(未处理)",trackNumber+",(发货成功)");
									$(".scan-log").val(scanlog1);
								}else if(result == -2){//订单不存在
									$(".scanorder").blur();
									$(".trackNumber").blur();
									$(".orderWeight").blur();
									$(".scan-sucess").html("");
									top.toastr.error("操作失败!订单不存在");
									//先获取当前输入的地方
									var error = $(".scan-log").val();
									//将当前的一行找出
									var errors = error.split("\n");
									var errorOrder = "";
									for(var i =0;i<errors.length;i++){
										var resultError = errors[i];
										if(resultError.indexOf(trackNumber) >=0){
											errorOrder = resultError;
										}
									}
									error = error.replace(errorOrder,"");
									
									$(".scan-log").val(error);
									var scanError = $(".scan-log-error").val();
									//记录错误的信息 
									if(errorOrder.indexOf(")")+1 < errorOrder.length){
										var temperr = errorOrder.substring(0,errorOrder.indexOf(")")+1).replace(trackNumber+",(未处理)",trackNumber+",(订单不存在)");
										
										temperr += errorOrder.substring(errorOrder.indexOf(")")+1)+"\r\n";
										$(".scan-log-error").val(temperr);
									}else{
										$(".scan-log-error").val(scanError+errorOrder.replace(trackNumber+",(未处理)",trackNumber+",(订单不存在)\r\n"));
									}
								}else if(result == -3){//禁止发货
									$(".scanorder").blur();
									$(".trackNumber").blur();
									$(".orderWeight").blur();
									$(".scan-sucess").html("");
									top.toastr.error("操作失败!该订单禁止发货");
									//先获取当前输入的地方
									var error = $(".scan-log").val();
									//将当前的一行找出
									var errors = error.split("\n");
									var errorOrder = "";
									for(var i =0;i<errors.length;i++){
										var resultError = errors[i];
										if(resultError.indexOf(trackNumber) >=0){
											errorOrder = resultError;
										}
									}
									error = error.replace(errorOrder,"");
									$(".scan-log").val(error);
									var scanError = $(".scan-log-error").val();
									//如果当前错误的信息  不是以)结尾的  那么就截取到 ) 这个位置  然后拼接剩下的  替换之后+\r\n
									if(errorOrder.indexOf(")")+1 < errorOrder.length){
										var temperr = errorOrder.substring(0,errorOrder.indexOf(")")+1).replace(trackNumber+",(未处理)",trackNumber+",(禁止发货)");
										temperr += errorOrder.substring(errorOrder.indexOf(")")+1)+"\r\n";
										$(".scan-log-error").val(temperr);
									}else{
										$(".scan-log-error").val(scanError+errorOrder.replace(trackNumber+",(未处理)",trackNumber+",(禁止发货)\r\n"));
									}
								}else if(result == -4){//已发货
									$(".scanorder").blur();
									$(".trackNumber").blur();
									$(".orderWeight").blur();
									$(".scan-sucess").html("");
									top.toastr.error("操作失败!该订单已发货,不允许重复发货");
									//先获取当前输入的地方
									var error = $(".scan-log").val();
									//将当前的一行找出
									var errors = error.split("\n");
									var errorOrder = "";
									for(var i =0;i<errors.length;i++){
										var resultError = errors[i];
										if(resultError.indexOf(trackNumber) >=0){
											errorOrder = resultError;
										}
									}
									error = error.replace(errorOrder,"");
									$(".scan-log").val(error);
									var scanError = $(".scan-log-error").val();
									//如果当前错误的信息  不是以)结尾的  那么就截取到 ) 这个位置  然后拼接剩下的  替换之后+\r\n
									if(errorOrder.indexOf(")")+1 < errorOrder.length){
										var temperr = errorOrder.substring(0,errorOrder.indexOf(")")+1).replace(trackNumber+",(未处理)",trackNumber+",(已发货)");
										temperr += errorOrder.substring(errorOrder.indexOf(")")+1)+"\r\n";
										$(".scan-log-error").val(temperr);
									}else{

										$(".scan-log-error").val(scanError+errorOrder.replace(trackNumber+",(未处理)",trackNumber+",(已发货)\r\n"));
									}

								}else if(result == -5){//作废
									$(".scanorder").blur();
									$(".trackNumber").blur();
									$(".orderWeight").blur();
									$(".scan-sucess").html("");
									top.toastr.error("操作失败!该订单状态作废 禁止发货");
									//先获取当前输入的地方
									var error = $(".scan-log").val();
									//将当前的一行找出
									var errors = error.split("\n");
									var errorOrder = "";
									for(var i =0;i<errors.length;i++){
										var resultError = errors[i];
										if(resultError.indexOf(trackNumber) >=0){
											errorOrder = resultError;
										}
									}
									error = error.replace(errorOrder,"");
									$(".scan-log").val(error);
									var scanError = $(".scan-log-error").val();
									//如果当前错误的信息  不是以)结尾的  那么就截取到 ) 这个位置  然后拼接剩下的  替换之后+\r\n
									if(errorOrder.indexOf(")")+1 < errorOrder.length){
										var temperr = errorOrder.substring(0,errorOrder.indexOf(")")+1).replace(trackNumber+",(未处理)",trackNumber+",(作废)");
										temperr += errorOrder.substring(errorOrder.indexOf(")")+1)+"\r\n";
										$(".scan-log-error").val(temperr);
									}else{
										$(".scan-log-error").val(scanError+errorOrder.replace(trackNumber+",(未处理)",trackNumber+",(作废)\r\n"));
									}
								}else if(result == -1){
									top.toastr.error("货运单号不能为空！");
								}
							}
						});
						//结束后  把货运单号置为空
						$(".trackNumber").val("");
						$(".trackNumber").focus();
					}
				}
				
				//物流单号和订单重量 发货
				if(scanType == "type6"){
					//货运单号为空时
					if(checkUtil.isNullValue(trackNumber)){
						top.toastr.error("货运单号不能为空！");
						$(".trackNumber").focus();
						return false;
					}
					
					//货运单号设置的长度不为空时
					if(!checkUtil.isNullValue(trackLength) && trackLength > 0){
						//如果货运单号不为空  并且货运单号的长度等于设置的物流单号长度  发货
						if(!checkUtil.isNullValue(trackNumber) && trackNumber.length == trackLength){
							$(".orderWeight").val("");
							$(".orderWeight").focus();
						}else{
							$(".trackNumber").blur();
							top.toastr.error("物流单号长度【"+trackNumber.length+"】与预设长度不符!");
//							$(".trackNumber").val("");
							$(".trackNumber").focus();
							return false;
						}
					}else{//如果没有设置货运单号长度  那么就自动进入  称重
						$(".orderWeight").val("");
						$(".orderWeight").focus();
					}
				}
			}
		});
		
		//单扫单出  输入订单重量
		$(".orderWeight").keypress(function(e){
			var key = e.which;
			if(key == 13){
				var orderid =  $.trim($(".scanorder").val());//订单编号
				var scanType =  $.trim($(".scan-type").val());//发货方式
				var trackNumber =  $.trim($(".trackNumber").val());//货运单号
				var orderweight =  $.trim($(".orderWeight").val());//订单重量
				var trackLength =  $.trim($(".tracking-digit").val());//货运单号设置的长度
				var  weightDigit =  $.trim($(".weight-digit").val());//实际重量与预估重量的差额百分比
				var scanlog =$(".scan-log").val().replace(" ","").replace("	","");//去掉空格和TAB
				
				//订单编号和订单重量发货方式
				if(scanType == "type3"){
					if(checkUtil.isNullValue(orderid)){//订单编号为空时
						top.toastr.error("订单编号不能为空！");
						$(".scanorder").focus();
						$(".orderWeight").val("");
						return false;
					}
					
					//订单重量为空时
					if(checkUtil.isNullValue(orderweight)){
						top.toastr.error("订单重量不能为空！");
						$(".orderWeight").focus();
						return false;
					}
					
					//订单编号和订单重量不为空时
					if(!checkUtil.isNullValue(orderid) && !checkUtil.isNullValue(orderweight)){
						var postdata = "orderCode="+orderid+"&orderweight="+orderweight+"&scanType="+scanType+"&weightDigit="+weightDigit;
						scanlog += orderid+",(未处理)"+","+orderweight+"\r\n";
						$(".scan-log").val(scanlog);
						Scan_Out.post(Http.sendOrder(), postdata, function(data){
							if(data != null && data.rs == 1){
								var result = data.data.code;
								if(result == 1){//发货成功
									var totalWeight = 0;
									if(data.data.weight){
										totalWeight = data.data.weight;
									}
									var htmlstr = "<div class=\"alert alert-success mt5 mb0\"><button aria-hidden=\"true\" data-dismiss=\"alert\" class=\"close\" type=\"button\">×</button>"+
									"<h4 class=\"nm\">操作成功!预估重量为:<span class=\"weight-estimate pl5 pr5\">"+totalWeight+"g</span>，实际重量为:<span class=\"weight-actual pl5 pr5\">"+orderweight+"</span>，<span class=\"label-number pl5 pr5\">"+orderid+"</span>设置已发货成功</h4></div>";
									$(".scan-sucess").html(htmlstr);
									//如果成功  那么就把当前订单改成成功
									var scanlog1 = $(".scan-log").val().replace(orderid+",(未处理)"+","+orderweight,orderid+",(发货成功)"+","+orderweight);
									$(".scan-log").val(scanlog1);
								}else if(result == -2){//订单不存在
									$(".scanorder").blur();
									$(".trackNumber").blur();
									$(".orderWeight").blur();
									$(".scan-sucess").html("");
									top.toastr.error("操作失败!订单不存在");
									//先获取当前输入的地方
									var error = $(".scan-log").val();
									//将当前的一行找出
									var errors = error.split("\n");
									var errorOrder = "";
									for(var i =0;i<errors.length;i++){
										var resultError = errors[i];
										if(resultError.indexOf(orderid) >=0){
											errorOrder = resultError;
										}
									}
									error = error.replace(errorOrder,"");
									
									$(".scan-log").val(error);
									var scanError = $(".scan-log-error").val();
									//记录错误的信息 
									if(errorOrder.indexOf(")")+1 < errorOrder.length){
										var temperr = errorOrder.substring(0,errorOrder.indexOf(")")+1).replace(orderid+",(未处理)",orderid+",(订单不存在)");
										
										temperr += errorOrder.substring(errorOrder.indexOf(")")+1)+"\r\n";
										$(".scan-log-error").val(temperr);
									}else{
										$(".scan-log-error").val(scanError+errorOrder.replace(orderid+",(未处理)"+","+orderweight,orderid+",(订单不存在)"+","+orderweight+"\r\n"));
									}
								}else if(result == -3){//禁止发货
									$(".scanorder").blur();
									$(".trackNumber").blur();
									$(".orderWeight").blur();
									$(".scan-sucess").html("");
									top.toastr.error("操作失败!订单【"+orderid+"】禁止发货");
									//先获取当前输入的地方
									var error = $(".scan-log").val();
									//将当前的一行找出
									var errors = error.split("\n");
									var errorOrder = "";
									for(var i =0;i<errors.length;i++){
										var resultError = errors[i];
										if(resultError.indexOf(orderid) >=0){
											errorOrder = resultError;
										}
									}
									error = error.replace(errorOrder,"");
									$(".scan-log").val(error);
									var scanError = $(".scan-log-error").val();
									//如果当前错误的信息  不是以)结尾的  那么就截取到 ) 这个位置  然后拼接剩下的  替换之后+\r\n
									if(errorOrder.indexOf(")")+1 < errorOrder.length){
										var temperr = errorOrder.substring(0,errorOrder.indexOf(")")+1).replace(orderid+",(未处理)",orderid+",(禁止发货)");
										temperr += errorOrder.substring(errorOrder.indexOf(")")+1)+"\r\n";
										$(".scan-log-error").val(temperr);
									}else{
										$(".scan-log-error").val(scanError+errorOrder.replace(orderid+",(未处理)"+","+orderweight,orderid+",(禁止发货)"+","+orderweight+"\r\n"));
									}
								}else if(result == -4){//已发货
									$(".scanorder").blur();
									$(".trackNumber").blur();
									$(".orderWeight").blur();
									$(".scan-sucess").html("");
									top.toastr.error("操作失败!订单【"+orderid+"】已发货,不允许重复发货");
									//先获取当前输入的地方
									var error = $(".scan-log").val();
									//将当前的一行找出
									var errors = error.split("\n");
									var errorOrder = "";
									for(var i =0;i<errors.length;i++){
										var resultError = errors[i];
										if(resultError.indexOf(orderid) >=0){
											errorOrder = resultError;
										}
									}
									error = error.replace(errorOrder,"");
									$(".scan-log").val(error);
									var scanError = $(".scan-log-error").val();
									//如果当前错误的信息  不是以)结尾的  那么就截取到 ) 这个位置  然后拼接剩下的  替换之后+\r\n
									if(errorOrder.indexOf(")")+1 < errorOrder.length){
										var temperr = errorOrder.substring(0,errorOrder.indexOf(")")+1).replace(orderid+",(未处理)",orderid+",(已发货)");
										temperr += errorOrder.substring(errorOrder.indexOf(")")+1)+"\r\n";
										$(".scan-log-error").val(temperr);
									}else{
										$(".scan-log-error").val(scanError+errorOrder.replace(orderid+",(未处理)"+","+orderweight,orderid+",(已发货)"+","+orderweight+"\r\n"));
									}

								}else if(result == -5){//作废
									$(".scanorder").blur();
									$(".trackNumber").blur();
									$(".orderWeight").blur();
									$(".scan-sucess").html("");
									top.toastr.error("操作失败!订单【"+orderid+"】状态作废 禁止发货");
									//先获取当前输入的地方
									var error = $(".scan-log").val();
									//将当前的一行找出
									var errors = error.split("\n");
									var errorOrder = "";
									for(var i =0;i<errors.length;i++){
										var resultError = errors[i];
										if(resultError.indexOf(orderid) >=0){
											errorOrder = resultError;
										}
									}
									error = error.replace(errorOrder,"");
									$(".scan-log").val(error);
									var scanError = $(".scan-log-error").val();
									//如果当前错误的信息  不是以)结尾的  那么就截取到 ) 这个位置  然后拼接剩下的  替换之后+\r\n
									if(errorOrder.indexOf(")")+1 < errorOrder.length){
										var temperr = errorOrder.substring(0,errorOrder.indexOf(")")+1).replace(orderid+",(未处理)",orderid+",(作废)");
										temperr += errorOrder.substring(errorOrder.indexOf(")")+1)+"\r\n";
										$(".scan-log-error").val(temperr);
									}else{
										$(".scan-log-error").val(scanError+errorOrder.replace(orderid+",(未处理)"+","+orderweight,orderid+",(作废)"+","+orderweight+"\r\n"));
									}
								}else if(result == -6){//实际重量与预估重量差额百分比超过预设差额百分比
									$(".scanorder").blur();
									$(".trackNumber").blur();
									$(".orderWeight").blur();
									$(".scan-sucess").html("");
									top.toastr.error("实际重量与预估重量差额百分比超过预设差额百分比!");
									//先获取当前输入的地方
									var error = $(".scan-log").val();
									//将当前的一行找出
									var errors = error.split("\n");
									var errorOrder = "";
									for(var i =0;i<errors.length;i++){
										var resultError = errors[i];
										if(resultError.indexOf(orderid) >=0){
											errorOrder = resultError;
										}
									}
									error = error.replace(errorOrder,"");
									$(".scan-log").val(error);
									var scanError = $(".scan-log-error").val();
									//如果当前错误的信息  不是以)结尾的  那么就截取到 ) 这个位置  然后拼接剩下的  替换之后+\r\n
									if(errorOrder.indexOf(")")+1 < errorOrder.length){
										var temperr = errorOrder.substring(0,errorOrder.indexOf(")")+1).replace(orderid+",(未处理)",orderid+",(实际重量与预估重量差额百分比超过预设差额百分比)");
										temperr += errorOrder.substring(errorOrder.indexOf(")")+1)+"\r\n";
										$(".scan-log-error").val(temperr);
									}else{
										$(".scan-log-error").val(scanError+errorOrder.replace(orderid+",(未处理)"+","+orderweight,orderid+",(实际重量与预估重量差额百分比超过预设差额百分比)"+","+orderweight+"\r\n"));
									}
								}else if(result == -1){
									top.toastr.error("订单编号和订单重量不能为空");
								}
							}
						});
						$(".scanorder").val("");
						$(".orderWeight").val("");
						$(".scanorder").focus();
					}else{
						$(".scanorder").focus();
					}
				}
				
				//订单编号,物流单号,订单重量发货
				if(scanType == "type4"){
					if(checkUtil.isNullValue(orderid)){//订单编号为空时
						top.toastr.error("订单编号不能为空！");
						$(".scanorder").focus();
						$(".orderWeight").val("");
						return false;
					}
					
					//货运单号为空时
					if(checkUtil.isNullValue(trackNumber)){
						top.toastr.error("订单编号不能为空！");
						$(".scanorder").focus();
						$(".trackNumber").val("");
						return false;
					}
					
					//货运单号设置的长度不为空时
					if(!checkUtil.isNullValue(trackLength) && trackLength > 0){
						//如果货运单号不为空  并且货运单号的长度等于设置的物流单号长度  发货
						if(!checkUtil.isNullValue(trackNumber) && trackNumber.length == trackLength){
						}else{
							$(".trackNumber").blur();
							top.toastr.error("物流单号长度【"+trackNumber.length+"】与预设长度不符!");
//							$(".trackNumber").val("");
							$(".trackNumber").focus();
							return false;
						}
					}
					
					//订单重量为空时
					if(checkUtil.isNullValue(orderweight)){
						top.toastr.error("订单重量不能为空！");
						$(".orderWeight").focus();
						return false;
					}
					
					var postdata = "orderCode="+orderid+"&trackNumber="+trackNumber+"&orderweight="+orderweight+"&scanType="+scanType+"&weightDigit="+weightDigit;
					scanlog += orderid+",(未处理)"+","+trackNumber+","+orderweight+"\r\n";
					$(".scan-log").val(scanlog);
					Scan_Out.post(Http.sendOrder(), postdata, function(data){
						if(data != null && data.rs == 1){
							var result = data.data.code;
							if(result == 1){//发货成功
								var totalWeight = 0;
								if(data.data.weight){
									totalWeight = data.data.weight;
								}
								var htmlstr = "<div class=\"alert alert-success mt5 mb0\"><button aria-hidden=\"true\" data-dismiss=\"alert\" class=\"close\" type=\"button\">×</button>"+
								"<h4 class=\"nm\">操作成功!预估重量为:<span class=\"weight-estimate pl5 pr5\">"+totalWeight+"g</span>，实际重量为:<span class=\"weight-actual pl5 pr5\">"+orderweight+"</span>，<span class=\"label-number pl5 pr5\">"+orderid+"</span>设置已发货成功</h4></div>";
								$(".scan-sucess").html(htmlstr);
								//如果成功  那么就把当前订单改成成功
								var scanlog1 = $(".scan-log").val().replace(orderid+",(未处理)"+","+trackNumber+","+orderweight,orderid+",(发货成功)"+","+trackNumber+","+orderweight);
								$(".scan-log").val(scanlog1);
							}else if(result == -2){//订单不存在
								$(".scanorder").blur();
								$(".trackNumber").blur();
								$(".orderWeight").blur();
								$(".scan-sucess").html("");
								top.toastr.error("操作失败!订单不存在");
								//先获取当前输入的地方
								var error = $(".scan-log").val();
								//将当前的一行找出
								var errors = error.split("\n");
								var errorOrder = "";
								for(var i =0;i<errors.length;i++){
									var resultError = errors[i];
									if(resultError.indexOf(orderid) >=0){
										errorOrder = resultError;
									}
								}
								error = error.replace(errorOrder,"");
								
								$(".scan-log").val(error);
								var scanError = $(".scan-log-error").val();
								//记录错误的信息 
								if(errorOrder.indexOf(")")+1 < errorOrder.length){
									var temperr = errorOrder.substring(0,errorOrder.indexOf(")")+1).replace(orderid+",(未处理)",orderid+",(订单不存在)");
									
									temperr += errorOrder.substring(errorOrder.indexOf(")")+1)+"\r\n";
									$(".scan-log-error").val(temperr);
								}else{
									$(".scan-log-error").val(scanError+errorOrder.replace(orderid+",(未处理)"+","+trackNumber+","+orderweight,orderid+",(订单不存在)"+","+trackNumber+","+orderweight+"\r\n"));
								}
							}else if(result == -3){//禁止发货
								$(".scanorder").blur();
								$(".trackNumber").blur();
								$(".orderWeight").blur();
								$(".scan-sucess").html("");
								top.toastr.error("操作失败!订单【"+orderid+"】禁止发货");
								//先获取当前输入的地方
								var error = $(".scan-log").val();
								//将当前的一行找出
								var errors = error.split("\n");
								var errorOrder = "";
								for(var i =0;i<errors.length;i++){
									var resultError = errors[i];
									if(resultError.indexOf(orderid) >=0){
										errorOrder = resultError;
									}
								}
								error = error.replace(errorOrder,"");
								$(".scan-log").val(error);
								var scanError = $(".scan-log-error").val();
								//如果当前错误的信息  不是以)结尾的  那么就截取到 ) 这个位置  然后拼接剩下的  替换之后+\r\n
								if(errorOrder.indexOf(")")+1 < errorOrder.length){
									var temperr = errorOrder.substring(0,errorOrder.indexOf(")")+1).replace(orderid+",(未处理)",orderid+",(禁止发货)");
									temperr += errorOrder.substring(errorOrder.indexOf(")")+1)+"\r\n";
									$(".scan-log-error").val(temperr);
								}else{
									$(".scan-log-error").val(scanError+errorOrder.replace(orderid+",(未处理)"+","+trackNumber+","+orderweight,orderid+",(禁止发货)"+","+trackNumber+","+orderweight+"\r\n"));
								}
							}else if(result == -4){//已发货
								$(".scanorder").blur();
								$(".trackNumber").blur();
								$(".orderWeight").blur();
								$(".scan-sucess").html("");
								top.toastr.error("操作失败!订单【"+orderid+"】已发货,不允许重复发货");
								//先获取当前输入的地方
								var error = $(".scan-log").val();
								//将当前的一行找出
								var errors = error.split("\n");
								var errorOrder = "";
								for(var i =0;i<errors.length;i++){
									var resultError = errors[i];
									if(resultError.indexOf(orderid) >=0){
										errorOrder = resultError;
									}
								}
								error = error.replace(errorOrder,"");
								$(".scan-log").val(error);
								var scanError = $(".scan-log-error").val();
								//如果当前错误的信息  不是以)结尾的  那么就截取到 ) 这个位置  然后拼接剩下的  替换之后+\r\n
								if(errorOrder.indexOf(")")+1 < errorOrder.length){
									var temperr = errorOrder.substring(0,errorOrder.indexOf(")")+1).replace(orderid+",(未处理)",orderid+",(已发货)");
									temperr += errorOrder.substring(errorOrder.indexOf(")")+1)+"\r\n";
									$(".scan-log-error").val(temperr);
								}else{
									$(".scan-log-error").val(scanError+errorOrder.replace(orderid+",(未处理)"+","+trackNumber+","+orderweight,orderid+",(已发货)"+","+trackNumber+","+orderweight+"\r\n"));
								}

							}else if(result == -5){//作废
								$(".scanorder").blur();
								$(".trackNumber").blur();
								$(".orderWeight").blur();
								$(".scan-sucess").html("");
								top.toastr.error("操作失败!订单【"+orderid+"】状态作废 禁止发货");
								//先获取当前输入的地方
								var error = $(".scan-log").val();
								//将当前的一行找出
								var errors = error.split("\n");
								var errorOrder = "";
								for(var i =0;i<errors.length;i++){
									var resultError = errors[i];
									if(resultError.indexOf(orderid) >=0){
										errorOrder = resultError;
									}
								}
								error = error.replace(errorOrder,"");
								$(".scan-log").val(error);
								var scanError = $(".scan-log-error").val();
								//如果当前错误的信息  不是以)结尾的  那么就截取到 ) 这个位置  然后拼接剩下的  替换之后+\r\n
								if(errorOrder.indexOf(")")+1 < errorOrder.length){
									var temperr = errorOrder.substring(0,errorOrder.indexOf(")")+1).replace(orderid+",(未处理)",orderid+",(作废)");
									temperr += errorOrder.substring(errorOrder.indexOf(")")+1)+"\r\n";
									$(".scan-log-error").val(temperr);
								}else{
									$(".scan-log-error").val(scanError+errorOrder.replace(orderid+",(未处理)"+","+trackNumber+","+orderweight,orderid+",(作废)"+","+trackNumber+","+orderweight+"\r\n"));
								}
							}else if(result == -6){//实际重量与预估重量差额百分比超过预设差额百分比
								$(".scanorder").blur();
								$(".trackNumber").blur();
								$(".orderWeight").blur();
								$(".scan-sucess").html("");
								top.toastr.error("实际重量与预估重量差额百分比超过预设差额百分比!");
								//先获取当前输入的地方
								var error = $(".scan-log").val();
								//将当前的一行找出
								var errors = error.split("\n");
								var errorOrder = "";
								for(var i =0;i<errors.length;i++){
									var resultError = errors[i];
									if(resultError.indexOf(orderid) >=0){
										errorOrder = resultError;
									}
								}
								error = error.replace(errorOrder,"");
								$(".scan-log").val(error);
								var scanError = $(".scan-log-error").val();
								//如果当前错误的信息  不是以)结尾的  那么就截取到 ) 这个位置  然后拼接剩下的  替换之后+\r\n
								if(errorOrder.indexOf(")")+1 < errorOrder.length){
									var temperr = errorOrder.substring(0,errorOrder.indexOf(")")+1).replace(orderid+",(未处理)",orderid+",(实际重量与预估重量差额百分比超过预设差额百分比)");
									temperr += errorOrder.substring(errorOrder.indexOf(")")+1)+"\r\n";
									$(".scan-log-error").val(temperr);
								}else{
									$(".scan-log-error").val(scanError+errorOrder.replace(orderid+",(未处理)"+","+trackNumber+","+orderweight,orderid+",(实际重量与预估重量差额百分比超过预设差额百分比)"+","+trackNumber+","+orderweight+"\r\n"));
								}
							}else if(result == -1){
								top.toastr.error("订单编号、货运单号和订单重量不能为空");
							}
						}
					});
					$(".scanorder").val("");
					$(".orderWeight").val("");
					$(".trackNumber").val("");
					$(".scanorder").focus();
				}
				
				//扫描货运单号和订单重量  发货
				if(scanType == "type6"){
					if(checkUtil.isNullValue(trackNumber)){//货运单号为空时
						top.toastr.error("货运单号不能为空！");
						$(".trackNumber").focus();
						$(".orderWeight").val("");
						return false;
					}
					
					//货运单号设置的长度不为空时
					if(!checkUtil.isNullValue(trackLength) && trackLength > 0){
						//如果货运单号不为空  并且货运单号的长度等于设置的物流单号长度  发货
						if(!checkUtil.isNullValue(trackNumber) && trackNumber.length == trackLength){
						}else{
							$(".trackNumber").blur();
							top.toastr.error("物流单号长度【"+trackNumber.length+"】与预设长度不符!");
//							$(".trackNumber").val("");
							$(".trackNumber").focus();
							return false;
						}
					}
					
					//订单重量为空时
					if(checkUtil.isNullValue(orderweight)){
						top.toastr.error("订单重量不能为空！");
						$(".orderWeight").focus();
						return false;
					}
					
					//订单编号和订单重量不为空时
					if(!checkUtil.isNullValue(trackNumber) && !checkUtil.isNullValue(orderweight)){
						var postdata = "trackNumber="+trackNumber+"&orderweight="+orderweight+"&scanType="+scanType+"&weightDigit="+weightDigit;
						scanlog += trackNumber+",(未处理)"+","+orderweight+"\r\n";
						$(".scan-log").val(scanlog);
						Scan_Out.post(Http.sendOrder(), postdata, function(data){
							if(data != null){
								if(data.rs == 1){
									var result = data.data.code;
									if(result == 1){//发货成功
										var totalWeight = 0;
										if(data.data.weight){
											totalWeight = data.data.weight;
										}
										var htmlstr = "<div class=\"alert alert-success mt5 mb0\"><button aria-hidden=\"true\" data-dismiss=\"alert\" class=\"close\" type=\"button\">×</button>"+
										"<h4 class=\"nm\">操作成功!预估重量为:<span class=\"weight-estimate pl5 pr5\">"+totalWeight+"g</span>，实际重量为:<span class=\"weight-actual pl5 pr5\">"+orderweight+"</span>，<span class=\"label-number pl5 pr5\">"+trackNumber+"</span>设置已发货成功</h4></div>";
										$(".scan-sucess").html(htmlstr);
										//如果成功  那么就把当前订单改成成功
										var scanlog1 = $(".scan-log").val().replace(trackNumber+",(未处理)"+","+orderweight,trackNumber+",(发货成功)"+","+orderweight);
										$(".scan-log").val(scanlog1);
									}else if(result == -2){//订单不存在
										$(".scanorder").blur();
										$(".trackNumber").blur();
										$(".orderWeight").blur();
										$(".scan-sucess").html("");
										top.toastr.error("操作失败!订单不存在");
										//先获取当前输入的地方
										var error = $(".scan-log").val();
										//将当前的一行找出
										var errors = error.split("\n");
										var errorOrder = "";
										for(var i =0;i<errors.length;i++){
											var resultError = errors[i];
											if(resultError.indexOf(trackNumber) >=0){
												errorOrder = resultError;
											}
										}
										error = error.replace(errorOrder,"");
										
										$(".scan-log").val(error);
										var scanError = $(".scan-log-error").val();
										//记录错误的信息 
										if(errorOrder.indexOf(")")+1 < errorOrder.length){
											var temperr = errorOrder.substring(0,errorOrder.indexOf(")")+1).replace(trackNumber+",(未处理)",trackNumber+",(订单不存在)");
											
											temperr += errorOrder.substring(errorOrder.indexOf(")")+1)+"\r\n";
											$(".scan-log-error").val(temperr);
										}else{
											$(".scan-log-error").val(scanError+errorOrder.replace(trackNumber+",(未处理)"+","+orderweight,trackNumber+",(订单不存在)"+","+orderweight+"\r\n"));
										}
									}else if(result == -3){//禁止发货
										$(".scanorder").blur();
										$(".trackNumber").blur();
										$(".orderWeight").blur();
										$(".scan-sucess").html("");
										top.toastr.error("操作失败!该订单禁止发货");
										//先获取当前输入的地方
										var error = $(".scan-log").val();
										//将当前的一行找出
										var errors = error.split("\n");
										var errorOrder = "";
										for(var i =0;i<errors.length;i++){
											var resultError = errors[i];
											if(resultError.indexOf(trackNumber) >=0){
												errorOrder = resultError;
											}
										}
										error = error.replace(errorOrder,"");
										$(".scan-log").val(error);
										var scanError = $(".scan-log-error").val();
										//如果当前错误的信息  不是以)结尾的  那么就截取到 ) 这个位置  然后拼接剩下的  替换之后+\r\n
										if(errorOrder.indexOf(")")+1 < errorOrder.length){
											var temperr = errorOrder.substring(0,errorOrder.indexOf(")")+1).replace(trackNumber+",(未处理)",trackNumber+",(禁止发货)");
											temperr += errorOrder.substring(errorOrder.indexOf(")")+1)+"\r\n";
											$(".scan-log-error").val(temperr);
										}else{
											$(".scan-log-error").val(scanError+errorOrder.replace(trackNumber+",(未处理)"+","+orderweight,trackNumber+",(禁止发货)"+","+orderweight+"\r\n"));
										}
									}else if(result == -4){//已发货
										$(".scanorder").blur();
										$(".trackNumber").blur();
										$(".orderWeight").blur();
										$(".scan-sucess").html("");
										top.toastr.error("操作失败!订单已发货,不允许重复发货");
										//先获取当前输入的地方
										var error = $(".scan-log").val();
										//将当前的一行找出
										var errors = error.split("\n");
										var errorOrder = "";
										for(var i =0;i<errors.length;i++){
											var resultError = errors[i];
											if(resultError.indexOf(trackNumber) >=0){
												errorOrder = resultError;
											}
										}
										error = error.replace(errorOrder,"");
										$(".scan-log").val(error);
										var scanError = $(".scan-log-error").val();
										//如果当前错误的信息  不是以)结尾的  那么就截取到 ) 这个位置  然后拼接剩下的  替换之后+\r\n
										if(errorOrder.indexOf(")")+1 < errorOrder.length){
											var temperr = errorOrder.substring(0,errorOrder.indexOf(")")+1).replace(trackNumber+",(未处理)",trackNumber+",(已发货)");
											temperr += errorOrder.substring(errorOrder.indexOf(")")+1)+"\r\n";
											$(".scan-log-error").val(temperr);
										}else{
											$(".scan-log-error").val(scanError+errorOrder.replace(trackNumber+",(未处理)"+","+orderweight,trackNumber+",(已发货)"+","+orderweight+"\r\n"));
										}

									}else if(result == -5){//作废
										$(".scanorder").blur();
										$(".trackNumber").blur();
										$(".orderWeight").blur();
										$(".scan-sucess").html("");
										top.toastr.error("操作失败!订单已作废 禁止发货");
										//先获取当前输入的地方
										var error = $(".scan-log").val();
										//将当前的一行找出
										var errors = error.split("\n");
										var errorOrder = "";
										for(var i =0;i<errors.length;i++){
											var resultError = errors[i];
											if(resultError.indexOf(trackNumber) >=0){
												errorOrder = resultError;
											}
										}
										error = error.replace(errorOrder,"");
										$(".scan-log").val(error);
										var scanError = $(".scan-log-error").val();
										//如果当前错误的信息  不是以)结尾的  那么就截取到 ) 这个位置  然后拼接剩下的  替换之后+\r\n
										if(errorOrder.indexOf(")")+1 < errorOrder.length){
											var temperr = errorOrder.substring(0,errorOrder.indexOf(")")+1).replace(trackNumber+",(未处理)",trackNumber+",(作废)");
											temperr += errorOrder.substring(errorOrder.indexOf(")")+1)+"\r\n";
											$(".scan-log-error").val(temperr);
										}else{
											$(".scan-log-error").val(scanError+errorOrder.replace(trackNumber+",(未处理)"+","+orderweight,trackNumber+",(作废)"+","+orderweight+"\r\n"));
										}
									}else if(result == -6){//实际重量与预估重量差额百分比超过预设差额百分比
										$(".scanorder").blur();
										$(".trackNumber").blur();
										$(".orderWeight").blur();
										$(".scan-sucess").html("");
										top.toastr.error("实际重量与预估重量差额百分比超过预设差额百分比!");
										//先获取当前输入的地方
										var error = $(".scan-log").val();
										//将当前的一行找出
										var errors = error.split("\n");
										var errorOrder = "";
										for(var i =0;i<errors.length;i++){
											var resultError = errors[i];
											if(resultError.indexOf(trackNumber) >=0){
												errorOrder = resultError;
											}
										}
										error = error.replace(errorOrder,"");
										$(".scan-log").val(error);
										var scanError = $(".scan-log-error").val();
										//如果当前错误的信息  不是以)结尾的  那么就截取到 ) 这个位置  然后拼接剩下的  替换之后+\r\n
										if(errorOrder.indexOf(")")+1 < errorOrder.length){
											var temperr = errorOrder.substring(0,errorOrder.indexOf(")")+1).replace(trackNumber+",(未处理)",trackNumber+",(实际重量与预估重量差额百分比超过预设差额百分比)");
											temperr += errorOrder.substring(errorOrder.indexOf(")")+1)+"\r\n";
											$(".scan-log-error").val(temperr);
										}else{
											$(".scan-log-error").val(scanError+errorOrder.replace(trackNumber+",(未处理)"+","+orderweight,trackNumber+",(实际重量与预估重量差额百分比超过预设差额百分比)"+","+orderweight+"\r\n"));
										}
									}else if(result == -1){
										top.toastr.error("订单编号和订单重量不能为空");
									}
								}
							}
						});
						$(".trackNumber").val("");
						$(".orderWeight").val("");
						$("#estWeight").val("");
						$(".trackNumber").focus();
					}else{
						$(".trackNumber").focus();
						return false;
					}
				}
			}
		});
		
		//单扫批出   更改发货方式
		$(".scan-type2").bind("change",function(){
			var type=$(this).val(),
			trackingSet=$(this).parents(".tab-pane").find(".tracking-set"),
			weightSet=$(this).parents(".tab-pane").find(".weight-set"),
			scanOrder=$(this).parents(".tab-pane").find(".scan-orderlabel input"),
			scanTrack=$(this).parents(".tab-pane").find(".scan-trackingnumber input"),
			scanWeight=$(this).parents(".tab-pane").find(".scan-weight input"),
			redtext=$(this).parents(".form-group").find(".loadtext .text-danger");
			scanType=type;
			
			switch(type){
				case "type1":
					redtext.first().show().siblings(".text-danger2").hide();
					trackingSet.hide();weightSet.hide();
					scanOrder.attr("disabled",false);scanTrack.attr("disabled",true);scanWeight.attr("disabled",true);
					$(".scanorder2").val("");
					$(".trackNumber2").val("");
					$(".orderWeight2").val("");
					$(".scan-log2").val("");
					$(".scanorder2").focus();
				break
				case "type2":
					redtext.last().hide().siblings(".text-danger2").show();
					trackingSet.show();weightSet.hide();
					scanOrder.attr("disabled",false);scanTrack.attr("disabled",false);scanWeight.attr("disabled",true);
					$(".scanorder2").val("");
					$(".trackNumber2").val("");
					$(".orderWeight2").val("");
					$(".scan-log2").val("");
					$(".scanorder2").focus();
				break
				case "type3":
					redtext.last().hide().siblings(".text-danger2").show();
					trackingSet.hide();weightSet.show();
					scanOrder.attr("disabled",false);scanTrack.attr("disabled",true);scanWeight.attr("disabled",false);
					$(".scanorder2").val("");
					$(".trackNumber2").val("");
					$(".orderWeight2").val("");
					$(".scan-log2").val("");
					$(".scanorder2").focus();
				break
				case "type4":
					redtext.show();trackingSet.show();weightSet.show();
					scanOrder.attr("disabled",false);scanTrack.attr("disabled",false);scanWeight.attr("disabled",false);
					$(".scanorder2").val("");
					$(".trackNumber2").val("");
					$(".orderWeight2").val("");
					$(".scan-log2").val("");
					$(".scanorder2").focus();
				break
				case "type5":
					redtext.first().show().siblings(".text-danger2").hide();
					trackingSet.show();weightSet.hide();
					scanOrder.attr("disabled",true);scanTrack.attr("disabled",false);scanWeight.attr("disabled",true);
					$(".scanorder2").val("");
					$(".trackNumber2").val("");
					$(".orderWeight2").val("");
					$(".scan-log2").val("");
					$(".trackNumber2").focus();
				break
				case "type6":
					redtext.last().hide().siblings(".text-danger2").show();
					trackingSet.show();weightSet.show();
					scanOrder.attr("disabled",true);scanTrack.attr("disabled",false);scanWeight.attr("disabled",false);
					$(".scanorder2").val("");
					$(".trackNumber2").val("");
					$(".orderWeight2").val("");
					$(".scan-log2").val("");
					$(".trackNumber2").focus();
				break
				};
		});
		
		//单扫批出 -- 订单编号
		$(".scanorder2").keypress(function(e){
			var key = e.which;
			if(key == 13){
				var orderid =  $.trim($(".scanorder2").val());//订单编号
				var scanType =  $.trim($(".scan-type2").val());//发货方式
				var trackNumber =  $.trim($(".trackNumber2").val());//货运单号
				var orderweight =  $.trim($(".orderWeight2").val());//订单重量
				var trackLength =  $.trim($(".tracking-digit2").val());//物流单号长度
				var  weightDigit =  $.trim($(".weight-digit2").val());//实际与预估重量差额
				var scanlog2 =$(".scan-log2").val().replace(" ","").replace("	","");//去掉空格和TAB
				
				//仅订单编号发货
				if(scanType == "type1"){
					if(!checkUtil.isNullValue(orderid)){
						scanlog2 += orderid + "\r\n";
						$(".scan-log2").val(scanlog2);
						$(".scanorder2").val("");
					}else{
						top.toastr.error("订单编号不能为空!");
						$(".scanorder2").focus();
						return false;
					}
				}
				
				//订单编号和物流单号      订单编号,物流单号,订单重量
				if(scanType == "type2" || scanType == "type4"){
					if(!checkUtil.isNullValue(orderid)){
						$(".trackNumber2").val("");
						$(".trackNumber2").focus();
					}else{
						top.toastr.error("订单编号不能为空!");
						$(".scanorder2").focus();
						return false;
					}
				}
				
				//扫描订单编号和订单重量  发货
				if(scanType == "type3"){
					if(!checkUtil.isNullValue(orderid)){
						$(".orderWeight2").val("");
						$(".orderWeight2").focus();
					}else{
						top.toastr.error("订单编号不能为空!");
						$(".scanorder2").focus();
						return false;
					}
				}
			}
		});
		
		//单扫批出 -- 货运单号
		$(".trackNumber2").keypress(function(e){
			var key = e.which;
			if(key == 13){
				var orderid =  $.trim($(".scanorder2").val());//订单编号
				var scanType =  $.trim($(".scan-type2").val());//发货方式
				var trackNumber =  $.trim($(".trackNumber2").val());//货运单号
				var orderweight =  $.trim($(".orderWeight2").val());//订单重量
				var trackLength =  $.trim($(".tracking-digit2").val());//物流单号长度
				var scanlog2 =$(".scan-log2").val().replace(" ","").replace("	","");//去掉空格和TAB
				
				//订单编号和物流单号发货
				if(scanType == "type2"){
					if(checkUtil.isNullValue(orderid)){
						$(".scanorder2").val("");
						$(".trackNumber2").val("");
						$(".scanorder2").focus();
						return false;
					}
					
					//货运单号为空时
					if(checkUtil.isNullValue(trackNumber)){
						$(".trackNumber2").blur();
						top.toastr.error("货运单号不能为空!");
						$(".trackNumber2").val("");			
						$(".trackNumber2").focus();
						return false;
					}
					
					//物流单号长度不为空时
					if(!checkUtil.isNullValue(orderid) && !checkUtil.isNullValue(trackLength) && trackLength > 0){
						if(!checkUtil.isNullValue(orderid) && !checkUtil.isNullValue(trackNumber) && trackNumber.length == trackLength){
							scanlog2 += orderid+","+trackNumber+"\r\n";
							$(".scan-log2").val(scanlog2);
							$(".scanorder2").val("");
							$(".trackNumber2").val("");
						}else{
							$(".trackNumber2").blur();
							top.toastr.error("物流单号长度【"+trackNumber.length+"】与预设长度不符!");
							$(".trackNumber2").val("");			
							$(".trackNumber2").focus();
							return false;
						}
					}else{
						scanlog2 += orderid+","+trackNumber+"\r\n";
						$(".scan-log2").val(scanlog2);
						$(".scanorder2").val("");
						$(".trackNumber2").val("");
					}
				}
				
				//订单编号,物流单号,订单重量发货
				if(scanType == "type4"){
					//订单编号为空时
					if(checkUtil.isNullValue(orderid)){
						$(".trackNumber2").val("");
						$(".scanorder2").val("");
						$(".scanorder2").focus();
						return false;
					}
					
					//货运单号为空时
					if(checkUtil.isNullValue(trackNumber)){
						$(".trackNumber2").blur();
						top.toastr.error("货运单号不能为空!");
						$(".trackNumber2").focus();
						return false;
					}
					
					//如果设置了物流单号长度
					if(!checkUtil.isNullValue(orderid) && !checkUtil.isNullValue(trackLength) && trackLength > 0){
						if(!checkUtil.isNullValue(orderid) && !checkUtil.isNullValue(trackNumber) && trackNumber.length == trackLength){
							$(".orderWeight2").val("");
							$(".orderWeight2").focus();
						}else{
							$(".trackNumber2").blur();
							top.toastr.error("物流单号长度【"+trackNumber.length+"】与预设长度不符!");
							$(".trackNumber2").val("");
							$(".trackNumber2").focus();
							return false;
						}
					}else{
						$(".orderWeight2").val("");
						$(".orderWeight2").focus();
					}
				}
				
				//仅物流单号 发货
				if(scanType == "type5"){
					//货运单号为空
					if(checkUtil.isNullValue(trackNumber)){
						$(".trackNumber2").blur();
						top.toastr.error("货运单号不能为空!");
						$(".trackNumber2").focus();
						return false;
					}
					
					//物流单号长度不为空
					if(!checkUtil.isNullValue(trackLength) && trackLength > 0){
						if(!checkUtil.isNullValue(trackNumber) && trackNumber.length == trackLength){
							scanlog2 += trackNumber+"\r\n";
							$(".scan-log2").val(scanlog2);
							$(".trackNumber2").val("");
							$(".trackNumber2").focus();
						}else{
							$(".trackNumber2").blur();
							top.toastr.error("物流单号长度【"+trackNumber.length+"】与预设长度不符!");
							$(".trackNumber2").val("");
							$(".trackNumber2").focus();
							return false;
						}
					}else{
						scanlog2 += trackNumber+"\r\n";
						$(".scan-log2").val(scanlog2);
						$(".trackNumber2").val("");
						$(".trackNumber2").focus();
					}
				}
				
				//物流单号和订单重量 发货
				if(scanType == "type6"){
					//货运单号为空
					if(checkUtil.isNullValue(trackNumber)){
						$(".trackNumber2").blur();
						top.toastr.error("货运单号不能为空!");
						$(".trackNumber2").focus();
						return false;
					}
					
					//物流单号长度不为空
					if(!checkUtil.isNullValue(trackLength) && trackLength > 0){
						if(!checkUtil.isNullValue(trackNumber) && trackNumber.length == trackLength){
							$(".orderWeight2").val("");
							$(".orderWeight2").focus();
						}else{
							$(".trackNumber2").blur();
							top.toastr.error("物流单号长度【"+trackNumber.length+"】与预设长度不符!");
							$(".trackNumber2").val("");
							$(".trackNumber2").focus();
							return false;
						}
					}else{
						$(".orderWeight2").val("");
						$(".orderWeight2").focus();
					}
				}
			}
		});
		
		//单扫批出-- 订单称重
		$(".orderWeight2").keypress(function(e){
			var key = e.which;
			if(key == 13){
				var orderid =  $.trim($(".scanorder2").val());
				var scanType =  $.trim($(".scan-type2").val());
				var trackNumber =  $.trim($(".trackNumber2").val());
				var orderweight =  $.trim($(".orderWeight2").val());
				var trackLength =  $.trim($(".tracking-digit2").val());
				var  weightDigit =  $.trim($(".weight-digit2").val());
				var scanlog2 =$(".scan-log2").val();
				
				//订单编号和订单重量 发货
				if(scanType=="type3"){
					//订单编号不为空
					if(!checkUtil.isNullValue(orderid)){
						if(!checkUtil.isNullValue(orderweight)){
							scanlog2 += orderid+","+orderweight+"\r\n";
							$(".scan-log2").val(scanlog2);
							$(".scanorder2").val("");
							$(".orderWeight2").val("");
							$(".scanorder2").focus();
						}else{
							$(".orderWeight2").focus();
							return false;
						}
					}else{
						$(".scanorder2").focus();
						return false;
					}
				}
				
				//订单编号,物流单号,订单重量 发货
				if(scanType=="type4"){
					//订单编号不为空
					if(checkUtil.isNullValue(orderid)){
						$(".scanorder2").focus();
						return false;
					}
					
					//物流单号长度不为空
					if(!checkUtil.isNullValue(trackLength) && trackLength > 0){
						//货运单号不为空
						if(checkUtil.isNullValue(trackNumber)){
							$(".trackNumber2").focus();
							return false;
						}
						if(!checkUtil.isNullValue(trackNumber) && trackNumber.length == trackLength){
							if(!checkUtil.isNullValue(orderweight)){
								scanlog2 += orderid+","+trackNumber+","+orderweight+"\r\n";
								$(".scan-log2").val(scanlog2);
								$(".scanorder2").val("");
								$(".orderWeight2").val("");
								$(".trackNumber2").val("");
								$(".scanorder2").focus();
							}else{
								$(".orderWeight2").focus();
								return false;
							}
						}else{
							$(".trackNumber2").blur();
							top.toastr.error("物流单号长度【"+trackNumber.length+"】与预设长度不符!");
							$(".trackNumber2").val("");
							$(".trackNumber2").focus();
							return false;
						}
					}else{
						//货运单号不为空
						if(!checkUtil.isNullValue(trackNumber)){
							if(!checkUtil.isNullValue(orderweight)){
								scanlog2 += orderid+","+trackNumber+","+orderweight+"\r\n";
								$(".scan-log2").val(scanlog2);
								$(".scanorder2").val("");
								$(".orderWeight2").val("");
								$(".trackNumber2").val("");
								$(".scanorder2").focus();
							}else{
								$(".orderWeight2").focus();
								return false;
							}
						}else{
							$(".trackNumber2").focus();
							return false;
						}
					}
				}
				
				//物流单号和订单重量 发货
				if(scanType=="type6"){
					//货运单号不为空
					if(!checkUtil.isNullValue(trackNumber)){
						//如果设置了物流单号长度
						if(!checkUtil.isNullValue(trackLength) && trackLength > 0){
							if(trackNumber.length == trackLength){
								if(!checkUtil.isNullValue(orderweight)){
									scanlog2 += trackNumber+","+orderweight+"\r\n";
									$(".scan-log2").val(scanlog2);
									$(".trackNumber2").val("");
									$(".orderWeight2").val("");
									$(".trackNumber2").focus();
								}else{
									$(".orderWeight2").focus();
									return false;
								}
							}else{
								$(".trackNumber2").blur();
								top.toastr.error("物流单号长度【"+trackNumber.length+"】与预设长度不符!");
								$(".trackNumber2").val("");
								$(".trackNumber2").focus();
								return false;
							}
						}else{
							if(!checkUtil.isNullValue(orderweight)){
								scanlog2 += trackNumber+","+orderweight+"\r\n";
								$(".scan-log2").val(scanlog2);
								$(".trackNumber2").val("");
								$(".orderWeight2").val("");
								$(".trackNumber2").focus();
							}else{
								$(".orderWeight2").focus();
								return false;
							}
						}
					}else{
						$(".trackNumber2").focus();
						return false;
					}
				}
			}
		});
		
		//单扫批出提交订单
		$(".scanButton").bind("click",function(){
			//先获取需要发货的订单信息
			var scanType =  $.trim($(".scan-type2").val());
			var scanContent = $.trim($(".scan-log2").val()).replace("，",",");
			//扫描内容为空
			if(checkUtil.isNullValue(scanContent)){
				$(".scan-log2").blur();
				top.toastr.error("输入值不能为空!");
			}else if(scanContent.indexOf(",")>=0 && (scanType=="type1" || scanType=="type5")){
				$(".scan-log2").blur();
				top.toastr.error("输入值格式不对!");
			}else{
				var postdata = "scanType="+scanType+"&scanContent="+scanContent;
				Scan_Out.post(Http.batchSendOrder(), postdata, function(data){
					if(data != null){
						if(data.rs == 1){
							var result = data.data.code;
							if(result == 1){
								top.toastr.success("操作成功！");
							}
						}
					}
				});
			}
		});
	},
	post : function(c, d, b, a) {
		this.ajax("json", c, d, b, a, true)
	},
	ajax : function(c, d, f, b, a, e){
		if(c == "json"){
			$.ajax({
				type : "post",
				async : e,
				url : d,
				data : f,
				dataType : "json",
				success : function(h) {
					if (b && typeof (b) == "function") {
						b(h)
					}
				},
				error : function(h) {
					if (a && typeof (a) == "function") {
						a()
					}
				}
			})
		}else if(c == "jsonp"){
			
		}
	},
	checkdatadouble:function(obj){
		var datavalue = $(obj).val();
		var flag = 0;
		var flag2 = 0;
		if(datavalue.indexOf("%") >= 0){
			flag = 1;
		}
		
		if(datavalue.indexOf("-") >= 0){
			flag2 = 1;
		}
		
		var flag1 = 0;
		
		if(!checkUtil.isNullValue(datavalue)){
			datavalue = datavalue.replace(/\ +/g, "");//空格
			datavalue = datavalue.replace(/[\r\n]/g,"");//回车
			datavalue = datavalue.replace(/-/g,'');//-
			datavalue = datavalue.replace("%",'');//%
		}
		
		var newdatavalue = "";
		for (var i = 0; i < datavalue.length; i++) {
			var char = datavalue.charAt(i);
			if(i == 0 && char != 1 && char !=2 && char != 3 && char != 4 && char != 5 && char != 6 && char != 7 && char != 8 && char != 9 && char !='-'){
				$(obj).val("");
				break;
			}
			
			if(char == "."){
				flag1 ++;
			}
			if(flag1 == 0 || flag1 == 1){
				if(char == 0 || char==1 || char==2 || char==3 || char==4 || char==5 || char==6 || char==7 || char==8 || char==9){
				    newdatavalue = newdatavalue+""+char;
				}else if(char == "."){
					newdatavalue = newdatavalue+""+char;
				}else{
				}
			}else{
			}
		}
		
		if(flag == 1){
			newdatavalue = newdatavalue + "%";
		}
		
		if(flag2 == 1){
			newdatavalue = "-"+newdatavalue;
		}
		
		$(obj).val(newdatavalue);
	}
};


var Http = {
		sendOrder : function(){
			return ctx.path + "/api/ordersDeliver/sendOrderDeliver.do";
		},
		batchSendOrder : function(){
			return ctx.path + "/api/ordersDeliver/batchSendOrderDeliver.do";
		}
};

//加载出货处理结果页面
function loadResultPage(){
	layer.open({
		title:'出货处理结果',
	    type: 2,
	    area: ['80%', '90%'],
	    fix: true, 
	    maxmin: true,
	    content: ctx.path + '/api/ordersDeliver/loadOrdersDeliverPage.do'
	});
}