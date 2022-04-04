// #2 - Bannerizer
function logInBox(string) {
  let top = '+';
  let buffer = '|';
  for (let i = 0; i < string.length + 2; i++) {
    top += '-';
    buffer += ' ';
  }
  console.log(top + '+');
  console.log(buffer + '|');
  console.log(`| ${string} |`);
  console.log(buffer + '|');
  console.log(top + '+');
}


logInBox('To boldly go where no one has gone before.');
