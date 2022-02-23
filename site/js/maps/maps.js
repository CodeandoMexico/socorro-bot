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
	let docs = []

	for (const data of allData.records) {
		if (data.fields.nombre_estado.normalized() == estado.normalized() || !estado) {
			let fields = data.fields;
			docs.push(fields);
		}
	}
	
	if(!docs) throw new Error("Estado no coincide con la base de datos");

	return docs;
}

async function fetchDocs(url, state) {
	let data = await fetchData(url);
	let docs = [];
	for(const record of data.records) {
		let fields = record.fields;
		if(fields.nombre_estado == state || state == "Todos los estados") {
			docs.push(fields);
		}
	}

	return docs;
}

function addMarkersToMap(map, docs, currentInclude) {
	
	for (const [index, doc] of docs.entries()) {
		let properties      = currentInclude.mapProperties,
				entityTableName = properties.entityTableName,
				entityName      = properties.entityName,
				latitude        = doc[`latitud_${properties.entityTableName}`],
				longitude       = doc[`longitud_${properties.entityTableName}`],
				instituteName   = doc[entityTableName],
				phoneNumber     = doc[`telefono_${entityTableName}`],
				address         = doc[`direccion_${entityTableName}`],
				color           = properties.color,
				state           = doc[`nombre_estado`];
		
		if(latitude && longitude) {
			L.circleMarker([latitude, longitude], {
				color: color,
				fillColor: color,
				fillOpacity: 1,
				radius: 5
			}).bindPopup(`
			<b>${entityName}</b> - <b>${state}</b><br>
			<b>${instituteName}</b><br>
			<b>Teléfono(s):</b> ${phoneNumber}<br>
			<b>Dirección:</b> ${address}<br>
			`).addTo(map);
		}
	}
}


async function MapGenerator(includes) {
	let state = includes[0].state;
	let data = await fetchMapInfo(
		url = "https://api.airtable.com/v0/appN9DiiAtnz6UOs5/Estados?sort%5B0%5D%5Bfield%5D=codigo_estado",
		estado = state
	);
	
	let map = createMap(data[0].latitud, data[0].longitud, data[0].zoom);

	for(const [index, include] of includes.entries()) {
		let docs = await fetchDocs(
			url = include.url,
			state = state
		);

		addMarkersToMap(
			map = map,
			docs = docs,
			currentInclude = include
		);
	}
}