// #4 - Caeser Cipher
// Input: Plaitext string and numerical key.
// Output: Encrypted String
// Data structure: Convert input string to array to use map functionality. Rejoin to string before returning.
// Algorithm:
// 1) Split plaintext into single char array.
// 2) Map each element to it's encoded value.
//   - Determine the letter's place in the alphabet by subracting 'A''s char code. Add key to shift.
//   - Find the remainder % 26 to deal with wrapping.
//   - Add back 'A''s char code and convert back to a string.
// 3) Join the encoded values back into a string.
const UPPERCASE_A = 65;
const LOWERCASE_A = 97;

function caesarEncrypt(plaintext, key) {
  return plaintext.split('').map(char => {
    if(char.match(/[a-z]/)) {
      return String.fromCharCode(((char.charCodeAt(0) - LOWERCASE_A + key) % 26) + LOWERCASE_A);
    } else if (char.match(/[A-Z]/)) {
      return String.fromCharCode(((char.charCodeAt(0) - UPPERCASE_A + key) % 26) + UPPERCASE_A);
    } else {
      return char;
    }
  }).join('');
}

// simple shift
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"
