var SandwichMaker = (function (prevSandwichMaker) {

	var condiments = {
	  	"mayo": 0.25,
		"mustard": 0.25,
		"oil-vin": 0.25,
		"salt-pepper": 0.25
	};

	prevSandwichMaker.addCondiment = function(type) {
		return condiments[type];
	};

	return prevSandwichMaker;

})( SandwichMaker || {});







