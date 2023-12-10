// Assignment Code
var generateBtn = document.querySelector("#generate");


// Get criteria to generate the password (Uppercase letters, Lowercase letters, numbers, special chars) if criteria isn't met alert is given. 
// If password length is not met, user will be returned to start of process. If invalid choice
function generatePassword() {
  // var letters = "yn"
  var pwlength = Number(prompt("How many characters would you like your password to be? (Please choose from 8 to 128 characters)"));
  if (pwlength < 8 || pwlength > 128) {
    alert("You selected " + pwlength + " charcters. Password must be between 8 and 128 characters.");
    generatePassword();
  };
  // if (pwlength !== Number) {
  //   alert("Not a valid choice, password length must be a numerical value.");
  //   generatePassword();
  // }
  
  //Entering "y" at the option allows password questions to continue but prompts the user that a secure password should contain at least one of these items
  var pwupper = prompt("Do you want uppercase letters in your password? (y to confirm n to move on to next option)");
  if  (pwupper !== "y") {
    alert("A secure password should contain at least 1 upper case letter")
  };  
  var pwlower = prompt("Do you want lowercase letters in your password? (y to confirm n to move on to next option)");
  if (pwlower !== "y") {
    alert("A secure password should contain at least 1 lower case letter")
  };
  var pwnum = prompt("Would you like your password to contain numbers? (y to confirm n to move on to next option)");
  if (pwnum !== "y") {
    alert("A secure password should contain at least 1 number")
  };
  var pwspecial = prompt("Would you like your password to contina special characters? (y to confirm n to move on to next option)");
  if (pwspecial !== "y") {
    alert("A secure password should contain at least 1 special character")
  };


  // Password variables for allowable passwords characters
  var pwupperABC = "ABCDEFGHIJKLMNOPQRSTUVWXZ";
  var pwlowerABC ="abcdefghijklmnopqrstuvwxyz";
  var pwSPC ="!@#$%^&*()?.<\>|=+:;,[-_]";
  var pwNUM ="0123456789";
  var pwContainer =[];

  //pulls in variables to generate random password
  if (pwupper == "y") {pwContainer += pwupperABC}
  if (pwlower == "y") {pwContainer += pwlowerABC;}
  if (pwnum  == "y") {pwContainer += pwNUM;}
  if (pwspecial  == "y") {pwContainer += pwSPC;}


  let finalPassword = ""
  for (let i = 0; i < pwlength; i++) {
    let rng =[Math.floor(Math.random() * pwContainer.length)];
    finalPassword = finalPassword + pwContainer[rng];
  }
  return finalPassword;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
