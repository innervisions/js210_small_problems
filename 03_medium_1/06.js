// #6 - Logger
function debugIt() {
  const status = 'debugging';
  function logger() {
    console.log(status);
  }

  logger();
}

debugIt();

// The constant status is initialized in the function block assigned to debugIt.
// As the function logger is declared in that same block, it has access to it.
