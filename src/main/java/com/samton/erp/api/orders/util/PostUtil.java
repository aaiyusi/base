/**
 * 
 */
package com.samton.erp.api.orders.util;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.URL;
import java.net.URLConnection;

/**
 *
 * @Description:请求速卖通工具类
 * @author:     lijianzhou
 * @date:       2016年4月14日
 * Copyright (c) 2015, Samton. All rights reserved
 */
public class PostUtil {

	//获取accessToken
    public static String ACCESS_TOKEN = "https://gw.api.alibaba.com/openapi/param2/1/system.oauth2/getToken";
    
    public static String ALI_REFRESH_TOKEN = "https://gw.api.alibaba.com/openapi/param2/1/system.oauth2/postponeToken";
    
    public static String ALIAPI_PATH = "http://gw.api.alibaba.com/openapi/param2/1/aliexpress.open/";
    
    public static String ALIEXPRESS_ORDER_LIST = "api.findOrderListQuery";
    
    public static String ALIEXPRESS_ORDER_DETAIL = "api.findOrderById";
    
    public static String WISH_REFRESH_TOKEN = "https://merchant.wish.com/api/v2/oauth/refresh_token";
    
    public static String WISH_QUERY_ORDER = "https://merchant.wish.com/api/v2/order/get-fulfill";
    
    public static String WISH_QUERY_PRODUCT = "https://merchant.wish.com/api/v2/product/multi-get";
    
    public static String WISH_SINGLE_PRODUCT = "https://merchant.wish.com/api/v2/product";
    
    public static String post(String urlstr) throws Exception {
		URL url = new URL(urlstr);
		URLConnection conn = url.openConnection();
		conn.setDoOutput(true);
		conn.setDoInput(true);
		conn.setConnectTimeout(60000);
		OutputStreamWriter writer = new OutputStreamWriter(conn
				.getOutputStream(),"UTF-8");
		writer.flush();
		writer.close();
		InputStreamReader reder = new InputStreamReader(conn.getInputStream(),
				"UTF-8");
		BufferedReader breader = new BufferedReader(reder);
		String content = null;
		String result = "";
		while ((content = breader.readLine()) != null) {
			result += content + "\n";
		}
		return result;
	}
    
    public static String getVersion(){
    	return "1";
    }
}
