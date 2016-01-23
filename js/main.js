jQuery(document).ready(function($){
	    jQuery('.skills li').each(function () {
        jQuery(this).appear(function() {
          jQuery(this).animate({opacity:1,left:"0px"},1000);
          var b = jQuery(this).find(".progress-bar").attr("data-width");
          jQuery(this).find(".progress-bar").animate({
            width: b + "%"
          }, 600, "linear");
        }); 
    });
});
jQuery(window).load(function(){'use strict';
  $(".preloader").delay(1600).fadeOut("slow").remove();
});

jQuery(document).ready(function() {		
   jQuery("#slider1").revolution({
      sliderType:"standard",
      sliderLayout:"fullscreen",
      delay:8000,
      navigation: {
          arrows:{enable:true}				
      },			
      gridwidth:1230,
      gridheight:720		
    });		

  $('.video-popup').magnificPopup({
    removalDelay: 500,
    items: {
      src: 'https://www.youtube.com/watch?v=Uoa81mxPLq8'
    },
    type: 'iframe',
    mainClass: 'mfp-fade'
  });

  $('.open-search').magnificPopup({
   removalDelay: 500,

    // Class that is added to popup wrapper and background
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: 'mfp-fade'
  });
  
  /* Side Menu */
  $('.menu-icon').click(function sideMenu () {
    $('body').toggleClass('menu-opened');
  })

  /* Fixed Header */
  $(function(){
   var shrinkHeader = $('.header').outerHeight();
    $(window).scroll(function() {
      var scroll = getCurrentScroll();
        if ( scroll >= shrinkHeader ) {
             $('.header').addClass('fixed');
          }
          else {
              $('.header').removeClass('fixed');
          }
    });
  function getCurrentScroll() {
      return window.pageYOffset || document.documentElement.scrollTop;
      }
  });

});	