

// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

// var selectedTopping;
// // Variable to hold topping that the user selects
// var selectedTopping;
//   console.log("selectedTopping", selectedTopping);

// Cache DOM
var total = document.getElementById("totalCost");
var button = document.getElementById("button");
var breadChooser = document.getElementById("bread-chooser");
var meatChooser = document.getElementById("meat-chooser");
var cheeseChooser = document.getElementById("cheese-chooser");
var condimentChooser = document.getElementById("condiment-chooser");
var veggieChooser = document.getElementById("veggie-chooser");

// Bind Events
breadChooser.addEventListener("change", findBreadTopping);
meatChooser.addEventListener("change", findMeatTopping);
cheeseChooser.addEventListener("change", findCheeseTopping);
condimentChooser.addEventListener("change", findCondimentTopping);
veggieChooser.addEventListener("change", findVeggieTopping);
button.addEventListener("click", getTotal);

function getTotal(e) {
	e.preventDefault();
	total.innerHTML = "Your total today is: " + finalSandwichPrice;
};

function findBreadTopping (event) {
	// Get the value chosen from the DOM
	var breadTopping = event.target.value;


	var breadPrice = SandwichMaker.addBread(breadTopping);

	if (event.target.checked) {
	// //Adds price to total price
	finalSandwichPrice += breadPrice;
	}
	else {
		finalSandwichPrice -= breadPrice;
	}
	console.log("finalSandwichPrice", finalSandwichPrice);
	
};
function findMeatTopping (event) {
	var meatTopping = event.target.value;
	var meatPrice = SandwichMaker.addMeat(meatTopping);

	finalSandwichPrice += meatPrice;
	console.log("finalSandwichPrice", finalSandwichPrice);
};
function findCheeseTopping (event) {
	var cheeseTopping = event.target.value;
	var cheesePrice = SandwichMaker.addCheese(cheeseTopping);

	finalSandwichPrice += cheesePrice;
	console.log("finalSandwichPrice", finalSandwichPrice);
};
function findCondimentTopping (event) {
	var condimentTopping = event.target.value;
	var condimentPrice = SandwichMaker.addCondiment(condimentTopping);

	finalSandwichPrice += condimentPrice;
	console.log("finalSandwichPrice", finalSandwichPrice);
};
function findVeggieTopping (event) {
	var veggieTopping = event.target.value;
	var veggiePrice = SandwichMaker.addVeggie(veggieTopping);

	finalSandwichPrice += veggiePrice;
	console.log("finalSandwichPrice", finalSandwichPrice);
};








