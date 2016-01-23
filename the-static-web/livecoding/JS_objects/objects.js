var annoyingSongs = [];

var callMeMaybe = {
	title: "Call Me Maybe",
	artist: "Annoying artist",
	album: "Call Me album"
	// type: {
	// 	style: "Garbage Pop" //can be inside each other
	// }
};
annoyingSongs.push(callMeMaybe);	//adds to annoyingSongs array

var hampster = {
	title: "The Hampsterdance Song",
	artist: "Hampton the Hampster",
	album: "Hampster album"
};

annoyingSongs.push(hampster); //adds to annoyingSongs array

console.log("annoyingSongs", annoyingSongs);


var songElements = document.getElementsByClassName("songs");
// var theOneImLookingFor = songElements[0];

for (var i = 0; i < annoyingSongs.length; i++) {
var currentSong = annoyingSongs[i]; 			  //switches items in array to variable	

var title = "<h1>" + currentSong.title + "</h1>"; // creating new DOM
var album = "<h2>" + currentSong.album + "</h2>"; // creating new DOM
var artist = "<p>" + currentSong.artist + "</p>";

theOneImLookingFor.innerHTML += title + album + artist; // writing: put inside loop to write full html
}

// ????????????????????????????????????????? 
// Showing how to call...
var hampster = {
	title: "The Hampsterdance Song",
	artist: "Hampton the Hampster",
	album: "Annoying album",
}

var monkeybutt = "title";

console.log(hampster[monkeybutt]); // looks at The Hampsterdance Song title because var "monkeybutt"
 				 				  //so it would output "The Hampsterdance Song"
// ?????????????????????????????????????????

















