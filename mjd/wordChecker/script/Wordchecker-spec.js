


describe("Test JavaScript functions", function() {
	
	it("should be a function defined with the name checkWordCount", function() {
		expect(checkWordCount).toBeDefined();
	});

	it("should return false if a string sent to it has more than 100 words", function() {
		expect(checkWordCount("hello world")).toBeLessThan(100);
	});
	// console.log("checkWordCount", checkWordCount("hello world"));


	it("should be a function defined with the name duplicateCheck", function() {
		expect(duplicateCheck).toBeDefined();
	});

	it("should return false if a string has duplicate words in it", function() {
		expect(duplicateCheck("hello world world")).toBe(false);
	})


	it("should be a function defined with the name verifyAlphaNumeric", function() {
		expect(verifyAlphaNumeric).toBeDefined();
	});

	it("should return false if there are any non-alphanumeric characters in a string", function() {
		expect(verifyAlphaNumeric("Hello world!@##")).toBe(false);
	});


});




















	// it("should have an add function", function() {
	// 	//expect will be in every piece of code
	// 	expect(add).toBeDefined();
	// });

	// it("should add two integers", function() {
	// 	expect(add(2,5)).toBe(7);
	// });

	// it("should have a subtract function", function() {
	// 	//expect will be in every piece of code
	// 	expect(subtract).toBeDefined();
	// });

	// it("should subtract two integers", function() {
	// 	expect(subtract(7,5)).toBe(2);
	// });

	// it("should have a multiply function", function() {
	// 	expect(multiply).toBeDefined();
	// });

	// it("should multiply two integers", function() {
	// 	expect(multiply(3,4)).toBe(12);
	// });

	// it("should have a divide function", function() {
	// 	expect(divide).toBeDefined();
	// });

	// it("should divide two integers", function() {
	// 	expect(divide(12,4)).toBe(3);
	// });

	// it("should have a define function", function() {
	// 	expect(absolute).toBeDefined();
	// });

	// it("should not return undefined", function() {
	// 	expect(absolute(subtract, 5, 7)).not.toBe(-2);
	// });

	// it("should return the absolute value of a subtraction", function() {
	// 	expect(absolute(subtract, 5, 7)).toBe(2);
	// });




