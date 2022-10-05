// The sequence of triangle numbers is generated by adding the natural numbers. 
// So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:

// 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

// Let us list the factors of the first seven triangle numbers:

//  1: 1
//  3: 1,3
//  6: 1,2,3,6
// 10: 1,2,5,10
// 15: 1,3,5,15
// 21: 1,3,7,21
// 28: 1,2,4,7,14,28
// We can see that 28 is the first triangle number to have over five divisors.

// What is the value of the first triangle number to have over five hundred divisors?

const common = require("./common");

const n = 500;

// Divisor Function - Finding the total number of divisors

function divisorFunction(num) {
  let init_num = num;
  let factors = 1;
  let power = 0;
  for(let i = 2; i * i <= init_num; ++i) {
    power = 0;
    while(num % i == 0) {
      num /= i;
      ++power;
    }
    factors *= (power + 1);
  }
  if(num > 1) {
    factors *= 2;
  }
  return factors
}

let i = 2;
let tri = 1;
let gen = 1;

while(true) {
  let divisors = divisorFunction(tri);
  if(divisors > n) break;

  // Construct triangle number
  tri += i;
  i++;
  gen++;
}

console.log(`${gen}th Triangle Number: ${tri}`);
console.log(common.primeFactor(tri));
console.log(common.Factor(tri));