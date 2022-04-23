// #10 Reverse It Part 2
function reverseWords(str) {
  const words = str.split(' ');
  let reversedWords = [];
  words.forEach(word => {
    if (word.length >= 5) {
      reversedWords.push(word.split('').reverse().join(''));
    } else {
      reversedWords.push(word)
    }
  });
  return reversedWords.join(' ');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"
