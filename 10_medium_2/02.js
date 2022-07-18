// #3 - Triangle Sides
function triangle(sideA, sideB, sideC) {
  let sides = [sideA, sideB, sideC].sort((a, b) => a - b);
  if (sides[0] < 0 || sides[0] + sides[1] <= sides[2]) return 'invalid';
  if (sides[0] === sides[2]) return 'equilateral';
  if(sides[0] === sides[1] || sides[1] === sides[2]) return 'isosceles';
  return 'scalene';
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"
