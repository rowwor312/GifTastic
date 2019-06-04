// Initial array of sports
var sports = ["Football", "Basketball", "Baseball", "Hockey", "Soccer"];

// Function for displaying sport data
function renderButtons() {

  // Deleting the sport buttons prior to adding new sport buttons
  // (this is necessary otherwise we will have repeat buttons)
  $("#buttons-view").empty();

  // Looping through the array of sports
  for (var i = 0; i < sports.length; i++) {

    // Then dynamicaly generating buttons for each sport in the array.
    // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
    var a = $("<button>");
      
    // Adding a class
    a.addClass("sport");
    // Adding a data-attribute with a value of the sport at index i
    a.attr("data-name", sports[i]);
    // Providing the button's text with a value of the sport at index i
    a.text(sports[i]);
    // Adding the button to the HTML
    $("#buttons-view").append(a);
   }
 }

// This function handles events where one button is clicked
$("#add-sport").on("click", function(event) {
  // event.preventDefault() prevents the form from trying to submit itself.
  // We're using a form so that the user can hit enter instead of clicking the button if they want
  event.preventDefault();

  // This line will grab the text from the input box
  var sport = $("#sport-input").val().trim();
  // The sport from the textbox is then added to our array
  sports.push(sport);

  // calling renderButtons which handles the processing of our sport array
  renderButtons();
});

// Calling the renderButtons function at least once to display the initial list of sports
renderButtons();


// Event listener for our button
$("#buttons-view").on("click", function() {
// Grabbing and storing the data-name property value from the button
  // sports = $(this).attr("data-name");

  // Storing our giphy API URL for a sports image
    //  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + sports + "&api_key=VXJCZawhw5pLK0kGoLwR3f15XXtxdWu5";

    // var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=VXJCZawhw5pLK0kGoLwR3f15XXtxdWu5";
    
     var queryURL = "https://api.giphy.com/v1/gifs/search?q=sports&api_key=VXJCZawhw5pLK0kGoLwR3f15XXtxdWu5";

  // Perfoming an AJAX GET request to queryURL
  $.ajax({
    url: queryURL,
    method: "GET"
  })

  // After the data from the AJAX request comes back
    .then(function(response) {

    // Saving the image_original_url property
      // var imageUrl = response.data;

       var imageUrl = response.data.image_original_url;

      // Creating and storing an image tag
      var sportImage = $("<img>");
      // Creating a paragraph tag with the result item's rating
      // var p = $("<p>").text("Rating: " + results[i].rating);

      // Setting the Image src attribute to imageUrl
      sportImage.attr("src", imageUrl);
      sportImage.attr("alt", "sport image");

      // Prepending the Image to the images div
      $("#images").prepend(sportImage);
      // $("#images").append(p);



    })
  });

  

//API Key: VXJCZawhw5pLK0kGoLwR3f15XXtxdWu5