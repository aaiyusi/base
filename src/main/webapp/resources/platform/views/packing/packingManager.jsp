<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/resources/platform/inc.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
    <script src="${ctx.path}/resources/platform/js/common_grid.js"></script>
    <script src="${ctx.path}/resources/platform/js/common_format.js"></script>
    <script src="${ctx.path}/resources/platform/script/packing/packing.js"></script>
    <link type="text/javascript" href="${ctx.path}/resources/platform/css/new.css" rel="stylesheet">
</head>
<body>
<div class="animated fadeInRight">
    <div id="serachDiv" class="row form-group-sm">
        <div class="col-sm-12">
            <div class="ibox-content" style="padding: 5px 10px;padding-bottom: 0px;">
                <form id="pageForm" method="post">
                    <div class="form-inline">
                        <div class="form-group">
                            <label>包材名称：</label> <input type="text" class="form-control input-small"  name="name" maxlength="50" />
                            <label>描述：</label> <input type="text" class="form-control input-small"  name="remark"  maxlength="50" />
                            <div class="form-group clearfix">
                                <button type="button" class="btn btn-primary btn-sm" onclick="common.search();">查询</button>
                                <button type="button" class="btn btn-white btn-sm" onclick="common.clear();">重置</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <div id="buttonDiv" class="row wrapper ">
        <div class="col-sm-12">
            <div class="form-inline" style="margin: 5px;margin-top:0px;">
                <div class="form-group">
                    <button class="btn btn-primary btn-sm" type="button" onclick="openAddPage();">新增</button>
                </div>
                <div class="form-group">
                    <button class="btn btn-primary btn-sm" type="button" id="userEditBtn" onclick="editPage();">编辑</button>
                </div>
                <div class="form-group">
                    <button class="btn btn-primary btn-sm" type="button" id="userDel" onclick="del();">删除</button>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-md-12">
        <div class="jqGrid_wrapper white-bg">
            <table id="jqGrid"></table>
            <!-- 显示table -->
            <div id="jqGridPager"></div>
            <!-- 显示分页 -->
        </div>
    </div>
</div>

</body>
<!-- 新增包材 -->
<div class="panel panel-default" id="dataAdd" style="display: none;">  
   <form  action="${ctx.path}/api/packing/addPacking.do" id="dataAddForm" method="post"> 
	    <div class="panel-body pt0 pb0">
		<div class="form-horizontal form-bordered min" id="contentDiv">
		<div class="form-group">
    
    <label class="col-sm-2 control-label">包材名称</label>
    <div class="col-sm-4">
        <input type="text" class="form-control" name="name" placeholder="请输入包材名称">
    </div>

    <label class="col-sm-2 control-label">描述</label>
    <div class="col-sm-4">
        <input type="text" class="form-control" name="remark" placeholder="请输入描述">
    </div>
</div><div class="form-group">
    
    <label class="col-sm-2 control-label">级别</label>
    <div class="col-sm-4">
        <select class="form-control" name="level">
            <option value="">-请选择-</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option> 
        </select>
    </div>

    <label class="col-sm-2 control-label">包材尺寸-长</label>
    <div class="col-sm-4">
        <div class="input-group input-group-sm">
            <input type="text" class="form-control" name="length" placeholder="请输入包材尺寸-长">
             <span class="input-group-addon">厘米</span>
        </div>
    </div>
</div><div class="form-group">
    
    <label class="col-sm-2 control-label">包材尺寸-宽</label>
    <div class="col-sm-4">
        <div class="input-group input-group-sm">
            <input type="text" class="form-control" name="width" placeholder="请输入包材尺寸-宽">
             <span class="input-group-addon">厘米</span>
        </div>
    </div>

    <label class="col-sm-2 control-label">包材尺寸-高</label>
    <div class="col-sm-4">
        <div class="input-group input-group-sm">
            <input type="text" class="form-control" name="height" placeholder="请输入包材尺寸-高">
             <span class="input-group-addon">厘米</span>
        </div>
    </div>
</div><div class="form-group">
    
    <label class="col-sm-2 control-label">重量</label>
    <div class="col-sm-4">
        <div class="input-group input-group-sm">
            <input type="text" class="form-control" name="weight" placeholder="请输入重量">
            <span class="input-group-addon">克</span>
        </div>
    </div>

    <label class="col-sm-2 control-label">价格</label>
    <div class="col-sm-4">
        <div class="input-group input-group-sm">
            <input type="text" class="form-control" name="price" placeholder="请输入价格">
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
    <label class="col-sm-2 control-label">包材名称</label>
    <div class="col-sm-4">
        <input type="text" class="form-control" name="name" placeholder="请输入包材名称">
    </div>

    <label class="col-sm-2 control-label">描述</label>
    <div class="col-sm-4">
        <input type="text" class="form-control" name="remark" placeholder="请输入描述">
    </div>
</div><div class="form-group">
    
    <label class="col-sm-2 control-label">级别</label>
    <div class="col-sm-4">
        <select class="form-control" name="level" type="select">
            <option value="">-请选择-</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option> 
        </select>
    </div>

    <label class="col-sm-2 control-label">包材尺寸-长</label>
    <div class="col-sm-4">
        <div class="input-group input-group-sm">
            <input type="text" class="form-control" name="length" placeholder="请输入包材尺寸-长">
             <span class="input-group-addon">厘米</span>
        </div>
    </div>
</div><div class="form-group">
    
    <label class="col-sm-2 control-label">包材尺寸-宽</label>
    <div class="col-sm-4">
        <div class="input-group input-group-sm">
            <input type="text" class="form-control" name="width" placeholder="请输入包材尺寸-宽">
             <span class="input-group-addon">厘米</span>
        </div>
    </div>

    <label class="col-sm-2 control-label">包材尺寸-高</label>
    <div class="col-sm-4">
        <div class="input-group input-group-sm">
            <input type="text" class="form-control" name="height" placeholder="请输入包材尺寸-高">
             <span class="input-group-addon">厘米</span>
        </div>
    </div>
</div><div class="form-group">
    
    <label class="col-sm-2 control-label">重量</label>
    <div class="col-sm-4">
        <div class="input-group input-group-sm">
            <input type="text" class="form-control" name="weight" placeholder="请输入重量">
            <span class="input-group-addon">克</span>
        </div>
    </div>

    <label class="col-sm-2 control-label">价格</label>
    <div class="col-sm-4">
        <div class="input-group input-group-sm">
            <input type="text" class="form-control" name="price" placeholder="请输入价格">
            <span class="input-group-addon">RMB</span>
        </div>
    </div>
</div></div>
	    </div>
	    </form>
	</div>

</html>
