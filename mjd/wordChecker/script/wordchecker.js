
"use strict";


$("#button").click(function() {
	let userInput = $("#textarea").val().toLowerCase();
		// console.log("userInput", userInput);

	if (checkWordCount(userInput) === false) {
		alert("You have reached the maximum of 100 characters.");
	}	 
	if (duplicateCheck(userInput) === false) {
		alert("You have duplicate words.");
	}
	if (verifyAlphaNumeric(userInput) === false) {
		alert("Please only use Alphanumeric characters.")
	}
	if (checkWordCount(userInput) && duplicateCheck(userInput) && verifyAlphaNumeric(userInput) === true) {
		alert("You have no errors")
	}
})

//That function should return false if a string sent to it has more than 100 words in it.
function checkWordCount(string) {
	let wordCount = string.replace( /[^\w ]/g, "" ).split( /\s+/ ).length;
		// console.log("wordCount", wordCount);
		if (wordCount > 100) {			
			return false;	
		}
		else {
			return true;
		}
};


function duplicateCheck(string) {

	let stringToArray = string.split(' ');
		// console.log("stringToArray", stringToArray);

	let originalLength = stringToArray.length;

	let uniqueArray = $.unique(stringToArray);
	
	let checkedLength = uniqueArray.length;

		// console.log("newArray",stringToArray.length);
		// console.log("uniqueArray",uniqueArray.length);

	if (originalLength === checkedLength) {
			// console.log("true");
		return true;
	}	
	else {
			// console.log("false");
		return false;
	};

};

function verifyAlphaNumeric(string) {
	
	let alphaNumericCheck = string.replace(/[^a-zA-Z 0-9]+/g, "");
		// console.log("alphaNumericCheck", alphaNumericCheck);

	let alphaCheckLength = alphaNumericCheck.length;
		// console.log("alphaNumericCheck length", alphaNumericCheck.length);	
		// console.log("string", string.length);	

	if (alphaCheckLength !== string.length) {
		return false;
	}
	else {
		return true;
	}

};


















