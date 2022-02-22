// async function mpComisionesMapGenerator(includes) {
// 	let state = includes[0].state;
// 	let data = await fetchMapInfo(
// 		url = "https://api.airtable.com/v0/appN9DiiAtnz6UOs5/Estados?sort%5B0%5D%5Bfield%5D=codigo_estado",
// 		estado = state
// 	);
	
// 	let map;
// 	map = createMap(data[0].latitude, data[0].longitude, data[0].zoom);

// 	for(const [index, include] of includes.entries()) {
// 		let coordinates = await fetchCoordinates(
// 			url = include.url,
// 			entityName = include.entityName,
// 			state = state
// 		);

// 		addMarkersToMap(
// 			map,
// 			coordinates,
// 			include.color,
// 			state
// 		);
// 	}
// }
