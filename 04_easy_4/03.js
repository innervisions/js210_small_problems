// #3 - Halvsies
// function halvsies(arr) {
//   let leftArr = [];
//   let i = 0;
//   while (i < arr.length / 2) {
//     leftArr.push(arr[i]);
//     i++;
//   }

//   let rightArr = [];
//   while (i < arr.length) {
//     rightArr.push(arr[i]);
//     i++;
//   }

//   return [leftArr, rightArr];
// }

function halvsies(arr) {
  let half = Math.ceil(arr.length / 2);
  let leftArr = arr.slice(0, half);
  let rightArr = arr.slice(half);
  return [leftArr, rightArr];
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]
