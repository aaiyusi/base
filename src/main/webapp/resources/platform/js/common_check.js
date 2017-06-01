var checkUtil = {
	isNumber : function(str){//是否是数字
		var reg = /^\d+$/;
		return reg.test(str);
	},
	isCode4 : function(str){//是否是四位数字验证码
		var regu = /^[0-9][4]$/;
		return regu.test(str);
	},
	isInt : function(str){//是否是正整数
		var reg = /^[1-9]{1,}[0-9]*$/;
		return reg.test(str);
	},
	isNaturalNumber:function(str){//是否是自然数
		return isInt(str) || str==0;
	},
	isChinaOrNumbOrLett:function(str){//判断是否是汉字、字母、数字组成
		var regu = /^[0-9a-zA-Z\u4e00-\u9fa5]+$/;
		return regu.test(str);
	},
	isNumberOrLetter:function(str){//判断是否是数字或字母 (6-14位)
		var regu = /^[0-9a-zA-Z]{6,14}$/;
		return regu.test(str);
	},
	isMobileNum:function(str){//验证手机号
		var regu =/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
		return regu.test(str);
	},
	isTelephoneNum:function(str){//验证电话号
		var regu = /^(([0\+]\d{2,3}-?)?(0\d{2,3})-?)?(\d{7,8})(-?(\d{3,}))?$/ ;
		return regu.test(str);
	},
	isPhone:function(str){//验证手机号 或者 验证电话号
		return this.isTelephoneNum(str) || this.isMobileNum(str);
	},
	isEmail:function(str){//email格式验证
		var regu =/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return regu.test(str);
	},
	isMoney:function(value){//验证是否为金额
		value = $.trim(value);
		if(value == ""){
			return false;
		}
		
		var reg = /^[0-9]{1,9}([.]{1}[0-9]{1,3})?$/;
		return reg.test(value);
	},
	isNull:function(str){//验证是否为空
		var value = $("#" + id).val();
		value = $.trim(value);
		if (value == "") {
			return true;
		} else {
			return false;
		}
	},
	isMoneyValue:function(str){//校验是否是金额 ，后三位
		var regu =  /^\d+([.]{1}[0-9]{1,3})?$/;
		return regu.test(str);
	},
	isNullValue:function(value){//验证是否为空
		value = $.trim(value);
		if (value == "") {
			return true;
		} else {
			return false;
		}
	},
	ispCode:function(str){
		var regu =  /^[1-9]\d{5}(?!\d)$/;
		return regu.test(str);
	},//邮政编码正则
	isObjNull:function(value){
		value = $.trim(value);
		if($.isEmptyObject(value)){
			return true;
		}else{
			return false;
		}
	},
	getStrLength:function(str){//获取字符串字节长度
		return str.replace(/[^\x00-\xff]/g, 'xx').length;
	},
	isQQ:function(str){
		var checkqqPattern= /^\d{5,10}$/;
		return checkqqPattern.test(str);
	},
	validateWebsite:function(){//网址的验证
		 var strRegex = "^((https|http|ftp|rtsp|mms)?://)"
	    + "?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?" //ftp的user@
	    + "(([0-9]{1,3}\.){3}[0-9]{1,3}" // IP形式的URL- 199.194.52.184
	    + "|" // 允许IP和DOMAIN（域名）
	    + "([0-9a-z_!~*'()-]+\.)*" // 域名- www.
	    + "([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\." // 二级域名
	    + "[a-z]{2,6})" // first level domain- .com or .museum
	    + "(:[0-9]{1,4})?" // 端口- :80
	    + "((/?)|" // a slash isn't required if there is no file name
	    + "(/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+/?)$";
	    var re=new RegExp(strRegex);
	    if (re.test(str_url)){
	        return true;
	    }else{
	        return false;
	    }
	}
};




//校验工具
function CheckTool() {
	this.isCode4 = function(str){//是否是四位数字验证码
		var regu = /^[0-9]{4}$/;
		return regu.test(str);
	};
	
	this.checkEmpty=function(inStr){
		return typeof(inStr)=='undefined'||inStr==null||inStr=="";
	};
	
	this.checkPhone=function(phone){
		var checkPhonePattern = /^(130|131|132|133|134|135|136|137|138|139|145|147|150|151|152|153|155|156|157|158|159|170|176|177|178|180|181|182|183|184|185|186|187|188|189)\d{8}$/;
		return checkPhonePattern.test(phone);
	};
	
	this.checkEmail=function(email){
		var checkEmailPattern= /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
		return checkEmailPattern.test(email);
	};
	
	this.checkEmoji=function(emoji){
		//var checkEmojiPattern= /^[\ud83c-\ud83c][\udc00-\udfff]|[\ud83d-\ud83d][\udc00-\udfff]|[\u2600-\u27ff]$/;
		//var checkEmojiPattern = new RegExp("[\\u4E00-\\u9FFF]+","g");
		var checkEmojiPattern = new RegExp("[\\ud83c-\ud83c][\\udc00-\\udfff]|[\\ud83d-\\ud83d][\\udc00-\\udfff]|[\\u2600-\\u27ff]+","g");
		return checkEmojiPattern.test(emoji);
	};
	
	this.checkUserName=function(userName){
		return !this.checkEmpty(userName)&&(this.checkPhone(userName)||this.checkEmail(userName));
	};
	
	this.checkPwd=function(pwd){
		return !this.checkEmpty(pwd)&&pwd.length>=6;
	};
	
	this.checkIp=function(ip){
		var checkIpPattern= /^(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])$/;
		return checkIpPattern.test(ip);
	};
	//校验特殊字符，只能输入中文、英文、数字以及下划线
	this.checkSpecialCharacter=function(str){
		var checkSpecialCharacterPattern=/^[\u4e00-\u9fa5_a-zA-Z0-9]+$/;
		return checkSpecialCharacterPattern.test(str);
	};
	
	this.checkURL=function(url){
		var checkUrlPattern= /^((http|https|ftp)\:\/\/)?([a-zA-Z0-9\.\-]+(\:[a-zA-Z0-9\.&amp;%\$\-]+)*@)*((25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])|localhost|([a-zA-Z0-9\-]+\.)*[a-zA-Z0-9\-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(\:[0-9]+)*$/;
		return checkUrlPattern.test(url);
	};
	
	/**
	 * 端口验证
	 */
	this.checkPort=function(port){
		var checkPortPattern= /^\d{1,6}$/;
		return checkPortPattern.test(port);
	};
	
	/**
	 * qq
	 */
	this.checkQQ=function(qq){
		var checkqqPattern= /^\d{5,10}$/;
		return checkqqPattern.test(qq);
	};
	
	/**
	 *  电话号码正则表达式（支持手机号码，3-4位区号，7-8位直播号码，1－4位分机号）
	 */
	this.checkContactTel=function(tel){
		if(!this.checkPhone(tel)){
			var reg = /^(\d{4}|\d{3})-?(\d{7,8})$/;
			return reg.test(tel);
		}
		return true;
	};
	
}

var CheckTool=new CheckTool();