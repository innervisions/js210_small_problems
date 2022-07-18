// #2 - Rotation Part 2
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

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917
