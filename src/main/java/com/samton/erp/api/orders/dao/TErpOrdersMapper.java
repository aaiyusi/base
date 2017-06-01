package com.samton.erp.api.orders.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.session.RowBounds;

import com.samton.erp.api.orders.bean.entity.TErpOrders;
import com.samton.erp.api.orders.bean.entity.vo.OrderExportVo;
import com.samton.erp.api.orders.bean.entity.vo.OrderPrintVo;
import com.samton.erp.api.orders.bean.entity.vo.OrderTnumberVo;
import com.samton.erp.api.orders.bean.entity.vo.OrdersVo;
import com.samton.platform.common.bean.param.JqParamBean;
import com.samton.platform.framework.exception.ServiceException;

public interface TErpOrdersMapper {
    int deleteByPrimaryKey(Long ordersId);

    int insert(TErpOrders record);

    int insertSelective(TErpOrders record);

    TErpOrders selectByPrimaryKey(Long ordersId);

    int updateByPrimaryKeySelective(TErpOrders record);

    int updateByPrimaryKey(TErpOrders record);
    
    int queryOrderCodeIsExists(TErpOrders record);
    
    int queryOrderDealNumIsExists(TErpOrders record);
    
    List<Map<String, Object>> queryOrdersList(JqParamBean jqParamBean,RowBounds rowBounds);
    
    Long queryOrderCountByState(@Param("enterpriseId") long enterpriseId, @Param("orderState") short orderState);
    
    int batchDealOrderState(@Param("orderState") short orderState, @Param("idList") List<Long> idList);
    
    List<Map<String, Object>> queryDistributionPrintSetPreviewList(@Param("idList") List<Long> idList);
    
    List<Map<String, Object>> queryPrintSetPreviewList(@Param("idList") List<Long> idList);
    
    /**
     * 根据订单编号或货运单号查询订单信息
     * @param ordersCode
     * @param enterpriseId
     * @return
     * @throws ServiceException
     */
    TErpOrders queryOrdersInfoByCode(@Param("ordersCode") String ordersCode, @Param("enterpriseId") long enterpriseId) throws ServiceException;
    
    /**
     * 根据订单编号查询订单信息
     * @param ordersCode
     * @param enterpriseId
     * @return
     * @throws ServiceException
     */
    TErpOrders queryOrderInfoByName(@Param("ordersCode") String ordersCode,@Param("trackNumber") String trackNumber,@Param("tradeCode") String tradeCode, @Param("enterpriseId") long enterpriseId) throws ServiceException;
    
    /**
     * 查询所有的订单
     * @param ordersId
     * @param enterpriseId
     * @return
     * @throws Exception
     */
    List<TErpOrders> queryAllSubOrderByTopId(@Param("topOrderId") long ordersId, @Param("enterpriseId") long enterpriseId) throws ServiceException;
    
    /**
     * 查询关联订单
     * @param ordersId
     * @param enterpriseId
     * @return
     * @throws ServiceException
     */
    List<OrdersVo> queryRelateOrderById(@Param("ordersId") long ordersId, @Param("enterpriseId") long enterpriseId) throws ServiceException;
    
    /**
     * 根据订单id查询订单信息
     * @param idList
     * @return
     */
    List<TErpOrders> queryOrdersByIds(@Param("idList") List<Long> idList) throws ServiceException;
    
    /**
     * 查询订单自动填充运单号列表
     * @param idList
     * @param enterpriseId
     * @return
     * @throws ServiceException
     */
    List<OrderTnumberVo> queryOrderTradeNumList(@Param("idList") List<Long> idList, @Param("enterpriseId") long enterpriseId) throws ServiceException;
    
    /**
     * 将订单标记为已打印
     * @param idList
     * @param orderState
     * @param isPrint
     * @return
     * @throws ServiceException
     */
    int markOrderIsPrint(@Param("idList") List<Long> idList,@Param("orderState") short orderState,@Param("isPrint") short isPrint) throws ServiceException;
    
    /**
     * 批量更改订单状态
     * @param ids
     * @param orderState
     * @param userId
     * @param userName
     * @param enterpriseId
     * @return
     * @throws ServiceException
     */
    List<Map<String, String>> batchUpdateOrdersState(@Param("ids") String ids, @Param("orderState") short orderState, @Param("userId") long userId, @Param("userName") String userName, @Param("enterpriseId") long enterpriseId) throws ServiceException;
    
    /**
     * 批量修改订单信息
     * @param names
     * @param orderState
     * @param logisticsId
     * @param remark
     * @param userId
     * @param userName
     * @param enterpriseId
     * @return
     * @throws ServiceException
     */
    List<Map<String, String>> batchUpdateOrder(@Param("names") String names, @Param("orderState") Short orderState,@Param("logisticsId") String logisticsId,@Param("remark") String remark,@Param("editLogist") String editLogist,@Param("editState") String editState,@Param("editRemark") String editRemark,@Param("userId") long userId, @Param("userName") String userName, @Param("enterpriseId") long enterpriseId) throws ServiceException;
    
    /**
     * 判断订单是否缺货
     * @param ordersId
     * @return
     * @throws ServiceException
     */
    int judgeOrderIsStockout(long ordersId) throws ServiceException;
    
    /**
     * 通过订单编号集合查询订单
     *  @param names
     *  @param enterpriseId
     *  @return
     *  @throws ServiceException
     *  @author        liujiping
     *  @Date          2016年4月25日
     */
    List<OrderPrintVo> queryOrderPrintVoByIds(@Param("ids") List<Long>  ids, @Param("enterpriseId") long enterpriseId) throws ServiceException;
    
    /**
     * 查询导出的列表
     * @param jqParamBean
     * @param rowBounds
     * @return
     * @throws ServiceException
     */
    List<OrderExportVo> queryOrderExportList(JqParamBean jqParamBean,RowBounds rowBounds) throws ServiceException;
    
    /**
     * 统计订单总数
     * @param enterpriseId
     * @return
     * @throws ServiceException
     */
    List<Map<String, Object>> queryOrderCount(@Param("enterpriseId") long enterpriseId,@Param("userId") long userId) throws ServiceException;
    
    /**
     * 根据订单编号获取订单id
     * @param names
     * @return
     * @throws ServiceException
     */
    List<Map<String, Object>> queryOrderIdsByName(@Param("names") String names) throws ServiceException;
    
    /**
     * 根据订单编号查询订单
     *  @param name
     *  @param enterpriseId
     *  @return
     *  @throws ServiceException
     *  @author        liujiping
     *  @Date          2016年5月5日
     */
    OrderPrintVo queryOrderPrintVoByName(@Param("name") String  name, @Param("enterpriseId") long enterpriseId) throws ServiceException;
}