$(document).ready(function() {
  $(".blank").submit(function(event) {
    event.preventDefault();

    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var userInput = $("#item1").val()

    var newUserInput = userInput.split("");
    for (var i = 0; i < userInput.length; i += 1) {

      if (newUserInput[i] === 'a' || newUserInput[i] === 'e' || newUserInput[i] === 'i' || newUserInput[i] === 'o' || newUserInput[i] === 'u') {
        newUserInput[i] = '-';
      }
    }
    outPut = newUserInput.join("");

    // if(userInpu         []
    alert(outPut);


  });
});
