/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
  const createTweetElementRedux = function(post) {
    const $article = $('<article>', {'name': "tweet"});
    const $header = $('<header>');
    const $nameAndPhoto = $('<div>', {'name': 'name-photo'}).text(post.user.name);
    const $image = $('<img>').attr('src', post.user.avatars);
    const $handle = $('<div>', {'name': 'handle'}).text(post.user.handle);
    $article.text(post.content.text);
    const $footer = $('<footer>').text(timeago.format(post.created_at));
    const $icons = $('<div>', {'class': 'icons'});
    const $flag = $('<i>', {'class': 'fas fa-flag'});
    const $retweet = $('<i>', {'class': 'fas fa-retweet'});
    const $heart = $('<i>', {'class': 'fas fa-heart'});
    
    $icons.append($flag, $retweet, $heart);
    $footer.append($icons);
    $nameAndPhoto.prepend($image);
    $header.append($nameAndPhoto, $handle);
    $article.append($footer);
    $article.prepend($header);
    
    return $article;
  };
  
  const renderTweets = function(tweets) {
    $('div.tweet-container').empty();  //destorying the HTML ELEMENT that holds the tweets, so that we can pass a clean one.
    for (let i = 0; i < tweets.length; i++) {
      $('div.tweet-container').prepend(createTweetElementRedux(tweets[i]));
    }
  };
  
  const loadTweets = function() {
    $.ajax({
      method: "GET",
      url: "/tweets",
    })
      .then(renderTweets);
  };
  
  //button hider/error handler
  $('form').on('click input', function(event) {
    const formData = $(this).serialize();
    if (formData.length > 145) {
      $('button.error').show()
      $('button[type="submit"]').hide()
    } 
    if (formData === 'text='){
      $('button.error').show()
      $('button[type="submit"]').hide()
    }
    if (formData.length > 5 && formData.length <= 145){
      $('button.error').hide()
      $('button[type="submit"]').show()
    }
  });



  $('form').submit(function(event) {
    event.preventDefault();
    const textBox = document.querySelector('#tweet-text')
    const counter = document.querySelector('output.counter')
    const formData = $(this).serialize();
    //formData returns as text='inputstring' so I'm adding an extra 5 characters to the limit
    if (formData.length > 145) {
      alert('Tweet Too Big!')
    } else if (formData === 'text='){
      alert('Tweet Too Tiny!')
    } else {
      $.ajax({
        method: "POST",
        url: "/tweets",
        data: formData
      })
      .then(loadTweets)
      //loading every time the form submits
    }
    textBox.value = '';
    counter.value = 140
    $('button.error').show()
    $('button[type="submit"]').hide()
  });
  loadTweets();
});