var Lat = 0;
var Lng = 0;
var request = new XMLHttpRequest();
var client = new google.maps.LatLng(Lat, Lng);

var mapOptions = {
	zoom: 15,
	center: client,
	mapTypeId: google.maps.MapTypeId.ROADMAP
};

var map;
var marker;
var infowindow = new google.maps.InfoWindow();
		
function init() {
	map = new google.maps.Map(document.getElementById("google_map"), mapOptions);
	getMyLocation();
}

function getMyLocation() {
if (navigator.geolocation) { // the navigator.geolocation object is supported on your browser
	navigator.geolocation.getCurrentPosition(function(position) {
		Lat = position.coords.latitude;
		Lng = position.coords.longitude;
		renderMap();
	});
}
else {
		alert("Geolocation is not supported by your web browser.  What a shame!");
	}
}

function renderMap() {
	client = new google.maps.LatLng(Lat, Lng);
	// Update map and go there...
	map.panTo(client);
	
	// Create a marker
	marker = new google.maps.Marker({
		position: client,
		title: "MAP DATA HERE"
	});

	marker.setMap(map);
				
	// Open info window on click of marker
	google.maps.event.addListener(marker, 'click', function() {
		infowindow.setContent(marker.title);
		infowindow.open(map, marker);
	});
}