
$(document).ready(function() {

function loadTweets() {
  $.ajax({
    type: "GET",
    url: "http://localhost:8080/tweets",
  }).then(response => {
    renderTweets(response.reverse());
  })
};

function renderTweets(data) {
  for (let obj of data) {
    $(".container").append(createTweetElement(obj));
  }
};

loadTweets();

});