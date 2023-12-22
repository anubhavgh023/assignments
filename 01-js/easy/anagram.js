/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

//Method-1 : comparing ascii values
// function isAnagram(str1, str2) {
//   let sumStr1 = 0;
//   let sumStr2 = 0;

//   for (let char in str1) {
//     sumStr1 += str1.toLowerCase().charCodeAt(char);
//   }
//   for (let char in str2) {
//     sumStr2 += str2.toLowerCase().charCodeAt(char);
//   }
//   console.log(sumStr1);
//   console.log(sumStr2);

//   if (sumStr1 === sumStr2) {
//     return true;
//   }
//   else {
//     return false;
//   }
// }


module.exports = isAnagram;



//---------------
// Method-2 : using comparing strings
function isAnagram(str1, str2) {
  const str1Array = [...(str1.toLowerCase())].sort(); 
  const str2Array = [...(str2.toLowerCase())].sort();
  if (JSON.stringify(str1Array) === JSON.stringify(str2Array)) {
    return true;
  }
  return false;
}

module.exports = isAnagram;
