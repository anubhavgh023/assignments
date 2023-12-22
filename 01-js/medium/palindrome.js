/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrome as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase(); //convert  to lower-case & removed spaces
  for (let char in str) { //removing spaces
    if (str.charCodeAt(char) < 97 || str.charCodeAt(char) > 122) {
      str = str.replaceAll(str[char], '');
    }
  }

  console.log(str);

  let splitStr = [...str]; //returns an array of letters
  let revStr = splitStr.reverse().join('');

  if (str === revStr) {
    return true
  }
  
  return false;
}

module.exports = isPalindrome;
