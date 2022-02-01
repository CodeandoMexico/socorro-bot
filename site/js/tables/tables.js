async function fetchData(url = '') {
	const response = await fetch(url, {
		method: 'GET',
		headers: {
			Authorization: "Bearer keyULBdMiMClQX4zG"
		}
	});
	return response.json();
}

function createTable() {
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
	headings[1].innerHTML = "Nombre";
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
		tbody: tbody
	};
}


function createRows(tableComps, data, filterWord = "", filterBy = "Estado") {
	if (!filterWord) {
		// Create rows
		let index = 1;
		for (const record of data.records) {
			tableComps.rows.push(document.createElement("tr"));

			let rowData;
			rowData = document.createElement('td');
			rowData.innerHTML = index;
			tableComps.rows[index].appendChild(rowData);
			for (const d of ["Nombre", "Estado"]) {
				rowData = document.createElement('td');
				rowData.innerHTML = record.fields[d];
				
				tableComps.rows[index].appendChild(rowData);
			}

			tableComps.tbody.appendChild(tableComps.rows[index])
			index += 1;
		}
	} else {
		// Create filter rows
		let index = 1;
		for (const record of data.records) {
			if (!record.fields[filterBy].normalized().includes(filterWord.normalized())) {
				continue
			}
			tableComps.rows.push(document.createElement("tr"));

			let rowData;
			rowData = document.createElement('td');
			rowData.innerHTML = index;
			tableComps.rows[index].appendChild(rowData);
			for (const d of ["Nombre", "Estado"]) {
				rowData = document.createElement('td');
				rowData.innerHTML = record.fields[d];
				
				tableComps.rows[index].appendChild(rowData);
			}

			tableComps.tbody.appendChild(tableComps.rows[index])
			index += 1;
		}
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
