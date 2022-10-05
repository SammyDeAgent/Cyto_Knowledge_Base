// Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
// If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

// For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; 
// therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

// Evaluate the sum of all the amicable numbers under 10000.

const common = require("./common");

const limit = 10000;

function d(num) {
  let proper = common.properDivisor(num);
  if(proper.length < 2) return null;
  return proper.reduce((a, b) => {return a+b});
}

let amicable = [];

for(let i = 0; i < limit; i++) {
  if(!d(i)) continue;
  if(i == d(d(i)) && d(i) != i) amicable.push(i);
}

console.log(amicable);
console.log(amicable.reduce((a, b) => {return a + b}));