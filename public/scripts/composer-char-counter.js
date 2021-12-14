//jQuery

$(document).ready(function() {
  console.log("JS Script here");


$("#tweet-text").on("input", function(event) {
  let counter = $(this).val().length;
  let totalChars = 140;
  let remainingChars = totalChars - counter;

  $(".counter").val(`${remainingChars}`);

  if (remainingChars < 0) {
    $(".counter").addClass("negative-counter");
  } else {
    $(".counter").removeClass("negative-counter");
  }
})

});