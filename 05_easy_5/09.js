// #9 - Reverse It Part 1
const reverseSentence = sentence => sentence.split(' ').reverse().join(' ');

console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"
