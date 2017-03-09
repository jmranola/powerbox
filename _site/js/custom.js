    
    if (window.addEventListener) {
      window.addEventListener('scroll', checkScrolled);
    }
    else {
      window.attachEvent('scroll', checkScrolled);
    }
    
    function checkScrolled() {

            var ypos = window.pageYOffset;

            if (ypos > 10) {  
                $('nav').addClass('change-nav');

            }else {
                $('nav').removeClass('change-nav');
            }
    }


$(window).on( "load", function(){
     $(".loader").fadeOut("slow");
 });