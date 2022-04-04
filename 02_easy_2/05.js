// #5 - Right Triangles
function repeatChar(char, times) {
  let output = '';
  for (let i = 0; i < times; i++) {
    output += char;
  }
  return output;
}

function triangle(stars) {
  for (let i = 1; i <= stars; i++) {
    console.log(repeatChar(' ', stars - i) + repeatChar('*', i));
  }
}

triangle(5);
triangle(9);
triangle(12);
