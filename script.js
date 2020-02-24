// Assignment Code
var generateBtn = document.querySelector("#generate");

const minLength = 8;
const maxLength = 128;
var desiredLength = parseInt(prompt("Please enter your desired lenght for the password!"), 10);


randomPass = "";

if (desiredLength >= minLength && desiredLength <= maxLength) {
  var max = 4;
  for (var i= 1; i<= desiredLength; i++) {
    
    function getRandomInt() {
      return Math.floor(Math.random() * Math.floor(max));
    };

    if (getRandomInt() === 0){
    randomPass += randomLowercase()}

    else if (getRandomInt() === 1){
      randomPass += randomUppercase()}

    else if (getRandomInt() === 2){
      randomPass += randomNumber()}

    else if (getRandomInt() === 3){
      randomPass += randomSymbol()}
  }

};
  
  

console.log(randomPass);
//var disredSymbols = prompt("Please enter if you desire special characters in the password!")


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function randomLowercase(){
  const lowercaseList = "abcdefghijklmnopqrstuvwxyz";
  return lowercaseList[Math.floor(Math.random() * lowercaseList.length)];  
  
};

function randomUppercase(){
  const uppercaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return uppercaseList[Math.floor(Math.random() * uppercaseList.length)];  
  
};

function randomNumber(){
  const numbersList = "0123456789";
  return numbersList[Math.floor(Math.random() * numbersList.length)];  
  
};

function randomSymbol(){
  const symbolsList = "!@#$%&*_-?/~";
  return symbolsList[Math.floor(Math.random() * symbolsList.length)];  
  
};

console.log(randomPass.length)

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
