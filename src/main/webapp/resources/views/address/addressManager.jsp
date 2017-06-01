<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/resources/platform/inc.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<script src="${ctx.path}/resources/platform/js/common_grid.js"></script>
<script src="${ctx.path}/resources/platform/js/common_format.js"></script>
<script src="${ctx.path}/resources/script/address/addressManager.js"></script>
<link type="text/javascript"
	href="${ctx.path}/resources/platform/css/new.css" rel="stylesheet">
	<link rel="stylesheet" type="text/css"
	href="${ctx.path}/resources/code/css/custom.css" />
</head>
<body style="overflow:hidden;"> 
	    <div class="has-toobar has-navbar multichoice"> 
		<div id="serachDiv" class="row form-group-sm">
						<div class="form-inline operation_con">
							<div class="large-list-title">
								<button class="btn btn-primary btn-sm btn-success" type="button"
									onclick="openAddPage();">新增回邮地址</button>
							</div>
						</div>
		</div>
	

			<div class="jqGrid_wrapper white-bg">
				<table id="jqGrid"></table>
				<!-- 显示table -->
				<div id="jqGridPager"></div>
				<!-- 显示分页 -->
			</div>
	<!-- 新增 -->
	<div id="dataAdd" class="white-bg" style="display:none;">
		<form method="post" class="form-horizontal" id="dataForm"
			action="${ctx.path}/api/address/addAddress.do">

			<div class="panel panel-default">
				<div class="panel-body pt0 pb0">
					<div class="form-horizontal form-bordered min" id="contentDiv">
						<div class="form-group">

							<label class="col-sm-2 control-label"><font  color="red">*</font>名称</label>
							<div class="col-sm-4">
								<input type="text" class="form-control" id="addressName" name="addressName" 
									placeholder="请输入名称" maxlength="50"/>
							</div>

							<label class="col-sm-2 control-label"><font  color="red">*</font>联系人</label>
							<div class="col-sm-4">
								<input type="text" class="form-control" id="proportion" name="proportion"
									placeholder="请输入联系人" maxlength="50">
							</div>
						</div>
						<div class="form-group">

							<label class="col-sm-2 control-label"><font  color="red">*</font>国家</label>
							<div class="col-sm-4">
								<select type="select" id="country" name="country" class="form-control">
									<option value="">-请选择-</option>
									<option value="AE">阿联酋</option>
									<option value="AF">阿富汗</option>
									<option value="AM">亚美尼亚</option>
									<option value="AZ">阿塞拜疆</option>
									<option value="BD">孟加拉国</option>
									<option value="BH">巴林</option>
									<option value="BN">文莱</option>
									<option value="BT">不丹</option>
									<option value="CN">中国</option>
									<option value="GE">格鲁吉亚</option>
									<option value="HK">香港</option>
									<option value="ID">印尼</option>
									<option value="IL">以色列</option>
									<option value="IN">印度</option>
									<option value="IQ">伊拉克</option>
									<option value="IR">伊朗</option>
									<option value="JO">约旦</option>
									<option value="JP">日本</option>
									<option value="KG">吉尔吉斯斯坦</option>
									<option value="KH">柬埔寨</option>
									<option value="KP">朝鲜</option>
									<option value="KR">韩国</option>
									<option value="KW">科威特</option>
									<option value="KZ">哈萨克斯坦</option>
									<option value="LA">老挝</option>
									<option value="LB">黎巴嫩</option>
									<option value="LK">斯里兰卡</option>
									<option value="MM">缅甸</option>
									<option value="MN">蒙古</option>
									<option value="MO">澳门</option>
									<option value="MV">马尔代夫</option>
									<option value="MY">马来西亚</option>
									<option value="NP">尼泊尔</option>
									<option value="OM">阿曼</option>
									<option value="PH">菲律宾</option>
									<option value="PK">巴基斯坦</option>
									<option value="QA">卡塔尔</option>
									<option value="SA">沙特阿拉伯</option>
									<option value="SG">新加坡</option>
									<option value="SY">叙利亚</option>
									<option value="TH">泰国</option>
									<option value="TJ">塔吉克斯坦</option>
									<option value="TM">土库曼斯坦</option>
									<option value="TR">土耳其</option>
									<option value="TW">台湾</option>
									<option value="UZ">乌兹别克斯坦</option>
									<option value="VN">越南</option>
									<option value="YE">也门</option>
									<option value="AA">美国军队</option>
									<option value="AG">安提瓜和巴布达</option>
									<option value="BB">巴巴多斯</option>
									<option value="BM">百慕大</option>
									<option value="BZ">伯利兹</option>
									<option value="CA">加拿大</option>
									<option value="CR">哥斯达黎加</option>
									<option value="CU">古巴</option>
									<option value="DM">多米尼加</option>
									<option value="GD">格林纳达</option>
									<option value="GL">格陵兰岛</option>
									<option value="GT">危地马拉</option>
									<option value="GU">关岛</option>
									<option value="HN">洪都拉斯</option>
									<option value="HT">海地</option>
									<option value="KN">圣基茨和尼维斯</option>
									<option value="KY">开曼群岛</option>
									<option value="LC">圣卢西亚</option>
									<option value="MH">马绍尔群岛</option>
									<option value="MX">墨西哥</option>
									<option value="NI">尼加拉瓜</option>
									<option value="PM">圣皮埃尔和密克隆</option>
									<option value="PR">波多黎各</option>
									<option value="TC">特克斯和凯科斯群岛</option>
									<option value="TT">特立尼达和多巴哥</option>
									<option value="US">美国</option>
									<option value="VC">圣文森特和格林纳丁斯</option>
									<option value="VI">美属维尔京群岛</option>
									<option value="WS">萨摩亚</option>
									<option value="AN">荷属安的列斯群岛</option>
									<option value="AR">阿根廷</option>
									<option value="AW">阿鲁巴</option>
									<option value="BO">玻利维亚</option>
									<option value="BR">巴西</option>
									<option value="BS">巴哈马</option>
									<option value="CL">智利</option>
									<option value="CO">哥伦比亚</option>
									<option value="EC">厄瓜多尔</option>
									<option value="FK">福克兰群岛</option>
									<option value="GF">法属圭亚那</option>
									<option value="GP">瓜德罗普</option>
									<option value="JM">牙买加</option>
									<option value="PA">巴拿马</option>
									<option value="PE">秘鲁</option>
									<option value="PY">巴拉圭</option>
									<option value="SR">苏里南</option>
									<option value="UY">乌拉圭</option>
									<option value="VE">委内瑞拉</option>
									<option value="AU">澳大利亚</option>
									<option value="FJ">斐济群岛</option>
									<option value="FM">密克罗尼西亚</option>
									<option value="NC">新喀里多尼亚</option>
									<option value="NZ">新西兰</option>
									<option value="PF">波利尼西亚</option>
									<option value="PG">巴布亚新几内亚</option>
									<option value="VG">英属维尔京群岛</option>
									<option value="VU">瓦努阿图</option>
									<option value="AD">安道尔</option>
									<option value="AI">安圭拉</option>
									<option value="AL">阿尔巴尼亚</option>
									<option value="AT">奥地利</option>
									<option value="BA">波黑</option>
									<option value="BE">比利时</option>
									<option value="BG">保加利亚</option>
									<option value="BL">巴勒斯坦</option>
									<option value="BY">白俄罗斯</option>
									<option value="CH">瑞士</option>
									<option value="CS">捷克</option>
									<option value="CV">佛得角</option>
									<option value="CY">塞浦路斯</option>
									<option value="CZ">捷克</option>
									<option value="DE">德国</option>
									<option value="DK">丹麦</option>
									<option value="DO">多米尼加共和国</option>
									<option value="EE">爱沙尼亚</option>
									<option value="ES">西班牙</option>
									<option value="FI">芬兰</option>
									<option value="FO">法罗群岛</option>
									<option value="FR">法国</option>
									<option value="GB">英国</option>
									<option value="GG">根西岛</option>
									<option value="GI">直布罗陀</option>
									<option value="GR">希腊</option>
									<option value="HR">克罗地亚</option>
									<option value="HU">匈牙利</option>
									<option value="IE">爱尔兰</option>
									<option value="IS">冰岛</option>
									<option value="IT">意大利</option>
									<option value="JE">泽西岛</option>
									<option value="LI">列支敦士登</option>
									<option value="LT">立陶宛</option>
									<option value="LU">卢森堡</option>
									<option value="LV">拉脱维亚</option>
									<option value="MC">摩纳哥</option>
									<option value="MD">摩尔多瓦</option>
									<option value="ME">黑山</option>
									<option value="MK">马其顿</option>
									<option value="MQ">马提尼克</option>
									<option value="MT">马耳他</option>
									<option value="NL">荷兰</option>
									<option value="NO">挪威</option>
									<option value="PL">波兰</option>
									<option value="PT">葡萄牙</option>
									<option value="RE">留尼旺岛</option>
									<option value="RO">罗马尼亚</option>
									<option value="RS">塞尔维亚</option>
									<option value="RU">俄罗斯</option>
									<option value="SE">瑞典</option>
									<option value="SI">斯洛文尼亚</option>
									<option value="SK">斯洛伐克</option>
									<option value="SM">圣马力诺</option>
									<option value="SV">萨尔瓦多</option>
									<option value="UA">乌克兰</option>
									<option value="UK">英国</option>
									<option value="VA">梵蒂冈</option>
									<option value="YT">马约特岛</option>
									<option value="YU">南斯拉夫联盟</option>
									<option value="AO">安哥拉</option>
									<option value="BF">布基纳法索</option>
									<option value="BI">布隆迪</option>
									<option value="BJ">贝宁</option>
									<option value="BW">博茨瓦纳</option>
									<option value="CF">中非</option>
									<option value="CG">刚果(布)</option>
									<option value="CI">科特迪瓦</option>
									<option value="CM">喀麦隆</option>
									<option value="DJ">吉布提</option>
									<option value="DZ">阿尔及利亚</option>
									<option value="EG">埃及</option>
									<option value="ET">埃塞俄比亚</option>
									<option value="GA">加蓬</option>
									<option value="GH">加纳</option>
									<option value="GM">冈比亚</option>
									<option value="GN">几内亚</option>
									<option value="KE">肯尼亚</option>
									<option value="KT">科特迪瓦</option>
									<option value="LR">利比里亚</option>
									<option value="LS">莱索托</option>
									<option value="LY">利比亚</option>
									<option value="MA">摩洛哥</option>
									<option value="MG">马达加斯加</option>
									<option value="ML">马里</option>
									<option value="MU">毛里求斯</option>
									<option value="MW">马拉维</option>
									<option value="MZ">莫桑比克</option>
									<option value="NA">纳米比亚</option>
									<option value="NE">尼日尔</option>
									<option value="NG">尼日利亚</option>
									<option value="RW">卢旺达</option>
									<option value="SC">塞舌尔</option>
									<option value="SD">苏丹</option>
									<option value="SL">塞拉利昂</option>
									<option value="SN">塞内加尔</option>
									<option value="SO">索马里</option>
									<option value="SZ">斯威士兰</option>
									<option value="TD">乍得</option>
									<option value="TG">多哥</option>
									<option value="TN">突尼斯</option>
									<option value="TZ">坦桑尼亚</option>
									<option value="UG">乌干达</option>
									<option value="ZA">南非</option>
									<option value="ZM">赞比亚</option>
									<option value="ZR">扎伊尔</option>
									<option value="ZW">津巴布韦</option>


								</select>
							</div>

							<label class="col-sm-2 control-label"><font  color="red">*</font>省</label>
							<div class="col-sm-4">
								<input type="text" class="form-control" id="province" name="province"
									placeholder="请输入省" maxlength="20">
							</div>
						</div>
						<div class="form-group">

							<label class="col-sm-2 control-label"><font  color="red">*</font>市</label>
							<div class="col-sm-4">
								<input type="text" class="form-control" id="city" name="city"
									placeholder="请输入市" maxlength="20">
							</div>

							<label class="col-sm-2 control-label"><font  color="red">*</font>区</label>
							<div class="col-sm-4">
								<input type="text" class="form-control" id="area" name="area"
									placeholder="请输入区" maxlength="20">
							</div>
						</div>
						<div class="form-group">

							<label class="col-sm-2 control-label"><font  color="red">*</font>地址</label>
							<div class="col-sm-4">
								<input type="text" class="form-control" id="addresses" name="addresses"
									placeholder="请输入地址" maxlength="50">
							</div>

							<label class="col-sm-2 control-label"><font  color="red">*</font>邮编</label>
							<div class="col-sm-4">
								<input type="text" class="form-control" id="postcode" name="postcode"
									placeholder="请输入邮编" maxlength="20">
							</div>
						</div>
						<div class="form-group">

							<label class="col-sm-2 control-label"><font  color="red">*</font>固定电话</label>
							<div class="col-sm-4">
								<input type="text" class="form-control" id="telephone" name="telephone"
									placeholder="请输入固定电话" maxlength="20">
							</div>

							<label class="col-sm-2 control-label"><font  color="red">*</font>公司名称</label>
							<div class="col-sm-4">
								<input type="text" class="form-control" id="companyName" name="companyName"
									placeholder="请输入公司名称" maxlength="15">
							</div>
						</div>
						<div class="form-group">

							<label class="col-sm-2 control-label"><font  color="red">*</font>移动电话</label>
							<div class="col-sm-4">
								<input type="text" class="form-control" id="mobilePhone" name="mobilePhone"
									placeholder="请输入移动电话" maxlength="20">
							</div>

							<label class="col-sm-2 control-label"><font  color="red">*</font>邮箱</label>
							<div class="col-sm-4">
								<input type="text" class="form-control" id="email" name="email"
									placeholder="请输入邮箱" maxlength="50">
							</div>
						</div>
						<div class="form-group">

							<label class="col-sm-2 control-label"><font  color="red">*</font>公司传真</label>
							<div class="col-sm-4">
								<input type="text" class="form-control" id="companyFax" name="companyFax"
									placeholder="请输入公司传真" maxlength="20">
							</div>
						</div>
					</div>
				</div>
			</div>

		</form>
	</div>
	<!-- 编辑 -->
	<div id="dataEdit" class="white-bg" style="display:none;">
		<form method="post" class="form-horizontal" id="dataEditForm"
			action="${ctx.path}/api/address/editAddress.do">

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
							<div class="col-sm-4">
								<select type="select"  id="eCountry" name="country" class="form-control">
									<option value="">-请选择-</option>
									<option value="AE">阿联酋</option>
									<option value="AF">阿富汗</option>
									<option value="AM">亚美尼亚</option>
									<option value="AZ">阿塞拜疆</option>
									<option value="BD">孟加拉国</option>
									<option value="BH">巴林</option>
									<option value="BN">文莱</option>
									<option value="BT">不丹</option>
									<option value="CN">中国</option>
									<option value="GE">格鲁吉亚</option>
									<option value="HK">香港</option>
									<option value="ID">印尼</option>
									<option value="IL">以色列</option>
									<option value="IN">印度</option>
									<option value="IQ">伊拉克</option>
									<option value="IR">伊朗</option>
									<option value="JO">约旦</option>
									<option value="JP">日本</option>
									<option value="KG">吉尔吉斯斯坦</option>
									<option value="KH">柬埔寨</option>
									<option value="KP">朝鲜</option>
									<option value="KR">韩国</option>
									<option value="KW">科威特</option>
									<option value="KZ">哈萨克斯坦</option>
									<option value="LA">老挝</option>
									<option value="LB">黎巴嫩</option>
									<option value="LK">斯里兰卡</option>
									<option value="MM">缅甸</option>
									<option value="MN">蒙古</option>
									<option value="MO">澳门</option>
									<option value="MV">马尔代夫</option>
									<option value="MY">马来西亚</option>
									<option value="NP">尼泊尔</option>
									<option value="OM">阿曼</option>
									<option value="PH">菲律宾</option>
									<option value="PK">巴基斯坦</option>
									<option value="QA">卡塔尔</option>
									<option value="SA">沙特阿拉伯</option>
									<option value="SG">新加坡</option>
									<option value="SY">叙利亚</option>
									<option value="TH">泰国</option>
									<option value="TJ">塔吉克斯坦</option>
									<option value="TM">土库曼斯坦</option>
									<option value="TR">土耳其</option>
									<option value="TW">台湾</option>
									<option value="UZ">乌兹别克斯坦</option>
									<option value="VN">越南</option>
									<option value="YE">也门</option>
									<option value="AA">美国军队</option>
									<option value="AG">安提瓜和巴布达</option>
									<option value="BB">巴巴多斯</option>
									<option value="BM">百慕大</option>
									<option value="BZ">伯利兹</option>
									<option value="CA">加拿大</option>
									<option value="CR">哥斯达黎加</option>
									<option value="CU">古巴</option>
									<option value="DM">多米尼加</option>
									<option value="GD">格林纳达</option>
									<option value="GL">格陵兰岛</option>
									<option value="GT">危地马拉</option>
									<option value="GU">关岛</option>
									<option value="HN">洪都拉斯</option>
									<option value="HT">海地</option>
									<option value="KN">圣基茨和尼维斯</option>
									<option value="KY">开曼群岛</option>
									<option value="LC">圣卢西亚</option>
									<option value="MH">马绍尔群岛</option>
									<option value="MX">墨西哥</option>
									<option value="NI">尼加拉瓜</option>
									<option value="PM">圣皮埃尔和密克隆</option>
									<option value="PR">波多黎各</option>
									<option value="TC">特克斯和凯科斯群岛</option>
									<option value="TT">特立尼达和多巴哥</option>
									<option value="US">美国</option>
									<option value="VC">圣文森特和格林纳丁斯</option>
									<option value="VI">美属维尔京群岛</option>
									<option value="WS">萨摩亚</option>
									<option value="AN">荷属安的列斯群岛</option>
									<option value="AR">阿根廷</option>
									<option value="AW">阿鲁巴</option>
									<option value="BO">玻利维亚</option>
									<option value="BR">巴西</option>
									<option value="BS">巴哈马</option>
									<option value="CL">智利</option>
									<option value="CO">哥伦比亚</option>
									<option value="EC">厄瓜多尔</option>
									<option value="FK">福克兰群岛</option>
									<option value="GF">法属圭亚那</option>
									<option value="GP">瓜德罗普</option>
									<option value="JM">牙买加</option>
									<option value="PA">巴拿马</option>
									<option value="PE">秘鲁</option>
									<option value="PY">巴拉圭</option>
									<option value="SR">苏里南</option>
									<option value="UY">乌拉圭</option>
									<option value="VE">委内瑞拉</option>
									<option value="AU">澳大利亚</option>
									<option value="FJ">斐济群岛</option>
									<option value="FM">密克罗尼西亚</option>
									<option value="NC">新喀里多尼亚</option>
									<option value="NZ">新西兰</option>
									<option value="PF">波利尼西亚</option>
									<option value="PG">巴布亚新几内亚</option>
									<option value="VG">英属维尔京群岛</option>
									<option value="VU">瓦努阿图</option>
									<option value="AD">安道尔</option>
									<option value="AI">安圭拉</option>
									<option value="AL">阿尔巴尼亚</option>
									<option value="AT">奥地利</option>
									<option value="BA">波黑</option>
									<option value="BE">比利时</option>
									<option value="BG">保加利亚</option>
									<option value="BL">巴勒斯坦</option>
									<option value="BY">白俄罗斯</option>
									<option value="CH">瑞士</option>
									<option value="CS">捷克</option>
									<option value="CV">佛得角</option>
									<option value="CY">塞浦路斯</option>
									<option value="CZ">捷克</option>
									<option value="DE">德国</option>
									<option value="DK">丹麦</option>
									<option value="DO">多米尼加共和国</option>
									<option value="EE">爱沙尼亚</option>
									<option value="ES">西班牙</option>
									<option value="FI">芬兰</option>
									<option value="FO">法罗群岛</option>
									<option value="FR">法国</option>
									<option value="GB">英国</option>
									<option value="GG">根西岛</option>
									<option value="GI">直布罗陀</option>
									<option value="GR">希腊</option>
									<option value="HR">克罗地亚</option>
									<option value="HU">匈牙利</option>
									<option value="IE">爱尔兰</option>
									<option value="IS">冰岛</option>
									<option value="IT">意大利</option>
									<option value="JE">泽西岛</option>
									<option value="LI">列支敦士登</option>
									<option value="LT">立陶宛</option>
									<option value="LU">卢森堡</option>
									<option value="LV">拉脱维亚</option>
									<option value="MC">摩纳哥</option>
									<option value="MD">摩尔多瓦</option>
									<option value="ME">黑山</option>
									<option value="MK">马其顿</option>
									<option value="MQ">马提尼克</option>
									<option value="MT">马耳他</option>
									<option value="NL">荷兰</option>
									<option value="NO">挪威</option>
									<option value="PL">波兰</option>
									<option value="PT">葡萄牙</option>
									<option value="RE">留尼旺岛</option>
									<option value="RO">罗马尼亚</option>
									<option value="RS">塞尔维亚</option>
									<option value="RU">俄罗斯</option>
									<option value="SE">瑞典</option>
									<option value="SI">斯洛文尼亚</option>
									<option value="SK">斯洛伐克</option>
									<option value="SM">圣马力诺</option>
									<option value="SV">萨尔瓦多</option>
									<option value="UA">乌克兰</option>
									<option value="UK">英国</option>
									<option value="VA">梵蒂冈</option>
									<option value="YT">马约特岛</option>
									<option value="YU">南斯拉夫联盟</option>
									<option value="AO">安哥拉</option>
									<option value="BF">布基纳法索</option>
									<option value="BI">布隆迪</option>
									<option value="BJ">贝宁</option>
									<option value="BW">博茨瓦纳</option>
									<option value="CF">中非</option>
									<option value="CG">刚果(布)</option>
									<option value="CI">科特迪瓦</option>
									<option value="CM">喀麦隆</option>
									<option value="DJ">吉布提</option>
									<option value="DZ">阿尔及利亚</option>
									<option value="EG">埃及</option>
									<option value="ET">埃塞俄比亚</option>
									<option value="GA">加蓬</option>
									<option value="GH">加纳</option>
									<option value="GM">冈比亚</option>
									<option value="GN">几内亚</option>
									<option value="KE">肯尼亚</option>
									<option value="KT">科特迪瓦</option>
									<option value="LR">利比里亚</option>
									<option value="LS">莱索托</option>
									<option value="LY">利比亚</option>
									<option value="MA">摩洛哥</option>
									<option value="MG">马达加斯加</option>
									<option value="ML">马里</option>
									<option value="MU">毛里求斯</option>
									<option value="MW">马拉维</option>
									<option value="MZ">莫桑比克</option>
									<option value="NA">纳米比亚</option>
									<option value="NE">尼日尔</option>
									<option value="NG">尼日利亚</option>
									<option value="RW">卢旺达</option>
									<option value="SC">塞舌尔</option>
									<option value="SD">苏丹</option>
									<option value="SL">塞拉利昂</option>
									<option value="SN">塞内加尔</option>
									<option value="SO">索马里</option>
									<option value="SZ">斯威士兰</option>
									<option value="TD">乍得</option>
									<option value="TG">多哥</option>
									<option value="TN">突尼斯</option>
									<option value="TZ">坦桑尼亚</option>
									<option value="UG">乌干达</option>
									<option value="ZA">南非</option>
									<option value="ZM">赞比亚</option>
									<option value="ZR">扎伊尔</option>
									<option value="ZW">津巴布韦</option>


								</select>
							</div>

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

		</form>
	</div>
	</div>
</body>
</html>
