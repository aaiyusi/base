<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/resources/platform/inc.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html lang="en">

<head>

<meta charset="utf-8">
<meta http-equiv="x-ua-compatible" content="ie=edge">


<title>Oriental Treasure</title>
<meta name="description" content="Shop powered by PrestaShop">
<meta name="keywords" content="">


<meta name="viewport" content="width=device-width, initial-scale=1">

<!-- Google Tag Manager -->
<script>
	(function(w, d, s, l, i) {
		w[l] = w[l] || [];
		w[l].push({
			'gtm.start' : new Date().getTime(),
			event : 'gtm.js'
		});
		var f = d.getElementsByTagName(s)[0], j = d.createElement(s), dl = l != 'dataLayer' ? '&l='
				+ l
				: '';
		j.async = true;
		//j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
		//f.parentNode.insertBefore(j, f);
	})(window, document, 'script', 'dataLayer', 'GTM-KT8BBNC');
</script>
<!-- End Google Tag Manager -->

<link rel="icon" type="image/vnd.microsoft.icon"
	href="/img/favicon.ico?1491811578">
<link rel="shortcut icon" type="image/x-icon"
	href="/img/favicon.ico?1491811578">


<link rel="stylesheet" href="${ctx.path}/resources/face/css/theme.css"
	type="text/css" media="all">
<link rel="stylesheet"
	href="${ctx.path}/resources/face/css/owlcustomhtml.css" type="text/css"
	media="all">
<link rel="stylesheet"
	href="${ctx.path}/resources/face/css/layerslider.css" type="text/css"
	media="all">
<link rel="stylesheet" href="${ctx.path}/resources/face/css/front.css"
	type="text/css" media="all">
<link rel="stylesheet"
	href="${ctx.path}/resources/face/css/owl.carousel.css" type="text/css"
	media="all">
<link rel="stylesheet"
	href="${ctx.path}/resources/face/css/owl.theme.css" type="text/css"
	media="all">
<link rel="stylesheet" href="${ctx.path}/resources/face/css/animate.css"
	type="text/css" media="all">
<link rel="stylesheet"
	href="${ctx.path}/resources/face/css/jquery.mcustomscrollbar.css"
	type="text/css" media="all">
<link rel="stylesheet"
	href="${ctx.path}/resources/face/css/owlthemeconfigurator.css"
	type="text/css" media="all">
<link rel="stylesheet"
	href="${ctx.path}/resources/face/css/nprogress.css" type="text/css"
	media="all">
<link rel="stylesheet"
	href="${ctx.path}/resources/face/css/owlblogstyle.css" type="text/css"
	media="all">
<link rel="stylesheet" href="${ctx.path}/resources/face/css/front_1.css"
	type="text/css" media="all">
<link rel="stylesheet" href="${ctx.path}/resources/face/css/front_2.css"
	type="text/css" media="all">
<link rel="stylesheet" href="${ctx.path}/resources/face/css/module.css"
	type="text/css" media="all">
<link rel="stylesheet"
	href="${ctx.path}/resources/face/css/jquery-ui.min.css" type="text/css"
	media="all">
<link rel="stylesheet"
	href="${ctx.path}/resources/face/css/jquery.ui.theme.min.css"
	type="text/css" media="all">
<link rel="stylesheet" href="${ctx.path}/resources/face/css/custom.css"
	type="text/css" media="all">
<link rel="stylesheet"
	href="${ctx.path}/resources/face/css/config_1.css" type="text/css"
	media="all">
<link rel="stylesheet" href="${ctx.path}/resources/face/css/img.css"
	type="text/css" media="all">





<script type="text/javascript">
	var prestashop = {
		"cart" : {
			"products" : [],
			"totals" : {
				"total" : {
					"type" : "total",
					"label" : "Total",
					"amount" : 0,
					"value" : "\u00a30.00"
				}
			},
			"subtotals" : {
				"products" : {
					"type" : "products",
					"label" : "Subtotal",
					"amount" : 0,
					"value" : "\u00a30.00"
				},
				"discounts" : null,
				"shipping" : {
					"type" : "shipping",
					"label" : "Shipping",
					"amount" : 0,
					"value" : "Free"
				},
				"tax" : null
			},
			"products_count" : 0,
			"summary_string" : "0 items",
			"labels" : {
				"tax_short" : "(tax incl.)",
				"tax_long" : "(tax included)"
			},
			"id_address_delivery" : 0,
			"id_address_invoice" : 0,
			"is_virtual" : false,
			"vouchers" : {
				"allowed" : 1,
				"added" : []
			},
			"discounts" : [],
			"minimalPurchase" : 0,
			"minimalPurchaseRequired" : ""
		},
		"currency" : {
			"name" : "British Pound Sterling",
			"iso_code" : "GBP",
			"iso_code_num" : "826",
			"sign" : "\u00a3"
		},
		"customer" : {
			"lastname" : null,
			"firstname" : null,
			"email" : null,
			"last_passwd_gen" : null,
			"birthday" : null,
			"newsletter" : null,
			"newsletter_date_add" : null,
			"ip_registration_newsletter" : null,
			"optin" : null,
			"website" : null,
			"company" : null,
			"siret" : null,
			"ape" : null,
			"outstanding_allow_amount" : 0,
			"max_payment_days" : 0,
			"note" : null,
			"is_guest" : 0,
			"id_shop" : null,
			"id_shop_group" : null,
			"id_default_group" : 1,
			"date_add" : null,
			"date_upd" : null,
			"reset_password_token" : null,
			"reset_password_validity" : null,
			"id" : null,
			"is_logged" : false,
			"gender" : {
				"type" : null,
				"name" : null,
				"id" : null
			},
			"risk" : {
				"name" : null,
				"color" : null,
				"percent" : null,
				"id" : null
			},
			"addresses" : []
		},
		"language" : {
			"name" : "English (English)",
			"iso_code" : "en",
			"locale" : "en-US",
			"language_code" : "en-us",
			"is_rtl" : "0",
			"date_format_lite" : "m\/d\/Y",
			"date_format_full" : "m\/d\/Y H:i:s",
			"id" : 1
		},
		"page" : {
			"title" : "",
			"canonical" : null,
			"meta" : {
				"title" : "Oriental Treasure",
				"description" : "Shop powered by PrestaShop",
				"keywords" : "",
				"robots" : "index"
			},
			"page_name" : "index",
			"body_classes" : {
				"lang-en" : true,
				"lang-rtl" : false,
				"country-GB" : true,
				"currency-GBP" : true,
				"layout-full-width" : true,
				"page-index" : true,
				"tax-display-enabled" : true
			},
			"admin_notifications" : []
		},
		"shop" : {
			"name" : "Oriental Treasure",
			"email" : "info@orientaltreasure.co.uk",
			"registration_number" : "",
			"long" : false,
			"lat" : false,
			"logo" : "\/img\/oriental-treasure-logo-1487932951.jpg",
			"stores_icon" : "\/img\/logo_stores.png",
			"favicon" : "\/img\/favicon.ico",
			"favicon_update_time" : "1491811578",
			"address" : {
				"formatted" : "Oriental Treasure<br>United Kingdom",
				"address1" : "",
				"address2" : "",
				"postcode" : "",
				"city" : "",
				"state" : null,
				"country" : "United Kingdom"
			},
			"phone" : "",
			"fax" : ""
		},
		"urls" : {

		},
		"configuration" : {
			"display_taxes_label" : true,
			"low_quantity_threshold" : 3,
			"is_b2b" : false,
			"is_catalog" : false,
			"show_prices" : true,
			"opt_in" : {
				"partner" : false
			},
			"quantity_discount" : {
				"type" : "discount",
				"label" : "Discount"
			},
			"voucher_enabled" : 1,
			"return_enabled" : 0,
			"number_of_days_for_return" : 14
		},
		"field_required" : [],
		"breadcrumb" : {
			"links" : [ {
				"title" : "Home",
				"url" : "http:\/\/www.orientaltreasure.co.uk\/"
			} ],
			"count" : 1
		},
		"link" : {
			"protocol_link" : "http:\/\/",
			"protocol_content" : "http:\/\/"
		},
		"time" : 1495159101,
		"static_token" : "5d5202793f33721102ef4a6e3fc6c06a",
		"token" : "4649a99bfde8b52823c17ac1ba8d85d9"
	};

	//滚动图片

	$(function() {
		var sWidth = $("#focus").width(); //获取焦点图的宽度（显示面积）
		var len = $("#focus ul li").length; //获取焦点图个数
		var index = 0;
		var picTimer;

		//以下代码添加数字按钮和按钮后的半透明条，还有上一页、下一页两个按钮
		var btn = "<div class='btnBg'></div><div class='btn'>";
		for (var i = 0; i < len; i++) {
			btn += "<span></span>";
		}
		btn += "</div><div class='preNext pre'></div><div class='preNext next'></div>";
		$("#focus").append(btn);
		$("#focus .btnBg").css("opacity", 0.5);

		//为小按钮添加鼠标滑入事件，以显示相应的内容
		$("#focus .btn span").css("opacity", 0.4).mouseover(function() {
			index = $("#focus .btn span").index(this);
			showPics(index);
		}).eq(0).trigger("mouseover");

		//上一页、下一页按钮透明度处理
		$("#focus .preNext").css("opacity", 0.2).hover(function() {
			$(this).stop(true, false).animate({
				"opacity" : "0.5"
			}, 300);
		}, function() {
			$(this).stop(true, false).animate({
				"opacity" : "0.2"
			}, 300);
		});

		//上一页按钮
		$("#focus .pre").click(function() {
			index -= 1;
			if (index == -1) {
				index = len - 1;
			}
			showPics(index);
		});

		//下一页按钮
		$("#focus .next").click(function() {
			index += 1;
			if (index == len) {
				index = 0;
			}
			showPics(index);
		});

		//本例为左右滚动，即所有li元素都是在同一排向左浮动，所以这里需要计算出外围ul元素的宽度
		$("#focus ul").css("width", sWidth * (len));

		//鼠标滑上焦点图时停止自动播放，滑出时开始自动播放
		$("#focus").hover(function() {
			clearInterval(picTimer);
		}, function() {
			picTimer = setInterval(function() {
				showPics(index);
				index++;
				if (index == len) {
					index = 0;
				}
			}, 4000); //此4000代表自动播放的间隔，单位：毫秒
		}).trigger("mouseleave");

		//显示图片函数，根据接收的index值显示相应的内容
		function showPics(index) { //普通切换
			var nowLeft = -index * sWidth; //根据index值计算ul元素的left值
			$("#focus ul").stop(true, false).animate({
				"left" : nowLeft
			}, 300); //通过animate()调整ul元素滚动到计算出的position
			//$("#focus .btn span").removeClass("on").eq(index).addClass("on"); //为当前的按钮切换到选中的效果
			$("#focus .btn span").stop(true, false).animate({
				"opacity" : "0.4"
			}, 300).eq(index).stop(true, false).animate({
				"opacity" : "1"
			}, 300); //为当前的按钮切换到选中的效果
		}
	});
</script>






</head>

<body id="index"
	class="lang-en country-gb currency-gbp layout-full-width page-index tax-display-enabled">

	<!-- Google Tag Manager (noscript) -->
	<noscript>
		<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KT8BBNC"
			height="0" width="0" style="display:none;visibility:hidden"></iframe>
	</noscript>
	<!-- End Google Tag Manager (noscript) -->



	<main> <header id="header"> <nav
		class="header-nav mobile-sticky clearfix">
	<div class="menu-ipad">
		<!-- begin modules/owlverticalmegamenu/views/templates/hook/owlverticalmegamenu_ipad.tpl -->

		<div class="owl-menu-mobile">
			<div class="menu-icon hidden-lg-up hidden-sm-down">
				<i id="menu-icon-close" class="material-icons">&#xE5CD;</i>
			</div>
			<div class="menu-mobile-content">
				<div class="menu-mobile-inner">

					<div class="hidden-lg-up hidden-sm-down">
						<div class="header-logo">
							<div class="category-title">
								<span>Categories</span>
							</div>
						</div>
					</div>
					<ul class="top-menu menu-content ul-menu-mobile">
						<!-- 头部分类 -->
					</ul>
				</div>
			</div>
		</div>

		<!-- end modules/owlverticalmegamenu/views/templates/hook/owlverticalmegamenu_ipad.tpl -->
	</div>
	<div class="hidden-sm-down">
		<div class="nav2">
			<div class="container">
				<div id="_desktop_contact_link">
					<div id="contact-link">
						<a id="contact"
							href="javascript:">Contact
							us</a>
					</div>
				</div>
				<div id="_desktop_user_info">
					<div class="user-info">
						<a href="javascript:" id="sign"
							title="Log in to your customer account" rel="nofollow"> <i
							class="material-icons hidden-md-up">&#xE7FF;</i> <span
							class="hidden-sm-down">Sign in</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="hidden-md-up text-xs-center mobile">
		<div class="pull-xs-left" id="menu-icon">
			<i class="material-icons">&#xE5D2;</i>
		</div>
		<div class="pull-xs-right" id="_mobile_cart"></div>
		<div class="pull-xs-right" id="_mobile_user_info"></div>
		<div class="top-logo" id="_mobile_logo"></div>
		<div class="clearfix"></div>
	</div>
	</nav>



	<div class="header-top">
		<div class="container">
			<div class="row">
				<div id="_desktop_logo" class="header-logo hidden-sm-down col-md-3">
					<a href="http://www.orientaltreasure.co.uk/"> <img
						class="logo img-responsive"
						src="${ctx.path}/resources/face/picture/oriental-treasure-logo-1487932951.jpg"
						alt="Oriental Treasure">
					</a>
				</div>
				<div class="position-static">

					<!-- begin module:ps_searchbar/ps_searchbar.tpl -->
					<!-- begin /var/www/vhosts/orientaltreasure.co.uk/httpdocs/themes/dbemart/modules/ps_searchbar/ps_searchbar.tpl -->
					<!-- Block search module TOP -->
					<div id="search_widget"
						class="col-sm-12 col-md-9 col-xl-4 search-widget"
						data-search-controller-url="//www.orientaltreasure.co.uk/search">
						<form method="get" action="//www.orientaltreasure.co.uk/search">
							<input type="hidden" name="controller" value="search"> <input
								type="text" name="s" value="" placeholder="Search our catalog">
							<button type="submit">
								<i class="material-icons search">&#xE8B6;</i>
							</button>
						</form>
					</div>
					<div class="block-top-html hidden-md-down col-md-12 col-xl-5">
						<div class="g-call-us">
							<i class="material-icons"></i>
							<div class="in-call-us">
								<div class="h3 text-1">
									<strong>Custommer Support</strong>
								</div>
								<p class="text-2">
									<a href="tel:08455 213023" style="color: #ff0000;">08455
										213023</a>
								</p>
							</div>
						</div>
					</div>
					<!-- end modules/owlcustomhtml/views/templates/hook/owlcustomhtml_top.tpl -->

				</div>
			</div>
			<div id="mobile_top_menu_wrapper" class="row hidden-md-up">
				<div class="js-top-menu mobile" id="_mobile_menu_ver"></div>
				<div class="js-top-menu-bottom">
					<div id="_mobile_currency_selector"></div>
					<div id="_mobile_language_selector"></div>
					<div id="_mobile_contact_link"></div>
					<div id="blog_link">
						<a
							href="http://www.orientaltreasure.co.uk/module/owlblog/categoryPost"
							title="Our blog"> Our blog </a>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="header-menu">
		<div class="container">
			<div class="row">

				<!-- begin modules/owlmegamenu/views/templates/hook/owlmegamenu.tpl -->

				<div id="top_menu_owl"
					class="owl-menu-horizontal hidden-sm-down col-md-12">
					<div class="icon_menu pull-xs-left hidden-lg-up">
						<i class="material-icons">&#xE5D2;</i>
					</div>
					<ul id="top-menu" class="top-menu menu-content">
						<li class="level-1 item-home"><a
							href="http://localhost:8080/project/resources/face/new/default.jsp">
								<span>Home</span>
						</a></li>




					</ul>
				</div>


				<div class="nav-fullw-block hidden-md-down col-md-12 col-lg-4">
				</div>

			</div>
		</div>
	</div>
	<div class="top-column menu-home-sticky" id="mainPanel">
		<div class="container">
			<div class="row">
			<!-- ********************************左边分类********************** -->

				<div id="_desktop_menu_ver" class="hidden-md-down menu-open">
					<div id="owl-menu-ver-left" class="owl-menu-ver-left">
						<div class="category-title">
							<span>Categories</span>
						</div>
						<div id="js-category-left" class="category-left">
							<ul class="top-menu menu-content">
								<!-- 左边分类列表 -->
							</ul>
						</div>
					</div>
				</div>

			<!-- ********************************图片轮转********************** -->

				<!-- Module HomeSlider -->
				<div id="slider-wrapper" class="slider-wrapper">
					<div class="imgwrapper">

						<div id="focus">
							<ul>
								<li><a href="#" target="_blank"><img
										src="${ctx.path}/resources/face/img/01.jpg" alt="QQ商城焦点图效果下载" /></a></li>
								<li><a href="#" target="_blank"><img
										src="${ctx.path}/resources/face/img/02.jpg" alt="QQ商城焦点图效果教程" /></a></li>
								<li><a href="#" target="_blank"><img
										src="${ctx.path}/resources/face/img/03.jpg"
										alt="jquery商城焦点图效果" /></a></li>
								<li><a href="#" target="_blank"><img
										src="${ctx.path}/resources/face/img/04.jpg"
										alt="jquery商城焦点图代码" /></a></li>
								<li><a href="#" target="_blank"><img
										src="${ctx.path}/resources/face/img/05.jpg"
										alt="jquery商城焦点图源码" /></a></li>
							</ul>
						</div>
						<!--focus end-->

					</div>
					<!-- wrapper end -->


				</div>
				
				<!-- ********************************右边图片展示********************** -->
				
				<div class="owl-topcolum-block">
					<div class="owl-banner-center">
						<ul>
							<li class="item">
								<div class="out-banner">
									<a href="#"> <img
										src="${ctx.path}/resources/face/picture/ot-secondary-banner-thaidish.jpg"
										width="410" height="293" />
									</a>
									<div class="mask">
										<h3>Deal of the Week</h3>
										<h4>save up to 40% off</h4>
										<a class="view-colletion" href="#">view Deals</a>
									</div>
								</div>
							</li>
							<%-- 									<li class="item">
										<div class="out-banner">
											<a href="#"> <img
												src="${ctx.path}/resources/face/picture/ot-secondary-banner-chinesedish.jpg"
												width="410" height="293" />
											</a>
											<div class="mask">
												<h3></h3>
												<h3>Sale up to 75% off</h3>
												<a class="view-colletion" href="#">view products</a>
											</div>
										</div>
									</li> --%>
						</ul>
					</div>
				</div>

				<!-- ********************************登录界面********************** -->

				<div id="signPanel" style="display:none;">
				<div class="container">
					<div id="content-wrapper">
						<section id="main"> <header class="page-header">
						<h1>Log in to your account</h1>
						</header> <section id="content" class="page-content card card-block"
							style="    padding-right: 300;padding-left: 300;"> <section
							class="login-form">
						<form id="login-form"
							action="http://www.orientaltreasure.co.uk/login?back=my-account"
							method="post">
							<section> <input type="hidden" name="back"
								value="my-account">
							<div class="form-group row ">
								<label class="col-md-3 form-control-label required">
									Email </label>
								<div class="col-md-6">
									<input class="form-control" name="email" type="email" value=""
										style="    height: 36px;" required="">
								</div>
								<div class="col-md-3 form-control-comment"></div>
							</div>
							<div class="form-group row ">
								<label class="col-md-3 form-control-label required">
									Password </label>
								<div class="col-md-6">
									<div class="input-group js-parent-focus">
										<input style="    height: 36px;"
											class="form-control js-child-focus js-visible-password"
											name="password" type="password" value="" pattern=".{5,}"
											required=""> <span class="input-group-btn">
											<button class="btn" type="button" data-action="show-password"
												data-text-show="Show" data-text-hide="Hide">Show</button>
										</span>
									</div>
								</div>
								<div class="col-md-3 form-control-comment"></div>
							</div>
							<div class="forgot-password">
								<a href="http://www.orientaltreasure.co.uk/password-recovery"
									rel="nofollow"> Forgot your password? </a>
							</div>
							</section>
							<footer class="form-footer text-xs-center clearfix"> <input
								type="hidden" name="submitLogin" value="1">
							<button class="btn btn-primary" data-link-action="sign-in"
								type="submit">Sign in</button>
							</footer>
						</form>
						</section>
						<hr>
						<div class="no-account">
							<a
								href="http://www.orientaltreasure.co.uk/login?create_account=1"
								data-link-action="display-register-form"> No account? Create
								one here </a>
						</div>
						</section> <footer class="page-footer"> </footer> </section>
					</div>
				</div>
				</div>

				<!-- **************************************联系我们界面************************** -->


				<div id="contactus" style="display:none;padding-top:30px;">
				<div class="container">
					<div class="row">

						<div id="left-column" class="col-xs-12 col-sm-3">

							<div class="contact-rich">
								<h4>Store information</h4>
								<div class="block">
									<div class="icon">
										<i class="material-icons"></i>
									</div>
									<div class="data">
										Oriental Treasure<br>United Kingdom
									</div>
								</div>
								<hr>
								<div class="block">
									<div class="icon">
										<i class="material-icons"></i>
									</div>
									<div class="data email">
										Email us:<br>
									</div>
									<a href="mailto:info@orientaltreasure.co.uk">info@orientaltreasure.co.uk</a>
								</div>
							</div>
						</div>
						<div id="content-wrapper"
							class="left-column col-xs-12 col-sm-8 col-md-9">
							<section id="main"> <section id="content"
								class="page-content card card-block"> <section
								class="contact-form">
							<form action="http://www.orientaltreasure.co.uk/contact-us"
								method="post" enctype="multipart/form-data">
								<section class="form-fields">
								<div class="form-group row">
									<div class="col-md-9 col-md-offset-3">
										<h3>Contact us</h3>
									</div>
								</div>
								<div class="form-group row">
									<label class="col-md-3 form-control-label">Subject</label>
									<div class="col-md-6">
										<select name="id_contact"
											class="form-control form-control-select">
											<option value="2">Customer service</option>
											<option value="1">Webmaster</option>
										</select>
									</div>
								</div>
								<div class="form-group row">
									<label class="col-md-3 form-control-label">Email
										address</label>
									<div class="col-md-6">
										<input class="form-control" name="from" type="email" value=""
											placeholder="your@email.com">
									</div>
								</div>
								<div class="form-group row">
									<label class="col-md-3 form-control-label">Message</label>
									<div class="col-md-9">
										<textarea class="form-control" name="message"
											placeholder="How can we help?" rows="3"></textarea>
									</div>
								</div>
								</section>
								<footer class="form-footer text-xs-right"> <input
									class="btn btn-primary" type="submit" name="submitMessage"
									value="Send"> </footer>
							</form>
							</section> </section> <footer class="page-footer"> </footer> </section>
						</div>
					</div>
				</div>
				</div>
				
				
				
				
				
				
				
				
			</div>
		</div>
	</div>
	</header> <aside id="notifications">
	<div class="container"></div>
	</aside> <section id="wrapper">


	<div class="breadcrumb-container">
		<nav data-depth="1" class="breadcrumb hidden-sm-down">
		<div class="container">
			<ol itemscope itemtype="http://schema.org/BreadcrumbList">
				<li itemprop="itemListElement" itemscope
					itemtype="http://schema.org/ListItem"><a itemprop="item"
					href="http://www.orientaltreasure.co.uk/"> <span
						itemprop="name">Home</span>
				</a>
					<meta itemprop="position" content="1"></li>
			</ol>
		</div>
		</nav>
	</div>

	<div class="container">
		<div class="top-home">
		</div>
		<div id="content-wrapper">
			<section id="main"> <section id="content" class="page-home">
			<div class="row">
				<div class="home-left"></div>
				<div class="home-content">

					<!-- Module Product From Category -->
					<div class="prod_cat_home">
						<div class="block-content" data-slider="1">

							<!-- begin ./owlproductcategory_special.tpl -->

							<!-- 列表1-->

							<!-- <div class="block-content clearfix">
	<div id="owl-prod-cat-219">
		<div class="title-topsale">
			<h3>Fresh Items</h3>
			<div class="view-more-cat">
				<a href="http://www.orientaltreasure.co.uk/219-fresh-items" title="Fresh Items">
					view more
				
				</a>
			</div>
		</div>
		<div class="block-content-info row">
			<div class="left-block col-lg-4">
								<div class="cat-banner" style="background-color:">
										
										<a href="http://www.orientaltreasure.co.uk/219-fresh-items" title="Fresh Items"><img src="${ctx.path}/resources/face/picture/5ab8bf69c44dd77c9bdec601a16c125a33942bf3_noodles_banner.jpg" alt=""/></a>
										<div class="out-abso">
											</div>
				</div>
							</div>
			<div class="right-block col-lg-8">
				<div class="products">
												
															<div class="product-item">
														
								
begin catalog/_partials/miniatures/product_home.tpl
<article class="product-miniature js-product-miniature" data-id-product="2720" data-id-product-attribute="0" itemscope itemtype="http://schema.org/Product">
  <div class="thumbnail-container">
  <div class="product-container-img">
		
		  <a href="http://www.orientaltreasure.co.uk/fresh-items/2720-fresh-konnyako-beancurd-200g.html" class="thumbnail product-thumbnail product_img_link">
			<img
			  src = "${ctx.path}/resources/face/picture/fresh-konnyako-beancurd-200g.jpg"
			  alt = ""
			  data-full-size-image-url = "http://www.orientaltreasure.co.uk/342-large_default/fresh-konnyako-beancurd-200g.jpg"
			>
		  </a>
		
		<div class="owl-label">
						
		</div>
		<div class="prod-hover">
			<a href="#" class="quick-view" data-link-action="quickview">
				<i class="material-icons search">&#xE8F4;</i> Quick view
			</a>
		</div>

	</div>
    <div class="product-description">
      
        <h1 class="h3 product-title" itemprop="name"><a href="http://www.orientaltreasure.co.uk/fresh-items/2720-fresh-konnyako-beancurd-200g.html">Fresh Konnyako Beancurd 200g</a></h1>
      
	  
		<div class="highlighted-informations no-variants hidden-sm-down">
		  
					  
		</div>
		
      
                  <div class="product-price-and-shipping">
            
            

            <span itemprop="price" class="price">£1.99</span>

            

            
          </div>
              
		
    </div>
    
      <ul class="product-flags" style="display:none">
              </ul>
    
  </div>
</article>

end catalog/_partials/miniatures/product_home.tpl

							
														
							
														
								
begin catalog/_partials/miniatures/product_home.tpl
<article class="product-miniature js-product-miniature" data-id-product="2724" data-id-product-attribute="0" itemscope itemtype="http://schema.org/Product">
  <div class="thumbnail-container">
  <div class="product-container-img">
		
		  <a href="http://www.orientaltreasure.co.uk/fresh-items/2724-wing-wing-chinese-style-pork-sausage-454g.html" class="thumbnail product-thumbnail product_img_link">
			<img
			  src = "${ctx.path}/resources/face/picture/wing-wing-chinese-style-pork-sausage-454g.jpg"
			  alt = ""
			  data-full-size-image-url = "http://www.orientaltreasure.co.uk/344-large_default/wing-wing-chinese-style-pork-sausage-454g.jpg"
			>
		  </a>
		
		<div class="owl-label">
						
		</div>
		<div class="prod-hover">
			<a href="#" class="quick-view" data-link-action="quickview">
				<i class="material-icons search">&#xE8F4;</i> Quick view
			</a>
		</div>

	</div>
    <div class="product-description">
      
        <h1 class="h3 product-title" itemprop="name"><a href="http://www.orientaltreasure.co.uk/fresh-items/2724-wing-wing-chinese-style-pork-sausage-454g.html">Wing Wing Chinese Style...</a></h1>
      
	  
		<div class="highlighted-informations no-variants hidden-sm-down">
		  
					  
		</div>
		
      
                  <div class="product-price-and-shipping">
            
            

            <span itemprop="price" class="price">£8.99</span>

            

            
          </div>
              
		
    </div>
    
      <ul class="product-flags" style="display:none">
              </ul>
    
  </div>
</article>

end catalog/_partials/miniatures/product_home.tpl

							
															</div>
														
							
															<div class="product-item">
														
								
begin catalog/_partials/miniatures/product_home.tpl
<article class="product-miniature js-product-miniature" data-id-product="2729" data-id-product-attribute="0" itemscope itemtype="http://schema.org/Product">
  <div class="thumbnail-container">
  <div class="product-container-img">
		
		  <a href="http://www.orientaltreasure.co.uk/fresh-items/2729-fresh-chongga-cut-cabbage-kimchi-mat-kimchi-200g.html" class="thumbnail product-thumbnail product_img_link">
			<img
			  src = "${ctx.path}/resources/face/picture/fresh-chongga-cut-cabbage-kimchi-mat-kimchi-200g.jpg"
			  alt = ""
			  data-full-size-image-url = "http://www.orientaltreasure.co.uk/348-large_default/fresh-chongga-cut-cabbage-kimchi-mat-kimchi-200g.jpg"
			>
		  </a>
		
		<div class="owl-label">
						
		</div>
		<div class="prod-hover">
			<a href="#" class="quick-view" data-link-action="quickview">
				<i class="material-icons search">&#xE8F4;</i> Quick view
			</a>
		</div>

	</div>
    <div class="product-description">
      
        <h1 class="h3 product-title" itemprop="name"><a href="http://www.orientaltreasure.co.uk/fresh-items/2729-fresh-chongga-cut-cabbage-kimchi-mat-kimchi-200g.html">Fresh Chongga Cut Cabbage...</a></h1>
      
	  
		<div class="highlighted-informations no-variants hidden-sm-down">
		  
					  
		</div>
		
      
                  <div class="product-price-and-shipping">
            
            

            <span itemprop="price" class="price">£2.09</span>

            

            
          </div>
              
		
    </div>
    
      <ul class="product-flags" style="display:none">
              </ul>
    
  </div>
</article>

end catalog/_partials/miniatures/product_home.tpl

							
														
							
														
								
begin catalog/_partials/miniatures/product_home.tpl
<article class="product-miniature js-product-miniature" data-id-product="2730" data-id-product-attribute="0" itemscope itemtype="http://schema.org/Product">
  <div class="thumbnail-container">
  <div class="product-container-img">
		
		  <a href="http://www.orientaltreasure.co.uk/fresh-items/2730-fresh-chongga-cut-radish-kaktugi-500g.html" class="thumbnail product-thumbnail product_img_link">
			<img
			  src = "${ctx.path}/resources/face/picture/fresh-chongga-cut-radish-kaktugi-500g.jpg"
			  alt = ""
			  data-full-size-image-url = "http://www.orientaltreasure.co.uk/349-large_default/fresh-chongga-cut-radish-kaktugi-500g.jpg"
			>
		  </a>
		
		<div class="owl-label">
						
		</div>
		<div class="prod-hover">
			<a href="#" class="quick-view" data-link-action="quickview">
				<i class="material-icons search">&#xE8F4;</i> Quick view
			</a>
		</div>

	</div>
    <div class="product-description">
      
        <h1 class="h3 product-title" itemprop="name"><a href="http://www.orientaltreasure.co.uk/fresh-items/2730-fresh-chongga-cut-radish-kaktugi-500g.html">Fresh Chongga Cut Radish...</a></h1>
      
	  
		<div class="highlighted-informations no-variants hidden-sm-down">
		  
					  
		</div>
		
      
                  <div class="product-price-and-shipping">
            
            

            <span itemprop="price" class="price">£4.49</span>

            

            
          </div>
              
		
    </div>
    
      <ul class="product-flags" style="display:none">
              </ul>
    
  </div>
</article>

end catalog/_partials/miniatures/product_home.tpl

							
															</div>
														
							
															<div class="product-item">
														
								
begin catalog/_partials/miniatures/product_home.tpl
<article class="product-miniature js-product-miniature" data-id-product="2732" data-id-product-attribute="0" itemscope itemtype="http://schema.org/Product">
  <div class="thumbnail-container">
  <div class="product-container-img">
		
		  <a href="http://www.orientaltreasure.co.uk/fresh-items/2732-fresh-chongga-whole-cabbage-kimchi-poggi-kimchi-500g.html" class="thumbnail product-thumbnail product_img_link">
			<img
			  src = "${ctx.path}/resources/face/picture/fresh-chongga-whole-cabbage-kimchi-poggi-kimchi-500g.jpg"
			  alt = ""
			  data-full-size-image-url = "http://www.orientaltreasure.co.uk/350-large_default/fresh-chongga-whole-cabbage-kimchi-poggi-kimchi-500g.jpg"
			>
		  </a>
		
		<div class="owl-label">
						
		</div>
		<div class="prod-hover">
			<a href="#" class="quick-view" data-link-action="quickview">
				<i class="material-icons search">&#xE8F4;</i> Quick view
			</a>
		</div>

	</div>
    <div class="product-description">
      
        <h1 class="h3 product-title" itemprop="name"><a href="http://www.orientaltreasure.co.uk/fresh-items/2732-fresh-chongga-whole-cabbage-kimchi-poggi-kimchi-500g.html">Fresh Chongga Whole Cabbage...</a></h1>
      
	  
		<div class="highlighted-informations no-variants hidden-sm-down">
		  
					  
		</div>
		
      
                  <div class="product-price-and-shipping">
            
            

            <span itemprop="price" class="price">£4.35</span>

            

            
          </div>
              
		
    </div>
    
      <ul class="product-flags" style="display:none">
              </ul>
    
  </div>
</article>

end catalog/_partials/miniatures/product_home.tpl

							
														
							
														
								
begin catalog/_partials/miniatures/product_home.tpl
<article class="product-miniature js-product-miniature" data-id-product="2750" data-id-product-attribute="0" itemscope itemtype="http://schema.org/Product">
  <div class="thumbnail-container">
  <div class="product-container-img">
		
		  <a href="http://www.orientaltreasure.co.uk/fresh-items/2750-pulmuone-all-natural-tofu-soft-510g.html" class="thumbnail product-thumbnail product_img_link">
			<img
			  src = "${ctx.path}/resources/face/picture/pulmuone-all-natural-tofu-soft-510g.jpg"
			  alt = ""
			  data-full-size-image-url = "http://www.orientaltreasure.co.uk/352-large_default/pulmuone-all-natural-tofu-soft-510g.jpg"
			>
		  </a>
		
		<div class="owl-label">
						
		</div>
		<div class="prod-hover">
			<a href="#" class="quick-view" data-link-action="quickview">
				<i class="material-icons search">&#xE8F4;</i> Quick view
			</a>
		</div>

	</div>
    <div class="product-description">
      
        <h1 class="h3 product-title" itemprop="name"><a href="http://www.orientaltreasure.co.uk/fresh-items/2750-pulmuone-all-natural-tofu-soft-510g.html">Pulmuone All Natural Tofu...</a></h1>
      
	  
		<div class="highlighted-informations no-variants hidden-sm-down">
		  
					  
		</div>
		
      
                  <div class="product-price-and-shipping">
            
            

            <span itemprop="price" class="price">£2.39</span>

            

            
          </div>
              
		
    </div>
    
      <ul class="product-flags" style="display:none">
              </ul>
    
  </div>
</article>

end catalog/_partials/miniatures/product_home.tpl

							
															</div>
														
							
															<div class="product-item">
														
								
begin catalog/_partials/miniatures/product_home.tpl
<article class="product-miniature js-product-miniature" data-id-product="2751" data-id-product-attribute="0" itemscope itemtype="http://schema.org/Product">
  <div class="thumbnail-container">
  <div class="product-container-img">
		
		  <a href="http://www.orientaltreasure.co.uk/fresh-items/2751-pulmuone-all-natural-tofu-firm-510g.html" class="thumbnail product-thumbnail product_img_link">
			<img
			  src = "${ctx.path}/resources/face/picture/pulmuone-all-natural-tofu-firm-510g.jpg"
			  alt = ""
			  data-full-size-image-url = "http://www.orientaltreasure.co.uk/353-large_default/pulmuone-all-natural-tofu-firm-510g.jpg"
			>
		  </a>
		
		<div class="owl-label">
						
		</div>
		<div class="prod-hover">
			<a href="#" class="quick-view" data-link-action="quickview">
				<i class="material-icons search">&#xE8F4;</i> Quick view
			</a>
		</div>

	</div>
    <div class="product-description">
      
        <h1 class="h3 product-title" itemprop="name"><a href="http://www.orientaltreasure.co.uk/fresh-items/2751-pulmuone-all-natural-tofu-firm-510g.html">Pulmuone All Natural Tofu...</a></h1>
      
	  
		<div class="highlighted-informations no-variants hidden-sm-down">
		  
					  
		</div>
		
      
                  <div class="product-price-and-shipping">
            
            

            <span itemprop="price" class="price">£2.39</span>

            

            
          </div>
              
		
    </div>
    
      <ul class="product-flags" style="display:none">
              </ul>
    
  </div>
</article>

end catalog/_partials/miniatures/product_home.tpl

							
														
							
														
								
begin catalog/_partials/miniatures/product_home.tpl
<article class="product-miniature js-product-miniature" data-id-product="2753" data-id-product-attribute="0" itemscope itemtype="http://schema.org/Product">
  <div class="thumbnail-container">
  <div class="product-container-img">
		
		  <a href="http://www.orientaltreasure.co.uk/fresh-items/2753-fresh-marukome-miso-paste-750g.html" class="thumbnail product-thumbnail product_img_link">
			<img
			  src = "${ctx.path}/resources/face/picture/fresh-marukome-miso-paste-750g.jpg"
			  alt = ""
			  data-full-size-image-url = "http://www.orientaltreasure.co.uk/355-large_default/fresh-marukome-miso-paste-750g.jpg"
			>
		  </a>
		
		<div class="owl-label">
						
		</div>
		<div class="prod-hover">
			<a href="#" class="quick-view" data-link-action="quickview">
				<i class="material-icons search">&#xE8F4;</i> Quick view
			</a>
		</div>

	</div>
    <div class="product-description">
      
        <h1 class="h3 product-title" itemprop="name"><a href="http://www.orientaltreasure.co.uk/fresh-items/2753-fresh-marukome-miso-paste-750g.html">Fresh Marukome Miso Paste 750g</a></h1>
      
	  
		<div class="highlighted-informations no-variants hidden-sm-down">
		  
					  
		</div>
		
      
                  <div class="product-price-and-shipping">
            
            

            <span itemprop="price" class="price">£8.99</span>

            

            
          </div>
              
		
    </div>
    
      <ul class="product-flags" style="display:none">
              </ul>
    
  </div>
</article>

end catalog/_partials/miniatures/product_home.tpl

							
															</div>
														
															</div>
			</div>
		</div>
	</div>
	</div> -->

							<!-- 列表2 -->


							<!-- <div class="block-content clearfix">
	<div id="owl-prod-cat-214">
		<div class="title-topsale">
			<h3>Frozen Products</h3>
			<div class="view-more-cat">
				<a href="http://www.orientaltreasure.co.uk/214-frozen-products" title="Frozen Products">
					view more
				
				</a>
			</div>
		</div>
		<div class="block-content-info row">
			<div class="left-block col-lg-4">
								<div class="cat-banner" style="background-color:">
										
										<a href="http://www.orientaltreasure.co.uk/214-frozen-products" title="Frozen Products"><img src="${ctx.path}/resources/face/picture/9e44fb0e0be44d4fb9891d75450d952e2908b0f6_sauces-&amp;-paste_banner.jpg" alt=""/></a>
										<div class="out-abso">
											</div>
				</div>
							</div>
			<div class="right-block col-lg-8">
				<div class="products">
												
															<div class="product-item">
														
								
begin catalog/_partials/miniatures/product_home.tpl
<article class="product-miniature js-product-miniature" data-id-product="1312" data-id-product-attribute="0" itemscope itemtype="http://schema.org/Product">
  <div class="thumbnail-container">
  <div class="product-container-img">
		
		  <a href="http://www.orientaltreasure.co.uk/frozen-products/1312-bdmp-frozen-lime-leaves-100g.html" class="thumbnail product-thumbnail product_img_link">
			<img
			  src = "${ctx.path}/resources/face/picture/bdmp-frozen-lime-leaves-100g.jpg"
			  alt = ""
			  data-full-size-image-url = "http://www.orientaltreasure.co.uk/197-large_default/bdmp-frozen-lime-leaves-100g.jpg"
			>
		  </a>
		
		<div class="owl-label">
						
		</div>
		<div class="prod-hover">
			<a href="#" class="quick-view" data-link-action="quickview">
				<i class="material-icons search">&#xE8F4;</i> Quick view
			</a>
		</div>

	</div>
    <div class="product-description">
      
        <h1 class="h3 product-title" itemprop="name"><a href="http://www.orientaltreasure.co.uk/frozen-products/1312-bdmp-frozen-lime-leaves-100g.html">BDMP Frozen Lime Leaves 100g</a></h1>
      
	  
		<div class="highlighted-informations no-variants hidden-sm-down">
		  
					  
		</div>
		
      
                  <div class="product-price-and-shipping">
            
            

            <span itemprop="price" class="price">£1.85</span>

            

            
          </div>
              
		
    </div>
    
      <ul class="product-flags" style="display:none">
              </ul>
    
  </div>
</article>

end catalog/_partials/miniatures/product_home.tpl

							
														
							
														
								
begin catalog/_partials/miniatures/product_home.tpl
<article class="product-miniature js-product-miniature" data-id-product="1313" data-id-product-attribute="0" itemscope itemtype="http://schema.org/Product">
  <div class="thumbnail-container">
  <div class="product-container-img">
		
		  <a href="http://www.orientaltreasure.co.uk/frozen-products/1313-welpac-edamame-soybeans-in-pod-454g.html" class="thumbnail product-thumbnail product_img_link">
			<img
			  src = "${ctx.path}/resources/face/picture/welpac-edamame-soybeans-in-pod-454g.jpg"
			  alt = ""
			  data-full-size-image-url = "http://www.orientaltreasure.co.uk/198-large_default/welpac-edamame-soybeans-in-pod-454g.jpg"
			>
		  </a>
		
		<div class="owl-label">
						
		</div>
		<div class="prod-hover">
			<a href="#" class="quick-view" data-link-action="quickview">
				<i class="material-icons search">&#xE8F4;</i> Quick view
			</a>
		</div>

	</div>
    <div class="product-description">
      
        <h1 class="h3 product-title" itemprop="name"><a href="http://www.orientaltreasure.co.uk/frozen-products/1313-welpac-edamame-soybeans-in-pod-454g.html">Wel.Pac Edamame (Soybeans...</a></h1>
      
	  
		<div class="highlighted-informations no-variants hidden-sm-down">
		  
					  
		</div>
		
      
                  <div class="product-price-and-shipping">
            
            

            <span itemprop="price" class="price">£2.20</span>

            

            
          </div>
              
		
    </div>
    
      <ul class="product-flags" style="display:none">
              </ul>
    
  </div>
</article>

end catalog/_partials/miniatures/product_home.tpl

							
															</div>
														
							
															<div class="product-item">
														
								
begin catalog/_partials/miniatures/product_home.tpl
<article class="product-miniature js-product-miniature" data-id-product="4362" data-id-product-attribute="0" itemscope itemtype="http://schema.org/Product">
  <div class="thumbnail-container">
  <div class="product-container-img">
		
		  <a href="http://www.orientaltreasure.co.uk/frozen-products/4362-golden-dragon-chinese-style-char-sui-pork-200g.html" class="thumbnail product-thumbnail product_img_link">
			<img
			  src = "${ctx.path}/resources/face/picture/golden-dragon-chinese-style-char-sui-pork-200g.jpg"
			  alt = ""
			  data-full-size-image-url = "http://www.orientaltreasure.co.uk/904-large_default/golden-dragon-chinese-style-char-sui-pork-200g.jpg"
			>
		  </a>
		
		<div class="owl-label">
						
		</div>
		<div class="prod-hover">
			<a href="#" class="quick-view" data-link-action="quickview">
				<i class="material-icons search">&#xE8F4;</i> Quick view
			</a>
		</div>

	</div>
    <div class="product-description">
      
        <h1 class="h3 product-title" itemprop="name"><a href="http://www.orientaltreasure.co.uk/frozen-products/4362-golden-dragon-chinese-style-char-sui-pork-200g.html">Golden Dragon Chinese Style...</a></h1>
      
	  
		<div class="highlighted-informations no-variants hidden-sm-down">
		  
					  
		</div>
		
      
                  <div class="product-price-and-shipping">
            
            

            <span itemprop="price" class="price">£4.40</span>

            

            
          </div>
              
		
    </div>
    
      <ul class="product-flags" style="display:none">
              </ul>
    
  </div>
</article>

end catalog/_partials/miniatures/product_home.tpl

							
														
							
														
								
begin catalog/_partials/miniatures/product_home.tpl
<article class="product-miniature js-product-miniature" data-id-product="4364" data-id-product-attribute="0" itemscope itemtype="http://schema.org/Product">
  <div class="thumbnail-container">
  <div class="product-container-img">
		
		  <a href="http://www.orientaltreasure.co.uk/frozen-products/4364-golden-dragon-roast-duck-spring-rolls-200g.html" class="thumbnail product-thumbnail product_img_link">
			<img
			  src = "${ctx.path}/resources/face/picture/golden-dragon-roast-duck-spring-rolls-200g.jpg"
			  alt = ""
			  data-full-size-image-url = "http://www.orientaltreasure.co.uk/906-large_default/golden-dragon-roast-duck-spring-rolls-200g.jpg"
			>
		  </a>
		
		<div class="owl-label">
						
		</div>
		<div class="prod-hover">
			<a href="#" class="quick-view" data-link-action="quickview">
				<i class="material-icons search">&#xE8F4;</i> Quick view
			</a>
		</div>

	</div>
    <div class="product-description">
      
        <h1 class="h3 product-title" itemprop="name"><a href="http://www.orientaltreasure.co.uk/frozen-products/4364-golden-dragon-roast-duck-spring-rolls-200g.html">Golden Dragon Roast Duck...</a></h1>
      
	  
		<div class="highlighted-informations no-variants hidden-sm-down">
		  
					  
		</div>
		
      
                  <div class="product-price-and-shipping">
            
            

            <span itemprop="price" class="price">£3.69</span>

            

            
          </div>
              
		
    </div>
    
      <ul class="product-flags" style="display:none">
              </ul>
    
  </div>
</article>

end catalog/_partials/miniatures/product_home.tpl

							
															</div>
														
							
															<div class="product-item">
														
								
begin catalog/_partials/miniatures/product_home.tpl
<article class="product-miniature js-product-miniature" data-id-product="4754" data-id-product-attribute="0" itemscope itemtype="http://schema.org/Product">
  <div class="thumbnail-container">
  <div class="product-container-img">
		
		  <a href="http://www.orientaltreasure.co.uk/frozen-products/4754-happy-belly-oriental-bread-plain-300g.html" class="thumbnail product-thumbnail product_img_link">
			<img
			  src = "${ctx.path}/resources/face/picture/happy-belly-oriental-bread-plain-300g.jpg"
			  alt = ""
			  data-full-size-image-url = "http://www.orientaltreasure.co.uk/1030-large_default/happy-belly-oriental-bread-plain-300g.jpg"
			>
		  </a>
		
		<div class="owl-label">
						
		</div>
		<div class="prod-hover">
			<a href="#" class="quick-view" data-link-action="quickview">
				<i class="material-icons search">&#xE8F4;</i> Quick view
			</a>
		</div>

	</div>
    <div class="product-description">
      
        <h1 class="h3 product-title" itemprop="name"><a href="http://www.orientaltreasure.co.uk/frozen-products/4754-happy-belly-oriental-bread-plain-300g.html">Happy Belly Oriental Bread...</a></h1>
      
	  
		<div class="highlighted-informations no-variants hidden-sm-down">
		  
					  
		</div>
		
      
                  <div class="product-price-and-shipping">
            
            

            <span itemprop="price" class="price">£1.99</span>

            

            
          </div>
              
		
    </div>
    
      <ul class="product-flags" style="display:none">
              </ul>
    
  </div>
</article>

end catalog/_partials/miniatures/product_home.tpl

							
														
							
														
								
begin catalog/_partials/miniatures/product_home.tpl
<article class="product-miniature js-product-miniature" data-id-product="4758" data-id-product-attribute="0" itemscope itemtype="http://schema.org/Product">
  <div class="thumbnail-container">
  <div class="product-container-img">
		
		  <a href="http://www.orientaltreasure.co.uk/frozen-products/4758-oriental-fortune-mantou-plain-360g.html" class="thumbnail product-thumbnail product_img_link">
			<img
			  src = "${ctx.path}/resources/face/picture/oriental-fortune-mantou-plain-360g.jpg"
			  alt = ""
			  data-full-size-image-url = "http://www.orientaltreasure.co.uk/1031-large_default/oriental-fortune-mantou-plain-360g.jpg"
			>
		  </a>
		
		<div class="owl-label">
						
		</div>
		<div class="prod-hover">
			<a href="#" class="quick-view" data-link-action="quickview">
				<i class="material-icons search">&#xE8F4;</i> Quick view
			</a>
		</div>

	</div>
    <div class="product-description">
      
        <h1 class="h3 product-title" itemprop="name"><a href="http://www.orientaltreasure.co.uk/frozen-products/4758-oriental-fortune-mantou-plain-360g.html">Oriental Fortune Mantou...</a></h1>
      
	  
		<div class="highlighted-informations no-variants hidden-sm-down">
		  
					  
		</div>
		
      
                  <div class="product-price-and-shipping">
            
            

            <span itemprop="price" class="price">£2.49</span>

            

            
          </div>
              
		
    </div>
    
      <ul class="product-flags" style="display:none">
              </ul>
    
  </div>
</article>

end catalog/_partials/miniatures/product_home.tpl

							
															</div>
														
							
															<div class="product-item">
														
								
begin catalog/_partials/miniatures/product_home.tpl
<article class="product-miniature js-product-miniature" data-id-product="4760" data-id-product-attribute="0" itemscope itemtype="http://schema.org/Product">
  <div class="thumbnail-container">
  <div class="product-container-img">
		
		  <a href="http://www.orientaltreasure.co.uk/frozen-products/4760-oriental-fortune-silver-thread-buns-pandan-400g.html" class="thumbnail product-thumbnail product_img_link">
			<img
			  src = "${ctx.path}/resources/face/picture/oriental-fortune-silver-thread-buns-pandan-400g.jpg"
			  alt = ""
			  data-full-size-image-url = "http://www.orientaltreasure.co.uk/1033-large_default/oriental-fortune-silver-thread-buns-pandan-400g.jpg"
			>
		  </a>
		
		<div class="owl-label">
						
		</div>
		<div class="prod-hover">
			<a href="#" class="quick-view" data-link-action="quickview">
				<i class="material-icons search">&#xE8F4;</i> Quick view
			</a>
		</div>

	</div>
    <div class="product-description">
      
        <h1 class="h3 product-title" itemprop="name"><a href="http://www.orientaltreasure.co.uk/frozen-products/4760-oriental-fortune-silver-thread-buns-pandan-400g.html">Oriental Fortune Silver...</a></h1>
      
	  
		<div class="highlighted-informations no-variants hidden-sm-down">
		  
					  
		</div>
		
      
                  <div class="product-price-and-shipping">
            
            

            <span itemprop="price" class="price">£2.99</span>

            

            
          </div>
              
		
    </div>
    
      <ul class="product-flags" style="display:none">
              </ul>
    
  </div>
</article>

end catalog/_partials/miniatures/product_home.tpl

							
														
							
														
								
begin catalog/_partials/miniatures/product_home.tpl
<article class="product-miniature js-product-miniature" data-id-product="5396" data-id-product-attribute="0" itemscope itemtype="http://schema.org/Product">
  <div class="thumbnail-container">
  <div class="product-container-img">
		
		  <a href="http://www.orientaltreasure.co.uk/frozen-products/5396-honor-chicken-with-chinese-mushrooms-buns-600g.html" class="thumbnail product-thumbnail product_img_link">
			<img
			  src = "${ctx.path}/resources/face/picture/honor-chicken-with-chinese-mushrooms-buns-600g.jpg"
			  alt = ""
			  data-full-size-image-url = "http://www.orientaltreasure.co.uk/1308-large_default/honor-chicken-with-chinese-mushrooms-buns-600g.jpg"
			>
		  </a>
		
		<div class="owl-label">
						
		</div>
		<div class="prod-hover">
			<a href="#" class="quick-view" data-link-action="quickview">
				<i class="material-icons search">&#xE8F4;</i> Quick view
			</a>
		</div>

	</div>
    <div class="product-description">
      
        <h1 class="h3 product-title" itemprop="name"><a href="http://www.orientaltreasure.co.uk/frozen-products/5396-honor-chicken-with-chinese-mushrooms-buns-600g.html">Honor Chicken with Chinese...</a></h1>
      
	  
		<div class="highlighted-informations no-variants hidden-sm-down">
		  
					  
		</div>
		
      
                  <div class="product-price-and-shipping">
            
            

            <span itemprop="price" class="price">£4.50</span>

            

            
          </div>
              
		
    </div>
    
      <ul class="product-flags" style="display:none">
              </ul>
    
  </div>
</article>

end catalog/_partials/miniatures/product_home.tpl

							
															</div>
														
															</div>
			</div>
		</div>
	</div>
	</div> -->

							<!-- end ./owlproductcategory_special.tpl -->

						</div>

					</div>
					<!-- /Module Product From Category -->
					<!-- end modules/owlproductcategory/views/templates/hook/owlproductcategory_home.tpl -->


				</div>
			</div>
			</section> <footer class="page-footer"> <!-- Footer content --> </footer> </section>


		</div>



	</div>

	</section> <footer id="footer">

	<div class="footer-top">

		<!-- begin module:ps_emailsubscription/views/templates/hook/ps_emailsubscription.tpl -->
		<!-- begin /var/www/vhosts/orientaltreasure.co.uk/httpdocs/themes/dbemart/modules/ps_emailsubscription/views/templates/hook/ps_emailsubscription.tpl -->

		<div class="block_newsletter clearfix">
			<div class="block_content">
				<div class="">
					<div class="left-content">
						<form action="http://www.orientaltreasure.co.uk/#footer"
							method="post">
							<div class="newsletter-input">
								<input class="btn btn-secondary pull-xs-right hidden-xs-down"
									name="submitNewsletter" type="submit" value="Subscribe">
								<input class="btn btn-secondary pull-xs-right hidden-sm-up"
									name="submitNewsletter" type="submit" value="OK">
								<div class="input-wrapper">
									<input name="email" type="text" value=""
										placeholder="Your email address">
								</div>
								<input type="hidden" name="action" value="0">
							</div>
							<div class="clearfix"></div>
						</form>
						<h3>Newsletter Sign Up</h3>
						<p>You may unsubscribe at any moment. For that</p>
					</div>
					<div class="right-content">

						<!-- begin modules/owlcustomhtml/views/templates/hook/owlcustomhtml_displayfooterextra.tpl -->

						<div class="call-us">
							PLEASE CALL US ANYTIME <span><a href="tel:08455 213023"
								style="color: #fff;">08455 213023</a><span></span></span>
						</div>

						<!-- end modules/owlcustomhtml/views/templates/hook/owlcustomhtml_displayfooterextra.tpl -->

					</div>
				</div>
			</div>
		</div>
		<!-- end /var/www/vhosts/orientaltreasure.co.uk/httpdocs/themes/dbemart/modules/ps_emailsubscription/views/templates/hook/ps_emailsubscription.tpl -->
		<!-- end module:ps_emailsubscription/views/templates/hook/ps_emailsubscription.tpl -->

	</div>
	<div class="footer-container">
		<div class="container">
			<div class="row">

				<!-- begin module:ps_contactinfo/ps_contactinfo.tpl -->
				<!-- begin /var/www/vhosts/orientaltreasure.co.uk/httpdocs/themes/dbemart/modules/ps_contactinfo/ps_contactinfo.tpl -->

				<div class="block-contact col-md-6 col-lg-4 links wrapper">
					<div class="hidden-sm-down">
						<h3 class="h3 text-uppercase block-contact-title">Store
							Information</h3>
					</div>
					<div class="hidden-md-up">
						<div class="title" data-target="#contact_footer"
							data-toggle="collapse">
							<a class="h3" href="http://www.orientaltreasure.co.uk/stores">Contact
								Us</a> <span class="pull-xs-right"> <span
								class="navbar-toggler collapse-icons"> <i
									class="material-icons add">&#xE313;</i> <i
									class="material-icons remove">&#xE316;</i>
							</span>
							</span>
						</div>
					</div>
					<div id="contact_footer" class="block_content collapse">
						<div class="contact-add">
							<i class="material-icons">&#xE55F;</i> Oriental Treasure<br />United
							Kingdom
						</div>

					</div>

				</div>
				<!-- end /var/www/vhosts/orientaltreasure.co.uk/httpdocs/themes/dbemart/modules/ps_contactinfo/ps_contactinfo.tpl -->
				<!-- end module:ps_contactinfo/ps_contactinfo.tpl -->

				<!-- begin module:ps_linklist/views/templates/hook/linkblock.tpl -->
				<!-- begin /var/www/vhosts/orientaltreasure.co.uk/httpdocs/themes/dbemart/modules/ps_linklist/views/templates/hook/linkblock.tpl -->
				<div class="col-md-6 col-lg-2 wrapper links">
					<h3 class="h3 hidden-sm-down">Products</h3>
					<div class="title clearfix hidden-md-up"
						data-target="#footer_sub_menu_92814" data-toggle="collapse">
						<span class="h3">Products</span> <span class="pull-xs-right">
							<span class="navbar-toggler collapse-icons"> <i
								class="material-icons add">&#xE313;</i> <i
								class="material-icons remove">&#xE316;</i>
						</span>
						</span>
					</div>
					<ul id="footer_sub_menu_92814" class="collapse">
						<li><a id="link-product-page-prices-drop-1"
							class="cms-page-link"
							href="http://www.orientaltreasure.co.uk/prices-drop"
							title="Our special products"> Prices drop </a></li>
						<li><a id="link-product-page-new-products-1"
							class="cms-page-link"
							href="http://www.orientaltreasure.co.uk/new-products"
							title="Our new products"> New products </a></li>
						<li><a id="link-product-page-best-sales-1"
							class="cms-page-link"
							href="http://www.orientaltreasure.co.uk/best-sales"
							title="Our best sales"> Best sales </a></li>
					</ul>
				</div>
				<div class="col-md-4 ipad-class col-lg-2 wrapper links">
					<h3 class="h3 hidden-sm-down">Our company</h3>
					<div class="title clearfix hidden-md-up"
						data-target="#footer_sub_menu_18671" data-toggle="collapse">
						<span class="h3">Our company</span> <span class="pull-xs-right">
							<span class="navbar-toggler collapse-icons"> <i
								class="material-icons add">&#xE313;</i> <i
								class="material-icons remove">&#xE316;</i>
						</span>
						</span>
					</div>
					<ul id="footer_sub_menu_18671" class="collapse">
						<li><a id="link-cms-page-1-2" class="cms-page-link"
							href="http://www.orientaltreasure.co.uk/content/1-delivery"
							title="Our terms and conditions of delivery"> Delivery </a></li>
						<li><a id="link-cms-page-2-2" class="cms-page-link"
							href="http://www.orientaltreasure.co.uk/content/2-legal-notice"
							title="Legal notice"> Legal Notice </a></li>
						<li><a id="link-cms-page-3-2" class="cms-page-link"
							href="http://www.orientaltreasure.co.uk/content/3-terms-and-conditions-of-use"
							title="Our terms and conditions of use"> Terms and conditions
								of use </a></li>
						<li><a id="link-cms-page-4-2" class="cms-page-link"
							href="http://www.orientaltreasure.co.uk/content/4-about-us"
							title="Learn more about us"> About us </a></li>
						<li><a id="link-cms-page-5-2" class="cms-page-link"
							href="http://www.orientaltreasure.co.uk/content/5-secure-payment"
							title="Our secure payment method"> Secure payment </a></li>
						<li><a id="link-static-page-contact-2" class="cms-page-link"
							href="http://www.orientaltreasure.co.uk/contact-us"
							title="Use our form to contact us"> Contact us </a></li>
						<li><a id="link-static-page-sitemap-2" class="cms-page-link"
							href="http://www.orientaltreasure.co.uk/sitemap"
							title="Lost ? Find what your are looking for"> Sitemap </a></li>
						<li><a id="link-static-page-stores-2" class="cms-page-link"
							href="http://www.orientaltreasure.co.uk/stores" title="">
								Stores </a></li>
					</ul>
				</div>

				<!-- end /var/www/vhosts/orientaltreasure.co.uk/httpdocs/themes/dbemart/modules/ps_linklist/views/templates/hook/linkblock.tpl -->
				<!-- end module:ps_linklist/views/templates/hook/linkblock.tpl -->

				<!-- begin module:ps_customeraccountlinks/ps_customeraccountlinks.tpl -->
				<!-- begin /var/www/vhosts/orientaltreasure.co.uk/httpdocs/themes/dbemart/modules/ps_customeraccountlinks/ps_customeraccountlinks.tpl -->

				<div id="block_myaccount_infos"
					class="col-md-4 col-lg-2 links wrapper">
					<h3 class="myaccount-title hidden-sm-down">
						<a class="text-uppercase" href="javasc:" rel="nofollow"> Your
							account </a>
					</h3>
					<div class="title clearfix hidden-md-up"
						data-target="#footer_account_list" data-toggle="collapse">
						<span class="h3">Your account</span> <span class="pull-xs-right">
							<span class="navbar-toggler collapse-icons"> <i
								class="material-icons add">&#xE313;</i> <i
								class="material-icons remove">&#xE316;</i>
						</span>
						</span>
					</div>
					<ul class="account-list collapse" id="footer_account_list">
						<li><a href="http://www.orientaltreasure.co.uk/addresses"
							title="Addresses" rel="nofollow"> Addresses </a></li>
						<li><a href="http://www.orientaltreasure.co.uk/credit-slip"
							title="Credit slips" rel="nofollow"> Credit slips </a></li>
						<li><a href="http://www.orientaltreasure.co.uk/order-history"
							title="Orders" rel="nofollow"> Orders </a></li>
						<li><a href="http://www.orientaltreasure.co.uk/identity"
							title="Personal info" rel="nofollow"> Personal info </a></li>
						<li><a href="http://www.orientaltreasure.co.uk/discount"
							title="Vouchers" rel="nofollow"> Vouchers </a></li>

					</ul>
				</div>
				<!-- end /var/www/vhosts/orientaltreasure.co.uk/httpdocs/themes/dbemart/modules/ps_customeraccountlinks/ps_customeraccountlinks.tpl -->
				<!-- end module:ps_customeraccountlinks/ps_customeraccountlinks.tpl -->

				<!-- begin module:ps_socialfollow/ps_socialfollow.tpl -->
				<!-- begin /var/www/vhosts/orientaltreasure.co.uk/httpdocs/themes/dbemart/modules/ps_socialfollow/ps_socialfollow.tpl -->
				<div id="social_block" class="links wrapper col-md-4 col-lg-2">
					<h3 class="h3 hidden-sm-down">Follow Us</h3>
					<div class="title clearfix hidden-md-up"
						data-target="#block_social_footer" data-toggle="collapse">
						<span class="h3">Follow Us</span> <span class="pull-xs-right">
							<span class="navbar-toggler collapse-icons"> <i
								class="material-icons add">&#xE313;</i> <i
								class="material-icons remove">&#xE316;</i>
						</span>
						</span>
					</div>

					<div id="block_social_footer" class="block-social collapse">
						<ul>
							<li class="facebook"><a
								href="http://www.facebook.com/prestashop" target="_blank">Facebook</a></li>
						</ul>
					</div>

				</div>
				<!-- end /var/www/vhosts/orientaltreasure.co.uk/httpdocs/themes/dbemart/modules/ps_socialfollow/ps_socialfollow.tpl -->
				<!-- end module:ps_socialfollow/ps_socialfollow.tpl -->

				<!-- begin modules/owlcustomhtml/views/templates/hook/owlcustomhtml_footer.tpl -->


				<!-- end modules/owlcustomhtml/views/templates/hook/owlcustomhtml_footer.tpl -->

			</div>
		</div>
	</div>
	<div class="footer-affter">

		<!-- begin modules/owlcustomhtml/views/templates/hook/owlcustomhtml_displayfooterafter.tpl -->

		<div class="block-footer-after">
			<div class="container">
				<div class="row">
					<div class="copy-right-left col-xs-12 col-sm-4 ">
						<p>Copyright right © 2017 Studio116 Design. All Rights
							Reserved.</p>
					</div>
					<div class="payment-right col-xs-12 col-sm-8 ">
						<ul>
							<li><a data-toggle="tooltip" data-placement="top"
								title="visa" href="#"><img
									src="${ctx.path}/resources/face/picture/icon1.jpg" /></a></li>
							<li><a data-toggle="tooltip" data-placement="top"
								title="master card" href="#"><img
									src="${ctx.path}/resources/face/picture/icon2.jpg" /></a></li>
							<li><a data-toggle="tooltip" data-placement="top"
								title="american" href="#"><img
									src="${ctx.path}/resources/face/picture/icon3.jpg" /></a></li>
							<li><a data-toggle="tooltip" data-placement="top"
								title="paypal" href="#"><img
									src="${ctx.path}/resources/face/picture/icon4.jpg" /></a></li>
							<li><a data-toggle="tooltip" data-placement="top"
								title="america" href="#"><img
									src="${ctx.path}/resources/face/picture/icon5.jpg" /></a></li>
							<li><a data-toggle="tooltip" data-placement="top"
								title="maestro" href="#"><img
									src="${ctx.path}/resources/face/picture/icon6.jpg" /></a></li>
							<li><a data-toggle="tooltip" data-placement="top"
								title="mastercard" href="#"><img
									src="${ctx.path}/resources/face/picture/icon7.jpg" /></a></li>
							<li><a data-toggle="tooltip" data-placement="top"
								title="cirrus" href="#"><img
									src="${ctx.path}/resources/face/picture/icon8.jpg" /></a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<!-- end modules/owlcustomhtml/views/templates/hook/owlcustomhtml_displayfooterafter.tpl -->

		<!-- begin modules/owluecookie/views/templates/hook/owluecookie.tpl -->

		<div id="cookie_notice" class="global-site-notice notice-cookie">
			<div class="notice-inner container">
				<div class="notice-cookie-inner">
					<span>By continuing use this site, you agree to the <a
						href="#"><strong>Privacy Policy</strong></a> and our use of
						cookies.
					</span>
					<button class="button" onclick="closeUeNotify()">
						<span><span>Allow</span></span>
					</button>
				</div>
			</div>
		</div>
		<!-- end modules/owluecookie/views/templates/hook/owluecookie.tpl -->

	</div>

	</footer>
	<div class="owl-footer"></div>
	</main>










	<script type="text/javascript"
		src="${ctx.path}/resources/face/js/core.js"></script>
	<script type="text/javascript"
		src="${ctx.path}/resources/face/js/theme.js"></script>
	<!-- 	<script type="text/javascript" src="${ctx.path}/resources/face/js/owlcountdown.js"></script> -->
	<script type="text/javascript"
		src="${ctx.path}/resources/face/js/front.js"></script>
	<script type="text/javascript"
		src="${ctx.path}/resources/face/js/module.js"></script>
	<script type="text/javascript"
		src="${ctx.path}/resources/face/js/jquery-ui.min.js"></script>
	<script type="text/javascript"
		src="${ctx.path}/resources/face/js/jquery.cooki-plugin.js"></script>
	<script type="text/javascript"
		src="${ctx.path}/resources/face/js/ps_searchbar.js"></script>
	<script type="text/javascript"
		src="${ctx.path}/resources/face/js/ps_shoppingcart.js"></script>
	<script type="text/javascript"
		src="${ctx.path}/resources/face/js/owl.carousel.js"></script>
	<script type="text/javascript"
		src="${ctx.path}/resources/face/js/jquery.imagesloaded.min.js"></script>
	<script type="text/javascript"
		src="${ctx.path}/resources/face/js/jquery.appear.js"></script>
	<script type="text/javascript"
		src="${ctx.path}/resources/face/js/jquery.mousewheel.min.js"></script>
	<script type="text/javascript"
		src="${ctx.path}/resources/face/js/jquery.simplr.smoothscroll.min.js"></script>
	<!-- 	<script type="text/javascript" src="${ctx.path}/resources/face/js/nprogress.js"></script> -->
	<!-- 	<script type="text/javascript" src="${ctx.path}/resources/face/js/owltheme.js"></script> -->
	<script type="text/javascript"
		src="${ctx.path}/resources/face/js/front.js"></script>
	<script type="text/javascript"
		src="${ctx.path}/resources/face/js/greensock.js"></script>
	<script type="text/javascript"
		src="${ctx.path}/resources/face/js/layerslider.transitions.js"></script>
	<script type="text/javascript"
		src="${ctx.path}/resources/face/js/layerslider.kreaturamedia.jquery.js"></script>
	<script type="text/javascript"
		src="${ctx.path}/resources/face/js/jquery.mcustomscrollbar.min.js"></script>
	<script type="text/javascript"
		src="${ctx.path}/resources/face/js/custom.js"></script>



	<script type="text/javascript"
		src="${ctx.path}/resources/face/js/main.js"></script>






</body>

</html>

<!-- end index.tpl -->