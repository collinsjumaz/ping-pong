$(document).ready(function() {
    $("form#pingpong").submit(function(e){
         var input = parseInt($("input#userInput").val());

     for (var i = 1; i <= input; i++) {
       $('ul#result').append('<li>' + pingpong(i) + '</li>');
     }
     e.preventDefault();
 });

});

function pingpong(number) {
    if (number % 15 === 0) {
     return "ping pong";
 } else if (number % 3 === 0) {
     return "ping";
 } else if (number % 5 === 0) {
     return "pong";
 } else {
     return number;
 }
}
