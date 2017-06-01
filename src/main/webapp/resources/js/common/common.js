
/**
 * 字符串转json
 * @param str
 * @returns
 */
function strToJson(str){ 
	var json = eval('(' + str + ')'); 
	return json; 
} 

/**
 * object转json
 * @param obj
 * @returns
 */
function objectToJson(obj){
	return JSON.stringify(obj); 
}

var HttpUtil = {
		post : function(c, d, b, a) {
			this.ajax("json", c, d, b, a, true)
		},
		postSync : function(c, d, b, a){
			this.ajax("json", c, d, b, a, false)
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
		}
}