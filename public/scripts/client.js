/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

function loadTweets() {
  $.ajax({
    type: "GET",
    url: "http://localhost:8080/tweets",
  }).then(response => {
    renderTweets(response);
  })
};

function renderTweets(data) {
  for (let obj of data) {
    $(".container").append(createTweetElement(obj));
  }
};

loadTweets();

});