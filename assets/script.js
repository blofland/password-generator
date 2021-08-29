//Add event listener

document.querySelector("#generate").addEventListener("click", writePassword);

// define variables
var number = ['1 2 3 4 5 6 7 8 9 0'];
var specialChar = ['~ ! @ # $ % ^ & * ( ) _ + = < > , . ? /'];
var abcLower = ['a b c d e f g h i j k l m n o p q r s t u v w x y z'];
var abcUpper = ['A B C D E F G H I J K L M N O P Q R S T U V W X Y Z'];

var confirmLength = "";


// function to make password
function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to contain?"));


  // password length
  while(confirmLength <= 7 || confirmLength >= 150) {
      alert("Password length must be between 8-150 characters Try again");
      var confirmLength = (prompt("How many characters would you like your password to contain?"));
      } 
      alert(`Your password will have ${confirmLength} characters`);

   
    }
     // parameters for password
     var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
     var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");    
     var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
     var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");


       // Loop if answer is outside the parameters 
       while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
         alert("You must choose at least one parameter");
         var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
         var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");    
         var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
         var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");   

    // function to produce password
function writePassword() {
    var password = generatePassword();
  
    passwordText.value = password;
  }}
