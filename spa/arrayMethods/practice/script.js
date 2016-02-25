



var car = [  {
      "make": "Ferrari",
      "model": "LaFerrari",
      "year": "2015",
      "price": "1200000",
      "color": "FireBrick",
      "purchased": false,
      "description": "Unlike the latest hybrid hypercars, the LaFerrari uses its petrol/electric power purely for performance. As a result, the 950bhp V12 can blast it to a top speed in excess of 217mph. The LaFerrari can, according to the Maranello-based marque, blast from 0-62mph in “less than three seconds”, while 0-124mph is managed in “under seven seconds”. Yes, it's quick."
    },
     {
      "make": "Bugatti",
      "model": "Veyron Super Sport",
      "year": "2015",
      "price": "2200000",
      "color": "Green",
      "purchased": false,
      "description": "The Bugatti Veyron was the first production car to exceed 250mph, while the flagship 1,184bhp Super Sport raises this figure to 268mph. The genius of the Veyon is that it makes insane speed seem so effortless with its quad-turbo W16 engine doing the legwork while the driver sits back in the luxuriously appointed cabin."  
    },
     {
      "make": "Pagani",
      "model": "Huayra",
      "year": "2015",
      "price": "1200000",
      "color": "Navy",
      "purchased": false,
      "description": "The beautifully crafted Huayra serves up supercar excess in the finest tradition. Lurking beneath the attractive body is a 720bhp twin-turbocharged Mercedes V12 that propels the Pagani to 225mph. The Huayra is constructed from carbonfibe and employs an active aerodynamic system that can adjust the ride height at the front and rear of the car independently.  "
    },
     {
      "make": "McLaren",
      "model": "P1",
      "year": "2015",
      "price": "899900",
      "color": "Yellow",
      "purchased": false,
      "description": "The remarkable petrol/electric P1 benefits from McLaren’s Formula One know-how to give a 217mph top speed and an ability to travel for up to seven miles in eco-friendly, all-electric mode. If the standard version is too slow, there's always the McLaren P1 GTR track special. Only 35 will be built and it's priced from £1.9m so you'd better start saving."
    },{
      "make": "Hennessy",
      "model": "Venom GT",
      "year": "2015",
      "price": "799900",
      "color": "Chartreuse",
      "purchased": false,
      "description": "Based on a modified Lotus Exige and packing a mighty 1,244bhp twin-turbocharged version of the Chevrolet Corvette’s V8 engine, the Hennessy Venom is capable of an astonishing 270mph.  The idea of bolting a twin-turbo V8 into a Lotus Exige will terrify anyone who's ever driven the tiny track car but Hennessy does conduct far reaching modifications on the Exige to produce the Venom GT. "
    }]

var output = document.getElementById("output");
var currentCar;
var carElement = "";

for (var i = 0; i < car.length; i++) {
	currentCar = car[i];

	
	carElement += `<div class="col-md-4 ">`;
	carElement += `<ul>`;
	carElement += `<li> <img src="http://cdn2.autoexpress.co.uk/sites/autoexpressuk/files/styles/article_main_image/public/6/42/ruf-ctr3-rear_0.jpg?itok=89crglsS" alt=""></li>`;
	carElement += `<li> ${currentCar.make}</li>`;
	carElement += `<li> ${currentCar.model}</li>`;		 
	carElement += `<li> ${currentCar.year}</li>`;
	carElement += `<li >${currentCar.price}</li>`;
	carElement += `<li >${currentCar.color}</li>`;
	carElement += `<li >${currentCar.purchased}</li>`;
	carElement += `<li >${currentCar.description}</li>`;
	carElement += `</ul>`;
	carElement += `</div>`;

	output.innerHTML = carElement;
};


	







// var foo = {	
// 	"lettuce": 0.25,
// 	"tomato": 0.25,
// 	"onion": 0.25,
// 	"cucumber": 0.25,
// 	"avocado": 1.25}

// for(var i in foo){
//   alert(i); // alerts key
//   alert(foo[i]); //alerts key's value
// }

// var button = document.getElementById('button');
// button.addEventListener('click', randomColorGen);



// setInterval(function randomColorGen() {
// var randomColor = '#' + (function co(lor){   return (lor +=
//   [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])
//   && (lor.length == 6) ?  lor : co(lor); })('');
  
//   // console.log();
//   var h1 = document.querySelector('#h1');
//   h1.style.color = randomColor;
	
// }, 1000);

// var people = { "good": "gut",
//     "christmas": "Weihnachten",
//     "happy": "lustig",
//     "new": "neu",
//     "year": "Jahr",
//     "beer": "Bier"};
// for (var i=0; i<people.length; i++) {
// console.log("Hello, " + people[i]);
// }

// // Closure is one scope accessing another var 
// //HEAP = long term memory (larger than STACK)
// // closures go to HEAP

// //STACK = short term memory to run code
// // EX)
// // function sayHello() {
// // 	console.log("hello");
// // }
// // sayHello();



// // IFFE protects objects from being changed

// var Whee = (function() {
// 	return "wheeeeee!!!!";
// })();
// console.log(Whee);

// var Account = (function() {
// 	//private variable
// 	var balance = 1000;
// 	return { //object
// 		//getter
// 		getBalance: function() {
// 			//allows people to read output function but can't modify
// 			return balance;
// 		}
// 	}
// })();
// console.log(Whee);



// Whee = (function() {
// 	return "Hooray!!!!";
// })(Whee);
// console.log(Whee);


// //scope - you can look up but you can never look down
// // functions can look out but others cant look in
// var balance = 20;

// var Account = (function() {
// 	//this variable is completely seperate from global var
// 	var balance = 1000;
// 	//if set as just "balance" it is redefining global var
// 	balance = 1000;
// 	return { //object
// 		//getter
// 		getBalance: function() {
// 			//allows people to read output function but can't modify
// 			return balance;
// 		}
// 	}
// })();






// var Account = (function() {
// 	//this is private var
// 	var balance = 1000;

// 	//public interface
// 	return { 
// 		//returns balance but makes balance protected
// 		getBalance: function() {
// 			return balance;
// 		},
// 		setBalance: function(newBalance) {
// 			if (newBalance < 500) {
// 				return;
// 			}
// 			//sets newBalance to var balance
// 			balance = newBalance;
// 		}
// 	}
// })();















// // var colors = ["red", "yellow", "blue", "green", "orange", "teal"];



// // var reversedColors = colors.reverse();
// // console.log("reversedColors", reversedColors);

// // var joinedColors = colors.join(',');
// // console.log("joinedColors", joinedColors);

// // //join will put array into long sting


// // var fruits = ["banana", "apple", "lemon", "orange"]
// // var citrus = fruits.slice(1,3); // ["Orange", "Lemon"]
// // // exclude the one you end on 



// // //split will split string back into an array




// // // FOR EACH

// // colors.forEach(function(currentColor) { //can name anything - choose currentColor
// // 	console.log(color);					//
// // })

// // //functionally these two are the same
// // for (var i = colors.length - 1; i >= 0; i--) {
// // 	console.log(colors[i]); 
// // };





// // // MAP - creates new array off old one
// // var reversedColors = colors.map(function(currentColor) {
// // 	return currentColor.split('').reverse().join('');
// // });
// // console.log("colors", colors);
// // console.log("reversedColors", reversedColors);



// // //  FILTER - CREATES A NEW ARRAY WHICH WILL BE POPULATED WITH ITEMS FROM THE ORIGINAL ARRAY THAT MATCH A CERTAIN CRITERIA

// // var fourLetters = colors.filter(function(currentColor) {
// // 	return currentColor.length === 4;
// // });
// // console.log("fourLetters", fourLetters);
// // // prints "blue" and "teal"

// // //OLD VERSION OF FILTER
// // var fourLetters = [];
// // for (var i = colors.length - 1; i >= 0; i--) {
// // 	if(colors[i].length === 4) {
// // 		fourLetters.push(colors[i]);
// // 	}
// // }
// // console.log("fourLetters", fourLetters);




// // // REDUCE - WILL PERFORM THE SAME OPERATION AS FOR EACH, BUT RETURNS ONLY A SINGLE VALUE

// // var numbers = [51, 10 ,62, 4, 13, 9];
// // //
// // var sum = numbers.reduce(function (prev, curr) {
// // 	return prev + curr;
// // });
// // console.log("sum", sum);



















