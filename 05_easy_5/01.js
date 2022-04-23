// #1 - Double Char Part 1
function repeater(str) {
  let result = '';
  for (let char of str) {
    result += char + char;
  }

  return result;
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""
