let map = L.map('map').setView([22.7709, -102.583], 5);


L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
	maxZoom: 20,
	attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
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


circle.bindPopup("I am a circle.");

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