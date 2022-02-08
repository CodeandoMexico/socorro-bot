async function generatePage(includes, isMap) {
	// Delete the actual content and reset the section
	const section = document.getElementById("c-seleccion-estado__section");
	section.innerHTML = '';
	section.className = '';
	section.id = 'info-section';
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
		
		let table = await createTables(include.url, include.entity_name, include.title, include.state);
		table.classList.add("bordered")
		document.getElementById(`${include.table_name}-table`)
			.appendChild(table);
	}

	if (isMap) {
		let mapContainer = document.createElement("div");
		mapContainer.classList.add("c-mp_comisions_map");
		let mapDiv = document.createElement("div");
		mapDiv.id = "map";
		let script = document.createElement("script")
		script.setAttribute("defer", "");
		script.setAttribute('src', "/js/mp-comisiones-map.js");
		mapContainer.appendChild(mapDiv);
		section.appendChild(mapContainer);
		section.appendChild(script);
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

