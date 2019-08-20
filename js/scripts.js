$(document).ready(function() {
  $(".blank").submit(function(event) {
    event.preventDefault();

    // didn't use this array, could have, didn't
    var vowels = ['a', 'e', 'i', 'o', 'u'];

    var userInput = $("#item1").val()

    // split will split up the sentence into individual characters that form an array. This will allow us to target the individual characters in the function.
    var newUserInput = userInput.split("");


    for (var i = 0; i < userInput.length; i += 1) {

      // This is one way to target and change the vowels. It will look through the newly split array and search for the string at the [i]th position in the array. It will evaluate to true or false for each character in the array newUserInput, then move to the next string. It will redefine the [i]th position as a dash wherever it has evaluated to true.
      if (newUserInput[i] === 'a' || newUserInput[i] === 'e' || newUserInput[i] === 'i' || newUserInput[i] === 'o' || newUserInput[i] === 'u') {
        newUserInput[i] = '-';
      }
    }

    // Join will recombine the elements of the split array after the vowels have been replaced with dashes in their pre-split configuration.
    outPut = newUserInput.join("");

    alert(outPut);

  // push test

  });
});
