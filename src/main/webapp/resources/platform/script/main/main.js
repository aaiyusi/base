var createMenuLi=function(menuObj){
	var menuLiStr = "";
	var mhref = "javascript:void(0);";
	if(menuObj.menuType == 1){
		mhref = ctx.path+menuObj.url;
		menuLiStr ='<li>'
					+'<a class="J_menuItem" href="'+mhref+'">'
					+'<i class="midicon '+menuObj.menuIcon+'"></i> <span class="nav-label">'+menuObj.menuName+'</span></a>';
	}else{
		menuLiStr = "<li>"
					+'<a href="'+mhref+'">'
					+'<i class="midicon '+menuObj.menuIcon+'"></i>'
					+'<span class="nav-label">'+menuObj.menuName+'</span>'
					+'<span class="fa arrow"></span>'
					+'</a>';
	}
	if(menuObj.children){
		menuLiStr+='<ul class="nav nav-second-level">';
		for(var i=0,len=menuObj.children.length;i<len;i++){
			menuLiStr+='<li><a class="J_menuItem" ';
			if(i==0){
				menuLiStr+=' data-index="0" ';
			}
			if(menuObj.children[i].url){
				menuLiStr+='href='+ctx.path+menuObj.children[i].url;
			}
			menuLiStr+='><em class="fa fa-circle">'+menuObj.children[i].menuName+'</em></a></li>';
		}
		menuLiStr+='</ul>';
	}
	menuLiStr+='</li>';
	$("#nav-header-menu").after(menuLiStr);
};

var initMainMenus=function(menusMap){
	var rootMenus=menusMap["1"];
	for(var i=0,len=rootMenus.length;i<len;i++){
		var rootMenu=rootMenus[i];
		if(menusMap[rootMenu.menuId+""]){
			rootMenu.children=menusMap[rootMenu.menuId+""];
			delete menusMap[rootMenu.menuId+""];
		}
		createMenuLi(rootMenu);
	}
	var homeMenu = {"menuCode":"MENU_MANAGE_SYS_HOME","menuIcon":"home_icon","menuId":0,"actionType":0,"url":"/resources/views/home.jsp","descriptions":"菜单管理","parentId":0,"isDefault":0,"menuType":1,"systemId":1,"menuName":"首页","actionUrl":""};
	createMenuLi(homeMenu);
};

//子界面中打开Tab关卡方法
function openMenu(url){
	$("#side-menu .J_menuItem[href=\'" + url + "\']").click();
}

