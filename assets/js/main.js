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
    $("#createSite").on("shown.bs.modal", function() {
    'use strict';
    var pgb = $('#progressBar');
    var i = 0;
    pgb.ariaProgressbar({
      progressClass: 'progress progress_streamtext ',
      maxVal: 100
    });

    var int = setInterval(function() {
      if (i < 100) {
        i = i + 10;
        pgb.ariaProgressbar('update', i);
      } else {
        clearInterval(int);
      }
    }, 300);
});
$(".close").click(function(){
    $(".collapse").removeClass('show')
});
});

