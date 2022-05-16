// #06 - All Substrings
function leadingSubstrings(string) {
  return string.split('').map((_, idx) => string.slice(0, idx + 1));
}

function substrings(string) {
  return string.split('').flatMap((_, idx) => leadingSubstrings(string.slice(idx)));
}

console.log(substrings('abcde'));

// returns
// ["a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e"]
