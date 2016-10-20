var Lat = 0;
var Lng = 0;

var request
function loadRedLine() {
	request = new XMLHttpRequest();
	request.open("get", "https://rocky-taiga-26352.herokuapp.com/redline.json", true);
	request.onreadystatechange = function schedule () {
		if (request.readyState == 4 && request.status == 200) {
			data = request.responseText;
			RedLine = JSON.parse(data);
//			console.log("DATA SET")
		}
		else if (request.readyState == 4 && request.status != 200) {
			loadRedLine();
		}
	}
	request.send(null);
}


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
	loadRedLine();
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

function station_content(station_marker) {
	var newHTML = "";
	newHTML = '<p>' + station_marker.title + '</p>';
	for(var count = 0; count < 	RedLine["TripList"]["Trips"].length; count++) {
		var Trips = RedLine["TripList"]["Trips"];
		for(var T_count = 0; T_count < Trips[count].Predictions.length; T_count++) {
			var Stops = Trips[count].Predictions;
			if(Stops[T_count].Stop == station_marker.title) {
				var time = Stops[T_count].Seconds ;
				var time = time / 60;
				if (time < 1) {
					newHTML += '<p>' + "A Train is coming in: " + Stops[T_count].Seconds + " Seconds" + '</p>';
				}
				else {
					newHTML += '<p>' + "A Train is coming in: " + Math.round(time) + " Minutes" + '</p>';
				}
			}
		}
	}
	station_marker.content = newHTML;
}

function renderMap() {

	var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';

	client = new google.maps.LatLng(Lat, Lng);

	var South_Station_m = new google.maps.Marker({
		position: new google.maps.LatLng(42.352271, -71.05524200000001),
		title: "South Station",
		content: "",
		icon: 'tstop.png'
	});

	var Andrew_m = new google.maps.Marker({
		position: new google.maps.LatLng(42.330154, -71.057655),
		title: "Andrew",
		content: "",
		icon: 'tstop.png'
	});	
	var Porter_Square_m = new google.maps.Marker({
		position: new google.maps.LatLng(42.3884, -71.11914899999999),
		title: "Porter Square",
		content: "",
		icon: 'tstop.png'
	});	
	var Harvard_Square_m = new google.maps.Marker({
		position: new google.maps.LatLng(42.373362, -71.118956),
		title: "Harvard Square",
		content: "",
		icon: 'tstop.png'
	});	
	var JFK_UMass_m = new google.maps.Marker({
		position: new google.maps.LatLng(42.320685, -71.052391),
		title: "JFK/UMass",
		content: "",
		icon: 'tstop.png'
	});	
	var Savin_Hill_m = new google.maps.Marker({
		position: new google.maps.LatLng(42.31129, -71.053331),
		title: "Savin Hill",
		content: "",
		icon: 'tstop.png'
	});	
	var Park_Street_m = new google.maps.Marker({
		position: new google.maps.LatLng(42.35639457, -71.0624242),
		title: "Park Street",
		content: "",
		icon: 'tstop.png'
	});	

	var Broadway_m = new google.maps.Marker({
		position: new google.maps.LatLng(42.342622, -71.056967),
		title: "Broadway",
		content: "",
		icon: 'tstop.png'
	});	

	var North_Quincy_m = new google.maps.Marker({
		position: new google.maps.LatLng(42.275275, -71.029583),
		title: "North Quincy",
		content: "",
		icon: 'tstop.png'
	});	

	var Shawmut_m = new google.maps.Marker({
		position: new google.maps.LatLng(42.29312583, -71.06573796000001),
		title: "Shawmut",
		content: "",
		icon: 'tstop.png'
	});	

	var Davis_m = new google.maps.Marker({
		position:  new google.maps.LatLng(42.39674, -71.121815),
		title: "Davis",
		content: "",
		icon: 'tstop.png'
	});
	
	var Alewife_m = new google.maps.Marker({
		position:   new google.maps.LatLng(42.395428, -71.142483),
		title: "Alewife",
		content: "",
		icon: 'tstop.png'
	});

	var Kendall_MIT_m = new google.maps.Marker({
		position:   new google.maps.LatLng(42.36249079, -71.08617653),
		title: "Kendall/MIT",
		content: "",
		icon: 'tstop.png'
	});
	
	var Charles_MGH_m = new google.maps.Marker({
		position: new google.maps.LatLng(42.361166, -71.070628),
		title: "Charles/MGH",
		content: "",
		icon: 'tstop.png'
	});

	var Downtown_Crossing_m = new google.maps.Marker({
		position:  new google.maps.LatLng(42.355518, -71.060225),
		title: "Downtown Crossing",
		content: "",
		icon: 'tstop.png'
	});

	var Quincy_Center_m = new google.maps.Marker({
		position:  new google.maps.LatLng(42.251809, -71.005409),
		title: "Quincy Center",
		content: "",
		icon: 'tstop.png'
	});

	var Quincy_Adams_m = new google.maps.Marker({
		position: new google.maps.LatLng(42.233391, -71.007153),
		title: "Quincy Adams",
		content: "",
		icon: 'tstop.png'
	});

	var Ashmont_m = new google.maps.Marker({
		position: new google.maps.LatLng(42.284652, -71.06448899999999),
		title: "Ashmont",
		content: "",
		icon: 'tstop.png'
	});

	var Wollaston_m = new google.maps.Marker({
		position: new google.maps.LatLng(42.2665139, -71.0203369),
		title: "Wollaston",
		content: "",
		icon: 'tstop.png'
	});

	var Fields_Corner_m = new google.maps.Marker({
		position:  new google.maps.LatLng(42.300093, -71.061667),
		title: "Fields Corner",
		content: "",
		icon: 'tstop.png'
	});

 	var Central_Square_m = new google.maps.Marker({
		position: new google.maps.LatLng(42.365486, -71.103802),
		title: "Central Square",
		content: "",
		icon: 'tstop.png'
	});

	var Braintree_m = new google.maps.Marker({
		position:  new google.maps.LatLng(42.2078543, -71.0011385),
		title: "Braintree",
		content: "",
		icon: 'tstop.png'
	});  

	marker = new google.maps.Marker({
		position: client,
		title: "You are here",
		content: "",
		icon: 'here.png'
	});


	map.panTo(client);
	
	
	var StationCoords = [
	Alewife_m.position,
	Davis_m.position,
	Porter_Square_m.position,
	Harvard_Square_m.position,
	Central_Square_m.position,
	Kendall_MIT_m.position,
	Charles_MGH_m.position,
	Park_Street_m.position,
	Downtown_Crossing_m.position,
	South_Station_m.position,
	Broadway_m.position,
	Andrew_m.position,
	JFK_UMass_m.position,
	North_Quincy_m.position,
	Wollaston_m.position,
	Quincy_Center_m.position,
	Quincy_Adams_m.position,
	Braintree_m.position
 	];

 	var StationCoords2 = [
	JFK_UMass_m.position,
	Savin_Hill_m.position,
	Fields_Corner_m.position,
	Shawmut_m.position,
	Ashmont_m.position,
 	];

	var StationMarkers = [
	South_Station_m,
	Andrew_m,
	Porter_Square_m,
	Harvard_Square_m,
	JFK_UMass_m,
	Savin_Hill_m,
	Park_Street_m,
	Broadway_m,
	North_Quincy_m,
	Shawmut_m,
	Davis_m,
	Alewife_m,
	Kendall_MIT_m,
	Charles_MGH_m,
	Downtown_Crossing_m,
	Quincy_Center_m,
	Quincy_Adams_m,
	Ashmont_m,
	Wollaston_m,
	Fields_Corner_m,
	Central_Square_m,
	Braintree_m
 	];

	marker.setMap(map);	
	for(var a = 0; a < StationMarkers.length; a++){
		StationMarkers[a].setMap(map);
	}

	var closest_stop;
	var closest_distance = 0;
	var closest_stop_name;

	function toRad(x) {
    	return x * Math.PI / 180;
	}

	for(var j = 0; j < StationMarkers.length; j++) {
  		var lon1 = client.lng();
  		var lat1 = client.lat();

  		var lon2 = StationMarkers[j].position.lng();
  		var lat2 = StationMarkers[j].position.lat();

	  	var R = 6371; // km

  		var x1 = lat2 - lat1;
  		var dLat = toRad(x1);
  		var x2 = lon2 - lon1;
  		var dLon = toRad(x2)
  		var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    		Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    		Math.sin(dLon / 2) * Math.sin(dLon / 2);
  		var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  		var d = R * c;

  		d = d * 0.62137;

		if (j == 0) {
			closest_distance =  d;
			closest_stop = StationMarkers[j];
			closest_stop_name = StationMarkers[j].title;
		}
		else if (closest_distance > d) {
			closest_distance = d;
			closest_stop = StationMarkers[j]
			closest_stop_name = StationMarkers[j].title;	
		}
	}

  	var flightPath = new google.maps.Polyline({
    	path: StationCoords,
    	geodesic: true,
    	strokeColor: '#FF0000',
    	strokeOpacity: 1.0,
    	strokeWeight: 2
  	});

  	var flightPath2 = new google.maps.Polyline({
    	path: StationCoords2,
    	geodesic: true,
    	strokeColor: '#FF0000',
    	strokeOpacity: 1.0,
    	strokeWeight: 2
  	});

  	var closest_station = [
  		client,
  		closest_stop.position,
  	]; 

  	var closestPath = new google.maps.Polyline({
    	path: closest_station,
    	geodesic: true,
    	strokeColor: '#FF0000',
    	strokeOpacity: 1.0,
    	strokeWeight: 2
  	});

  	closestPath.setMap(map);
	flightPath.setMap(map);
	flightPath2.setMap(map);

	marker.content = '<p>' + marker.title + ' </p>' +
	'<p>' + "Closest Stations is: " + closest_stop_name + ' </p>' +
	'<p>' + closest_distance + " Miles Away" + ' </p>';

	google.maps.event.addListener(marker, 'click', function() {
		infowindow.setContent(marker.content);
		infowindow.open(map, marker);
	});

	google.maps.event.addListener(Davis_m, 'click', function() {
		station_content(Davis_m);
		infowindow.setContent(Davis_m.content);
		infowindow.open(map, Davis_m);
	});

	google.maps.event.addListener(South_Station_m, 'click', function() {
		station_content(South_Station_m);
		infowindow.setContent(South_Station_m.content);
		infowindow.open(map, South_Station_m);
	});
	google.maps.event.addListener(Andrew_m, 'click', function() {
		station_content(Andrew_m);
		infowindow.setContent(Andrew_m.content);
		infowindow.open(map, Andrew_m);
	});

	google.maps.event.addListener(Porter_Square_m, 'click', function() {
		station_content(Porter_Square_m);
		infowindow.setContent(Porter_Square_m.content);
		infowindow.open(map, Porter_Square_m);
	});

	google.maps.event.addListener(Harvard_Square_m, 'click', function() {
		station_content(Harvard_Square_m);
		infowindow.setContent(Harvard_Square_m.content);
		infowindow.open(map, Harvard_Square_m);
	});

	google.maps.event.addListener(JFK_UMass_m, 'click', function() {
		station_content(JFK_UMass_m);
		infowindow.setContent(JFK_UMass_m.content);
		infowindow.open(map, JFK_UMass_m);
	});

	google.maps.event.addListener(Savin_Hill_m, 'click', function() {
		station_content(Savin_Hill_m);
		infowindow.setContent(Savin_Hill_m.content);
		infowindow.open(map, Savin_Hill_m);
	});

	google.maps.event.addListener(Park_Street_m, 'click', function() {
		station_content(Park_Street_m);
		infowindow.setContent(Park_Street_m.content);
		infowindow.open(map, Park_Street_m);
	});

	google.maps.event.addListener(Broadway_m, 'click', function() {
		station_content(Broadway_m);
		infowindow.setContent(Broadway_m.content);
		infowindow.open(map, Broadway_m);
	});

	google.maps.event.addListener(North_Quincy_m, 'click', function() {
		station_content(North_Quincy_m);
		infowindow.setContent(North_Quincy_m.content);
		infowindow.open(map, North_Quincy_m);
	});

	google.maps.event.addListener(Shawmut_m, 'click', function() {
		station_content(Shawmut_m);
		infowindow.setContent(Shawmut_m.content);
		infowindow.open(map, Shawmut_m);
	});

	google.maps.event.addListener(Alewife_m, 'click', function() {
		station_content(Alewife_m);
		infowindow.setContent(Alewife_m.content);
		infowindow.open(map, Alewife_m);
	});

	google.maps.event.addListener(Kendall_MIT_m, 'click', function() {
		station_content(Kendall_MIT_m);
		infowindow.setContent(Kendall_MIT_m.content);
		infowindow.open(map, Kendall_MIT_m);
	});

	google.maps.event.addListener(Charles_MGH_m, 'click', function() {
		station_content(Charles_MGH_m);
		infowindow.setContent(Charles_MGH_m.content);
		infowindow.open(map, Charles_MGH_m);
	});

	google.maps.event.addListener(Downtown_Crossing_m, 'click', function() {
		station_content(Downtown_Crossing_m);
		infowindow.setContent(Downtown_Crossing_m.content);
		infowindow.open(map, Downtown_Crossing_m);
	});

	google.maps.event.addListener(Quincy_Center_m, 'click', function() {
		station_content(Quincy_Center_m);
		infowindow.setContent(Quincy_Center_m.content);
		infowindow.open(map, Quincy_Center_m);
	});

	google.maps.event.addListener(Quincy_Adams_m, 'click', function() {
		station_content(Quincy_Adams_m);
		infowindow.setContent(Quincy_Adams_m.content);
		infowindow.open(map, Quincy_Adams_m);
	});

	google.maps.event.addListener(Ashmont_m, 'click', function() {
		station_content(Ashmont_m);
		infowindow.setContent(Ashmont_m.content);
		infowindow.open(map, Ashmont_m);
	});

	google.maps.event.addListener(Wollaston_m, 'click', function() {
		station_content(Wollaston_m);
		infowindow.setContent(Wollaston_m.content);
		infowindow.open(map, Wollaston_m);
	});

	google.maps.event.addListener(Fields_Corner_m, 'click', function() {
		station_content(Fields_Corner_m);
		infowindow.setContent(Fields_Corner_m.content);
		infowindow.open(map, Fields_Corner_m);
	});

	google.maps.event.addListener(Central_Square_m, 'click', function() {
		station_content(Central_Square_m);
		infowindow.setContent(Central_Square_m.content);
		infowindow.open(map, Central_Square_m);
	});

	google.maps.event.addListener(Braintree_m, 'click', function() {
		station_content(Braintree_m);
		infowindow.setContent(Braintree_m.content);
		infowindow.open(map, Braintree_m);
	});
}