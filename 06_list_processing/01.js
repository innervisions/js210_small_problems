// #01 - Sums of Digits
function sum(integer) {
  let digits = String(integer).split('').map(char => Number(char));
  return digits.reduce((total, value) => total + value);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45
