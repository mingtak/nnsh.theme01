(function($) {
 "use strict"
 
 //Page Preloader
$(window).load(function() {
	$("#intro").delay(300).fadeOut();
	$(".animationload").delay(600).fadeOut("slow");
});

// FitDiv
	$("body").fitVids();

// Tooltips 
    $('.social, .media_element, .bs-example-tooltips').tooltip({
      selector: "[data-toggle=tooltip]",
      container: "body"
    })
	  
// DM Menu
	jQuery('.header').affix({
		offset: { top: $('.header').offset().top }
	});

// Menu drop down effect
	$('.dropdown-toggle').dropdownHover().dropdown();
		$(document).on('click', '.fhmm .dropdown-menu', function(e) {
		  e.stopPropagation()
	})

//pretty photo
jQuery(document).ready(function(){
        jQuery("a[rel^='prettyPhoto']").prettyPhoto({animationSpeed:'slow',theme:'dark_rounded',slideshow:false,overlay_gallery: false,social_tools:false,deeplinking:false});
});  

		
// Fun Facts
	function count($this){
		var current = parseInt($this.html(), 10);
		current = current + 1; /* Where 50 is increment */
		
		$this.html(++current);
			if(current > $this.data('count')){
				$this.html($this.data('count'));
			} else {    
				setTimeout(function(){count($this)}, 50);
			}
		}        
		
		$(".stat-count").each(function() {
		  $(this).data('count', parseInt($(this).html(), 10));
		  $(this).html('0');
		  count($(this));
	});

//Parallax
$(window).bind('load', function() {
	parallaxInit();
});

function parallaxInit() {
	$('#one-parallax').parallax("30%", 0.1);
	$('#two-parallax').parallax("30%", 0.1);
	$('#three-parallax').parallax("30%", 0.1);
	$('#four-parallax').parallax("30%", 0.1);
}

		
// Search
	var $ctsearch = $( '#dmsearch' ),
		$ctsearchinput = $ctsearch.find('input.dmsearch-input'),
		$body = $('html,body'),
		openSearch = function() {
			$ctsearch.data('open',true).addClass('dmsearch-open');
			$ctsearchinput.focus();
			return false;
		},
		closeSearch = function() {
			$ctsearch.data('open',false).removeClass('dmsearch-open');
		};

	$ctsearchinput.on('click',function(e) { e.stopPropagation(); $ctsearch.data('open',true); });

	$ctsearch.on('click',function(e) {
		e.stopPropagation();
		if( !$ctsearch.data('open') ) {

			openSearch();

			$body.off( 'click' ).on( 'click', function(e) {
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

	// Selector 
	$(window).on('load', function () {
		$('.selectpicker').selectpicker({
			'selectedText': 'cat'
		});
	});

	// Back to Top
	 jQuery(window).scroll(function(){
		if (jQuery(this).scrollTop() > 1) {
				jQuery('.dmtop').css({bottom:"25px"});
			} else {
				jQuery('.dmtop').css({bottom:"-100px"});
			}
		});
		jQuery('.dmtop').click(function(){
			jQuery('html, body').animate({scrollTop: '0px'}, 800);
			return false;
	});
		
})(jQuery);