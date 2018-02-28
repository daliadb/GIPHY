// ======Javascript/jQuery for GIPHY API===== //

//=======Global Variables=======
	// Theme Array
	var topics = ["Captain Picard",
		"Counselor Troi",
		"Lt. Worf",
		"Data",
		"Dr. Crusher",
		"Commander Riker",
		"LCDR Geordi La Forge",
		"Tasha Yar",
		"Guinan",
		"Miles O'Brien",
		"Q"]

	// New Div Tag
	// var starTrekDIV = $("<div>");

	// New Image Tag
	// var starTrekImg = $("<img>");

// ============ Display GIF Content ========
	function displayGifInfo() {

		var topic = $(topics).attr("data-name");
		var jQueryURL = "https://api.giphy.com/v1/gifs/search?q="
		+ topics + "?api_key=MIDSIJdf7TGdUF7P3gBLcXrCUW4w1z03";

	    // AJAX Function
		$.ajax({
	      url: queryURL,
	      method: 'GET'
	    }).then(function(response) {

	    	console.log(queryURL);
	    	console.log(response);

	    	// Store Rating Data
	    	// var rating = response.rating;
	    	var results = response.data;

	    	for (var i = 0; i < results.length; i++) {

	    		// New Div Tag
				var starTrekDIV = $("<div>");

		    	// Create Rating Element
		    	var p =$("<p>").text("Rating: "
		    		+ results[i].rating);

		    	// New Image Tag
				var starTrekImg = $("<img>");

			    	// Add Class to GIF
			    	starTrekImg.addClass("gif");

			    	// Add Data-State Attr
			    	starTrekImg.attr("data-state", "still");

			    	// Set SRC Attributes from Results
			      	starTrekImg.attr("src", 
			      		results[i].images.
			      		fixed_height.url);

			      	// Add Still & Aninimate Data Attr
			  		starTrekImg.attr("data-still", 
			  			starTrekImg.attr("src"));
					starTrekImg.attr("data-animate",
						starTrekImg.attr("src"));

	      		// Append Paragraph + IMG Tag to StarTrek Div
	      		starTrekDIV.append(p);
	      		starTrekDIV.append(starTrekImg);

	      		// Append StarTrek Div to HTML page
	      		$("#GIFS-view").append(starTrekDIV);
	      	};
	    });
	};


// ==== Turn Array into Buttons =====
	function renderButtons() {
		$("#buttons-view").empty();
	
		for (var i = 0; i < topics.length; i++) {
		
			var a = $("<button>");
			a.addClass("ppl-btn");
			a.attr("data-name", topics[i]);
			a.text(topics[i]);

			$("#buttons-view").append(a);
		};
	};

// ======= Added Input Click Event =======
	$("#add-person").on("click"), function(event) {
		event.preventDefault();

		var people = $("#person-input").val().trim();

		topics.push(people);

		renderButtons();
	};

// ===== Click Event Listener ========
// UPDATE DISPLAY TAG HERE
	$(document).on("click", ".ppl-btn", displayGifInfo);

// ======= Display initial buttons ======

	renderButtons();


// =========== Click Event for All GIFS ========
	$(".gif").on("click", function() {

		// Get or Set Attribute Value
		var state = $(starTrekImg).attr("data-state");

		// Pause vs Animation Logic
		if (state === "still") {
			$(starTrekImg).attr("src", $(starTrekImg).attr("data-animate"));
			$(starTrekImg).attr("data-state", "animate");
		} else {
			$(starTrekImg).attr("src", $(starTrekImg).attr("data-still"));
			$(starTrekImg).attr("data-state", "stil");
		}

	});


