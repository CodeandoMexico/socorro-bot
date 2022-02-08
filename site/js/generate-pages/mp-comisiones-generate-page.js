// ================== GENERATE PAGE ================== //
const searchBtn = document.getElementById("search-btn");
const selector = document.getElementById("mp-comisiones__selector");
let state;

selector.addEventListener("change", e => {
	selectorFunction(e);
	state = e.target.value;
});

searchBtn.addEventListener("click", e => {
	includes = [
		{
			title: "Comisiones",
			table_name: "comisiones",
			url: "https://api.airtable.com/v0/appN9DiiAtnz6UOs5/Comisiones?sort%5B0%5D%5Bfield%5D=num_estado",
			entity_name: "comision",
			state:state
		},
		{
			title: "Ministerios Públicos",
			table_name: "mp",
			url: "https://api.airtable.com/v0/appN9DiiAtnz6UOs5/Fiscalias?sort%5B0%5D%5Bfield%5D=num_estado",
			entity_name: "fiscalia",
			state:state
		},
	];
	generatePage(includes, true);
});
