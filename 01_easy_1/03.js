// #3 - How Big is the Room
const SQMETERS_TO_SQFEET = 10.7639;

let rlSync = require('readline-sync');
console.log('Enter the width of the room in in meters; ');
let width = Number(rlSync.prompt());
console.log('Enter the length of the room in in meters; ');
let length = Number(rlSync.prompt());
let squareMeters = length * width;
let squareFeet = squareMeters * SQMETERS_TO_SQFEET;
console.log(
  `The area of the room is ${squareMeters.toFixed(2)} square meters (${squareFeet.toFixed(2)} square feet).`
);
