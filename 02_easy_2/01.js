// #1 - Ddaaiillyy ddoouubbllee
// function crunch(string) {
//   let newString = '';
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === string[i + 1]) continue;
//     newString += string[i];
//   }

//   return newString;
// }

function crunch(string) {
  let crunched = string.replace(/(.)\1{1,}/g, '$1');
  return crunched;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""
