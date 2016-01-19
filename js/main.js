jQuery(document).ready(function($){
	    jQuery('.skills li').each(function () {
        jQuery(this).appear(function() {
          jQuery(this).animate({opacity:1,left:"0px"},800);
          var b = jQuery(this).find(".progress-bar").attr("data-width");
          jQuery(this).find(".progress-bar").animate({
            width: b + "%"
          }, 500, "linear");
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
    items: {
      src: 'https://www.youtube.com/watch?v=Uoa81mxPLq8'
    },
    type: 'iframe',
    mainClass: 'mfp-fade'
  });

  $('.open-search').magnificPopup({
    type:'inline',
    midClick: true,
    mainClass: 'mfp-fade'
  });
  
  /* Side Menu */
  $('.menu-icon').click(function sideMenu () {
    $('body').toggleClass('menu-opened');
  })
});	