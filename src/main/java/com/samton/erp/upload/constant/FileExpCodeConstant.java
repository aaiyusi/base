package com.samton.erp.upload.constant;

import org.springframework.stereotype.Component;

import com.samton.platform.framework.exception.constant.ExpCodeConstant;

/**
 * 
 *
 * @Description:文件上传下载异常编码常量类
 * @date:        2016年10月18日 下午4:03:00
 */
@Component
public class FileExpCodeConstant extends ExpCodeConstant {

	public static final String ILLEGAL_FILE ="2401";
	public static final String FILE_TOO_LARGE ="2402"; 
	public static final String ENTERPRISE_SPACE_FULL ="2403"; 
	
	 static{
		 msgMap.put(ILLEGAL_FILE, "非法文件!");
		 msgMap.put(FILE_TOO_LARGE, "文件过大!");
		 msgMap.put(ENTERPRISE_SPACE_FULL, "您的企业存储空间已满，请开通更多的存储空间后再上传!");
	 }
}
