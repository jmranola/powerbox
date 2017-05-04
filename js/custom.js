    
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
                
                if ($(window).width() < 600) {
                  $('#mobile-menu').fadeIn(100);
                }
                else {
                  $('#mobile-menu').fadeOut(100);
                }

            }else {
                $('nav').removeClass('change-nav');
                $('#mobile-menu').fadeOut(100);
            }
    }


$(window).on( "load", function(){
     $(".loader").fadeOut("slow");
 });

//   $(document).ready(function() {
//     $('#img-1').fadeIn();

//     if (window.addEventListener) {
//       window.addEventListener('scroll', checkScrolled);
//     }
//     else {
//       window.attachEvent('scroll', checkScrolled);
//     }
    
//     function checkScrolled() {
//             var ypos = window.pageYOffset;
//             var $heightBanner = $('.uk-section').height();
//             var $navBar = $('.navbar-header').height();
//             if ((ypos >= 0) && (ypos < ($heightBanner))) { 
//                 $('#img-1').fadeIn();
//             }
//             else{
//                 $('#img-1').fadeOut();
//             }
//             if ((ypos > ($heightBanner)) && (ypos < ($heightBanner*2))) { 
//                 $('#img-2').fadeIn();
//             }
//             else{
//                 $('#img-2').fadeOut();
//             }
//             if ((ypos > ($heightBanner*2)) && (ypos < ($heightBanner*3))) { 
//                 $('#img-3').fadeIn();
//             }
//             else{
//                 $('#img-3').fadeOut();
//             }
//             if ((ypos > ($heightBanner*3)) && (ypos < ($heightBanner*4))) { 
//                 $('#img-4').fadeIn();
//             }
//             else{
//                 $('#img-4').fadeOut();
//             }
//             if ((ypos > ($heightBanner*4)) && (ypos < ($heightBanner*5))) { 
//                 $('#img-5').fadeIn();
//             }
//             else{
//                 $('#img-5').fadeOut();
//             }
//             if ((ypos > ($heightBanner*5)) && (ypos < ($heightBanner*6))) { 
//                 $('#img-6').fadeIn();
//             }
//             else{
//                 $('#img-6').fadeOut();
//             }

//     }

// });
//  
﻿
﻿$(document).ready(function () {

    $(".uk-card").hover(
      function () {
        $(this).find(".uk-card-header").addClass('hover');
      }, 
      function () {
        $(this).find(".uk-card-header").removeClass('hover');
      }
    );
});

