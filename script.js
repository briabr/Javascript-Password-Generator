// Assignment code here

//Variables 
var numbers;
var upperCase;
var lowerCase;
var specialCharacters;
var passwordLength;
var userChoice;
var charactersCount
var password = "";
var userchoice = "";
var charString = "";


specialCharacters = "!@#$%^&*)()";
numbers = "0123456789";
lowerCase = "abcdefghijklmnopqrstuvwxyz";
upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var generateBtn = document.querySelector("#generate");
function generatePassword() {
var passwordLength = prompt("How many characters you want your password to include?");
while (passwordLength < 8 || passwordLength > 128) {
  passwordLength = prompt("Password must be between 8-128 characters. How many characters do you want your password to include?");
} 
numbersPrompt = confirm("Do you want to use numbers in your password?");
if (numbersPrompt === true) {
  charString = charString.concat(numbers);
}
lowerCase = confirm("Do you want to use lowercases in your password?");
upperCase = confirm("Do you want to use uppercases in your password?");
specialCharacters = confirm("Do you want to use special characters in your password?");

if (!charString) {
  alert("Please select at least one character type!");
}
console.log(charString)
  }
 //for loop for randonmly selecting characters from charString 
//eturn password


// Assignment Code
// var generateBtn = document.querySelector("#generate");
// Write password to the #password input
// function writePassword() {
//   var password = generatePassword(); 
//   var passwordText = document.querySelector("#password");
//   passwordText.value = password;
// generateBtn.addEventListener("click", writePassword);
// }
// Add event listener to generate button

