/* global jQuery:false */
/* Isotope init */
var curIsotopeFilter = '*';
var curIsotopePage = '';
jQuery(document).ready(function() {
	"use strict";
	var portfolioItems = jQuery('.portfolio_items');
	if (portfolioItems.length > 0) {
		jQuery('#portfolio_iso_filters a').each(function(){
			if (jQuery(this).hasClass('current')) {
				curIsotopeFilter = jQuery(this).attr('data-filter');
			}
		});
		
		pagesBuild();
		
		portfolioItems.isotope({ 
				itemSelector: 'article',
				transformsEnabled : true,
				duration: 750,
				resizable: true,
				resizesContainer: true,
				layoutMode: 'fitRows',
				filter: getIsotopeFilter()
			});
		//jQuery('.portfolio_items').css('height', '220px').find('article').css('transform' ,'none');
		jQuery('#portfolio_iso_filters a').click(function(){
			curIsotopeFilter = jQuery(this).attr('data-filter');
			pagesClear();
			pagesBuild();
			portfolioItems.isotope({ filter: getIsotopeFilter() });
			jQuery(this).parents('#portfolio_iso_filters').find('a').removeClass('current');
			jQuery(this).addClass('current');
			return false;
		});
		jQuery('#portfolio_iso_pages').on('click', 'li a', function(){
			var selector = jQuery(this).attr('data-filter');
			curIsotopePage = selector;
			jQuery('#portfolio_iso_pages_current').html(selector.substr(selector.lastIndexOf('_')+1));
			portfolioItems.isotope({ filter: getIsotopeFilter() });
			jQuery(this).parents('#portfolio_iso_pages').find('a').removeClass('current');
			jQuery(this).addClass('current');
			return false;
		});
	}
});

function getIsotopeFilter() {
	"use strict";
	var flt = curIsotopeFilter!=='*' ? curIsotopeFilter : '';
	flt += curIsotopePage!=='' ? ((flt!=='' ? '' : '') + curIsotopePage) : '';
	//flt='' ? '*' : '';
	return flt;
}
function pagesBuild() {
	"use strict";
	var selector = '.portfolio_items article'+(curIsotopeFilter!=='*' ? curIsotopeFilter : '');
	var items = jQuery(selector);
	var total = items.length;
	jQuery(".portfolio_iso_pages").hide();
	if (total > ppp) {
		var pagesTotal = Math.ceil(total/ppp);
		var pagesList = '<li class="pager_pages"><span>Page <strong id="portfolio_iso_pages_current">1</strong> of <strong id="portfolio_iso_pages_total">'+pagesTotal+'</strong></span></li>';
		for (var i=1; i<=pagesTotal; i++) {
			pagesList += '<li><a href="#" data-filter=".page_' + i + '"' + (i===1 ? ' class="current"' : '') + '>' + i + '</a></li>';
		}
		items.each(function(idx, obj) {
			var pg = Math.floor(idx/ppp)+1;
			jQuery(obj).attr('data-page', pg).addClass('page_'+pg);
		});
		jQuery(".portfolio_iso_pages").show();
		jQuery("#portfolio_iso_pages").html(pagesList);
		curIsotopePage = '.page_1';
	}
}
function pagesClear() {
	"use strict";
	jQuery('.portfolio_items article').each(function (idx, obj) {
		var pg = jQuery(obj).attr('data-page');
		if (pg > 0) {
			jQuery(obj).attr('data-page', '').removeClass('page_'+pg);
		}
	});
	jQuery(".portfolio_iso_pages").hide();
	curIsotopePage = '';
}
