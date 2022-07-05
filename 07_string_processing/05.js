// #5 - Swap Case
function swapCase(string) {
  return string.split('').map(char => {
    return /[A-Z]/.test(char) ? char.toLowerCase() : char.toUpperCase();
  }).join('');
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"
