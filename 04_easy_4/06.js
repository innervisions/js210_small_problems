// #6 - Multiplicative Average
function showMultiplicativeAverage(arr) {
  const product = arr.reduce((previous, current) => previous * current, 1);
  const average = product / arr.length;
  return average.toFixed(3);
}

console.log(showMultiplicativeAverage([3, 5]));                   // "7.500"
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"
