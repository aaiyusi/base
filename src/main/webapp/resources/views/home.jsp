<%@page import="com.samton.erp.common.util.DateUtil"%>
<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/resources/platform/inc.jsp"%>
<!doctype html>
<html>
  <head>
  	<link href="${ctx.path}/resources/css/reset.css?v=${ctx.versions}" rel="stylesheet">
  	<link href="${ctx.path}/resources/css/common.css?v=${ctx.versions}" rel="stylesheet">
  	<!-- echarts图表js -->
  	<script src="${ctx.path}/resources/components/echarts/dist/echarts.min.js"></script>
  	<script src="${ctx.path}/resources/script/home/home.js"></script>
  	<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="renderer" content="webkit">
    <title></title>
    <%
    String today = DateUtil.formatDatetime(new Date(), "yyyyMMdd");
   // System.out.println(today);
    Calendar cal = Calendar.getInstance();
    int februaryDays = 28;
    int currentYear = cal.get(Calendar.YEAR);
    int currentMonth = cal.get(Calendar.MONTH) + 1;
    boolean flag=false; 
    if( (currentYear%4 == 0) && ( (currentYear%100 != 0) || (currentYear%400 == 0) )  ){
    	flag=true;
    }
    if(flag) februaryDays=29;
    String lastSevenDay = DateUtil.formatDatetime(DateUtil.addDays(new Date(), -6),  "yyyyMMdd");
    //System.out.println(lastSevenDay);
    String lastFifteenDay = DateUtil.formatDatetime(DateUtil.addDays(new Date(), -14),  "yyyyMMdd");
   // System.out.println(lastFifteenDay);
    String lastThirtyDay = DateUtil.formatDatetime(DateUtil.addDays(new Date(), -29),  "yyyyMMdd");
    //System.out.println(lastThirtyDay);
    String lastSixtyDay = DateUtil.formatDatetime(DateUtil.addDays(new Date(), -59),  "yyyyMMdd");
   // System.out.println(lastSixtyDay);
    
    request.setAttribute("today", today);
    request.setAttribute("lastSevenDay", lastSevenDay);
    request.setAttribute("lastFifteenDay", lastFifteenDay);
    request.setAttribute("lastThirtyDay", lastThirtyDay);
    request.setAttribute("lastSixtyDay", lastSixtyDay);
    request.setAttribute("februaryDays", februaryDays);
    request.setAttribute("currentMonth", currentMonth);
   	%>
   	
   	<script type="text/javascript">
   	var currentYear = "<%=currentYear%>";
   	</script>
  </head>
<body>
<section role="main" id="main">
    <div class="container-fluid">
      <div class="row">
        <div class="chartbox">
            <div class="col_tit">
              <h2>销售订单统计</h2>
              <select id="monthSelect" onchange="getChart(this)" class="select">
                <option  selected value="1" startTime="${today }" endTime="${today }"  >今天</option>
                <option value="2" startTime="${lastSevenDay }" endTime="${today }" >近7天</option>
                <option value="3" startTime="${lastFifteenDay }" endTime="${today }" >近15天</option>
                <option value="4" startTime="${lastThirtyDay }" endTime="${today }" >近30天</option>
                <option value="5" startTime="${lastSixtyDay }" endTime="${today }" >近60天</option>
              </select>
            </div>
            <div id="chartmain"  class="chartcon height260"></div>
        </div>
      </div>
       <div class="row">
        <div class="chartbox width50 fl">
            <div class="col_tit">
              <h2>订单管理</h2>
              <select id="OrderManagementSelect" onchange="OrderManagementStatistics(this)" class="select">
                <option  selected value="1" startTime="${today }" endTime="${today }"  >今天</option>
                <option value="2" startTime="${lastSevenDay }" endTime="${today }" >近7天</option>
                <option value="3" startTime="${lastFifteenDay }" endTime="${today }" >近15天</option>
                <option value="4" startTime="${lastThirtyDay }" endTime="${today }" >近30天</option>
                <option value="5" startTime="${lastSixtyDay }" endTime="${today }" >近60天</option>
              </select>
            </div>
            <div class="ordermanage_con height260">
              <ul>
                <li>
                  <div class="fl">
                      <span>待审核：</span>
                      <em id="pendingAudit">0</em>
                  </div>
                  <div class="fr">
                      <span>待交运：</span>
                      <em id="transportToBeChecked">0</em>
                  </div>
                </li>
                <li>
                  <div class="fl">
                      <span>待发货：</span>
                      <em id="toBeShipped">0</em>
                  </div>
                  <div class="fr">
                      <span>缺货：</span>
                      <em id="outOfStock">0</em>
                  </div>
                </li>
                <li>
                  <div class="fl">
                      <span>已发货：</span>
                      <em id="alreadyShipped">0</em>
                  </div>  
                  <div class="fr">
                      <span>作废：</span>
                      <em id="toVoid">0</em>
                  </div>
                </li>
                <!--
                <li>
                  <div class="fl">
                      <span>缺货订单：</span>
                      <em>38</em>
                  </div>
                  <div class="fr">
                      <span>过期订单：</span>
                      <em>38</em>
                  </div>
                </li>
                <li>
                  <div class="fl">
                      <span>留言未处理：</span>
                      <em>38</em>
                  </div>
                  <div class="fr">
                      <span>人工审核订单：</span>
                      <em>38</em>
                  </div> 
                </li>-->
              </ul>
            </div>
        </div>
        <div class="chartbox width50 fr">
            <div class="col_tit">
              <h2>渠道业绩统计</h2> 
              <select id="channelSelect" onchange="getChannelPerformanceStatis(this)" class="select">
                <option  selected value="1" startTime="${today }" endTime="${today }"  >今天</option>
                <option value="2" startTime="${lastSevenDay }" endTime="${today }" >近7天</option>
                <option value="3" startTime="${lastFifteenDay }" endTime="${today }" >近15天</option>
                <option value="4" startTime="${lastThirtyDay }" endTime="${today }" >近30天</option>
                <option value="5" startTime="${lastSixtyDay }" endTime="${today }" >近60天</option>
              </select>
            </div>
            <div class="performance_con">
              <table width="100%">
                <tr>
                  <th>销售渠道</th>
                  <th>订单数</th>
                  <th>已发货</th>
                </tr>
                <tr id="aliexpressTr">
                  <td>Aliexpress</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr id="wishTr">
                  <td>wish</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr id="otherTr">
                  <td>其它渠道</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
              </table>
            </div>
        </div>
      </div>
    </div>
</section>    
</body>
</html>
