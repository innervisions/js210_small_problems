// # 9 - How Many
function incrementCount(count, value) {
  count[value] = count[value] || 0;
  count[value] += 1;
}

function countOccurrences(arr) {
  let count = {};
  arr.forEach(value => incrementCount(count, value));
  Object.keys(count).forEach(key => console.log(`${key} => ${count[key]}`));
}

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
