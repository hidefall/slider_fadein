;(function(jQuery){
  'use strict';

  $(document).ready(function(){
    $('.carousel.carousel-slider').carousel({
      indicators: true,
      draggable: false,
    });
    autoplay()   
    function autoplay() {
      $('.carousel').carousel('next');
      setTimeout(autoplay, 4500);
    }
    $(".carousel.carousel-slider").click(function(){
      $(".slide").fadeIn({
        duration: 9000,
      });
    });
  });

  function idea(){
    var wh = $(window).height();
    var bw = parseInt($('.slide_title_border').css('border-left-width'));

    $('.slide_title_border').css({'top':wh/
      2 - bw, 'left':-(wh/2 - bw)})
    $('.slide_title_border').width(wh);
    $('.slide_title_border').width($('.slide_title_border').width() - bw*2)
    console.log($('.slide_title_border').width() + "---" + $('.slide_title_border').height()) ;
  }
  $(document).ready(function(){
    idea()
  }); 
  $(window).resize(function(){
    idea()
  });

jQuery("#responsive_headline").fitText(1.2);
jQuery("#responsive_headline").fitText(0.8);


})(jQuery);