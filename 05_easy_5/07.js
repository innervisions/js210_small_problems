// #7 - Name Swapping
const swapName = name => name.split(' ').reverse().join(', ');

function swapNameFE(name) {
  const names = name.split(' ');
  const lastName = names[names.length - 1];
  const firstNames = names.slice(0, names.length - 1);
  return lastName + ', ' + firstNames.join(' ');
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
console.log(swapNameFE('Michael Paul Lesie Roberts'));
