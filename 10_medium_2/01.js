// #1 - Letter Percentage Ratio
function letterPercentages(string) {
  let lowercaseLetters = string.match(/[a-z]/g) || [];
  let uppercaseLetters = string.match(/[A-Z]/g) || [];
  let otherChars = string.match(/[^A-Za-z]/g) || [];

  return {
    lowercase: ((lowercaseLetters.length / string.length) * 100).toFixed(2),
    uppercase: ((uppercaseLetters.length / string.length) * 100).toFixed(2),
    neither: ((otherChars.length / string.length) * 100).toFixed(2)
  };
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
