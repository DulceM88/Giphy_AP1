# Giphy_API Homework

## Live Link
https://dulcem88.github.io/Giphy_API/


##This app uses the Giphy Api to display a set of 10 gifs. Gifs are animated and paused if the user clicks on them. The user may input a topic into the search field and a button will be added to the top of the screen. The user can then click this button and a set of gifs will be generated based on the topic they input in the field.

##Requirements
- utilize the Giphy API
- add start and pause functionality to gifs
- dynamically generate buttons

## Technologies Used
- Jquery to dynamically generate elements to html 
- AJAX for requests to API
- JavaScript loops and functions to parse through JSON objects returned from API
## Code Summary
- For this assignment I decided to begin my JavaScript logic by setting up an array of topics. I wrote a function which would generate buttons for each item in the array and displayed them in the html. I used event listeners which would trigger functions that dynamically generated tags and appended class and data-name information to each button. The data name information was then stored in a variable and used in my AJAX call to the Giphy API. 
- In order to add pause and animate functionality to each gif I wrote a function which parsed through the object returned from the API and stored both the static and animated urls in separate attributes which were added to the whole image tag. I also assigned each image a default data state of still.
- From there I created an event listener which triggers a conditional statement which evaluates what state the gif is in. If the gif is in a "still" state when its clicked the source attribute of the image is changed to the animated url and the state is changed to "animate". If the gif is in the "animate" state when clicked the source url of the image returns to the still url and the state is stored as "still".
