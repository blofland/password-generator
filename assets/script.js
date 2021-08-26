// Define Variables

var abcUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var abcLower = 'abcdefghijklmnopqrstuvwxyz'
var specialChar = '!@#%^&*+~'


window.onload = alert("Welcome! Please click 'Generate password' to start!");
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);