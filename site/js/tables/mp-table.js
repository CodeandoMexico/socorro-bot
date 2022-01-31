// data
mpData = {
	record1: {
		"#": "1.",
		"Name": "Buberto Bunzales",
		"Estado": "Guanaguashinton"
	},
	record2: {
		"#": "2.",
		"Name": "Missal Món",
		"Estado": "Leóndres"
	},
	record3: {
		"#": "3.",
		"Name": "Zaid Og",
		"Estado": "Irapitsburg"
	},
	record4: {
		"#": "4.",
		"Name": "Gil Esitorr",
		"Estado": "Guanaguashinton"
	},
	record5: {
		"#": "5.",
		"Name": "Ramón Hijo",
		"Estado": "Leóndres"
	},
	record6: {
		"#": "6.",
		"Name": "Memo Herdez",
		"Estado": "Irapitsburg"
	},
}

mpTableComps = createTable();
mpTableComps = createRows(tableComps=mpTableComps, data=mpData);
let mpSearchBox = document.getElementById("mp-search-box");

/*================ SEARCH BOX ================*/
mpSearchBox.addEventListener("input", e => {
	resetTable(e, mpTableComps, mpData, "Estado");
});

document.getElementById("mp-table").appendChild(mpTableComps.table);