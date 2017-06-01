<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/resources/platform/inc.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
    <script src="${ctx.path}/resources/platform/js/common_grid.js"></script>
    <script src="${ctx.path}/resources/platform/js/common_format.js"></script>
    <script src="${ctx.path}/resources/script/logistics/logisticsSysCompany.js"></script>
    <!-- 图片选择 -->
    <script src="${ctx.path}/resources/components/jquery/imageSelect/image-picker.min.js"></script>
	<script src="${ctx.path}/resources/components/jquery/imageSelect/jquery.masonry.min.js"></script>
	<link rel="stylesheet" href="${ctx.path}/resources/components/jquery/imageSelect/bootstrap-responsive.css" rel="stylesheet">
    <link type="text/javascript" href="${ctx.path}/resources/platform/css/new.css" rel="stylesheet">
   <link rel="stylesheet" type="text/css" href="${ctx.path}/resources/code/css/custom.css" />
    
</head>
<body>
<div class="animated fadeInRight">
	<section id="main" role="main">
	<div class="container-fluid has-toobar has-navbar multichoice" id="parentMenu">
		<div class="panel-navbar row">
			<div class="scroll-hide">
				<div class="publish-tab">
					<ul class="nav nav-tabs" id="grenul">
						<li labelname="trackManager" ><a href="javascript:void(0);"
							class="pl5 pr5"><span class="text">运单号管理</span></a></li>
						<li labelname="manualOWN" ><a href="javascript:void(0);"
							class="pl5 pr5"><span class="text">自定义物流</span></a></li>
						<li labelname="manualSYS" class="active"  ><a
							href="javascript:void(0);" class="pl5 pr5"><span class="text">系统默认物流</span></a></li>
					</ul>
				</div>
			</div>
		</div>


    <div id="serachDiv" class="row form-group-sm">
            <div class="ibox-content" >
                <form id="pageForm" method="post">
                    <div class="form-inline">
                        <div class="form-group">
                            <div class="input-group input-group-sm">
						<span class="input-group-addon">筛选</span>
						<input type="text" class="form-control" placeholder="输入物流公司名称" name="name"  id="queryName">
					</div>
                        </div>
                    </div>
                </form>
        </div>
    </div>

    <div id="buttonDiv" class="row wrapper ">
            <div class="form-inline operation_con">
                <div class="form-group">
                    <button class="btn btn-primary btn-sm" type="button" onclick="openAddPage();">新增自定义物流</button>
                </div>
            </div>
    </div>


<div class="row">
        <div class="jqGrid_wrapper white-bg">
            <table id="jqGrid"></table>
            <!-- 显示table -->
            <div id="jqGridPager"></div>
            <!-- 显示分页 -->
        </div>
</div>
</div>
</section>
</div>
<!-- 新增 -->
<div id="dataAdd" class="white-bg " style="display:none;">
	<form method="post"  class="modal-content form-horizontal form-bordered advance-search" id="dataForm"
			action="${ctx.path}/api/logisticsCompany/addLogisticsCompany.do">
			<div class="modal-body pa15 bgcolor-muted">
	<div class="modal-content noshadow">
		<div class="form-group nm">
			<div class="col-md-12">
				<p class="text-info nm text-center fsize14 bold">基本信息</p>
			</div>
		</div>
		<div class="form-group nm">
			<label class="col-sm-2 control-label"><span class="text-danger pr5">*</span>物流渠道名称</label>
			<div class="col-sm-6">
				<input type="text" class="form-control input-sm" name="name" id="nameAdd" >
			</div>
			<div class="col-sm-4 text-right">
           		<p class="loadtext-sm text-default bold">自动交运<span class="text-success pl10">不支持</span></p>
            </div>
		</div>
		<div class="form-group nm">
	  		<label class="col-sm-2 control-label">查询网址</label>
			<div class="col-sm-6">
				<input type="text" class="form-control input-sm" name="website" id="website">
			</div>
			<div class="col-sm-4">
				<a data-title="屏蔽跟踪号" data-container="body" data-content="如果您仅想去eBay上标注订单发货，而不同步跟踪单号，请勾选。注：速卖通/亚马逊订单必须上传跟踪号" data-placement="top" data-trigger="hover" data-toggle="popover" class="fa fa-ico-question-sign" href="javascript:void(0);" data-original-title="" title=""></a>
				<label class="checkbox-inline text-default bold fr">
					<input type="checkbox" id="hidetracknumber" name="hidetracknumber" value="1">
					屏蔽跟踪号				</label>
			</div>
		</div>
		<div class="form-group nm">
			<div class="col-sm-2">
				<label class="checkbox-inline text-default text-right bold"><input type="checkbox" name="autoFreight" id="auto_freight" value="1">启动算运费</label>
			</div>
			<label class="col-sm-2 control-label">运费规则</label>
			<div class="col-sm-4 has-tips">
				<div class="input-group inputgroup60 input-group-sm">
				  <select id="freight_rule" class="form-control input-sm" disabled="" type="select" name="freightRule">
					<option value="0">-请选择-</option>
					<option data-remark="适合非京沪粤苏浙闽黑的邮政挂号运费算法" value="4">中邮小包挂号算法(2)</option><option data-remark="适合京沪粤苏浙闽黑的邮政挂号运费算法" value="3">中邮小包挂号算法(1)</option><option data-remark="适合非京沪粤苏浙闽黑的邮政平邮运费算法" value="2">中邮小包平邮算法(2)</option><option data-remark="适合京沪粤苏浙闽黑的邮政平邮运费算法" value="1">中邮小包平邮算法(1)</option>				</select>
				</div>
				<a data-title="规则适用范围" data-container="body" data-content="适合京沪粤苏浙闽黑的邮政平邮运费算法" data-placement="top" data-trigger="hover" data-toggle="popover" class="tips-info ico-question-sign" href="javascript:void(0);" data-original-title="" title=""></a>
			</div>
			<label class="col-sm-2 control-label">折扣</label>
			<div class="col-sm-2 has-tips ">
			    <div class="input-group inputgroup60 input-group-sm">
				   <input type="text" class="form-control input-sm" disabled="" id="discount" name="discount" value="1">
				</div>
				<a data-title="折扣" data-container="body" data-content="例：0.75表示七五折" data-placement="top" data-trigger="hover" data-toggle="popover" class="tips-info ico-question-sign" href="javascript:void(0);" data-original-title="" title=""></a>
			</div>
		</div>
	</div>
	<div class="modal-content noshadow mt10">
		<div class="form-group nm">
			<div class="col-md-12">
				<p class="text-info nm text-center fsize14 bold">申报信息</p>
			</div>
		</div>
		<div class="form-group nm">
			<label class="col-sm-2 control-label"><span class="text-danger pr5">*</span>申报品名(中)</label>
			<div class="col-sm-4">
				<input type="text" name="declareName" id="declare_nameAdd" class="form-control input-sm" value="">
			</div>
			<label class="col-sm-2 control-label"><span class="text-danger pr5">*</span>申报品名(英)</label>
			<div class="col-sm-4">
				<input type="text" name="declareEname" id="declare_enameAdd" class="form-control input-sm" value="">
			</div>
		</div>
		<div class="form-group nm">
			<label class="col-sm-2 control-label"><span class="text-danger pr5">*</span>申报百分比</label>
			<div class="col-sm-2 has-tips">
				<div class="input-group inputgroup60 input-group-sm">
					<input type="text" name="declarePercent" id="declare_percentAdd" class="form-control" value="50"> <span class="input-group-addon">%</span>
				</div>
				<a data-title="申报价值占比" data-container="body" data-content="申报价值占订单商品总售价的百分比" data-placement="top" data-trigger="hover" data-toggle="popover" class="tips-info ico-question-sign" href="javascript:void(0);" data-original-title="" title=""></a>
			</div>
			<label class="col-sm-2 control-label"><span class="text-danger pr5">*</span>最小申报价值</label>
			<div class="col-sm-2">
				<div class="input-group input-group-sm">
					<input type="text" id="min_declareAdd" name="minDeclare" class="form-control" value="5"><span class="input-group-addon">$</span>
				</div>
			</div>
			<label class="col-sm-2 control-label"><span class="text-danger pr5">*</span>最大申报价值</label>
			<div class="col-sm-2">
				<div class="input-group input-group-sm">
					<input type="text" id="max_declareAdd" name="maxDeclare" class="form-control" value="5"><span class="input-group-addon">$</span>
				</div>
			</div>
		</div>
	</div>
	<div class="modal-content noshadow mt10">
		<div class="form-group nm">
			<div class="col-md-12">
				<p class="text-info nm text-center fsize14 bold">平台认可物流方式</p>
			</div>
		</div>
		<div class="form-group nm">
			<label class="col-sm-2 control-label">aliexpress</label>
			<div class="col-sm-2">
				<erp:dictTag className="form-control" name="aliexpressLogistics" id="aliexpressIogistics" style="width:150px" dictTypeId="4"/>	
			</div>
			<label class="col-sm-2 control-label">wish</label>
			<div class="col-sm-2">
				<erp:dictTag className="form-control" name="wishLogistics" id="wishIogistics" style="width:150px" dictTypeId="3" />	
			</div>
		</div>
	</div>
	<div class="modal-content noshadow mt10">
		<div class="form-group nm">
			 <div class="col-md-12">
             	<p class="text-info nm text-center fsize14 bold">打印标签设置</p>
            </div>
		</div>
		<div class="form-group nm">
			<label class="col-sm-2 control-label"><span class="text-danger pr5">*</span>标签打印类型</label>
			<div class="col-sm-3">
				<label class="radio-inline text-default ml15"><input type="radio" checked="checked" id="print_type" name="printType" value="2" onclick="$('#printlabel-set').show()">自定义标签</label>
			</div>
			<div class="col-sm-5">
				<p class="loadtext fl bold text-default pr5"><!-- <span class="text-danger pr5">*</span> -->标签尺寸</p>
				<erp:dictTag className="form-control" name="specType" id="specType" style="width:200px" dictTypeId="2" />	
			</div>
			<div class="col-md-2 text-right">
						<a href=“javascript:void(0);" onclick="openModuleManager()" target="_blank">标签模板管理</a>
			</div>
		</div>
		<div class="form-group nm" id="printlabel-set">
						<div class="col-md-4">
				<div class="panel panel-default nm">
					<div class="panel-heading mintype">
						<h3 class="panel-title">地址单</h3>
						<div class="panel-toolbar text-right">
							<button id="cancelAddModule1" style="display:none;" type="button"  class="btn btn-white btn-sm"  onclick="cancelModule(1,'Add')">取消</button>
							<input type="button" class="btn btn-primary btn-sm" class="btn btn-primary btn-sm"  onclick="openModule(1,'Add')"  value="选择"></input>
							<input type="hidden" name="addressTempId" id="tempIdAdd1" />
						</div>
					</div>
					<div class="panel-body pt0 pb0 pl5 pr5" id="labelId1Add">
						<div class="label-group-large">
							<div class="nodata" style="display: block;">';
	                            <h4 class="title">未启用</h4>
	                            <p>如需启用，请点击右上角的选择</p>
                            </div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-4">
				<div class="panel panel-default nm">
					<div class="panel-heading mintype">
						<h3 class="panel-title">报关单</h3>
						<div class="panel-toolbar text-right">
							<button id="cancelAddModule2" style="display:none;" type="button" class="btn btn-white btn-sm"  onclick="cancelModule(2,'Add')">取消</button>
							<input type="button" class="btn btn-primary btn-sm" onclick="openModule(2,'Add')"  value="选择"></input>
							<input type="hidden" name="declarationTempId" id="tempIdAdd2"/>
						</div>
					</div>
					<div class="panel-body pt0 pb0 pl5 pr5" id="labelId2Add">
						<div class="label-group-large">
							<div class="nodata" style="display: block;">';
	                            <h4 class="title">未启用</h4>
	                            <p>如需启用，请点击右上角的选择</p>
                            </div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-4">
				<div class="panel panel-default nm">
					<div class="panel-heading mintype">
						<h3 class="panel-title">配货单</h3>
						<div class="panel-toolbar text-right">
							<button id="cancelAddModule3" style="display:none;" type="button" class="btn btn-white btn-sm"  onclick="cancelModule(3,'Add')">取消</button>
							<input type="button" class="btn btn-primary btn-sm" onclick="openModule(3,'Add')" value="选择"></input>
							<input type="hidden" name="allocationTempId" id="tempIdAdd3"/>
						</div>
					</div>
					<div class="panel-body pt0 pb0 pl5 pr5" id="labelId3Add">
						<div class="label-group-large">
							<div class="nodata" style="display: block;">';
	                            <h4 class="title">未启用</h4>
	                            <p>如需启用，请点击右上角的选择</p>
                            </div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="modal-content noshadow mt10">
		<div class="form-group nm">
			<div class="col-md-7">
				<p class="text-info nm fsize14 bold">
					回邮地址<span class="fsize12 pl7 thin" style="color:red">(线上发货必须用英文填写)</span>
				</p>
			</div>
			<div class="col-md-5 text-right">
				<div class="btn-group">
					<select class="form-control" id="addressSelect"
								name="addressSelect"></select>
				</div>
			</div>
		</div>
		<div id="default-address1" data-id="3188">
			<input type="hidden" name="backAddressId" id="backAddressIdAdd" />
			<input type="hidden" name="AddressId" id="addressIdAdd" />
			<div class="form-group nm">
				<label class="col-sm-2 control-label">地址名称</label>
				<div class="col-sm-4"><p class="loadtext-sm" id="addressNameAdd"><button type="button" class="btn btn-primary btn-xs order-note" onclick="returnAddressHtml(1,2)"><i class="ico-pencil5"></i>修改</button></p></div>
				<label class="col-sm-2 control-label">联系人</label>
				<div class="col-sm-4"><p class="loadtext-sm"  id="proportionAdd"></p></div>
			</div>
			<div class="form-group nm">
				<label class="col-sm-2 control-label">所在地区</label>
				<div class="col-sm-2"><p class="loadtext-sm" id="countryAdd"></p></div>
				<div class="col-sm-2"><p class="loadtext-sm" id="provinceAdd"></p></div>
				<div class="col-sm-2"><p class="loadtext-sm" id="cityAdd"></p></div>
				<div class="col-sm-2"><p class="loadtext-sm" id="areaAdd"></p></div>
			</div>
			<div class="form-group nm">
				<label class="col-sm-2 control-label">详细地址</label>
				<div class="col-sm-10"><p class="loadtext-sm" id="addressesAdd"></p></div>
			</div>
			<div class="form-group nm">
				<label class="col-sm-2 control-label">邮箱</label>
				<div class="col-sm-4"><p class="loadtext-sm" id="postcodeAdd"></p></div>
				<label class="col-sm-2 control-label">公司名称</label>
				<div class="col-sm-4"><p class="loadtext-sm" id="companyNameAdd"></p></div>
			</div>
			<div class="form-group nm">
				<label class="col-sm-2 control-label">固定电话</label>
				<div class="col-sm-4"><p class="loadtext-sm" id="telephoneAdd"></p></div>
				<label class="col-sm-2 control-label">移动电话</label>
				<div class="col-sm-4"><p class="loadtext-sm" id="mobilePhoneAdd"></p></div>
			</div>
			<div class="form-group nm">
				<label class="col-sm-2 control-label">邮编</label>
				<div class="col-sm-4"><p class="loadtext-sm" id="emailAdd"></p></div>
				<label class="col-sm-2 control-label">公司传真</label>
				<div class="col-sm-4"><p class="loadtext-sm" id="companyFaxAdd"></p></div>
			</div>
		</div>
		
		<div id="addressEdit" class="white-bg" style="display:none;">
		<div class="panel panel-default">
				<div class="panel-body pt0 pb0">
					<div class="form-horizontal form-bordered min" id="contentDiv">
						<div class="form-group">
							<input type="hidden" name="addressId" id="dataId" /> <label
								class="col-sm-2 control-label"><font  color="red">*</font>名称</label>
							<div class="col-sm-4">
								<input type="text" class="form-control" id="eAddressName" name="addressName"
									placeholder="请输入名称" /> 
							</div>

							<label class="col-sm-2 control-label"><font  color="red">*</font>联系人</label>
							<div class="col-sm-4">
								<input type="text" class="form-control" id="eProportion" name="proportion"
									placeholder="请输入联系人" maxlength="50">
							</div>
						</div>
						<div class="form-group">

							<label class="col-sm-2 control-label"><font  color="red">*</font>国家</label>
							<label class="col-sm-2 control-label"><font  color="red">*</font>省</label>
							<div class="col-sm-4">
								<input type="text" class="form-control" id="eProvince" name="province" 
									placeholder="请输入省" maxlength="20">
							</div>
						</div>
						<div class="form-group">

							<label class="col-sm-2 control-label"><font  color="red">*</font>市</label>
							<div class="col-sm-4">
								<input type="text" class="form-control" id="eCity" name="city" 
									placeholder="请输入市" maxlength="20">
							</div>

							<label class="col-sm-2 control-label"><font  color="red">*</font>区</label>
							<div class="col-sm-4">
								<input type="text" class="form-control" id="eArea" name="area" 
									placeholder="请输入区" maxlength="20">
							</div>
						</div>
						<div class="form-group">

							<label class="col-sm-2 control-label"><font  color="red">*</font>地址</label>
							<div class="col-sm-4">
								<input type="text" class="form-control" id="eAddresses"  name="addresses"
									placeholder="请输入地址" maxlength="50">
							</div>

							<label class="col-sm-2 control-label"><font  color="red">*</font>邮编</label>
							<div class="col-sm-4">
								<input type="text" class="form-control" id="ePostcode" name="postcode" 
									placeholder="请输入邮编" maxlength="20">
							</div>
						</div>
						<div class="form-group">

							<label class="col-sm-2 control-label"><font  color="red">*</font>固定电话</label>
							<div class="col-sm-4">
								<input type="text" class="form-control" id="eTelephone" name="telephone"
									placeholder="请输入固定电话" maxlength="20">
							</div>

							<label class="col-sm-2 control-label"><font  color="red">*</font>公司名称</label>
							<div class="col-sm-4">
								<input type="text" class="form-control" id="eCompanyName" name="companyName"
									placeholder="请输入公司名称" maxlength="50">
							</div>
						</div>
						<div class="form-group">

							<label class="col-sm-2 control-label"><font  color="red">*</font>移动电话</label>
							<div class="col-sm-4">
								<input type="text" class="form-control" id="eMobilePhone" name="mobilePhone" 
									placeholder="请输入移动电话" maxlength="20">
							</div>

							<label class="col-sm-2 control-label"><font  color="red">*</font>邮箱</label>
							<div class="col-sm-4">
								<input type="text" class="form-control" id="eEmail" name="email"
									placeholder="请输入邮箱" maxlength="50"> 
							</div>
						</div>
						<div class="form-group">

							<label class="col-sm-2 control-label"><font  color="red">*</font>公司传真</label>
							<div class="col-sm-4">
								<input type="text" class="form-control" id="eCompanyFax" name="companyFax" 
									placeholder="请输入公司传真" maxlength="20">
							</div>
						</div>
					</div>
				</div>
			</div>
	</div>
</div>
</div>
	</form>
</div>





<!-- 修改 -->
<div id="dataEdit" class="white-bg " style="display:none;">
	<form method="post"  class="modal-content form-horizontal form-bordered advance-search" id="dataEditForm"
			action="${ctx.path}/api/logisticsCompany/addLogisticsCompany.do">
			<div class="modal-body pa15 bgcolor-muted">
			<input type="hidden" name="logisticsId" />
	<div class="modal-content noshadow">
		<div class="form-group nm">
			<div class="col-md-12">
				<p class="text-info nm text-center fsize14 bold">基本信息</p>
			</div>
		</div>
		<div class="form-group nm">
			<label class="col-sm-2 control-label"><span class="text-danger pr5">*</span>物流渠道名称</label>
			<div class="col-sm-6">
				<input type="text" class="form-control input-sm" name="name" id="nameEdit" >
			</div>
			<div class="col-sm-4 text-right">
           		<p class="loadtext-sm text-default bold">自动交运<span class="text-success pl10">不支持</span></p>
            </div>
		</div>
		<div class="form-group nm">
	  		<label class="col-sm-2 control-label">查询网址</label>
			<div class="col-sm-6">
				<input type="text" class="form-control input-sm" name="website" id="website">
			</div>
			<div class="col-sm-4">
				<a data-title="屏蔽跟踪号" data-container="body" data-content="如果您仅想去eBay上标注订单发货，而不同步跟踪单号，请勾选。注：速卖通/亚马逊订单必须上传跟踪号" data-placement="top" data-trigger="hover" data-toggle="popover" class="tips-info ico-question-sign fr ml10" href="javascript:void(0);" data-original-title="" title=""></a>
				<label class="checkbox-inline text-default bold fr">
					<input type="checkbox" id="hidetracknumberEdit" name="hidetracknumber" value="1">
					屏蔽跟踪号				</label>
			</div>
		</div>
		<div class="form-group nm">
			<div class="col-sm-2">
				<label class="checkbox-inline text-default text-right bold"><input type="checkbox" name="autoFreight" id="auto_freight_edit" value="1">启动算运费</label>
			</div>
			<label class="col-sm-2 control-label">运费规则</label>
			<div class="col-sm-4 has-tips">
				<div class="input-group inputgroup60 input-group-sm">
				<select id="freight_rule_edit" class="form-control  input-sm" disabled="" name="freightRule">
					<option value="0">-请选择-</option>
					<option data-remark="适合非京沪粤苏浙闽黑的邮政挂号运费算法" value="4">中邮小包挂号算法(2)</option><option data-remark="适合京沪粤苏浙闽黑的邮政挂号运费算法" value="3">中邮小包挂号算法(1)</option><option data-remark="适合非京沪粤苏浙闽黑的邮政平邮运费算法" value="2">中邮小包平邮算法(2)</option><option data-remark="适合京沪粤苏浙闽黑的邮政平邮运费算法" value="1">中邮小包平邮算法(1)</option>				</select>
				</div>
				 <a data-title="规则适用范围" data-container="body" data-content="适合京沪粤苏浙闽黑的邮政平邮运费算法" data-placement="top" data-trigger="hover" data-toggle="popover" class="tips-info ico-question-sign" href="javascript:void(0);" data-original-title="" title=""></a>
				
			</div>
			<label class="col-sm-2 control-label">折扣</label>
			<div class="col-sm-2 has-tips">
				<input type="text" class="form-control inputgroup60 input-sm" disabled="" id="discount_edit" name="discount" value="1">
				<a data-title="折扣" data-container="body" data-content="例：0.75表示七五折" data-placement="top" data-trigger="hover" data-toggle="popover" class="tips-info ico-question-sign" href="javascript:void(0);" data-original-title="" title=""></a>
			</div>
		</div>
	</div>
	<div class="modal-content noshadow mt10">
		<div class="form-group nm">
			<div class="col-md-12">
				<p class="text-info nm text-center fsize14 bold">申报信息</p>
			</div>
		</div>
		<div class="form-group nm">
			<label class="col-sm-2 control-label"><span class="text-danger pr5">*</span>申报品名(中)</label>
			<div class="col-sm-4">
				<input type="text" name="declareName" id="declare_nameEdit" class="form-control input-sm" value="">
			</div>
			<label class="col-sm-2 control-label"><span class="text-danger pr5">*</span>申报品名(英)</label>
			<div class="col-sm-4">
				<input type="text" name="declareEname" id="declare_enameEdit" class="form-control input-sm" value="">
			</div>
		</div>
		<div class="form-group nm">
			<label class="col-sm-2 control-label"><span class="text-danger pr5">*</span>申报百分比</label>
			<div class="col-sm-2 has-tips">
				<div class="input-group inputgroup60 input-group-sm">
					<input type="text" name="declarePercent" id="declare_percentEdit" class="form-control" value="50"> <span class="input-group-addon">%</span>
				</div>
				<a data-title="申报价值占比" data-container="body" data-content="申报价值占订单商品总售价的百分比" data-placement="top" data-trigger="hover" data-toggle="popover" class="tips-info ico-question-sign" href="javascript:void(0);" data-original-title="" title=""></a>
			</div>
			<label class="col-sm-2 control-label"><span class="text-danger pr5">*</span>最小申报价值</label>
			<div class="col-sm-2">
				<div class="input-group input-group-sm">
					<input type="text" id="min_declareEdit" name="minDeclare" class="form-control" value="5"><span class="input-group-addon">$</span>
				</div>
			</div>
			<label class="col-sm-2 control-label"><span class="text-danger pr5">*</span>最大申报价值</label>
			<div class="col-sm-2">
				<div class="input-group input-group-sm">
					<input type="text" id="max_declareEdit" name="maxDeclare" class="form-control" value="5"><span class="input-group-addon">$</span>
				</div>
			</div>
		</div>
	</div>
	<div class="modal-content noshadow mt10">
		<div class="form-group nm">
			<div class="col-md-12">
				<p class="text-info nm text-center fsize14 bold">平台认可物流方式</p>
			</div>
		</div>
		<div class="form-group nm">
			<label class="col-sm-2 control-label">aliexpress</label>
			<div class="col-sm-2">
			<erp:dictTag className="form-control" name="aliexpressLogistics" id="aliexpressEditIogistics" style="width:150px" dictTypeId="4" />	
			</div>
			<label class="col-sm-2 control-label">wish</label>
			<div class="col-sm-2">
		    <erp:dictTag className="form-control" name="wishLogistics" id="wishEditIogistics" style="width:150px" dictTypeId="3" />	
			</div>		</div>
	</div>
	<div class="modal-content noshadow mt10">
		<div class="form-group nm">
			 <div class="col-md-12">
             	<p class="text-info nm text-center fsize14 bold">打印标签设置</p>
            </div>
		</div>
		<div class="form-group nm">
			<label class="col-sm-2 control-label"><span class="text-danger pr5">*</span>标签打印类型</label>
			<div class="col-sm-3">
				<label class="radio-inline text-default ml15"><input type="radio" checked="checked" id="print_type" name="printType" value="2" onclick="$('#printlabel-set').show()">自定义标签</label>
			</div>
			<div class="col-sm-5">
				<p class="loadtext fl bold text-default pr5">标签尺寸</p>
				<erp:dictTag className="form-control" name="specType" id="specEditType" style="width:200px" dictTypeId="2"/>	
			</div>
			<div class="col-md-2 text-right">
				<a href="javascript:void(0);" onclick="openModuleManager()" target="_blank">标签模板管理</a>
			</div>
		</div>
		<div class="form-group nm" id="printlabel-set">
						<div class="col-md-4">
								<div class="panel panel-default nm">
					<div class="panel-heading mintype">
						<h3 class="panel-title">地址单</h3>
						<div class="panel-toolbar text-right">
							<button id="cancelEditModule1" style="display:none;" type="button"  class="btn btn-white btn-sm"  onclick="cancelModule(1,'Edit')">取消</button>
							<input type="button" class="btn btn-primary btn-sm" class="btn btn-primary btn-sm"  onclick="openModule(1,'Edit')"  value="选择"></input>
							<input type="hidden" name="addressTempId" id="tempIdEdit1" />
						</div>
					</div>
					<div class="panel-body pt0 pb0 pl5 pr5" id="labelId1Edit">
						<div class="label-group-large">
							<div class="nodata" style="display: block;">';
	                            <h4 class="title">未启用</h4>
	                            <p>如需启用，请点击右上角的选择</p>
                            </div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-4">
				<div class="panel panel-default nm">
					<div class="panel-heading mintype">
						<h3 class="panel-title">报关单</h3>
						<div class="panel-toolbar text-right">
							<button id="cancelEditModule2" style="display:none;" type="button" class="btn btn-white btn-sm"  onclick="cancelModule(2,'Edit')">取消</button>
							<input type="button" class="btn btn-primary btn-sm" onclick="openModule(2,'Edit')"  value="选择"></input>
							<input type="hidden" name="declarationTempId" id="tempIdEdit2"/>
						</div>
					</div>
					<div class="panel-body pt0 pb0 pl5 pr5" id="labelId2Edit">
						<div class="label-group-large">
							<div class="nodata" style="display: block;">';
	                            <h4 class="title">未启用</h4>
	                            <p>如需启用，请点击右上角的选择</p>
                            </div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-4">
				<div class="panel panel-default nm">
					<div class="panel-heading mintype">
						<h3 class="panel-title">配货单</h3>
						<div class="panel-toolbar text-right">
							<button id="cancelEditModule3" style="display:none;" type="button" class="btn btn-white btn-sm"  onclick="cancelModule(3,'Edit')">取消</button>
							<input type="button" class="btn btn-primary btn-sm" onclick="openModule(3,'Edit')" value="选择"></input>
							<input type="hidden" name="allocationTempId" id="tempIdEdit3"/>
						</div>
					</div>
					<div class="panel-body pt0 pb0 pl5 pr5" id="labelId3Edit">
						<div class="label-group-large">
							<div class="nodata" style="display: block;">';
	                            <h4 class="title">未启用</h4>
	                            <p>如需启用，请点击右上角的选择</p>
                            </div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="modal-content noshadow mt10">
		<div class="form-group nm">
			<div class="col-md-7">
				<p class="text-info nm fsize14 bold">
					回邮地址<span class="fsize12 pl7 thin" style="color:red">(线上发货必须用英文填写)</span>
				</p>
			</div>
			<div class="col-md-5 text-right">
				<div class="btn-group">
					<select class="form-control" id="addressSelectEdit"
								name="addressSelect"></select>
				</div>
			</div>
		</div>
		<div id="default-address1" data-id="3188">
			<input type="hidden" name="backAddressId" id="backAddressIdEdit" />
			<input type="hidden" name="AddressId" id="addressIdEdit" />
			<div class="form-group nm">
				<label class="col-sm-2 control-label">地址名称</label>
				<div class="col-sm-4"><p class="loadtext-sm" id="addressNameEdit"></p></div>
				<label class="col-sm-2 control-label">联系人</label>
				<div class="col-sm-4"><p class="loadtext-sm"  id="proportionEdit"></p></div>
			</div>
			<div class="form-group nm">
				<label class="col-sm-2 control-label">所在地区</label>
				<div class="col-sm-2"><p class="loadtext-sm" id="countryEdit"></p></div>
				<div class="col-sm-2"><p class="loadtext-sm" id="provinceEdit"></p></div>
				<div class="col-sm-2"><p class="loadtext-sm" id="cityEdit"></p></div>
				<div class="col-sm-2"><p class="loadtext-sm" id="areaEdit"></p></div>
			</div>
			<div class="form-group nm">
				<label class="col-sm-2 control-label">详细地址</label>
				<div class="col-sm-10"><p class="loadtext-sm" id="addressesEdit"></p></div>
			</div>
			<div class="form-group nm">
				<label class="col-sm-2 control-label">邮箱</label>
				<div class="col-sm-4"><p class="loadtext-sm" id="postcodeEdit"></p></div>
				<label class="col-sm-2 control-label">公司名称</label>
				<div class="col-sm-4"><p class="loadtext-sm" id="companyNameEdit"></p></div>
			</div>
			<div class="form-group nm">
				<label class="col-sm-2 control-label">固定电话</label>
				<div class="col-sm-4"><p class="loadtext-sm" id="telephoneEdit"></p></div>
				<label class="col-sm-2 control-label">移动电话</label>
				<div class="col-sm-4"><p class="loadtext-sm" id="mobilePhoneEdit"></p></div>
			</div>
			<div class="form-group nm">
				<label class="col-sm-2 control-label">邮编</label>
				<div class="col-sm-4"><p class="loadtext-sm" id="emailEdit"></p></div>
				<label class="col-sm-2 control-label">公司传真</label>
				<div class="col-sm-4"><p class="loadtext-sm" id="companyFaxEdit"></p></div>
			</div>
		</div>
		
		<div id="addressEdit" class="white-bg" style="display:none;">
		<div class="panel panel-default">
				<div class="panel-body pt0 pb0">
					<div class="form-horizontal form-bordered min" id="contentDiv">
						<div class="form-group">
							<input type="hidden" name="addressId" id="dataId" /> <label
								class="col-sm-2 control-label"><font  color="red">*</font>名称</label>
							<div class="col-sm-4">
								<input type="text" class="form-control" id="eAddressName" name="addressName"
									placeholder="请输入名称" /> 
							</div>

							<label class="col-sm-2 control-label"><font  color="red">*</font>联系人</label>
							<div class="col-sm-4">
								<input type="text" class="form-control" id="eProportion" name="proportion"
									placeholder="请输入联系人" maxlength="50">
							</div>
						</div>
						<div class="form-group">

							<label class="col-sm-2 control-label"><font  color="red">*</font>国家</label>
							<label class="col-sm-2 control-label"><font  color="red">*</font>省</label>
							<div class="col-sm-4">
								<input type="text" class="form-control" id="eProvince" name="province" 
									placeholder="请输入省" maxlength="20">
							</div>
						</div>
						<div class="form-group">

							<label class="col-sm-2 control-label"><font  color="red">*</font>市</label>
							<div class="col-sm-4">
								<input type="text" class="form-control" id="eCity" name="city" 
									placeholder="请输入市" maxlength="20">
							</div>

							<label class="col-sm-2 control-label"><font  color="red">*</font>区</label>
							<div class="col-sm-4">
								<input type="text" class="form-control" id="eArea" name="area" 
									placeholder="请输入区" maxlength="20">
							</div>
						</div>
						<div class="form-group">

							<label class="col-sm-2 control-label"><font  color="red">*</font>地址</label>
							<div class="col-sm-4">
								<input type="text" class="form-control" id="eAddresses"  name="addresses"
									placeholder="请输入地址" maxlength="50">
							</div>

							<label class="col-sm-2 control-label"><font  color="red">*</font>邮编</label>
							<div class="col-sm-4">
								<input type="text" class="form-control" id="ePostcode" name="postcode" 
									placeholder="请输入邮编" maxlength="20">
							</div>
						</div>
						<div class="form-group">

							<label class="col-sm-2 control-label"><font  color="red">*</font>固定电话</label>
							<div class="col-sm-4">
								<input type="text" class="form-control" id="eTelephone" name="telephone"
									placeholder="请输入固定电话" maxlength="20">
							</div>

							<label class="col-sm-2 control-label"><font  color="red">*</font>公司名称</label>
							<div class="col-sm-4">
								<input type="text" class="form-control" id="eCompanyName" name="companyName"
									placeholder="请输入公司名称" maxlength="50">
							</div>
						</div>
						<div class="form-group">

							<label class="col-sm-2 control-label"><font  color="red">*</font>移动电话</label>
							<div class="col-sm-4">
								<input type="text" class="form-control" id="eMobilePhone" name="mobilePhone" 
									placeholder="请输入移动电话" maxlength="20">
							</div>

							<label class="col-sm-2 control-label"><font  color="red">*</font>邮箱</label>
							<div class="col-sm-4">
								<input type="text" class="form-control" id="eEmail" name="email"
									placeholder="请输入邮箱" maxlength="50"> 
							</div>
						</div>
						<div class="form-group">

							<label class="col-sm-2 control-label"><font  color="red">*</font>公司传真</label>
							<div class="col-sm-4">
								<input type="text" class="form-control" id="eCompanyFax" name="companyFax" 
									placeholder="请输入公司传真" maxlength="20">
							</div>
						</div>
					</div>
				</div>
			</div>
	</div>
</div>
</div>
	</form>
</div>


<div id="copyLogistics" class="white-bg "  style="display:none;">
	<form method="post"   id="copyForm" 
			action="${ctx.path}/api/logisticsCompany/copyLogisticsCompany.do">
			<div class="form-group"  >
								<input type="hidden" name="logisticsId" id="copyIogisticsId">
								<input type="text" class="form-control" id="copyName" name="name"  
									placeholder="物流渠道名称" maxlength="20">
			</div>
	</form>
</div>

<div id="upadteLogisticsName" class="white-bg "  style="display:none;">
	<form method="post"   id="updateFormName" 
			action="${ctx.path}/api/logisticsCompany/UpdateLogisticsCompanyName.do">
			<div class="form-group"  >
								<input type="hidden" name="sysLogisticsId" id="updateSysLogisticsId">
								<label class="col-sm-3 control-label"><font  color="red">*</font>物流公司名称</label>
								<div class="col-sm-9">
								<input type="text" class="form-control" id="updateLogisticsCompanyName" name="name"  
									placeholder="物流公司名称" maxlength="20">
								</div>
			</div>
	</form>
</div>

<div id="openModule" class="white-bg "  style="display:none;">
	<div id="container">
	<div class="picker">
		<select class='image-picker show-labels' id="imageSelect">
		</select>
	</div>
	</div>
</div>
</body>
</html>
