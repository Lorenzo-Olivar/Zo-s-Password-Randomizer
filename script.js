// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Alert notifies the user of what to write down
  alert('Pls specify and write down which modifiers you want to include in your password.');
  // Prompt creates an array of the users desired password modifiers
  let inputFirst = prompt('uc - Uppercase | lc - Lowercase | num - Numbers | spc - Special Characters', 'Please list each desired password modifier seperated by a one space');
  let passCriteria = inputFirst.split(" ");
  // console.log(passCriteria); The Array worked and logged in the user's modifiers into an array

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Test Area 


