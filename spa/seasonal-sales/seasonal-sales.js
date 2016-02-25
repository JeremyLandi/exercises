var SeasonalSales = (function () {
var categories = [];
var products = [];


	return {
		loadCategories: function(callbackToExecute) {
			var loader = new XMLHttpRequest();

			loader.addEventListener("load", function () {
				// console.log("this.responseText", this.responseText);
				var data = JSON.parse(this.responseText);
				// console.log("data.categories: ", data.categories);
				categories = data.categories;

				callbackToExecute(categories);
			});

			loader.open("GET", "categories.json")
			loader.send();
		},

		loadProduct: function(callbackToExecute) {
			var loader = new XMLHttpRequest();

			loader.addEventListener("load", function() {
				var data = JSON.parse(this.responseText);
				products = data.products;

				// console.log("products", products);
				callbackToExecute(products);

			});

			loader.open("GET", "products.json");
			loader.send();
		}
	}
})();







