// #3 - Rotattion Part 3
function rotateArray(arr) {
  if (!Array.isArray(arr)) return undefined;
  if (arr.length === 0) return arr;
  return arr.slice(1).concat(arr[0]);
}

function rotateRightmostDigits(value, numberOfDigits) {
  let digits = String(value).split('');
  let leftDigits = digits.slice(0, digits.length - numberOfDigits);
  let rightDigits = digits.slice(digits.length - numberOfDigits);
  return Number(leftDigits.concat(rotateArray(rightDigits)).join(''));
}

function maxRotation(value) {
  let length = String(value).length;
  for (let i = length; i > 1; i--) {
    value = rotateRightmostDigits(value, i);
  }
  return value;
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845
