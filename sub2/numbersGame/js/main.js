$(document).ready(function (){
  $(".player").mb_YTPlayer();
  $("#first-question").hide();
  $("#second-question").hide();
  $("#third-question").hide();
  $("#final-question").hide();
  $( "#startButton" ).click(function() {
    fadeOutandIn("#content","#first-question")
    handleAnswer("#first-question","#second-question",8,"#first-answer")
    handleAnswer("#second-question","#third-question",18,"#second-answer")
    handleAnswer("#third-question","#final-question",16,"#third-answer")
    

  });
  var fadeOutandIn = function(previous, current){
    $(previous).fadeOut("slow", function() {
      //Stuff to do *after* the animation takes place
      $(current).show()
    })
  }
  var handleAnswer = function(current, next, answer, fieldID){
    $( fieldID)
    .keypress(function(e) {
      $(fieldID).css("color","#236692");
      if(e.which ==13){
        var value = $( this ).val();
        if (value == answer){
          fadeOutandIn(current,next)

        }
        else{
          $(fieldID).css("color","red");

        }
      }
    })
  }
});
