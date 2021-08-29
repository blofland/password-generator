//OPENING
alert("Click generate password to start.")

//Add event listener

document.querySelector("#generate").addEventListener("click", writePassword);

// Character arrays
var number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specialChar = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '=', '<', '>', ',', '.', '?', '/',];
var abcLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
var abcUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];

// define variables
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

// Password length
function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to contain?"));

  while(confirmLength <= 7 || confirmLength >= 128) {
      alert("Password length must be between 8-128 characters Try again");
      var confirmLength = (prompt("How many characters would you like your password to contain?"));
      } 

    
      alert(`Your password will have ${confirmLength} characters`);

    // Password parameters
    var confirmSpecialCharacter = confirm("Click OK to include special characters");
    var confirmNumericCharacter = confirm("Click OK to include numeric characters");    
    var confirmLowerCase = confirm("Click OK to include lowercase characters");
    var confirmUpperCase = confirm("Click OK to include uppercase characters");
      
    // Loop if answer is outside the parameters 
      while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
        alert("You must choose at least one parameter");
        var confirmSpecialCharacter = confirm("Click OK to include special characters");
        var confirmNumericCharacter = confirm("Click OK to include numeric characters");    
        var confirmLowerCase = confirm("Click OK to include lowercase characters");
        var confirmUpperCase = confirm("Click OK to include uppercase characters");   
    } 

      // character array
      var passwordCharacters = []

      //combine parameters
      
    if (confirmSpecialCharacter) {
      passwordCharacters = passwordCharacters.concat(specialChar)
    }

    if (confirmNumericCharacter) {
      passwordCharacters = passwordCharacters.concat(number)
    }
      
    if (confirmLowerCase) {
      passwordCharacters = passwordCharacters.concat(abcLower)
    }

    if (confirmUpperCase) {
      passwordCharacters = passwordCharacters.concat(abcUpper)
    }


      // Empty string to be filled based on for loop selecting random characters from the array
      var randomPassword = ""
      
      for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}