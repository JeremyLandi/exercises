
// classList.toggle = toggles class of .blue
// classList.add = adds class
// classList.remove = removes class


var articleElement = document.getElementsByClassName('article-section');
console.log("articleElement", articleElement);


function handleSectionClick(event) {
	console.log(event);
	var elementText = event.target.innerHTML;
	outputEl.innerHTML = "you Clicked on the" + elementText + "section";
}

for (var i = 0;i < articleElement.length; i++) {
	articleElement.item(i).addEventListener('click', handleSectionClick)
};



var header = document.getElementById('page-header');

function handleHeaderMouseOut(event) {
	outputEl.innerHTML = "why you leave me?";
}

function handleHeaderMouseOver(event) {
	outputEl.innerHTML = "you're here!";
}

header.addEventListener("mouseover", handleHeaderMouseOver);
header.addEventListener("mouseout", handleHeaderMouseOut);




var fieldEl = document.getElementById('keypress');
//takes input el, adds event listener, and puts that number into the HTML
fieldEl.addEventListener('keyup', function(event) {
	outputEl.innerHTML = event.target.value;
});



var guineaPig = document.getElementById('guinea-pig');


document.getElementById('add-blue').addEventListener('click', function() {
	guineaPig.classList.toggle('blue');
	//blue is a class in CSS
})








// var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];



// /* 
//  Use the forEach method to add the name of each planet
//  to a div element in your HTML with an id of "planets".
// */
// var el = document.getElementById("planets");

// var toHTML = function(arrayElement) {
// 	el.innerHTML += `<div> ${arrayElement} </div>`;
// }

// planets.forEach(toHTML);

// // Use the map method to create a new array where the first letter of each planet is capitalized

// var capLetter = planets.map(function(capitalized) {
// 	 return capitalized.charAt(0).toUpperCase() + capitalized.slice(1);
// })
// console.log(capLetter);
// // Use the filter method to create a new array that contains planets with the letter 'e'

// var eLetterPlanets = planets.filter(function(ePlanet) {
// 	return ePlanet.indexOf('e') <= 0;
// })
// console.log(eLetterPlanets);

// // Use the reduce method to create a sentence from the words in the following array


// var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];


// var sentence = words.reduce(function(prev, cur) {
// 	return `${prev} ${cur}`
// })

// console.log(sentence);







//  slice(0,1) + slice(1)
//this would start at zero, go over one place and do whatever
//the second slice will put back on at location






// var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];



// /* 
//  Use the forEach method to add the name of each planet
//  to a div element in your HTML with an id of "planets".
// */
// var currentPlanet = document.getElementById("planets");

// planets.forEach(function(planet, i ) {
// 	console.log(planets[i]);
// 	//instead of having "<p>" + planet[i] + "</p>"
// 	currentPlanet.innerHTML += `<p>${planet}</p>`;
// });



// // Use the map method to create a new array where the first letter of each planet is capitalized
// var capToHtml = document.getElementById('capitalized');

// var cap = planets.map(function(planets,i) {	
// 	return planets.substring(0, 1).toUpperCase() + planets.substring(1).toLowerCase();
// 	// OR
// 	// return planets.slice(0,1).toUpperCase() + planets.splice(1);
// });
// 	console.log(`${cap}`);
// 	capToHtml.innerHTML = cap.join(" ");

// // Use the filter method to create a new array that contains planets with the letter 'e'

// 	var eLetterPlanets = planets.filter(function(planetsWithLetterE) {
// 		// indexOf returns the index of (in this case 'e'). So doesn't(!) return something with no index(- 1)
// 		return planetsWithLetterE.indexOf('e') !== -1;
// 	});
// 	console.log("eLetterPlanets", `${eLetterPlanets}`);




// // Use the reduce method to create a sentence from the words in the following array

// var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];


// var sentence = words.reduce(function(prev, curr) {
// 	return `${prev} ${curr}`;
// })
// console.log (sentence);



// // var numbers = [51, 10 ,62, 4, 13, 9];
// // //
// // var sum = numbers.reduce(function (prev, curr) {
// // 	return prev + curr;
// // });
// // console.log("sum", sum);


// // var array = ["apple", "orange", "apple", "orange", "pear", "orange"];


// // function getWordCnt() {
// // 	return array.reduce(function(prev, next) {
// // 		prev[next] = (prev[next] + 1) || 1;
// // 		console.log(prev);
// // 		return prev;
// // 	},{});
// // }

// // var result = getWordCnt();
// // console.log("result", result);



// // var numbers = [];
// // for (var i = 0; i < 500; i++) {
// // 	numbers.push(i);

// // var result = numbers.reduce(function(prev,next) {
// // 	prev += next;
// // 	return prev;
// // }, 0);
// // console.log("reduce(): " + result);
// // }
	











