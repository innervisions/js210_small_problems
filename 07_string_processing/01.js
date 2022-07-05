// #1 - Uppercase Check
// function isUppercase(string) {
//   for(let i = 0; i < string.length; i++) {
//     let char = string[i];
//     if(char !== char.toUpperCase()) return false;
//   }

//   return true;
// }

function isUppercase(string) {
  return !/[a-z]/.test(string);
}


console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true
