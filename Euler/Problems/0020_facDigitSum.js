// n! means n × (n − 1) × ... × 3 × 2 × 1

// For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
// and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

// Find the sum of the digits in the number 100!

const common = require("./common");

const n = 100;

const parse = BigInt(common.factorial(n)).toString();

let sum = 0;

for(num of parse) {
  sum += parseInt(num);
}

console.log(parse);
console.log(sum);