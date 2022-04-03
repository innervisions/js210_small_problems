// #06 - Short Long Short
function shortLongShort(firstString, secondString) {
  if (firstString.length < secondString.length) {
    return firstString + secondString + firstString;
  }
  return secondString + firstString + secondString;
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"
