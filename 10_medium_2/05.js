// #6 - Next Featured Number
const LARGEST_FEATURED_NUMBER = 9876543201;

function isFeatured(number) {
  if (number % 2 !== 1 || number % 7 !== 0) return false;
  let digitArray = String(number).split('');
  if ((new Set(digitArray)).size !== digitArray.length) return false;
  return true;
}

function featured(startingValue) {
  for (let i = startingValue + 1; i <= LARGEST_FEATURED_NUMBER; i++) {
    if(isFeatured(i)) return i;
  }

  return "There is no possible number that fulfills those requirements.";
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."
