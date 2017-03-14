//array that stores tvShow title strings
var topics= ["Futurama", "The Office", "Breaking Bad","Mad Men"];


//function to display gifs
function displayShow(){
	  //variables that will store the name of the show(data-name)
	  //and var which stores the api url and inserts the data name value into the search parameters
	  var tvShow = $(this).attr("data-name");
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      tvShow + "&api_key=dc6zaTOxFJmzC&limit=10";
      	//call to api using GET method
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
	          //this class will later be referenced by an event listener in order to pause or
	          //start gif 
	          tvImage.addClass("gif");

	          /*each image contains an src url, still url, and animate url. The default
	          url is set to still. This will allow us to animate and pause each gif.*/
	          tvImage.attr("src",results[i].images.fixed_height_still.url);
	          tvImage.attr("data-still", results[i].images.fixed_height_still.url);
	          tvImage.attr("data-animate",results[i].images.fixed_height.url);
	          
	          /*the data state is also added to the image as an attribute, this will be used in
	          a conditional statement later in order to determine whether to use the still or animate url*/
	          tvImage.attr("data-state","still")
	          tvDiv.append(p);
	          tvDiv.append(tvImage);
	          $("#gifs-appear-here").prepend(tvDiv);

      	 }

		});

	   }
	 //function which adds a button to the top of the page when user inputs data
	 //into form field 
	 function renderButtons() {
	 	//event listener which prevents there from being repeat buttons
	 	 $("#buttons-view").empty();
	 	 // loop which goes through each of he topics in our topics array and adds
	 	 // a button tag,class, attribute and text inside button to our html
	 	 for (var i = 0; i < topics.length; i++) {

	 	 	var button = $("<button>");
	 	 	button.addClass("tvShow");
	 	 	//data name is added to button so that when display show function runs we can use 
	 	 	//the data name in the url we are using to query the api
	 	 	button.attr("data-name", topics[i]);
	 	 	button.text(topics[i]);
	 	 	$("#buttons-view").append(button);

	 	 }

	 }
	 
	 //event listener which pushes user input into the topics array. 
	  $("#add-show").on("click", function(event) {

	  	event.preventDefault();
	  	//variable that stores user input
	  	var tvInput = $("#tvShow-input").val().trim();
	  	//method which pushes user input to existing topics array
	  	topics.push(tvInput);
	  	//call to function which creates button and appends it to html
	  	renderButtons();

	  });
	  //event listener which executes function whenever anything with the class of "gif" 
	  //is clicked
	  $(document.body).on("click", ".gif", function() {
		  
	  				//variable which stores the data state of the image
				  	var state = $(this).attr("data-state");
				  	
				  	/*conditional statement which allows us to animate or pause gif based on the 
				  	state of the image*/
				  	if (state === "still") {
				  	/*if the state is still when clicked, the src attribute of the clicked object is
				  	changed to the data-animate url*/
			        $(this).attr("src", $(this).attr("data-animate"));
			        //the value of data-state attribute is also changed to animate
			        $(this).attr("data-state", "animate");
			         } 
			         /*if the state is not still when the object is clicked, the src attribute
			         is changed to the data still url and data state value changed to still*/
			        else {
			        $(this).attr("src", $(this).attr("data-still"));
			        $(this).attr("data-state", "still");
			     	 }

			});
	
	 //event listener for anything with the tvShow class (our buttons),
	 //when clicked the displayShow function will run
	 $(document).on("click", ".tvShow", displayShow);
	 //call to render buttons 
	 renderButtons();
