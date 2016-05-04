$(document).ready(function (){
  $(".home").click(function (){
    $('html, body').animate({
      scrollTop: $(".home-target").offset().top -65
    }, 1000);
  });

  $(".portfolio").click(function (){
    $('html, body').animate({
      scrollTop: $(".portfolio-target").offset().top -100
    }, 2000);
  });

  $(".contact").click(function (){
    $('html, body').animate({
      scrollTop: $(".contact-target").offset().top -100
    }, 2000);
  });

});
