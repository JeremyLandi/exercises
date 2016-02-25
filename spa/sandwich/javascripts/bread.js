var SandwichMaker = (function (prevSandwichMaker) {

	var bread = {
		"noBread": 0.00,
		"white": 1.00,
		"wheat": 1.00,
		"sourdough": 1.25,
		"squaw": 1.25
	};

	prevSandwichMaker.addBread = function(type) {
		return bread[type];
	};

	return prevSandwichMaker;

})( SandwichMaker || {});




