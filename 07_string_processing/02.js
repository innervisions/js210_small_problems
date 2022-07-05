// #2 - Delete Vowels
function removeVowels(strings) {
  return strings.map(string => {
    let noVowels = '';
    for (let i = 0; i < string.length; i++) {
      let char = string[i]
      if(!char.match(/[aeiou]/i)) noVowels += char;
    }

    return noVowels;
  });
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]
