jQuery(function ($) {
    $(window).scroll(function () {
        scrollTop = $(window).scrollTop();
    //add fix header when scroll down and remove when back up
        if (scrollTop > $('header').height()) {
          $('header').addClass('scrollNav');
    
    
        }
    
        else {
          $('header').removeClass('scrollNav');
        }
    
      });

});

