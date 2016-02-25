function Vehicle () {
  this.manufactured_date = Date.now();
  this.model = null;
  this.tires = [];
  this.axels = 0;
  this.currentSpeed = 0;
  this.direction = null;
  this.loud = false;
}

//defining behavior - giving funcionality
Vehicle.prototype.accelerateTo = function (speed) {
    //setting condition
  if (speed <= 0 || speed > 300) {
    return;
  }
  this.currentSpeed = speed;
}

Vehicle.prototype.turn = function (whichWay) {
  this.direction = whichWay
}


Vehicle.prototype.isPlayingMusic = function (isIt) {
  this.loud = isIt;
}


//ANY ONE OF THESE WILL HAVE MANUFACTURED_DATE, MODEL, TIRES, AXELS, CURRENTSPEED, DIRECTION, LOUD
function Truck () {
  this.bedSize = 0;
}
Truck.prototype = new Vehicle();

function Motorcycle () {
  this.handlebarType = null;
}
Motorcycle.prototype = new Vehicle();

function Semi () {
  this.trailer = null;
}
Semi.prototype = new Vehicle();

function Van () {}
Van.prototype = new Vehicle();

function Car () {}
Car.prototype = new Vehicle();

Car.prototype.changeManufatureDate = function(newDate) {
  this.manufactured_date = newDate;
}



//ITS OWN PROTOTYPE CHAIN
function Tire () {}

//Types of Tire
function Pirelli () {}
Pirelli.prototype = new Tire();


//Types of Pirelli
function PExtreme () {}
PExtreme.prototype = new Pirelli();

function PAwesome () {}
PAwesome.prototype = new Pirelli();



var aNewCar = new Car();
console.log("aNewCar", aNewCar);



//ITS OWN PROTOTYPE CHAIN
function Make (maker) {
  this.manufacturer = maker;
}


function Mini (name) {
  this.modelName = name;
}
Mini.prototype = new Make("BMW");


function Clubman(namer) {
  this.name = namer
}



Clubman.prototype = new Mini("Clubman");
// var Clubman = new Mini("Clubman");
  

  var car1 = new Clubman("White Stallion");
  var car2 = new Clubman("Old Betsy");
  var car3 = new Clubman("Piece of @#$");
  console.log("car1", car1);
  console.log("car2", car2);
  console.log("car3", car3);


function Chevy (name) {
  this.modelName = name;
}
Chevy.prototype = new Make("GM");

function Camaro (namer) {
   this.name = namer
}

Camaro.prototype = new Chevy("Camaro");




var Bumblebee = new Camaro();
// console.log("Bubmlebee", Bumblebee);


var aMotorcycle = new Motorcycle();
var PAwesome1 = new PAwesome();
var PAwesome2 = new PAwesome();
aMotorcycle.tires.push(PAwesome1, PAwesome2);


var aTruck = new Truck();
aTruck.axels = 2;
console.log("aTruck", aTruck);


var aNewCar = new Car();
var Bumblebee = new Camaro();

var Tire1 = new PExtreme();
var Tire2 = new PExtreme();
var Tire3 = new PExtreme();
var Tire4 = new PExtreme();



aNewCar.model = Bumblebee;
  // console.log("aNewCar", aNewCar);  
aNewCar.tires.push(Tire1, Tire2, Tire3, Tire4)












