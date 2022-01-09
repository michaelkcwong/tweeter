$(document).ready(function() {

  $(".tweet-form").submit(function(event) {
    event.preventDefault();

    const newTweet = $(this).serialize();
    const textLength = $(this).serializeArray()["0"].value.length;

    const hideError = function() {
      $("#error_msg").slideUp(100, () => {
        $("#error_msg").hide();
        $("#error_msg").empty();
      });
    };

    if (textLength === 0) {
      hideError();
      const errorImage = '<i class ="fas fa-exclamation-triangle"></i>'
      const errorMessage = `${errorImage} Please type a Tweet in order to submit!`

      $("#error_msg").slideDown(100, () => {
        $("#error_msg").append(errorMessage);
      });

      return;
    }

    if (textLength >= 140) {
      hideError();
      const errorImage = '<i class ="fas fa-exclamation-triangle"></i>'
      const errorMessage = `${errorImage} "Please reduce the number of characters in your Tweet in order to submit! (Max: 140)"`

      $("#error_msg").slideDown(100, () => {
        $("#error_msg").append(errorMessage);
      });
  
      return;
    } 

    hideError();

    $.ajax({
      type: "POST",
      url: "/tweets",
      data: newTweet
    }).then(response => {
      console.log("Successfully posted to the server using Ajax.");

      $.ajax({
        type: "GET",
        url: "http://localhost:8080/tweets",
      }).then(response => {
        const tweet = createTweetElement(response[response.length - 1]);
        $(".new-tweet").after(tweet);
        $("#tweet-text").val("");
        $(".counter").val(140);
      })
    });
  });
  });