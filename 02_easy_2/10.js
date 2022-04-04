// #10 - What Century is it?
function getSuffix(century) {
  let string = String(century);
  let ones = string[string.length - 1];
  let tens = string[string.length - 2];
  if (ones === '1' && tens !== '1') return 'st';
  if (ones === '2' && tens !== '1') return 'nd';
  if (ones === '3' && tens !== '1') return 'rd';
  return 'th';
}

function century(year) {
  let century = Math.floor(year / 100);
  if (year % 100 !== 0) century += 1;
  return String(century) + getSuffix(century);
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"
