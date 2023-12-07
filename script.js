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

//Function for getting a random element from an array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

//Function to generate the password
function generatePassword() {
  //Grab the user options
  var options = getPasswordOptions();

  //Array to store the result
  var result = [];

  // Array to store possible characters
  var possibleCharacters = [];

  // Array to store guarenteed characters
  var guaranteedCharacters = [];

  // Check if the options exist
  if (!options) return null;

  if (options.hasEspecialCharacters 
      || options.hasNumericCharacters
      || options.hasLowerCaseCharacters
      || options.hasUpperCaseCharacters ) {

      // Add selected chars to an array of possible characters
      if(options.hasEspecialCharacters) {
        possibleCharacters = possibleCharacters.concat(specialCharacters);
        guaranteedCharacters.push(getRandom(specialCharacters));
      }

      if(options.hasNumericCharacters) {
        possibleCharacters = possibleCharacters.concat(numericCharacters);
        guaranteedCharacters.push(getRandom(numericCharacters));
      }

      if(options.hasLowerCaseCharacters) {
        possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
        guaranteedCharacters.push(getRandom(lowerCasedCharacters));
      }

      if(options.hasUpperCaseCharacters) {
        possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
        guaranteedCharacters.push(getRandom(upperCasedCharacters));
      }

    } else {
      alert("Must be selected at least one character type !");
      return null;
    }

  // Loop over the password length, selecting random indicies from the possible chards and adding them to the result array
  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);
    result.push(possibleCharacter);
  }
  console.log(result);
  console.log(guaranteedCharacters);
  // Mix in at least one of the guaranteed chars in the result
  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }

  // Transform the result into a string and pass it into writePassword
  return result.join(' ');
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log("Password : " + password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
