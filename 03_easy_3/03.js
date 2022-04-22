// #3 - When Will I Retire?
const rlSync = require('readline-sync');


let currentAge = rlSync.question('What is your age?: ');
currentAge = Number.parseInt(currentAge, 10);
let retirementAge = rlSync.question('At what age would you like to retire?: ');
retirementAge = Number.parseInt(retirementAge, 10);
const currentYear = new Date().getFullYear();

console.log(`It's ${currentYear}. You will retire in ${retirementAge - currentAge + currentYear}.`);
console.log(`You only have ${retirementAge - currentAge} years to go!`);
