// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function randomLowercase(){
  const lowercaseList = "abcdefghijklmnopqrstuvwxyz";
  return lowercaseList[Math.floor(Math.random() * lowercaseList.length)];  
  
}

function randomUppercase(){
  const uppercaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return uppercaseList[Math.floor(Math.random() * uppercaseList.length)];  
  
}

function randomNumber(){
  const numbersList = "0123456789";
  return numbersList[Math.floor(Math.random() * numbersList.length)];  
  
}

function randomSymbol(){
  const symbolsList = "!@#$%&*_-?/~";
  return symbolsList[Math.floor(Math.random() * symbolsList.length)];  
  
}


console.log(randomLowercase());
console.log(randomUppercase());
console.log(randomNumber());
console.log(randomSymbol());
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
