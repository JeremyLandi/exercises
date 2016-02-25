
function Car () {
	this.manufactured_date = 2016;
	this.color = null;
}

Car.prototype.setColor = function (currentColor) {
	this.color = currentColor
};


function Manufacturer (currentManufacturer) {
	this.manufacturerName = currentManufacturer;
	// this.make = null;
}
Manufacturer.prototype = new Car();


function Jeep () {
	this.offRoad = true;
} 
Jeep.prototype = new Manufacturer("Fiat Chrysler Automobiles");

function BMW () {
	this.drivingMachine = true;
}
BMW.prototype = new Manufacturer("BMW");

function Ford () {}
Ford.prototype = new Manufacturer("Ford");



function Cherokee () {}
Cherokee.prototype = new Jeep();

function Mini () {}
Mini.prototype = new BMW();

function LandRover () {}
LandRover.prototype = new Ford();



// this is the only place where we actually create a new object


var niceCar1 = new LandRover();
var niceCar2 = new LandRover();
	console.log("LandRover1", niceCar1);
	console.log("LandRover2", niceCar2);

niceCar1.setColor("Grey");
niceCar2.setColor("Black");


var smallCar1 = new Mini("Clubman");
	console.log("Mini1", smallCar1);

smallCar1.setColor("Orange");



var offroadCar1 = new Cherokee();
var offroadCar2 = new Cherokee();
var offroadCar3 = new Cherokee();
	console.log("Cherokee1", offroadCar1);
	console.log("Cherokee2", offroadCar2);
	console.log("Cherokee3", offroadCar3);

offroadCar1.setColor("White");
offroadCar2.setColor("Red");
offroadCar3.setColor("Blue");




