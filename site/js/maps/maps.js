function createMap(latitude, longitude, zoom) {
	let map = L.map('map').setView([latitude, longitude], zoom);

	L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
	}).addTo(map);
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

	throw new Error("Estado no coincide con la base de datos");
}