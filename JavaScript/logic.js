
//Event listener for click event on page, on click data title is retrieved
//and stored in tvShow variable
 $("button").on("click", function() {
      var tvShow = $(this).attr("data-title");
     
     //variable which stores url to giphy,search parameters, and dynamically
     //inserts tvShow var to into the url
      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
      tvShow + "&api_key=dc6zaTOxFJmzC&limit=10";
      //Call to giphy api utilizing get method
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


    });