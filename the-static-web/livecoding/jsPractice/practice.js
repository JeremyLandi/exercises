
// FIRST WAY TO GET'ER DONE

var adventure = [];
  
var adventure0 = {
	adventure: "Dirt Biking",
	imageUrl: "http://www.teammcc.com/images/pages/parts/tmcc_img_parts.jpg",
	description: "We run short guided adventure tours that take you along jungle trails and up into the hill tribe areas. There’s plenty of rugged terrain to ensure even the most experienced riders’ skills are tested but just as thrilling for many is seeing parts of Thailand not seen by most tourists.",
	price: "$100 (3 hour tour)",
	buttonLink: "schedule.html",
	buttonText: "I want to dirt bike"    
};

var adventure1 = {
	adventure: "Go-Karting",
	imageUrl: "https://farm2.staticflickr.com/1465/23880867454_e8f2711ed5_o.jpg",
	description: "Go racing in the latest drifter go-karts. Unlike ordinary go karts, these cars are designed to slide on a specially prepared track surface and, once you get the knack, you’ll have great fun sliding these speedy little machines around our twisting circuit.",
	price: "$25.00 (20 Laps)",
	buttonLink: "schedule.html",
	buttonText: "I want to go-kart"  
};

var adventure2 = {
	adventure: "Zip Line",
	imageUrl: "https://farm2.staticflickr.com/1537/24115489839_e703690382_o.jpg",
	description: "Haven’t had enough? Need more bragging rights? The Adventure Tour Extreme features up to 20 zip lines and 11 sky bridges. This tour will include a zip line over 900 feet and our super zip line called “Mega Zip.” The Mega Zip is nearly 1,800 feet long—which is six football fields long—and it has two lines that can be used for racing.",
	price: "$120.00 (3hrs)",
	buttonLink: "schedule.html",
	buttonText: "I want to zip line"  
 };

var adventure3 = {
	adventure: "Rock Climbing",
	imageUrl: "https://farm2.staticflickr.com/1714/24187691280_c7b3e44793_o.jpg",
	description: "Over two full days, we focus on the essential skills required to get out on the rock and climb. Educational topics include climbing movement and bouldering skills; knots, rope, and anchor work; belaying and rappelling; map reading; and communication while climbing. We also cover equipment—what's needed and what's not—as well as storage and proper use.",
	price: "$540.00 (3 days)",
	buttonLink: "schedule.html",
	buttonText: "I want to rock climb"  
 };

var adventure4 = {
	adventure: "Off-Road Buggy ",
	imageUrl: "https://farm2.staticflickr.com/1538/24508427655_524150744a.jpg",
	description: "Go racing in the latest drifter go-karts. Unlike ordinary go karts, these cars are designed to slide on a specially prepared track surface and, once you get the knack, you’ll have great fun sliding these speedy little machines around our twisting circuit.",
	price: "$100 (3 hours)",
	buttonLink: "schedule.html",
	buttonText: "I want to buggy"  
};

var adventure5 = {
	adventure: "Spelunking",
	imageUrl: "https://farm2.staticflickr.com/1646/24483239665_067974b47f_o.jpg",
	description: "A high, twisting rock climb leads you to the grand prize of this trip. You will be one of the few lucky enough to get to see “The Monument Pillar.” This formation has been described as the most beautiful single formation ever seen. You will be glad you brought your camera for this rare and beautiful site. Make some memories and take lost of cave photos to show your friends and family.",
	price: "$100.00 (4hrs)",
	buttonLink: "schedule.html",
	buttonText: "I want to spelunke"  
};

var adventure6 = {
  adventure: "Skiing",
  imageUrl: "http://www.allalpinesports.com/english/wp-content/uploads/english/ski_instructor_zermatt.jpg",
  description: "Visit the most popular Ski resort in the area.",
  price: "Day pass $76.00",
  buttonLink: ".html",
  buttonText: "I want to Ski"
};

var adventure7 = {
  adventure: "Bungy Jumping",
  imageUrl: "http://www.travelodestination.com/wp-content/uploads/2012/04/Bungy-Jumping.jpg",
  description: "VYou are about to become part of a small minority who can say they have jumped off a bridge connected to a giant rubber band!",
  price: "$107",
  buttonLink: ".html",
  buttonText: "I want to jump"
};
 
var adventure8 = {
  adventure: "Skydiving",
  imageUrl: "http://images.indianexpress.com/2016/01/skydive-ians-3.jpg?w=450?w=65",
  description: "Visit the most popular Ski resort in the area.",
  price: "Tandem jump $299",
  buttonLink: ".html",
  buttonText: "I want to Skydive"
};

adventure.push(adventure0);
adventure.push(adventure1);
adventure.push(adventure2);
adventure.push(adventure3);
adventure.push(adventure4); 
adventure.push(adventure5);
adventure.push(adventure6); 
adventure.push(adventure7);
adventure.push(adventure8);

console.log(adventure);

var currentAdventure = document.getElementById("javascript");

for (var i = 0; i < adventure.length; i++) {
	currentAdventure.innerHTML += "<article class='adventure'>";
	currentAdventure.innerHTML += "<section>";
	currentAdventure.innerHTML += "<img src='" + adventure[i].imageUrl + "'>";
	currentAdventure.innerHTML += "<h3>" + adventure[i].adventure + "</h3>";
	currentAdventure.innerHTML += "<p>" + adventure[i].description + "</p>";
	currentAdventure.innerHTML += "</section>";
	currentAdventure.innerHTML += "<section>";
	currentAdventure.innerHTML += "<h4>" + adventure[i].price + "</h4>";
	currentAdventure.innerHTML += "<button><a href='" + adventure[i].buttonLink + "'>" + adventure[i].buttonText + "</a></button>";
	currentAdventure.innerHTML += "</section>";
	currentAdventure.innerHTML += "</article>";

}



// //SECOND WAY TO GET'ER DONE

// var adventure = [];

// var dirtbiking = {
// 	adventure: "Dirt Biking",
// 	imageUrl: "http://www.teammcc.com/images/pages/parts/tmcc_img_parts.jpg",
// 	description: "We run short guided adventure tours that take you along jungle trails and up into the hill tribe areas. There’s plenty of rugged terrain to ensure even the most experienced riders’ skills are tested but just as thrilling for many is seeing parts of Thailand not seen by most tourists.",
// 	price: "$100 (3 hour tour)",
// 	buttonLink: "schedule.html",
// 	buttonText: "I want to dirt bike"    
// };

// var gokarts = {
// 	adventure: "Go-Karting",
// 	imageUrl: "https://farm2.staticflickr.com/1465/23880867454_e8f2711ed5_o.jpg",
// 	description: "Go racing in the latest drifter go-karts. Unlike ordinary go karts, these cars are designed to slide on a specially prepared track surface and, once you get the knack, you’ll have great fun sliding these speedy little machines around our twisting circuit.",
// 	price: "$25.00 (20 Laps)",
// 	buttonLink: "schedule.html",
// 	buttonText: "I want to go-kart"  
// };

// var zipLine = {
// 	adventure: "Zip Line",
// 	imageUrl: "https://farm2.staticflickr.com/1537/24115489839_e703690382_o.jpg",
// 	description: "Haven’t had enough? Need more bragging rights? The Adventure Tour Extreme features up to 20 zip lines and 11 sky bridges. This tour will include a zip line over 900 feet and our super zip line called “Mega Zip.” The Mega Zip is nearly 1,800 feet long—which is six football fields long—and it has two lines that can be used for racing.",
// 	price: "$120.00 (3hrs)",
// 	buttonLink: "schedule.html",
// 	buttonText: "I want to zip line"  
// };

// var rockClimbing = {
// 	adventure: "Rock Climbing",
// 	imageUrl: "https://farm2.staticflickr.com/1714/24187691280_c7b3e44793_o.jpg",
// 	description: "Over two full days, we focus on the essential skills required to get out on the rock and climb. Educational topics include climbing movement and bouldering skills; knots, rope, and anchor work; belaying and rappelling; map reading; and communication while climbing. We also cover equipment—what's needed and what's not—as well as storage and proper use.",
// 	price: "$540.00 (3 days)",
// 	buttonLink: "schedule.html",
// 	buttonText: "I want to rock climb"  
// };

// var buggy = {
// 	adventure: "Off-Road Buggy ",
// 	imageUrl: "https://farm2.staticflickr.com/1538/24508427655_524150744a.jpg",
// 	description: "Go racing in the latest drifter go-karts. Unlike ordinary go karts, these cars are designed to slide on a specially prepared track surface and, once you get the knack, you’ll have great fun sliding these speedy little machines around our twisting circuit.",
// 	price: "$100 (3 hours)",
// 	buttonLink: "schedule.html",
// 	buttonText: "I want to buggy"  
// }; 

// var spelunking = {
// 	adventure: "Spelunking",
// 	imageUrl: "https://farm2.staticflickr.com/1646/24483239665_067974b47f_o.jpg",
// 	description: "A high, twisting rock climb leads you to the grand prize of this trip. You will be one of the few lucky enough to get to see “The Monument Pillar.” This formation has been described as the most beautiful single formation ever seen. You will be glad you brought your camera for this rare and beautiful site. Make some memories and take lost of cave photos to show your friends and family.",
// 	price: "$100.00 (4hrs)",
// 	buttonLink: "schedule.html",
// 	buttonText: "I want to spelunke"  
// };

// var skiing = {
// 	adventure: "Skiing",
// 	imageUrl: "http://www.allalpinesports.com/english/wp-content/uploads/english/ski_instructor_zermatt.jpg",
// 	description: "Visit the most popular Ski resort in the area.",
// 	price: "Day pass $76.00",
// 	buttonLink: ".html",
// 	buttonText: "I want to Ski"
// };

// var bungyjumping = {
// 	adventure: "Bungy Jumping",
// 	imageUrl: "http://www.travelodestination.com/wp-content/uploads/2012/04/Bungy-Jumping.jpg",
// 	description: "VYou are about to become part of a small minority who can say they have jumped off a bridge connected to a giant rubber band!",
// 	price: "$107",
// 	buttonLink: ".html",
// 	buttonText: "I want to jump"
// };

// var skydiving = {
// 	adventure: "Skydiving",
// 	imageUrl: "http://images.indianexpress.com/2016/01/skydive-ians-3.jpg?w=450?w=65",
// 	description: "Visit the most popular Ski resort in the area.",
// 	price: "Tandem jump $299",
// 	buttonLink: ".html",
// 	buttonText: "I want to Skydive"
// };

// adventure.push(dirtbiking);
// adventure.push(gokarts);
// adventure.push(zipLine);
// adventure.push(rockClimbing);
// adventure.push(buggy);
// adventure.push(spelunking); 
// adventure.push(skiing);
// adventure.push(bungyjumping);
// adventure.push(skydiving);

// console.log(adventure);

// var currentAdventure = document.getElementById("javascript");

// for (var i = 0; i < adventure.length; i++) {
// 	var objectItem = adventure[i];
// 	currentAdventure.innerHTML += "<article class='adventure'>";
// 	currentAdventure.innerHTML += "<section>";
// 	currentAdventure.innerHTML += "<img src='" + objectItem.imageUrl + "'>";
// 	currentAdventure.innerHTML += "<h3>" + objectItem.adventure + "</h3>";
// 	currentAdventure.innerHTML += "<p>" + objectItem.description + "</p>";
// 	currentAdventure.innerHTML += "</section>";
// 	currentAdventure.innerHTML += "<section>";
// 	currentAdventure.innerHTML += "<h4>" + objectItem.price + "</h4>";
// 	currentAdventure.innerHTML += "<button><a href='" + objectItem.buttonLink + "'>" + objectItem.buttonText + "</a></button>";
// 	currentAdventure.innerHTML += "</section>";
// 	currentAdventure.innerHTML += "</article>";
// }







