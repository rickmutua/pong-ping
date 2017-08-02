function pingPong(number) {
  var result = [];
  for (var r = 1; r <= number; r++) {

    if ((r % 15) === 0){
      result.push("Ping-Pong");

    } else if ((r % 5) === 0){
      result.push("Pong");

    } else if ((r % 3) === 0){
      result.push("Ping");

    } else {
      result.push(r);

    }
  }

  return result;

}

$(document).ready(function() {
  $("form#pingPongForm").submit(function(event) {
    event.preventDefault();

    var input = parseInt($("input#number").val());
    var result = pingPong(input);

    result.forEach(function(number) {

      $("ul#result").append("<li>"+number+"</li>");

    });
  });
});
