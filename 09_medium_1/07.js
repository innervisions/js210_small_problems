// #7 - Fibonacci Numbers (Procedural)
function fibonacci(n) {
  if (n <= 2) return 1;
  let previousFib = 1;
  let currentFib = 1;
  for (let i = 3; i <= n; i++) {
    let temp = previousFib + currentFib;
    previousFib = currentFib;
    currentFib = temp;
  }
  return currentFib;
}

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050
