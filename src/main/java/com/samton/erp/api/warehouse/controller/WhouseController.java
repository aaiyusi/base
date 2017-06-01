package com.samton.erp.api.warehouse.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import net.sf.json.JSONArray;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.samton.erp.api.warehouse.bean.entity.TErpShelf;
import com.samton.erp.api.warehouse.bean.entity.TErpWarehouse;
import com.samton.erp.api.warehouse.constant.WhouseExpCodeConstant;
import com.samton.erp.api.warehouse.service.IWarehouseService;
import com.samton.platform.common.bean.param.JqParamBean;
import com.samton.platform.framework.base.SdkBaseController;
import com.samton.platform.framework.exception.ControllerException;
import com.samton.platform.framework.exception.ServiceException;

@Controller
@RequestMapping("/api/warehouse")
public class WhouseController extends SdkBaseController{

	private final static String PRINT_SPACE_LIST = "whouse/printSpace";
	
	@Resource
	private IWarehouseService warehouseService;
	
	@ResponseBody
	@RequestMapping("/getErpWarehouse")
	public Map<String,Object> getErpWarehouse(){
		return this.getResultMap(warehouseService.getErpWarehouse());
	}
	
	@ResponseBody
	@RequestMapping("/getErpWarehouseDetail")
	public Map<String,Object> getErpWarehouseDetail(long whouseId){
		TErpWarehouse  warehouse=warehouseService.getErpWarehouseById(whouseId);
		JqParamBean paramBean=new JqParamBean();
		TErpWarehouse searchObj=new TErpWarehouse();
		searchObj.setWhouseId(whouseId);
		paramBean.setSearch(searchObj);
		Map<String, Object> rsMap=this.getResultMap(warehouse);
//		Pagination<TErpShelf>  shelfs=warehouseService.getErpShelfByWhouseId(paramBean);
//		rsMap.put("shelfs", shelfs);
		return rsMap;
	}
	
	@ResponseBody
	@RequestMapping("/toggleWhouseState")
	public Map<String,Object> toggleWhouseState(long whouseId) throws ServiceException{
		return this.getResultMap(warehouseService.toggleWhouseState(whouseId));
	}
	
	
	@ResponseBody
	@RequestMapping("/toggleShelfState")
	public Map<String,Object> toggleShelfState(long shelfId){
		return this.getResultMap(warehouseService.toggleErpShelfState(shelfId));
	}
	
	@ResponseBody
	@RequestMapping("/getErpShelfByWhouseId")
	public Map<String,Object> getErpShelfByWhouseId(JqParamBean paramBean,TErpShelf shelf){
		paramBean.setSearch(shelf);
		return this.getResultMap(warehouseService.getErpShelfByWhouseId(paramBean));
	}
	
	@ResponseBody
	@RequestMapping("/addOrUpdateWhouse")
	public Map<String,Object> addOrUpdateWhouse(TErpWarehouse warehouse) throws ControllerException{
		if(warehouse.getWhouseId()==null){
			TErpWarehouse whouseName = warehouseService.getErpWarehouseByWhouseName(warehouse.getWhouseName());
			if(whouseName != null){
				throw new ControllerException(WhouseExpCodeConstant.WHOUSE_INFO_EXIS, "仓库名已存在！");
			}
			long warehouseId=warehouseService.addErpWarehouse(warehouse);
			return this.getResultMap(warehouseId);
		}else {
			return this.getResultMap(warehouseService.updateErpWarehouse(warehouse));
		}
	}
	
	
	@ResponseBody
	@RequestMapping("/addErpShelf")
	public Map<String,Object> addErpShelf(TErpShelf shelf){
			return this.getResultMap(warehouseService.addErpShelf(shelf));
	}
	
	@ResponseBody
	@RequestMapping("/updateErpShelf")
	public Map<String,Object> updateErpShelf(TErpShelf shelf){
			return this.getResultMap(warehouseService.updateErpShelf(shelf));
	}
	
	@ResponseBody
	@RequestMapping("/getShelfSeq")
	public Map<String,Object> getShelfSeq(){
			return this.getResultMap(warehouseService.getShelfSeq());
	}

	@ResponseBody
	@RequestMapping("/getWhouseShelfSpace")
	public Map<String, Object> getWhouseShelfSpace(){
		Map<String, Object> m = new HashMap<String, Object>(0);
		m.put("whouse", warehouseService.getAllWhouse());
		m.put("shelf", warehouseService.getAllShelf(Long.parseLong("0")));
		m.put("space", warehouseService.getAllSpace(Long.parseLong("0")));
		
		return this.getResultMap(m);
	}
	
	/**
	 * 根据货架id查询货架
	 * @param shelfId
	 * @return
	 */
	@ResponseBody
	@RequestMapping("/getShelfById")
	public Map<String,Object> getShelfById(long shelfId){
			return this.getResultMap(warehouseService.getErpShelfById(shelfId));
	}
	
	/**
	 * 根据货架id查询仓位
	 * @param shelfId
	 * @return
	 */
	@RequestMapping("/getSpacesByShalf")
	public String getSpacesByShalf(long shelfId){
		List<Map<String,Object>> list = warehouseService.getSpacesByShalf(shelfId);
		JSONArray jsonmap = JSONArray.fromObject(list);
		request.setAttribute("list", jsonmap);
		return PRINT_SPACE_LIST;
	}
	
	
}
