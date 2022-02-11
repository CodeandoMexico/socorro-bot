async function generatePage(includes, isMap, resetPage = false) {
	// Delete the actual content and reset the section
	const tables = document.getElementsByClassName("c-table");
	for (const table of tables) table.parentElement.remove();
	const br = document.getElementById("salto-linea");
	const section = document.getElementById("c-seleccion-estado__section");
	section.className = 'c-seleccion-estado--active';
	if (resetPage) {
		br.remove();
		const selector = document.getElementById("mp-comisiones__selector");
		selector.remove()
		searchBtn.innerText = "Buscar más...";
		const newSearchBtn = searchBtn;
		searchBtn.parentNode.replaceChild(newSearchBtn, searchBtn);
		searchBtn.addEventListener('click', e => { location.reload() });
	} else searchBtn.innerText = "Buscar";
	section.id = 'c-seleccion-estado__section';
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
		table.classList.add("bordered")
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
		let script = document.createElement("script");
		script.id = "mp-comisiones-map-script";
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

