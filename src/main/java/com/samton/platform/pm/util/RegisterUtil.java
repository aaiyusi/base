package com.samton.platform.pm.util;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class RegisterUtil {

	public static boolean isEmail(String email) {
		 String strPattern ="^([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)$";
	     Pattern p = Pattern.compile(strPattern);
	     Matcher m = p.matcher(email);
	     return m.matches();
    }
	
	public static boolean isMobileNo(String mobileNo){
		 String strPattern = "^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$";
		Pattern p = Pattern.compile(strPattern);  
		Matcher m = p.matcher(mobileNo);
		return m.matches();
	}  
	
}