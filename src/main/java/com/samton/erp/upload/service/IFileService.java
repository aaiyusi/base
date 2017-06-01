package com.samton.erp.upload.service;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.multipart.commons.CommonsMultipartFile;


public interface IFileService {

	public Map<String,Object> uploadFileSingle(CommonsMultipartFile file,HttpServletRequest request,String modelName) throws Exception;
}
