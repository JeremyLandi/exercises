var SandwichMaker = (function (prevSandwichMaker) {

	var veggies = {
	  	"lettuce": 0.25,
		"tomato": 0.25,
		"onion": 0.25,
		"cucumber": 0.25,
		"avocado": 1.25
	}; 

	prevSandwichMaker.addVeggie = function(type) {
		return veggies[type];
	};

	return prevSandwichMaker;

})(SandwichMaker || {});







