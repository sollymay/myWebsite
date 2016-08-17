$(document).ready(function (){
  $(".player").mb_YTPlayer();
  $("#first-question").hide();
  $( "#startButton" ).click(function() {

    $( "#content" ).fadeOut( "slow", function() {
      // Animation complete.

      $("#first-question").show()
    });


  });

});
