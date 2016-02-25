

function buildCategories (callbackFunction) {
	console.log("callbackFunction", callbackFunction);
	//BUILDS OUT CATEGORIES
	var categoriesElement = document.getElementById("categories");
	var categoriesData = "";
	var currentCategories;

	categoriesData += "<select name='discount-selector' id='discountSelector'>";
	categoriesData += "<option value='option'>- Select Season for Discounts -</option>";
	for (var i = 0; i < callbackFunction.length; i++) {
		currentCategories = callbackFunction[i]

		categoriesData += "<option value='season" + i + "' id='season"+ i +"'>"+ currentCategories.season_discount + "</option>";		
	};
		categoriesData += "</select>";
		console.log(categoriesData);
	categoriesElement.innerHTML = categoriesData;
}
SeasonalSales.loadCategories(buildCategories);

function buildProduct (callbackFunction) {
	console.log("callbackFunction", callbackFunction);

	//BUILDS OUT PRODUCTS
	var productsElement = document.getElementById("product");
	var productData = "";
	var currentProduct;

	for (var i = 0; i < callbackFunction.length; i++) {
		currentProduct = callbackFunction[i];
		// console.log("currentProduct", currentProduct);

		productData += "<div class='row'>"
	  	productData += "<div class='col-xs-6 col-md-4'>" + currentProduct.name + "</div>";
	  	productData += "<div class='col-xs-6 col-md-4'>" + currentProduct.price + "</div>";
	  	
	  	if (currentProduct.category_id === 1) {
	  		productData += "<div class='col-xs-6 col-md-4'>Winter</div>";
	  		currentProduct.category_id === "Winter";
	  	} else if (currentProduct.category_id === 2) {
	  		productData += "<div class='col-xs-6 col-md-4'>Autumn</div>";
	  		currentProduct.category_id === "Autumn";
	  	} else {
	  		productData += "<div class='col-xs-6 col-md-4'>Spring</div>";
	  		currentProduct.category_id === "Spring";
	  	}
		productData += "</div>";
	};
	productsElement.innerHTML = productData;
}
SeasonalSales.loadProduct(buildProduct);

function priceChange (callbackFunction) {
	//puts each class row into an array 
	var row = document.getElementsByClassName('row');
	//checking what 'row' gets
	console.log(row);
	//checking id on discountSelector
	console.log("discountSelector", discountSelector);
	
	//if user selectes winter(season0), then...
	if (document.getElementById("discountSelector").value === "season0") {
		//for every element in the row array...
		for (var i = 0; i < row.length; i++) {
			//checking where category_id is
			console.log("category_id: ", row[i].childNodes[2].innerHTML);
			var season = row[i].childNodes[2].innerHTML;

			//if category_id("winter") === 1
			if (season === "Winter") {
				var price = row[i].childNodes[1].innerHTML;
				console.log("price: ", price);
				//set adjusted price to innHTML

				var newPrice = (price - price*.1);
				console.log("newPrice: ", newPrice.toFixed(2));

				row[i].childNodes[1].innerHTML = newPrice.toFixed(2);	
			}else {
				//price === price ( I want to make sure all the other prices are reset to their original price)
			};
		} 
	} else if (document.getElementById("discountSelector").value === "season1") {
		for (var i = 0; i < row.length; i++) {

			var season = row[i].childNodes[2].innerHTML;
			if (season === "Autumn") {
				var price = row[i].childNodes[1].innerHTML;
				var newPrice = (price - price*.25);

				row[i].childNodes[1].innerHTML = newPrice.toFixed(2);
			};
		};
	

	}else if (document.getElementById("discountSelector").value === "season2") {
		for (var i = 0; i < row.length; i++) {	

			var season = row[i].childNodes[2].innerHTML;
			if (season === "Spring") {
				var price = row[i].childNodes[1].innerHTML;
				var newPrice = (price - price*.15);

				row[i].childNodes[1].innerHTML = newPrice.toFixed(2);
			};
		};
	}
}

SeasonalSales.loadProduct(priceChange);

document.getElementById("discountSelector").addEventListener("change", priceChange);

































