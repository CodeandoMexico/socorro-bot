async function mpComisionesMapGenerator(state) {
	let data = await fetchMapInfo(
		url = "https://api.airtable.com/v0/appN9DiiAtnz6UOs5/Estados?sort%5B0%5D%5Bfield%5D=codigo_estado",
		estado = state
	);

	
	if (data.length != 0) {
		createMap(data[0].latitude, data[0].longitude, data[0].zoom);
	} else {
		createMap(data[0].latitude, data[0].longitude, data[0].zoom);
	}

}
