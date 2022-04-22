// #8 - Letter Swap

function swapLetters(word) {
  let letters = word.split('');
  let lastIndex = letters.length - 1;
  [letters[0], letters[lastIndex]] = [letters[lastIndex], letters[0]];
  return letters.join('');
}

function swap(sentence) {
  let words = sentence.split(' ');
  let swappedWords = words.map(word => swapLetters(word));
  return swappedWords.join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"
