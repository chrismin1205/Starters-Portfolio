$(window).scroll( function(){


    var header = $('.topnav');

    if(header.offset().top !== 0){
        if(!header.hasClass('shadow')){
            header.addClass('shadow');
          }
    }else{
        header.removeClass('shadow');
    }
});
