function createMap(latitude, longitude, zoom) {
	let map = L.map('map').setView([latitude, longitude], zoom);

	L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
	}).addTo(map);

	return map;
}

function deleteMap() {
	let map = document.getElementById('map');
	if(map) {
		map.parentElement.remove();
	}
}

async function fetchMapInfo(url, estado) {
	let allData = await fetchData(url);

	if (!estado) {
		return allData;
	}

	for (const data of allData.records) {
		if (data.fields.nombre_estado.normalized() == estado.normalized()) {
			let fields = data.fields;
			return [{
				latitude: fields.latitud,
				longitude: fields.longitud,
				zoom: fields.zoom
			}]
		}
	}
	console.log(estado);
	throw new Error("Estado no coincide con la base de datos");
}


async function fetchCoordinates(url, dataNames, estado) {
	let data = await fetchData(url);
	let coordinates = {};

	for (const name of dataNames) {
		coordinates[name] = [];
		for (const record of data.records) {
			let fields = record.fields
			if (fields.nombre_estado == estado || estado == "Todos los estados") {
				let latitud = fields[`latitud_${name}`];
				let longitud = fields[`longitud_${name}`];
				coordinates[name].push([latitud, longitud]);
			}
		}
	}

	return coordinates;
}

function addMarkersToMap(map, coordinateObjects, colors) {
	for(const [name, coordinates] of Object.entries(coordinateObjects)) {
		for(const coordinate of coordinates) {
			if (coordinate[0] && coordinate[1])
				L.circleMarker(coordinate, {
					color: colors[name],
					fillColor: colors[name],
    			fillOpacity: 1,
					radius: 5
				}).addTo(map);
		}
	}
}