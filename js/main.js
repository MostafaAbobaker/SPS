$(document).ready(function(){
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