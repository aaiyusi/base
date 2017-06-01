package com.samton.erp.api.warehouse.service;

import java.util.List;
import java.util.Map;

import com.samton.erp.api.warehouse.bean.entity.TErpShelf;
import com.samton.erp.api.warehouse.bean.entity.TErpSpace;
import com.samton.erp.api.warehouse.bean.entity.TErpWarehouse;
import com.samton.erp.api.warehouse.bean.entity.TErpWhouseCheck;
import com.samton.erp.api.warehouse.bean.entity.TErpWhouseStorage;
import com.samton.erp.api.warehouse.bean.entity.WhouseCheckChild;
import com.samton.erp.api.warehouse.bean.entity.WhouseStorageChild;
import com.samton.platform.common.bean.param.JqParamBean;
import com.samton.platform.framework.exception.ServiceException;
import com.samton.platform.framework.mybatis.pagination.Pagination;

public interface IWarehouseService {
	
	/**
	 * 入库主查询操作
	 * @param jqParamBean
	 * @return
	 * @throws ServiceException
	 */
	public Pagination<Map<String, Object>> queryWhouseList(JqParamBean jqParamBean)throws Exception;
	
	/**
	 * 入库子查询操作
	 * @param jqParamBean
	 * @return
	 * @throws ServiceException
	 */
	public Pagination<Map<String, Object>> queryWhouseDetialRecord(JqParamBean jqParamBean)throws Exception;
	
	/**
	 * 根据id查询主表
	 * @param storageId
	 * @return
	 * @throws Exception
	 */
	public TErpWhouseStorage queryStorageByStorageId(Long storageId)throws Exception;
	
	
	/**
	 * 出入库操作
	 * @param whouseChild
	 * @return
	 * @throws ServiceException
	 */
	 long addStorage(WhouseStorageChild storageChild) throws ServiceException;
	 
	
	 /**
	  * 仓库列表下拉
	  * @return
	  * @throws ServiceException
	  */
	List<Map<String, Object>> warehouseSelect() throws ServiceException;
	 
	 /**
	  * 根据仓库查询仓位
	  * @return
	  * @throws ServiceException
	  */
	List<Map<String, Object>> selectSpaceByWhouse(long whouseId) throws ServiceException;
	
	 /**
	  * 获取仓库列表信息
	  * @return
	  */
	 public Map<Short, List<TErpWarehouse>> getErpWarehouse();
	 
	 /**
	  * 新增仓库信息
	  * @return
	  */
	 public long addErpWarehouse(TErpWarehouse warehouse);
	 
	 /**
	  * 通用仓库
	  * @param whouseId
	  * @return
	  */
	 public boolean stopErpWarehouse(long whouseId);
	 
	 /**
	  * 修改仓库信息
	  * @param whouseId
	  * @return
	  */
	 public boolean updateErpWarehouse(TErpWarehouse warehouse);
	 
	 /**
	  * 获取货架列表信息
	  * @param whouseId
	  * @return
	  */
	 public Pagination<TErpShelf> getErpShelfByWhouseId(JqParamBean paramBean);
	 
	 /**
	  * 新增货架信息
	  * @param shelf
	  * @return
	  */
	 public boolean addErpShelf(TErpShelf shelf);
	 
	 /**
	  * 更新货架信息
	  * @param shelf
	  * @return
	  */
	 public boolean updateErpShelf(TErpShelf shelf);
	 
	 /**
	  * 停用/启用货架
	  * @param shelfId
	  * @return
	  */
	 public boolean toggleErpShelfState(long shelfId);
	 
	 /**
	  * 停用/启用仓库
	  * @param whouseId
	  * @return
	 * @throws ServiceException 
	  */
	 public boolean toggleWhouseState(long whouseId) throws ServiceException;
	 
	 /**
	  * 获取货架信息
	  * @param warehouseId
	  * @return
	  */
	 public TErpWarehouse getErpWarehouseById(long whouseId);
	 
	 /**
	  * 获取货架信息
	  * @param warehouseId
	  * @return
	  */
	 public TErpWarehouse getErpWarehouseByWhouseName(String whouseName);
	 
	 /**
	  * 根据主表id查询子表列表（无分页）
	  * @return
	  * @throws ServiceException
	  */
	List<Map<String,Object>> selectChildListByStorageId(long storageId) throws ServiceException;
	 
	 /******************************仓库盘点***************************/
	 /**
		 * 盘点主查询操作
		 * @param jqParamBean
		 * @return
		 * @throws ServiceException
		 */
		public Pagination<Map<String, Object>> queryWhouseCheckList(JqParamBean jqParamBean)throws Exception;
		
		/**
		 * 盘点子查询操作
		 * @param jqParamBean
		 * @return
		 * @throws ServiceException
		 */
		public Pagination<Map<String, Object>> queryWhouseCheckDetialRecord(JqParamBean jqParamBean)throws Exception;
		
		/**
		 * 根据id查询盘点主表
		 * @param storageId
		 * @return
		 * @throws Exception
		 */
		public TErpWhouseCheck querywhouseCheckByCheckId(Long checkId)throws Exception;
		
		/**
		 * 添加库存盘点操作
		 * @param whouseChild
		 * @return
		 * @throws ServiceException
		 */
		 long addCheck(WhouseCheckChild checkChild) throws ServiceException;

		 /**
		  * 获取货架的sequence
		  * @return
		  */
		 long getShelfSeq();
		 
		/**
		 * 出入库流水查询操作
		 * @param jqParamBean
		 * @return
		 * @throws ServiceException
		 */
		public Pagination<Map<String, Object>> queryWhouseOutInFlow(JqParamBean jqParamBean)throws Exception;
			
			
			/**
			 * 出入库流水详情查询操作
			 * @param jqParamBean
			 * @return
			 * @throws ServiceException
			 */
			public Pagination<Map<String, Object>> queryDetail(JqParamBean jqParamBean)throws Exception;

	/**
	 * 
	 * @Title:        getAllWhouse 
	 * @Description:  获得所有仓库信息
	 * @param:        @return    
	 * @return:       List<TErpWarehouse>    
	 * @author        Alex
	 * @Date          2016年4月13日 上午10:15:11
	 */
	public List<TErpWarehouse> getAllWhouse();

	/**
	 * 
	 * @Title:        getAllShelf 
	 * @Description:  获得所有货架信息(可根据仓库ID筛选)
	 * @param:        @param whouseId
	 * @param:        @return    
	 * @return:       List<TErpShelf>    
	 * @author        Alex
	 * @Date          2016年4月13日 上午11:03:48
	 */
	public List<TErpShelf> getAllShelf(Long whouseId);

	/**
	 * 
	 * @Title:        getAllSpace 
	 * @Description:  获得所有仓位信息(可根据货架ID筛选)
	 * @param:        @param shelfId
	 * @param:        @return    
	 * @return:       List<TErpSpace>    
	 * @author        Alex
	 * @Date          2016年4月13日 上午11:08:24
	 */
	public List<TErpSpace> getAllSpace(Long shelfId);
			
		/**
		 * 获取货架信息
		 * @param shelfId
		 * @return
		 */
		TErpShelf getErpShelfById(long shelfId);
		
		/**
		 * 根据货架id查询所有仓位
		 * @param shelfId
		 * @return
		 */
		public List<Map<String,Object>> getSpacesByShalf(Long shelfId);
		
		/**
		 * 查询货架数量
		 * @param shelfId
		 * @return
		 */
		public int selectShelfCount(Long shelfId);
}
