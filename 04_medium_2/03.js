// #3 - Amount Payable
let startingBalance = 1;
const chicken = 5;
const chickenQuantity = 7;

function totalPayable(item, quantity) {
  return startingBalance + (item * quantity);
}

startingBalance = 5;
console.log(totalPayable(chicken, chickenQuantity));
// logs 40

startingBalance = 10;
console.log(totalPayable(chicken, chickenQuantity));
// logs 45

// The function totalPayable is defined in the same scope as startingBalance and is thus able to access its value.
// The value accessed in startingBalance is the value it's assigned to when the function is called.
