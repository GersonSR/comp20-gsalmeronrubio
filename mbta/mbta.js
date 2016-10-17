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
if (navigator.geolocation) { 
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
	var South_Station = new google.maps.LatLng(42.352271, -71.05524200000001);
	var Andrew = new google.maps.LatLng(42.330154, -71.057655);
	var Porter_Square = new google.maps.LatLng(42.3884, -71.11914899999999);
	var Harvard_Square = new google.maps.LatLng(42.373362, -71.118956);
	var JFK_UMass = new google.maps.LatLng(42.320685, -71.052391);
	var Savin_Hill = new google.maps.LatLng(42.31129, -71.053331);
	var Park_Street = new google.maps.LatLng(42.35639457, -71.0624242);
	var Broadway = new google.maps.LatLng(42.342622, -71.056967);
	var North_Quincy = new google.maps.LatLng(42.275275, -71.029583);
	var Shawmut = new google.maps.LatLng(42.29312583, -71.06573796000001);
	var Davis = new google.maps.LatLng(42.39674, -71.121815);
	var Alewife = new google.maps.LatLng(42.395428, -71.142483);
	var Kendall_MIT = new google.maps.LatLng(42.36249079, -71.08617653);
	var Charles_MGH = new google.maps.LatLng(42.361166, -71.070628);
	var Downtown_Crossing = new google.maps.LatLng(42.355518, -71.060225);
	var Quincy_Center = new google.maps.LatLng(42.251809, -71.005409);
	var Quincy_Adams = new google.maps.LatLng(42.233391, -71.007153);
	var Ashmont = new google.maps.LatLng(42.284652, -71.06448899999999);
	var Wollaston = new google.maps.LatLng(42.2665139, -71.0203369);
	var Fields_Corner = new google.maps.LatLng(42.300093, -71.061667);
	var Central_Square = new google.maps.LatLng(42.365486, -71.103802);
	var Braintree = new google.maps.LatLng(42.2078543, -71.0011385);

	map.panTo(client);
	
	
	marker = new google.maps.Marker({
		position: client,
		title: "You are here."
	});

	var South_Station_m = new google.maps.Marker({
		position: South_Station,
		title: "South Station"
	});

	var Andrew_m = new google.maps.Marker({
		position: Andrew,
		title: "Andrew"
	});

	var Porter_Square_m = new google.maps.Marker({
		position: Porter_Square,
		title: "Porter Square"
	});

	var Harvard_Square_m = new google.maps.Marker({
		position: Harvard_Square,
		title: "Harvard Square"
	});

	var JFK_UMass_m = new google.maps.Marker({
		position: JFK_UMass,
		title: "JFK/UMass."
	});

	var Savin_Hill_m = new google.maps.Marker({
		position: Savin_Hill,
		title: "Savin Hill."
	});

	var Park_Street_m = new google.maps.Marker({
		position: Park_Street,
		title: "Park Street"
	});

	var Broadway_m = new google.maps.Marker({
		position: Broadway,
		title: "Broadway"
	});

	var North_Quincy_m = new google.maps.Marker({
		position: North_Quincy,
		title: "North Quincy"
	});

	var Shawmut_m = new google.maps.Marker({
		position: Shawmut,
		title: "Shawmut"
	});

	var Davis_m = new google.maps.Marker({
		position: Davis,
		title: "Davis"
	});

	var Alewife_m = new google.maps.Marker({
		position: Alewife,
		title: "Alewife"
	});

	var Kendall_MIT_m = new google.maps.Marker({
		position: Kendall_MIT,
		title: "Kendall/MIT"
	});

	var Charles_MGH_m = new google.maps.Marker({
		position: Charles_MGH,
		title: "Charles/MGH"
	});

	var Downtown_Crossing_m = new google.maps.Marker({
		position: Downtown_Crossing,
		title: "Downtown Crossing"
	});

	var Quincy_Center_m = new google.maps.Marker({
		position: Quincy_Center,
		title: "Quincy Center"
	});

	var Quincy_Adams_m = new google.maps.Marker({
		position: Quincy_Adams,
		title: "Quincy Adams"
	});

	var Ashmont_m = new google.maps.Marker({
		position: Ashmont,
		title: "Ashmont"
	});

	var Wollaston_m = new google.maps.Marker({
		position: Wollaston,
		title: "Wollaston"
	});

	var Fields_Corner_m = new google.maps.Marker({
		position: Fields_Corner,
		title: "Fields Corner"
	});

	var Central_Square_m = new google.maps.Marker({
		position: Central_Square,
		title: "Central Square"
	});

	var Braintree_m = new google.maps.Marker({
		position: Braintree,
		title: "Braintree"
	});

	marker.setMap(map);
	South_Station_m.setMap(map);
	Andrew_m.setMap(map);
	Harvard_Square_m.setMap(map);
	JFK_UMass_m.setMap(map);
	Savin_Hill_m.setMap(map);
	Park_Street_m.setMap(map);
	Broadway_m.setMap(map);
	North_Quincy_m.setMap(map);
	Shawmut_m.setMap(map);
	Davis_m.setMap(map);
	Alewife_m.setMap(map);
	Kendall_MIT_m.setMap(map);
	Charles_MGH_m.setMap(map);
	Downtown_Crossing_m.setMap(map);
	Quincy_Center_m.setMap(map);
	Quincy_Center_m.setMap(map);
	Ashmont_m.setMap(map);
	Wollaston_m.setMap(map);
	Fields_Corner_m.setMap(map);
	Central_Square_m.setMap(map);
	Braintree_m.setMap(map);

				
	google.maps.event.addListener(marker, 'click', function() {
		infowindow.setContent(marker.title);
		infowindow.open(map, marker);
	});
}