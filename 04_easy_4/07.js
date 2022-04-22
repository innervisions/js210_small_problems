// #7 - Multiply Lists
function multiplyList(arr1, arr2) {
  return arr1.map((value, index) => value * arr2[index]);
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]
