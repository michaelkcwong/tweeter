$(document).ready(function() {

  $(".tweet-form").submit(function(event) {
    event.preventDefault();

    console.log("Form submitted...ajax call")
  
    $.ajax({
      type: "POST",
      url: "http://localhost:8080/tweets",
      data: $(this).serialize()
    }).then(response => {
      console.log("Successfully posted to the server using Ajax.");
    });
});
});