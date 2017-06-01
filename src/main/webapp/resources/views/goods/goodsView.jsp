<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/resources/platform/inc.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<title>商品详情信息</title>
		<script type="text/javascript">
			var goodsId = '${goodsId}';
		</script>
		<script src="${ctx.path}/resources/platform/js/common_grid.js"></script>
		<script src="${ctx.path}/resources/platform/js/common_check.js"></script>
		<script src="${ctx.path}/resources/platform/js/common_format.js"></script>
		<script src="${ctx.path}/resources/script/goods/goodsView.js"></script>
		<script src="${ctx.path}/resources/components/drop/pic_drop.js"></script>
   		<script src="${ctx.path}/resources/components/plupload/plupload.full.min.js"></script>		
		<link type="text/javascript" href="${ctx.path}/resources/platform/css/new.css" rel="stylesheet">
		<link rel="stylesheet" type="text/css" href="${ctx.path}/resources/css/custom.css" />
		<style type="text/css">
		li{list-style:none;float:left;padding-left:15px;}
		</style>
	</head>
	<script type="text/javascript">
	

	//获取设置图片真实宽高的方法
	function getImgRealPX(url,id){
		var $IMG = new Image();
	    $IMG.src = url;
	    $IMG.onload = function(){
	        var width = $IMG.width;
	        var height = $IMG.height;
	        var imgDom = $('#'+id+' img[src="'+url+'"]');
	        if(imgDom.length > 0){
	            var text = width + ' * ' + height;
	            imgDom.closest('.picture_con').siblings('.picture_size').find('.pic_size').html(text);
	        }
	    };
	}
	
	</script>
	<body class="white-bg">
		<div class="animated fadeInRight">
			<div class="row m-b-lg">
				<div class="col-sm-12">
					<div class="tabs-container">
						<ul class="nav nav-tabs" id="myTab">
							<li class="active">
								<a data-toggle="tab" href="#tab-1">基础信息</a>
							</li>
						</ul>
						<div class="tab-content ">
							<!-- 基础信息页签 -->
							<div id="tab-1" class="tab-pane active">
							  	<div class="ibox" style="margin-bottom: 30px;">
									<div class="ibox-content"> 
										<form method="post" class="form-horizontal" id="dataForm" action="">
											<div class="form-horizontal form-bordered min" id="contentDiv">
												<div class="panel-body">
													<div class="form-group">
														<label class="col-sm-2 control-label">
															<span class="text-danger pr5">*</span>SKU
														</label>
														<div class="col-sm-10">
															<input class="form-control" name="sku" id="sku" placeholder="请输入SKU" type="text">
														</div>
														<input class="form-control" name="goodsId" id="goodsId" value="0" type="hidden">
													</div>
													<div class="form-group">
														<label class="col-sm-2 control-label">
															<span class="text-danger pr5">*</span>中文名称
														</label>
														<div class="col-sm-10">
															<input class="form-control" id="name" name="name" placeholder="请输入中文名称" type="text">
														</div>
													</div>
													<div class="form-group">
														<label class="col-sm-2 control-label">
															<span class="text-danger pr5">*</span>英文名称
														</label>
														<div class="col-sm-10">
															<input class="form-control" id="eName" name="eName" placeholder="请输入英文名称" type="text">
														</div>
													</div>
													<div class="form-group">
														<label class="col-sm-2 control-label">
															<span class="text-danger pr5">*</span>商品目录
														</label>
														<div class="col-sm-4">
															<select class="form-control" id="catalogiItems" onchange="catalogiItemChange()">
																<option value="0">-请选择-</option>
															</select>
														</div>
														<div class="col-sm-4">
															<select class="form-control" id="catalogis" name="catalogiId">
																<option value="0">-请选择-</option>
															</select>
														</div>
														<div class="col-sm-2">
															<button type="button" class="btn btn-md btn-default" onclick="getGoodsStorageMain()">商品目录管理</button>
														</div>
													</div>
													<div class="form-group">
														<label class="col-sm-2 control-label">虚拟SKU</label>
														<div class="col-sm-10">
															<textarea class="form-control" rows="3" id="virtualSku" name="virtualSku" placeholder="请输入虚拟SKU"></textarea>
														</div>
													</div>
													<div class="form-group">
														<label class="col-sm-2 control-label">申报品名(英文)</label>
														<div class="col-sm-4">
															<input class="form-control" name="declareEName" placeholder="请输入申报品名(英文)" type="text">
														</div>
														<label class="col-sm-2 control-label">申报品名(中文)</label>
														<div class="col-sm-4">
															<input class="form-control" name="declareName" placeholder="请输入申报品名(中文)" type="text">
														</div>
													</div>
													<div class="form-group">
														<label class="col-sm-2 control-label">是否带电池</label>
														<div class="col-sm-2">
															<select class="form-control" id="haveBattery" name="haveBattery">
																<option value="">-请选择-</option>
																<option value="0">否</option>
																<option value="1">是</option>
															</select>
														</div>
														<label class="col-sm-1 control-label">侵权</label>
														<div class="col-sm-2">
															<select class="form-control" id="infringement" name="infringement">
																<option value="">-请选择-</option>
																<option value="0">否</option>
																<option value="1">是</option>
															</select>
														</div>
														<label class="col-sm-2 control-label">
															<span class="text-danger pr5">*</span>商品状态
														</label>
														<div class="col-sm-2">
															<select class="form-control"  id="saleState" name="saleState">
																<option value="0">-请选择-</option>
																<option value="1">自动创建</option>
																<option value="2">等待开发</option>
																<option value="3">正在销售</option>
																<option value="4">商品清仓</option>
																<option value="5">停止销售</option>
															</select>
														</div>
													</div>
													<div class="form-group">
														<label class="col-sm-2 control-label">备注信息</label>
														<div class="col-sm-10">
															<textarea class="form-control" type="text" rows="3" name="remark" placeholder="请输入备注信息"></textarea>
														</div>
													</div>
													<div class="form-group">
														<label class="col-sm-2 control-label">图片</label>
														<div class="col-sm-10">
															<button class="btn btn-md btn-primary mr10" id="tbrowse" type="button">上传</button>
															<input name="storgetImage" id="imageURLs" type="hidden"/>
															<input name="saleImage" id="saleImage" type="hidden"/>
															<div class="picture_list">
											                	<ul class="pic-drop" id="tpic-drop">
									                				<li class="upload_pictures" id="tImg">
												                		<img src="${ctx.path}/resources/images/kongPic.png" style="width: 130px;height: 149px;"/>
												                	</li>
											                	</ul>
										                	</div>
														</div>
													</div>
												</div>
											</div>
										</form>
									</div>
								</div>
								<div class="form-group navbar-fixed-bottom" style="background: #f0f4f7;">
									<div style="text-align: right;vertical-align: middle; font-size:0; padding-right: 20px;">
										<button type="button" class="btn btn-md btn-primary mr10" id="baseAdd" onclick="addGoods(0)">保存</button>
										<button type="button" class="btn btn-md btn-default mr10" onclick="parent.layerCloseAll()">取消</button>
									</div>
								</div>
							</div>
							
						</div>
					</div>
				</div>
			</div>
		</div>
	</body>
</html>
