// #1 - Word Ladder
let ladder = ''; // missing ;

['head', 'heal', 'teal', 'tell', 'tall', 'tail'].forEach(word => {
  if (ladder !== '') {
    ladder += '-'
  }

  ladder += word
})

console.log(ladder)  // expect: head-heal-teal-tell-tall-tail

// The ommission of the semicolon on line 2 causes the array on line 4 to be parsed
// not as an array but as an accessor of '' on line 2.
