package com.samton.erp.upload.service.impl;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.commons.CommonsMultipartFile;

import com.samton.erp.api.sys.bean.entity.TErpSysEnterpriseSet;
import com.samton.erp.api.sys.service.ISysService;
import com.samton.erp.common.constant.ModuleConstant;
import com.samton.erp.common.util.PropertiesUtil;
import com.samton.erp.upload.cache.SysCacheService;
import com.samton.erp.upload.constant.FileExpCodeConstant;
import com.samton.erp.upload.dao.LisEnterpriseAttachmeMapper;
import com.samton.erp.upload.entity.LisEnterpriseAttachme;
import com.samton.erp.upload.service.IFileService;
import com.samton.platform.core.constant.StateConstant;
import com.samton.platform.framework.bean.UserCacheBean;
import com.samton.platform.framework.exception.ServiceException;
import com.samton.platform.framework.util.CurrentUtil;

@Service("fileService")
public class FileServiceImpl implements IFileService {

	@Resource
	private ISysService sysService;
	
	@Resource
	private SysCacheService sysCacheService;
	
	@Resource
	private LisEnterpriseAttachmeMapper enterpriseAttachmeMapper;
	
	/**
	 * 
	 * @Title:        uploadFileSingle 
	 * @Description:  单文件上传
	 * @param:        @param file
	 * @param:        @param request
	 * @param:        @param modelName
	 * @param:        @return
	 * @param:        @throws ServiceException    
	 * @return:       Map<String,Object>    
	 * @author        李建洲
	 * @Date          2016年10月18日 下午3:57:40
	 */
	@Override
	public Map<String, Object> uploadFileSingle(CommonsMultipartFile file,HttpServletRequest request, String modelName) throws Exception {
		Map<String,Object> result = new HashMap<String, Object>();
		//图片上传成功后，将图片的地址写到数据库
		String filePath  = ModuleConstant.baseUploadPath;
		//得到原文件名
		String originalName = file.getOriginalFilename();
		//得到文件后缀名
		String suffixName = file.getOriginalFilename().substring(file.getOriginalFilename().indexOf("."));
		//判断是否为非法文件
		List<String> illegalSuffix = new ArrayList<String>();
		illegalSuffix.add(".jsp");
		illegalSuffix.add(".exe");
		illegalSuffix.add(".php");
		illegalSuffix.add(".html");
		illegalSuffix.add(".asp");
		illegalSuffix.add(".net");
		illegalSuffix.add(".net");
		illegalSuffix.add(".xml");
		if(!StringUtils.isEmpty(suffixName) && illegalSuffix.contains(suffixName.toLowerCase())){
			throw new ServiceException(FileExpCodeConstant.ILLEGAL_FILE, null,true);
		}
		
		//生成随机文件名
		if(StringUtils.isNotEmpty(suffixName)){
			suffixName = suffixName.toLowerCase();
		}
		
		//新的图片名称
		String newFileName = UUID.randomUUID().toString() + suffixName;
		
		//得到文件大小 单位为kb
		Long fileSize = file.getSize() / 1024;
		if(fileSize==0) fileSize=1L;
				
		//构建上传图片新路径
		UserCacheBean userCacheBean = CurrentUtil.getCurrentUser();
		if(userCacheBean != null){
			TErpSysEnterpriseSet sysEnterpriseSet = sysCacheService.getEnterpriseSetById(CurrentUtil.getCurrentUser().getEnterpriseId());
			if(sysEnterpriseSet == null && modelName != null){
				throw new ServiceException(FileExpCodeConstant.ENTERPRISE_SPACE_FULL, null,true);
			}
			
			Integer userSize = sysEnterpriseSet.getUseStorageSize();
			Integer totalSize = sysEnterpriseSet.getTotalStorageSize();
			//当企业总空间为-9999时则不限制使用空间
			if(totalSize != null && totalSize != -9999 && userSize != null){
				if(totalSize - userSize - fileSize.intValue() < 0 && modelName != null){
					throw new ServiceException(FileExpCodeConstant.ENTERPRISE_SPACE_FULL, null,true);
				}
			}
			Integer singleFileSize = sysEnterpriseSet.getFileUploadSize();
			if(fileSize > singleFileSize){
				throw new ServiceException(FileExpCodeConstant.FILE_TOO_LARGE, null,true);
			}
		}
		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
		String newUrl = modelName+File.separator+userCacheBean.getEnterpriseId()+File.separator+sdf.format(new Date());
		
		filePath = filePath + newUrl;
		//新文件
		filePath = filePath + File.separator + newFileName;
		File newFile = new File(filePath);
		if(!newFile.getParentFile().exists()){
			newFile.getParentFile().mkdirs();
		}
		
		//将内存中的文件写入磁盘
		file.transferTo(newFile);
		
		//获取系统路径
		String basePath = PropertiesUtil.getErpProperty("erp_server");
		String relativePath = basePath + ModuleConstant.imgUrl + newUrl+File.separator + newFileName;
		result.put("attachmentName", originalName);
		result.put("attachmentPath", relativePath);
		result.put("attachmentSuffix", suffixName);
		result.put("attachmentSize", fileSize);
		result.put("rs",1);
		
		//构造企业附件对象
		LisEnterpriseAttachme attach = new LisEnterpriseAttachme();
		attach.setAttType("0");
		attach.setAttName(originalName);
		attach.setAttPath(relativePath);
		attach.setAttSuffix(suffixName);
		attach.setAttSize(fileSize.intValue());
		attach.setEnterpriseId(CurrentUtil.getCurrentUser().getEnterpriseId());
		attach.setState(StateConstant.ADD);
		attach.setAttCate(1L);
		CurrentUtil.setBaseBeanByInsert(attach);
		//数据库操作
		int state = enterpriseAttachmeMapper.insertSelective(attach);
		if(state > 0){
			//增加企业的使用空间
			boolean status = sysService.useEnterpriseAttrSize(fileSize.intValue(), CurrentUtil.getCurrentUser().getEnterpriseId());
			if(status){
				sysCacheService.removeEnterpriseSetById(CurrentUtil.getCurrentUser().getEnterpriseId());
			}
		}
		return result;
	}

}
