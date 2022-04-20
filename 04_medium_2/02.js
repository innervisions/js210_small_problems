// #2 - Equal
const person = { name: 'Victor' };
const otherPerson = { name: 'Victor' };

console.log(person === otherPerson);    // false -- expected: true

// person === otherPerson returns false because === tests if two objects are the same.
// Person and otherPerson are different objects that happen to have the same value for the lone name property.
// We can test equality on this property directly.
console.log(person.name === otherPerson.name);
