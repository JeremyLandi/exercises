

// switch statement - replaces if/then statement
var value = 10;

switch (true) {
  case 1:
    console.log("Small number");
    break;
  case 5:
    console.log("Medium number");
     break;
  case 1:
    console.log("Large number");
     break;
  default:
    console.log("Dunno");
}

// var phrase = "Hey, look at me!";
// var element = document.getElementById("output");
// console.log("element", element);

// element.innerHTML = phrase;

// console.log("element.innerHTML", element.innerHTML);







// var five = "5"; // "5"
// var numberFive = parseInt(five); // 5

// var five = "3.14579";
// console.log("numberFive", numberFive.toFixed(2));



// var phrase = "The lazy dog likes the weird fox";
// //replaces "o" glabally with "i"
// var newPhrase = phrase.replace(/o/g, "i");
// alert(newPhrase);

// // replace "lazy" with "bounding"
// var phrase = "The lazy dog";
// var newPhrase = phrase.replace("lazy", "bounding");
// alert(newPhrase);


// for (var i = 32768; i > 2; i= i/2) {
// 	console.log("divider", i);
// };


// // Create an array to hold all even/odd numbers
// var evenOdds = [];

// //Loop from 100 to 1, decremening
// for (var i = 100; i > 0; i--) {

// 	//If the number is even, add to beginning of array
// 	if (i % 2 === 0) {
// 		evenOdds.unshift(i);
// 	//If number is odd, add to end of array	
// 	} else {
// 		evenOdds.push(i);
// 	}
// }
// console.log("evenOdds", evenOdds);


// var firstName = "Jeremy";
// var lastName = "Landi";
// var fullName = firstName + " " + lastName;

// console.log("Name", fullName);

// alert(fullName.indexOf("J"));






var colors = ["blue", "yellow", "red"];
console.log("colors",colors);

var firstColor = colors[0];

colors[3] = "orange";

colors.push("green");
console.log("colors",colors);

colors.unshift("purple");
colors.pop(); //removes last item in array

console.log("colors",colors);

for (var i = 0; i < colors.length; i++) {
	console.log("current color", colors[i]);
};

for (var i = 0; i < colors.length; i++) {
	console.log("current color", colors[i]);
};



// var hoursInADay = 24;
// var daysInAYear = 365;
// var hoursInAYear = hoursInADay * daysInAYear;
// console.log("hoursInAYear", hoursInAYear);

// var minutesInAHour = 60;
// var yearsInADecade = 10;

// var minutesInADay = minutesInAHour * hoursInADay;
// var minutesInAYear = minutesInADay * daysInAYear;
// var minutesInADecade = minutesInAYear * yearsInADecade;
// console.log("minutesInADecade", minutesInADecade);

// var secondsInAMinute = 60;
// var secondsInAHour = secondsInAMinute * 60;
// var secondsInADay = secondsInAHour * 24;
// var secondsInAYear = secondsInADay * 365;
// var secondsOld = secondsInAYear *30;
// console.log("secondsOld", secondsOld);

// var myAge = 30;
// if (myAge < 34) {
// 	console.log("You're young");
// } else {
// 	console.log("You're old");
// }



