
function reversal(string) {
	var reverse =  string.split("").reverse().join("");
	//Implement the logic in the reversal function that reverses the order of the characters in the string, and outputs the result in the DOM, below the text input.
console.log("reverse",reverse);
}

function alphabits(string) {
	var alpha = string.split(" ");
	console.log("alpha", alpha);
	var sorted = alpha.sort();
	//Implement the logic in the alphabits function that return the characters in alphabetical order, and outputs the result in the DOM, below the text input.
	console.log("alphabetical", sorted);
}

function palindrome(string) {
	if (string === string.split("").reverse().join("")) {
		output.innerHTML = "Your string is a palidrome";
	}
	else {
		output.innerHTML = "Your string is NOT a palidrome"
	};
	//Implement the logic in the palindrome function that determine whether the string is a palindrome. If it is, display the text "Your string is a palidrome" in the DOM, below the text input.
}

var testArray = [];
var button = document.getElementById("button");
button.addEventListener("click", textToLog);

function textToLog() {
	var testString = document.getElementById("textField").value;
	reversal(testString);
	alphabits(testString);
	palindrome(testString);
	
}
// When the user presses the enter key in the text input, or clicks the button, set the value of the testString variable (see below) to the value of the input.
// The output of each of the functions should immediately appear as well.









