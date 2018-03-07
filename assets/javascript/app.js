$(document).ready(function() {

var topics = ['lions','tigers','bears','sharks'];



// Create buttons

var createButton = function() {
	
	$("#buttonsShow").empty();

	for (var i = 0; i < topics.length; i++) {
		var newButton = $("<button>");
		newButton.html(topics[i]);
		newButton.addClass("btn animal");


		$("#buttonsShow").append(newButton);
	}
};

	createButton();

// Adding buttons

$("#searchButton").on("click", function() {

	event.preventDefault();
	var input = $("#inputId").val().trim();

	topics.push(input);

	createButton();

});


// Button Functionality

$(document).on("click", ".animal", function() {
	
	var searchTerm = $(this).html();
	
	var key = "2orTtjnU84tc7bM0NzkX1DE8B0UfWJKg";

	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=" + key +"&limit=10";

	$.ajax({
		url: queryURL,
		method: "GET"
	}).then(function(results) {

		for(var i = 0; i < results.data.length; i++) {
			var rating = results.data[i].rating;
			var url = results.data[i].images.fixed_height_small.url;

			var newDiv = $("<div>");
			var newImg = $("<img>");
			
			newImg.attr("src", url);

			var newP = $("<p>");

			newP.html(rating);

			newDiv.append(newImg).append(newP);

			$("#gifShow").append(newDiv);
			
		};
		console.log(results);
	});

});



});
