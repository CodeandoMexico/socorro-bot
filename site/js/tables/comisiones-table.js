async function main() {
	let comisionesData;
	await fetchData("https://api.airtable.com/v0/appN9DiiAtnz6UOs5/Comisiones?")
		.then(responseData => {
			comisionesData = responseData
		})

	comisionesTableComps = createTable();
	comisionesTableComps = createRows(tableComps=comisionesTableComps, data=comisionesData);
	let mpSearchBox = document.getElementById("comisiones-search-box");

	/*================ SEARCH BOX ================*/
	mpSearchBox.addEventListener("input", e => {
		resetTable(e, comisionesTableComps, comisionesData, "Estado");
	});

	document.getElementById("comisiones-table").appendChild(comisionesTableComps.table);
}
main()