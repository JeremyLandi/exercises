var a = 0 ;
var b = 0 ;
var c = 0 ;
var d = 0 ;
var f = 0 ;
var score = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

// var grade = [A , B , C, D, F];

for (var i = 0; i < score.length; i++) {
		if (score[i] >= 91) {
			var a = a+1;
		}
		if (score[i] <=90 && score[i] >= 81) {
			var b = b+1;
		}
		if (score[i] <= 80 && score[i] >= 71) {
			var c = c+1;
		}
		if (score[i] <= 70 && score[i] >= 61) {
			var d = d+1;
		}
		if (score[i] <= 60 && score[i] >=50) {
			var f = f+1;
		}
};
console.log("A's", a);
	document.getElementById("grades").innerHTML = "<p>This class has:</p>" 
	+ "<p>" + a + " A's</p>"  
	+ "<p>" + b + " B's</p>"
	+ "<p>" + c + " C's</p>"
	+ "<p>" + d + " D's</p>"
	+ "<p>" + f + " F's</p>";
	// lowest grade

	//highest grade

	
// // ******************************************************
// // Caitlin's code

// var score = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
// var a = 0 ;
// var b = 0 ;
// var c = 0 ;
// var d = 0 ;
// var f = 0 ;
// // var grade = [A , B , C, D, F];

// var highest = 0;
// var lowest = 100;


// for (var i = 0; i < score.length; i++) {
// 	if (score[i] > highest) {
// 		highest = score[i];
// 	}
// };
// console.log("highest score", highest);


// for (var i = 0; i < score.length; i++) {
// 	if (score[i] < lowest) {
// 		lowest = score[i];
// 	}
// };
// console.log("lowest score", lowest);

// // ******************************************************
// // another way to find highest and lowest

// var sortedScore = score.sort();

// var newLowest = sortedScore.shift();
// var newHighest = sortedScore.pop();

// console.log("newHighest", newHighest);
// console.log("newLowest", newLowest);


















	





