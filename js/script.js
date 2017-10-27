ar isAcceptableInteger = function (number){
  var input = parseInt(number);
  console.log("input: ", input);
  if (!isNaN(input) && (input >= 1 && input <= 3999)) {
    return true;
  }
  return false;

}

var pingPong = function (number){
  var output = [];
  var parsedInput = parseInt(number);
  for (var i = 1; i <= parsedInput; i++){
    if (isDivisiblebyNumber(i, 15)){
      output.push("ping pong");
    }else if (isDivisiblebyNumber(i, 5)){
      output.push("pong");
    }else if (isDivisiblebyNumber(i, 3)){
      output.push("ping");
    }else {
      output.push(i);
    }

  }
  return output;
}

var isDivisiblebyNumber = function (number, value){
  if (number % value === 0){
    return true;
  }
}
