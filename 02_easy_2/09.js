// #9 - Clean Up the Words
const cleanUp = (string) => string.replace(/[^A-Za-z0-9]+/g, ' ');

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "
