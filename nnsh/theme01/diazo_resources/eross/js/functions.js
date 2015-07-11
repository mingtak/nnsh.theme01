jQuery(document).ready(function($){
	
	"use strict";

	// Main Menu
	jQuery('ul.sf-menu').superfish({
		animation:     {height:'show'},   
		animationOut:  {height:'hide'}, 
		speed:         'fast',           
		speedOut:      'fast', 
		delay:         800,           
	});

	// Responsive Panel Menu
	jQuery.jPanelMenu({
		menu: '#mainmenu',
		trigger: '#responsive-menu',
		direction: 'right',
		afterOpen: function(){ 
			jQuery('#header, .portfolio-sidebar').addClass('panelmenu')
		},
		afterClose: function(){ 
			jQuery('#header, .portfolio-sidebar').removeClass('panelmenu')
		},
	}).on();

	// Header Search
	var ctsearch = jQuery( '#header-search' ),
		ctsearchinput = ctsearch.find('input.header-search-input'),
		body = jQuery('html,body'),
		openSearch = function() {
			ctsearch.data('open',true).addClass('header-search-open');
			ctsearchinput.focus();
			return false;
		},
		closeSearch = function() {
			ctsearch.data('open',false).removeClass('header-search-open');
		};

	ctsearchinput.on('click',function(e) { e.stopPropagation(); ctsearch.data('open',true); });

	ctsearch.on('click',function(e) {
		e.stopPropagation();
		if( !ctsearch.data('open') ) {

			openSearch();

			body.off( 'click' ).on( 'click', function(e) {
				closeSearch();
			} );

		}
		else {
			if( $ctsearchinput.val() === '' ) {
				closeSearch();
				return false;
			}
		}
	});

	// Portfolio Item Hover
	jQuery('.portfolio-item').hover(function() {
		jQuery(this).addClass('active');
		jQuery(this).find('.portfolio-overlay').stop().animate({'opacity' : 1}, 200, 'easeOutQuad');
		jQuery(this).find('.portfolio-overlay-content .top-top-bottom').stop().animate({'bottom' : jQuery(this).height()/2-10, 'opacity' : 1}, 160, 'easeOutQuad');
	}, function(){
		jQuery(this).removeClass('active');
		jQuery(this).find('.portfolio-overlay').stop().animate({'opacity' : 0}, 300, 'easeInQuad');
		jQuery(this).find('.portfolio-overlay-content .top-top-bottom').stop().animate({'bottom' : -25, 'opacity' : 0}, 260, 'easeInQuad');
	});

	// Portfolio Widget Item Hover
	jQuery('.portfolio-short-item').hover(function() {
		jQuery(this).addClass('active');
		jQuery(this).find('.portfolio-overlay').stop().animate({'opacity' : 1}, 200, 'easeOutQuad');
		jQuery(this).find('.portfolio-overlay-content .top-top-bottom').stop().animate({'bottom' : jQuery(this).height()/2-20, 'opacity' : 1}, 160, 'easeOutQuad');
	}, function(){
		jQuery(this).removeClass('active');
		jQuery(this).find('.portfolio-overlay').stop().animate({'opacity' : 0}, 300, 'easeInQuad');
		jQuery(this).find('.portfolio-overlay-content .top-top-bottom').stop().animate({'bottom' : -25, 'opacity' : 0}, 260, 'easeInQuad');
	});

	//Blog Item Hover
	jQuery('.blog-media').hover(function() {
		jQuery(this).find('.blog-media-overlay').stop().animate({'opacity' : 1}, 200, 'easeOutQuad');
		jQuery(this).find('.overlay-content .top-top-bottom').stop().animate({'bottom' : jQuery(this).height()/2-20, 'opacity' : 1}, 160, 'easeOutQuad');
	}, function(){
		jQuery(this).find('.blog-media-overlay').stop().animate({'opacity' : 0}, 300, 'easeInQuad');
		jQuery(this).find('.overlay-content .top-top-bottom').stop().animate({'bottom' : -25, 'opacity' : 0}, 260, 'easeInQuad');
	});

	//Slider
	jQuery('.flexslider').hover(function() {
		jQuery(this).find('.flex-direction-nav .flex-prev').stop().animate({'opacity' : 1, 'margin-left': 0}, 200, 'easeOutQuad');
		jQuery(this).find('.flex-direction-nav .flex-next').stop().animate({'opacity' : 1, 'margin-right' : 0}, 200, 'easeOutQuad');
	}, function(){
		jQuery(this).find('.flex-direction-nav .flex-prev').stop().animate({'opacity' : 0, 'margin-left': -25}, 200, 'easeOutQuad');
		jQuery(this).find('.flex-direction-nav .flex-next').stop().animate({'opacity' : 0, 'margin-right' : -25}, 200, 'easeOutQuad');
	});

	//Product Hover
	jQuery('.product-item').hover(function() {
		jQuery(this).addClass('active');
		jQuery(this).find('.front-end').stop().animate({'opacity' : 0}, 200, 'easeOutQuad');
		jQuery(this).find('.product-overlay').stop().animate({'opacity' : 1}, 200, 'easeOutQuad');
		jQuery(this).find('.product-overlay-content .top-top-bottom').stop().animate({'bottom' : jQuery(this).height()/2-10, 'opacity' : 1});
	}, function(){
		jQuery(this).removeClass('active');
		jQuery(this).find('.front-end').stop().animate({'opacity' : 10}, 200, 'easeOutQuad');
		jQuery(this).find('.product-overlay').stop().animate({'opacity' : 0}, 300, 'easeInQuad');
		jQuery(this).find('.product-overlay-content .top-top-bottom').stop().animate({'bottom' : -25, 'opacity' : 0}, 260, 'easeInQuad');
	});

	//Bootrap Tooltip
	jQuery('*[data-toggle="tooltip"]').tooltip();

	//Bootrap Popover
	jQuery('.entry-share').popover({ 
		html : true,
		content: function() {
			return jQuery('.entry-share-social').html();
		}
	});
	jQuery(".entry-share").click(function() { 
		jQuery(this).toggleClass("active");     
	});

	//Fit Video
	jQuery(".blog-item-media, .embed_content").fitVids();

	//FlexSlider
	jQuery('.slider').flexslider({
		animation: "fade",
		controlNav: false,              
		directionNav: true,
		prevText: '<i class="fa fa-angle-left"></i>',           
		nextText: '<i class="fa fa-angle-right"></i>',              
	});

	jQuery('.testimonialslide').flexslider({
		animation: "fade",      
		directionNav: false,
	});

	// Media Element
	jQuery('audio,video').mediaelementplayer({
		translations:['es','ar','yi','zh-cn'],
		translationSelector: true,
		startLanguage: 'en',
		videoWidth: '100%',
		audioWidth: '100%',
	});

	// isofilter
	var jQuerycontainer = jQuery('.portfolio-filter');
	jQuerycontainer.isotope({
		itemSelector: '.element',
		layoutMode: 'fitRows',
	});

	var jQueryoptionSets = jQuery('#options'),
	jQueryoptionLinks = jQueryoptionSets.find('a');

	jQueryoptionLinks.click(function () {
		var jQuerythis = jQuery(this);
		if (jQuerythis.hasClass('selected')) {
			return false;
		}
		var jQueryoptionSet = jQuerythis.parents('.option-set');
		jQueryoptionSet.find('.selected').removeClass('selected');
		jQuerythis.addClass('selected');
		var options = {},
		key = jQueryoptionSet.attr('data-option-key'),
		value = jQuerythis.attr('data-option-value');
		value = value === 'false' ? false : value;
		options[key] = value;
		if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
			changeLayoutMode(jQuerythis, options)
		} else {
			jQuerycontainer.isotope(options);
		}
		return false;
	});

    //Sticky Header
    jQuery('.main-header').affix();

    //Sticky Portfolio Sidebar
    jQuery('.portfolio-sidebar').css('width',jQuery('.portfolio-fixed-area').width());
    jQuery('.portfolio-sidebar').css('top',jQuery('.main-header').height()+70);
    jQuery(window).resize(function() {
    	jQuery('.portfolio-sidebar').css('width',jQuery('.portfolio-fixed-area').width());
    	jQuery('.portfolio-sidebar').css('top',jQuery('.main-header').height()+70);
    });
    jQuery('.portfolio-sidebar').affix();


	//Chart
    jQuery('.chart').each(function(){
    	jQuery(this).easyPieChart({
    		lineWidth: '10',
    		barColor: jQuery(this).data('barcolor'),
    		trackColor: '#ffffff',
    		scaleColor: false,
    		lineCap: 'square',
    		animate: 1300,
    		size: 160
    	});
    	jQuery(this).css('background-color',jQuery(this).data('bgcolor'));
    });

	//Skill Bar
	setTimeout(function(){
		jQuery('.skill-bar .skill-bar-content').each(function() {
			var me = jQuery(this);
			var perc = me.data('percentage');
			var bgcolor = me.data('bgcolor');
			var current_perc = 0;
			var progress = setInterval(function() {
				if (current_perc>=perc) {
					clearInterval(progress);
				} else {
					current_perc +=1;
					me.css('width', (current_perc)+'%');
					me.css('background-color', '#'+(bgcolor))
				}
			}, 10);
		});
	},10);

	// Product
	jQuery(".increase-value").click(function () {
		var button = jQuery(this);
		var oldValue = button.parent().find("input").val();
		var newVal = parseFloat(oldValue) + 1;
		button.parent().find("input").val(newVal);
	});

    // Magnific Popup
    jQuery('.image-popup').magnificPopup({
    	type: 'image',
    	closeOnContentClick: true,
    	closeBtnInside: false,
    	fixedContentPos: true,
    	mainClass: 'mfp-no-margins mfp-with-zoom', 
    	image: {
    		verticalFit: true
    	}
    });

    // Animation
    jQuery(window).scroll(function() {
    	jQuery('.animated-area').each(function() {
    		if(jQuery(window).height() + jQuery(window).scrollTop() - jQuery(this).offset().top > 0) {
    			jQuery(this).trigger("animate-it");
    		}
    	});
    });
    jQuery('.animated-area').on('animate-it', function() {
    	var anm = jQuery(this);
    	anm.find('.animated').each(function() {
    		jQuery(this).css('-webkit-animation-duration','0.6s');
    		jQuery(this).css('-moz-animation-duration','0.6s');
    		jQuery(this).css('-ms-animation-duration','0.6s');
    		jQuery(this).css('animation-duration','0.6s');
    		jQuery(this).css('-webkit-animation-delay',jQuery(this).data('animation-delay'));
    		jQuery(this).css('-moz-animation-delay',jQuery(this).data('animation-delay'));
    		jQuery(this).css('-ms-animation-delay',jQuery(this).data('animation-delay'));
    		jQuery(this).css('animation-delay',jQuery(this).data('animation-delay'));
    		jQuery(this).addClass(jQuery(this).data('animation'));
    	});
    });

	// Background
	jQuery('.background').each(function(){
		var bg = jQuery(this);
		jQuery(this).css('background-image','url('+jQuery(this).data('bg')+')');
		jQuery(this).css('background-color',jQuery(this).data('bgcolor'));
		jQuery(this).css('width',jQuery(this).data('width'));
		jQuery(this).css('min-height',jQuery(this).data('minheight'));
		jQuery(this).css('margin',jQuery(this).data('margin'));
		jQuery(this).css('padding',jQuery(this).data('padding'));
	});

	// Eqal Height
    function equalHeight(group) {
		var tallest = 0;
		group.each(function() {
			var thisHeight = jQuery(this).height();
			if(thisHeight > tallest) {
				tallest = thisHeight;
			}
		});
		group.height(tallest);
	}

	equalHeight(jQuery('#homecontentbox .nospacing-item'));
	jQuery(window).resize(function() {
		equalHeight(jQuery('#homecontentbox .nospacing-item'));
	});

	// scroll back to top
	(function($){$.fn.backToTop=function(options){var $this=$(this);$this.hide().click(function(){$("body, html").animate({scrollTop:"0px"});});var $window=$(window);$window.scroll(function(){if($window.scrollTop()>0){$this.fadeIn();}else{$this.fadeOut();}});return this;};})(jQuery);

	// adding back to top button
	jQuery('body').append('<a class="back-to-top"><i class="fa fa-angle-up"></i></a>');
	jQuery('.back-to-top').backToTop();
	
});