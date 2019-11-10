$(function() {

    // when user clicks add-btn
    $("#submit-btn").on("click", function(event) {
        event.preventDefault();
      console.log("yeah click me bitch")
        // make a newCharacter obj
        var newBurger = {
          // name from name input
          name: $("#name").val().trim(),
          // role from role input
          devoured: 0,
          
        };
        location.reload();
    
        // send an AJAX POST-request with jQuery
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger})
          // on success, run this callback
          .then(function(data) {
            // log the data we found
            console.log(data);
          });
      
        // empty each input box by replacing the value with an empty string
        $("#name").val("");
      
      });
    })