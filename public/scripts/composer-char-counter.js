$(document).ready(function() {
  const $tweetBox = $('textarea#tweet-text');
  $tweetBox.on('input',function() {
    let counter = document.querySelector('output.counter');
    const characters = 140 - this.value.length;
    $(counter).val(characters);
    if (characters < 0){
      $(counter).addClass('error-count');
    } else {
      $(counter).removeClass('error-count');
    }
  })
});