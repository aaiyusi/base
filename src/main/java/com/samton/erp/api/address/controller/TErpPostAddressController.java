/**回邮地址管理控制层 
 * @Title: package-info.java 
 * @Package com.samton.erp.api.address.controller 
 * @Description: TODO(用一句话描述该文件做什么) 
 * @author A18ccms A18ccms_gmail_com 
 * @date 2016年3月29日 上午10:32:53 
 * @version V1.0 
 */
package com.samton.erp.api.address.controller;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.samton.erp.api.address.bean.entity.TErpEnterprisePostAddress;
import com.samton.erp.api.address.service.TErpEnterprisePostAddressService;
import com.samton.platform.common.bean.param.JqParamBean;
import com.samton.platform.framework.base.SdkBaseController;
import com.samton.platform.framework.mybatis.pagination.Pagination;

@Controller
@RequestMapping("/api/address")
public class TErpPostAddressController extends SdkBaseController {
	@Resource
	private TErpEnterprisePostAddressService addressService;

	/**
	 * 分页查询回邮地址数据
	 * 
	 * @Title: TErpPostAddressController.java
	 * @Package com.samton.erp.api.address.controller
	 * @Description: TODO(用一句话描述该文件做什么)
	 * @author jinzhiqiang
	 * @date 2016年3月29日 上午11:02:13
	 * @version V1.0
	 */
	@RequestMapping("/getPostAddressList")
	@ResponseBody
	public Map<String, Object> getPostAddressList(JqParamBean paramBean)
			throws Exception {
		Pagination<TErpEnterprisePostAddress> data = addressService
				.getAddressInfoList(paramBean);
		return this.getResultMap(true, data);
	}

	/**
	 * 新增回邮地址
	 * 
	 * @Title: TErpPostAddressController.java
	 * @Package com.samton.erp.api.address.controller
	 * @Description: TODO(用一句话描述该文件做什么)
	 * @author jinzhiqiang
	 * @date 2016年3月29日 下午2:47:53
	 * @version V1.0
	 */
	@RequestMapping("/addAddress")
	@ResponseBody
	public Map<String, Object> addAddress(TErpEnterprisePostAddress te)
			throws Exception {
		return this.getResultMap(true, addressService.addAddressInfo(te));

	}

	/**
	 * 根据id获取数据
	 * 
	 * @Title: TErpPostAddressController.java
	 * @Package com.samton.erp.api.address.controller
	 * @Description: TODO(用一句话描述该文件做什么)
	 * @author jinzhiqiang
	 * @date 2016年3月29日 下午4:15:54
	 * @version V1.0
	 */
	@RequestMapping("/getAddressInfo")
	@ResponseBody
	public Map<String, Object> getAddressInfo(Long addressId) throws Exception {
		return this.getResultMap(addressService.getAddressInfo(addressId));
	}

	/**
	 * 编辑回邮地址
	 * 
	 * @Title: TErpPostAddressController.java
	 * @Package com.samton.erp.api.address.controller
	 * @Description: TODO(用一句话描述该文件做什么)
	 * @author jinzhiqiang
	 * @date 2016年3月29日 下午8:29:09
	 * @version V1.0
	 */
	@RequestMapping("/editAddress")
	@ResponseBody
	public Map<String, Object> editAddress(TErpEnterprisePostAddress te)
			throws Exception {
		return this.getResultMap(true, addressService.editAddressInfo(te));
	}

	/**
	 * 删除回邮数据
	 * 
	 * @Title: TErpPostAddressController.java
	 * @Package com.samton.erp.api.address.controller
	 * @Description: TODO(用一句话描述该文件做什么)
	 * @author jinzhiqiang
	 * @date 2016年3月29日 下午8:39:02
	 * @version V1.0
	 */
	@RequestMapping("/delAddress")
	@ResponseBody
	public Map<String, Object> delAddress(Long addressId) throws Exception {
		return this.getResultMap(addressService.delAddressInfo(addressId));
	}
}