async function createTables(url, columnNames, title="Nombre", state = "") {
	let data = await fetchData(url);

	tableComps = createTable(title, columnNames);
	tableComps = createRows(tableComps=tableComps, data=data, state=state, columnNames=columnNames);
	tableComps.state = state;
	return tableComps.table;

}

function createTable(title, columnNames) {
	let table = document.createElement('table');
	let thead = document.createElement('thead');
	let tbody = document.createElement('tbody');
	
	table.appendChild(thead);
	table.appendChild(tbody);

	let rows = [], headings = [];
	// Create headings
	for(const [index, columnName] of columnNames.entries()) {
		headings.push(document.createElement("th"))
		headings[index].innerHTML = columnName[1]
	}
	rows.push(document.createElement("tr"));
	headings.forEach(heading => {
		rows[0].appendChild(heading);
	});
	thead.appendChild(rows[0]);

	return {
		table: table,
		tbody: tbody,
	};
}


function createRows(tableComps, data, state, columnNames) {
	// Create rows
	for(const record of data.records) {
		let row = document.createElement("tr");
		let fields = record.fields;
		if (state == "Todos los estados" || fields.nombre_estado == state)
			for (const [index, info] of columnNames.entries()) {
				let rowData = document.createElement('td');
				if (!index) rowData.classList.add("table-index");
				rowData.innerHTML = fields[info[0]];
				
				row.appendChild(rowData);
			}
		else continue;

		tableComps.tbody.appendChild(row)
	}

	return tableComps
}


function deleteTables() {
	let tables = [];
	tables = document.querySelectorAll(".c-table");
	if(tables.length) {
		tables.forEach(table => {
			table.parentElement.remove();
		});
	}
}