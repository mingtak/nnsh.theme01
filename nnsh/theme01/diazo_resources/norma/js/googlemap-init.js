// Init Google map
var googlemap_init_obj = {
	map: null,
	dom: null,
	opt: null,
	address: null,
	latlng: null,
	point: null,
	description: null
}
function googlemap_init(dom_obj, coords, description, point) {
	if (coords.latlng!=='') {
		var latlngStr = coords.latlng.split(',');
		var lat = parseFloat(latlngStr[0]);
		var lng = parseFloat(latlngStr[1]);
		var latlng = new google.maps.LatLng(lat, lng);
	} else
		var latlng = new google.maps.LatLng(0, 0);
	googlemap_init_obj.dom = dom_obj;
	googlemap_init_obj.point = point;
	googlemap_init_obj.description = description;
	googlemap_init_obj.opt = {
		zoom: coords.zoom,
		center: latlng,
		scrollwheel: true,
		scaleControl: false,
		disableDefaultUI: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var custom_map = new google.maps.Geocoder();
	
	custom_map.geocode(coords.latlng!=='' ? {'latLng': latlng} : {"address": coords.address}, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			googlemap_init_obj.address = results[0].geometry.location;
			googlemap_create();
		} else
			alert(GEOCODE_ERROR + ' ' + status);
	});
	jQuery(window).resize(function() {
		if (googlemap_init_obj.map) googlemap_init_obj.map.setCenter(googlemap_init_obj.address);
	});
}

function googlemap_create() {
	if (!googlemap_init_obj.address) return false;
	googlemap_init_obj.map = new google.maps.Map(googlemap_init_obj.dom, googlemap_init_obj.opt);
	googlemap_init_obj.map.setCenter(googlemap_init_obj.address);
	var marker = new google.maps.Marker({
		map: googlemap_init_obj.map,
		icon: googlemap_init_obj.point,
		position: googlemap_init_obj.map.getCenter()
	});
	var infowindow = new google.maps.InfoWindow({
		content: googlemap_init_obj.description
	});
	google.maps.event.addListener(marker, "click", function() {
		infowindow.open(googlemap_init_obj.map, marker);
	});
}

function googlemap_refresh() {
	googlemap_create();	
}
