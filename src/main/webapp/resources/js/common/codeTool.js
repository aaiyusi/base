//生成批次号
var CodeUtil = {
	
	//生成批次号--yyyyMMddhhmmss+四位随机数
	batchNoOut:function(){
		var date = new Date();
		pattern = "yyyyMMddhhmmss";  
		var head = date.format(pattern);  
		var temp ="";
		for(var i = 0 ; i<4 ; i++){
			temp = Math.floor(Math.random()*10)+temp;
		}
		return head+temp;
	}




};