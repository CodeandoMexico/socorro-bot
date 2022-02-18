async function mpComisionesMapGenerator(state) {
	let data = await fetchMapInfo(
		url = "https://api.airtable.com/v0/appN9DiiAtnz6UOs5/Estados?sort%5B0%5D%5Bfield%5D=codigo_estado",
		estado = state
	);
	
	let map;
	map = createMap(data[0].latitude, data[0].longitude, data[0].zoom);

	let coordinates = await fetchCoordinates(
		url = "https://api.airtable.com/v0/appN9DiiAtnz6UOs5/Todo",
		dataNames = ["comision", "fiscalia"],
		estado = state
	);

	addMarkersToMap(
		map,
		coordinates,
		{
			"comision": "#03045E",
			"fiscalia": "#DD4A48"
		},
		state
	);

}
