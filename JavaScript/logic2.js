
var topics= ["Futurama", "The Office", "Breaking Bad","Mad Men"];

function displayShow(){

	  var tvShow = $(this).attr("data-name");
      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
      tvShow + "&api_key=dc6zaTOxFJmzC&limit=10";

        $.ajax({
        url: queryURL,
        method: "GET"
      //done function waits for info from api to load before executing this code
      }).done(function(response) {
      	console.log(response);

      	//variable stores response data from api
      	var results= response.data;
      	// loop which parses through each results item and appends a 
      	//div,p, and img element to each item
      	 for (var i = 0; i < results.length; i++) {
      	 	 var tvDiv= $("<div>");
          
          	 var p = $("<p>");
         	 p.text(results[i].rating);

	          var tvImage= $("<img>"); 
	          tvImage.attr("src",results[i].images.fixed_height.url);
	          tvDiv.append(p);
	          tvDiv.append(tvImage);
	          $("#gifs-appear-here").prepend(tvDiv);

      	 }

		});

	   }
	 function renderButtons() {
	 	 $("#buttons-view").empty();

	 	 for (var i = 0; i < topics.length; i++) {

	 	 	var button = $("<button>");
	 	 	button.addClass("tvShow");
	 	 	button.attr("data-name", topics[i]);
	 	 	button.text(topics[i]);
	 	 	$("#buttons-view").append(button);

	 	 }

	 }

	  $("#add-show").on("click", function(event) {

	  	event.preventDefault();

	  	var tvInput = $("#tvShow-input").val().trim();
	  	topics.push(tvInput);
	  	renderButtons();

	  });

	 $(document).on("click", ".tvShow", displayShow);
	 renderButtons();
