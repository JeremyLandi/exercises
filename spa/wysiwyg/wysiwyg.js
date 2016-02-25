var famousPeople = [];

var person0 = {
  title: "Samurai",
  name: "Tomoe Gozen",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: 1747,
    death: 1797
  }
};
var person1 = {
  title: "King",
  name: "Alaric the Visigoth",
  bio: "Alaric the Barbarian was a Visigoth king who has the distinction of being the one who sacked Rome. ",
  image: "http://cdn2.list25.com/wp-content/uploads/2014/10/Alaric-the-Visigoth-610x386.jpg",
  lifespan: {
    birth: 370,
    death: 410
  }
};
var person2 = {
  title: "Warrior",
  name: "Leonidas of Sparta",
  bio: "Leonidas I was one of the two kings of Sparta during the Greco-Persian wars and the leader of one of the most ferocious military units in history: the three hundred Spartan hoplites.",
  image: "http://cdn3.list25.com/wp-content/uploads/2014/10/6097-king-leonidas-1366x768-movie-wallpaper-610x392.jpg",
  lifespan: {
    birth: 530,
    death: 480
  }
};
famousPeople.push(person0);
famousPeople.push(person1);
famousPeople.push(person2);

var people = document.getElementById("output");


for (var i = 0; i < famousPeople.length; i++) {
  famousPeople[i]

  var peopleBuilder = "<div  class='famousPeople col-md-4' id='famousPeople" + [i] + "' >";
	peopleBuilder += `<h1> ${famousPeople[i].name}: ${famousPeople[i]. title} </h1>`;
	peopleBuilder += `<section> <p>${famousPeople[i].bio}</p> <img src=${famousPeople[i].image}> </section>`;
	peopleBuilder += `<footer> Birth: ${famousPeople[i].lifespan.birth} Death: ${famousPeople[i].lifespan.death} </footer>`;
  peopleBuilder += `</div>`;

  people.innerHTML += peopleBuilder;
 
};

var input = document.getElementById('text');
var person = document.getElementsByClassName('famousPeople');
// console.log("person", person[0]);

for (var i = 0; i < person.length; i++) {
  currentPerson = person[i];
  // console.log("currentPerson", currentPerson.innerHTML);

  currentPerson.addEventListener('click', function() {
    console.log("this", this);
    
    var currentFocus = document.getElementById('text');
    text.focus();

    console.log("currentFocus: ", currentFocus);
    this.classList.toggle('border');

    console.log(this.childNodes[1].childNodes[1]);
    var inputValue = this.childNodes[1].childNodes[1];

    var input = document.getElementById('text');
    input.addEventListener('keyup', function () {
      inputValue.innerHTML = input.value;
    })
  })
}


input.addEventListener('keyup', function(e) {
  if (e.keyCode === 13) { 
    input.value = "";
  }
});







