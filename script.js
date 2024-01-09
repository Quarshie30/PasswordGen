//Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  var length = parseInt(prompt("Choose length of password between 8 - 128 Characters"));// ParseInt function covers first argument to a string and returns an integer

  if (isNaN(length) || length < 8 || length > 128) {
    alert("Length of password must be between 9 and 128.");
  }

  var includeSpecial = confirm("Include special characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeLowerCase = confirm("Include lowercase characters?");
  var includeUpperCase = confirm("Include uppercase characters?");

  console.log("characters");

  if (!includeSpecial && !include && !includeLowercase && !includeUpperCase){
    alert("Pick one character type.");
  
  }

  return {
    length,
    includeSpecial,
    includeNumeric,
    includeLowerCase,
    includeUpperCase
  };
}


// Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword() {
console.log("Button clicked")

  var options = getPasswordOptions();

  var availableCharacters = [];
  var guaranteedCharacters = [];

//if statments to check type of availble character & randomise
if (options.includeSpecial) {
  availableCharacters = availableCharacters.concat(specialCharacters);
  guaranteedCharacters.push(getRandom(specialCharacters));
}

if (options.includeNumeric) {
  availableCharacters = availableCharacters.concat(numericCharacters);
  guaranteedCharacters.push(getRandom(numericCharacters));
}

if (options.includeLowerCase) {
  availableCharacters = availableCharacters.concat(lowerCasedCharacters);
  guaranteedCharacters.push(getRandom(lowerCasedCharacters));
}

if (options.includeUpperCase) {
  availableCharacters = availableCharacters.concat(upperCasedCharacters);
  guaranteedCharacters.push(getRandom(upperCasedCharacters));
}


//Check remainign length
var remainingLength = options.length - guaranteedCharacters.length;
for (var i = 0; i < remainingLength; i++) {
  var randomChar = getRandom(availableCharacters);
  guaranteedCharacters.push(randomChar);
}

return guaranteedCharacters.join("");

}
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword)