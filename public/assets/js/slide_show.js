$(".slide > div:gt(0)").hide();

setInterval(function() {
  $('.slide > div:first')
    .fadeOut(2000)
    .next()
    .fadeIn(2000)
    .end()
    .appendTo('.slide');
},  6000);
