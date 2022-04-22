// #7 - Running Total
// function runningTotal(arr) {
//   let result = [];
//   let total = 0;
//   for (i in arr) {
//     total += arr[i];
//     result[i] = total;
//   }

//   return result;
// }

function runningTotal(arr) {
  let total = 0;
  return arr.map(function (element) {
    total += element;
    return total;
  });
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []
