// data
comisionesData = {
	record1: {
		"#": "1.",
		"Name": "Richard Richardson",
		"Estado": "Irapitsburg"
	},
	record2: {
		"#": "2.",
		"Name": "Rodolfoel Reno",
		"Estado": "Celayork"
	},
	record3: {
		"#": "3.",
		"Name": "Micky Mouse",
		"Estado": "Salamanchester"
	},
	record4: {
		"#": "4.",
		"Name": "Ramón papá",
		"Estado": "Valtimore"
	},
	record5: {
		"#": "5.",
		"Name": "Comisión random",
		"Estado": "CDMX"
	},
	record6: {
		"#": "6.",
		"Name": "Teff Anía",
		"Estado": "Silaodelfia"
	},
}

comisionesTableComps = createTable();
comisionesTableComps = createRows(tableComps=comisionesTableComps, data=comisionesData);
let comisionesSearchBox = document.getElementById("comisiones-search-box");

/*================ SEARCH BOX ================*/
comisionesSearchBox.addEventListener("input", e => {
	resetTable(e, comisionesTableComps, comisionesData, "Estado");
});

document.getElementById("comisiones-table").appendChild(comisionesTableComps.table);