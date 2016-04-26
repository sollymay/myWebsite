$( document ).ready(function() {

$('#quoteGETJSON').click(function() {
  $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?")
    .done(update)
    .fail(handleErr);

    $("#body").css("background-color", getRandomColor());

		changeColor(response);

});

function update(response) {
  document.getElementById("quote").innerHTML = response["quoteText"];
  document.getElementById("author").innerHTML = '- '+response["quoteAuthor"];
}

function handleErr(jqxhr, textStatus, err) {
  console.log("Request Failed: " + textStatus + ", " + err);
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

});
