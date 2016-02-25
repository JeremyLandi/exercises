"use strict"


describe("The specification for calculations", function() {
	
	it("should have an add function", function() {
		//expect will be in every piece of code
		expect(add).toBeDefined();
	});

	it("should add two integers", function() {
		expect(add(2,5)).toBe(7);
	});

	it("should have a subtract function", function() {
		//expect will be in every piece of code
		expect(subtract).toBeDefined();
	});

	it("should subtract two integers", function() {
		expect(subtract(7,5)).toBe(2);
	});

	it("should have a multiply function", function() {
		expect(multiply).toBeDefined();
	});

	it("should multiply two integers", function() {
		expect(multiply(3,4)).toBe(12);
	});

	it("should have a divide function", function() {
		expect(divide).toBeDefined();
	});

	it("should divide two integers", function() {
		expect(divide(12,4)).toBe(3);
	});

	it("should have a square function", function() {
		expect(square).toBeDefined();
	})

	it("should multiply a number by itself", function() {
		expect(square(4)).toBe(16);
	})

  it("should find the square root", function() {
		expect(squareRoot(16)).toBe(4);
  })

	it("should have a squareRoot function", function() {
  	expect(squareRoot).toBeDefined();
	})


});















