// # 5 - Counter
// Snippet 1
var counter = 5;
var rate = 3;
console.log('The total value is ' + String(counter * rate));

function counter(count) {
  // ...
}
// Will log 'The total value is 15'.
// The function declaration is hoisted to the top, initializing a variable, counter.
// This variable is then reassigned to 5 before the log method is called.

// Snippet 2
function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

var counter = 5;
var rate = 3;
// Will log 'The total value is NaN'.
// In this case counter references an empty function, and rate is initialized but not defined.

// Snippet 3
var counter = 5;
var rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

// Will log 'The total value is 15'
// The function declaration is hoisted to the top, but then counter is reassigned to 5.

// Snippet 4
let counter = 5;
let rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

// In this example, a SyntaxError is reaised. let and const keywords do not allow for duplicate variable names.
