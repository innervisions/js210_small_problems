// #2 - Diamonds
// Input: Number of rows (n).
// Output: No return value. Log diamond with n-rows to console.
// Algorithm:
// 1) Build the "middle row". n *'s followed by \n.
// 2) Iterate from n-2 through 1, building each row to be prepended and appended to the current diamond.
// 3) Log the diamond.
function diamond(n) {
  let diamond = '*'.repeat(n) + '\n';

  for (let stars = n - 2; stars >= 1; stars -= 2) {
    let row = '*'.repeat(stars);
    let spaces = ' '.repeat((n - stars) / 2);
    row = spaces + row + spaces + '\n';
    diamond = row + diamond + row;
  }

  console.log(diamond);
}

diamond(1);
// logs
// *

diamond(3);
// logs
//  *
// ***
//  *

diamond(9);
// logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

diamond (15);
diamond(35);
