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
*  @author    Codespot SA <support@presthemes.com>
*  @copyright 2007-2017 PrestaShop SA
*  @license   http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*  International Registered Trademark & Property of PrestaShop SA
*/

function isMobileIpad() {
	if(navigator.userAgent.match(/Android/i) ||
		navigator.userAgent.match(/webOS/i) ||
		navigator.userAgent.match(/iPad/i) ||
		navigator.userAgent.match(/iPhone/i) ||
		navigator.userAgent.match(/iPod/i)
		){
			return true;
	}
	else return false;
}

function isMobile() {
	if(navigator.userAgent.match(/Android/i) ||
		navigator.userAgent.match(/webOS/i) ||
		navigator.userAgent.match(/iPhone/i) ||
		navigator.userAgent.match(/iPod/i)
		){
			return true;
	}
	else return false;
}

$(function(){
	$(window).on("load",function()
	{
		$(".menu-mobile-inner").mCustomScrollbar({
			theme:"minimal"
		});
	});
			
	var scrol_to_top = 1;
	if (typeof scrol_to_top !== "undefined" && scrol_to_top)
	{
		if($(this).scrollTop()==0)		
			$('#owl_scroll_top').addClass('disabled');
	
		$(window).scroll(function(){
			if($(this).scrollTop()!=0)
				$('#owl_scroll_top').removeClass('disabled');
			else
				$('#owl_scroll_top').addClass('disabled');
		});
		$('#owl_scroll_top').click(function(){
			$('body,html').animate({scrollTop:0},500);
		});
	}
});

function checkBrowser()
{
	var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
	var isFirefox = typeof InstallTrigger !== 'undefined';
	var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
	var isChrome = !!window.chrome && !isOpera;
	var isIE = false || !!document.documentMode;
	
	if(isChrome || isSafari)
	{
		$('.bn-top-home ul li:first-child').css('margin-bottom','1px');
	}
	else
		return false;
}

function accordionProductTab()
{
	$('.product_tab_container h2.title_block').on('click', function(e){
		$(this).toggleClass('active').next('.toggle-footer').stop().slideToggle('medium');
		e.preventDefault();
	})
	$('.product_tab_container').addClass('accordion').find('.toggle-footer').slideUp('fast');
}

$(document).ready(function()
{
	checkBrowser();
	
    $('[data-toggle="tooltip"]').tooltip();
	
	$(document).on('click', '#switch_left_column .icon_wrap', function()
	{
		$('#left_column').addClass('open-left');
		$('body#category').addClass('no-scroll');		
		$("body#category").append('<div class="modal-backdrop fade in"></div>');
		$("#left_column.open-left").mCustomScrollbar({
			theme:"dark-2"
		});
	});
	
	$(document).on('click', '.left-icon-back .icon-back', function()
	{
		$('#left_column').removeClass('open-left');
		$('body#category').removeClass('no-scroll');
		$('.modal-backdrop').remove();
	});
	if(isMobile())
	{
		$('.product_tab_container').addClass('mobile');
		accordionProductTab();
	}

	if($('body').attr('id') == 'index')
	{
		$("#layerslider").layerSlider({
			responsive: $("#layerslider").data('responsive'),
			responsiveUnder: $("#layerslider").data('responsiveunder'),
			layersContainer: $("#layerslider").data('layerscontainer'),
			autoStart: $("#layerslider").data('autostart'),
			pauseOnHover: $("#layerslider").data('pauseonhover'),
			firstSlide: $("#layerslider").data('firstslide'),
			animateFirstSlide: $("#layerslider").data('animatefirstslide'),
			forceLoopNum: $("#layerslider").data('forceloopnum'),
			towWaySlideshow: $("#layerslider").data('towwayslideshow'),
			randomSlideshow: $("#layerslider").data('randomslideshow'),
			skin: $("#layerslider").data('skin'),
			loops: $("#layerslider").data('loops'),
			skinsPath: $("#layerslider").data('skinspath'),
			globalBGColor: $("#layerslider").data('globalbgcolor'),
			globalBGImage: $("#layerslider").data('globalbgimage'),
			navPrevNext: $("#layerslider").data('navprevnext'),
			navStartStop: $("#layerslider").data('navstartstop'),
			navButtons: $("#layerslider").data('navbuttons'),
			hoverPrevNext: $("#layerslider").data('hoverprevnext'),
			hoverBottomNav:$("#layerslider").data('hoverbottomnav'),
			keybNav:$("#layerslider").data('keybnav'),
			touchNav:$("#layerslider").data('touchnav'),
			showBarTimer:$("#layerslider").data('showbartimer'),
			showCircleTimer: $("#layerslider").data('showcircletimer'),
			thumbnailNavigation: $("#layerslider").data('thumbnailnavigation'),
			tnContainerWidth: $("#layerslider").data('tnContainerwidth'),
			tnWidth: $("#layerslider").data('tnwidth'),
			tnHeight: $("#layerslider").data('tnheight'),
			tnActiveOpacity: $("#layerslider").data('tnactiveopacity'),
			tnInactiveOpacity: $("#layerslider").data('tninactiveopacity'),
			autoPlayVideos: $("#layerslider").data('autoplayvideos'),
			autoPauseSlideshow: $("#layerslider").data('autopauseslideshow'),
			youtubePreview: $("#layerslider").data('youtubepreview'),
			imgPreload: $("#layerslider").data('imgpreload'),
			lazyLoad: $("#layerslider").data('lazyload'),
			yourLogo: $("#layerslider").data('yourlogo'),
			yourLogoStyle: $("#layerslider").data('yourlogostyle'),
			yourLogoLink: $("#layerslider").data('yourlogolink'),
			yourLogoTarget: $("#layerslider").data('yourlogotarget'),
		});
	}
	$('.owl_countdown').countdown({
		autoStart: true,
	});
	
	/*SLIDER*/
	$(".js-owl-slider .products").owlCarousel({
	  loop: true,
	  slideSpeed: 700,
		responsive: {
			0: { items: 1},
			464:{ items: 2,slideBy:2},
			750:{ items: 3,slideBy:2},
			974:{ items: 4,slideBy:2},
			1170:{ items: 5,slideBy:2}
		},
	  dots: false,
	  nav: true,
	  margin:30
	});
	
	$(".prod-cat-tophome .products").owlCarousel({
	  loop: true,
	  slideSpeed: 700,
		responsive: {
			0: { items: 1},
			464:{ items: 2,slideBy:2},
			750:{ items: 3,slideBy:2},
			974:{ items: 3,slideBy:2},
			1170:{ items: 5,slideBy:3}
		},
	  dots: false,
	  nav: true,
	  margin:30
	});
	
	$(".prod_cat_home .products").owlCarousel({
	  loop: true,
	  slideSpeed: 700,
		responsive: {
			0: { items: 1},
			464:{ items: 2,slideBy:2},
			750:{ items: 3,slideBy:2},
			974:{ items: 3,slideBy:2},
			1170:{ items: 4,slideBy:2}
		},
	  dots: false,
	  nav: true,
	  margin:20
	});
	
	
	$("#owl_testimonial_content").owlCarousel({
	  loop: true,
		responsive: {
			0: { items: 1},
			464:{ items: 1},
			750:{ items: 1},
			974:{ items: 1},
			1170:{ items: 1}
		},
	  dots: true,
	  nav: false
	});
	
	var owl_manu = $("#ul_manu");
	imagesLoaded(owl_manu, function() {
		$("#ul_manu").owlCarousel({
		  loop: true,
			responsive: {
				0: { items: 2},
				464:{ items: 3, slideBy: 2},
				750:{ items: 4, slideBy: 2},
				974:{ items: 6, slideBy: 3},
				1170:{ items: 7, slideBy: 4}
			},
		  dots: false,
		  nav: true,
		  margin:30
		  });
		});
		
	var prod_cat_slider = $('.prod_cat_home .block-content').data('slider');
	if (prod_cat_slider)
	{
		$(".owl1-prod-cat").owlCarousel({
			loop: true,
			slideSpeed: 700,
			responsive: {
				0: { items: 1},
				464:{ items: 2},
				750:{ items: 3,slideBy:2},
				974:{ items: 3,slideBy:2},
				1170:{ items: 3,slideBy:2}
			},
			dots: false,
			nav: true,
			margin:30
		});
	}
	
	var prod_filter_tc = $('.pfiter-top-colum .block-content').data('slider');
	if (prod_cat_slider)
	{
		$(".pfiter-top-colum .product_list").owlCarousel({
			loop: true,
			slideSpeed: 700,
			responsive: {
				0: { items: 1},
				464:{ items: 1},
				750:{ items: 1},
				974:{ items: 1},
				1170:{ items: 1}
			},
			dots: false,
			nav: true,
			margin:30
		});
	}
	
	
	$(".prod-filter-home .prod-filter-inner").owlCarousel({
	  loop: true,
		responsive: {
			0: { items: 1},
			464:{ items: 1},
			750:{ items: 1},
			974:{ items: 1},
			1170:{ items: 1}
		},
	  dots: false,
	  nav: true
	});
	/*Same product category*/
	
	$(".prod-cat-content").owlCarousel({
	  loop: true,
		responsive: {
			0: { items: 1},
			464:{ items: 2},
			750:{ items: 3,slideBy:2},
			974:{ items: 3,slideBy:2},
			1170:{ items: 4,slideBy:2}
		},
	  dots: false,
	  nav: true,
	   margin:30
	});
	
	$(".product-accessories .products").owlCarousel({
	  loop: true,
		responsive: {
			0: { items: 1},
			464:{ items: 2},
			750:{ items: 3,slideBy:2},
			974:{ items: 3,slideBy:2},
			1170:{ items: 4,slideBy:2}
		},
	  dots: false,
	  nav: true,
	   margin:30
	});

});

function setcook()
{
	var nazwa = 'cookie_ue';
	var wartosc = '1';
	var expire = new Date();
	expire.setMonth(expire.getMonth()+12);
	document.cookie = nazwa + "=" + escape(wartosc) +";path=/;" + ((expire==null)?"" : ("; expires=" + expire.toGMTString()))
}
function closeUeNotify()
{
	$('#cookie_notice').slideUp();
	setcook();
}