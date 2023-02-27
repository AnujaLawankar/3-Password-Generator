
// Assignment code here

let password = "";


//let passwordLenght = 8;
const passwordCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";


function generatePassword() {
  console.log("Hey you click the button");
  let continue_program = true;


  //Ask for choice
  var pwd_range = window.prompt("Please enter range of password(Range min=8, max=128)");
  if (pwd_range == null) {
    //breaking the loop
    continue_program = false;
  }
  //validation
  while ((pwd_range < 8 || pwd_range > 128) && (continue_program == true)) {
    pwd_range = window.prompt("Invalid selection,\nPlease enter the password between range");


  }
  //Asking for password certiria
  let typeSelection = 0;
  let lowercase_selection = false;
  let uppercase_selection = false;
  let numeric_selection = false;
  let specialchar_selection = false;

  while (typeSelection == 0 && continue_program) {
    let charType = "Do you want to include 'lowercase' in your password\nPress ok for 'yes' and cancle for 'no'";
    if (confirm(charType) == true) {
      typeSelection += 1;
      lowercase_selection = true;
    }

    charType = "Do you want to include 'uppercase' in your password\nPress ok for 'yes' and cancle for 'no'";
    if (confirm(charType) == true) {
      typeSelection += 1;
      uppercase_selection = true;
    }

    charType = "Do you want to include 'numeric' in your password\nPress ok for 'yes' and cancle for 'no'";
    if (confirm(charType) == true) {
      typeSelection += 1;
      numeric_selection = true;
    }

    charType = "Do you want to include 'special charecter' in your password\nPress ok for 'yes' and cancle for 'no'";
    if (confirm(charType) == true) {
      typeSelection += 1;
      specialchar_selection = true;
    }
    if (typeSelection == 0) {
      let message = "You have to atleast select one char type!\nPlease try again!";
      if (confirm(message) == true) {
        //pass
      } else {
        continue_program = false;
        break;
      }
    }

  }
  //slice function
  let upperCaseChar = passwordCharacters.slice(0, 25);
  let lowerCaseChar = passwordCharacters.slice(26, 51);
  let numericCaseChar = passwordCharacters.slice(52, 61);
  let specialCaseChar = passwordCharacters.slice(62, 69);

  //generating password
  let l_random = 0;
  let u_random = 0;
  let n_random = 0;
  let s_random = 0;

  while (password.length <= pwd_range - 1 && continue_program) {

    if (lowercase_selection && password.length <= pwd_range - 1) {
      l_random = Math.floor(Math.random() * lowerCaseChar.length);
      password = password.concat(lowerCaseChar.charAt(l_random));

    }

    if (uppercase_selection && password.length <= pwd_range - 1) {
      u_random = Math.floor(Math.random() * upperCaseChar.length);
      password = password.concat(upperCaseChar.charAt(u_random));
    }

    if (numeric_selection && password.length <= pwd_range - 1) {
      n_random = Math.floor(Math.random() * numericCaseChar.length);
      password = password.concat(numericCaseChar.charAt(n_random));
    }

    if (specialchar_selection && password.length <= pwd_range - 1) {
      s_random = Math.floor(Math.random() * specialCaseChar.length);
      password = password.concat(specialCaseChar.charAt(s_random));
    }
    console.log(password);
  }
  //alert("Thanks for choosing")

  /*
    if (pwd_range <= 8 && pwd_range >= 128) {
      window.prompt("Thank you for choosing");
    } else {
      window.prompt("Enter the password between range");
  
    }
  */
  //var pwd_char = window.prompt("Choose up")
  if (password.length > 0) {
    alert("Password is generated in the below text area!");
  } else {
    alert("Password is not created\nPlease try again by reloading the page!");
  }
  return password;

}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

