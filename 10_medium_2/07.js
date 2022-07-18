// #7 Bubble Sort
function bubbleSort(array) {
  let cleanSweep;
  do {
    cleanSweep = true;
    for (let i = 1; i < array.length; i++) {
      if(array[i] < array[i - 1]) {
        [array[i - 1], array[i]] = [array[i], array[i - 1]];
        cleanSweep = false;
      }
    }
  } while (!cleanSweep);
}

const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
