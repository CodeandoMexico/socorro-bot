async function main() {
	let mpData;
	await fetchData("https://api.airtable.com/v0/appN9DiiAtnz6UOs5/Fiscalias?")
		.then(responseData => {
			mpData = responseData
		})

	mpTableComps = createTable();
	mpTableComps = createRows(tableComps=mpTableComps, data=mpData);
	let mpSearchBox = document.getElementById("mp-search-box");

	/*================ SEARCH BOX ================*/
	mpSearchBox.addEventListener("input", e => {
		resetTable(e, mpTableComps, mpData, "Estado");
	});

	document.getElementById("mp-table").appendChild(mpTableComps.table);
}
main()