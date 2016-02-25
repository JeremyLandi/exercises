




// There is sample HTML file content below so create an index.html for it and place the content in the body tag.
// Link in a JavaScript file named events.js.
// Link in a CSS file named events.css. You'll be using element.classList to manipulate the CSS classes on elements.
// Note: Output target is the output-target element.


var output = document.getElementById('output-target');


// When any section is clicked the output target text should be "You clicked on the {text of the section} section"

var section = document.getElementsByClassName('articleSection');
console.log("section", section);


function showClickEvent(event) {
	var sectionText = event.target.innerHTML;
	console.log(`You clicked on the ${sectionText} section`);
	output.innerHTML = `You clicked on the ${sectionText} section`;
}

// runs through each element in "section" array
for (var i = 0; i < section.length; i++) {
	section.item(i).addEventListener('click', showClickEvent)
};



// When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".
var header = document.getElementById('page-title');
header.addEventListener('mouseover', mouseoverEventHandler);

function mouseoverEventHandler() {
	console.log("You moved your mouse over the header");
	output.innerHTML = "You moved your mouse over the header";
}
// When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".
header.addEventListener('mouseout', mouseoutEventHandler);

function mouseoutEventHandler() {
	console.log("You left me!!");
	output.innerHTML = "You left me!!";
}

// When you type characters into the input field, the output element should mirror the text in the input field.
var input = document.getElementById('keypress-input');
input.addEventListener('keyup', function mirrorTextInput() {
	// console.log("yout typed something");
	var inputValue = document.getElementById('keypress-input').value;
	output.innerHTML = event.target.value;
	// var input = document.getElementById('keypress-input').value;
	// output.innerHTML = innerHTML.addEventListener('keyup',)
});

// When you click the "Add color" button, the guinea-pig element's text color should change to blue.
var color = document.getElementById('add-color');
color.addEventListener('click', function() {
	document.getElementById('guinea-pig').classList.toggle('blue');
});

// When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.
var hulk = document.getElementById('make-large');
hulk.addEventListener('click', function() {
	document.getElementById('guinea-pig').classList.toggle('hulk');
});
// When you click the "Capture it" button, the guinea-pig element should have a border added to it.
var capture = document.getElementById('add-border');
capture.addEventListener('click', function () {
	document.getElementById('guinea-pig').classList.toggle('border');
});
// When you click the "Rounded" button, the guinea-pig element's border should become rounded.
var round = document.getElementById('add-rounding');
round.addEventListener('click', function() {
	document.getElementById('guinea-pig').classList.toggle('capture')
})
// The first section's text should be bold.
var articleSection = document.querySelectorAll('.articleSection');
articleSection[2].classList.add('bold');
console.log(articleSection[2]);

// The last section's text should be bold and italicized.
articleSection[4].classList.add('boldItalicized');

// Make the buttons stop appearing next to each other as inline elements. Change them into block elements.
var buttonSection = document.querySelectorAll('button');
for (var i = 0; i < buttonSection.length; i++) {
	buttonSection[i].classList.add('blockElements');
};





