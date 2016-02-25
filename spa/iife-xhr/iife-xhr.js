
function carnivoresToDOM (carnivores) {
	console.log(carnivores[0].name);

	var output = document.getElementById('carnivores');
	var animalElement;

	for (var i = 0; i < carnivores.length; i++) {
	 	

	 	animalElement = `<h1> ${carnivores[i].name} </h1>`;
	 	output.innerHTML += animalElement;
	 };

}

function herbivoresToDOM (herbivores) {
	console.log(herbivores);

	var output = document.getElementById('herbivores');
	var animalElement;

	for (var i = 0; i < herbivores.length; i++) {
	 	


	 	animalElement = `<h1> ${herbivores[i].name} </h1>`;
	 	output.innerHTML += animalElement;
	 };	

		

}

Predator.getCarnivore(carnivoresToDOM);
Predator.getHerbivore(herbivoresToDOM);




