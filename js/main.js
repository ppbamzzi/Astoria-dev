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
          arrows:{enable:true},
          keyboardNavigation:"on", 
          mouseScrollNavigation:"off",
          onHoverStop:"on",
          touch:{
          touchenabled:"on",
            swipe_treshold : 75,
            swipe_min_touches : 1,
            drag_block_vertical:false,
            swipe_direction:"horizontal"
          }				
      },			
      gridwidth:1230,
      gridheight:720		
    });

  jQuery("#slider-carousel").revolution({
    sliderType:"carousel",
    autoHeight:"on",        
    minHeight: 680,
    navigation : {
      keyboardNavigation:"off", 
      mouseScrollNavigation:"off",
      touch:{
      touchenabled:"off",
        swipe_treshold : 75,
        swipe_min_touches : 1,
        drag_block_vertical:false,
        swipe_direction:"horizontal"
      },
      bullets:{
        enable:true,
        style:"",
        direction:"horizontal",
        h_align:"center",
        v_align:"bottom",
        space:10,
        h_offset:0,
        v_offset:50,
        tmp:'<span class="tp-bullet-astoria"></span>'
      }
    } 
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

    $("#testimonial-slider").owlCarousel({
      singleItem: true,
      autoPlay : 3000
    });
    $("#quotes-slider").owlCarousel({
        singleItem: true
    });

    $(".team-list").owlCarousel({
        autoPlay : 3000,
        items : 2
    });
    $(".build-exp-carousel").owlCarousel({
        items : 4,
        loop : true
    });

    $(".a_carousel").owlCarousel({
      singleItem: true
    });

});

// external js: isotope.pkgd.js

$(document).ready(function() {
  $('.gallery').isotope({
    itemSelector: '.gallery-item'
  });
  $('#filter a').click(function(){
    $('#filter a').removeClass('current');

    $(this).addClass('current');

    var selector = $(this).attr('data-filter');

    $('.gallery').isotope({
      filter: selector,
      animationOptions: {
      duration: 1000,
      easing: 'easeOutQuart',
      queue: false
      }
    });
    return false;
  });
});

$('#price-tabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})