// #1 - Double Char Part 2
const CONSONANTS_REGEX = /[bcdfghjklmnpqrstvwxys]/gi;

function doubleConsonants(str) {
  let result = '';
  for (let char of str) {
    result += char;
    if (char.match(CONSONANTS_REGEX)) result += char;
  }

  return result;
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""
