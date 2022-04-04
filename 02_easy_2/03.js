// #3 - Stringy Strings
function stringy(length) {
  let output = '';
  let bit = true;
  for (let i = 0; i < length; i++) {
    output += String(Number(bit));
    bit = !bit;
  }
  return output;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"
