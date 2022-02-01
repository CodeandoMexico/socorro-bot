async function main() {
	let mpData;
	await fetchData("https://api.airtable.com/v0/appF6WLMjVh9mdsqJ/Ministerios%20P%C3%BAblicos")
		.then(responseData => {
			mpData = responseData
		})
	// console.log(mpData);

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