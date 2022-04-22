// #9 - Letter Counter Part 1
function incrementSize(sizes, value) {
  if(sizes[value]) {
    sizes[value] += 1;
  } else {
    sizes[value] = 1;
  }
}

function wordSizes(sentence) {
  if(sentence.length === 0) return {};
  let words = sentence.split(' ');
  let sizes = {};
  words.forEach(word => incrementSize(sizes, word.length));
  return sizes;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}
