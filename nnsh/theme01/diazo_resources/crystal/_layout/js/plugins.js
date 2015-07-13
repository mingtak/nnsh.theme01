(function($){

	"use strict";

/* ==========================================================================
   When document is ready, do
   ========================================================================== */
   
	$(document).ready(function(){

		// sticky header
		// http://imakewebthings.com/jquery-waypoints/shortcuts/sticky-elements/	
	
		var stickyHeader = false;
		
		if ($('body').hasClass('sticky-header')){
			stickyHeader = true;
		}
		
		if((typeof $.fn.waypoint != 'undefined') && stickyHeader && ($(window).width() > 1024)){ 
		
			$('#header').waypoint('sticky', {
			  wrapper: '<div class="sticky-wrapper" />',
			  stuckClass: 'stuck',
			  offset: -250
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
				speed: 100,
				cssArrows: true
			});
			
		}
		
		// Revolution Slider
		
		if(typeof $.fn.revolution != 'undefined'){
			
			$('.fullwidthbanner').revolution({
				 delay:9000,
				 startwidth:1170,
				 startheight:680,
				 autoHeight:"off",
				 fullScreenAlignForce:"off",
		 
				 onHoverStop:"on",
		 
				 thumbWidth:100,
				 thumbHeight:50,
				 thumbAmount:3,
		 
				 hideThumbsOnMobile:"off",
				 hideBulletsOnMobile:"off",
				 hideArrowsOnMobile:"off",
				 hideThumbsUnderResoluition:0,
		 
				 hideThumbs:0,
				 hideTimerBar:"off",
		 
				 keyboardNavigation:"on",
		 
				 navigationType:"bullet",
				 navigationArrows:"solo",
				 navigationStyle:"round",
		 
				 navigationHAlign:"center",
				 navigationVAlign:"bottom",
				 navigationHOffset:0,
				 navigationVOffset:30,
		 
				 soloArrowLeftHalign:"left",
				 soloArrowLeftValign:"center",
				 soloArrowLeftHOffset:30,
				 soloArrowLeftVOffset:0,
		 
				 soloArrowRightHalign:"right",
				 soloArrowRightValign:"center",
				 soloArrowRightHOffset:30,
				 soloArrowRightVOffset:0,
		 
		 
				 touchenabled:"off",
				 swipe_velocity:"0.7",
				 swipe_max_touches:"1",
				 swipe_min_touches:"1",
				 drag_block_vertical:"false",
		 
				 stopAtSlide:-1,
				 stopAfterLoops:-1,
				 hideCaptionAtLimit:0,
				 hideAllCaptionAtLilmit:0,
				 hideSliderAtLimit:0,
		 
				 dottedOverlay:"none",
		 
				 fullWidth:"off",
				 forceFullWidth:"off",
				 fullScreen:"off",
				 fullScreenOffsetContainer:"#topheader-to-offset",
		 
				 shadow:0
			});
			
			$('.fullwidthbanner-2').revolution({
				 delay:9000,
				 startwidth:1170,
				 startheight:680,
				 autoHeight:"off",
				 fullScreenAlignForce:"off",
		 
				 onHoverStop:"on",
		 
				 thumbWidth:100,
				 thumbHeight:50,
				 thumbAmount:3,
		 
				 hideThumbsOnMobile:"off",
				 hideBulletsOnMobile:"off",
				 hideArrowsOnMobile:"off",
				 hideThumbsUnderResoluition:0,
		 
				 hideThumbs:0,
				 hideTimerBar:"off",
		 
				 keyboardNavigation:"on",
		 
				 navigationType:"bullet",
				 navigationArrows:"solo",
				 navigationStyle:"round",
		 
				 navigationHAlign:"center",
				 navigationVAlign:"bottom",
				 navigationHOffset:0,
				 navigationVOffset:20,
		 
				 soloArrowLeftHalign:"left",
				 soloArrowLeftValign:"center",
				 soloArrowLeftHOffset:20,
				 soloArrowLeftVOffset:0,
		 
				 soloArrowRightHalign:"right",
				 soloArrowRightValign:"center",
				 soloArrowRightHOffset:20,
				 soloArrowRightVOffset:0,
		 
		 
				 touchenabled:"off",
				 swipe_velocity:"0.7",
				 swipe_max_touches:"1",
				 swipe_min_touches:"1",
				 drag_block_vertical:"false",
		 
				 stopAtSlide:-1,
				 stopAfterLoops:-1,
				 hideCaptionAtLimit:0,
				 hideAllCaptionAtLilmit:0,
				 hideSliderAtLimit:0,
		 
				 dottedOverlay:"none",
		 
				 fullWidth:"off",
				 forceFullWidth:"off",
				 fullScreen:"off",
				 fullScreenOffsetContainer:"#topheader-to-offset",
		 
				 shadow:0
			});
				
		}
		
		// bxSlider - responsive slider
		// http://bxslider.com/options
		
		if(typeof $.fn.bxSlider != 'undefined'){
			
			// Process Description slider
			
			var process_description = $('.process-description .slides').bxSlider({
				 mode: 'fade',							// Type of transition between slides: 'horizontal', 'vertical', 'fade'		
				 speed: 500,							// Slide transition duration (in ms)
				 infiniteLoop: true,					// If true, clicking "Next" while on the last slide will transition to the first slide and vice-versa.
				 hideControlOnEnd: false,				// If true, "Next" control will be hidden on last slide and vice-versa. Only used when infiniteLoop: false
				 pager: false,							// If true, a pager will be added
				 pagerType: 'full',						// If 'full', a pager link will be generated for each slide. If 'short', a x / y pager will be used (ex. 1/5)
				 controls: false,						// If true, "Next" / "Prev" controls will be added
				 auto: false,							// If true, slides will automatically transition
				 pause: 4000,							// The amount of time (in ms) between each auto transition
				 autoHover: true,						// Auto show will pause when mouse hovers over slider
				 useCSS: false 							// If true, CSS transitions will be used for animations. False, jQuery animations. Setting to false fixes problem with jQuery 2.1.0 and mode:horizontal
			});
			
			$('.process-builder li a').each(function() {
				
				$(this).click(function() {
					
					var x = $(this).attr("data-slide");
					
					$('.process-builder li a').removeClass('active');
					$(this).addClass('active');
					
					process_description.goToSlide(x-1);
					return false;

				});
                
            });
			
			$('.portfolio-slider .slides').bxSlider({
				 mode: 'horizontal',					// Type of transition between slides: 'horizontal', 'vertical', 'fade'		
				 speed: 500,							// Slide transition duration (in ms)
				 infiniteLoop: true,					// If true, clicking "Next" while on the last slide will transition to the first slide and vice-versa.
				 hideControlOnEnd: false,				// If true, "Next" control will be hidden on last slide and vice-versa. Only used when infiniteLoop: false
				 pager: true,							// If true, a pager will be added
				 pagerType: 'full',						// If 'full', a pager link will be generated for each slide. If 'short', a x / y pager will be used (ex. 1/5)
				 controls: false,						// If true, "Next" / "Prev" controls will be added
				 auto: false,							// If true, slides will automatically transition
				 pause: 4000,							// The amount of time (in ms) between each auto transition
				 autoHover: true,						// Auto show will pause when mouse hovers over slider
				 useCSS: false 							// If true, CSS transitions will be used for animations. False, jQuery animations. Setting to false fixes problem with jQuery 2.1.0 and mode:horizontal
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
		
		if (typeof $.fn.isotope != 'undefined') {
			
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
		
		//

	});
	
/* ==========================================================================
   When the window is scrolled, do
   ========================================================================== */
   	
	$(window).scroll(function () {
	
		
		
	});

})(window.jQuery);

// non jQuery plugins below

