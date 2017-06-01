package com.samton.erp.api.warehouse.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.samton.erp.api.goods.bean.entity.TErpGoods;
import com.samton.erp.api.goods.bean.entity.TErpGoodsStorage;
import com.samton.erp.api.goods.dao.TErpGoodsMapper;
import com.samton.erp.api.goods.dao.TErpGoodsStorageMapper;
import com.samton.erp.api.orders.constant.OrderExpCodeConstant;
import com.samton.erp.api.warehouse.bean.entity.TErpShelf;
import com.samton.erp.api.warehouse.bean.entity.TErpSpace;
import com.samton.erp.api.warehouse.bean.entity.TErpWarehouse;
import com.samton.erp.api.warehouse.bean.entity.TErpWarehouseUser;
import com.samton.erp.api.warehouse.bean.entity.TErpWhouseCheck;
import com.samton.erp.api.warehouse.bean.entity.TErpWhouseCheckDetail;
import com.samton.erp.api.warehouse.bean.entity.TErpWhouseStorage;
import com.samton.erp.api.warehouse.bean.entity.TErpWhouseStorageDetail;
import com.samton.erp.api.warehouse.bean.entity.WhouseCheckChild;
import com.samton.erp.api.warehouse.bean.entity.WhouseStorageChild;
import com.samton.erp.api.warehouse.constant.WarehouseConstant;
import com.samton.erp.api.warehouse.constant.WhouseExpCodeConstant;
import com.samton.erp.api.warehouse.dao.TErpShelfMapper;
import com.samton.erp.api.warehouse.dao.TErpSpaceMapper;
import com.samton.erp.api.warehouse.dao.TErpWarehouseMapper;
import com.samton.erp.api.warehouse.dao.TErpWarehouseUserMapper;
import com.samton.erp.api.warehouse.dao.TErpWhouseCheckDetailMapper;
import com.samton.erp.api.warehouse.dao.TErpWhouseCheckMapper;
import com.samton.erp.api.warehouse.dao.TErpWhouseOutInFlowMapper;
import com.samton.erp.api.warehouse.dao.TErpWhouseStorageDetailMapper;
import com.samton.erp.api.warehouse.dao.TErpWhouseStorageMapper;
import com.samton.erp.api.warehouse.service.IWarehouseService;
import com.samton.platform.common.bean.param.JqParamBean;
import com.samton.platform.core.constant.StateConstant;
import com.samton.platform.framework.exception.ControllerException;
import com.samton.platform.framework.exception.ServiceException;
import com.samton.platform.framework.mybatis.pagination.PageContext;
import com.samton.platform.framework.mybatis.pagination.Pagination;
import com.samton.platform.framework.util.CurrentUtil;
@Service("warehouseService")
public class WarehouseServiceImpl implements IWarehouseService {

	@Resource
	private TErpWarehouseMapper warehouseMapper;
	@Resource
	private TErpShelfMapper shelfMapper;
	@Resource
	private TErpSpaceMapper spaceMapper;
	@Resource
	private TErpWhouseStorageMapper whouseStorage;
	@Resource
	private TErpWhouseStorageDetailMapper whouseStorageDetial;
	@Resource
	private TErpWhouseCheckMapper whouseCheck;
	@Resource
	private TErpWhouseCheckDetailMapper whouseCheckDetial;
	@Resource
	private TErpWarehouseMapper whouse;
	@Resource
	private TErpGoodsMapper goodsMapper;
	@Resource
	private TErpWhouseOutInFlowMapper whouseOutInFlow;
	@Resource
	private TErpGoodsStorageMapper goodsStorageMapper;//关联表
	@Resource
	private TErpWarehouseUserMapper warehouseUserMapper;
	
	/**
	 * 出入库操作
	 * @param whouseChild
	 * @return
	 * @throws ServiceException
	 */
	@Override
	public long addStorage(WhouseStorageChild whouseChild) throws ServiceException {
		
		CurrentUtil.setBaseBeanByInsert(whouseChild.getWhouseStorage());
		whouseChild.getWhouseStorage().setEnterpriseId(CurrentUtil.getCurrentUser().getEnterpriseId());
		int i = whouseStorage.insertSelective(whouseChild.getWhouseStorage());//新增主体类
		int count = 0;//出入库总数
		
		for(TErpWhouseStorageDetail li:whouseChild.getWsdList()){
			CurrentUtil.setBaseBeanByInsert(li);
			li.setEnterpriseId(CurrentUtil.getCurrentUser().getEnterpriseId());
			/*商品库存增加操作*/
			if(whouseChild.getWhouseStorage().getType() == 1){//入库
				TErpGoods goods = goodsMapper.queryGoodsInfoBySku(li.getSku(), CurrentUtil.getCurrentUser().getEnterpriseId());
				goods.setInventoryCount(goods.getInventoryCount()+li.getCount());//商品库存数据增加
				CurrentUtil.setBaseBeanByModify(goods);
				goodsMapper.updateByPrimaryKeySelective(goods);
				//关联表数量修改
				TErpGoodsStorage goodsStorage = goodsStorageMapper.querySkuByWhouseSku(whouseChild.getWhouseStorage().getWhouseId(),li.getSku());
				if(goodsStorage == null){//新增
					TErpGoodsStorage temp = new TErpGoodsStorage();
					CurrentUtil.setBaseBeanByInsert(temp);
					temp.setWhouseId(whouseChild.getWhouseStorage().getWhouseId());
					temp.setSpaceId(li.getSpaceId());
					temp.setState((short)1);
					temp.setGoodsId(goods.getGoodsId());
					temp.setInventoryCount(li.getInventoryCount());
					goodsStorageMapper.insertSelective(temp);//通过入库保存商品与仓库仓位的关联表
				}else{//修改
					goodsStorage.setSpaceId(li.getSpaceId());
					goodsStorage.setInventoryCount(goodsStorage.getInventoryCount() + li.getCount());
					CurrentUtil.setBaseBeanByModify(goodsStorage);
					goodsStorageMapper.updateByPrimaryKeySelective(goodsStorage);
				}
				//仓库相关数据
				TErpSpace space = spaceMapper.selectByPrimaryKey(li.getSpaceId());
				space.setInventoryCount(space.getInventoryCount() + li.getCount());
				spaceMapper.updateByPrimaryKeySelective(space);
				TErpShelf shelf = shelfMapper.selectByPrimaryKey(space.getShelfId());
				shelf.setInventoryCount(shelf.getInventoryCount() + li.getCount());
				shelfMapper.updateByPrimaryKeySelective(shelf);
			}else{//出库
				TErpGoods goods = goodsMapper.queryGoodsInfoBySku(li.getSku(), CurrentUtil.getCurrentUser().getEnterpriseId());
				goods.setInventoryCount(goods.getInventoryCount()-li.getCount());//商品库存数据减少
				goodsMapper.updateByPrimaryKeySelective(goods);
				//关联表数量修改
				TErpGoodsStorage goodsStorage = goodsStorageMapper.selectByGidSpaceId(goods.getGoodsId(),li.getSpaceId());
				goodsStorage.setInventoryCount(goodsStorage.getInventoryCount() - li.getCount());
				goodsStorageMapper.updateByPrimaryKeySelective(goodsStorage);
				//仓库相关数据
				TErpSpace space = spaceMapper.selectByPrimaryKey(li.getSpaceId());
				space.setInventoryCount(space.getInventoryCount() - li.getCount());
				spaceMapper.updateByPrimaryKeySelective(space);
				TErpShelf shelf = shelfMapper.selectByPrimaryKey(space.getShelfId());
				shelf.setInventoryCount(shelf.getInventoryCount() - li.getCount());
				shelfMapper.updateByPrimaryKeySelective(shelf);
			}
			count = count +li.getCount();
			li.setStorageId(whouseChild.getWhouseStorage().getStorageId());//主表id
			whouseStorageDetial.insertSelective(li);
			
		}
		/**
		 * 仓库货架仓位里面数据修改
		 */
		if(whouseChild.getWhouseStorage().getType() == 1){//入库
			TErpWarehouse house = warehouseMapper.selectByPrimaryKey(whouseChild.getWhouseStorage().getWhouseId());
			house.setInventoryCount(house.getInventoryCount() + count);
			warehouseMapper.updateByPrimaryKeySelective(house);
		}else{
			TErpWarehouse house = warehouseMapper.selectByPrimaryKey(whouseChild.getWhouseStorage().getWhouseId());
			house.setInventoryCount(house.getInventoryCount() - count);
			warehouseMapper.updateByPrimaryKeySelective(house);
		}
		
		
		return i;
	}

	
	/**
	 * 仓库下拉列表
	 * @param whouseChild
	 * @return
	 * @throws ServiceException
	 */
	@Override
	public List<Map<String, Object>> warehouseSelect() throws ServiceException {
		List<Map<String,Object>> list = new ArrayList<Map<String,Object>>();
		if(CurrentUtil.getCurrentUser().getIsAdmin() == 1 || CurrentUtil.getCurrentUser().getIsManager() == 1){//管理员或者admin
			list =  warehouseMapper.selectIdNameByAllNoContant(CurrentUtil.getCurrentUser().getEnterpriseId());
		}else{
			list =  warehouseMapper.selectIdNameByAll(CurrentUtil.getCurrentUser().getEnterpriseId(),CurrentUtil.getCurrentUser().getUserId());
		}
		return list;
	}
	
	public Map<Short, List<TErpWarehouse>> getErpWarehouse(){
		List<TErpWarehouse>  selfWarehouses = new ArrayList<TErpWarehouse>();
		List<TErpWarehouse>  thirdWarehouses = new ArrayList<TErpWarehouse>();
		if(CurrentUtil.getCurrentUser().getIsAdmin() == 1 || CurrentUtil.getCurrentUser().getIsManager() == 1){//admin或者manager查询所有
			selfWarehouses=warehouseMapper.getErpWarehouseByPropertyNoContant(WarehouseConstant.PROPERTY_SELF,CurrentUtil.getCurrentUser().getEnterpriseId());
			thirdWarehouses=warehouseMapper.getErpWarehouseByPropertyNoContant(WarehouseConstant.PROPERTY_THIRD,CurrentUtil.getCurrentUser().getEnterpriseId());
		}else{//不是admin需要根据关联表查询
			selfWarehouses=warehouseMapper.getErpWarehouseByProperty(WarehouseConstant.PROPERTY_SELF,CurrentUtil.getCurrentUser().getEnterpriseId(),CurrentUtil.getCurrentUser().getUserId());
			thirdWarehouses=warehouseMapper.getErpWarehouseByProperty(WarehouseConstant.PROPERTY_THIRD,CurrentUtil.getCurrentUser().getEnterpriseId(),CurrentUtil.getCurrentUser().getUserId());
		}
		Map<Short, List<TErpWarehouse>> warehouseMap=new HashMap<Short, List<TErpWarehouse>>();
		warehouseMap.put(WarehouseConstant.PROPERTY_SELF, selfWarehouses);
		warehouseMap.put(WarehouseConstant.PROPERTY_THIRD, thirdWarehouses);
		return warehouseMap;
	}
	
	/**
	 * 出入库主列表
	 * @param whouseChild
	 * @return
	 * @throws ServiceException
	 */
	@Override
	public Pagination<Map<String, Object>> queryWhouseList(
		JqParamBean jqParamBean) throws Exception {
		//封装分页参数
		Pagination<Map<String, Object>> pagination = PageContext.initialize(jqParamBean.getPage(), jqParamBean.getRows());
		//数据库操作
		List<Map<String, Object>> warehouseList = whouseStorage.queryWhouseRecord(jqParamBean,pagination.getRowBounds());
		//返回数据
		pagination.setData(warehouseList);
		return pagination;
	}
	
	/**
	 * 出入库子表列表
	 * @param whouseChild
	 * @return
	 * @throws ServiceException
	 */
	@Override
	public Pagination<Map<String, Object>> queryWhouseDetialRecord(
		JqParamBean jqParamBean) throws Exception {
		//封装分页参数
		Pagination<Map<String, Object>> pagination = PageContext.initialize(jqParamBean.getPage(), jqParamBean.getRows());
		//数据库操作
		List<Map<String, Object>> warehouseList = whouseStorageDetial.queryWhouseDetialRecord(jqParamBean,pagination.getRowBounds());
		//返回数据
		pagination.setData(warehouseList);
		return pagination;
	}
	
	@Override
	public long addErpWarehouse(TErpWarehouse warehouse) {
		warehouse.setEnterpriseId(CurrentUtil.getCurrentUser().getEnterpriseId());
		CurrentUtil.setBaseBeanByInsert(warehouse);
		warehouse.setInventoryCount(0);
		warehouseMapper.insertSelective(warehouse);
		if(CurrentUtil.getCurrentUser().getIsAdmin() != 1 && CurrentUtil.getCurrentUser().getIsManager() != 1){//如果用户为普通用户则插入权限表
			TErpWarehouseUser warehouseUser = new TErpWarehouseUser();
			CurrentUtil.setBaseBeanByInsert(warehouseUser);
			warehouseUser.setWhouseId(warehouse.getWhouseId());
			warehouseUser.setUserId(CurrentUtil.getCurrentUser().getUserId());
			warehouseUser.setState(StateConstant.ADD);
			warehouseUser.setEnterpriseId(CurrentUtil.getCurrentUser().getEnterpriseId());
			warehouseUserMapper.insertSelective(warehouseUser);
		}
		return warehouse.getWhouseId();
	}

	@Override
	public boolean stopErpWarehouse(long whouseId) {
		TErpWarehouse warehouse=warehouseMapper.selectByPrimaryKey(whouseId);
		warehouse.setState(StateConstant.DISABLE);
		CurrentUtil.setBaseBeanByModify(warehouse);
		return warehouseMapper.updateByPrimaryKeySelective(warehouse)>0;
	}
	
	@Override
	public boolean updateErpWarehouse(TErpWarehouse warehouse) {
		return warehouseMapper.updateByPrimaryKeySelective(warehouse)>0;
	}
	
	@Override
	public Pagination<TErpShelf> getErpShelfByWhouseId(JqParamBean paramBean) {
		Pagination<TErpShelf> pagination=PageContext.initialize(paramBean.getPage(), paramBean.getRows());
		List<TErpShelf> datas = shelfMapper.getErpShelfByWhouseId(paramBean,pagination.getRowBounds());
		pagination.setData(datas);
		return pagination;
	}
	
	private List<TErpSpace> buildErpSpaces(TErpShelf shelf){
		List<TErpSpace> erpSpaces=new ArrayList<TErpSpace>();
		TErpSpace erpSpace=null;
		if(shelf.getTier() != null && shelf.getLine() != null){
		for (int i = 1; i <= shelf.getTier(); i++) {
			String tierNo=i<10?"0"+i:i+"";
			for (int j = 1; j <= shelf.getLine(); j++) {
				String lineNo=j<10?"0"+j:j+"";
				String spaceCode=shelf.getShousePrefix()+tierNo+shelf.getConnector()+lineNo;
				erpSpace=new TErpSpace();
				erpSpace.setShelfId(shelf.getShelfId());
				erpSpace.setSpaceCode(spaceCode);
				erpSpace.setLine(j);
				erpSpace.setTier(i);
				erpSpace.setInventoryCount(0);
				erpSpace.setState(StateConstant.ADD);
				erpSpace.setEnterpriseId(CurrentUtil.getCurrentUser().getEnterpriseId());
				CurrentUtil.setBaseBeanByInsert(erpSpace);
				erpSpaces.add(erpSpace);
			}
		}
		}
		return erpSpaces;
	}
	
	
	@Override
	public boolean addErpShelf(TErpShelf shelf) {
		shelf.setState(StateConstant.ADD);
		shelf.setShelfId(Long.parseLong(shelf.getShelfCode()));
		shelf.setInventoryCount(0);
		shelf.setEnterpriseId(CurrentUtil.getCurrentUser().getEnterpriseId());
		CurrentUtil.setBaseBeanByInsert(shelf);
		shelfMapper.insertSelective(shelf);
		List<TErpSpace> erpSpaces=buildErpSpaces(shelf);
		int total = erpSpaces.size();
		int count = total / 1000;
		int fina = total % 1000;
		
		/**
		 * 分1000条分批入库
		 */
		
		if(total != 0){
		for(int i = 0 ;i<=count ;i++){
			List<TErpSpace> list = new ArrayList<TErpSpace>();
			if(i == count){
				list = new ArrayList<TErpSpace>(erpSpaces.subList(i*1000,i*1000+fina)); 
			}else{
				list = new ArrayList<TErpSpace>(erpSpaces.subList(i*1000,(i+1)*1000)); 
			}
			spaceMapper.batchInsert(list);
		}
		}
		/*if(erpSpaces.size() != 0){
			spaceMapper.batchInsert(erpSpaces);
		}*/
		return true;
	}
	
	@Override
	public boolean updateErpShelf(TErpShelf shelf) {
//		boolean isSpaceUsed=spaceMapper.isSpaceUsed(shelf.getShelfId())!=null;
		CurrentUtil.setBaseBeanByModify(shelf);
		TErpShelf  oldShelf=shelfMapper.selectByPrimaryKey(shelf.getShelfId());
//		if(isSpaceUsed){
//			shelf.setTier(oldShelf.getTier());
//			shelf.setLine(oldShelf.getLine());
//		}else {
			if(!oldShelf.getTier().equals(shelf.getTier())||!oldShelf.getLine().equals(shelf.getLine())){
				spaceMapper.deleteByShelfId(shelf.getShelfId());
				List<TErpSpace> erpSpaces=buildErpSpaces(shelf);
				spaceMapper.batchInsert(erpSpaces);
			}
//		}
		shelfMapper.updateByPrimaryKeySelective(shelf);
		return true;
	}
	
	@Override
	public boolean toggleErpShelfState(long shelfId) {
		TErpShelf  shelf=shelfMapper.selectByPrimaryKey(shelfId);
		shelf.setState(shelf.getState().equals(StateConstant.ADD)?StateConstant.DISABLE:StateConstant.ADD);
		CurrentUtil.setBaseBeanByModify(shelf);
		return shelfMapper.updateByPrimaryKeySelective(shelf)>0;
	}
	@Override
	public List<Map<String, Object>> selectSpaceByWhouse(long whouseId){
		return whouse.selectSpaceByWhouse(whouseId);
	}
	@Override
	public boolean toggleWhouseState(long whouseId) throws ServiceException {
		TErpWarehouse warehouse=warehouseMapper.selectByPrimaryKey(whouseId);
		if(warehouse.getState().equals(StateConstant.ADD)){
			//判断是否可以被停用
			int i = warehouseMapper.selectWhouseCanStop(whouseId,CurrentUtil.getCurrentUser().getEnterpriseId());	
			if(i != 0){
				throw new ServiceException(WhouseExpCodeConstant.WHOUSE_INFO_STOP, "仓库存在库存，不能禁用");
			}
			int j = warehouseMapper.selectWhouseCanSKUStop(whouseId, CurrentUtil.getCurrentUser().getEnterpriseId());
			if(j != 0){
				throw new ServiceException(WhouseExpCodeConstant.WHOUSE_INFO_SKU_STOP, "仓库存在待发货商品，不能禁用");
			}
			warehouse.setState(StateConstant.DISABLE);
		}else{
			warehouse.setState(StateConstant.ADD);
		}
		CurrentUtil.setBaseBeanByModify(warehouse);
		return warehouseMapper.updateByPrimaryKeySelective(warehouse)>0;
	}
	
	
	/**
	 * 根据id查询主表
	 */
	@Override
	public TErpWhouseStorage queryStorageByStorageId(Long storageId)
			throws Exception {
		return whouseStorage.selectByPrimaryKey(storageId);
	}
	
	
	
	/**
	 * 库存盘点操作
	 * @param whouseChild
	 * @return
	 * @throws ServiceException
	 */
	@Override
	public long addCheck(WhouseCheckChild checkChild) throws ServiceException {
		
		
		CurrentUtil.setBaseBeanByInsert(checkChild.getWhouseCheck());
		checkChild.getWhouseCheck().setEnterpriseId(CurrentUtil.getCurrentUser().getEnterpriseId());
		int i = whouseCheck.insertSelective(checkChild.getWhouseCheck());//新增主体类
		int count = 0;
		
		for(TErpWhouseCheckDetail li:checkChild.getWcdList()){
			CurrentUtil.setBaseBeanByInsert(li);
			li.setEnterpriseId(CurrentUtil.getCurrentUser().getEnterpriseId());
			/*商品库存盘点操作*/
				TErpGoods goods = goodsMapper.queryGoodsInfoBySku(li.getSku(), CurrentUtil.getCurrentUser().getEnterpriseId());
			li.setCheckId(checkChild.getWhouseCheck().getCheckId());//主表id
			if(Integer.parseInt(li.getDifference())>0){//入库为正数
				li.setType((short)1);
			}else{//出库
				li.setType((short)0);
			}
			//关联表数量修改
			TErpGoodsStorage goodsStorage = goodsStorageMapper.selectByGidSpaceId(goods.getGoodsId(),li.getSpaceId());
			if(goodsStorage == null){
				new Throwable("未能获取商品仓库关联信息");
				return 0;
			}
			goodsStorage.setInventoryCount(goodsStorage.getInventoryCount() + Integer.parseInt(li.getDifference()));
			goodsStorageMapper.updateByPrimaryKeySelective(goodsStorage);
			//商品存款数保存
			goods.setInventoryCount(goods.getInventoryCount() +Integer.parseInt(li.getDifference()));
			goodsMapper.updateByPrimaryKeySelective(goods);
			whouseCheckDetial.insertSelective(li);
			//仓库相关数据
			TErpSpace space = spaceMapper.selectByPrimaryKey(li.getSpaceId());
			space.setInventoryCount(space.getInventoryCount() + li.getCount());
			spaceMapper.updateByPrimaryKeySelective(space);
			TErpShelf shelf = shelfMapper.selectByPrimaryKey(space.getShelfId());
			shelf.setInventoryCount(shelf.getInventoryCount() + li.getCount());
			shelfMapper.updateByPrimaryKeySelective(shelf);
			
			count = count +Integer.parseInt(li.getDifference());
		}
		TErpWarehouse house = warehouseMapper.selectByPrimaryKey(checkChild.getWhouseCheck().getWhouseId());
		house.setInventoryCount(house.getInventoryCount() + count);
		warehouseMapper.updateByPrimaryKeySelective(house);
		
		return i;
	}
	/**
	 * 查询盘点主列表
	 * @param whouseChild
	 * @return
	 * @throws ServiceException
	 */
	@Override
	public Pagination<Map<String, Object>> queryWhouseCheckList(
			JqParamBean jqParamBean) throws Exception {
		//封装分页参数
		Pagination<Map<String, Object>> pagination = PageContext.initialize(jqParamBean.getPage(), jqParamBean.getRows());
		//数据库操作
		List<Map<String, Object>> warehouseList = whouseCheck.queryWhouseCheckList(jqParamBean,pagination.getRowBounds());
		//返回数据
		pagination.setData(warehouseList);
		return pagination;
	}
	/**
	 * 查询盘点子列表
	 * @param whouseChild
	 * @return
	 * @throws ServiceException
	 */
	@Override
	public Pagination<Map<String, Object>> queryWhouseCheckDetialRecord(
			JqParamBean jqParamBean) throws Exception {
			//封装分页参数
			Pagination<Map<String, Object>> pagination = PageContext.initialize(jqParamBean.getPage(), jqParamBean.getRows());
			//数据库操作
			List<Map<String, Object>> warehouseList = whouseCheckDetial.queryWhouseCheckDetialRecord(jqParamBean,pagination.getRowBounds());
			//返回数据
			pagination.setData(warehouseList);
			return pagination;
	}
	/**
	 * 根据盘点主id查询信息
	 * @param whouseChild
	 * @return
	 * @throws ServiceException
	 */
	@Override
	public TErpWhouseCheck querywhouseCheckByCheckId(Long checkId)
			throws Exception {
		return whouseCheck.selectByPrimaryKey(checkId);
	}
	
	@Override
	public TErpWarehouse getErpWarehouseById(long whouseId){
		return warehouseMapper.selectByPrimaryKey(whouseId);
	}


	@Override
	public long getShelfSeq() {
		return shelfMapper.getShelfSeq();
	}


	@Override
	public Pagination<Map<String, Object>> queryWhouseOutInFlow(
			JqParamBean jqParamBean) throws Exception {
		//封装分页参数
		Pagination<Map<String, Object>> pagination = PageContext.initialize(jqParamBean.getPage(), jqParamBean.getRows());
		//数据库操作
 		List<Map<String, Object>> warehouseList = whouseOutInFlow.queryWhouseOutInFlow(jqParamBean,pagination.getRowBounds());
		//返回数据
		pagination.setData(warehouseList);
		return pagination;
	}


	@Override
	public Pagination<Map<String, Object>> queryDetail(JqParamBean jqParamBean)
			throws Exception {
		//封装分页参数
		Pagination<Map<String, Object>> pagination = PageContext.initialize(jqParamBean.getPage(), jqParamBean.getRows());
		//数据库操作
		List<Map<String, Object>> warehouseList = whouseOutInFlow.queryDetail(jqParamBean,pagination.getRowBounds());
		//返回数据
		pagination.setData(warehouseList);
		return pagination;
	}


	@Override
	public List<TErpWarehouse> getAllWhouse() {
		TErpWarehouse whouse = new TErpWarehouse();
		whouse.setState(StateConstant.ADD);
		whouse.setCreateUserId(CurrentUtil.getCurrentUser().getUserId());
		whouse.setEnterpriseId(CurrentUtil.getCurrentUser().getEnterpriseId());
		whouse.setProperty(WarehouseConstant.PROPERTY_SELF);
		return warehouseMapper.getAllWhouse(whouse);
	}


	@Override
	public List<TErpShelf> getAllShelf(Long whouseId) {
		TErpShelf  shelf = new TErpShelf();
		shelf.setState(StateConstant.ADD);
		shelf.setCreateUserId(CurrentUtil.getCurrentUser().getUserId());
		shelf .setEnterpriseId(CurrentUtil.getCurrentUser().getEnterpriseId());
		if(whouseId > 0){
			shelf.setWhouseId(whouseId);
		}
		return shelfMapper.getAllShelf(shelf);
	}


	@Override
	public List<TErpSpace> getAllSpace(Long shelfId) {
		TErpSpace space = new TErpSpace();
		space.setCreateUserId(CurrentUtil.getCurrentUser().getUserId());
		space.setEnterpriseId(CurrentUtil.getCurrentUser().getEnterpriseId());
		space.setState(StateConstant.ADD);
		if(shelfId > 0){
			space.setShelfId(shelfId);
		}
		return spaceMapper.getAllSpace(space);
	}
	
	@Override
	public TErpShelf getErpShelfById(long shelfId){
		return shelfMapper.selectByPrimaryKey(shelfId);
	}


	@Override
	public List<Map<String,Object>> selectChildListByStorageId(long storageId)
			throws ServiceException {
		
		
		return whouseStorageDetial.selectChildListByStorageId(storageId,CurrentUtil.getCurrentUser().getEnterpriseId());
	}


	@Override
	public TErpWarehouse getErpWarehouseByWhouseName(String whouseName) {
		
		Long enterpriseId = CurrentUtil.getCurrentUser().getEnterpriseId();
		return warehouseMapper.selectSpaceByWhouseName(whouseName,enterpriseId);
	}


	@Override
	public List<Map<String, Object>> getSpacesByShalf(Long shelfId) {
		
		List<Map<String,Object>> list = spaceMapper.selectSpacesByShelfId(shelfId);
		return list;
	}

	@Override
	public int selectShelfCount(Long shelfId) {
		
		int count = shelfMapper.selectShelfCount(shelfId);
		return count;
	}
}
