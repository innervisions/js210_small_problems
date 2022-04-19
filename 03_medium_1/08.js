// #8 - Product of Sums
function productOfSums(array1, array2) {
  let result = total(array1) * total(array2);
  return result;
}

function total(numbers) {
  let sum;

  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }

  sum;
}

// This will not produce the desired result, as the total function does not incude a return statment.
// Function definitions and function expressions without an explicit return return undefined.

// Even if this is fixed, we still have an issue that sum is initialized on line 8 but not assigned to zero.
// It is implicitly assigned to undefined, which means on line 11 we are attempting to add a number to undefined.
