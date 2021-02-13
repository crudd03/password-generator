// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  function generatePassword() {

    // Define variables, including character sets and empty strings for the chosen set and password
    let lowerCaseString = "abcdefghijklmnopqrstuvwxyz";
    let upperCaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numString = "1234567890";
    let symbolString = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    let chosenString = ""
    let generatedPassword = ""
    
    // Prompt for password length, and returns error if length not in specified bounds
    let chosenLength = window.prompt("Enter the desired length of the password, between 8 and 128 characters");

    if (chosenLength < 8 || chosenLength > 128) {
      window.alert("Please choose a number between 8 and 128!");
      return "";
    }


    // User chooses characters for character set, and returns error if none are selected
    let includeLowerCase = window.confirm("Would you like to include lower case letters?");
    let includeUpperCase = window.confirm("Would you like to include upper case characters?");
    let includeNum = window.confirm("Would you like to include numbers?");
    let includeSymbol = window.confirm("Would you like to include symbols?");

    if (!includeLowerCase && !includeUpperCase && !includeNum && !includeSymbol) {
      window.alert("Please choose at least one character set!");
    }
 
    // Based on user input, adds the specified string types to the master string list
    if (includeLowerCase) {
      chosenString += lowerCaseString;
    }
    if (includeUpperCase) {
      chosenString += upperCaseString;
    }
    if (includeNum) {
      chosenString += numString;
    }
    if (includeSymbol) {
      chosenString += symbolString;
    }

    // 'For' loop that iterates over chosen length, choosing characters at random
    for (i = 0; i < chosenLength; i++) {
      generatedPassword += chosenString.charAt(Math.floor(Math.random() * chosenString.length));
    }

    // Return generated password
    return generatedPassword;

  }
  
  // Writes output of generatePassword() to a variable, then writes to #password ID to display on-screen
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

