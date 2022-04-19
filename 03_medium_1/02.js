// #2 - Conditinal Loop
let i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);
  } else {
    i += 1;
  }
}

// The loop is only incremented in the else block, which will never be invoked.
// Thus the console will log 0 infinitly.
