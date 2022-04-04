// #7 - Double Doubles
function isDouble(number) {
  let string = String(number);
  if (string.length % 2 === 1) return false;
  
  let halfway = string.length / 2
  for (let i = 0; i < halfway; i++) {
    if (string[i] !== string[i + halfway]) return false;
  }

  return true;
}

function twice(number) {
  if (isDouble(number)) return number;
  return number * 2;
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676
