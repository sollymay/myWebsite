$(document).ready(function (){
  $(".player").mb_YTPlayer();
  $("#first-question").hide();
  $( "#startButton" ).click(function() {

    $( "#content" ).fadeOut( "slow", function() {
      // Animation complete.
      $("#first-question").show()
      while (str($("#answer").val())!==str(1452)) {
        console.log($("#answer").val())

      }
      else {
        console.log("yesssss")

      }

    });


  });

});
