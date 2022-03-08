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
			columnNames: [
				["num", "#"],
				["nombre", "Juez"],
				["nombre_estado", "Estado"]
			],
			title: "Jueces",
			tableName: "jueces",
			url: "https://api.airtable.com/v0/appN9DiiAtnz6UOs5/Jueces?sort%5B0%5D%5Bfield%5D=num",
			state: state,
			
		}
	];
	generatePage(includes, false);
});
