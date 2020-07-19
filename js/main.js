// $( document ).ready(function() {
//     var x = $(window).height();
//     $(".headerWrapper").height(x);
//     console.log(x);
// });
//
//
//

window.onload = onloads();

  function onloads() {
    var wn = $(window).scrollTop();
    if(wn > 50 ){
      $("body").addClass("sticky");
    }
  };

  $(window).on("scroll",function(){
  var wn = $(window).scrollTop();

  if(wn > 10){
    $("body").addClass("sticky");
  }
  else{
    $("body").removeClass("sticky");
  }
});

$(document).ready(function(){

  $('.owl-carousel').owlCarousel({
      rtl:true,
      loop:true,
      margin:10,
      nav:false,
      autoplay:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3
          }
      }
  });

  $('#customers-testimonials').owlCarousel({
      center: true,
      rtl:true,
      items: 3,
      loop: true,
      margin: 0,
      autoplay: true,
      dots:true,
      autoplayTimeout: 8500,
      smartSpeed: 450,
      responsive: {
        600: {
          items: 3
        }
      }
  });



var setMinHeight = function(minheight = 0) {
  jQuery('.owl-carousel').each(function(i,e){
    var oldminheight = minheight;
    jQuery(e).find('.owl-item').each(function(i,e){
      minheight = jQuery(e).height() > minheight ? jQuery(e).height() : minheight;
    });
    jQuery(e).find('.item').css("min-height",minheight + "px");
    minheight = oldminheight;
  });
};

	setMinHeight();


$(document).on('resize', function(){
		setMinHeight();
});

$( '#cbp-qtrotator' ).cbpQTRotator({
  speed : 100,
  easing : 'ease',
  interval : 4000
});

jQuery('#mymodal').trigger('click');

});
