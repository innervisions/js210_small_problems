// # 4 - Fibonacci Number Location by Length
function fibonacci(number) {
  if (number <= 2n) return 1n;
  let previousValue = 1n;
  let fibonacciValue = 1n;
  for (let index = 3n; index <= number; index++) {
    let temp = fibonacciValue;
    fibonacciValue = fibonacciValue + previousValue;
    previousValue = temp;
  }
  return fibonacciValue;
}

function findFibonacciIndexByLength(length) {
  let index = 1n;
  while(true) {
    let fibonacciValue = fibonacci(index);
    if (String(fibonacciValue).length == length) return index;
    index += 1n;
  }
}

console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.
