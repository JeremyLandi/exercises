

"use strict"

function add(firstNumber,secondNumber) {
	return parseInt(firstNumber) + parseInt(secondNumber);
}

function subtract(firstNumber,secondNumber) {
	return parseInt(firstNumber) - parseInt(secondNumber);
}

function multiply(firstNumber, secondNumber) {
	return parseInt(firstNumber) * parseInt(secondNumber);
}

function divide(firstNumber, secondNumber) {
	return parseInt(firstNumber) / parseInt(secondNumber);
}

function square(firstNumber) {
	return parseInt(firstNumber) * parseInt(firstNumber);
}

function squareRoot(firstNumber) {
	return Math.sqrt(parseInt(firstNumber));
}

let firstInput;
let secondInput;
let mathOp;

$(".button").click(function() {
	firstInput = $("input").val();
		// console.log("firstInput", firstInput);
	$("input").val("");	
	$("input").focus();
		// console.log("firstInput", firstInput);
		// console.log("this", event.target.id);
	mathOp = event.target.id;
		// console.log("mathOp", mathOp);
	switch(mathOp) {
		case "square":
		let sq = square(firstInput);
			// console.log("sq", sq);
		$("input").val(sq);	
		break;

		case "sqRoot":
		let sqrRoot = squareRoot(firstInput);
			// console.log("sqRoot", sqrRoot);
		$("input").val(sqrRoot);	
		break;
	};
})

$('body').keyup(function (e) {
	if (e.which === 13) {
		secondInput = $("input").val();
		$("input").val("");	

		switch (mathOp) {
			case "add":
			let sum = add(firstInput,secondInput);	
				console.log("sum", sum);
			$("input").val(sum);
			break;

			case "subtract":
			let difference = subtract(firstInput,secondInput);
				console.log("difference", difference);	
			$("input").val(difference);
			break;

			case "multiply":
			let product = multiply(firstInput,secondInput);
				console.log("product", product);
			$("input").val(multiply);	
			break;

			case "divide":
			let quotient = divide(firstInput,secondInput);
				console.log("quotient", quotient);
			$("input").val(divide);	
			break;
		}
	};
})








