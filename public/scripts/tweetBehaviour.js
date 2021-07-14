$(document).ready(function() {
  const icons = document.querySelector('div.icons');
  const tweet = document.querySelector("article[name='tweet']")
  $(tweet).on('mouseover', function() {
    $(tweet).css("box-shadow", "5px 4px #58554c42")
  })
  $(tweet).on('mouseout', function() {
    $(tweet).css("box-shadow", "0px 0px")
  })
  $(icons)

});