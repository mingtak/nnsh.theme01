(function($){

	"use strict";

/* ==========================================================================
   When document is ready, do
   ========================================================================== */
   
	$(document).ready(function(){

		// sticky header
		// http://imakewebthings.com/jquery-waypoints/shortcuts/sticky-elements/	
	
		var stickyHeader = true;
		
		if((typeof $.fn.waypoint != 'undefined') && stickyHeader && ($(window).width() > 1024)){ 
		
			$('#header').waypoint('sticky', {
			  wrapper: '<div class="sticky-wrapper" />',
			  stuckClass: 'stuck'
			});

		}
		
		// youtube video background
		
		if(typeof $.fn.mb_YTPlayer != 'undefined'){
		
			$(".player").mb_YTPlayer();
		
		}
	
		// simplePlaceholder - polyfill for mimicking the HTML5 placeholder attribute using jQuery
		// https://github.com/marcgg/Simple-Placeholder/blob/master/README.md
		
		if(typeof $.fn.simplePlaceholder != 'undefined'){
			
			$('input[placeholder], textarea[placeholder]').simplePlaceholder();
		
		}
		
		// Fitvids - fluid width video embeds
		// https://github.com/davatron5000/FitVids.js/blob/master/README.md
		
		if(typeof $.fn.fitVids != 'undefined'){
			
			$('.fitvids').fitVids();
		
		}
		
		// Superfish - enhance pure CSS drop-down menus
		// http://users.tpg.com.au/j_birch/plugins/superfish/options/
		
		if(typeof $.fn.superfish != 'undefined'){
			
			$('#menu').superfish({
				delay: 500,
				animation: {opacity:'show',height:'show'},
				speed: 200,
				cssArrows: false
			});
			
		}
		
		// Revolution Slider
		
		if(typeof $.fn.revolution != 'undefined'){
			
			$('.fullwidthbanner').revolution({
				delay:9000,
				startheight:600,
				startwidth:1170,
				hideThumbs:10,
				thumbWidth:100,							// Thumb With and Height and Amount (only if navigation Tyope set to thumb !)
				thumbHeight:50,
				thumbAmount:5,
				navigationType:"both",					// bullet, thumb, none, both		(No Thumbs In FullWidth Version !)
				navigationArrows:"verticalcentered",	// nexttobullets, verticalcentered, none
				navigationStyle:"round",				// round,square,navbar
				soloArrowLeftHalign:"left",
			    soloArrowLeftValign:"center",
			    soloArrowLeftHOffset:30,
			    soloArrowLeftVOffset:0,
			    soloArrowRightHalign:"right",
			    soloArrowRightValign:"center",
			    soloArrowRightHOffset:30,
			    soloArrowRightVOffset:0,
				touchenabled:"on",						// Enable Swipe Function : on/off
				onHoverStop:"on",						// Stop Banner Timet at Hover on Slide on/off
				navigationHAlign:"center",
			    navigationVAlign:"bottom",
			    navigationHOffset:0,
			    navigationVOffset:40,
				stopAtSlide:-1,
				stopAfterLoops:-1,
				shadow:0,								// 0 = no Shadow, 1,2,3 = 3 Different Art of Shadows  (No Shadow in Fullwidth Version !)
				fullWidth:"on"							// Turns On or Off the Fullwidth Image Centering in FullWidth Modus
			});
			
			$('.fullwidthbanner-2').revolution({
				delay:9000,
				startheight:350,
				startwidth:1170,
				hideThumbs:10,
				thumbWidth:100,							// Thumb With and Height and Amount (only if navigation Tyope set to thumb !)
				thumbHeight:50,
				thumbAmount:5,
				navigationType:"both",					// bullet, thumb, none, both		(No Thumbs In FullWidth Version !)
				navigationArrows:"verticalcentered",	// nexttobullets, verticalcentered, none
				navigationStyle:"round",				// round,square,navbar
				soloArrowLeftHalign:"left",
			    soloArrowLeftValign:"center",
			    soloArrowLeftHOffset:30,
			    soloArrowLeftVOffset:0,
			    soloArrowRightHalign:"right",
			    soloArrowRightValign:"center",
			    soloArrowRightHOffset:30,
			    soloArrowRightVOffset:0,
				touchenabled:"on",						// Enable Swipe Function : on/off
				onHoverStop:"on",						// Stop Banner Timet at Hover on Slide on/off
				navigationHAlign:"center",
			    navigationVAlign:"bottom",
			    navigationHOffset:30,
			    navigationVOffset:30,
				stopAtSlide:-1,
				stopAfterLoops:-1,
				shadow:0,								// 0 = no Shadow, 1,2,3 = 3 Different Art of Shadows  (No Shadow in Fullwidth Version !)
				fullWidth:"on"							// Turns On or Off the Fullwidth Image Centering in FullWidth Modus
			});
				
		}
		
		// bxSlider - responsive slider
		// http://bxslider.com/options
		
		if(typeof $.fn.bxSlider != 'undefined'){
			
			$('.bxslider .slides').bxSlider({
				 mode: 'horizontal',					// Type of transition between slides: 'horizontal', 'vertical', 'fade'		
				 speed: 500,							// Slide transition duration (in ms)
				 infiniteLoop: true,					// If true, clicking "Next" while on the last slide will transition to the first slide and vice-versa.
				 hideControlOnEnd: false,				// If true, "Next" control will be hidden on last slide and vice-versa. Only used when infiniteLoop: false
				 pager: true,							// If true, a pager will be added
				 pagerType: 'full',						// If 'full', a pager link will be generated for each slide. If 'short', a x / y pager will be used (ex. 1/5)
				 controls: false,						// If true, "Next" / "Prev" controls will be added
				 auto: true,							// If true, slides will automatically transition
				 pause: 4000,							// The amount of time (in ms) between each auto transition
				 autoHover: true,						// Auto show will pause when mouse hovers over slider
				 useCSS: false 							// If true, CSS transitions will be used for animations. False, jQuery animations. Setting to false fixes problem with jQuery 2.1.0 and mode:horizontal
			});
			
			// Portfolio Images Slider
			
			$('.portfolio-images-slider .slides').bxSlider({
				 mode: 'horizontal',					// Type of transition between slides: 'horizontal', 'vertical', 'fade'		
				 speed: 500,							// Slide transition duration (in ms)
				 infiniteLoop: true,					// If true, clicking "Next" while on the last slide will transition to the first slide and vice-versa.
				 hideControlOnEnd: false,				// If true, "Next" control will be hidden on last slide and vice-versa. Only used when infiniteLoop: false
				 pager: true,							// If true, a pager will be added
				 pagerType: 'full',						// If 'full', a pager link will be generated for each slide. If 'short', a x / y pager will be used (ex. 1/5)
				 controls: true,						// If true, "Next" / "Prev" controls will be added
				 auto: true,							// If true, slides will automatically transition
				 pause: 4000,							// The amount of time (in ms) between each auto transition
				 autoHover: true,						// Auto show will pause when mouse hovers over slider
				 useCSS: false 							// If true, CSS transitions will be used for animations. False, jQuery animations. Setting to false fixes problem with jQuery 2.1.0 and mode:horizontal
			});
			
			// Testimonial Slider
			
			$('.testimonial-slider .slides').bxSlider({
				 mode: 'horizontal',					// Type of transition between slides: 'horizontal', 'vertical', 'fade'		
				 speed: 500,							// Slide transition duration (in ms)
				 infiniteLoop: true,					// If true, clicking "Next" while on the last slide will transition to the first slide and vice-versa.
				 hideControlOnEnd: false,				// If true, "Next" control will be hidden on last slide and vice-versa. Only used when infiniteLoop: false
				 pager: true,							// If true, a pager will be added
				 pagerType: 'full',						// If 'full', a pager link will be generated for each slide. If 'short', a x / y pager will be used (ex. 1/5)
				 controls: false,						// If true, "Next" / "Prev" controls will be added
				 auto: true,							// If true, slides will automatically transition
				 pause: 4000,							// The amount of time (in ms) between each auto transition
				 autoHover: true,						// Auto show will pause when mouse hovers over slider
				 useCSS: false 							// If true, CSS transitions will be used for animations. False, jQuery animations. Setting to false fixes problem with jQuery 2.1.0 and mode:horizontal
			});
			
			// Services Slider
			
			$('.services-slider .slides').bxSlider({
				 mode: 'horizontal',					// Type of transition between slides: 'horizontal', 'vertical', 'fade'		
				 speed: 500,							// Slide transition duration (in ms)
				 infiniteLoop: true,					// If true, clicking "Next" while on the last slide will transition to the first slide and vice-versa.
				 hideControlOnEnd: false,				// If true, "Next" control will be hidden on last slide and vice-versa. Only used when infiniteLoop: false
				 pager: false,							// If true, a pager will be added
				 pagerType: 'full',						// If 'full', a pager link will be generated for each slide. If 'short', a x / y pager will be used (ex. 1/5)
				 controls: true,						// If true, "Next" / "Prev" controls will be added
				 auto: true,							// If true, slides will automatically transition
				 pause: 4000,							// The amount of time (in ms) between each auto transition
				 autoHover: true,						// Auto show will pause when mouse hovers over slider
				 useCSS: false, 						// If true, CSS transitions will be used for animations. False, jQuery animations. Setting to false fixes problem with jQuery 2.1.0 and mode:horizontal
				 slideWidth: 300,
				 minSlides: 1,
				 maxSlides: 4,
				 moveSlides: 1,
				 slideMargin: 20,
			});
			
		}
				
		// Magnific PopUp - responsive lightbox
		// http://dimsemenov.com/plugins/magnific-popup/documentation.html
		
		if(typeof $.fn.magnificPopup != 'undefined'){
		
			$('.magnificPopup').magnificPopup({
				disableOn: 400,
				closeOnContentClick: true,
				type: 'image'
			});
			
			$('.magnificPopup-gallery').magnificPopup({
				disableOn: 400,
				type: 'image',
				gallery: {
					enabled: true
				}
			});
		
		}

		// EasyTabs - tabs plugin
		// https://github.com/JangoSteve/jQuery-EasyTabs/blob/master/README.markdown
		
		if(typeof $.fn.easytabs != 'undefined'){
			
			$('.tabs-container').easytabs({
				animationSpeed: 300,
				updateHash: false
			});
			
			$('.vertical-tabs-container').easytabs({
				animationSpeed: 300,
				updateHash: false
			});
		
		}
		
		// gMap -  embed Google Maps into your website; uses Google Maps v3
		// http://labs.mario.ec/jquery-gmap/
		
		if(typeof $.fn.gMap != 'undefined'){
		
			$(".google-map").each(function() {
				
				var $t = $(this);
				
				var mapZoom = parseInt($t.attr("data-zoom"));
				var mapAddress = $t.attr("data-address");
				var mapCaption = $t.attr("data-caption");
				
				$t.gMap({
					maptype: 'ROADMAP',
					scrollwheel: false,
					zoom: mapZoom,
					markers: [{
							address: mapAddress,
							html: mapCaption,
							popup: false
						}
					]
				});
		
			});
			
		}
		
		// Isotope - portfolio filtering
		// http://isotope.metafizzy.co/beta/
		
		if((typeof $.fn.isotope != 'undefined') && ($(window).width() > 767)){
			
			$('.portfolio-items').imagesLoaded( function() {
			
				var container = $('.portfolio-items');
					
				container.isotope({
					itemSelector: '.item',
					layoutMode: 'masonry',
					transitionDuration: '0.5s'
				});
		
				$('.portfolio-filter li a').click(function () {
					$('.portfolio-filter li a').removeClass('active');
					$(this).addClass('active');
		
					var selector = $(this).attr('data-filter');
					container.isotope({
						filter: selector
					});
		
					return false;
				});
		
				$(window).resize(function () {
		
					container.isotope({ });
				
				});
				
			});
			
		}
		
		// Custom animations - waypoints + animate.css
		// https://github.com/imakewebthings/jquery-waypoints
		// http://daneden.github.io/animate.css/
		
		var animate = true;
					
		if((typeof $.fn.waypoint != 'undefined') && animate){

			$("*[data-animate-delay]").each(function() {
			
				var animationDelay = $(this).attr('data-animate-delay') + 's';
				
				$(this).css('animation-delay', animationDelay);
				$(this).css('-webkit-animation-delay', animationDelay);
				
			});
			
			$("*[data-animation-duration]").each(function() {
			
				var animationDelay = $(this).attr('data-animation-duration') + 's';
				
				$(this).css('animation-duration', animationDelay);
				$(this).css('-webkit-animation-duration', animationDelay);
				
			});

			//

			$('*[data-animate]').css('opacity', '0');
			
			$('*[data-animate]').waypoint(function() {
				
				$(this).css('opacity', '');
				
				var animation = $(this).attr('data-animate');
				
				$(this).addClass("animated " + animation);
				
			}, {
				offset: '95%',
                triggerOnce: true
			});
		
		}
		
		// Charts
		
		if (typeof Chart != 'undefined') {

			// doughnutData
		
			if ($("#canvas-doughnut-data").length > 0) {
		
				var doughnutData = [{
					value: 10,
					color: "#fbdb3b"
				}, {
					value: 50,
					color: "#eefd00"
				}, {
					value: 70,
					color: "#a5ff47"
				}, {
					value: 30,
					color: "#89e96c"
				},{
					value: 30,
					color: "#befea8"
				},{
					value: 50,
					color: "#3f7c2e"
				},{
					value: 30,
					color: "#4ea532"
				},{
					value: 10,
					color: "#51b930"
				},{
					value: 100,
					color: "#74c737"
				}];
		
				var myDoughnut = new Chart(document.getElementById("canvas-doughnut-data").getContext("2d")).Doughnut(doughnutData);
		
			}
			
			// barChartData
		
			if ($('#canvas-bar-chart-data').length > 0) {
		
				var barChartData = {
					labels: [" 1 ", " 2 ", " 3 ", " 4 ", " 5 ", " 6 "],
					datasets: [{
						fillColor: "#8bdc75",
						strokeColor: "#8bdc75",
						data: [30, 50, 40, 60, 90, 75]
					}]
		
				}
		
				var myLine = new Chart(document.getElementById("canvas-bar-chart-data").getContext("2d")).Bar(barChartData);
		
			}
		}

	});
	
/* ==========================================================================
   When the window is scrolled, do
   ========================================================================== */
   	
	$(window).scroll(function () {
							   
		
		
	});

})(window.jQuery);

// non jQuery plugins below

