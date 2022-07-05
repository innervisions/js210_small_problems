// #7 - Staggered Case (Part 2)
function staggeredCase(string) {
  let idx = -1;
  return string.split('').map(char => {
    if (/[a-z]/i.test(char)) idx += 1;
    if (idx % 2 === 0) return char.toUpperCase();
    return char.toLowerCase();
  }).join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"
