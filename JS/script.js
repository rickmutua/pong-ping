
      //business logic

function pingPong(number) {
  var result = [];
  for (var i = 1; i <= number; i++) {

    if ((i % 15) === 0){
      result.push("Ping-Pong");

    } else if ((i % 5) === 0){
      result.push("Pong");

    } else if ((i % 3) === 0){
      result.push("Ping");

    } else {
      result.push(i);

    }
  }

  return result;

}


    //user interface logic

$(document).ready(function() {
  $("form#pingPongForm").submit(function(event) {
    event.preventDefault();

    var input = parseInt($("input#number").val());
    var result = pingPong(input);

    result.forEach(function(number) {

      $("ul#result").append("<li>"+number+",</li>");

    });
  });
});
