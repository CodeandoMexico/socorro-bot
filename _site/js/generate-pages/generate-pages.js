async function generatePage(includes) {
	const section = document.getElementById("c-seleccion-estado__section");
	section.className = 'c-seleccion-estado--active';

	// Generate table or tables
	for(let include of includes) {
		const c = "c-table";
		const container = document.createElement("div");
		container.classList.add("container");
		container.innerHTML = `<div class="${c}">
		<h1 class="${c}__title">${include.title}</h1>
		<div id="${include.tableName}-table" class="${c}__table"></div>
		</div>`;
		section.appendChild(container);
		let table = await createTables(include.url, include.columnNames, include.title, include.state);
	
		document.getElementById(`${include.tableName}-table`)
			.appendChild(table);
	}
	
	// Generate map
	if (includes[0].mapProperties) {
		let mapContainer = document.createElement("div");
		mapContainer.classList.add("c-mp_comisions_map");
		let mapDiv = document.createElement("div");
		mapDiv.id = "map";

		mapContainer.appendChild(mapDiv);
		section.appendChild(mapContainer);

		MapGenerator(includes);
	}
}

function selectorFunction(e) {
	if (e.target.value) {
		searchBtn.style.opacity = "1";
		searchBtn.style.pointerEvents = "auto";
	}
	else {
		searchBtn.style.opacity = "0.5";
		searchBtn.style.pointerEvents = "none";
	}
}

