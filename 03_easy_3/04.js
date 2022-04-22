// #4 - Palindromic Strings part 1
// function isPalindrome(str) {
//   let left = 0;
//   let right = str.length - 1;
//   while (left < right) {
//     if (str[left] !== str[right]) return false;
//     left +=1;
//     right -= 1;
//   }
//   return true;
// }

function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true
