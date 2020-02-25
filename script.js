// Assignment Code
var desiredLength = parseInt(prompt("Please enter your desired lenght between 8 and 128 characters for the password!"), 10);
var upperDesired = confirm("Do you want uppercase letters in the password?")
var numberDesired = confirm("Do you want numbers in the password?")
var symbolDesired = confirm("Do you want special characters in the password?")

randomPass = "";

if (desiredLength >= 8 && desiredLength <= 128) {
   
  function getRandomInt() {
    return Math.floor(Math.random() * Math.floor(4));
  }
    for (i = 1; i <= desiredLength; i++){
      if (getRandomInt() === 0 && symbolDesired === true){
        randomPass += randomSymbol()}

      else if (getRandomInt() === 1 && upperDesired === true){
        randomPass += randomUppercase()}

      else if (getRandomInt() === 2 && numberDesired === true){
      randomPass += randomNumber()}

      else  
      randomPass += randomLowercase()
    }
    alert(randomPass);
}
else 
alert ("This is not a valid length!");


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


