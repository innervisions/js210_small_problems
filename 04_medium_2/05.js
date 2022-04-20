// #5 - What's My Value?
const array = ['Apples', 'Peaches', 'Grapes'];

array[3.4] = 'Oranges';
console.log(array.length); // logs 3, for three elements.
console.log(Object.keys(array).length); // logs 4, for four elements plus '3.4' key.

array[-2] = 'Watermelon';
console.log(array.length); // logs 3. still only 3 elements
console.log(Object.keys(array).length); // Logs 4, with additional '-2' key added.
