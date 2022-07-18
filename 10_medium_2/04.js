// #5 - Unlucky Days
function fridayThe13ths(year) {
  let thirteenths = [];
  for (let i = 0; i < 12; i++) {
    thirteenths.push(new Date(year, i, 13));
  }
  return thirteenths.reduce(((count, date) => date.getDay() === 5 ? (count + 1) : count), 0);
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2
