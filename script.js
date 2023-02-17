
var generate = document.querySelector("#generate");

var passwordLength;
var CLowcase;
var CUpcase;
var Cnumbers;
var CSpecialcharacters;
var userchoice;

var lowerCasealphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
 
// making lowercase letters uppercase

var BUpper = [];
var toUpper = function (x) {
  return x.toUpperCase();
};
upperCase = lowerCasealphabet.map(toUpper);

// number variables
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// special characters 
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Add pw to password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//generate button event
generate.addEventListener("click", writePassword);

// beginning generation function
function generatePassword() {
  //question prompt 4
  passwordLength = prompt("How many values would you like in your Password? (8 to 128 characters available)");
  console.log("Password Length" + passwordLength);

  if(!passwordLength) {
    alert("Please Select Character Number");
  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Please select a character value of 8 to 128");
    console.log("Password Length" + passwordLength);
  } else {
    CLowcase = confirm("Include lower case letters in your password?");
    console.log("Lower case" + CLowcase);
    CUpcase = confirm("Include upper case letters in your password?");
    console.log("Upper case" + CUpcase);
    Cnumbers = confirm("Include numbers in your password?");
    console.log("Numbers" + Cnumbers);
    CSpecialcharacters = confirm("Include special characters in your password?");
    console.log("Special Characters" + CSpecialcharacters);
  };

  //if no answers
  if (!CLowcase && !CUpcase && !Cnumbers && !CSpecialcharacters) {
    userchoice = alert("Please choose criteria");

  //4 options
  } else if (CLowcase && CUpcase && Cnumbers && CSpecialcharacters) {
    userchoice = lowerCasealphabet.concat(upperCase, numbers, special);
    console.log(userchoice);
  }

  //3 options
  else if (CLowcase && CUpcase && Cnumbers) {
    userchoice = lowerCasealphabet.concat(upperCase, numbers);
    console.log(userchoice)
  }
  else if (CLowcase && CUpcase && CSpecialcharacters) {
    userchoice = lowerCasealphabet.concat(upperCase, special);
    console.log(userchoice);
  }
  else if (CLowcase && Cnumbers && CSpecialcharacters) {
    userchoice = lowerCasealphabet.concat(numbers, special);
    console.log(userchoice);
  }
  else if (CUpcase && Cnumbers && CSpecialcharacters) {
    userchoice = upperCase.concat(numbers, special);
    console.log(userchoice);
  }

  //2 options
  else if (CLowcase && CUpcase) {
    userchoice = lowerCasealphabet.concat(upperCase);
    console.log(userchoice);
  }
  else if (CLowcase && Cnumbers) {
  userchoice = lowerCasealphabet.concat(numbers);
  console.log(userchoice);
  }
  else if (CLowcase && CSpecialcharacters) {
  userchoice = lowerCasealphabet.concat(special);
  console.log(userchoice);
  }
  else if (CUpcase && Cnumbers) {
    userchoice = upperCase.concat(numbers);
    console.log(userchoice);
  }
  else if (CUpcase && CSpecialcharacters) {
    userchoice = upperCase.concat(special);
    console.log(userchoice);
  }
  else if (Cnumbers && CSpecialcharacters) {
    userchoice = numbers.concat(special);
    console.log(userchoice);
  }

  //1 option
  else if (CLowcase) {
    userchoice = lowerCasealphabet;
    console.log(userchoice);
  }
  else if (CUpcase) {
    userchoice = Upper.concat(upperCase);
    console.log(userchoice);
  }
  else if (Cnumbers) {
    userchoice = numbers;
    console.log(userchoice);
  }
  else if (CSpecialcharacters) {
    userchoice = special;
    console.log(userchoice);
  };

  //Empty length for pw
  var blankpw = [];

  // Random character selection section
  for (var i = 0; i < passwordLength; i++) {
    var choices = userchoice[Math.floor(Math.random() * userchoice.length)];
    blankpw.push(choices);
    console.log(choices)
  }

  // Show Password Generated
  var password = blankpw.join("");
  console.log("Generated Password: " + password);
  return password;
  }