async function fetchData(url = '') {
	const response = await fetch(url, {
		method: 'GET',
		headers: {
			Authorization: "Bearer keyULBdMiMClQX4zG"
		}
	});
	return response.json();
}

async function createTables(url, title="Nombre", state="", columnNames) {
	let data = await fetchData(url);

	tableComps = createTable(title);
	tableComps = createRows(tableComps=tableComps, data=data, state=state, columnNames=columnNames);
	tableComps.state = state;

	return tableComps.table;
}

function createTable(title) {
	let table = document.createElement('table');
	let thead = document.createElement('thead');
	let tbody = document.createElement('tbody');
	
	table.appendChild(thead);
	table.appendChild(tbody);

	let rows = [], headings = [];
	// Create headings
	headings.push(document.createElement("th"));
	headings.push(document.createElement("th"));
	headings.push(document.createElement("th"));
	headings[0].innerHTML = "#";
	headings[1].innerHTML = title;
	headings[2].innerHTML = "Estado";
	rows.push(document.createElement("tr"));
	headings.forEach(heading => {
		rows[0].appendChild(heading);
	});
	thead.appendChild(rows[0]);

	return {
		rows: rows,
		headings: headings,
		table: table,
		thead: thead,
		tbody: tbody,
	};
}


function createRows(tableComps, data, state, columnNames) {
	// Create rows
	for (const record of data.records) {
		let row = document.createElement("tr");
		row.classList.add("table-data");
		let url = record.fields[`maps_${columnNames[1]}`]
		if (url !== "PENDIENTE") {
			row.addEventListener('click', e => {
				window.open(url);
			});
			row.style.cursor = "pointer";
		} else row.style.pointerEvents = "none";

		if (state == "Todos los estados" || record.fields.nombre_estado == state)
			for (const [index, info] of columnNames.entries()) {
				let rowData = document.createElement('td');
				if (!index) rowData.classList.add("table-index");
				rowData.innerHTML = record.fields[info];
				
				row.appendChild(rowData);
			}
		else continue;

		tableComps.tbody.appendChild(row)
	}

	return tableComps
}

function resetTable(e, tableComps, data, filterBy) {
	filterWord = e.target.value;
	tableComps.rows = [tableComps.rows[0]]

	tableComps.tbody.innerHTML = null;
	createRows(tableComps, data, filterWord, filterBy);
}

String.prototype.normalized = function () {
	return this.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
