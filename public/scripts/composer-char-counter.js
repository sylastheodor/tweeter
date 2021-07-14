$(document).ready(function() {
  const $tweetBox = $('textarea#tweet-text')
  $tweetBox.on('input',function() {
    let counter = document.querySelector('output.counter');
    const characters = 140 - parseInt(this.value.length);
    console.log('characters:', characters)
    $(counter).val(characters)
    if (characters < 0){
      $(counter).css("color", "crimson")
    } else {
      $(counter).css('color', 'inherit')
    }
  })
});


// asdfsdfjskfjjaasdfaskjdfksajdfljsafldkjsalkdfjalsjfasklfasjfasjdfasdflaslfjsakfjlkasjdfkljaskjfklsajfklsjklfjsalkdfjalksdjflkasjflkasjflkasjf