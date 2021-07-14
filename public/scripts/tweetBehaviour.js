$(document).ready(function() {
  const flag = document.querySelector('i.fa-flag');
  const retweet = document.querySelector('i.fa-retweet');
  const heart = document.querySelector('i.fa-heart');
  const tweet = document.querySelector("article[name='tweet']");
  $(tweet).on('mouseover', function() {
    $(tweet).css("box-shadow", "5px 4px #58554c42")
  })
  $(tweet).on('mouseout', function() {
    $(tweet).css("box-shadow", "0px 0px")
  })
  $(flag).on('mouseover', function() {
    $(flag).css("color", "#008DFF")
    $(flag).css("transform", "scale(1.2)")
  })
  $(flag).on('mouseout', function() {
    $(flag).css("color", "")
    $(flag).css("transform", "scale(1)")
  })
  $(retweet).on('mouseover', function() {
    $(retweet).css("color", "#008DFF")
    $(retweet).css("transform", "scale(1.2)")
  })
  $(retweet).on('mouseout', function() {
    $(retweet).css("color", "")
    $(retweet).css("transform", "scale(1)")
  })
  $(heart).on('mouseover', function() {
    $(heart).css("color", "#008DFF")
    $(heart).css("transform", "scale(1.2)")
  })
  $(heart).on('mouseout', function() {
    $(heart).css("color", "")
    $(heart).css("transform", "scale(1)")
  })

});