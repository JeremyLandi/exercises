
// var card = [];

//Cache DOM
var createButton = document.getElementById("createButton");
var textarea = document.getElementById("textarea");

//Binding elements
createButton.addEventListener("click", addCard);

//counter makes each card unique
counter = 0;

function addCard(button) {

	if (textarea.value === "" || null) {
		return false;
	};

 // ** FIRST WAY TO GET IT DONE **	
	var content = "";
	
	content += "<div class='card' id='card" + counter + "'>";
	content += "<button class='deleteButton' onclick=deleteCard(this)>X</button>";
	content += "<h1>" + textarea.value + "</h1>";
	content += "</div>";
	textarea.value = "";
	counter++;

	var output = document.getElementById("output");
	output.innerHTML += content;



	// // ** SECOND WAY TO GET IT DONE **
	// var divCreater = document.getElementById("output");
	// divCreater.innerHTML += "<div class='card' id='card" + counter + "'></div>";
	
	// //builds each card
	// var output = document.getElementById("card" + counter);
	// console.log(output);
	
	// //creates div node where cards can live
	// output.innerHTML += "<button class='deleteButton' onclick=deleteCard(this)>X</button>";
	// output.innerHTML += "<h1>" + textarea.value + "</h1>";
	// output.innerHTML += "</div>";
	// // // card.push(output);
	// textarea.value = "";
	// counter++;	
}
function deleteCard(button) {
	button.parentNode.parentNode.removeChild(button.parentNode);
}


