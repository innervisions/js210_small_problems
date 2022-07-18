// #6 - Seeing Stars
// Input: Odd integer n >= 7
// Output: No return value. Log 8-pointed star to console.
// Data structue: String to be logged.
// Algrorithm:
// 1) Construct middle of the star - n *'s.
// 2) Iterate downward by 2 beginning at n-1. Each row has i-2 total spaces.
//    Inner spaces start at 0 and increment by 1. Prepend and append each three star row.
// 3) Log the completed stars.
function star(n) {
  let star = '*'.repeat(n) + '\n';
  let innerSpaces = 0;
  let totalSpaces = n - 3;
  for (let idx = n - 1; idx > 0; idx -= 2) {
    let outerSpaces = (totalSpaces - innerSpaces * 2) / 2;
    let row = ' '.repeat(outerSpaces) + '*' + ' '.repeat(innerSpaces) + '*' + ' '.repeat(innerSpaces) + '*\n';
    star = row + star + row;
    innerSpaces += 1;
  }

  console.log(star);
}


star(7);
// logs
// *  *  *
//  * * *
//   ***
// *******
//   ***
//  * * *
// *  *  *

  star(9);
// logs
// *   *   *
//  *  *  *
//   * * *
//    ***
// *********
//    ***
//   * * *
//  *  *  *
// *   *   *
star(15);
star(21);
