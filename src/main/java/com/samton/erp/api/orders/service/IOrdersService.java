/**
 * 
 */
package com.samton.erp.api.orders.service;

import java.util.List;
import java.util.Map;

import com.samton.erp.api.orders.bean.entity.TErpOrders;
import com.samton.erp.api.orders.bean.entity.TErpOrdersDetail;
import com.samton.erp.api.orders.bean.entity.TErpOrdersLog;
import com.samton.erp.api.orders.bean.entity.vo.OrderExportVo;
import com.samton.erp.api.orders.bean.entity.vo.OrderGoodsVo;
import com.samton.erp.api.orders.bean.entity.vo.OrderItemVo;
import com.samton.erp.api.orders.bean.entity.vo.OrderPrintVo;
import com.samton.erp.api.orders.bean.entity.vo.OrderTnumberVo;
import com.samton.erp.api.orders.bean.entity.vo.OrdersItemChild;
import com.samton.erp.api.orders.bean.entity.vo.OrdersVo;
import com.samton.platform.common.bean.param.JqParamBean;
import com.samton.platform.framework.exception.ServiceException;
import com.samton.platform.framework.mybatis.pagination.Pagination;

public interface IOrdersService {

	/**
	 * 新增订单信息
	 * @param order
	 * @return
	 * @throws ServiceException
	 */
	public int addOrder(TErpOrders order) throws ServiceException;
	
	/**
	 * 修改订单商品信息
	 * @param orderVo
	 * @return
	 * @throws ServiceException
	 */
	public int updateOrder(TErpOrders order) throws ServiceException;
	
	/**
	 * 新增订单商品清单
	 * @param orderItem
	 * @return
	 * @throws ServiceException
	 */
	public int addOrdersItem(OrderItemVo orderItem) throws ServiceException;
	
	/**
	 * 修改订单商品清单
	 * @param orderItem
	 * @return
	 * @throws ServiceException
	 */
	public int updateOrdersItem(OrderItemVo orderItem) throws ServiceException;
	
	/**
	 * 获取订单列表
	 * @param jqParamBean
	 * @return
	 */
	public Pagination<Map<String, Object>> queryOrdersList(JqParamBean jqParamBean) throws Exception;
	
	/**
	 * 查询订单日志分页列表信息
	 * @param jqParamBean
	 * @return
	 * @throws ServiceException
	 */
	public Pagination<TErpOrdersLog> queryOrdersLogList(JqParamBean jqParamBean) throws ServiceException;
	
	/**
	 * 查询导出订单列表
	 * @param jqParamBean
	 * @return
	 * @throws ServiceException
	 */
	public Pagination<OrderExportVo> queryOrderExportList(JqParamBean jqParamBean) throws ServiceException;
	
	/**
	 * 根据订单状态查询订单数量
	 * @param enterpriseId
	 * @param orderState
	 * @return
	 * @throws ServiceException
	 */
	public Long queryOrderCountByState(short orderState) throws ServiceException;
	
	/**
	 * 新增订单日志
	 * @param ordersLog
	 * @return
	 * @throws ServiceException
	 */
	public int addOrderLog(long ordersId, String content, short logType, String operationType, long enterpriseId) throws ServiceException;
	
	/**
	 * 根据订单id查询订单信息
	 * @param ordersId
	 * @return
	 * @throws ServiceException
	 */
	public TErpOrders queryOrdersInfoById(long ordersId) throws ServiceException;
	
	/**
	 * 批量处理订单状态
	 * @param orderState
	 * @param ids
	 * @return
	 * @throws ServiceException
	 */
	public boolean batchDealOrderState(short orderState, String ids) throws ServiceException;
	
	/**
	 * 查询商品是否已存在订单中
	 * @param record
	 * @return
	 * @throws ServiceException
	 */
	public boolean queryGoodsIsExists(OrderItemVo record) throws ServiceException;
	
	/**
	 * 获取订单明细列表
	 * @param orderId
	 * @return
	 * @throws ServiceException
	 */
	public List<Map<String, Object>> queryOrdersDetailList(long orderId) throws ServiceException;
	
	/**
	 * 配货订单打印列表
	 * @param ids
	 * @return
	 * @throws ServiceException
	 */
	public List<Map<String, Object>> queryDistributionPrintSetPreviewList(String ids) throws ServiceException;
	
	/**
	 * 拣货清单打印列表
	 * @param ids
	 * @return
	 * @throws ServiceException
	 */
	public List<Map<String, Object>> queryPrintSetPreviewList(String ids) throws ServiceException;
	
	/**
	 * 根据订单明细ID查询订单明细详情
	 * @param detailId
	 * @return
	 * @throws ServiceException
	 */
	public TErpOrdersDetail queryOrdersItemById(Long detailId) throws ServiceException;
	
	/**
	 * 更改订单商品的状态
	 * @param orderItem
	 * @return
	 * @throws ServiceException
	 */
	public int updateOrderItemState(OrderItemVo orderItem) throws ServiceException;
	
	/**
	 * 根据订单编号或货运单号查询订单信息
	 * @param ordersCode
	 * @return
	 * @throws ServiceException
	 */
	public TErpOrders queryOrdersInfoByCode(String ordersCode) throws ServiceException;
	
	/**
	 * 查询订单商品
	 * @param orderId
	 * @return
	 * @throws ServiceException
	 */
	public List<OrderGoodsVo> findOrderGoods(long orderId) throws ServiceException;
	
	/**
	 * 根据订单编号查询订单信息
	 * @param ordersCode
	 * @return
	 * @throws ServiceException
	 */
	public TErpOrders queryOrderInfoByName(String ordersCode,String trackNumber,String tradeCode) throws ServiceException;
	
	/**
     * 根据订单Id更改订单明细状态
     * @param record
     * @return
     * @throws ServiceException
     */
    public int updateOrderItemStateByOrderId(TErpOrdersDetail record) throws ServiceException;
    
    /**
     * 批量更新状态
     * @param state
     * @param ids
     * @return
     * @throws ServiceException
     */
    public boolean batchUpdateOrderItemState(short state, String ids) throws ServiceException;
    
    /**
     * 查询所有的订单
     * @param ordersId
     * @return
     * @throws Exception
     */
    public List<TErpOrders> queryAllSubOrderByTopId(long topOrdersId) throws Exception;
    
    /**
     * 查询关联订单信息
     * @param ordersId
     * @return
     * @throws ServiceException
     */
    public List<OrdersVo> queryRelateOrderById(long ordersId) throws ServiceException;
    
    /**
     * 根据订单id查询订单信息
     * @param idList
     * @return
     */
    public List<TErpOrders> queryOrdersByIds(String ids) throws ServiceException;
    
    /**
     * 批量重发订单
     * @param params
     * @return
     * @throws ServiceException
     */
    public List<Map<String, Object>> batchRetryOrder(Map<String,String> params) throws ServiceException;
    
    /**
     * 重发订单
     * @param ordersId
     * @param orderSplitData
     * @param remark
     * @param logisticsId
     * @param trackNumber
     * @param packageId
     * @param shippingCost
     * @param exceptionReason
     * @return
     * @throws ServiceException
     */
    public int retryOrder(String ordersId, String orderSplitData, String remark, String logisticsId, String trackNumber, String packageId, String shippingCost, String exceptionReason) throws ServiceException;
    
    /**
     * 批量修改订单
     * @param orderCodes
     * @param logisticsId
     * @param orderState
     * @param remark
     * @return
     * @throws ServiceException
     */
    public List<Map<String, String>> batchEditOrders(String orderCodes, String logisticsId, String orderState, String remark, String editLogist, String editState, String editRemark) throws ServiceException;
    
    /**
     * 批量更新交运信息
     * @param updateOrderInfo
     * @param type
     * @return
     * @throws ServiceException
     */
    public List<Map<String, Object>> batchImportOrders(String updateOrderInfo, Integer type) throws ServiceException;
    
    /**
     * 查询订单自动填充运单号列表
     * @param ids
     * @return
     * @throws ServiceException
     */
    public List<OrderTnumberVo> queryOrderTradeNumList(String ids) throws ServiceException;
    
    /**
     * 批量自动填充运单号
     * @param ids
     * @return
     * @throws ServiceException
     */
    public List<Map<String,Object>> batchAutomaticallyFillTrackNumber(String ids) throws ServiceException;
    
    /**
     * 将订单标志为已打印
     * @param platformOrderIds
     * @return
     * @throws ServiceException
     */
    public List<Map<String,Object>> printOrder(String platformOrderIds) throws ServiceException;
    
    /**
     * 新增订单
     * @param order
     * @return
     * @throws ServiceException
     */
    public int insertOrder(TErpOrders order) throws ServiceException;
    
    /**
     * 修改订单
     * @param order
     * @return
     * @throws ServiceException
     */
    public int modifyOrder(TErpOrders order) throws ServiceException;
    
    /**
     * 发货
     * @param goodsList
     * @throws ServiceException
     */
    public void deliverGoods(List<OrderGoodsVo> goodsList) throws ServiceException;
    
    /**
     * 批量发货
     * @param state
     * @param ids
     * @return
     * @throws ServiceException
     */
    public List<Map<String, String>> batchUpdateOrdersState(short state, String ids) throws ServiceException;
    
    /**
     * 激活订单
     * @param ordersId
     * @return
     * @throws ServiceException
     */
    public boolean enableOrder(String ordersId) throws ServiceException;
    
    /**
     * 新增订单商品明细
     * @param orderItem
     * @return
     * @throws ServiceException
     */
    public boolean insertOrdersItem(OrderItemVo orderItem) throws ServiceException;
    
    /**
     * 修改订单商品明细
     * @param orderItem
     * @return
     * @throws ServiceException
     */
    public boolean modifyOrdersItem(OrderItemVo orderItem) throws ServiceException;
    
    /**
     * 	通过订单id集合查询订单打印集合
     *  @param names
     *  @return
     *  @throws ServiceException
     *  @author        liujiping
     *  @Date          2016年4月25日
     */
    public List<OrderPrintVo> queryOrderPrintVoListByIds(String ids) throws ServiceException ;
    
    /**
     * 统计订单总数
     * @param enterpriseId
     * @return
     * @throws ServiceException
     */
    public List<Map<String, Object>> queryOrderCount() throws ServiceException;
    
    /**
     * 通过订单编号查询订单ID
     *  @param platformOrderIds
     *  @return
     *  @throws ServiceException
     *  @author        liujiping
     *  @Date          2016年4月29日
     */
	public  Map<String, Object>  printOrderNames(String platformOrderIds) throws ServiceException ;

    
    /**
     * 新增订单商品物流信息
     * @param itemChild
     * @return
     * @throws ServiceException
     */
    public int addOrdersGoodsLogistisInfo(OrdersItemChild itemChild) throws ServiceException;
    
    /**
     * 根据订单编号查询订单id
     * @param names
     * @return
     * @throws ServiceException
     */
    public Map<String, Object> queryOrderIdsByName(String names) throws ServiceException;

}
