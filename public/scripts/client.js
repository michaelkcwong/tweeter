/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  console.log("Test script running!!!");

  const tweetData = {
    "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1640582474031
    },

  function createTweetElement(tweetData) {

    const tweet = 
    `<br>
    <section>
      <article class="tweet-display">
        <header class="article-header-layout">
          <div class="article-top-left">
            <img class= "article-image" src="${tweetData.user.avatars}" width="45" height="45" alt="${tweetData.user.name}'s avatar photo">
            <span class="article-header-name">  &nbsp ${tweetData.user.name}</span>
          </div>
          <div class="article-top-right">
            ${tweetData.user.handle}
          </div>
        </header>
        <p class="tweet-text">${tweetData.content.text}</p>
    
        <footer class="article-footer-layout">
          <div class="box-element">
            ${tweetData.created_at}
          </div>
          <div class="article-bottom-right">
            <div id="flag">
                <i class="fas fa-flag"></i>
            </div>
            <div id="retweet" >
              <i class="fas fa-retweet"></i>
            </div>
            <div id="heart">
              <i class="fas fa-heart"></i>
            </div>
          </div>
        </footer>
      </article>
    </section>`

    return tweet;
  };

  const $tweet = createTweetElement(tweetData);

  console.log($tweet);
  $(".container").append($tweet);

}); 