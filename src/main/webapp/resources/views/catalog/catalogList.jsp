<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/resources/platform/inc.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
    <script src="${ctx.path}/resources/platform/js/common_grid.js"></script>
    <script src="${ctx.path}/resources/platform/js/common_format.js"></script>
    <script src="${ctx.path}/resources/script/catalog/catalog.js?v=${ctx.versions}"></script>
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
                         <button class="btn btn-primary btn-sm btn-success" type="button" onclick="openAddPage(0);">新增分类<btton>
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
<!-- 查看 -->
<div id="dataCheck" class="white-bg"
		style="display:none;padding-top:10px;">

			<div class="panel panel-default">
				<div class="panel-body">
					<!-- 添加入库列表 -->
					<div class="row">
						<div class="col-md-12">
							<div class="jqGrid_Addwrapper white-bg">
								<table id="childrenGrid"></table>
								<!-- 显示table -->
							</div>
					</div>
					</div>
				</div>
			</div>
	</div>
<!-- 新增 -->
<div id="dataAdd" class="white-bg" style="display:none;">
	<form method="post" class="form-horizontal" id="dataForm"
			action="${ctx.path}/api/catalog/addCatalog.do">
	<input type="hidden" id="pId" name="pCatalogiId"/> 		
	<input type="hidden" id="addStatus" name="addStatus"/>
	<div class="panel panel-default">
	    <div class="panel-body pt0 pb0">
		<div class="form-horizontal form-bordered min" id="contentDiv">
		<div class="form-group">
    

    <label class="col-sm-4 control-label"><font color="red">*</font>目录中文名称</label> 
    <div class="col-sm-4">
        <input type="text" class="form-control" id="addName"  name="name" placeholder="请输入目录中文名称" maxlength="30" style="width: 150px"/> 
    </div>
</div><div class="form-group">
    
    <label class="col-sm-4 control-label">英文名称</label>
    <div class="col-sm-4">
        <input type="text" class="form-control" name="eName" placeholder="请输入英文名称" maxlength="50" style="width: 150px"/>
    </div>
</div>

 <div class="form-group">
 <label class="col-sm-4 control-label">排序</label>
    <div class="col-sm-4">
        <input type="text" class="form-control"  id="orderNum" name="orderNum" placeholder="请输入排序" maxlength="50" style="width: 150px"/>
    </div>
 </div>

<div class="form-group">
    
    <label class="col-sm-4 control-label">描述</label>
    <div class="col-sm-4">
        <input type="text" class="form-control" name="remark" placeholder="请输入描述" maxlength="500" style="width: 150px">
    </div>

</div>
<div class="form-group">
<label class="col-sm-4 control-label">报关编码</label>
    <div class="col-sm-4">
        <input type="text" class="form-control" name="customsCode" placeholder="请输入报关编码" maxlength="50" style="width: 150px">
    </div>
</div>
</div>
	    </div>
	</div>
    
	</form>
</div>
<!-- 编辑 -->
<div id="dataEdit" class="white-bg" style="display:none;">
	<form method="post" class="form-horizontal" id="dataFormEdit"
			action="${ctx.path}/api/catalog/editCatalog.do">
			
   <input id="dataId" name="catalogiId" type="hidden"/>  
   <input id="status" name="status" type="hidden"/> 	
	<div class="panel panel-default">
	    <div class="panel-body pt0 pb0">
		<div class="form-horizontal form-bordered min" id="contentDiv">
		<div class="form-group">
    

    <label class="col-sm-4 control-label"><font color="red">*</font>目录中文名称</label>
    <div class="col-sm-4">
        <input type="text" class="form-control" id="eName"  name="name" placeholder="请输入目录中文名称" maxlength="30" style="width: 150px">
    </div>
</div>
<div class="form-group">
    
    <label class="col-sm-4 control-label">英文名称</label>
    <div class="col-sm-4">
        <input type="text" class="form-control" name="eName" placeholder="请输入英文名称" maxlength="50" style="width: 150px">
    </div>
 
</div><div class="form-group">
    <label class="col-sm-4 control-label">排序</label>
    <div class="col-sm-4">
        <input type="text" class="form-control" id="eOrderNum" name="orderNum" placeholder="请输入排序" style="width: 150px">
    </div>
</div><div class="form-group">
    
    <label class="col-sm-4 control-label">描述</label>
    <div class="col-sm-4">
        <input type="text" class="form-control" name="remark" placeholder="请输入描述" maxlength="500" style="width: 150px">
    </div>
</div>
<div class="form-group">
 <label class="col-sm-4 control-label">报关编码</label>
    <div class="col-sm-4">
        <input type="text" class="form-control" name="customsCode" placeholder="请输入报关编码" maxlength="50" style="width: 150px">
    </div>
</div>

</div>
	    </div>
	</div>
    
	</form>
</div>
</div>
</section>
</body>
</html>
