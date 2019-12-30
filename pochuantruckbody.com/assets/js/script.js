var ADAPT_CONFIG = {
	// Where is your CSS?
	path: 'assets/css/',

	// false = Only run once, when page first loads.
	// true = Change on window resize and page tilt.
	dynamic: true,

	// Optional callback... myCallback(i, width)
	callback: myCallback,

	// First range entry is the minimum.
	// Last range entry is the maximum.
	// Separate ranges by "to" keyword.
	range: [
	'0px    to 760px  = mobile.css',
	'760px  to 980px  = 720.css',
	'980px  to 1280px = 960.css',
	'1280px to 1600px = 1200.css',
	'1600px to 1920px = 1560.css',
	'1940px to 2540px = 1920.css',
	'2540px           = 2520.css'
	]
};

/* Google Maps Initialize */
function initialize() {
	var map_canvas = document.getElementById('map_canvas');
	var map_options = {
		center: new google.maps.LatLng(14.636788, 120.967877),
		zoom: 16,
		mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(map_canvas, map_options)
}

google.maps.event.addDomListener(window, 'load', initialize);


/* New Popup Windows */
function newPopup(url, w, h) {
	var left = (screen.width/2)-(w/2);
	var top = (screen.height/2)-(h/2);
    popupWindow = window.open(
        url,'popUpWindow','height=' + h + ',width=' + w + ',left=' + left + ',top=' + top + ',resizable=yes,scrollbars=no,toolbar=no,menubar=no,location=no,directories=no,status=yes')
}

/* Adapt.js Config */
function myCallback(i, width) {
	// Replace HTML tag's ID.
	document.documentElement.id = 'range_' + i;

	// Note: Not making use of width here, but I'm sure
	// you could think of an interesting way to use it.
}




