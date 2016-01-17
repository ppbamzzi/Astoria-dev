jQuery(document).ready(function($){
	    jQuery('.skills li').each(function () {
        jQuery(this).appear(function() {
          jQuery(this).animate({opacity:1,left:"0px"},800);
          var b = jQuery(this).find(".progress-bar").attr("data-width");
          jQuery(this).find(".progress-bar").animate({
            width: b + "%"
          }, 1300, "linear");
        }); 
    });
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
});	