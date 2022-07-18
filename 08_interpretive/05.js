// #5 - Vingenere Cipher
const UPPERCASE_A = 65;
const LOWERCASE_A = 97;

function caesarEncrypt(plaintext, key) {
  return plaintext.split('').map(char => {
    if (char.match(/[a-z]/)) {
      return String.fromCharCode(((char.charCodeAt(0) - LOWERCASE_A + key) % 26) + LOWERCASE_A);
    } else if (char.match(/[A-Z]/)) {
      return String.fromCharCode(((char.charCodeAt(0) - UPPERCASE_A + key) % 26) + UPPERCASE_A);
    } else {
      return char;
    }
  }).join('');
}

function vingenereEncrypt(plaintext, keyword) {
  const shiftValue = letter => letter.charCodeAt(0) - UPPERCASE_A;
  let shiftValues = keyword.toUpperCase().split('').map(shiftValue);
  let shiftIndex = -1;
  return plaintext.split('').map(char => {
    shiftIndex += 1;
    return caesarEncrypt(char, shiftValues[shiftIndex % shiftValues.length]);
  }).join('');
}

console.log(vingenereEncrypt("Pineapples don't go on pizzas!", 'A'));
console.log(vingenereEncrypt("Pineapples don't go on pizzas!", 'Aa'));
console.log(vingenereEncrypt("Pineapples don't go on pizzas!", 'cab'));
console.log(vingenereEncrypt("Dog", 'Rabbit'));
