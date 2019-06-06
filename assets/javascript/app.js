// Sports Array
var sports = ["Football", "Basketball", "Baseball", "Hockey", "Soccer"];


// Function for displaying sport data
function sportDisplay() {

  // Clear Info / No repeat buttons)
  $("#sportsView").empty();

  var sportx = $(this).attr("data-name");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + sportx + "&api_key=VXJCZawhw5pLK0kGoLwR3f15XXtxdWu5&limit=10&offset=0&rating=G&lang=en";

 
   // Perfoming an AJAX GET request to queryURL
   $.ajax({
   url: queryURL,
     method: "GET"
   })

  // After the data from the AJAX request comes back
      .then(function(response) {
       console.log(queryURL);
       console.log(response);
      
      // Storing the data from the AJAX request in the results variable
       var results = response.data;

      // Looping through each result item
       for (var i = 0; i < results.length; i++) {

        // Creating and storing a div tag
         var sportDiv = $("<div>");

        // Creating a paragraph tag with the result item's rating
         var p = $("<p>").text("Rating: " + results[i].rating);

        // Creating and storing an image tag
         var sportImage = $("<img>");
        // Setting the src attribute of the image to a property pulled off the result item
         sportImage.attr("src", results[i].images.fixed_height_still.url);
         sportImage.attr("data-still", results[i].images.fixed_height_still.url);
         sportImage.attr("data-animate", results[i].images.fixed_height.url);
         sportImage.attr("data-state", "still");
         sportImage.addClass("sportImage");

        // Appending the paragraph and image tag to the sportDiv
         sportDiv.append(sportImage)
         sportDiv.append(p)

      // Prependng the sportDiv to the HTML page in the "#images" div
        $("#images").prepend(sportDiv);
           
       }
     });
    };
    // Start/Stop Animation of Image
    $(document).on("click", ".sportImage", function(){
        var state = $(this).attr('data-state'); 
         
      if (state == "still"){
        $(this).attr("src", $(this).data("animate"));
        $(this).attr("data-state", "animate");

      }else{
        $(this).attr("src", $(this).data("still"));
        $(this).attr("data-state", "still");
      }
      });
    
      function renderButtons(){ 
        // Deletes the sports prior to adding new sports
        $("#buttonsView").empty();
        // Loops through the array of sports
        for (var i = 0; i < sports.length; i++){
         // Generates buttons for each sport in the array
          var a = $("<button>")
          a.addClass("sport");
          a.attr("data-name", sports[i]);
          a.text(sports[i]);
          $("#buttonsView").append(a);
        }
      }

// This function handles events where one button is clicked
$("#addSport").on("click", function(){
  //Clear container and grab the input from the textbox
  var sport = $("#sport-input").val().trim();
  // The sport from the textbox is then added to our array
  sports.push(sport);
  
  // Buttons Array
  renderButtons();
  // Use "enter" instead of clicking on the button
  return false;
})

// Generic function for displaying the sport info
  $(document).on("click", ".sport", sportDisplay);

// This calls the renderButtons() function
renderButtons();




















    











    
  