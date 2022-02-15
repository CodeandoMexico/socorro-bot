async function generatePage(includes, isMap, resetPage = false) {
	const section = document.getElementById("c-seleccion-estado__section");
	section.className = 'c-seleccion-estado--active';
	if (document.getElementsByClassName("c-table").length) {
		return;
	}

	// Generate table or tables
	for (let include of includes) {
		const c = "c-table";
		const container = document.createElement("div");
		container.classList.add("container");
		container.innerHTML = `<div class="${c}">
		<h1 class="${c}__title">${include.title}</h1>
		<div id="${include.table_name}-table" class="${c}__table"></div>
		</div>`;
		section.appendChild(container);
		let table = await createTables(include.url, include.title, include.state, include.columnNames);
	
		document.getElementById(`${include.table_name}-table`)
			.appendChild(table);
	}

	if (isMap) {
		const map = document.getElementById("map");
		if(map) map.parentElement.remove();

		let mapContainer = document.createElement("div");
		mapContainer.classList.add("c-mp_comisions_map");
		let mapDiv = document.createElement("div");
		mapDiv.id = "map";

		mapContainer.appendChild(mapDiv);
		section.appendChild(mapContainer);

		mpComisionesMapGenerator(includes[0].state);
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

