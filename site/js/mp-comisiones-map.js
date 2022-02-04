var map = L.map('map').setView([22.7709, -102.583],5);


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZGF2aWRidWJ1Y29kZWFuZG8iLCJhIjoiY2t6MjVvaXloMTF3bjJwbzZ1MTBkaXI5dSJ9.hrGHsGVN9u4hPJvRw0KUdA'
}).addTo(map);

var circle = L.circle([19.4978, -102.1269], {
	color: '#54BAB9',
	fillColor: '#54BAB9',
	fillOpacity: 0.5,
	radius: 50000
}).addTo(map);


var circle = L.circle([19.4978, -99.1269], {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5,
	radius: 50000
}).addTo(map);


marker.bindPopup("<b>Hello world!</b><br>I am a popup.");
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

var popup = L.popup()
    .setLatLng([19.4978, -102.1269])
    .setContent("I am a standalone popup.")
	.openOn(map);
		

function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

map.on('click', onMapClick);

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);