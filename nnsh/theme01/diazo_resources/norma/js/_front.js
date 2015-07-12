/* global jQuery:false */

// GLOBAL SETTINGS
var MENU_FIXED = true;


var error_msg_box = null;
var menu_offset = 0;

jQuery(document).ready(function() {
	"use strict";

	// toTop link setup
	showToTop();
	jQuery(window).scroll(showToTop);
	jQuery('#toTop').click(function(e) {
		"use strict";
		jQuery('body,html').animate({scrollTop:0}, 800);
		e.preventDefault();
		return false;
	});

	// Search link
	var linkWidth = 0;
	jQuery('.search_link').click(function(e) {
		if (jQuery('.search_link').width() < 50) {
			linkWidth = jQuery('.search_link').width();
			jQuery('.search_link').animate({width:'250px'}, 200);
			jQuery('.search_over').animate({width:'250px'}, 200);
			jQuery('#header_top_inner .header_icons .searchform').show();
		} else if (jQuery('#header_top_inner .header_icons .field_search').val()!=='') {
			jQuery('#header_top_inner .header_icons .searchform').get(0).submit();
		} else {
			jQuery('#header_top_inner .header_icons .searchform').hide();
			jQuery('.search_link').animate({width:linkWidth+'px'}, 200);
			jQuery('.search_over').animate({width:linkWidth+'px'}, 200);
		}
		e.preventDefault();
		return false;
	});

	// Search form link
	jQuery('.search_form_link').click(function(e) {
		if (jQuery(this).parents('form').find('.field_search').val()!=='') {
			jQuery(this).parents('form').get(0).submit();
		}
		e.preventDefault();
		return false;
	});
	
	// Main menu substitute
	jQuery('#mainmenu').mobileMenu();

	// Main menu handler
	jQuery('#mainmenu').superfish({
		autoArrows: false,
		speed: 'fast',
		speedOut: 'fast',
		animation: {height:'show'},
		animationOut: {opacity: 'hide'},
		useClick: false,
		delay: 100,
		disableHI: true
	});

	// Menu fixed position
	if (MENU_FIXED) {
		menu_offset = jQuery('#header_middle').offset().top;
		mainMenuFixed();
		jQuery(window).scroll(mainMenuFixed);
	}

	// Video and Audio tag wrapper
	if (jQuery('video,audio').length > 0) {
		jQuery('video,audio').mediaelementplayer(/* Options */);
	}

	// Pretty photo
	jQuery("a[href$='jpg'],a[href$='jpeg'],a[href$='png'],a[href$='gif']").toggleClass('prettyPhoto', true);
	jQuery("a[class*='prettyPhoto']").click(function(e) {
		if (jQuery(window).width()<480)	{
			e.stopImmediatePropagation();
			window.location = jQuery(this).attr('href');
		}
		e.preventDefault();
		return false;
	});
	if (jQuery("a[class*='prettyPhoto']").length > 0) {
		jQuery("a[class*='prettyPhoto']").prettyPhoto({
			social_tools: '',
			theme: 'light_rounded'
		});
	}
	

	// ----------------------- Shortcodes setup -------------------

	// Galleries Slider
	if (jQuery('.sc_slider_flex').length > 0) {
		jQuery('.sc_slider_flex').flexslider({
			directionNav: true,
			controlNav: true,
			animation: 'fade',
			animationLoop: true,
			slideshow: true,
			slideshowSpeed: 7000,
			animationSpeed: 600,
			pauseOnAction: true,
			pauseOnHover: false,
			useCSS: false,
			manualControls: '',
			/*
			start: function(slider){},
			before: function(slider){},
			after: function(slider){},
			end: function(slider){},              
			added: function(){},            
			removed: function(){} 
			*/
		});
	}

	// Infoboxes
	jQuery('div.sc_infobox_closeable').click(function() {
		jQuery(this).fadeOut();
	});

	// Tooltips
	jQuery('.sc_tooltip_parent').hover(
		function(){
			var obj = jQuery(this);
			obj.find('.sc_tooltip').stop().animate({'marginTop': '5'}, 100).show();
		},
		function(){
			var obj = jQuery(this);
			obj.find('.sc_tooltip').stop().animate({'marginTop': '0'}, 100).hide();
		}
	);

	// Tabs
	jQuery('div.sc_tabs').tabs('div.content', 
		{
			tabs: '.tab_names > a',
			initialIndex : 0
		}
	);

	// Accordion
	jQuery('div.sc_accordion').tabs('div.sc_accordion_item > div.sc_accordion_content', {
		tabs: '.sc_accordion_title > a',
		effect : 'slide',
		currentClose: true,
		initialIndex : 0
	});

	// Toggles
	jQuery('div.sc_toggles').tabs('div.sc_toggles_item > div.sc_toggles_content', {
		tabs: '.sc_toggles_title > a',
		effect : 'slide',
		currentClose: true,
		anotherClose: false,
		initialIndex : 0
	});

	// Blogger slider
	jQuery(".sc_blogger_slider").each(function() {
		var slider = jQuery(this);
		slider.elastislide({
			minItems: slider.data('items'),
			margin: slider.data('margin'),
			border: slider.data('border'),
			imageW: slider.data('width')
		});
	});

	// Blogger slider links fix
	jQuery(".sc_blogger_slider a").click(function(e) {
		if (!jQuery(this).hasClass('image_zoom')) {
			window.location.href = jQuery(this).attr("href");
		}
		e.preventDefault();
		return false;
	});

	// Contact form submit
	jQuery(".sc_contact_form .button a").click(function(e){
		userSubmitForm(jQuery(this).parents('form'), 'php/sendform.php');
		e.preventDefault();
		return false;
	});


	// ----------------------- Comment form submit ----------------
	jQuery("form#commentform").submit(function(e) {
		var error = formValidate(jQuery(this), {
			error_message_text: GLOBAL_ERROR_TEXT,	// Global error message text (if don't write in checked field)
			error_message_show: true,				// Display or not error message
			error_message_time: 5000,				// Error message display time
			error_message_class: 'sc_infobox sc_infobox_style_error',	// Class appended to error message block
			error_fields_class: 'error_fields_class',					// Class appended to error fields
			exit_after_first_error: false,								// Cancel validation and exit after first error
			rules: [
				{
					field: 'author',
					min_length: { value: 1, message: NAME_EMPTY},
					max_length: { value: 60, message: NAME_LONG}
				},
				{
					field: 'email',
					min_length: { value: 7, message: EMAIL_EMPTY},
					max_length: { value: 60, message: EMAIL_LONG},
					mask: { value: '^([a-z0-9_\\-]+\\.)*[a-z0-9_\\-]+@[a-z0-9_\\-]+(\\.[a-z0-9_\\-]+)*\\.[a-z]{2,6}$', message: EMAIL_NOT_VALID}
				},
				{
					field: 'comment',
					min_length: { value: 1, message: MESSAGE_EMPTY },
					max_length: { value: 400, message: MESSAGE_LONG}
				}
			]
		});
		if (error) { e.preventDefault(); }
		return !error;
	});
});


// Set equal height in blocks
function setEqualHeight(selector) {
	"use strict";
	var maxHeight = 0;
	for (var i=0; i<2; i++) {
		jQuery(selector).each(function(){
			if (i > 0) {
				if (maxHeight>0) jQuery(this).height(maxHeight);
			} else if (jQuery(this).height() > maxHeight)
				maxHeight = jQuery(this).height();
		});
	}
}


// Show/Hide "to Top" button
function showToTop() {
	"use strict";
	var s = jQuery(this).scrollTop();
	if (s >= 110) {
		jQuery('#toTop').show();
	} else {
		jQuery('#toTop').hide();	
	}
}

// Main menu fixed
function mainMenuFixed() {
	"use strict";
	var s = jQuery(window).scrollTop();
	if (s >= menu_offset) {
		jQuery('body').addClass('menu_fixed');
	} else {
		jQuery('body').removeClass('menu_fixed');
	}
}



/* Login & registration
---------------------------------------------------------------------------------------------- */
jQuery(document).ready(function () {
	"use strict";
	jQuery('.link_login,.link_register,.popup_form .popup_title .popup_close').click(function(e) {
		var obj = jQuery(this);
		var popup = obj.hasClass('link_login') ? jQuery('#popup_login') : (obj.hasClass('link_register') ? jQuery('#popup_register') : jQuery(this).parents('.popup_form'));
		if (popup.length === 1) {
			if (popup.hasClass('visible')) {
				popup.removeClass('visible').slideUp();
			} else {
				jQuery('.popup_form').removeClass('visible').fadeOut();
				if (parseInt(popup.css('left'), 10) === 0) {
					var offset = jQuery(this).offset();
					popup.css({
						left: offset.left-10,
						top: offset.top+jQuery(this).height()+4
					});
				}
				popup.addClass('visible').slideDown();
			}
		}
		e.preventDefault();
		return false;
	});
	jQuery('.popup_form form').keypress(function(e){
		if (e.keyCode === 27) {
			jQuery(this).parents('.popup_form').find('.popup_title .popup_close').trigger('click');
			e.preventDefault();
			return false;
		} else if (e.keyCode === 13) {
			jQuery(this).parents('.popup_form').find('.popup_button a').trigger('click');
			e.preventDefault();
			return false;
		}
	});
	jQuery('#popup_login .popup_button a').click(function(e){
		jQuery('#popup_login form input').removeClass('error_fields_class');
		var error = formValidate(jQuery('#popup_login form'), {
			error_message_show: true,
			error_message_time: 4000,
			error_message_class: 'sc_infobox sc_infobox_style_error',
			error_fields_class: 'error_fields_class',
			exit_after_first_error: true,
			rules: [
				{
					field: "log",
					min_length: { value: 1, message: LOGIN_EMPTY},
					max_length: { value: 60, message: LOGIN_LONG}
				},
				{
					field: "pwd",
					min_length: { value: 4, message: PASSWORD_EMPTY},
					max_length: { value: 20, message: PASSWORD_LONG}
				}
			]
		});
		if (!error) {
			document.forms.login_form.submit();
		}
		e.preventDefault();
		return false;
	});
	jQuery('#popup_register .popup_button a').click(function(e){
		jQuery('#popup_register form input').removeClass('error_fields_class');
		var error = formValidate(jQuery("#popup_register form"), {
			error_message_show: true,
			error_message_time: 4000,
			error_message_class: "sc_infobox sc_infobox_style_error",
			error_fields_class: "error_fields_class",
			exit_after_first_error: true,
			rules: [
				{
					field: "registration_username",
					min_length: { value: 1, message: LOGIN_EMPTY },
					max_length: { value: 60, message: LOGIN_LONG }
				},
				{
					field: "registration_email",
					min_length: { value: 7, message: EMAIL_EMPTY },
					max_length: { value: 60, message: EMAIL_LONG },
					mask: { value: "^([a-z0-9_\\-]+\\.)*[a-z0-9_\\-]+@[a-z0-9_\\-]+(\\.[a-z0-9_\\-]+)*\\.[a-z]{2,6}$", message: EMAIL_NOT_VALID }
				},
				{
					field: "registration_pwd",
					min_length: { value: 4, message: PASSWORD_EMPTY },
					max_length: { value: 20, message: PASSWORD_LONG }
				},
				{
					field: "registration_pwd2",
					equal_to: { value: 'registration_pwd', message: PASSWORD_NOT_EQUAL }
				}
			]
		});
		if (!error) {
			jQuery.post(ajax_url, {
				action: 'registration_user',
				nonce: ajax_nonce,
				user_name: jQuery('#popup_register #registration_username').val(),
				user_email: jQuery('#popup_register #registration_email').val(),
				user_pwd: jQuery('#popup_register #registration_pwd').val()
			}).done(function(response) {
				var rez = JSON.parse(response);
				var result_box = jQuery('#popup_register .result');
				result_box.toggleClass('sc_infobox_style_error', false).toggleClass('sc_infobox_style_success', false);
				if (rez.error === '') {
					result_box.addClass('sc_infobox_style_success').html(REGISTRATION_SUCCESS);
					setTimeout(function() { jQuery('#popup_register .popup_close').trigger('click'); jQuery('.link_login').trigger('click'); }, 2000);
				} else {
					result_box.addClass('sc_infobox_style_error').html(REGISTRATION_FAILED + ' ' + rez.error);
				}
				result_box.fadeIn();
				setTimeout(function() { jQuery('#popup_register .result').fadeOut(); }, 5000);
			});
		}
		e.preventDefault();
		return false;
	});
});




/* Customizer
---------------------------------------------------------------------------------------------- */
jQuery(document).ready(function () {
	"use strict";
	if (jQuery("#custom_options").length===1) {

		var body_style = jQuery.cookie('body_style');
		var box = jQuery('#custom_options .switcher').eq(0);
		switchBox(box, body_style, true);
		jQuery(document).find('body').addClass(body_style);
		jQuery(document).trigger('resize');

		var theme_color = jQuery.cookie('theme_color');
		if (theme_color != '' && theme_color != undefined) {
			jQuery('#co_theme_color div').css('backgroundColor', theme_color);
			setThemeColor(theme_color);
		}
		
		var bg_inited = false;
		
		var bg_image = jQuery.cookie('bg_image');
		if (bg_image > 0) {
			jQuery('#custom_options #co_bg_images_list #image_'+bg_image).addClass('current');
			jQuery(document).find('body').addClass('bg_image_'+bg_image);
			bg_inited = true;
		}
		
		var bg_pattern = jQuery.cookie('bg_pattern');
		if (bg_pattern > 0) {
			if (!bg_inited) {
				jQuery('#custom_options #co_bg_pattern_list #pattern_'+bg_pattern).addClass('current');
				jQuery(document).find('body').addClass('bg_pattern_'+bg_pattern);
				bg_inited = true;
			}
		}
		
		var bg_color = jQuery.cookie('bg_color');
		if (bg_color != '' && bg_color != undefined) {
			if (!bg_inited) {
				jQuery('#co_bg_color div').css('backgroundColor', bg_color);
				jQuery(document).find('body').css('backgroundColor', bg_color);
				bg_inited = true;
			}
		}

		jQuery('#co_toggle').click(function(e) {
			var co = jQuery('#custom_options').eq(0);
			if (co.hasClass('opened')) {
				co.removeClass('opened').animate({marginRight:-237}, 300);
			} else {
				co.addClass('opened').animate({marginRight:-15}, 300);
			}
			e.preventDefault();
			return false;
		});
		// Body style
		jQuery("#custom_options .switcher a" ).draggable({
			axis: 'x',
			containment: 'parent',
			stop: function() {
				var left = parseInt(jQuery(this).css('left'), 10);
				var curStyle = left < 25 ? 'wide' : 'boxed';
				switchBox(jQuery(this).parent(), curStyle, true);
			}
		});
		jQuery("#custom_options .switcher" ).click(function(e) {
			switchBox(jQuery(this));
			e.preventDefault();
			return false;
		});
		jQuery("#custom_options .co_switch_box .boxed" ).click(function(e) {
			switchBox(jQuery('#custom_options .switcher'), 'boxed');
			e.preventDefault();
			return false;
		});
		jQuery("#custom_options .co_switch_box .stretched" ).click(function(e) {
			switchBox(jQuery('#custom_options .switcher'), 'wide');
			e.preventDefault();
			return false;
		});
		// Main theme color and Background color
		var clickedObj = null;
		jQuery('#custom_options .colorSelector').ColorPicker({
			onBeforeShow: function () {
				clickedObj = jQuery(this);
				jQuery(this).ColorPickerSetColor(jQuery(this).siblings('input').attr('value'));
			},
			onShow: function (colpkr) {
				jQuery(colpkr).fadeIn(500);
				return false;
			},
			onHide: function (colpkr) {
				jQuery(colpkr).fadeOut(500);
				return false;
			},
			onSubmit: function (hsb, hex, rgb) {
				jQuery(clickedObj).find('div').css('backgroundColor', '#' + hex);
				jQuery(clickedObj).siblings('input').attr('value','#' + hex);
				if (clickedObj.attr('id')==='co_theme_color') {
					jQuery.cookie('theme_color', '#' + hex, {expires: 365, path: '/'});
					setThemeColor('#'+hex);
					//window.location = jQuery("#custom_options #co_site_url").val();
				} else {
					jQuery("#custom_options .co_switch_box .boxed").trigger('click');
					jQuery('#custom_options #co_bg_pattern_list .co_pattern_wrapper,#custom_options #co_bg_images_list .co_image_wrapper').removeClass('current');
					jQuery.cookie('bg_image', null, {expires: -1, path: '/'});
					jQuery.cookie('bg_pattern', null, {expires: -1, path: '/'});
					jQuery.cookie('bg_color', '#' + hex, {expires: 365, path: '/'});
					jQuery(document).find('body').removeClass('bg_pattern_1 bg_pattern_2 bg_pattern_3 bg_pattern_4 bg_pattern_5 bg_image_1 bg_image_2 bg_image_3').css('backgroundColor', '#'+hex);
				}
			}
		});
		// Background patterns
		jQuery('#custom_options #co_bg_pattern_list a').click(function(e) {
			jQuery("#custom_options .co_switch_box .boxed").trigger('click');
			jQuery('#custom_options #co_bg_pattern_list .co_pattern_wrapper,#custom_options #co_bg_images_list .co_image_wrapper').removeClass('current');
			var obj = jQuery(this).addClass('current');
			var val = obj.attr('id').substr(-1);
			jQuery.cookie('bg_color', null, {expires: -1, path: '/'});
			jQuery.cookie('bg_image', null, {expires: -1, path: '/'});
			jQuery.cookie('bg_pattern', val, {expires: 365, path: '/'});
			jQuery(document).find('body').removeClass('bg_pattern_1 bg_pattern_2 bg_pattern_3 bg_pattern_4 bg_pattern_5 bg_image_1 bg_image_2 bg_image_3').addClass('bg_pattern_' + val);
			e.preventDefault();
			return false;
		});
		// Background images
		jQuery('#custom_options #co_bg_images_list a').click(function(e) {
			jQuery("#custom_options .co_switch_box .boxed").trigger('click');
			jQuery('#custom_options #co_bg_images_list .co_image_wrapper,#custom_options #co_bg_pattern_list .co_pattern_wrapper').removeClass('current');
			var obj = jQuery(this).addClass('current');
			var val = obj.attr('id').substr(-1);
			jQuery.cookie('bg_color', null, {expires: -1, path: '/'});
			jQuery.cookie('bg_pattern', null, {expires: -1, path: '/'});
			jQuery.cookie('bg_image', val, {expires: 365, path: '/'});
			jQuery(document).find('body').removeClass('bg_pattern_1 bg_pattern_2 bg_pattern_3 bg_pattern_4 bg_pattern_5 bg_image_1 bg_image_2 bg_image_3').addClass('bg_image_' + val);
			e.preventDefault();
			return false;
		});
	}
});

// Switch body style between 'boxed' and 'wide'
function switchBox(box) {
	"use strict";
	var toStyle = arguments[1] ? arguments[1] : '';
	var important = arguments[2] ? arguments[2] : false;
	var switcher = box.find('a').eq(0);
	var left = parseInt(switcher.css('left'), 10);
	var newStyle = left < 5 ? 'boxed' : 'wide';
	if (toStyle==='' || important || newStyle === toStyle) {
		if (toStyle==='') {toStyle = newStyle;}
		var right = box.width() - switcher.width() + 2;
		if (toStyle === 'wide') {switcher.animate({left: -2}, 200);}
		else {switcher.animate({left: right}, 200);}
		jQuery.cookie('body_style', toStyle, {expires: 365, path: '/'});
		jQuery(document).find('body').removeClass(toStyle==='boxed' ? 'wide' : 'boxed').addClass(toStyle);
		jQuery(document).trigger('resize');
	}
	return newStyle;
}


// Set theme accent color for each themed elements
function setThemeColor(theme_color) {
	"use strict";
	var hsb = hex_hsb(theme_color);
	hsb.s = Math.round(hsb.s*0.5);
	hsb.b = Math.min(100, Math.round(hsb.b*1.2));
	var tc_light = hsb_hex(hsb);
	var style = THEMEREX_custom_styles.replace(/#\$\$\$\$\$\$/g, theme_color).replace(/#@@@@@@/g, tc_light);
	var css = jQuery('head style#custom_stylesheet');
	if (css.length===1)
		css.html(style);
	else
		jQuery('head').append('<style id="custom_stylesheet">'+style+'</style>');
}

var THEMEREX_custom_styles = '.image_wrapper .image_link:hover,.image_wrapper .image_zoom:hover {background-color:#$$$$$$;} .post_info a:hover {color:#$$$$$$ !important;} a, a:hover, a:visited { color: #$$$$$$; } .post_views a:hover,.post_comments a:hover {color:#$$$$$$ !important;} .post_comments a:hover .comments_number {color:#$$$$$$ !important;}.post_views a:hover [class^="icon-"]:before,.post_views a:hover [class*=" icon-"]:before,.post_comments a:hover [class^="icon-"]:before,.post_comments a:hover [class*=" icon-"]:before {color:#$$$$$$ !important;} #header_top_inner .login_or_register a:hover { color:#$$$$$$; }#header_top_inner .social:hover [class^="icon-"]:before,#header_top_inner .social:hover [class*=" icon-"]:before {color:#$$$$$$;} #header_top_inner .header_icons .search_link [class^="icon-"]:before,#header_top_inner .header_icons .search_link [class*=" icon-"]:before {color:#$$$$$$;} #header_middle_inner .logo_default a:hover {color:#$$$$$$;} #header_middle_inner .logo_norma_top { background-color:#$$$$$$; } #header_middle_inner .logo_norma_top:before { background-color:#$$$$$$; } #header_middle_inner .logo_norma_top:after { background-color:#$$$$$$; } #header_middle_inner #mainmenu > li > a:hover, #header_middle_inner #mainmenu > li.sfHover > a { border-bottom-color:#$$$$$$; } #header_middle_inner #mainmenu > li ul { background: #$$$$$$; } .breadcrumbs li a:hover { color: #$$$$$$; } #content .more-link:hover { color: #$$$$$$; } .content_blog .post_title a:hover { color: #$$$$$$; } .content_blog .post_format_quote .post_content:before { color:#$$$$$$; } .content_blog .post_format_quote .post_content a:hover { color:#$$$$$$; } .content_blog #portfolio_iso_filters a.current, .content_blog #portfolio_iso_filters a:hover {	color:#$$$$$$; } #nav_pages li a:hover, .nav_pages_parts a:hover, .nav_comments a:hover { color: #$$$$$$; } .sc_slider_flex .flex-direction-nav li:before { background-color: #$$$$$$; } .sc_slider_flex .flex-control-nav a.flex-active, .sc_slider_flex .flex-control-nav a:hover { background-color:#$$$$$$; } .post_info_1 .post_format {	background-color:#$$$$$$; } .blog_style_b2 .title_area { border-left-color: #$$$$$$;} .blog_style_b3 .post_title:after, .content_blog.post_single .subtitle_area .post_subtitle:after, .content_blog.post_single #comments #reply-title:after { border-bottom-color: #$$$$$$; } .blog_style_p1 .title_area .post_categories a:hover { color: #$$$$$$; } .blog_style_p2 .title_area .post_categories a:hover, .blog_style_p3 .title_area .post_categories a:hover, .blog_style_p4 .title_area .post_categories a:hover {	color: #$$$$$$; } .content_blog .post_social .social:hover [class^="icon-"]:before, .content_blog .post_social .social:hover [class*=" icon-"]:before { color:#$$$$$$; } .content_blog .post_author_details .extra_wrap h3 a:hover { color:#$$$$$$; } .content_blog.post_single #related_posts .related_posts_item .title_area a:hover { color:#$$$$$$; } .content_blog.post_single #comments .comment_title_area .comment_reply a:hover { color: #$$$$$$; } .content_blog.post_single #comments .comment_title_area .comment_title a:hover { color: #$$$$$$; } .content_blog.post_single #commentform #submit:hover { color:#$$$$$$; } .blog_style_p1.post_single #related_posts .post_info a:hover { color:#$$$$$$ !important;}  .blog_style_p1.post_single .post_details .post_url a { color:#$$$$$$ !important; } .content_blog article.page_404 .post_content .post_subtitle { color:#$$$$$$; } .content_blog article.page_404 .post_content .search_form_link:hover .icon-search:before { color:#$$$$$$; } #sidebar_main .widget .widget_title:after { border-bottom-color: #$$$$$$; } #sidebar_main .widget ul li:hover:before, #advert_sidebar_inner .widget ul li:hover:before { background:#$$$$$$; border-color:#$$$$$$; } #sidebar_main .widget ul li a:hover, #advert_sidebar_inner .widget ul li a:hover { color:#$$$$$$; } #sidebar_main .widget.widget_tag_cloud a:hover, #advert_sidebar_inner .widget.widget_tag_cloud a:hover { border-color:#$$$$$$; background-color:#$$$$$$; } #sidebar_main .widget.widget_calendar table tbody a:hover, #advert_sidebar_inner .widget.widget_calendar table tbody a:hover { color:#$$$$$$;} #sidebar_main .widget.widget_calendar table tfoot a:hover, #advert_sidebar_inner .widget.widget_calendar table tfoot a:hover { color:#$$$$$$; } #sidebar_main .widget .post_title a:hover, #advert_sidebar_inner .widget .post_title a:hover { color:#$$$$$$; } #sidebar_main .widget .post_author a:hover, #advert_sidebar_inner .widget .post_author a:hover { color:#$$$$$$; } #sidebar_main .sc_contact_form .button a, #advert_sidebar_inner .sc_contact_form .button a { background-color:#$$$$$$; } #sidebar_main .widget_contacts .widget_inner a:hover, #advert_sidebar_inner .widget_contacts .widget_inner a:hover { color:#$$$$$$; } #sidebar_main .widget_social a:hover [class^="icon-"]:before, #advert_sidebar_inner .widget_social a:hover [class*=" icon-"]:before { color:#$$$$$$; } #sidebar_main .widget_qrcode_vcard .personal_data a:hover, #advert_sidebar_inner .widget_qrcode_vcard .personal_data a:hover { color:#$$$$$$; } #advert_sidebar_inner .widget.widget_text { border-right-color:#$$$$$$; } #footer_sidebar_inner .widget .widget_title:after { border-bottom-color: #$$$$$$; } #footer_sidebar_inner .widget ul li:hover:before { background:#$$$$$$;	border-color:#$$$$$$; } #footer_sidebar_inner .widget ul li a:hover { color:#$$$$$$; } #footer_sidebar_inner .widget.widget_tag_cloud a:hover { border-color:#$$$$$$; background-color:#$$$$$$; } #footer_sidebar_inner .widget .post_title a:hover { color:#$$$$$$; } #footer_sidebar_inner .widget .post_author a:hover { color:#$$$$$$; } #footer_sidebar_inner .widget.widget_popular_posts .tabs a:hover:after,#footer_sidebar_inner .widget.widget_popular_posts .tabs a.current:after {border-bottom-color: #$$$$$$;} #footer_sidebar_inner .sc_contact_form .button a {background-color:#$$$$$$;} #footer_sidebar_inner .widget_contacts .widget_inner a:hover {color:#$$$$$$;} #footer_sidebar_inner .widget_social a:hover [class^="icon-"]:before { color:#$$$$$$; } #footer_sidebar_inner .widget_qrcode_vcard a:hover { color:#$$$$$$; } .popup_form .popup_title { border-bottom-color:#$$$$$$; } .popup_form .popup_title .popup_arrow:after { border-color: transparent transparent #$$$$$$ transparent; } .popup_form .popup_field.popup_button a {	background-color:#$$$$$$; } .popup_form .popup_body .result.sc_infobox_style_error { color:#$$$$$$; } .popup_form .popup_field input.error_fields_class { border-color:#$$$$$$; } .sc_title:after { border-bottom-color: #$$$$$$; } .sc_title_bubble_right .sc_title_bubble_icon { 	background-color:#$$$$$$; } .sc_title_bubble_down .sc_title_bubble_icon { background-color:#$$$$$$; } blockquote.sc_quote {	border-left-color: #$$$$$$; } blockquote.sc_quote cite a:hover { color:#$$$$$$; } .sc_dropcaps.sc_dropcaps_style_2 span.sc_dropcap { background-color: #$$$$$$; } ul.sc_list.sc_list_style_mark li span.sc_list_icon, ul.sc_list li.sc_list_style_mark span.sc_list_icon { background: #$$$$$$; } .sc_accordion .sc_accordion_item .sc_accordion_title a:hover { color:#$$$$$$; } .sc_accordion .sc_accordion_item .sc_accordion_title a.current { color:#$$$$$$; } .sc_accordion .sc_accordion_item .sc_accordion_title a:hover span:before, .sc_accordion .sc_accordion_item .sc_accordion_title a:hover span:after, .sc_accordion .sc_accordion_item .sc_accordion_title a.current span:before { background: #$$$$$$; } .sc_toggles .sc_toggles_item .sc_toggles_title a:hover { color:#$$$$$$; } .sc_toggles .sc_toggles_item .sc_toggles_title a.current { color:#$$$$$$; } .sc_toggles .sc_toggles_item .sc_toggles_title a:hover span:before, .sc_toggles .sc_toggles_item .sc_toggles_title a:hover span:after, .sc_toggles .sc_toggles_item .sc_toggles_title a.current span:before { background: #$$$$$$; } .sc_skills .sc_skills_item .sc_skills_level { background:#$$$$$$; } .sc_team .sc_team_item_social a:hover [class^="icon-"]:before, .sc_team .sc_team_item_social a:hover [class*=" icon-"]:before { color:#$$$$$$; } .sc_contact_form .button a { background-color:#$$$$$$; } .sc_blogger .sc_blogger_title a:hover { color:#$$$$$$;} .sc_blogger.style_date .date_month {background-color:#$$$$$$; } .sc_blogger.sc_blogger_slider .es-nav span:hover { background:#$$$$$$; border-color:#$$$$$$; } #custom_options .co_options #co_bg_images_list a.current, #custom_options .co_options #co_bg_pattern_list a.current { background-color:#$$$$$$; } .tp-caption.big_red { color:#$$$$$$; } .tp-caption.bg_red { background-color:#$$$$$$; } .tp-caption.norma-top { background-color:#$$$$$$; } .tp-caption.norma-top:before { background-color:#$$$$$$; } .tp-caption.norma-top:after { background-color:#$$$$$$; } .tp-caption a.button-red { border:1px solid #$$$$$$; background: #$$$$$$; background: -webkit-gradient(linear, 0 0, 0 100%, from(#@@@@@@), to(#$$$$$$)); background: -webkit-linear-gradient(#@@@@@@ 0%, #$$$$$$ 100%); background: -moz-linear-gradient(#@@@@@@ 0%, #$$$$$$ 100%); background: -ms-linear-gradient(#@@@@@@ 0%, #$$$$$$ 100%); background: -o-linear-gradient(#@@@@@@ 0%, #$$$$$$ 100%); background: linear-gradient(#@@@@@@ 0%, #$$$$$$ 100%); filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="#@@@@@@", endColorstr="#$$$$$$",GradientType=0 ); text-shadow:#$$$$$$ 1px 1px; } .tp-caption a.button-red:hover { background: #$$$$$$; }';




/* Javascript String constants for translation
---------------------------------------------------------------------------------------------- */
var GLOBAL_ERROR_TEXT	= "Global error text";
var NAME_EMPTY 			= "The name can't be empty";
var NAME_LONG 			= "Too long name";
var EMAIL_EMPTY 		= "Too short (or empty) email address";
var EMAIL_LONG 			= "Too long email address";
var EMAIL_NOT_VALID 	= "Invalid email address";
var MESSAGE_EMPTY 		= "The message text can't be empty";
var MESSAGE_LONG 		= "Too long message text";
var SEND_COMPLETE 		= "Send message complete!";
var SEND_ERROR 			= "Transmit failed!";
var GEOCODE_ERROR 		= "Geocode was not successful for the following reason:";
var LOGIN_EMPTY			= "The Login field can't be empty";
var LOGIN_LONG			= "Too long login field";
var PASSWORD_EMPTY		= "The password can't be empty and shorter then 5 characters";
var PASSWORD_LONG		= "Too long password";
var PASSWORD_NOT_EQUAL	= "The passwords in both fields are not equal";
var REGISTRATION_SUCCESS= "Registration success! Please log in!";
var REGISTRATION_FAILED	= "Registration failed!";
