

describe("Test Orchard function", function() {

	// There should be a Plant function defined.
	it("should define Plant", function() {
		expect(Plant).toBeDefined();
	})

	// There should be a Tree function defined.
	it("should define Tree", function() {
		expect(Tree).toBeDefined();

	})

	// There should be a function named increaseHeight on the prototype of Plant.
	it("should have a function named increaseHeight on the prototype of Plant", function() {
		expect(Plant.prototype.increaseHeight).toBeDefined();
	})

	// There should be a function named decreaseHeight on the prototype of Plant.
	it("should have a function names decreaseHeight on the prototype of Plant", function() {
		expect(Plant.prototype.decreaseHeight).toBeDefined();
	})

	
	// There should be a height property on Plant.
	it("should be a height property on Plant", function() {
		var newPlant = new Plant();
		expect(newPlant.height).toBe(0);
	})

	
	// There should be a function named grow on the prototype of Tree.
	it("should be a function named grow on the prototype of Tree", function() { 
		expect(Tree.prototype.grow).toBeDefined();
	})

	// There should be a function named trim on the prototype of Tree.
	it("should be a function named trim on the prototype of Tree", function() {
		expect(Tree.prototype.trim).toBeDefined();
	})

	// When you invoke the trim method on Tree, the height of the Tree should be reduced by the integer value that is passed as an argument (e.g. PearTree.trim(2))
	it("should be reduced by the integer value that is passed as an argument", function() {
		var PearTree = new Tree();
		var trimHeight = 3;
		PearTree.height = 5;
		expect(PearTree.trim(trimHeight)).toBe(2);
	})

// When you invoke the grow method on Tree, the height of the Tree should be increased by the integer value that is passed as an argument (e.g. PearTree.grow(2))
	it("should be increase by the integer value that is passed as an argument", function() {
		var PearTree = new Tree();
		var growHeight = 2;
		PearTree.height = 5;
		expect(PearTree.grow(growHeight)).toBe(7);
	})

	// When you invoke the trim method on Tree, the values of the branches property should be decreased by one.
	it("When you invoke the trim method on Tree, the values of the branches property should be decreased by one", function() {
		var PearTree = new Tree();
		PearTree.branch = 10;
		PearTree.trim(1);
		expect(PearTree.branch).toBe(9);
	})



});














