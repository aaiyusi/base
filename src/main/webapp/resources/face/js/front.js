/**
* 2007-2017 PrestaShop
*
* NOTICE OF LICENSE
*
* This source file is subject to the Academic Free License (AFL 3.0)
* that is bundled with this package in the file LICENSE.txt.
* It is also available through the world-wide-web at this URL:
* http://opensource.org/licenses/afl-3.0.php
* If you did not receive a copy of the license and are unable to
* obtain it through the world-wide-web, please send an email
* to license@prestashop.com so we can send you a copy immediately.
*
* DISCLAIMER
*
* Do not edit or add to this file if you wish to upgrade PrestaShop to newer
* versions in the future. If you wish to customize PrestaShop for your
* needs please refer to http://www.prestashop.com for more information.
*
*  @author    PrestaShop SA <contact@prestashop.com>
*  @copyright 2007-2017 PrestaShop SA
*  @license   http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*  International Registered Trademark & Property of PrestaShop SA
*
* Don't forget to prefix your containers with your own identifier
* to avoid any conflicts with others containers.
*/

$(window).load(function()
{
	if($(window).width() > 1023)
	{
		$("#index .owl-menu-ver-left .category-left").css('display','block');
		menuVerHover();
	}
	var width_menu_content = $('#header .container').width() - $('#owl-menu-ver-left').width();
	$('#owl-menu-ver-left ul.menu-content li div.owl-sub-menu').each(function(index, element)
	{
		var width_sub = parseInt($(this).children('.v-menu-sub-width').val());
		if($(window).width() < 1024 && width_sub >= 6)
			width_sub = 12;
		if($(window).width() < 1024 && width_sub < 6)
			width_sub = 6;
		if($(window).width() > 1023)
		{
			var width_sub_result = parseInt(width_menu_content/12*width_sub);
			$(this).width('100%');
		}
	});
});

$(window).resize(function()
{
	var width_menu_content = $('#header .container').width() - $('#owl-menu-ver-left').width();
	$('#owl-menu-ver-left ul.menu-content li div.owl-sub-menu').each(function(index, element)
	{
		var width_sub = parseInt($(this).children('.v-menu-sub-width').val());
		if($(window).width() < 1024 && width_sub >= 6)
			width_sub = 12;
		if($(window).width() < 1024 && width_sub < 6)
			width_sub = 6;
		if($(window).width() > 1023)
		{
			var width_sub_result = parseInt(width_menu_content/12*width_sub);
			$(this).width(width_sub_result);
			
			$("#index .owl-menu-ver-left .category-left").css('display','block')
			menuVerHover();
		}
	});
	
});

function menuVerHover()
{
	var ul_ver_menu = new HoverWatcher('.ver-menu-page .category-left');
	var ver_menu_title = new HoverWatcher('.ver-menu-page .category-title');
	
	$(".ver-menu-page .category-title").hover(
		function() {
			$(".ver-menu-page .category-left").stop(true, true).slideDown(500);
		},
		function() {
			setTimeout(function() {
				if (!ul_ver_menu.isHoveringOver() && !ver_menu_title.isHoveringOver()){
					$(".ver-menu-page .category-left").stop(true, true).slideUp(200);
				}
			}, 200);
		}
	);
	
	$(".ver-menu-page .category-left").hover(
		function() {
			$(".ver-menu-page .category-left").stop(true, true).slideDown(500);				
		},
		function() {
			setTimeout(function() {
				if (!ul_ver_menu.isHoveringOver())
					$(".ver-menu-page .category-left").stop(true, true).slideUp(200);
			}, 200);
		}
	);	
}

function HoverWatcher(selector)
{
	this.hovering = false;
	var self = this;

	this.isHoveringOver = function(){
		return self.hovering;
	}

	$(selector).hover(function(){
		self.hovering = true;
	}, function(){
		self.hovering = false;
	})
}

$(document).ready(function()
{
	$(document).on('click', '.icon_menu', function()
	{
		$('.owl-menu-mobile').addClass('open');
		$('body').addClass('no-scroll');	
	});
	
	$(document).on('click', '#menu-icon-close', function()
	{
		$('.owl-menu-mobile').removeClass('open');
		$('body').removeClass('no-scroll');
	});
	
});
