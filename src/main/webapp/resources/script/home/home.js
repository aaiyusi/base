 // 基于准备好的dom，初始化echarts实例

$(document).ready(
	function(){
		getChart( document.getElementById('monthSelect') );
		getChannelPerformanceStatis( document.getElementById('channelSelect') );
		OrderManagementStatistics( document.getElementById('channelSelect') );
	}
);

//订单管理统计
function OrderManagementStatistics(obj){
	$obj = $(obj);
	var startTime = $obj.find("option:selected").attr("startTime");
    var endTime =   $obj.find("option:selected").attr("endTime");
    $.ajax({
        type: "POST",
        url: ctx.path +'/api/Statiscs/getOrderManagementStatis.do',
        data: {startTime:startTime,endTime:endTime},
        dataType: "json",
        complete:function(XHR, TS){
        	$('.loading_large').fadeOut();
        },
        beforeSend:function(XHR){
        	$('.loading_large').show();
        },
        success: function(result){
        	$("#pendingAudit").html(0);//待审核
        	$("#transportToBeChecked").html(0);//待交运
        	$("#toBeShipped").html(0);//待发货
        	$("#outOfStock").html(0);//缺货
        	$("#toVoid").html(0);//作废
        	$("#alreadyShipped").html(0);//已发货
        	if(result.rs == 1){
        		result = result.data;
        		if(result){
        			result = result[0];
        			$("#pendingAudit").html(result.pending_audit_count);//待审核
                	$("#transportToBeChecked").html(result.transport_to_bechecked_count);//待交运
                	$("#toBeShipped").html(result.to_be_shipped_count);//待发货
                	$("#outOfStock").html(result.out_of_stock_count);//缺货
                	$("#toVoid").html(result.to_void_count);//作废
                	$("#alreadyShipped").html(result.already_shipped_count);//已发货
        		}
        	}
        } 
    });
}

function getChannelPerformanceStatis(obj){
	$obj = $(obj);
	var startTime = $obj.find("option:selected").attr("startTime");
    var endTime =   $obj.find("option:selected").attr("endTime");
	$.ajax({
        type: "POST",
        url: ctx.path +'/api/Statiscs/getChannelPerformanceStatis.do',
        data: {startTime:startTime,endTime:endTime},
        dataType: "json",
        complete:function(XHR, TS){
        	$('.loading_large').fadeOut();
        },
        beforeSend:function(XHR){
        	$('.loading_large').show();
        },
        success: function(result){
        	
        	$("#otherTr td:nth-child(3)").html(0);
        	$("#aliexpressTr td:nth-child(3)").html(0);
        	$("#wishTr td:nth-child(3)").html(0);
        	
        	$("#otherTr td:nth-child(2)").html(0);
        	$("#aliexpressTr td:nth-child(2)").html(0);
        	$("#wishTr td:nth-child(2)").html(0);
        	
        	if(result.rs == 1){
        		result = result.data;
        		for (var i in result) {
	        		 if(result[i].platform_type==0){
	        			 //其他平台
	        			if(result[i].state==3){
		        		 	//已发货
	        		 		$("#otherTr td:nth-child(3)").html(result[i].count);
	        		 	}else if(result[i].state==1){
	        		 		//下单
	        		 		var num = parseInt($("#otherTr td:nth-child(2)").html());
	        		 		$("#otherTr td:nth-child(2)").html(num+result[i].count);
	        		 	}else if(result[i].state==2){
	        		 		//代发货
	        		 		var num = parseInt($("#otherTr td:nth-child(2)").html());
	        		 		$("#otherTr td:nth-child(2)").html(num+result[i].count);
	        		 	}
	        			 
	        		 }else if(result[i].platform_type==1){
	        			//阿里
	        		 	if(result[i].state==3){
	        		 		//已发货
	        		 		$("#aliexpressTr td:nth-child(3)").html(result[i].count);
	        		 	}else if(result[i].state==1){
	        		 		 //下单
	        		 		var num = parseInt($("#aliexpressTr td:nth-child(2)").html());
	        		 		$("#aliexpressTr td:nth-child(2)").html(num+result[i].count);
	        		 	}else if(result[i].state==2){
	        		 		//代发货
	        		 		var num = parseInt($("#aliexpressTr td:nth-child(2)").html());
	        		 		$("#aliexpressTr td:nth-child(2)").html(num+result[i].count);
	        		 	}
	        		 }else if(result[i].platform_type==2){
	        			 //wish
	        		 	if(result[i].state==3){
	        		 		//已发货
	        		 		$("#wishTr td:nth-child(3)").html(result[i].count);
	        		 	}else if(result[i].state==1){
	        		 		 //下单
	        		 		var num = parseInt($("#wishTr td:nth-child(2)").html());
	        		 		$("#wishTr td:nth-child(2)").html(num+result[i].count);
	        		 	}else if(result[i].state==2){
	        		 		//代发货
	        		 		var num = parseInt($("#wishTr td:nth-child(2)").html());
	        		 		$("#wishTr td:nth-child(2)").html(num+result[i].count);
	        		 	}
	        		 }
				}
        	}
        } 
    });
}
function getChart(obj){
	$obj = $(obj);
	var startTime = $obj.find("option:selected").attr("startTime");
    var endTime =   $obj.find("option:selected").attr("endTime");
	var myChart = echarts.init(document.getElementById('chartmain'));
	var monthHtml =  $obj.find("option:selected").html();
	option = {
			backgroundColor:'#fff',
		    title: {
		        text: '',
		        subtext: ''
		    },
		    tooltip: {
		        trigger: 'axis'
		    },
		    legend: {
		        data:[monthHtml]
		    },
		    toolbox: {
		        show: false,
		        feature: {
		            magicType: {show: true, type: ['stack', 'tiled']},
		            saveAsImage: {show: true}
		        }
		    },
		    xAxis: {
		        type: 'category',
		        boundaryGap: false,
		        data: ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30']
		    },
		    yAxis: {
		        type: 'value'
		    },
		    series: [{
		        name: monthHtml,
		        type: 'line',
				        smooth: true,
				        data: [0, 0, 0, 0, 0,0,0, 0, 0, 0, 0,0,0, 0, 0, 0, 0,0,0, 0, 0, 0, 0,0,0, 0, 0, 0, 0,0]
				    }]
				};
 
			var xAxisData = [];
			var seriesData = [];
	$.ajax({
        type: "POST",
        url: ctx.path +'/api/Statiscs/getSalesOrdersStatis.do',
        data: {startTime:startTime,endTime:endTime},
        dataType: "json",
        success: function(result){
        	if(result.rs == 1){
        		result = result.data;
        		for (var i in result) {
	        		seriesData.push(result[i].orderCount);
				    xAxisData.push(result[i].xLine.substring(4,6)+"月"+result[i].xLine.substring(6)+"日");
				}
        		option.xAxis.data = xAxisData;
				option.series[0].data = seriesData;
        		myChart.setOption(option);
        	}
        } 
    });
	
}
	
		
