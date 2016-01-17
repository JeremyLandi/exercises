var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];



for (i = 0; i < reindeer.length && colors.length; i++) {
	var reindeerList = (reindeer[i]);
	var colorList = (colors[i]);
	document.getElementById("reindeer").innerHTML += 
	"<h2>" + colorList + " " +  reindeerList + "</h2>";
}










