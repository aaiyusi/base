/**
 * 
 */
package com.samton.erp.common.util;

import java.util.Random;

import com.samton.platform.framework.util.DateUtil;

/**
 *
 * @Description:公共工具类
 * @author:     lijianzhou
 * @date:       2016年4月28日
 * Copyright (c) 2015, Samton. All rights reserved
 */
public final class Public {

	private Public(){
		
	}
	
	/**
	 * 根据当前时间生成随机数
	 * @return
	 * @throws Exception
	 */
	public static String genaratorRamdonString(){
		String dateStr = DateUtil.currentDatetimeNum();
		int length = 4;
		String base = "0123456789";
        Random random = new Random();
        StringBuffer sb = new StringBuffer(dateStr);
        for (int i = 0; i < length; i++) {
            int number = random.nextInt(base.length());
            sb.append(base.charAt(number));
        }
		return sb.toString();
	}
}
