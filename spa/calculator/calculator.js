

//BINDERs
var add = document.getElementById("add")
var subtract = document.getElementById("subtract");
var multiply = document.getElementById("multiply");
var divide = document.getElementById("divide");

// //EVENT HANDLERS
add.addEventListener('click', function() {
  clickFunc(addStuff)
});

subtract.addEventListener('click', function() {
  clickFunc(subtractStuff)
});

multiply.addEventListener('click', function() {
  clickFunc(multiplyStuff)
});

divide.addEventListener('click', function() {
  clickFunc(divideStuff)
});

function clickFunc(callback) {
  var value1 = document.getElementById("num1").value;
  var value2 = document.getElementById("num2").value;
  calculate(value1, value2, callback);

};

function calculate (num1, num2, callback2) {
  callback2(num1, num2)
};

function addStuff(num1, num2) {
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  console.log(num1 + num2);
};
function subtractStuff (num1, num2) {
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  console.log(num1 - num2);
  
};
function multiplyStuff (num1, num2) {
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  console.log(num1 * num2);
  
};
function divideStuff (num1, num2) {
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  console.log(num1 / num2);
  
};





