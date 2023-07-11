// Assignment Code
var generateBtn = document.querySelector("#generate");
// Assigned the variables for the password "parts"
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var number = '0123456789';
var symbol =  " !\"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~";
// Assigned generatePassword a function that has 4 prompts and uses those prompts to add to the allCharacters variable
var generatePassword = function () {
  var passwordLength = prompt("How many characters do you want your password to have?");
  
  var isLower = confirm("Do you want lowercase letters?");
  
  var isUpper = confirm("Do you want uppercass letters?");
  
  var isNumber = confirm("Do you want numbers?");

  var isSymbol = confirm("Do you want symbols?");

  var allCharacters = "";

  if (isLower) {
    allCharacters += allCharacters.concat(lowercase);
  }

  if (isUpper) {
    allCharacters += allCharacters.concat(uppercase);
  }

  if (isNumber) {
    allCharacters += allCharacters.concat(number);
  }

  if (isSymbol) {
    allCharacters += allCharacters.concat(symbol);
  }
// Used the randomnumber generator to pick from the allCharacters string and assign it as the new password value and returned that value to be recieved when called
  var password = "";

  for (let i = 0; i < passwordLength; i++) {
    password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
   }
   return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
