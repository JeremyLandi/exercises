var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];


// Sort the numbers in descending order (10, 9, 8, 7, etc).
function sort(a, b) {
	return a-b
}


// Remove any integers greater than 19.
function greater(integer) {
	if (integer > 19) {
		return integer;
	}
}


// Multiply each remaining number by 1.5 and then substract 1.
function multiply(integer) {
	var multiplied = (integer*1.5) - 1
	return multiplied;
}


// Then output (either in the DOM or the console) the sum of all the resulting numbers.
function add(a, b) {	
	return a + b;
}


var sorted = integers.sort(sort);
console.log("sorted: ", sorted);

var greaterThan = integers.filter(greater)
console.log("greater than 19: ", greaterThan);

var multiplied = greaterThan.map(multiply)
console.log("multiplied", multiplied);

var added = multiplied.reduce(add);
console.log("add", added);

var finalInt = integers.sort(sort).filter(greater).map(multiply).reduce(add);
console.log("finalInt", finalInt);



