



// Assign a function to be executed when the button is clicked
var button = document.getElementById('converterButton');
button.addEventListener('click', determineConverter);


function determineConverter() {
	console.log('determineConverter');

	var textEntered = document.getElementById('tempertureEntered').value;
		console.log('textEntered', textEntered);


	if (document.getElementById('celsius').checked) { 
		console.log('toCelsius');
		var celsius = Math.floor((textEntered - 32) / 1.8);
		console.log('convertedToCelsius', celsius);
		document.getElementById('convertedTemp').innerHTML = celsius;
			if (celsius > 32) {
				document.getElementById('convertedTemp').className = 'hot';
			}
			else if (celsius < 0 ){
				document.getElementById('convertedTemp').className = 'cold';
			}
			else {
				document.getElementById('convertedTemp').className = 'neutral';
			}
	} 
	else {
		console.log('toFahrenheit');
		fahrenheit = textEntered * 1.8 + 32;
		console.log("convertedToFahrenheit", fahrenheit);
	 	document.getElementById('convertedTemp').innerHTML = fahrenheit	
	 		if (fahrenheit > 90) {
				document.getElementById('convertedTemp').className = 'hot';
			}
			else if (fahrenheit < 32 ){
				document.getElementById('convertedTemp').className = 'cold';
			}
			else {
				document.getElementById('convertedTemp').className = 'neutral';
			}
	}		
}

// REST BUTTON
	document.getElementById('resetButton').onclick = function clearConverter() {
	console.log('clearConverter');
	document.getElementById('tempertureEntered').value = '';
	document.getElementById('convertedTemp').innerHTML = '';
	document.getElementById('celsius').checked = false;
	document.getElementById('fahrenheit').checked = false;
}

// Ensures user enters a temperature
function validateForm() {
	var verifyTempertureEntered = document.getElementById('tempertureEntered').value;
	if (verifyTempertureEntered == null || verifyTempertureEntered == "") {
		alert("A temperature must be entered.");
	}
}

// Get a reference to the button element in the DOM
var button = document.getElementById("converterButton");
button.addEventListener('click', validateForm);




