
/* PLANT */

function Plant() {
	this.height = 0;
}

// var newPlant = new Plant();
// 	console.log("Plant", newPlant);


Plant.prototype.increaseHeight = function (growth) {
	this.height += growth;
	return this.height;
}

// var newPlant = new Plant();
// 	console.log("Plant", newPlant.increaseHeight(10));


Plant.prototype.decreaseHeight = function (shrink) {
	this.height -= shrink;
	return this.height;
}

// var newPlant = new Plant();
	// console.log("Plant", newPlant.decreaseHeight(10));
	// console.log("Plant", newPlant);



/* TREE */

function Tree() {
	this.branch = 0;
	this.treeCounter = 1;
}
Tree.prototype = new Plant();


Tree.prototype.grow = function(growHeight) {
	// console.log("OakTreeHeight", OakTreeHeight);

	var treeHeight = this.increaseHeight(growHeight)

		console.log("treeHeight", treeHeight);
	
	if (Math.floor(treeHeight / 10) === this.treeCounter ) {
			// console.log("growHeight", growHeight);
		this.branch += 1;
		// console.log("this.branch", this.branch);
	this.treeCounter++;
	}
		// console.log("this.treeCounter", this.treeCounter);
	return this.height;
}

Tree.prototype.trim = function(trimHeight) {
	var treeHeight = this.decreaseHeight(trimHeight);
	
	this.branch -= 1;
	return this.height;
}




var PearTree = new Tree();
var OakTree = new Tree();
	// console.log("Tree", PearTree.grow(2));

var counter1 = 1;

var IntID = setInterval(interval, 100);
var setID = setTimeout(function(){clearInterval(IntID)}, 3000);

function interval() {

		var PearTreeHeight = PearTree.grow(3);
		var OakTreeHeight = OakTree.grow(4);
			// console.log("OakTreeHeight", OakTreeHeight);


		// console.log("counter1", counter1);
		
		if (counter1 % 10 === 0 ) {
			PearTree.trim(6);
			OakTree.trim(8);
		}
	
		// console.log("PearTreeHeight", PearTreeHeight);
		// console.log("OakTreeHeight", OakTreeHeight);
		$("#output").append(`<p> Pear tree is now ${PearTreeHeight}cm tall, and has ${PearTree.branch} branches <br> Oak tree is now ${OakTreeHeight}cm tall, and has ${OakTree.branch} branches</p>`);
		counter1++;

}




// 	console.log("PearTree branch", PearTree.height);
// 	console.log("PearTree branch", PearTree.grow(17));
// 	console.log("PearTree branch", PearTree.height);

// 	console.log("PearTree branch", PearTree.trim(7));
// 	console.log("PearTree branch", PearTree.height);


// 	console.log("OakTree branch", OakTree.height);
// 	console.log("OakTree branch", OakTree.grow(10));
// 	console.log("OakTree branch", OakTree.height);

// Tree.prototype.growBrch = function(growBranch) {
// 	this.branch += growBranch;
// 	return this.branch;
// }
















