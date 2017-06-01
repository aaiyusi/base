/**
 * 
 */
package com.samton.erp.api.orders.util;

import java.util.Locale;
import java.util.ResourceBundle;

import org.apache.log4j.Logger;

/**
 *
 * @Description:配置属性工具类
 * @author:     lijianzhou
 * @date:       2016年4月13日
 * Copyright (c) 2015, Samton. All rights reserved
 */
public class Configuration {

	protected static Logger log = Logger.getLogger(Configuration.class);

	private static class Holder{
		private static Configuration instance = new Configuration();
	}
	//是否打印日志
	public static boolean logFlag = true;

    public static Configuration getInstance() {
        return Holder.instance;
    }
    
    private static final ResourceBundle properties = ResourceBundle.getBundle("aliwish", Locale.getDefault());;
    private final String appKey;
    private final String appSecret;
    private final String wishAppKey;
    private final String wishAppSecret;
    private final String delay;
    private final String period;
    private final String startTaskFlag;

    private Configuration(){
    	 appKey = this.getProperties("appKey", null);
    	 if(appKey == null || appKey.isEmpty()){
    		 log.error("appKey is null error, please set aliwish.properties");
             System.exit(0);
    	 }
    	 appSecret = this.getProperties("appSecret", null);
    	 if(appSecret == null || appSecret.isEmpty()){
    		 log.error("appSecret is null error, please set aliwish.properties");
             System.exit(0);
    	 }
    	 wishAppKey = this.getProperties("wishAppKey", null);
    	 if(wishAppKey == null || wishAppKey.isEmpty()){
    		 log.error("wishAppKey is null error, please set aliwish.properties");
             System.exit(0);
    	 }
    	 wishAppSecret = this.getProperties("wishAppSecret", null);
    	 if(wishAppSecret == null || wishAppSecret.isEmpty()){
    		 log.error("wishAppSecret is null error, please set aliwish.properties");
             System.exit(0);
    	 }
    	 delay = this.getProperties("delay", "10");
    	 period = this.getProperties("period", "60");
    	 startTaskFlag = this.getProperties("startTaskFlag", "false");
    }
    
    private String getProperties(String key, String defalutValue) {
        String result = properties.getString(key);
        if (result == null || result.isEmpty()) {
            result = defalutValue;
        }
        return result;
    }
    
    public static String getProperties(String key){
    	String result = properties.getString(key);
    	return result;
    }
    /**
     * 应用key
     * @return
     */
	public String getAppKey() {
		return appKey;
	}
	
	/**
	 * 应用秘钥
	 * @return
	 */
	public String getAppSecret() {
		return appSecret;
	}
	
	/**
	 * 延迟时间
	 * @return
	 */
	public String getDelay() {
		return delay;
	}
	
	/**
	 * 周期时间
	 * @return
	 */
	public String getPeriod() {
		return period;
	}
	
	/**
	 * wishAppkey
	 * @return
	 */
	public String getWishAppKey() {
		return wishAppKey;
	}

	/**
	 * wishAppSecret
	 * @return
	 */
	public String getWishAppSecret() {
		return wishAppSecret;
	}

	/**
	 * 打印日志
	 * @param msg
	 */
	public void log(String msg){
		if(logFlag){
			log.debug(msg);
		}
	}

	//开始线程标志
	public String getStartTaskFlag() {
		return startTaskFlag;
	}
}
