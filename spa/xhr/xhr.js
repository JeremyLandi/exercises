


console.log("First line in Javascript file");
console.log(Date.now());



function executeThisCodeIfXHRFails(xhrEvent) {
	console.log("An error occurred while transfering this file");
}


function executeThisCodeWhenChuncksArrive(xhrEvent) {
}

function executeThisCodeAfterFileIsLoaded() {
	console.log("executeThisCodeAfterFileIsLoaded");
	console.log(Date.now());

	

	//get the response data as a string
		console.log("responseText", this.responseText);
	// parse = turns into javascript	
		var data = JSON.parse(this.responseText);

	//Parse the response text as JSON
		console.log("data", data);

		var contentEl = document.getElementById("all-my-songs");
		console.log("contentEl", contentEl);

		var songData = "";
		var currentSong;

		for (var i = 0; i < data.songs.length; i++) {
			currentSong = data.songs[i];

			songData += "<div class='song-block'>";
			songData += `<h1> ${currentSong.title} </h1>`;
			songData += "<div class='artist'> Performed by ";
			songData += currentSong.artist;
			songData += `</div>`; 
			songData += "<div class='album'>On the album ";
			songData += currentSong.album;
			songData += "</div>";
			songData += "</div>";
		}

		console.log(songData);
		contentEl.innerHTML = songData;
}

var myRequest = new XMLHttpRequest();


// this event will fire when finished loading
myRequest.addEventListener("load", executeThisCodeAfterFileIsLoaded);

// if fail open this file
myRequest.addEventListener("error", executeThisCodeIfXHRFails);

//if in progress
myRequest.addEventListener("progress", executeThisCodeWhenChuncksArrive);
//what to do 
myRequest.open("GET", "songs.json");
// go!
myRequest.send();


console.log("Last line in Javascript file");
console.log(Date.now());







	// GET 
	// POST 
	// PUT
	// DELETE

