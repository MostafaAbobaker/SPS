$(document).ready(function () {

});


$(document).ready(function(){
      //Start Mack button Scroll Top
      $(window).scroll(function () {
            if ($(this).scrollTop() >= 500) {
                  if( $('.scroll-top').is(':hidden') ) {
                  $('.scroll-top').fadeIn(400);
                  }
                  
            } else {
                  $('.scroll-top').fadeOut(400);
            }

            });
            $('.scroll-top').click(function(e) {
                  e.stopPropagation()
            $("html,body").animate({
                  scrollTop: 0
            },1000);
      });
   $('.owl-carousel').owlCarousel({
      rtl:true,
      loop: true,
      dots: false,
      margin: 10,
      responsiveClass: true,
      autoplay: true,
      autoplayTimeout:5000,
      responsive: {
         0: {
               items: 1,
               nav: true
         },
         380: {
               items: 1,
               nav: true
         },
         600: {
               items: 3,
               nav: false
         },
         1000: {
               items: 5,
               nav: true,
               loop: false
         }
      }
   });
});