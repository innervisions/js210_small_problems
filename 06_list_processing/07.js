// #7 - Palindromic Substrings
function leadingSubstrings(string) {
  return string.split('').map((_, idx) => string.slice(0, idx + 1));
}

function substrings(string) {
  return string.split('').flatMap((_, idx) => leadingSubstrings(string.slice(idx)));
}

function palindromes(string) {
  return substrings(string).filter(substring => isPalindrome(substring));
}

function isPalindrome(word) {
  return word.length > 1 && word === word.split('').reverse().join('');
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// ["ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo"]

console.log(palindromes('knitting cassettes'));
// returns
// ["nittin", "itti", "tt", "ss", "settes", "ette", "tt"]
