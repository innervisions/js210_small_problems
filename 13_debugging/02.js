// #2 - Reserved Keywords
const RESERVED_KEYWORDS = ['break', 'case', 'catch', 'class', 'const', 'continue',
  'debugger', 'default', 'delete', 'do', 'else', 'enum', 'export', 'extends', 'finally',
  'for', 'function', 'if', 'implements', 'import', 'in', 'instanceof', 'interface',
  'let', 'new', 'package', 'private', 'protected', 'public', 'return', 'static',
  'super', 'switch', 'this', 'throw', 'try', 'typeof', 'var', 'void', 'while',
  'with', 'yield'];

function isReserved(name) {
  let isReserved = false;
  RESERVED_KEYWORDS.forEach(reserved => {
    if (name === reserved) {
      // return true;
      isReserved = true;
    }
  });

  // return false;
  return isReserved;
}

console.log(isReserved('monkey')); // false
console.log(isReserved('patch'));  // false
console.log(isReserved('switch')); // should be: true
// The return true on line 12 returns from the function passed to forEach, not isReserved.
// We should use a boolean variable to store the return value.
