var SandwichMaker = (function (prevSandwichMaker) {
	// Private variable to store the different meat prices
	var meat = {
		"turkey": 2.00,
		"ham": 2.00,
		"bacon": 1.50,
		"chicken": 3.00,
		"tuna": 4.00
	};
	 
	prevSandwichMaker.addMeat = function(type) {
	 	return meat[type];
	};

	return prevSandwichMaker;

})(SandwichMaker || {});




