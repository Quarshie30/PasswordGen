// Array of special characters to be included in password
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
  var includeNumeric = confirm("Include numeric characters");
  var includelowerCase = confirm("Include lowercase characters?");
  var includeupperCase = confirm ("Include uppercase characters?");
  console.log("characters");

  if (!includeSpecial && !include && !includeLowercase && !includeUppercase){
    alert("Pick one character type.");
  
  }

  return {
    length,
    includeNumeric,
    includeSpecial,
    includeupperCase,
    includelowerCase,
  }
}


// Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex = math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword() {
console.log("Button clicked")

var options = getPasswordOptions();

var availableCharacters = [];
var guaranteedCharacters = [];

if (options.includeSpecial) {
  availableCharacters= availableCharacters.concat(specialCharacters);
  guaranteedCharacters.push(getRandom(specialCharacters));
}

if (options.includeNumeric) {
  availableCharacters= availableCharacters.concat(numericCharacters);
  guaranteedCharacters.push(getRandom(numericCharacters));
}

if (options.includelowerCase) {
  availableCharacters= availableCharacters.concat(lowerCasedCharacters);
  guaranteedCharacters.push(getRandom(lowerCasedCharacters));
}

if (options.includeUppercase) {
  availableCharacters= availableCharacters.concat(includeUppercase);
  guaranteedCharacters.push(getRandom(includeUppercase));
}

//Check remainign length
var remainingLength = options.length - guaranteedCharacters, Length;
for (var i = 0; i < remainingLength; i++) {

  var randomChar=getRandom(availableCharacters);
  guaranteedCharacters.push(randomChar);

return "Generated password"

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
generateBtn.addEventListener('click', writePassword);