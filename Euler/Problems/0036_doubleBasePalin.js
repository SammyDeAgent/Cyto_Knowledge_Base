// The decimal number, 585 = 1001001001 (binary), is palindromic in both bases.

// Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.

// (Please note that the palindromic number, in either base, may not include leading zeros.)

const common = require("./common");

const limit = 1000000;

let doublePalindrome = [];

for(let i = 0; i < limit; i++) {
  if(i.toString() == common.reverseString(i.toString()) && i.toString(2) == common.reverseString(i.toString(2))) {
    doublePalindrome.push(i);
  }
}

console.log(doublePalindrome);
console.log(doublePalindrome.reduce((a, b) => {return a + b}));