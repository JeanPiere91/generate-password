// Array of options
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Function for getting all the user criteria
function getPasswordOptions(){
  // Get password length
  var length = parseInt(prompt("How many characters do you want in your password?"));

  // Check to see if what they entered was a number
  if(Number.isNaN(length)) {
    alert("Password length must be provided as a number !");
    return null;
  }

  // Check if it's at least 8 chars long
  if (length < 8) {
    alert("Password length must be at least 8 characters !");
    return null;
  }

  // Less than 128
  if (length > 128) {
    alert("Password length must be less than 128 characters !");
    return null;
  }

  // Ask user for their options
  var hasEspecialCharacters = confirm("Click OK to confirm including special character");

  var hasNumericCharacters = confirm("Click OK to confirm including number character");

  var hasLowerCaseCharacters = confirm("Click OK to confirm including lower case character");

  var hasUpperCaseCharacters = confirm("Click OK to confirm including upper case character");

  var options = {
    length: length,
    hasEspecialCharacters: hasEspecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasLowerCaseCharacters: hasLowerCaseCharacters,
    hasUpperCaseCharacters: hasUpperCaseCharacters
  }

  return options;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
