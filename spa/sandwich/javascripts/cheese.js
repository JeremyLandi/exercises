var SandwichMaker = (function (prevSandwichMaker) {
	var cheese = {
		"american" : 1.00,
		"pepper-jack" : 1.00,
		"provolone" : 1.00,
		"cheddar" : 1.00,
		"muenster" : 1.25,
		"swiss" : 1.00
	  };

	prevSandwichMaker.addCheese = function(type) {
		return cheese[type];
	};

	return prevSandwichMaker;

})( SandwichMaker || {});




