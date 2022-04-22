// #2 - Combining Arrays
function copyUniqueElements(source, destination) {
  source.forEach(element => {
    if (!destination.includes(element)) destination.push(element);
  });
}

function union(...args) {
  let result = [];
  args.forEach(arr => copyUniqueElements(arr, result));
  return result;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
