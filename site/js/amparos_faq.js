const faqData = [
	{
		title: "¿En todos los casos se puede tramitar un amparo?",
		descrpition: `<p>No, solo en los casos en que una <b>autoridad</b> como militares, marinos, guardia nacional, policías municipales o estatales, ministerios públicos o cualquier otro servidor público, haya <b>participado</b> en la desaparición, que la haya <b>permitido</b>, <b>encubierto</b>, que haya <b>sabido</b> de ella y no la haya evitado de acuerdo con sus obligaciones o que trate de <b>ocultar el paradero</b> de la persona desaparecida porque, recordemos, el amparo sirve para resolver <b>actos de autoridad que violan los derechos humanos</b> de las personas.</p>
		<p>Esto quiere decir que cuando ocurre una desaparición cometida por particulares, es decir, por ciudadanos que no son autoridades de ningún tipo, esyte tipo de amparo no será de utilidad pero sí otros, por ejemplo, que sean porque la autoridad no entrega copias del expediente o se niega a hacer alguna diligencia (acto de investigación) específica.</p>`
	},
	{
		title: "¿Por qué el amparo buscardor puede ayudar a que las autoridades presenten a las víctimas de desaparición forzada?",
		descrpition: `<p>Un juez puede obligar a las autoridades que presuntamente cometieron la desaparición a informar sobre detenciones u operativos que hayan realizado e incluso podría ingresar a las instalaciones donde podría estar retenida la persona desaparecida. También podría ordenar a los ministerios públicos a que realicen actos de investigación importantes como solicitar el registro de la ubicación del celular de la persona desaparecida o de videograbaciones que pudieran haber alrededor del lugar en donde ocurrió la desaparición.</p>`
	},
	{
		title: "¿Cómo puedo hacer mi amparo?",
		descrpition: `<p>Afortundamente existen plantillas que puedes utilizar para hacer tu amparo. La primero fue elaborada por un reconocido centro de derechos humanos, Centro de Derechos Humanos Agustín Prodh Juárez. El segundo lo hizo la Comisión Nacional de Búsqueda de Personas. Ambos son sencillos de llenar. Una vez llenado con los datos correspondientes puedes presentarlo en el juzgado federal que te quede más cerca. <b>Cualquier juez federal, sin importar el estado, debe recibir tu amparo</b>, sin embargo, si está en tus posibilidades presentarlo en juzgado del estado en donde ocurrió la desaparición es recomendable hacerlo ahí.</p>`
	}
];

function createFaqCard(index) {
	let card = document.createElement("div");
	let title = document.createElement("h1");
	let description = document.createElement("div");
	let closeBtn = document.createElement("i");
	card.classList.add("faq__card");
	title.classList.add("faq__card--title");
	description.classList.add("faq__card--description");
	closeBtn.classList.add("uil", "uil-multiply");

	closeBtn.addEventListener('click', () => {
		document.body.classList.remove("darker-body");
		card.remove();
	})

	title.innerText = faqData[index].title;
	description.innerHTML = faqData[index].descrpition;
	card.appendChild(title);
	card.appendChild(description);
	//card.appendChild(closeBtn)

	return card;
}

function deployCard(card) {
	document.body.classList.add("darker-body");
	document.body.appendChild(card);
	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function (event) {
		if (event.target.contains(card)) {
			document.body.classList.remove("darker-body");
			window.onclick = function () { };
			card.remove();
		}
	}
}

let faqs = document.getElementsByClassName("amparos__faq");

let i = 0;
for(let faq of [...faqs]) {
	faq.id = i;
	faq.addEventListener('click', function (e) {
		let card = createFaqCard(parseInt(this.id))
		deployCard(card);
	});
	i++;
}