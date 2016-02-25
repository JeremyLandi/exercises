document.getElementById("list--1").addEventListener("click", handleItemClick);
// document.getElementsByTagName("section").addEventListener("click", function (evt) {
// 	console.log(evt.target);
// })


function handleItemClick (evt) {
	console.log("element", evt.target);
	//captures where event was fired
	console.log("element", evt.currentTarget);
}


//indexOf looks for anything that containes "carnivore--"
var isCarnivore = evt.target.id.indexOf("carnivore--");
var isHerbivore = evt.target.id.indexOf("herbivore--");

if (isCarnivore !== -1) {
	console.log("I am a carnivore");
};

document.addEventListener("click", function (evt) {
	console.log(evt.target);
})