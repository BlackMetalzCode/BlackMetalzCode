$(document).ready(function(){


// Smooth scroll
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// Smooth scroll ends.


// Waypoints 

$('#ts3').waypoint(function(){
  $(this).toggleClass($(this).data('animated'));
},
{
  triggerOnce: true,
  offset: '90%'
});




}); // Ready



