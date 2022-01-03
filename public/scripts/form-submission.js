const { text } = require("body-parser");

$(document).ready(function() {

  $(".tweet-form").submit(function(event) {
    event.preventDefault();

    const newTweet = $(this).serialize();
    const textLength = $(this).serializeArray()["0"].value.length;

    if (textLength === 0) {
      alert("Please input your tweet for submission!")
      return;
    }

    if (textLength >= 140) {
      alert("Please reduce the number of characters in your Tweet in order to submit! (Max: 140)");
      return;
    } 

    $.ajax({
      type: "POST",
      url: "/tweets",
      data: newTweet
    }).then(response => {
      console.log("Successfully posted to the server using Ajax.");


    });
  });
  });