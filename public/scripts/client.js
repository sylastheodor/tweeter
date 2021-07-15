/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

//<div class="tweet-container">
/* <article name = "tweet">
<header>username</header>
tweet
<footer>date content  
  <div class = "icons">
    <i class="fas fa-flag"></i> 
    <i class="fas fa-retweet"></i> 
    <i class="fas fa-heart"></i> 
  </div>
  </footer>
</article>
</div> */


$(document).ready(function() {

const tweetData = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of like three REALLY tall women I met in Talahassee."
    },
    "created_at": 1626142449843
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1626228849843
  }
];

// const createTweetElement = function(tweetData) {
//   const $tweet=$(`
//   <article name = "tweet">
//   <header>
//   <div name="name-photo"><img src=${tweetData.user.avatars} height="50" width="auto" img>${tweetData.user.name}</div><div name="handle">${tweetData.user.handle}</div></header>
//   ${tweetData.content.text}
//   <footer>${timeago.format(tweetData.created_at)}
//     <div class = "icons">
//       <i class="fas fa-flag"></i> 
//       <i class="fas fa-retweet"></i> 
//       <i class="fas fa-heart"></i> 
//     </div>
//   </footer>
//   </article>
//   `)
//   return $tweet
// }


const createTweetElementRedux = function(post) {
  const $article = $('<article>', {'name': "tweet"});
    const $header = $('<header>');
      const $nameAndPhoto = $('<div>', {'name': 'name-photo'}).text(post.user.name);
        const $image = $('<img>').attr('src', post.user.avatars)
      const $handle = $('<div>', {'name': 'handle'}).text(post.user.handle)
    $article.text(post.content.text)
    const $footer = $('<footer>').text(timeago.format(post.created_at))
      const $icons = $('<div>', {'class': 'icons'})
        const $flag = $('<i>', {'class': 'fas fa-flag'})
        const $retweet = $('<i>', {'class': 'fas fa-retweet'})
        const $heart = $('<i>', {'class': 'fas fa-heart'})

  const $post = $('<div>', {"class": "tweet-container"});

  $icons.append($flag, $retweet, $heart);
  $footer.append($icons);
  $nameAndPhoto.prepend($image);
  $header.append($nameAndPhoto, $handle);
  $article.append($footer);
  $article.prepend($header);
  

  return $article
}

const renderTweets = function(tweets) {
  for(let i = 0; i<tweets.length; i++){
    $('div.tweet-container').append(createTweetElementRedux(tweets[i]));
  }
};

renderTweets(tweetData)
// const $tweet = createTweetElement(tweetData);
// $('div.tweet-container').append($tweet);


})