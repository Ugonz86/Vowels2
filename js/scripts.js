$(document).ready(function() {
  $("form#userForm").submit(function(event) {
    event.preventDefault();
    var userInput = $("#userInput").val();
    var result = vowelCount (userInput);
      $("#result").text(result);
      console.log(result);
  });

});

function vowelCount (textInput) {
  var vowels = 0;
  for (var i = 0; i < textInput.length; i++) {
    if(textInput.charAt(i) == 'a' || textInput.charAt(i) == 'e' || textInput.charAt(i) == 'i' || textInput.charAt(i) == 'o' || textInput.charAt(i) == 'u' || textInput.charAt(i) == 'A' || textInput.charAt(i) == 'E' || textInput.charAt(i) == 'I' || textInput.charAt(i) == 'O' || textInput.charAt(i) == 'U') {
         vowels++;
   }
  }
  return vowels;
}
