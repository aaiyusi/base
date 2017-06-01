package com.samton.erp.upload.controller;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.commons.CommonsMultipartFile;

import com.samton.erp.common.constant.ModuleConstant;
import com.samton.erp.upload.service.IFileService;
import com.samton.platform.framework.base.SdkBaseController;

/**
 * 
 *
 * @Description:公共上传组件Controller类
 * @date:        2016年10月18日 下午3:33:43
 */
@Controller
@RequestMapping("/api/upload")
public class FileUpoadController extends SdkBaseController {

	@Resource
	private IFileService fileService;
	
	/**
	 * 
	 * @Title:        fileUpload 
	 * @Description:  单文件上传
	 * @param:        @param file
	 * @param:        @param request
	 * @param:        @return
	 * @param:        @throws Exception    
	 * @return:       Map<String,Object>    
	 * @Date          2016年10月18日 下午3:48:35
	 */
	@RequestMapping(value = "/fileUpload")
	@ResponseBody
	public Map<String, Object> fileUpload(@RequestParam("file") CommonsMultipartFile file,HttpServletRequest request) throws Exception{
		String modelName = request.getParameter("modelName");
		if(StringUtils.isEmpty(modelName)){
			modelName = ModuleConstant.LISTING;
		}
		Map<String,Object> fileInfo = fileService.uploadFileSingle(file, request, modelName);
		Map<String,Object> result = new HashMap<String,Object>();
		result.put("rs", fileInfo.get("rs"));
		result.put("fileInfo", fileInfo);
		return this.getResultMap(result);
	}
}
