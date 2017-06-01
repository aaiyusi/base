<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/resources/platform/inc.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
    <script src="${ctx.path}/resources/platform/js/common_grid.js"></script>
    <script src="${ctx.path}/resources/platform/js/common_format.js"></script>
    <script src="${ctx.path}/resources/script/packing/packing.js"></script>
    <link type="text/javascript" href="${ctx.path}/resources/platform/css/new.css" rel="stylesheet">
</head>
<body style="overflow:hidden;">
	<section id="main" role="main">
	<div class="container-fluid has-toobar has-navbar multichoice"
		id="parentMenu">
<div class="animated fadeInRight">
    <div id="serachDiv" class="row form-group-sm">
                    <div class="form-inline operation_con">
                        <div class="large-list-title">
                          <button class="btn btn-primary btn-sm btn-success" type="button" onclick="openAddPage();">新增包装</button>
                          </div>
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
</body>
<!-- 新增包材 -->
<div class="panel panel-default" id="dataAdd" style="display: none;">  
   <form  action="${ctx.path}/api/packing/addPacking.do" id="dataAddForm" method="post"> 
	    <div class="panel-body pt0 pb0">
		<div class="form-horizontal form-bordered min" id="contentDiv">
		<div class="form-group">
    
    <label class="col-sm-2 control-label"><font color="red">*</font>包材名称</label>
    <div class="col-sm-4">
        <input type="text" id="name" class="form-control" name="name" placeholder="请输入包材名称"/>
    </div>

    <label class="col-sm-2 control-label">描述</label>
    <div class="col-sm-4">
        <input type="text" class="form-control" name="remark" placeholder="请输入描述">
    </div>
</div><div class="form-group">
    
    <label class="col-sm-2 control-label"><font color="red">*</font>级别</label>
    <div class="col-sm-4">
        <select class="form-control" name="level" id="level">
            <option value="">-请选择-</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option> 
        </select>
    </div>

    <label class="col-sm-2 control-label"><font color="red">*</font>包材尺寸-长</label>
    <div class="col-sm-4">
        <div class="input-group input-group-sm">
            <input type="text" id="length" class="form-control" name="length" placeholder="请输入包材尺寸-长">
             <span class="input-group-addon">厘米</span>
        </div>
    </div>
</div><div class="form-group">
    
    <label class="col-sm-2 control-label"><font color="red">*</font>包材尺寸-宽</label>
    <div class="col-sm-4">
        <div class="input-group input-group-sm">
            <input type="text" id="width" class="form-control" name="width" placeholder="请输入包材尺寸-宽">
             <span class="input-group-addon">厘米</span>
        </div>
    </div>

    <label class="col-sm-2 control-label"><font color="red">*</font>包材尺寸-高</label>
    <div class="col-sm-4">
        <div class="input-group input-group-sm">
            <input type="text" id="height" class="form-control" name="height" placeholder="请输入包材尺寸-高">
             <span class="input-group-addon">厘米</span>
        </div>
    </div>
</div><div class="form-group">
    
    <label class="col-sm-2 control-label"><font color="red">*</font>重量</label>
    <div class="col-sm-4">
        <div class="input-group input-group-sm">
            <input type="text" id="weight" class="form-control" name="weight" placeholder="请输入重量">
            <span class="input-group-addon">克</span>
        </div>
    </div>

    <label class="col-sm-2 control-label">价格</label>
    <div class="col-sm-4">
        <div class="input-group input-group-sm">
            <input type="text" id="price" class="form-control" name="price" placeholder="请输入价格">
            <span class="input-group-addon">RMB</span>
        </div> 
    </div>
</div></div>
	    </div>
	    </form>
	</div>
    
<!-- 编辑包材 -->
<div class="panel panel-default" id="dataEdit" style="display: none;">  
   <form  action="${ctx.path}/api/packing/updatePacking.do" id="dataEditForm" method="post"> 
	    <div class="panel-body pt0 pb0">
		<div class="form-horizontal form-bordered min" id="contentDiv">
		<div class="form-group">
    <input type="hidden" name="packingId"/> 
    <label class="col-sm-2 control-label"><font color="red">*</font>包材名称</label>
    <div class="col-sm-4">
        <input type="text" class="form-control" id="eName" name="name" placeholder="请输入包材名称">
    </div>

    <label class="col-sm-2 control-label">描述</label>   
    <div class="col-sm-4">
        <input type="text" class="form-control" name="remark" placeholder="请输入描述">
    </div>
</div><div class="form-group">
    
    <label class="col-sm-2 control-label"><font color="red">*</font>级别</label>
    <div class="col-sm-4">
        <select class="form-control" id="eLevel" name="level" type="select">
            <option value="">-请选择-</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option> 
        </select>
    </div>

    <label class="col-sm-2 control-label"><font color="red">*</font>包材尺寸-长</label>
    <div class="col-sm-4">
        <div class="input-group input-group-sm">
            <input type="text" class="form-control" id="eLength" name="length" placeholder="请输入包材尺寸-长">
             <span class="input-group-addon">厘米</span>
        </div>
    </div>
</div><div class="form-group">
    
    <label class="col-sm-2 control-label"><font color="red">*</font>包材尺寸-宽</label>
    <div class="col-sm-4">
        <div class="input-group input-group-sm">
            <input type="text" class="form-control" id="eWidth" name="width" placeholder="请输入包材尺寸-宽">
             <span class="input-group-addon">厘米</span>
        </div>
    </div>

    <label class="col-sm-2 control-label"><font color="red">*</font>包材尺寸-高</label>
    <div class="col-sm-4">
        <div class="input-group input-group-sm">
            <input type="text" class="form-control" id="eHeight" name="height" placeholder="请输入包材尺寸-高">
             <span class="input-group-addon">厘米</span> 
        </div>
    </div>
</div><div class="form-group">
    
    <label class="col-sm-2 control-label"><font color="red">*</font>重量</label>
    <div class="col-sm-4">
        <div class="input-group input-group-sm">
            <input type="text" class="form-control" id="eWeight" name="weight" placeholder="请输入重量">
            <span class="input-group-addon">克</span>
        </div>
    </div>

    <label class="col-sm-2 control-label">价格</label>
    <div class="col-sm-4">
        <div class="input-group input-group-sm">
            <input type="text" class="form-control" id="ePrice" name="price" placeholder="请输入价格">
            <span class="input-group-addon">RMB</span>
        </div>
    </div>
</div></div>
	    </div>
	    </form>
	</div>

</html>
