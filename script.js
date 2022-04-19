//GIVEN I need a new, secure password
 //click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page


// Assignment Code
let generateBtn = document.querySelector("#generate");

let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lower = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let special = "!@,#$%&*{}[]/\\+=";
let chosenCharacters = "";
// Write password to the #password input
function writePassword() {
 


    let password = generatePassword();
    let passwordText = document.querySelector("#password");
   passwordText.value = password;
   
  }
// Start function to generate password

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function generatePassword(){
 
  let result = "";

  let length = prompt("How many characters do you want in your secured password? ( choose between 8 and 128)");
  if(isNaN(length)){
    alert("You must input a number to be valid!");
    return generatePassword()
  }
  if(length<8 || length> 128){
    alert("Please choose a number between 8 - 128!");
    return generatePassword()
  }

  let hasUpperCase = confirm("Include any upper case characters?");
  let hasLowerCase = confirm("Include any lower case characters?");
  let hasNumbers = confirm("Include any numbers?");
  let hasSpecial = confirm("Include any special characters?");

  if(!hasUpperCase&&!hasLowerCase&&!hasNumbers&&!hasSpecial){
    alert("You must at least choose 1 character type!");
    return generatePassword()
  }

  if(hasUpper){
    chosenCharacters += upper
  }
  if(hasLower){
    chosenCharacters += lower
  }

  if(hasNumbers) {
    chosenCharacters += numbers
  }

  if(hasSpecial) {
    chosenCharacters += special
  }

for (let i = 0; i < length; i++) {
  result += chosenCharacters.charAt(Math.floor(Math.random() * chosenCharacters.length));
}
return result;

}
