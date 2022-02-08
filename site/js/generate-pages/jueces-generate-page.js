// ================== GENERATE PAGE ================== //
const searchBtn = document.getElementById("search-btn");
const selector = document.getElementById("jueces__selector");
let state;

selector.addEventListener("change", e => {
	selectorFunction(e);
	state = e.target.value;
});

searchBtn.addEventListener("click", e => {
	includes = [
		{
			title: "Jueces",
			table_name: "jueces",
			url: "https://api.airtable.com/v0/appN9DiiAtnz6UOs5/Comisiones?sort%5B0%5D%5Bfield%5D=num_estado",
			entity_name: "comision",
			state:state
		},
	];
	generatePage(includes, false);
});
